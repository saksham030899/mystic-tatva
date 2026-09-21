# Mystic Tattva — launch-critical update

Status: source changes prepared; not deployed or fully browser-verified.

## Changes
- Contact form now uses “Continue on WhatsApp”. With a configured number, valid submissions open wa.me with a safely encoded enquiry; the visitor reviews and sends it in WhatsApp. No booking is automatically confirmed.
- One shared destination controls the form, direct contact button and footer WhatsApp link.
- Business WhatsApp is configured as +91 9336869201, confirmed by the owner. The copy/download fallback remains available only if the configured destination is later removed or becomes invalid.
- Email is optional; name, phone and service remain required. Existing future-date validation remains.
- Changing the service clears the previous package message, preventing stale enquiries.
- Numerology retains enquiry-only pricing and gains concise explanatory content.
- Shop button wording is “Enquire Now”; courses and products remain previews.
- Form inputs are 16px, mobile form fields stack in one column, tablet service/course grids use two columns, and narrow-phone product/course cards stack. Touch targets are enlarged in the affected areas.
- Contact and privacy descriptions reflect the WhatsApp handoff.

## Confirm before launch
`brand.whatsapp` in `frontend/src/content/site.js` is now +91 9336869201. The form, direct contact button and footer share this value and resolve to https://wa.me/919336869201. No email address or social profile has been invented.

A valid number format does not prove that an account is registered with WhatsApp. Browser verification of the WhatsApp destination remains pending. No test messages have been sent.

## Preserved
Original indigo/ivory/gold palette, fonts, imagery and base stylesheet; Hero and About; all existing prices; the entire Signature Guidance section (₹2,499 / 90 minutes); existing course preview content and testimonial placeholders. No dependencies, backend, authentication, checkout, inventory, LMS or payment system added. Existing backend files are untouched and are not used by this enquiry flow.

## Verification completed
- Parsed all 62 JavaScript/JSX source files successfully.
- Three Node tests pass: invalid/missing destination handling; Unicode/special-character/newline URL encoding; optional enquiry details and unconfirmed-booking wording.
- Compared modified source against the original ZIP to confirm unchanged prices, Signature section, base stylesheet, Hero, About/Courses and existing dependency files.
- Run the enquiry tests from `frontend` with `node --test tests/enquiry.test.mjs`.

## Verification still required
The ZIP contains no installed dependencies. Package registry access timed out and no browser executable is installed in the editing environment. A production build, full-app rendering and browser interaction tests could not be completed. Responsive CSS changes are implemented but not visually verified. No deployment was made.

In the original Emergent environment, use the existing frontend setup and build workflow. Check 360, 390, 768, 1024 and desktop widths for navigation, heading overflow, grids, form readability, touch targets and footer wrapping. Check all package/course/product enquiry selections, invalid form inputs, changing selections, blank optional fields, the real WhatsApp recipient, and the final message. Recheck keyboard navigation and mobile menu focus. No messages have been sent during this update.
