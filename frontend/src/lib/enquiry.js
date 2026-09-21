// One shared destination for all enquiry links. No backend or API key required.
export const whatsappUrl = (number, message = '') => {
  const value = String(number || '').trim();
  if (!/^\+?[1-9][\d ()-]*$/.test(value)) return '';
  const digits = value.replace(/\D/g, '');
  if (digits.length < 7 || digits.length > 15) return '';
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
};

export const enquiryMessage = (form) => [
  'MYSTIC TATTVA — SESSION ENQUIRY', '',
  `Name: ${form.name.trim()}`,
  `Phone / WhatsApp: ${form.phone.trim()}`,
  ...(form.email.trim() ? [`Email: ${form.email.trim()}`] : []),
  `Service: ${form.service}`,
  `Preferred date: ${form.date || 'Flexible'}`,
  `Preferred time: ${form.time ? `${form.time} (IST)` : 'Flexible'}`, '',
  'Message:', form.message.trim() || 'I would love to know more.', '',
  'Please confirm availability. This enquiry is not a confirmed booking.',
].join('\n');
