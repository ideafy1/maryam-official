/**
 * Content configuration for The Maryam gift store landing page
 * Edit this file to customize all text, links, and settings
 */

export type InstagramMode = "embed" | "api";

export const siteConfig = {
  name: "The Maryam",
  tagline: "Gifts & Hampers",
  domain: "themaryam.in",
  description: "Discover exquisite gift hampers and curated collections perfect for every occasion. Premium quality, thoughtfully crafted.",
  instagram: "@themaryam.in",
  instagramUrl: "https://www.instagram.com/themaryam.in",
  heroImage: "/images/hero.svg",
  ogImage: "/images/og.svg",

  // Instagram integration mode: 'embed' | 'api'
  // 'embed': shows placeholder grid with link to Instagram
  // 'api': fetches posts via Instagram Graph API (requires INSTAGRAM_TOKEN env var)
  instagramMode: "embed" as InstagramMode,
  
  // Google Analytics
  gaId: process.env.NEXT_PUBLIC_GA_ID || "",
  
  // Contact & social
  email: "hello@themaryam.in",
  phone: "+91 XXXX XXXXXX",
  whatsapp: "+91XXXXXXXXXX",
};

export const hero = {
  headline: "Gifts That Speak From The Heart",
  subheadline: "Thoughtfully curated hampers and gift collections for every special moment",
  ctaPrimary: {
    text: "Explore Collections",
    href: "#collections",
  },
  ctaSecondary: {
    text: "Shop Bestsellers",
    href: "#bestsellers",
  },
};

export const valueProps = [
  {
    icon: "✨",
    title: "Premium Quality",
    description: "Each product is carefully selected to ensure the highest quality standards",
  },
  {
    icon: "🎁",
    title: "Beautifully Packaged",
    description: "Elegant gift wrapping and presentation that makes every delivery special",
  },
  {
    icon: "🚚",
    title: "Reliable Delivery",
    description: "Safe and timely delivery across India, with real-time tracking",
  },
  {
    icon: "💝",
    title: "Personalized Touch",
    description: "Customize your gifts with personal messages and special requests",
  },
];

export const collections = [
  {
    id: "festive",
    title: "Festive Hampers",
    description: "Celebrate the joy of festivals with our specially curated hampers",
    image: "/images/collection-festive.svg",
    href: "/collections/festive",
  },
  {
    id: "corporate",
    title: "Corporate Gifts",
    description: "Professional gift solutions for clients, employees, and partners",
    image: "/images/collection-corporate.svg",
    href: "/collections/corporate",
  },
  {
    id: "wedding",
    title: "Wedding & Events",
    description: "Elegant gifting options for weddings, engagements, and celebrations",
    image: "/images/collection-wedding.svg",
    href: "/collections/wedding",
  },
  {
    id: "gourmet",
    title: "Gourmet Delights",
    description: "Premium chocolates, sweets, and gourmet treats for food lovers",
    image: "/images/collection-gourmet.svg",
    href: "/collections/gourmet",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Absolutely loved the quality and presentation! Sent a festive hamper to my parents and they were thrilled. Will definitely order again.",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Bangalore",
    rating: 5,
    text: "Professional service and beautiful packaging. Perfect for corporate gifting. Our clients were very impressed.",
  },
  {
    id: 3,
    name: "Anjali Mehta",
    location: "Delhi",
    rating: 5,
    text: "The attention to detail is remarkable. Every item in the hamper was premium quality. Highly recommend!",
  },
];

export const faqs = [
  {
    question: "What areas do you deliver to?",
    answer: "We deliver across India. Delivery times vary by location - typically 3-5 business days for metro cities and 5-7 days for other locations. Express delivery is available for select pin codes.",
  },
  {
    question: "Can I customize my gift hamper?",
    answer: "Yes! We offer customization options for most of our hampers. You can add or replace items, include personalized messages, and choose specific packaging styles. Contact us for custom requirements.",
  },
  {
    question: "What is your return and refund policy?",
    answer: "We strive for 100% satisfaction. If you're not happy with your order, please contact us within 48 hours of delivery. For damaged or incorrect items, we offer full refunds or replacements.",
  },
  {
    question: "Do you offer bulk orders for corporate events?",
    answer: "Absolutely! We specialize in corporate gifting and can handle bulk orders with custom branding options. Contact our corporate team for special pricing and dedicated support.",
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is shipped, you'll receive a tracking number via email and SMS. You can track your order in real-time using this number on our website or the courier partner's website.",
  },
];

export const policies = {
  shipping: {
    title: "Shipping & Delivery",
    items: [
      "Free shipping on orders above ₹2,999",
      "Standard delivery: 3-7 business days",
      "Express delivery available in select cities",
      "Real-time order tracking",
      "Secure and tamper-proof packaging",
    ],
  },
  returns: {
    title: "Returns & Refunds",
    items: [
      "7-day return policy for eligible items",
      "Full refund for damaged or defective products",
      "Easy return process via courier pickup",
      "Refunds processed within 5-7 business days",
    ],
  },
  payment: {
    title: "Payment Options",
    items: [
      "Credit & Debit Cards",
      "UPI & Net Banking",
      "Digital Wallets",
      "Cash on Delivery (select areas)",
      "Secure payment gateway with SSL encryption",
    ],
  },
};

export const newsletter = {
  headline: "Stay Updated",
  subheadline: "Get exclusive offers, new collection launches, and gifting inspiration delivered to your inbox",
  placeholderEmail: "Enter your email",
  ctaText: "Subscribe",
  privacyNote: "We respect your privacy. Unsubscribe anytime.",
};

export const footer = {
  about: "The Maryam specializes in creating memorable gifting experiences with premium hampers and curated collections. We believe every gift should tell a story.",
  links: {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Story", href: "/story" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
    ],
    shop: [
      { label: "All Collections", href: "/collections" },
      { label: "Bestsellers", href: "/bestsellers" },
      { label: "New Arrivals", href: "/new" },
      { label: "Gift Cards", href: "/gift-cards" },
    ],
    support: [
      { label: "FAQs", href: "#faqs" },
      { label: "Shipping Info", href: "/shipping" },
      { label: "Returns", href: "/returns" },
      { label: "Track Order", href: "/track" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
  },
  social: [
    { platform: "Instagram", href: "https://www.instagram.com/themaryam.in", icon: "instagram" },
    { platform: "Facebook", href: "https://www.facebook.com/themaryam.in", icon: "facebook" },
    { platform: "WhatsApp", href: "https://wa.me/91XXXXXXXXXX", icon: "whatsapp" },
  ],
  copyright: `© ${new Date().getFullYear()} The Maryam. All rights reserved.`,
};

// Instagram API configuration (used when instagramMode is 'api')
export const instagramApi = {
  token: process.env.INSTAGRAM_TOKEN || "",
  userId: process.env.INSTAGRAM_USER_ID || "",
  // How many posts to fetch
  postsCount: 9,
  // Revalidate interval for ISR (in seconds)
  revalidate: 3600, // 1 hour
};
