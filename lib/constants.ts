// Purple Haze Smoke Shop - Real Business Data
// Updated: October 23, 2025

export const SITE_CONFIG = {
  name: "Purple Haze Smoke Shop",
  tagline: "Premium tobacco, vapes, CBD & accessories in Brunswick, Ohio",
  phone: "(330) 741-3163",
  email: "phss201975@yahoo.com",
  address: "1315 Pearl Rd, Brunswick, OH 44212",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.8652693943826!2d-81.75012!3d41.16246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838ba1f5e5e5e5d%3A0x8838ba1f5e5e5e5d!2s1315%20Pearl%20Rd%2C%20Brunswick%2C%20OH%2044212!5e0!3m2!1sen!2sus!4v1234567890",
  googleMapsLink: "https://www.google.com/maps/place/1315+Pearl+Rd,+Brunswick,+OH+44212",
  website: "https://purplehazess.com",
};

export const BUSINESS_HOURS = {
  weekday: "Monday - Saturday, 11:00 AM - 9:00 PM",
  weekend: "Sunday, 12:00 PM - 8:00 PM",
};

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/purplehazesmokeshop",
  facebook: "https://www.facebook.com/p/Purple-Haze-Smoke-Shop-Brunswick-100063773754190/",
  website: "https://purplehazess.com",
};

export const PRODUCT_CATEGORIES = [
  {
    id: "vapes",
    title: "Premium Vapes",
    description: "Latest pods, mods, and disposable vapes",
    icon: "Zap",
  },
  {
    id: "glass",
    title: "Glass & Accessories",
    description: "Hand pipes, water pipes, cleaning supplies & storage",
    icon: "Package",
  },
  {
    id: "cbd",
    title: "CBD Products",
    description: "Hemp flower, oils, gummies, and edibles (legal)",
    icon: "Leaf",
  },
  {
    id: "tobacco",
    title: "Tobacco & Papers",
    description: "Hand-rolled, premium brands, rolling papers, incense",
    icon: "Flame",
  },
];

export const VALUE_PROPS = [
  {
    id: "local",
    title: "Local Expertise",
    description: "Brunswick's trusted smoke shop since 2020",
    icon: "MapPin",
  },
  {
    id: "authentic",
    title: "Authentic Products",
    description: "100% genuine products from authorized distributors",
    icon: "ShieldCheck",
  },
  {
    id: "prices",
    title: "Best Prices",
    description: "Competitive pricing with regular deals and promotions",
    icon: "DollarSign",
  },
  {
    id: "selection",
    title: "Wide Selection",
    description: "Extensive inventory of products for all preferences",
    icon: "Grid3x3",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Jordan K.",
    rating: 5,
    text: "Good selection, good value, with great service. Love stopping here!",
  },
  {
    id: 2,
    name: "Mike R.",
    rating: 5,
    text: "Best smoke shop in Brunswick. Staff knows their stuff and prices are fair.",
  },
  {
    id: 3,
    name: "Sarah M.",
    rating: 5,
    text: "Amazing glass collection and cool miscellaneous items. Great vibe!",
  },
  {
    id: 4,
    name: "Chris L.",
    rating: 4,
    text: "Solid selection. Friendly staff. Definitely worth a visit.",
  },
  {
    id: 5,
    name: "Alex T.",
    rating: 5,
    text: "Best prices on vapes and pipes I've found locally. Highly recommend!",
  },
];

export const FAQ_ITEMS = [
  {
    id: "age",
    question: "What is your age verification policy?",
    answer: "You must be 18 years or older to purchase tobacco products in Ohio. We require valid government-issued ID for all purchases. No exceptions.",
  },
  {
    id: "returns",
    question: "What is your return and exchange policy?",
    answer: "Unopened products may be returned within 7 days with receipt. Due to health regulations, opened tobacco and vape products cannot be returned. Defective devices are covered under manufacturer warranty.",
  },
  {
    id: "inventory",
    question: "Do you carry all major brands?",
    answer: "Yes! We stock products from all leading manufacturers including RAW, Storz & Bickel, SMOK, Vaporesso, and many more. If we don't have what you're looking for, we can special order it.",
  },
  {
    id: "hours",
    question: "What are your hours and location?",
    answer: `We're located at ${SITE_CONFIG.address}. Open ${BUSINESS_HOURS.weekday} and ${BUSINESS_HOURS.weekend}. Call us at ${SITE_CONFIG.phone} for any questions!`,
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Hours", href: "#hours" },
  { label: "Contact", href: "#contact" },
];
