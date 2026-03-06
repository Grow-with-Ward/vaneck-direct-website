# PRD: VanEck Direct Website — Page Rebuild

## Overview

This PRD defines the content structure and design requirements for rebuilding all pages of the VanEck Direct website (direct.vaneck.com). The homepage is already built. All other pages currently show placeholder content and need to be fully designed and implemented.

The website is built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS 4**, and **TypeScript 5**. All pages share a root layout with TopBanner, Header, and Footer.

---

## Shared Components (Already Built)

All pages inherit from the root layout:
- **TopBanner**: Risk disclaimer — "Beleggen kent risico's. Je inleg kan minder waard worden."
- **Header**: Sticky nav with logo, links (Hoe werkt het?, Rendement & Kosten dropdown, Support dropdown, Over ons, Contact), green CTA button
- **Footer**: 4-column link grid, legal disclaimer, app download CTA banner

### Shared Design Tokens
- Primary Blue: `#0e3065`
- Secondary Purple: `#211f54`
- CTA Green: `#0ab400`
- Hero Blue: `#1f2c3d`
- Light BG: `#f7f9ff` / `#f2f3f7`
- Text Gray: `#4a5568`
- Link Blue: `#17468f`
- Heading font: Merriweather (serif)
- Body font: Open Sans (sans-serif)

### Shared Page Template
Most pages follow this pattern:
1. Hero/intro section with heading + description
2. Content sections (alternating white/light backgrounds)
3. CTA section — "Bouw nu vermogen op voor later, met VanEck Direct" + app download buttons

---

## Priority Tiers

### Tier 1 — Core Product Pages (Build First)
These are the primary conversion and information pages.

### Tier 2 — Marketing/SEO Landing Pages
These drive organic traffic and support specific user intents.

### Tier 3 — Legal & Compliance Pages
Required pages that rarely change.

---

## Tier 1: Core Product Pages

### 1. `/hoe-werkt-het` — Hoe werkt het?

**Purpose**: Explain how VanEck Direct works end-to-end. Primary information page.

**Sections**:

1. **Hero**: "Bij ons beleg je in ETFs" — explain investing in well-diversified baskets of stocks and bonds
2. **Our 4 ETFs** — Card grid showing each ETF:
   - **VanEck Aandelen ETF** (World Equal Weight Screened UCITS ETF) — 250 largest global companies, ESG exclusions
   - **VanEck Vastgoed ETF** (Global Real Estate UCITS ETF) — 100 largest listed real estate stocks
   - **VanEck Bedrijfsobligaties ETF** (iBoxx EUR Corporates UCITS ETF) — 40 largest euro corporate bonds
   - **VanEck Staatsobligaties ETF** (iBoxx EUR Sovereign Diversified 1-10 UCITS ETF) — 25 eurozone government bonds
   - Each card: name, official name, description, risk score indicator, "Meer over deze ETF" link
3. **Risk Profile Weighting** — Carousel/slider with 5 profiles showing allocation percentages:
   - Zeer offensief: 77.5% stocks, 12.5% real estate, 5% corp bonds, 5% gov bonds
   - Offensief: 60/10/15/15
   - Neutraal: 40/10/25/25
   - Defensief: 25/5/35/35
   - Zeer defensief: 10/0/45/45
4. **6-Step Process** — Visual roadmap:
   1. Installeer de app
   2. Stel je plan op
   3. Kies je risicoprofiel
   4. Automatiseer je inleg
   5. Wij beheren en beleggen voor jou
   6. Bekijk en pas je beleggingen aan
5. **CTA Section** — App download

**Components needed**: ETF card, risk profile carousel/slider, step roadmap

---

### 2. `/kosten` — Kostenoverzicht

**Purpose**: Transparent fee breakdown. Key conversion page.

**Sections**:

1. **Hero**: "Elke euro die jij bespaart aan kosten komt ten goede aan jouw rendement"
2. **Cost Breakdown** — Three cost categories with clear explanations:
   - Beheerkosten: 0.5% per year
   - Fondskosten: 0.18%–0.22% depending on risk profile
   - Opnamekosten: €1 symbolic charge for early withdrawals
   - Total: 0.68%–0.72% all-in, no account opening/closing fees
3. **All-In Cost Table** — Table with 5 risk profiles:
   | Profile | Total Cost |
   |---|---|
   | Zeer defensief | 0.68% |
   | Defensief | 0.69% |
   | Neutraal | 0.70% |
   | Offensief | 0.71% |
   | Zeer offensief | 0.72% |
4. **Cost Example**: €5,000 in neutral profile = ~€2.92/month
5. **CTA Section**

**Components needed**: Cost breakdown cards, comparison table

---

### 3. `/rendement` — Rendement

**Purpose**: Show historical performance data across risk profiles.

**Sections**:

1. **Hero**: Performance overview introduction
2. **Performance Data Table** — Historical returns for 2020–2024 across 5 profiles:
   - Show positive years (e.g., 2024: Zeer offensief 14.22%) and negative (2022: losses across all)
   - Include disclaimer that these are simulated results with costs included
3. **Cost inclusion note**: Management 0.5%, fund costs, transaction €1, max monthly 0.7%
4. **Disclaimer**: "Tussentijdse stortingen en onttrekkingen worden niet meegenomen" — interim deposits/withdrawals not included
5. **CTA Section**

**Components needed**: Performance data table with year-by-year rows

---

### 4. `/faq` — Veelgestelde Vragen

**Purpose**: Answer common questions. Reduce support burden.

**Sections**:

1. **Hero**: "Frequently Asked Questions" — answers about VanEck Direct
2. **FAQ Accordion** — 6 collapsible categories:
   - **Over VanEck Direct**: Passive investing, AFM license, company background (since 1955), ESG, dividends
   - **Beleggen & Dividend**: Dividend distribution, reinvestment, cash withdrawal
   - **Account aanmaken**: Min €100 opening, min €50 periodic, no portfolio transfers, single account
   - **Storten & Opnemen**: Free deposits, €1 withdrawal fee, 5–7 business days processing, SEPA debit setup
   - **Risico's & Veiligheid**: 5 risk levels, 350+ stocks / 65+ bonds diversification, emergency fund advice, insolvency protection
   - **Overig**: Box 3 tax, DGS deposit guarantee (€100K max), Netherlands-only, Dutch-only, no web platform
3. **Contact Block** — Email: direct@vaneck.com, Phone: +31 (0)20 808 5543, Address: Barbara Strozzilaan 310, 1083 HN Amsterdam
4. **CTA Section**

**Components needed**: Accordion/collapsible component with category grouping

---

### 5. `/ons-verhaal` — Over Ons

**Purpose**: Build trust through company story and team.

**Sections**:

1. **Hero**: "Samen bouwen we aan een betere financiële toekomst voor jou"
2. **Credentials** — Three badges:
   - AFM vergunning (AFM License)
   - In 2024 gelanceerd (Launched in 2024)
   - Ervaring sinds 1955 (Experience since 1955)
3. **Mission Statement**: Belief in financial freedom, ETFs making wealth-building accessible, millions investing through VanEck worldwide
4. **Leadership Quotes**:
   - **Lies Oudemans**: Tip for beginners — don't start with individual stocks, choose diversified baskets
   - **Martijn Rozemuller** (CEO VanEck Europe): "Met VanEck Direct willen we de barrières bij beleggen wegnemen"
5. **Team Grid**: Photo cards with name and title (Femke van Pijkeren, Jeroen Braak, Shubhra Singh, Fleur Schyns, etc.)
6. **CTA Section**

**Components needed**: Credential badges, team member cards, quote blocks

---

### 6. `/contact` — Contact

**Purpose**: Provide contact details and complaint submission.

**Sections**:

1. **Hero**: "Contact"
2. **Contact Details**:
   - Email: direct@vaneck.com
   - Phone: +31 (0)20 808 5543
   - Address: Barbara Strozzilaan 310, 1083 HN Amsterdam
3. **Holiday Hours** (seasonal): Service closure dates and transaction processing info
4. **Complaint Form**: Name, email, message fields with success/error states
5. **CTA Section**

**Components needed**: Contact info cards, complaint form with validation

---

### 7. `/demo` — Demo

**Purpose**: Let visitors preview the app experience.

**Sections**:

1. **Hero**: "Nieuwsgierig?" — "Hier is vast een voorproefje"
2. **Interactive Demo**: Embedded app demo/walkthrough (app screenshots or interactive preview)
3. **CTA Section**

**Components needed**: Demo embed or interactive screenshot carousel

---

## Tier 2: Marketing/SEO Landing Pages

These pages follow a shared "landing page" pattern:
1. Hero with 3 checkmark value propositions + app download buttons
2. "Herken je dit...?" (pain points) section with 3 red-X items
3. Solution section with 3 feature cards
4. 3-step CTA: Download → Plan → Automate
5. App download CTA

### 8. `/automatisch-beleggen-app` — Automatisch Beleggen

**Hero**: "Automatisch beleggen voor de lange termijn"
**Value Props**: Global diversification, ETF pioneers (15yr experience), automatic & flexible
**Pain Points**: Overwhelming options, don't want to monitor daily, risk of concentrated bets
**Solutions**: Long-term focus, automated monthly investing, diversified ETFs without decision fatigue
**3-Step CTA**: Download → Create plan → Automate & relax

---

### 9. `/etf-beleggingsapp` — ETF Beleggen

**Hero**: "The ETF investment app for patient investors"
**Value Props**: Direct globally diversified portfolio, built by ETF pioneers, compound returns
**Pain Points**: Too many options, daily monitoring burden, risk concentration
**Solutions**: Personal portfolio management, long-term wealth building, worldwide diversified ETFs
**3-Step CTA**: Download → Plan → Automate

---

### 10. `/beste-beleggingsapp` — Beste Beleggingsapp

**Hero**: "Beste beleggingsapp voor beleggen zonder gedoe"
**Value Props**: Automated monthly investing, app-based control, VanEck 15yr ETF expertise
**Pain Points**: Overwhelming choices, unclear fees at competitors, trust concerns
**Solutions**: Cost efficiency (0.5% mgmt + 0.18-0.22% fund), in-house ETF expertise, simplified automation
**3-Step CTA**: Download → Plan → Automate

---

### 11. `/beleggingsapp-voor-beginners` — Voor Beginners

**Hero**: "Ideale beleggingsapp voor beginners zonder ervaring"
**Value Props**: Professional management (VanEck experts), personalized plans, flexible pacing
**Pain Points**: Choice paralysis, complex terminology, results uncertainty
**Solutions**: Expert portfolio management, clear explanations in plain language (no jargon), globally diversified across 4 baskets
**3-Step CTA**: Download → Plan → Automate

---

### 12. `/saai-beleggen` — Saai Beleggen

**Hero heading with 3 checkmark value props** (simplicity, expert management, automated diversification)
**How it works**: VanEck ETFs as diversified baskets, NIBUD 3–6 month emergency savings recommendation
**"No sleepless nights"**: Contrast complex jargon/risky products with VanEck's simple approach
**Company credibility**: Established 1955, global ETF expertise
**Costs section**: 0.5% management + 0.18-0.22% fund costs, €5K neutral = €2.92/month
**Control section**: Flexible contributions and withdrawals

*Note: This is the most detailed landing page — essentially a standalone homepage variant.*

---

### 13. `/duurzaamheid` — ESG / Duurzaamheid

**Purpose**: Explain ESG approach and SFDR compliance.

**Sections**:

1. **Hero**: ESG bij VanEck Direct
2. **Sustainability Risks**: Definition of ESG risks (climate, labor, governance)
3. **Risk Mitigation**: ESG consideration in investment process
4. **Exclusion Policy**: Companies violating international laws, sanctions. Exclusions: alcohol, weapons, tobacco, gambling, genetic modification, adult entertainment
5. **ETF-specific screening**:
   - Real estate ETF: Transparency score below "E" excluded
   - Corporate bonds ETF: ESG score determines weighting
   - World Equal Weight ETF: UN Global Compact violations and controversial weapons excluded
6. **Proxy Voting**: Glass Lewis Europe appointed as proxy voting specialist
7. **SFDR Classification**: 3 of 4 ETFs are Article 8 (promoting ecological/social characteristics):
   - VanEck World Equal Weight UCITS ETF
   - VanEck Global Real Estate UCITS ETF
   - VanEck iBoxx EUR Corporates UCITS ETF
8. **Pre-contractual Documents**: Download links for 5 risk profiles
9. **CTA Section**

---

### 14. `/support` — Support

**Purpose**: Help center hub.

**Sections**:

1. **Hero**: "We helpen je graag" — comprehensive articles and FAQ about VanEck Direct
2. **Featured FAQ Cards**: 5 expandable topics (costs, getting started, knowledge requirements, self-directed vs managed, what investing means)
3. **Contact Block**: Phone, email, address
4. **CTA Section**

---

### 15. `/blog` — Blog

**Purpose**: Content hub for educational articles.

**Sections**:

1. **Hero**: Blog introduction
2. **Article Grid**: Card layout with thumbnail images, titles, and excerpts
   - Topics: Why VanEck Direct was founded, financial health, beginner investing, ETF fundamentals, automated monthly investing, return calculations, key concepts
3. **CTA Section**

**Note**: Blog article detail pages (`/blog/[slug]`) are out of scope for this PRD.

---

## Tier 3: Legal & Compliance Pages

These pages are text-heavy legal documents with minimal design. They share a common template:
1. Page title heading
2. Long-form text content (sections/paragraphs)
3. CTA Section

### 16. `/privacy` — Privacybeleid

11 numbered sections covering: responsibility, data collection, usage (10 purposes), consent, data sharing (ID&Pay, VI Company, Flynck, LexisNexis), retention, security, policy changes, user rights, cookies/tracking, contact (privacy@vaneck.com). Appendix with legal basis table.

### 17. `/terms-conditions` — Algemene Voorwaarden

Short-form terms: general disclaimers, product performance, foreign investor info, hyperlinks/virus warnings. Emphasis: content is informational, not investment advice.

### 18. `/cookies` — Cookiebeleid

Cookie policy covering: types of cookies used, consent management, third-party cookies.

### 19. `/best-execution` — Best Execution Beleid

Policy scope, execution criteria (price, costs, speed, likelihood), order consolidation, custodian: ABN AMRO Clearing Bank N.V.

### 20. `/verklaring` — Toegankelijkheidsverklaring

Scope: iOS and Android app. Disproportionate burden exemption. Contact: direct@vaneck.com / +31 (0)20 808 5543. Last reviewed: September 12, 2025.

### 21. `/klachten` — Klachten & Feedback

Complaints procedure (dated Sept 23, 2024): required info (name, address, date, details), 5-day acknowledgment, 15-day response. Escalation: KIFID or civil courts. Contact: complaints-europe@vaneck.com.

---

## Reusable Components to Build

| Component | Used On | Description |
|---|---|---|
| `ETFCard` | hoe-werkt-het | ETF name, description, risk score, link |
| `RiskProfileSlider` | hoe-werkt-het | Carousel showing 5 allocation profiles |
| `StepRoadmap` | hoe-werkt-het | 6-step visual process |
| `CostTable` | kosten | 5-row comparison table |
| `CostBreakdownCard` | kosten, saai-beleggen | Fee category explanation card |
| `PerformanceTable` | rendement | Year-by-year returns across profiles |
| `FAQAccordion` | faq, support | Collapsible Q&A with category groups |
| `TeamMemberCard` | ons-verhaal | Photo, name, title |
| `QuoteBlock` | ons-verhaal | Leadership quote with attribution |
| `CredentialBadge` | ons-verhaal | Icon + label badge |
| `ContactBlock` | contact, faq, support | Email, phone, address display |
| `ComplaintForm` | contact | Form with validation and success/error states |
| `LandingPageHero` | 4 SEO pages | Hero with 3 checkmarks + app buttons |
| `PainPointsSection` | 4 SEO pages | "Herken je dit?" with 3 red-X items |
| `SolutionCards` | 4 SEO pages | 3 feature cards with illustrations |
| `ThreeStepCTA` | 4 SEO pages | Download → Plan → Automate |
| `LegalPageLayout` | 5 legal pages | Title + long-form text + CTA |
| `BlogCard` | blog | Thumbnail + title + excerpt card |

---

## Implementation Order

1. **Shared components**: LandingPageHero, PainPointsSection, SolutionCards, ThreeStepCTA, LegalPageLayout, FAQAccordion, ContactBlock
2. **Tier 1 pages**: hoe-werkt-het, kosten, rendement, faq, ons-verhaal, contact, demo
3. **Tier 2 pages**: automatisch-beleggen-app, etf-beleggingsapp, beste-beleggingsapp, beleggingsapp-voor-beginners, saai-beleggen, duurzaamheid, support, blog
4. **Tier 3 pages**: privacy, terms-conditions, cookies, best-execution, verklaring, klachten

---

## Out of Scope

- Blog article detail pages (`/blog/[slug]`)
- Help center articles (`/help/[slug]`) — 42 articles on the real site
- App store deep links and actual app download flows
- User authentication / account management
- CMS integration for content management
- Analytics and tracking implementation
- A/B testing infrastructure
