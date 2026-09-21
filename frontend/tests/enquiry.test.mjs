import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import test from 'node:test';
const source = await readFile(new URL('../src/lib/enquiry.js', import.meta.url));
const { whatsappUrl, enquiryMessage } = await import(`data:text/javascript;base64,${source.toString('base64')}`);
const form = { name: ' Test & नाम ', phone: '+1 202 555 0123', email: '', service: 'Numerology', date: '', time: '', message: 'A&B? #1 + 2\nनमस्ते' };
test('unconfigured or invalid destination never creates a WhatsApp link', () => {
  for (const number of ['', null, 'abc', '+00', '123', '+91<script>1234567890']) assert.equal(whatsappUrl(number), '');
});
test('country code and enquiry survive URL encoding, including Unicode and newlines', () => {
  // Reserved fictional number; this test performs no network requests.
  const message = enquiryMessage(form);
  const url = new URL(whatsappUrl('+1 (202) 555-0123', message));
  assert.equal(url.pathname, '/12025550123');
  assert.equal(url.searchParams.get('text'), message);
  assert.ok(message.includes('Name: Test & नाम'));
});
test('optional details and booking status are communicated accurately', () => {
  const message = enquiryMessage(form);
  assert.ok(!message.includes('Email:'));
  assert.ok(message.includes('Preferred date: Flexible'));
  assert.ok(message.includes('not a confirmed booking'));
  const withDetails = enquiryMessage({ ...form, email: 'test@example.com', time: '18:30', date: '2026-10-01' });
  assert.ok(withDetails.includes('18:30 (IST)'));
  assert.ok(withDetails.includes('2026-10-01'));
  assert.ok(withDetails.includes('Email: test@example.com'));
});
