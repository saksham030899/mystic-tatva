// Edit brand copy, packages, course previews and catalog items here.
// Contact destinations intentionally remain empty until Bhavana supplies them.
export const brand = {
  name: 'Mystic Tattva',
  tagline: 'Find Your Path, Live with Intent.',
  founder: 'Bhavana',
  email: '',
  whatsapp: '',
  heroImage: '/images/mystic-hero.webp',
  about: 'I’m Bhavana, a Tarot Reader, Numerologist and Life Coach. I created Mystic Tattva as a space to pause, feel heard, and reconnect with your own inner wisdom. Together, we explore what’s on your mind with empathy, an open heart, and grounded, practical guidance.',
};

export const navigation = [
  ['Home', 'home'], ['About', 'about'], ['Services', 'services'],
  ['Signature Guidance', 'signature'], ['Courses', 'courses'], ['Shop', 'shop'], ['Contact', 'contact'],
];

export const services = [
  {
    id: 'tarot', number: '01', name: 'Tarot Reading', subtitle: 'A fresh perspective on your present.',
    description: 'Make space for reflection. Explore your questions, uncover possibilities, and move forward with a little more clarity.',
    packages: [
      { name: 'Quick Question', price: 299 }, { name: '30 Minutes', price: 799 },
      { name: '60 Minutes Detailed Reading', price: 1499 }, { name: 'Monthly Guidance', price: 3999 },
    ],
    note: 'Monthly guidance: 4 hours + a complimentary 30 minutes, usable within 30 days.',
  },
  {
    id: 'numerology', number: '02', name: 'Numerology', subtitle: 'Discover the patterns that make you, you.',
    description: 'Explore the symbolism of your numbers as a starting point for self-discovery, deeper understanding, and intentional choices.',
    packages: [], // Add confirmed packages as { name, price } when ready.
    note: 'Every journey is personal. Enquire to explore the right session for you.',
  },
  {
    id: 'coaching', number: '03', name: 'Life Coaching', subtitle: 'Turn your reflections into next steps.',
    description: 'A supportive space to untangle your thoughts, reconnect with what matters, and take practical steps towards your goals.',
    packages: [
      { name: '30-Minute Clarity Session', price: 799 }, { name: '60-Minute Deep Guidance', price: 1499 },
      { name: 'Monthly Guidance', price: 3999 },
    ],
    note: 'Monthly guidance: 4 hours + a complimentary 30 minutes, valid for 30 days.',
  },
];

export const courses = [
  { id: 'foundation', roman: 'I', level: 'BEGIN YOUR JOURNEY', name: 'Tarot Foundation Course', description: 'An introduction to the cards, their symbolism, and your intuitive voice.' },
  { id: 'intermediate', roman: 'II', level: 'DEEPEN YOUR PRACTICE', name: 'Intermediate Tarot', description: 'Explore connections, thoughtful spreads, and the stories between the cards.' },
  { id: 'advanced', roman: 'III', level: 'EXPAND YOUR PERSPECTIVE', name: 'Advanced Tarot', description: 'Make space for nuance, deeper interpretation, and reflective practice.' },
  { id: 'professional', roman: 'IV', level: 'READ WITH PURPOSE', name: 'Professional Tarot Practice', description: 'Explore ethical readings, holding space, and a considered professional practice.' },
];

export const products = [
  { id: 'rose-quartz', name: 'Rose Quartz', image: '/images/rose-quartz.webp', intention: 'A MOMENT OF SOFTNESS', description: 'Soft pink hues. A beautiful reminder to make room for self-kindness.', price: null },
  { id: 'amethyst', name: 'Amethyst', image: '/images/amethyst.webp', intention: 'PAUSE & REFLECT', description: 'Rich violet facets for a thoughtful corner of your everyday space.', price: null },
  { id: 'citrine', name: 'Citrine', image: '/images/citrine.webp', intention: 'A LITTLE SUNSHINE', description: 'Warm golden tones that bring a sunlit touch to your collection.', price: null },
  { id: 'black-tourmaline', name: 'Black Tourmaline', image: '/images/black-tourmaline.webp', intention: 'COME BACK TO EARTH', description: 'Deep charcoal textures, chosen for their striking, natural character.', price: null },
  { id: 'clear-quartz', name: 'Clear Quartz', image: '/images/clear-quartz.webp', intention: 'SPACE FOR INTENTION', description: 'Light-catching natural beauty for your desk, shelf, or personal ritual.', price: null },
];

export const disclaimer = 'Tarot, numerology and spiritual guidance are for personal insight and guidance and are not substitutes for professional medical, legal, financial or mental-health advice.';
export const currency = (amount) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);