import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { Menu, ArrowDown, LockKeyhole, Heart, Compass } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '../ui/dialog';
import { brand, navigation } from '../../content/site';
import { Action, Star, SunMark } from './Shared';

export const Header = ({ onBook }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const listener = () => setScrolled(window.scrollY > 30); window.addEventListener('scroll', listener, { passive: true }); return () => window.removeEventListener('scroll', listener); }, []);
  return <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
    <div className="header-inner">
      <a className="brand" href="#home" aria-label="Mystic Tattva home" data-testid="header-brand"><SunMark size={46}/><span>MYSTIC TATTVA<small>FIND YOUR PATH. LIVE WITH INTENT.</small></span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(([label, id]) => <a data-testid={`nav-${id}`} key={id} href={`#${id}`}>{label}</a>)}</nav>
      <Action onClick={() => onBook()} testId="header-book" className="header-book">Book a Session</Action>
      <button className="mobile-toggle" aria-label="Open navigation" aria-expanded={open} data-testid="mobile-menu-open" onClick={() => setOpen(true)}><Menu size={25}/></button>
    </div>
    <Dialog open={open} onOpenChange={setOpen}><DialogContent className="mobile-menu" data-testid="mobile-menu"><DialogTitle data-testid="mobile-menu-title">Mystic Tattva</DialogTitle><DialogDescription className="sr-only">Explore our guidance, courses and shop.</DialogDescription><nav aria-label="Mobile navigation">{navigation.map(([label, id], i) => <a key={id} data-testid={`mobile-nav-${id}`} href={`#${id}`} onClick={() => setOpen(false)}><small>0{i + 1}</small>{label}<Star size={18}/></a>)}</nav><Action testId="mobile-book" onClick={() => { setOpen(false); onBook(); }}>Book a Session</Action></DialogContent></Dialog>
  </header>;
};

export const Hero = ({ onBook }) => {
  const reduced = useReducedMotion();
  const mouseX = useMotionValue(0), mouseY = useMotionValue(0);
  const rotateX = useSpring(mouseY, { stiffness: 55, damping: 22 });
  const rotateY = useSpring(mouseX, { stiffness: 55, damping: 22 });
  const reveal = (delay) => ({ initial: reduced ? false : { y: '110%' }, animate: { y: 0 }, transition: { duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] } });
  return <section id="home" className="hero" aria-labelledby="hero-title">
    <div className="hero-noise" aria-hidden="true"/>
    <div className="hero-grid page-width">
      <div className="hero-copy">
        <motion.div initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 1 }} className="eyebrow hero-eyebrow" data-testid="hero-eyebrow"><Star size={20}/> ANCIENT WISDOM. PERSONAL GUIDANCE.</motion.div>
        <h1 id="hero-title" data-testid="hero-title"><span className="line-mask"><motion.span {...reveal(0.15)}>Mystic Tattva</motion.span></span></h1>
        <p className="hero-tagline" data-testid="hero-tagline"><span className="line-mask"><motion.span {...reveal(0.3)}>Find Your Path,</motion.span></span><span className="line-mask"><motion.span {...reveal(0.43)}><em>Live with Intent.</em></motion.span></span></p>
        <motion.div initial={reduced ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.65 }}>
          <p className="hero-description" data-testid="hero-description">A little clarity. A deeper connection. A way forward.<br className="desktop-break"/> Explore Tarot, Numerology and Life Coaching with Bhavana—guidance that brings you back to yourself.</p>
          <div className="hero-actions"><Action testId="hero-book" onClick={() => onBook()}>Book a Session</Action><Action href="#services" variant="outline" testId="hero-explore">Explore Services</Action></div>
          <div className="hero-values" data-testid="hero-values"><span><LockKeyhole size={13}/> Confidential</span><i/><span><Heart size={13}/> Non-judgmental</span><i/><span><Compass size={13}/> Personal to you</span></div>
        </motion.div>
      </div>
      <motion.div className="hero-art" initial={reduced ? false : { opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.4, delay: 0.25 }} onPointerMove={(e) => { if (reduced || e.pointerType !== 'mouse') return; const r = e.currentTarget.getBoundingClientRect(); mouseX.set(((e.clientX - r.left) / r.width - 0.5) * 7); mouseY.set(-((e.clientY - r.top) / r.height - 0.5) * 5); }} onPointerLeave={() => { mouseX.set(0); mouseY.set(0); }}>
        <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
        <Star className="hero-star star-one" size={49}/><Star className="hero-star star-two" size={25}/><Star className="hero-star star-three" size={15}/>
        <motion.div className="hero-photo-frame" style={reduced ? {} : { rotateX, rotateY }}><img src={brand.heroImage} alt="Celestial tarot cards, rose quartz and warm candlelight on indigo velvet" fetchPriority="high" width="1000" height="671" data-testid="hero-image"/><div className="photo-inner-border"/></motion.div>
        <div className="celestial-seal" aria-hidden="true"><svg viewBox="0 0 120 120"><defs><path id="seal-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"/></defs><text><textPath href="#seal-circle" startOffset="0%">CLARITY · CONNECTION · INTENTION · </textPath></text></svg><SunMark size={52}/></div>
        <span className="image-caption" data-testid="hero-image-caption"><span/> YOUR NEXT CHAPTER STARTS WITHIN <span/></span>
      </motion.div>
    </div>
    <div className="hero-bottom page-width"><a href="#services" data-testid="discover-scroll"><span className="scroll-circle"><ArrowDown size={14}/></span> A MORE INTENTIONAL YOU</a><span data-testid="hero-founder">GUIDED BY BHAVANA <span className="tiny-star">✦</span> ROOTED IN YOU</span></div>
  </section>;
};

export const Marquee = () => <div className="marquee" aria-label="Self-discovery. Clarity. Connection. Intentional living." data-testid="editorial-marquee"><div className="marquee-track" aria-hidden="true">{[0, 1, 2, 3].map(i => <span className="marquee-group" key={i}>SELF-DISCOVERY <Star size={20}/> CLARITY <Star size={20}/> CONNECTION <Star size={20}/> INTENTIONAL LIVING <Star size={20}/></span>)}</div></div>;