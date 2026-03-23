# Requirements: Sonic Next.js Website

**Defined:** 2026-03-23
**Core Value:** Pixel-accurate Next.js implementation of the Framer design with reusable components

## v1 Requirements

### Foundation

- [x] **FOUND-01**: Next.js 15 project initialized with App Router, TypeScript, src directory
- [ ] **FOUND-02**: Design tokens defined as CSS custom properties matching all 12 Framer color styles
- [ ] **FOUND-03**: Typography system matching all 9 Framer text styles (H1–H6, Body XL/L/M)
- [x] **FOUND-04**: Inter font loaded via next/font with weights 400, 500, 600, 700
- [x] **FOUND-05**: next/image configured with framerusercontent.com remote patterns
- [ ] **FOUND-06**: Global CSS reset and base styles applied

### UI Components

- [ ] **UI-01**: Button component with primary and secondary variants matching Framer design
- [ ] **UI-02**: Badge component with icon + text matching Framer design
- [ ] **UI-03**: Container component (1200px max-width, centered)
- [ ] **UI-04**: TopWrapper component (icon + heading label)
- [ ] **UI-05**: FeatureCard component (icon, title, description) matching Framer design
- [ ] **UI-06**: BlogCard component (image, title, date) matching Framer design
- [ ] **UI-07**: SocialIcon component for footer

### Layout

- [ ] **LAYOUT-01**: Navbar — fixed position, blurred backdrop, logo + 4 nav links + CTA button
- [ ] **LAYOUT-02**: Footer — dark background, logo with tagline, Company links, Legal links, social icons, copyright
- [ ] **LAYOUT-03**: Navbar scroll behavior — border appears on scroll

### Sections

- [ ] **SECT-01**: Hero section — centered H1, body text, CTA button, product image below
- [ ] **SECT-02**: About section — flowing text with inline images using flex-wrap layout
- [ ] **SECT-03**: Features section 1 — content left (TopWrapper, H4, body, CTA), parallax image right
- [ ] **SECT-04**: Features section 2 — parallax image left, content right (mirror layout)
- [ ] **SECT-05**: Stats section — badge, H3 heading, description, 3 FeatureCards in a row
- [ ] **SECT-06**: Product section — badge, H3 heading, description, image carousel
- [ ] **SECT-07**: FAQ section — heading column left, accordion column right with 5 FAQ items
- [ ] **SECT-08**: Blog section — badge, H3 heading, description, 3-column blog card grid
- [ ] **SECT-09**: CTA section — H1 heading, large CTA button left, H5 + body text right

### Interactivity

- [ ] **INTER-01**: FAQ accordion — click to expand/collapse with smooth height animation
- [ ] **INTER-02**: Image carousel — auto-scrolling through 3 product images
- [ ] **INTER-03**: Parallax scroll effect on feature section images
- [ ] **INTER-04**: Scroll-triggered fade-in animations on all sections
- [ ] **INTER-05**: Smooth scroll navigation from navbar anchor links

### Data Layer

- [ ] **DATA-01**: All content extracted into typed data files (not hardcoded in components)
- [ ] **DATA-02**: Navigation links, FAQ items, blog posts, stats, footer links as separate data files

## v2 Requirements

### Responsive

- **RESP-01**: Tablet breakpoint (810px) matching Framer tablet variant
- **RESP-02**: Mobile breakpoint (390px) matching Framer mobile variant
- **RESP-03**: Mobile navbar with hamburger menu

### Additional Pages

- **PAGE-01**: Blog listing page (/blogs)
- **PAGE-02**: Individual blog post page (/blogs/:slug)
- **PAGE-03**: Contact page (/contact)
- **PAGE-04**: Legal pages (/legal/:slug)
- **PAGE-05**: Custom 404 page

### Polish

- **POLISH-01**: SEO meta tags and Open Graph
- **POLISH-02**: Performance optimization (Core Web Vitals)
- **POLISH-03**: Accessibility audit and WCAG AA compliance

## Out of Scope

| Feature | Reason |
|---------|--------|
| CMS/backend integration | Static content only for v1, no dynamic data |
| E-commerce/checkout | CTA buttons are placeholder links |
| Contact form submission | No backend to handle form data |
| Dark mode | Not in Framer design |
| Authentication | Marketing site, no user accounts |
| Analytics/tracking | Can be added later without code changes |
| Mobile responsive | Desktop-only for v1, deferred to v2 |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| FOUND-01 | Phase 1 | Complete |
| FOUND-02 | Phase 1 | Pending |
| FOUND-03 | Phase 1 | Pending |
| FOUND-04 | Phase 1 | Complete |
| FOUND-05 | Phase 1 | Complete |
| FOUND-06 | Phase 1 | Pending |
| UI-01 | Phase 2 | Pending |
| UI-02 | Phase 2 | Pending |
| UI-03 | Phase 2 | Pending |
| UI-04 | Phase 2 | Pending |
| UI-05 | Phase 2 | Pending |
| UI-06 | Phase 2 | Pending |
| UI-07 | Phase 2 | Pending |
| DATA-01 | Phase 2 | Pending |
| DATA-02 | Phase 2 | Pending |
| LAYOUT-01 | Phase 3 | Pending |
| LAYOUT-02 | Phase 3 | Pending |
| LAYOUT-03 | Phase 3 | Pending |
| SECT-01 | Phase 3 | Pending |
| SECT-02 | Phase 3 | Pending |
| SECT-03 | Phase 3 | Pending |
| SECT-04 | Phase 3 | Pending |
| SECT-05 | Phase 3 | Pending |
| SECT-06 | Phase 3 | Pending |
| SECT-07 | Phase 3 | Pending |
| SECT-08 | Phase 3 | Pending |
| SECT-09 | Phase 3 | Pending |
| INTER-01 | Phase 4 | Pending |
| INTER-02 | Phase 4 | Pending |
| INTER-03 | Phase 4 | Pending |
| INTER-04 | Phase 4 | Pending |
| INTER-05 | Phase 4 | Pending |

**Coverage:**
- v1 requirements: 30 total
- Mapped to phases: 30
- Unmapped: 0

---
*Requirements defined: 2026-03-23*
*Last updated: 2026-03-23 after roadmap creation (4-phase coarse structure)*
