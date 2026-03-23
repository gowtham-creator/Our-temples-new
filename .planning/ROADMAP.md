# Roadmap: Sonic Speaker Website

## Overview

Convert the Framer-designed Sonic speaker marketing site into a pixel-accurate Next.js 15 application. The build follows a bottom-up dependency chain: design tokens and project scaffold first, then reusable UI components with structured data, then all page sections with layout shell, and finally interactive behaviors. Four phases, each delivering a coherent, verifiable layer of the site.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Foundation** - Next.js project scaffold with design tokens, typography, and image configuration
- [ ] **Phase 2: UI Components + Data Layer** - Reusable atomic components and typed content data files
- [ ] **Phase 3: Layout + Sections** - Navbar, Footer, and all 9 page sections assembled with pixel-accurate styling
- [ ] **Phase 4: Interactivity** - Parallax, accordion, carousel, scroll animations, and smooth navigation

## Phase Details

### Phase 1: Foundation
**Goal**: Developer can run the Next.js app and see correct fonts, colors, and image loading working
**Depends on**: Nothing (first phase)
**Requirements**: FOUND-01, FOUND-02, FOUND-03, FOUND-04, FOUND-05, FOUND-06
**Success Criteria** (what must be TRUE):
  1. Running `npm run dev` serves a Next.js app at localhost:3000 with no errors
  2. All 12 Framer color tokens are available as CSS custom properties
  3. All 9 typography styles (H1-H6, Body XL/L/M) render with correct font-size, weight, and line-height
  4. Inter font loads without layout shift (next/font configured with weights 400-700)
  5. A test next/image renders a framerusercontent.com image without configuration errors
**Plans:** 2 plans

Plans:
- [ ] 01-01-PLAN.md -- Scaffold Next.js 15 project, configure Inter font, set up Framer CDN image support
- [ ] 01-02-PLAN.md -- Design tokens, typography classes, CSS reset, and visual verification test page

### Phase 2: UI Components + Data Layer
**Goal**: All reusable UI building blocks exist and all page content is extracted into typed data files
**Depends on**: Phase 1
**Requirements**: UI-01, UI-02, UI-03, UI-04, UI-05, UI-06, UI-07, DATA-01, DATA-02
**Success Criteria** (what must be TRUE):
  1. Button component renders primary and secondary variants matching Framer design specs
  2. Badge, Container, TopWrapper, FeatureCard, BlogCard, and SocialIcon components each render correctly in isolation
  3. All page content (nav links, FAQ items, blog posts, stats, footer links) lives in typed data/*.ts files, not hardcoded in components
  4. TypeScript compilation passes with strict mode on all components and data files
**Plans**: TBD

Plans:
- [ ] 02-01: TBD

### Phase 3: Layout + Sections
**Goal**: The complete homepage is visible with all sections rendered in correct layout, matching the Framer design pixel-for-pixel (without interactive behaviors)
**Depends on**: Phase 2
**Requirements**: LAYOUT-01, LAYOUT-02, LAYOUT-03, SECT-01, SECT-02, SECT-03, SECT-04, SECT-05, SECT-06, SECT-07, SECT-08, SECT-09
**Success Criteria** (what must be TRUE):
  1. Navbar is fixed at top with blurred backdrop, logo, 4 nav links, and CTA button visible
  2. Footer renders with dark background, logo, tagline, Company links, Legal links, social icons, and copyright
  3. All 9 sections (Hero, About, Features x2, Stats, Product, FAQ, Blog, CTA) render in correct order with content from data files
  4. Side-by-side comparison with Framer design shows correct spacing, colors, and typography across all sections
  5. About section renders flowing text with inline images using flex-wrap layout
**Plans**: TBD

Plans:
- [ ] 03-01: TBD

### Phase 4: Interactivity
**Goal**: The site feels alive -- scroll animations, parallax effects, accordion, carousel, and smooth navigation all work
**Depends on**: Phase 3
**Requirements**: INTER-01, INTER-02, INTER-03, INTER-04, INTER-05
**Success Criteria** (what must be TRUE):
  1. Clicking a navbar link smooth-scrolls to the corresponding section
  2. FAQ items expand and collapse with smooth height animation on click
  3. Product image carousel auto-scrolls through 3 images
  4. Feature section images move with parallax effect on scroll
  5. All sections fade in when scrolled into view
**Plans**: TBD

Plans:
- [ ] 04-01: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 3 -> 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation | 0/2 | Planning complete | - |
| 2. UI Components + Data Layer | 0/0 | Not started | - |
| 3. Layout + Sections | 0/0 | Not started | - |
| 4. Interactivity | 0/0 | Not started | - |
