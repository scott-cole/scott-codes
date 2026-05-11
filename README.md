# Scott.Codes

Personal portfolio and freelance presence for **Scott Cole** — Senior Software Engineer specializing in React, TypeScript, and web performance.

Built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 14** — App Router, static generation, image optimization
- **TypeScript** — Full type safety
- **Tailwind CSS** — Utility-first styling with custom design system
- **Lucide React** — Consistent iconography

## Project Structure

```
app/
├── layout.tsx          # Root layout with SEO metadata & JSON-LD
├── sitemap.ts          # Auto-generated sitemap
├── page.tsx            # Home page — hero, services, featured projects, FAQ
├── about/page.tsx      # About page — experience, skills
├── projects/page.tsx   # Project showcase with case study modals
└── contact/page.tsx    # Contact page with form & links

components/
├── Navigation.tsx      # Fixed top navigation with logo
└── WhatsAppButton.tsx  # Floating WhatsApp contact button

public/
├── favicon.svg         # SVG favicon
├── robots.txt          # Search engine crawling config
├── logo-white.png      # Navbar logo
└── images/avatar.png   # Profile avatar
```

## Features

- Dark theme with blue accent colour scheme
- Fully responsive (mobile, tablet, desktop)
- SEO-optimised with structured data (JSON-LD), sitemap, Open Graph, Twitter cards
- Case studies with modal detail views for each project
- Floating WhatsApp contact button
- Blur placeholder loading for images
- Performance-optimised with Next.js Image (AVIF/WebP, responsive srcsets)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | TypeScript type checking |

## Deployment

Recommended for Vercel:

```bash
npm i -g vercel
vercel
```
