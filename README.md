# Core Elite Experts Website

Official corporate website for **Core Elite Experts (Private) Limited** — a technology and operations company delivering DevOps, software development, design, marketing, and business support.

**Live site:** https://coreeliteexperts.com

---

## About

This repository contains the frontend application for the CEE public website. It is a React single-page application (SPA) with client-side routing, animated sections, blog content, service pages, team profiles, and contact information.

---

## Features

- Modern, responsive design
- Smooth animations with Framer Motion
- SEO metadata and structured data
- Client-side routing with React Router
- Blog, services, projects, and case study pages
- Team profiles with LinkedIn and Upwork links
- Cookie consent and accessibility-focused UI
- Production deployment configured for Vercel

---

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router v6
- TanStack Query
- React Helmet Async
- shadcn/ui
- Lucide Icons

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 11+

### Installation

```bash
git clone https://github.com/coreeliteexperts/Coreeliteexperts-website.git
cd Coreeliteexperts-website
npm install
npm run dev
```

The development server runs at `http://localhost:8080`.

### Available Scripts

```bash
npm run dev        # Start local development server
npm run build      # Build for production
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
```

---

## Project Structure

```
Coreeliteexperts-website/
├── public/              # Static assets (images, favicon, sitemap, robots.txt)
├── src/
│   ├── components/      # UI, layout, and page sections
│   ├── pages/           # Route-level pages
│   ├── data/            # Blog posts and project content
│   ├── config/          # Site-wide branding and metadata
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Shared utilities
│   ├── App.tsx          # App shell and route definitions
│   └── main.tsx         # Application entry point
├── index.html
├── vercel.json          # SPA rewrites and security headers
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

---

## Routes

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About and team |
| `/services` | Services |
| `/work` | Projects |
| `/work/:id` | Case study |
| `/blog` | Blog listing |
| `/blog/:id` | Blog post |
| `/contact` | Contact |
| `/privacy-policy` | Privacy policy |
| `/terms-of-service` | Terms of service |

---

## Deployment

This project is deployed on **Vercel** with the production output directory set to `dist`.

`vercel.json` includes:

- SPA rewrite rules so direct URLs and page refreshes work correctly
- Security headers such as CSP, HSTS, and `X-Frame-Options`

### Build

```bash
npm run build
```

The production build is generated in the `dist/` directory.

---

## Configuration

Site-wide branding and metadata are defined in:

```
src/config/site.ts
```

Update company name, description, canonical URL, logo, and social handles there.

---

## Environment

No environment variables are required for the current public marketing site. If backend integrations are added later, document them here.

---

## License

This application is proprietary software owned by **Core Elite Experts (Private) Limited**.

See [LICENSE.md](./LICENSE.md) for full licensing terms.

---

## Company

**Core Elite Experts (Private) Limited**  
Website: https://coreeliteexperts.com  
Contact: https://coreeliteexperts.com/contact
