// Purple Haze Smoke Shop - Placeholder Content
// Update these values before going live

export const SITE_CONFIG = {
  name: "Purple Haze Smoke Shop",
  tagline: "Premium tobacco, vapes & accessories in Brunswick, Ohio",
  phone: "(216) 555-HAZE",
  email: "info@purplehazesmokeshop.com",
  address: "123 Main St, Brunswick, OH 44212",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.0!2d-81.8412!3d41.2381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE0JzE3LjIiTiA4McKwNTAnMjguMyJX!5e0!3m2!1sen!2sus!4v1234567890",
  googleMapsLink: "https://maps.google.com/?q=Brunswick+OH+smoke+shop",
};

export const BUSINESS_HOURS = {
  weekday: {
    days: "Monday - Saturday",
    hours: "10:00 AM - 9:00 PM",
  },
  weekend: {
    days: "Sunday",
    hours: "12:00 PM - 7:00 PM",
  },
};

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/purplehazesmokeshop",
  facebook: "https://facebook.com/purplehazesmokeshop",
  tiktok: "https://tiktok.com/@purplehazesmokeshop",
};

export const PRODUCT_CATEGORIES = [
  {
    id: "cigars",
    title: "Cigars & Tobacco",
    description: "Premium cigars, pipe tobacco, and rolling papers from top brands",
    icon: "Flame",
  },
  {
    id: "vapes",
    title: "Vapes & Mods",
    description: "Latest vape devices, e-liquids, and accessories for every experience level",
    icon: "Zap",
  },
  {
    id: "accessories",
    title: "Accessories & Glass",
    description: "High-quality glass, grinders, lighters, and smoking accessories",
    icon: "Package",
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
    name: "Mike R.",
    rating: 5,
    text: "Best smoke shop in Brunswick! Staff is super knowledgeable and the selection is amazing. Highly recommend!",
  },
  {
    id: 2,
    name: "Sarah T.",
    rating: 5,
    text: "Great prices and excellent customer service. They helped me find exactly what I was looking for.",
  },
  {
    id: 3,
    name: "James K.",
    rating: 5,
    text: "Always stocked with the latest products. My go-to place for all vaping needs!",
  },
];

export const FAQ_ITEMS = [
  {
    id: "age",
    question: "What is your age verification policy?",
    answer: "You must be 21 years or older to purchase tobacco products in Ohio. We require valid government-issued ID for all purchases. No exceptions.",
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
    answer: `We're located at ${SITE_CONFIG.address}. Open Monday-Saturday 10am-9pm and Sunday 12pm-7pm. Call us at ${SITE_CONFIG.phone} for any questions!`,
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Hours", href: "#hours" },
  { label: "Contact", href: "#contact" },
];
