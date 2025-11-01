# The Maryam Official

Official repository for [themaryam.in](https://themaryam.in) - a premium gift store specializing in curated hampers and gift collections.

## 📁 Repository Structure

```
maryam-official/
├── web/                    # Next.js marketing website
│   ├── app/                # App router pages and layouts
│   ├── components/         # React components
│   ├── constants/          # Content configuration
│   ├── lib/                # Utilities and integrations
│   └── public/             # Static assets
└── README.md               # This file
```

## 🚀 Getting Started

### Marketing Website

The marketing landing page is located in the `web/` directory.

```bash
cd web
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

For detailed setup and customization instructions, see [web/README.md](web/README.md).

## 🔧 Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Fonts:** Inter (body), Playfair Display (headings)
- **Analytics:** Google Analytics 4 (optional)
- **Social:** Instagram Graph API integration (optional)

## 📝 Quick Configuration

All website content is centralized in `web/constants/content.ts`. To customize:

1. Edit content configuration:
   ```typescript
   // web/constants/content.ts
   export const siteConfig = {
     name: "The Maryam",
     domain: "themaryam.in",
     // ... update as needed
   };
   ```

2. Replace placeholder images in `web/public/images/`

3. Enable optional integrations via `.env.local`:
   ```bash
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   INSTAGRAM_TOKEN=your_token
   ```

See [web/README.md](web/README.md) for complete documentation.

## 🚢 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

```bash
cd web
vercel
```

### Other Platforms

```bash
cd web
npm run build
npm start
```

## 📄 License

Copyright © 2024 The Maryam. All rights reserved.

## 📧 Contact

- **Email:** hello@themaryam.in
- **Instagram:** [@themaryam.in](https://www.instagram.com/themaryam.in)
- **Website:** [themaryam.in](https://themaryam.in)
