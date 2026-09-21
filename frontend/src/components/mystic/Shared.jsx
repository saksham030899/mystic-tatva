import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/button';

export const Reveal = ({ children, className = '', delay = 0, ...props }) => {
  const reduced = useReducedMotion();
  return <motion.div initial={reduced ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }} className={className} {...props}>{children}</motion.div>;
};

export const Star = ({ className = '', size = 24 }) => <svg aria-hidden="true" className={className} width={size} height={size} viewBox="0 0 40 40" fill="none"><path d="M20 1C20 15 15 20 1 20C15 20 20 25 20 39C20 25 25 20 39 20C25 20 20 15 20 1Z" stroke="currentColor" strokeWidth="1"/><path d="M20 10V30M10 20H30" stroke="currentColor" strokeWidth=".5"/></svg>;

export const SunMark = ({ className = '', size = 52 }) => <svg aria-hidden="true" className={className} width={size} height={size} viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1"/><circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth=".5"/>{Array.from({ length: 24 }, (_, i) => <path key={i} d={`M50 ${i % 2 === 0 ? 5 : 12}V25`} stroke="currentColor" strokeWidth=".9" transform={`rotate(${i * 15} 50 50)`}/>)}<path d="M50 34C50 44 44 50 34 50C44 50 50 56 50 66C50 56 56 50 66 50C56 50 50 44 50 34Z" stroke="currentColor" strokeWidth=".8"/></svg>;

export const Chapter = ({ number, children, light = false }) => <div data-testid={`chapter-${number}`} className={`chapter ${light ? 'chapter-light' : ''}`}><span>{number} /</span><span>{children}</span><span className="chapter-line" /></div>;

export const Action = ({ children, onClick, href, variant = 'gold', testId, className = '', ...props }) => <Button asChild={Boolean(href)} onClick={onClick} data-testid={testId} className={`action action-${variant} ${className}`} {...props}>{href ? <a href={href}>{children}<ArrowUpRight size={17} aria-hidden="true" /></a> : <>{children}<ArrowUpRight size={17} aria-hidden="true" /></>}</Button>;

export const ServiceSymbol = ({ type }) => <svg aria-hidden="true" viewBox="0 0 100 100" fill="none" className="service-symbol">
  {type === 'tarot' ? <><rect x="24" y="15" width="46" height="67" rx="3" stroke="currentColor" transform="rotate(-13 47 48)"/><rect x="32" y="16" width="46" height="67" rx="3" fill="var(--paper)" stroke="currentColor" transform="rotate(9 55 49)"/><circle cx="56" cy="47" r="12" stroke="currentColor"/><path d="M56 28V32M56 62V66M37 47H41M71 47H75M43 34L46 37M66 57L69 60M69 34L66 37M46 57L43 60" stroke="currentColor"/></> : type === 'numerology' ? <><circle cx="50" cy="50" r="34" stroke="currentColor"/><circle cx="50" cy="50" r="25" stroke="currentColor" strokeDasharray="1 6"/><path d="M50 13L82 69H18L50 13ZM50 87L18 31H82L50 87Z" stroke="currentColor" strokeWidth=".7"/><circle cx="50" cy="50" r="9" fill="var(--paper)" stroke="currentColor"/></> : <><circle cx="50" cy="38" r="22" stroke="currentColor"/><path d="M50 87V37M50 75C30 75 25 57 25 57C44 56 50 68 50 75ZM50 64C70 64 75 46 75 46C56 45 50 57 50 64Z" fill="var(--paper)" stroke="currentColor"/><path d="M34 86H66M50 5V10M16 38H10M90 38H84M25 13L29 17M75 13L71 17" stroke="currentColor"/></>}
</svg>;