# Project Research Summary

**Project:** Sonic -- Speaker Product Website
**Domain:** Marketing / Product Landing Page (Framer-to-Next.js conversion)
**Researched:** 2026-03-23
**Confidence:** HIGH

## Executive Summary

Sonic is a pixel-accurate conversion of a Framer-designed premium speaker marketing site into a Next.js 15 App Router application. The established pattern for this type of project is to treat the Framer design as a strict visual spec, extract design tokens verbatim, and build a component-per-section architecture that mirrors the Framer component tree. The stack is intentionally minimal: Next.js 15, React 19, TypeScript, CSS Modules, and Motion (framer-motion successor) -- no CSS framework, no CMS, no backend.

The recommended approach is a bottom-up build: design tokens and global styles first, then atomic UI components (Button, Badge), then composite cards, then layout shell (Navbar, Footer), then static sections, and finally interactive sections (parallax, accordion, carousel). This order respects component dependencies and defers client-side complexity until the static foundation is solid. Only 4-5 components out of ~20 need "use client" directives.

The primary risks are Framer-to-CSS spacing drift (auto-layout values not mapping correctly to flexbox), hydration mismatches from scroll-dependent animations, and the About section's inline-images-in-flowing-text layout which is the single hardest CSS challenge. All are manageable with side-by-side visual comparison, Motion's SSR-safe hooks, and dedicated time for the About section.

## Key Findings

### Recommended Stack

Minimal stack leveraging Next.js built-ins. No external UI library, no CSS framework, no state management.

**Core technologies:**
- **Next.js 15 (App Router):** Framework -- server components by default, built-in image/font optimization
- **TypeScript 5.x:** Language -- strict mode, type safety for props and data
- **CSS Modules + Custom Properties:** Styling -- 1:1 mapping to Framer design tokens, zero translation overhead
- **Motion 12.x:** Animations -- useInView for scroll fades, useScroll/useTransform for parallax, SSR-compatible
- **next/font (Inter):** Typography -- zero-CLS font loading, web fallback for SF UI Display
- **next/image:** Images -- remote patterns for framerusercontent.com CDN, automatic optimization

**What to avoid:** Tailwind (translation overhead), styled-components (incompatible with RSC), GSAP (overkill), Radix/shadcn (unnecessary).

### Expected Features

**Must have (table stakes):**
- Fixed navbar with backdrop blur and scroll-triggered border
- Hero section with CTA and product image
- Scroll-triggered fade-in animations on all sections
- FAQ accordion with accessible expand/collapse
- Image optimization via next/image
- Design token system matching Framer exactly
- Semantic HTML with ARIA attributes
- Structured footer with links and social icons
- Fast LCP (<2.5s)

**Should have (differentiators):**
- Parallax scroll on feature images
- About section with inline images in flowing text (hardest layout)
- Image carousel with auto-scroll
- Staggered animation sequencing
- Hover micro-interactions on cards/buttons

**Defer (v2+):**
- Mobile/responsive layouts
- CMS integration
- Blog dynamic routing
- Contact form functionality
- SEO optimization beyond basic meta

### Architecture Approach

Single-page marketing site with section-based component architecture. Server components by default; only Navbar, FeaturesSection, FAQItem, and ImageCarousel need "use client". All content lives in typed `data/*.ts` files, imported directly by consuming components -- no prop drilling, no state management, no API layer.

**Major components:**
1. **RootLayout** -- font loading, global styles, wraps Navbar + page + Footer
2. **Section components (8)** -- one per design section, mostly server-rendered
3. **Interactive components (4)** -- client-only: Navbar (scroll), FeaturesSection (parallax), FAQItem (accordion), ImageCarousel (auto-scroll)
4. **Data layer** -- static TypeScript files exporting typed content arrays (future CMS-ready)

### Critical Pitfalls

1. **Framer spacing drift** -- Auto-layout gap/padding/distribution values must map exactly to CSS flexbox. Prevention: create a Framer-to-CSS mapping reference, compare every section side-by-side.
2. **Hydration mismatches** -- Motion components using window.scrollY will differ between server and client. Prevention: use Motion's SSR-safe hooks (useInView, useScroll), set initial states to match server HTML.
3. **"use client" boundary creep** -- Adding client directives to too many components kills SSR. Prevention: strict rule of only 4 client components, pass children pattern for composition.
4. **Typography metrics mismatch** -- SF UI Display vs Inter have different metrics. Prevention: use next/font, visually compare headings, accept minor differences.
5. **About section inline images** -- Hardest CSS challenge, mixed text spans and images in flex-wrap. Prevention: allocate extra time, test thoroughly.

## Implications for Roadmap

Based on research, suggested phase structure:

### Phase 1: Foundation
**Rationale:** Everything depends on design tokens, fonts, and project config. Must come first.
**Delivers:** Next.js project scaffold, global styles with design tokens, font configuration, next.config with image remote patterns, TypeScript types
**Addresses:** Design token system, image optimization config, font loading
**Avoids:** Typography mismatch (set up Inter correctly from start), image config errors

### Phase 2: Atomic UI + Data Layer
**Rationale:** Cards and sections depend on atomic components; sections depend on data files. Build both before any sections.
**Delivers:** Button, Badge, SocialIcon, Container components + all data/*.ts content files
**Addresses:** Reusable UI elements, content extraction from Framer
**Avoids:** Hardcoded content in components (extract to data layer now)

### Phase 3: Layout Shell
**Rationale:** Navbar and Footer wrap all page content. Need these before assembling sections.
**Delivers:** Navbar (client -- scroll behavior, blur), Footer (server -- links, social icons), page layout structure
**Addresses:** Fixed navbar with backdrop blur, structured footer
**Avoids:** Client boundary creep (Navbar is one of only 4 client components)

### Phase 4: Static Sections
**Rationale:** Build all server-rendered sections before tackling interactive ones. Validates design token accuracy across the full page.
**Delivers:** HeroSection, AboutSection, StatsSection, BlogSection, CTASection + FeatureCard, BlogCard
**Addresses:** Hero CTA, About inline images, stats grid, blog grid, CTA block
**Avoids:** Spacing drift (validate each section against Framer before moving on)

### Phase 5: Interactive Sections
**Rationale:** Parallax, accordion, and carousel all require client-side JS. Group to contain hydration risk.
**Delivers:** FeaturesSection (parallax), FAQSection + FAQItem (accordion), ProductSection + ImageCarousel
**Addresses:** Parallax scroll, FAQ accordion, image carousel, scroll-triggered animations
**Avoids:** Hydration mismatches (use Motion SSR-safe hooks), parallax jank (useScroll + will-change), carousel accessibility (pause on hover/focus)

### Phase 6: Page Assembly + Polish
**Rationale:** Final integration of all sections into routes, smooth scroll behavior, animation sequencing, accessibility audit.
**Delivers:** Complete home page, blog listing page, contact page, 404 page, smooth scroll navigation, staggered animations
**Addresses:** Smooth scroll navigation, staggered animation sequencing, accessible markup audit
**Avoids:** Missing accessibility (run "looks done but isn't" checklist from PITFALLS.md)

### Phase Ordering Rationale

- Tokens before components, components before sections, static before interactive -- strict dependency chain from ARCHITECTURE.md
- Data layer early (Phase 2) prevents hardcoded content pitfall and enables CMS migration later
- Interactive sections grouped in Phase 5 to isolate hydration/animation complexity
- Polish phase at end to catch cross-section issues (scroll offsets, animation timing, a11y)

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 4 (Static Sections):** The About section inline-images-in-text layout is flagged as the hardest CSS challenge -- may need phase-level research for the flex-wrap approach
- **Phase 5 (Interactive Sections):** Parallax + carousel implementations need specific Motion API patterns -- research-phase recommended

Phases with standard patterns (skip research-phase):
- **Phase 1 (Foundation):** Well-documented Next.js setup, nothing novel
- **Phase 2 (Atomic UI):** Standard component patterns
- **Phase 3 (Layout Shell):** Standard navbar/footer patterns
- **Phase 6 (Assembly):** Integration work, no new patterns

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Minimal stack, all choices are Next.js defaults or near-defaults |
| Features | HIGH | Complete feature list derived from existing Framer design + HTML prototype |
| Architecture | HIGH | Clear component hierarchy, well-defined server/client boundaries |
| Pitfalls | HIGH | Concrete, actionable pitfalls with specific prevention strategies |

**Overall confidence:** HIGH

### Gaps to Address

- **About section CSS approach:** The inline-images-in-flowing-text pattern needs prototyping during Phase 4. May require fallback approach if flex-wrap doesn't achieve pixel accuracy.
- **Motion 12.x API specifics:** Verify exact API surface for useScroll/useTransform in current version during Phase 5 planning.
- **Carousel implementation details:** Auto-scroll behavior, transition timing, and pause-on-interaction need specification during Phase 5.
- **Framer CDN reliability:** Images reference framerusercontent.com -- if CDN changes URLs, all images break. Consider downloading critical assets as a risk mitigation step.

## Sources

### Primary (HIGH confidence)
- Existing HTML/CSS/JS prototype in project root (index.html, styles.css, script.js)
- Framer design file (Sonic-copy--KZONd6UIyL6d8N9Tte4t-giXhb)
- Next.js 15 official documentation (App Router, next/image, next/font)
- Motion library documentation (useInView, useScroll, useTransform)

### Secondary (MEDIUM confidence)
- CSS Modules best practices for design token systems
- React 19 Server Components patterns

---
*Research completed: 2026-03-23*
*Ready for roadmap: yes*
