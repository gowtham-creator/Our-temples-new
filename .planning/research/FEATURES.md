# Features Research — Sonic Next.js Marketing Site

## Table Stakes (Must Have)

| Feature | Complexity | Notes |
|---------|-----------|-------|
| Fixed navbar with backdrop blur | Low | Sticky position, blur filter, scroll border transition |
| Smooth scroll navigation | Low | Anchor links with scroll-margin-top offset |
| Scroll-triggered fade-in animations | Medium | IntersectionObserver or Motion `useInView` |
| Hero section with CTA | Low | Centered heading, body, button, product image |
| FAQ accordion | Medium | Expand/collapse with state, smooth height animation |
| Image optimization (next/image) | Low | Remote patterns config for Framer CDN |
| Design token system | Low | CSS custom properties matching Framer exactly |
| Accessible markup | Medium | Semantic HTML, ARIA on FAQ, focus styles |
| Structured footer | Low | Grid layout, links, social icons, copyright |
| Fast LCP (<2.5s) | Medium | Font preload, image priority, server rendering |

## Differentiators (Competitive Edge)

| Feature | Complexity | Notes |
|---------|-----------|-------|
| Parallax scroll on feature images | Medium | `useScroll`/`useTransform` from Motion |
| Inline images in flowing text (About section) | **High** | Signature layout — hardest CSS challenge |
| Image carousel | Medium | Auto-scroll with smooth transitions |
| Staggered animation sequencing | Low | Delay props on Motion `motion.div` |
| Navbar border transition on scroll | Low | Scroll listener, conditional style |
| Hover micro-interactions on cards/buttons | Low | CSS transitions, transform + opacity |
| Priority loading strategy | Medium | Above-fold images eager, rest lazy |

## Anti-Features (Do NOT Build)

| Feature | Reason |
|---------|--------|
| Hamburger menu on desktop | Desktop-only scope, no mobile layout |
| Complex route animations | Over-engineering for marketing site |
| Video hero / background video | Not in design, bandwidth concern |
| Infinite scroll blog | Static blog grid, 3 cards only |
| Cookie consent banner | No tracking, no cookies |
| Chat widget | Not in design, adds complexity |
| Scroll-jacking | Breaks native scroll, bad UX |
| Loading spinners | Static site should be instant |
| Dark mode toggle | Not in Framer design |
| Carousel autoplay without pause | Accessibility violation |

## Dependencies

```
Design Tokens (colors, typography, spacing)
  └── All components depend on this
       ├── Atomic UI (Button, Badge, Container)
       │   └── Cards (FeatureCard, BlogCard)
       │       └── Sections (Stats, Blog, etc.)
       └── Layout (Navbar, Footer)
           └── Page assembly
```

## Critical Note

The **About section** with inline images in flowing text is the single hardest layout challenge. It uses CSS `flex-wrap` with mixed text spans and image elements — needs extra attention and testing.

---
*Researched: 2026-03-23*
