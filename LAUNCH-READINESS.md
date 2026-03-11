# VanEck Direct Website — Launch Readiness Review

**Date:** 2026-03-11
**Status:** Not yet ready for production launch
**Estimated effort to resolve:** 2–4 days of focused development

---

## Summary

The codebase is well-structured, uses modern technologies (Next.js 16, React 19, TypeScript strict mode, Tailwind CSS 4), and has solid foundations. However, several critical items must be addressed before this site can replace the existing production website. The issues fall into three tiers: **Blockers** (must fix), **High Priority** (should fix before launch), and **Nice to Have** (can follow up after launch).

---

## 1. BLOCKERS — Must Fix Before Launch

### 1.1 No `robots.txt`
There is no `robots.txt` file in `/public/`. Without it, search engine crawling behavior is undefined, and you risk indexing unwanted pages or missing critical ones.

**Action:** Create `public/robots.txt` or a dynamic `src/app/robots.ts` with proper allow/disallow rules and a reference to the sitemap.

### 1.2 No Open Graph / Twitter Card Meta Tags
Zero pages have `openGraph` or `twitter` metadata. When anyone shares a link on social media, LinkedIn, WhatsApp, etc., there will be no image, title, or description preview — this is critical for a marketing-focused site.

**Action:** Add `openGraph` and `twitter` properties to the root layout metadata and override per-page where needed. Create or designate an OG image (1200x630px).

### 1.3 No Cookie Consent Banner
EU/Dutch GDPR law requires explicit cookie consent before setting non-essential cookies. The `/cookies` page currently just redirects to `/terms-conditions` — there is no actual cookie policy and no consent mechanism.

**Action:**
- Write a proper cookie policy page at `/cookies`
- Implement a cookie consent banner (e.g., using a lightweight library or custom component)
- Ensure no analytics/tracking scripts fire before consent

### 1.4 No Analytics
There is no analytics integration whatsoever — no Google Analytics, no Plausible, no Matomo. Launching a marketing website without analytics means you cannot measure traffic, conversions, or campaign effectiveness.

**Action:** Integrate an analytics solution (GA4, Plausible, or similar). Ensure it respects cookie consent.

### 1.5 No Error Pages
- No `not-found.tsx` (custom 404 page) — users hitting broken URLs will see the default Next.js 404
- No `error.tsx` (error boundary) — runtime errors will show the default error page
- No `loading.tsx` — no loading states during navigation

**Action:** Create `src/app/not-found.tsx`, `src/app/error.tsx`, and optionally `src/app/loading.tsx` with VanEck Direct branding.

### 1.6 No Security Headers
The `next.config.ts` has no security headers configured. Missing:
- `Content-Security-Policy`
- `X-Frame-Options`
- `X-Content-Type-Options`
- `Strict-Transport-Security`
- `Referrer-Policy`
- `Permissions-Policy`

**Action:** Add a `headers()` function in `next.config.ts` to set security headers for all routes.

### 1.7 Copyright Year Hardcoded to 2024
`Footer.tsx:49` shows `© 2024 VanEck Direct®`. It is now 2026.

**Action:** Use `new Date().getFullYear()` or update to the correct year.

---

## 2. HIGH PRIORITY — Should Fix Before Launch

### 2.1 No Structured Data (JSON-LD)
No schema.org markup exists. For a financial services company, structured data is important for:
- `Organization` (company info, logo)
- `FAQPage` (FAQ page — can appear as rich snippets)
- `BlogPosting` (blog articles)
- `BreadcrumbList` (navigation breadcrumbs)

**Action:** Add JSON-LD scripts to the layout and relevant pages.

### 2.2 Accessibility Gaps
The site has decent semantic HTML but several gaps:
- **Mobile menu button** (`Header.tsx:83`) — no `aria-label`
- **Dropdown menus** — only work on hover (`group-hover:visible`), not keyboard accessible
- **Modal** (`DownloadModal.tsx`) — missing `role="dialog"`, `aria-modal="true"`, `aria-labelledby`
- **FAQ accordion** — minimal ARIA attributes
- **No skip-to-content link** — keyboard users can't skip the header

**Action:** Add ARIA attributes, keyboard event handlers for dropdowns, and a skip-to-content link.

### 2.3 No Testing Framework
There are zero tests — no unit tests, no integration tests, no E2E tests. No test runner (Jest, Vitest, Playwright, Cypress) is configured.

**Action:** At minimum, set up Vitest or Jest and add smoke tests for critical pages (homepage, rendement calculator, blog routing). Consider Playwright for E2E tests of the download modal flow.

### 2.4 `PlaceholderPage` Component Still Exists
`src/components/PlaceholderPage.tsx` exists in the codebase. While no pages currently import it, its presence suggests some pages may have been placeholders recently.

**Action:** Verify all pages have real content. Delete `PlaceholderPage.tsx` if truly unused.

### 2.5 Cookies Page Redirects Instead of Showing Content
`src/app/cookies/page.tsx` simply does `redirect("/terms-conditions")`. The footer links to `/cookies`, and there's a separate terms page — this is confusing for users and legally insufficient.

**Action:** Either create a proper cookie policy page or merge cookie information visibly into the terms page and update the footer link.

### 2.6 Missing Canonical URLs
No canonical link tags are set. This can cause duplicate content issues if pages are accessible via multiple URLs.

**Action:** Set `alternates.canonical` in metadata for each page.

### 2.7 Performance: Image Optimization
- Only 3 pages use `priority` on above-the-fold images
- Some images may be served from CDN without proper sizing
- The `/public/images/` directory is 12 MB — verify all images are optimized and compressed

**Action:** Audit images, compress oversized assets, and add `priority` to all above-the-fold hero images.

---

## 3. NICE TO HAVE — Can Follow Up After Launch

### 3.1 Bundle Analysis
No bundle analyzer is configured. Consider adding `@next/bundle-analyzer` to monitor and optimize bundle sizes.

### 3.2 CI/CD Pipeline
No GitHub Actions, Vercel build checks, or other CI/CD configuration exists. For ongoing development:
- Add lint check on PR
- Add type check (`tsc --noEmit`) on PR
- Add build check on PR
- Consider adding automated Lighthouse CI

### 3.3 Environment Variable Documentation
No `.env.example` file exists. While the current site has no env vars, analytics and future integrations will need them.

### 3.4 Content Review
- Blog content is hardcoded in `src/data/blog-content.tsx` (64 KB) — consider a CMS for easier updates
- Help content is hardcoded in `src/data/help-content.tsx` (64 KB) — same consideration
- Verify all Dutch text for accuracy and completeness with the content team

### 3.5 Internationalization Readiness
The site is Dutch-only (`lang="nl"`). If expansion to other markets is planned, consider adding `hreflang` tags and preparing an i18n structure.

### 3.6 Form/Contact Functionality
The contact page shows contact information but has no actual contact form. Verify this is intentional.

### 3.7 Rendement Page Data
`src/app/rendement/page.tsx` has performance data up to 2024. Verify if 2025 data should be added before launch.

---

## 4. PRACTICAL LAUNCH CHECKLIST

### Pre-Launch (Development)
- [ ] Add `robots.txt` (or `src/app/robots.ts`)
- [ ] Add Open Graph + Twitter Card metadata to root layout and key pages
- [ ] Create OG image asset (1200x630px with VanEck Direct branding)
- [ ] Implement cookie consent banner
- [ ] Write proper cookie policy content
- [ ] Integrate analytics (GA4 / Plausible) with consent gate
- [ ] Create custom `not-found.tsx` (404 page)
- [ ] Create custom `error.tsx` (error boundary)
- [ ] Add security headers in `next.config.ts`
- [ ] Fix copyright year in footer
- [ ] Add JSON-LD structured data (Organization, FAQPage, BlogPosting)
- [ ] Fix accessibility: aria-labels, keyboard navigation, skip-link
- [ ] Add canonical URLs to all pages
- [ ] Delete unused `PlaceholderPage.tsx`
- [ ] Compress images in `/public/images/`

### Pre-Launch (Non-Code)
- [ ] Content review: all Dutch text proofread and approved
- [ ] Legal review: privacy policy, terms, disclaimer verified by compliance
- [ ] QA: manual testing across browsers (Chrome, Firefox, Safari, Edge)
- [ ] QA: mobile testing on iOS Safari and Android Chrome
- [ ] Lighthouse audit: target 90+ on Performance, Accessibility, SEO, Best Practices
- [ ] Verify App Store and Google Play links are correct and up to date
- [ ] DNS/domain: configure `direct.vaneck.com` to point to the new deployment
- [ ] SSL certificate: verify HTTPS is properly configured
- [ ] Set up monitoring/alerting (uptime, error tracking like Sentry)
- [ ] Verify sitemap is accessible at `direct.vaneck.com/sitemap.xml`
- [ ] 301 redirects: map old URLs to new URLs to preserve SEO

### Post-Launch
- [ ] Monitor analytics for first 48 hours
- [ ] Check Google Search Console for crawl errors
- [ ] Verify no broken links (run a link checker)
- [ ] Monitor Core Web Vitals in field data
- [ ] Set up automated testing / CI pipeline
- [ ] Plan CMS migration for blog/help content

---

## 5. WHAT'S ALREADY GOOD

The project has strong foundations worth noting:

- **Modern stack**: Next.js 16 App Router with React 19 and TypeScript strict mode
- **Server-side rendering**: All pages are Server Components by default (great for SEO)
- **Minimal dependencies**: Only 3 production deps — no bloat
- **Clean architecture**: Well-organized component structure, reusable templates
- **Semantic HTML**: Proper heading hierarchy, `<main>`, `<section>` elements
- **Font optimization**: Using `next/font` to avoid layout shift
- **Image optimization**: Using `next/image` for responsive, optimized images
- **Proper sitemap**: Dynamic sitemap generation with priorities
- **Dutch language**: `lang="nl"` properly set on `<html>`
- **Comprehensive disclaimer**: Full regulatory/legal disclaimer in footer
- **Good URL structure**: Clean, SEO-friendly Dutch slugs
- **Mobile navigation**: Hamburger menu implemented
- **Download modal**: Smooth app download CTA flow with store links
- **No code quality issues**: Zero console.logs, zero TODO comments, zero placeholder links
