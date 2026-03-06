# VanEck Direct Website

Landing page for **VanEck Direct** — an automated ETF investing app for beginning investors in the Netherlands. The site's primary goal is **user acquisition**: convincing visitors to download the app and start investing.

## Project Objectives

1. **Drive app downloads** — Every design and content decision serves this conversion goal. Clear CTAs, trust signals, and a frictionless path to the App Store / Google Play.
2. **Build trust** — VanEck has been an investment company since 1955. The site must convey professionalism, transparency, and reliability.
3. **Educate without overwhelming** — The target audience is beginning investors. Explain concepts simply, reduce fear, and show how easy it is to get started.
4. **Rank in Dutch search results** — The site must perform well for queries like "beleggen app", "ETF beleggen", and "automatisch beleggen" in Google.nl.

## Coding Priorities

These priorities are listed in order of importance. When making trade-offs, favour items higher on the list.

### 1. SEO (Critical)

Organic search is the primary acquisition channel. Every technical decision should support discoverability.

- **Server-side rendering** — Use Next.js SSR/SSG so that all content is in the initial HTML. Never hide meaningful text behind client-side JS.
- **Semantic HTML** — Use proper heading hierarchy (`h1` > `h2` > `h3`), landmark elements (`nav`, `main`, `section`, `footer`), and descriptive link text.
- **Metadata** — Every page needs a unique `<title>`, `meta description`, Open Graph tags, and structured data (JSON-LD) where appropriate.
- **robots.txt & sitemap.xml** — Must be present and correct.
- **Clean URL structure** — Short, descriptive, lowercase slugs. No query parameters for content pages.
- **Alt text on all images** — Descriptive, keyword-aware alt text on every `<img>` / `<Image>`.
- **Internal linking** — Link between pages with descriptive anchor text.
- **Hreflang** — If the site expands beyond Dutch, implement hreflang tags.

### 2. Site Speed / Core Web Vitals (Critical)

Google uses Core Web Vitals as a ranking signal. Fast pages also convert better. Target: **all green scores** in Lighthouse and PageSpeed Insights.

- **Image optimisation** — Use Next.js `<Image>` with proper `width`/`height`, `srcSet`, and modern formats (WebP/AVIF). Avoid unoptimised large assets (current footer mockup is 2.8 MB — compress or convert).
- **Minimal JavaScript** — Keep components as Server Components by default. Only add `"use client"` when genuinely needed (interactivity).
- **Font loading** — Fonts are loaded via `next/font` to avoid layout shift. Keep the number of font weights minimal.
- **No layout shift (CLS)** — Always set explicit dimensions on images, embeds, and dynamic content.
- **Lazy loading** — Images below the fold should lazy-load. Only the hero image should use `priority`.
- **Bundle size** — Avoid heavy dependencies. Audit bundle regularly. Use dynamic imports for non-critical components.
- **Caching** — Leverage Next.js static generation for pages that don't change often. Set appropriate cache headers for assets.

### 3. Mobile-First Design (High)

The product is a mobile app — the audience is mobile-heavy. The site must look and work perfectly on phones first.

- **Responsive layout** — Design for 375px up, then enhance for larger screens.
- **Touch targets** — Buttons and links must be at least 44x44px.
- **Readable without zoom** — Base font size 16px minimum. Adequate line height and contrast.
- **Fast on 3G** — Performance budget matters even more on mobile. Test with throttled connections.

### 4. Accessibility (High)

Accessible sites are also better for SEO and reach more users.

- **WCAG 2.1 AA** as the minimum standard.
- **Keyboard navigation** — All interactive elements must be focusable and operable with a keyboard.
- **Colour contrast** — Minimum 4.5:1 for body text, 3:1 for large text.
- **Screen reader support** — Use ARIA labels where semantic HTML isn't sufficient.

### 5. Code Quality & Maintainability (Medium)

The codebase should be easy to hand off, extend, and debug.

- **TypeScript** — Strict mode enabled. No `any` types.
- **Component architecture** — One section per component. Keep components focused and reusable.
- **Tailwind CSS** — Utility-first styling. Use the theme (custom colours, fonts) defined in `globals.css`.
- **ESLint** — Core Web Vitals + TypeScript rules are configured. Keep the build warning-free.
- **Minimal dependencies** — Fewer deps = fewer vulnerabilities, smaller bundle, easier upgrades.

## Tech Stack

| Layer       | Choice                        |
|-------------|-------------------------------|
| Framework   | Next.js 16 (App Router)       |
| Language    | TypeScript (strict)           |
| Styling     | Tailwind CSS 4                |
| Fonts       | Merriweather (headings), Open Sans (body) via `next/font` |
| Linting     | ESLint with Core Web Vitals   |
| Deployment  | Vercel                        |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx         Root layout (metadata, fonts, language)
│   ├── page.tsx           Home page (landing page)
│   └── globals.css        Tailwind theme & global styles
└── components/
    ├── TopBanner.tsx       Risk disclaimer banner
    ├── Header.tsx          Sticky nav + mobile menu
    ├── Hero.tsx            Hero section with app mockup
    ├── PutMoneyToWork.tsx  Value proposition
    ├── InvestMonthly.tsx   Monthly investing feature
    ├── InvestingNotScary.tsx  Fear reduction / education
    ├── TrustedName.tsx     VanEck brand trust section
    ├── CostsSection.tsx    Fee transparency
    ├── AlwaysControl.tsx   User control features
    ├── WalkThrough.tsx     App walkthrough
    ├── CTASection.tsx      Call-to-action
    ├── AppScreenshots.tsx  App screenshots
    ├── VideoSection.tsx    Embedded video
    └── Footer.tsx          Footer with links
public/
└── images/                App mockups, icons, brand assets
```

## Outstanding Items

- [ ] Add `robots.txt` and `sitemap.xml`
- [ ] Add Open Graph and Twitter Card meta tags
- [ ] Add structured data (JSON-LD) for Organisation
- [ ] Compress oversized images (footer mockup, safe-place image ~2.8 MB each)
- [ ] Replace placeholder `#` links with real destinations
- [ ] Set up analytics (e.g. Google Analytics 4 / Plausible)
- [ ] Add cookie consent (required under Dutch/EU law)
