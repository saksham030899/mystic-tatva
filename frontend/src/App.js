import { useCallback, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { MotionConfig, useReducedMotion } from 'framer-motion';
import { Toaster } from './components/ui/sonner';
import { Header, Hero, Marquee } from './components/mystic/HeaderHero';
import { Services, Signature } from './components/mystic/ServicesSignature';
import { About, Courses } from './components/mystic/AboutCourses';
import { Shop } from './components/mystic/Shop';
import { Contact } from './components/mystic/Contact';
import { Footer, SiteDialog, Testimonials } from './components/mystic/FooterDialog';
import 'lenis/dist/lenis.css';
import './App.css';
import './readability.css';

export default function App() {
  const [selection, setSelection] = useState(null);
  const [dialog, setDialog] = useState(null);
  const lenis = useRef(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const smooth = new Lenis({ autoRaf: true, duration: 1.05, anchors: { offset: -96 }, prevent: (node) => node.closest?.('[role="dialog"]') });
    lenis.current = smooth;
    return () => { smooth.destroy(); lenis.current = null; };
  }, [reduced]);
  useEffect(() => { if (dialog) lenis.current?.stop(); else lenis.current?.start(); }, [dialog]);
  const onBook = useCallback((service = '', message = '') => {
    setSelection({ service, message, at: Date.now() });
    const target = document.getElementById('contact');
    const focus = () => document.getElementById('name')?.focus({ preventScroll: true });
    if (lenis.current) lenis.current.scrollTo(target, { offset: -90, onComplete: focus });
    else { target?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' }); focus(); }
  }, [reduced]);
  return <MotionConfig reducedMotion="user"><a href="#main" className="skip-link" data-testid="skip-to-content">Skip to content</a><Header onBook={onBook}/><main id="main"><Hero onBook={onBook}/><Marquee/><Services onBook={onBook}/><Signature onBook={onBook}/><About onBook={onBook}/><Courses onBook={onBook}/><Shop onBook={onBook}/><Testimonials/><Contact selection={selection} onDialog={setDialog}/></main><Footer onDialog={setDialog}/><SiteDialog dialog={dialog} onClose={() => setDialog(null)}/><Toaster theme="light" position="bottom-right"/></MotionConfig>;
}