# Landing Page Structure

This document provides an overview of the landing page sections and their purpose.

## Page Sections (in order)

### 1. Hero Section (`components/HeroSection.tsx`)
- Full-screen hero banner with gradient overlay
- Headline: "Gifts That Speak From The Heart"
- Two CTA buttons: "Explore Collections" and "Shop Bestsellers"
- Scroll indicator at bottom

### 2. Value Props Section (`components/ValuePropsSection.tsx`)
- 4 key features in icon cards:
  - ✨ Premium Quality
  - 🎁 Beautifully Packaged
  - 🚚 Reliable Delivery
  - 💝 Personalized Touch

### 3. Collections Section (`components/CollectionsSection.tsx`)
- 4 featured product collections:
  - Festive Hampers
  - Corporate Gifts
  - Wedding & Events
  - Gourmet Delights
- Each with image, title, description, and "Explore" link

### 4. Instagram Section (`components/InstagramSection.tsx`)
- 3×3 grid of Instagram posts
- Two modes:
  - **Embed mode** (default): placeholder images with link to Instagram
  - **API mode**: live posts from Instagram Graph API (requires env vars)
- "Follow @themaryam.in" CTA button

### 5. Testimonials Section (`components/TestimonialsSection.tsx`)
- 3 customer reviews with:
  - 5-star ratings
  - Quote/testimonial text
  - Customer name and location
- Dark background for contrast

### 6. FAQ Section (`components/FaqSection.tsx`)
- 5 frequently asked questions in accordion format:
  - Delivery areas
  - Customization options
  - Return/refund policy
  - Bulk/corporate orders
  - Order tracking
- Expandable panels (first one open by default)

### 7. Policy Highlights Section (`components/PolicyHighlightsSection.tsx`)
- 3 informational cards:
  - **Shipping & Delivery**: Free shipping, delivery times, tracking
  - **Returns & Refunds**: Return window, refund process
  - **Payment Options**: Accepted payment methods, security

### 8. Newsletter Section (`components/NewsletterSection.tsx`)
- Email subscription form
- Headline: "Stay Updated"
- Privacy note
- Form submission (stub - ready for integration)

### 9. Footer (`components/SiteFooter.tsx`)
- About text
- 4 link columns:
  - Company (About, Story, Contact, Careers)
  - Shop (Collections, Bestsellers, New Arrivals, Gift Cards)
  - Support (FAQs, Shipping, Returns, Track Order)
  - Legal (Privacy, Terms, Refund Policy)
- Social media icons (Instagram, Facebook, WhatsApp)
- Copyright notice

## Design System

### Colors
- **Primary Gold:** `#b08d57` - CTAs, accents, links
- **Dark:** `#111111` - Primary text, dark sections
- **White:** `#ffffff` - Background
- **Pink Accent:** `#f7e9f2` - Section backgrounds, highlights

### Typography
- **Headings:** Playfair Display (serif, elegant)
- **Body:** Inter (sans-serif, modern)

### Spacing & Layout
- Max width: `1280px` (7xl)
- Section padding: `py-20` to `py-24`
- Grid gaps: `gap-4` to `gap-8`
- Responsive breakpoints: `md:` (768px), `lg:` (1024px)

### Interactive Elements
- Hover effects on all links and buttons
- Smooth scroll behavior
- Focus outlines for accessibility
- Transition animations

## SEO Features

### Meta Tags (in `app/layout.tsx`)
- Title: "The Maryam – Gifts & Hampers"
- Description, keywords, author
- Open Graph tags (Facebook, LinkedIn sharing)
- Twitter Card tags
- Canonical URL

### Structured Data (JSON-LD)
1. **Organization** schema
   - Name, URL, logo
   - Contact information
   - Social profiles

2. **WebSite** schema
   - Site name and URL
   - Search action

3. **ItemList** schema
   - Featured collections as list items

### Images
- All images use `next/image` for optimization
- Proper `alt` attributes
- Responsive `sizes` attributes
- Lazy loading (except hero)

### Accessibility
- Semantic HTML5 elements (`<main>`, `<section>`, `<article>`, `<nav>`)
- Proper heading hierarchy (h1 → h6)
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Screen reader text where needed
- Color contrast compliance

## Performance Optimizations

- Static generation at build time
- Image optimization via Next.js Image
- Font optimization (preconnect to Google Fonts)
- Lazy loading for non-critical images
- ISR (Incremental Static Regeneration) for Instagram API mode
- Minimal JavaScript (mostly static content)

## Mobile Responsiveness

All sections are mobile-first and responsive:
- Single column on mobile
- 2 columns at `md` breakpoint
- 3-4 columns at `lg` breakpoint
- Touch-friendly tap targets (min 44×44px)
- Readable font sizes on all devices
- Optimized images for different screen sizes
