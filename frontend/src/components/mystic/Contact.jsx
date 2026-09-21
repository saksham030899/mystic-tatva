import { useEffect, useState } from 'react';
import { MessageCircle, LockKeyhole, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Chapter, Reveal, Star } from './Shared';

const emptyForm = { name: '', phone: '', email: '', service: '', date: '', time: '', message: '' };
const options = ['Tarot Reading', 'Numerology', 'Life Coaching', 'Signature Guidance', 'Course Enquiry', 'Shop Enquiry', 'Not sure yet — help me choose'];
const today = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };

export const Contact = ({ selection, onDialog }) => {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState('');
  useEffect(() => { if (selection) { setForm(prev => ({ ...prev, service: selection.service || prev.service, message: selection.message || prev.message })); setError(''); } }, [selection]);
  const update = (e) => { setForm({ ...form, [e.target.name]: e.target.value }); if (error) setError(''); };
  const submit = (e) => {
    e.preventDefault();
    const digits = form.phone.replace(/\D/g, '');
    if (!form.name.trim() || !/^[+\d ()-]+$/.test(form.phone) || digits.length < 7 || digits.length > 15) { setError('Please enter your name and a valid phone number with 7–15 digits.'); return; }
    if (form.date && form.date < today()) { setError('Please choose today or a future date.'); return; }
    const text = `MYSTIC TATTVA — SESSION ENQUIRY\n\nName: ${form.name.trim()}\nPhone / WhatsApp: ${form.phone.trim()}\nEmail: ${form.email.trim()}\nService: ${form.service}\nPreferred date: ${form.date || 'Flexible'}\nPreferred time: ${form.time ? `${form.time} (IST)` : 'Flexible'}\n\nMessage:\n${form.message.trim() || 'I would love to know more.'}\n\nThis is an enquiry draft, not a confirmed booking.`;
    onDialog({ type: 'enquiry', text });
  };
  return <section id="contact" className="contact section-pad" aria-labelledby="contact-title"><div className="page-width contact-grid">
    <Reveal className="contact-copy"><Chapter number="07" light>YOUR NEXT CHAPTER</Chapter><h2 id="contact-title" className="display-title" data-testid="contact-title">It begins with<br/><em>a conversation.</em></h2><p data-testid="contact-description">You don’t have to have it all figured out.<br/>Share what’s on your mind, and take the first step towards a little more clarity.</p><div className="contact-note" data-testid="contact-process"><Star size={23}/><p>A personal conversation.<br/>A thoughtful approach.<br/><span>Guidance, at your pace.</span></p></div><Button className="whatsapp-button" data-testid="whatsapp-placeholder" onClick={() => onDialog({ type: 'whatsapp' })}><MessageCircle size={20}/><span>Let’s connect on WhatsApp<small>CONTACT DETAILS COMING SOON</small></span><ArrowUpRight size={19}/></Button><p className="contact-privacy" data-testid="contact-privacy"><LockKeyhole size={14}/>Your form stays in this browser until you choose to copy or download it.</p></Reveal>
    <Reveal className="enquiry-form-wrap" delay={0.12}><div className="form-heading"><h3 data-testid="enquiry-title">Make space for yourself.</h3><span data-testid="enquiry-subtitle">Tell us a little about your journey.</span></div><form onSubmit={submit} data-testid="enquiry-form">
      <div className="form-grid">
        <div className="form-field"><label htmlFor="name">Your name <span>*</span></label><input id="name" name="name" value={form.name} onChange={update} required maxLength={100} autoComplete="name" placeholder="What should we call you?" data-testid="enquiry-name"/></div>
        <div className="form-field"><label htmlFor="phone">Phone / WhatsApp <span>*</span></label><input id="phone" name="phone" type="tel" value={form.phone} onChange={update} required autoComplete="tel" maxLength={24} placeholder="+91 Your number" data-testid="enquiry-phone"/></div>
        <div className="form-field"><label htmlFor="email">Email address <span>*</span></label><input id="email" name="email" type="email" value={form.email} onChange={update} required autoComplete="email" maxLength={254} placeholder="you@example.com" data-testid="enquiry-email"/></div>
        <div className="form-field"><label htmlFor="service">I’m interested in <span>*</span></label><select id="service" name="service" required value={form.service} onChange={update} data-testid="enquiry-service"><option value="" disabled>Select your guidance</option>{options.map(o => <option key={o} value={o}>{o}</option>)}</select></div>
        <div className="form-field"><label htmlFor="date">Preferred date <small>(optional)</small></label><input id="date" name="date" type="date" min={today()} value={form.date} onChange={update} data-testid="enquiry-date"/></div>
        <div className="form-field"><label htmlFor="time">Preferred time <small>(IST · optional)</small></label><input id="time" name="time" type="time" value={form.time} onChange={update} data-testid="enquiry-time"/></div>
        <div className="form-field form-wide"><label htmlFor="message">What’s on your mind? <small>(optional)</small></label><textarea id="message" name="message" rows={3} maxLength={3000} value={form.message} onChange={update} placeholder="Share as much or as little as you feel comfortable with…" data-testid="enquiry-message"/></div>
      </div>
      {error && <p role="alert" className="form-error" data-testid="enquiry-error">{error}</p>}
      <Button className="action action-gold form-submit" type="submit" data-testid="enquiry-submit">Prepare my enquiry<ArrowUpRight size={18}/></Button>
      <p className="form-disclosure" data-testid="enquiry-disclosure">A gentle first step, not a confirmed booking. This prepares a message for you to copy; nothing is sent or stored. Direct contact details will be added soon.</p>
    </form></Reveal>
  </div></section>;
};