# The Maryam Gift Store Landing Page

A polished, SEO-optimized marketing landing page for themaryam.in gift store, built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Format code
npm run format
```

Visit [http://localhost:3000](http://localhost:3000) to view the landing page.

## 📝 Customization Guide

### 1. Edit Content

All copy, links, and settings are centralized in `constants/content.ts`. To customize:

```typescript
// constants/content.ts

export const siteConfig = {
  name: "The Maryam",
  domain: "themaryam.in",
  description: "Your description here",
  // ... update as needed
};

export const hero = {
  headline: "Your Headline",
  subheadline: "Your subheadline",
  // ... update CTAs, etc.
};
```

Key sections to customize:
- `siteConfig` - Site-wide settings (name, domain, contact info)
- `hero` - Hero section headline and CTAs
- `valueProps` - Feature highlights
- `collections` - Product collections
- `testimonials` - Customer reviews
- `faqs` - Frequently asked questions
- `policies` - Shipping, returns, payment info
- `newsletter` - Newsletter CTA copy
- `footer` - Footer content and links

### 2. Replace Images

Placeholder SVG images are in `public/images/`. Replace them with your own:

| Filename | Size | Description |
|----------|------|-------------|
| `hero.svg` or `hero.jpg` | 1920×1080 | Main hero banner |
| `og.svg` or `og.jpg` | 1200×630 | Open Graph/social share image |
| `collection-festive.svg/.jpg` | 800×800 | Festive collection preview |
| `collection-corporate.svg/.jpg` | 800×800 | Corporate gifts preview |
| `collection-wedding.svg/.jpg` | 800×800 | Wedding collection preview |
| `collection-gourmet.svg/.jpg` | 800×800 | Gourmet collection preview |
| `instagram-{1-9}.svg/.jpg` | 600×600 | Instagram feed placeholders |

After replacing images, update paths in `constants/content.ts` if you change file extensions (e.g., `.svg` → `.jpg`).

### 3. Enable Instagram API Integration

The landing page supports two Instagram modes:

#### Embed Mode (Default)
Shows a placeholder grid with a link to your Instagram profile. No API credentials required.

#### API Mode
Fetches real posts from Instagram Graph API. To enable:

1. **Get Instagram Access Token:**
   - Create a Facebook App at [developers.facebook.com](https://developers.facebook.com)
   - Add Instagram Basic Display or Instagram Graph API product
   - Generate a long-lived access token
   - Get your Instagram User ID

2. **Set Environment Variables:**
   Create `.env.local` in the project root:
   ```bash
   INSTAGRAM_TOKEN=your_access_token_here
   INSTAGRAM_USER_ID=your_user_id_here
   ```

3. **Enable API Mode:**
   In `constants/content.ts`, change:
   ```typescript
   export const siteConfig = {
     // ...
     instagramMode: "api", // Change from "embed" to "api"
   };
   ```

4. **Optional: Adjust Revalidation:**
   In `constants/content.ts`:
   ```typescript
   export const instagramApi = {
     postsCount: 9, // Number of posts to display
     revalidate: 3600, // Cache duration in seconds (1 hour)
   };
   ```

### 4. Enable Google Analytics

To track visitors with Google Analytics 4:

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Copy your Measurement ID (format: `G-XXXXXXXXXX`)
3. Create `.env.local` (or update existing):
   ```bash
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

The GA script will automatically load when the environment variable is set.

### 5. Favicon & Branding

- Replace `app/favicon.ico` with your own favicon
- Update fonts in `app/layout.tsx` if desired (currently using Inter + Playfair Display)
- Customize colors in `app/globals.css` (look for CSS variables in `:root`)

## 🎨 Design System

### Colors
- **Primary (Gold):** `#b08d57`
- **Background:** `#ffffff`
- **Dark:** `#111111`
- **Accent (Pink):** `#f7e9f2`

### Typography
- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)

## 📦 Project Structure

```
web/
├── app/
│   ├── favicon.ico           # Site favicon
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with SEO
│   └── page.tsx              # Landing page
├── components/
│   ├── CollectionsSection.tsx
│   ├── FaqSection.tsx
│   ├── GoogleAnalytics.tsx
│   ├── HeroSection.tsx
│   ├── InstagramSection.tsx
│   ├── NewsletterSection.tsx
│   ├── PolicyHighlightsSection.tsx
│   ├── SiteFooter.tsx
│   ├── TestimonialsSection.tsx
│   └── ValuePropsSection.tsx
├── constants/
│   └── content.ts            # ⭐ Centralized content config
├── lib/
│   └── instagram.ts          # Instagram API integration
├── public/
│   └── images/               # Image assets
└── package.json
```

## ✨ Features

### SEO & Performance
- ✅ Optimized meta tags (title, description, keywords)
- ✅ Open Graph & Twitter Card tags for social sharing
- ✅ Structured Data (JSON-LD) for Organization & WebSite
- ✅ Responsive images with Next.js Image optimization
- ✅ Semantic HTML with proper heading hierarchy
- ✅ Mobile-first responsive design
- ✅ Lazy loading for images
- ✅ ISR (Incremental Static Regeneration) for Instagram API mode

### Accessibility
- ✅ ARIA labels and landmarks
- ✅ Keyboard navigation support
- ✅ Focus styles for interactive elements
- ✅ Alt text for all images
- ✅ Proper color contrast ratios
- ✅ Screen reader friendly

### Sections
1. **Hero** - Full-screen banner with CTAs
2. **Value Props** - Key differentiators (4 feature cards)
3. **Collections** - Featured product categories (4 collections)
4. **Instagram** - Social proof feed (9-grid with API/embed modes)
5. **Testimonials** - Customer reviews (3 testimonials)
6. **FAQs** - Expandable Q&A accordion (5 questions)
7. **Policy Highlights** - Shipping, returns, payment info
8. **Newsletter** - Email subscription CTA
9. **Footer** - Links, contact info, social icons

## 🛠️ Development

### Adding New Sections

1. Create a component in `components/YourSection.tsx`
2. Import and render in `app/page.tsx`
3. Add content config to `constants/content.ts`

### Styling

This project uses Tailwind CSS 4. Key conventions:
- Use design tokens from `app/globals.css`
- Maintain responsive design patterns (`md:`, `lg:` breakpoints)
- Keep consistent spacing with Tailwind's scale

### Testing Newsletter Integration

The newsletter form is currently a stub. To integrate with a service:

1. Choose a provider (Mailchimp, ConvertKit, SendGrid, etc.)
2. Update `components/NewsletterSection.tsx` `handleSubmit`:
   ```typescript
   const response = await fetch('/api/newsletter', {
     method: 'POST',
     body: JSON.stringify({ email }),
   });
   ```
3. Create an API route at `app/api/newsletter/route.ts`

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
- Build: `npm run build`
- Start: `npm start`
- Node.js 18+ required
- Set environment variables in your platform's dashboard

### Environment Variables for Production
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX          # Google Analytics (optional)
INSTAGRAM_TOKEN=your_token              # Instagram API (optional)
INSTAGRAM_USER_ID=your_user_id          # Instagram API (optional)
```

## 📄 License

Copyright © 2024 The Maryam. All rights reserved.

## 🤝 Support

For questions or customization assistance:
- Email: hello@themaryam.in
- Instagram: [@themaryam.in](https://www.instagram.com/themaryam.in)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
