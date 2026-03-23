# Pitfalls Research — Sonic Next.js Marketing Site

## Critical Pitfalls

### 1. Framer Spacing/Auto-Layout to CSS Flexbox Drift

**Risk:** High
**Phase:** Foundation + All Sections

Framer uses auto-layout with specific gap, padding, and distribution values. These must map exactly to CSS flexbox/grid properties. Common drift:
- Framer `stackDistribution: "center"` → `justify-content: center`
- Framer `stackAlignment: "center"` → `align-items: center`
- Framer `1fr` width → `flex: 1` in CSS
- Framer `fit-content` → `width: fit-content` or `flex-shrink: 0`

**Prevention:** Create a Framer-to-CSS mapping reference. Test every section against the Framer design side-by-side.

### 2. Hydration Mismatches from Scroll/Animation Libraries

**Risk:** High
**Phase:** Interactive Sections

Motion components that depend on `window.scrollY` or `IntersectionObserver` will mismatch between server and client renders.

**Prevention:**
- Use `useInView` from Motion (handles SSR gracefully)
- Wrap scroll-dependent code in `useEffect`
- Set initial animation states to match server-rendered HTML (opacity: 0, translateY: 30px)

### 3. "use client" Boundary Creep

**Risk:** Medium
**Phase:** All component phases

Temptation to add "use client" to every component that imports another client component. This kills SSR benefits.

**Prevention:**
- Only 5 components need "use client": Navbar, FeaturesSection, FAQItem, ImageCarousel
- Keep section wrappers as server components
- Pass children to client components instead of making parents client

### 4. Typography Mismatch (SF UI Display vs Inter)

**Risk:** Medium
**Phase:** Foundation

Framer uses SF UI Display (Apple proprietary). Inter is the web fallback but has slightly different metrics (letter-spacing, x-height, cap-height).

**Prevention:**
- Use `next/font` with Inter, weights 400/500/600/700
- Apply `size-adjust` if needed for metric compatibility
- Visually compare every heading level against Framer
- Accept minor differences — pixel-perfect typography across font families is impossible

### 5. Next.js Image Component vs Framer CDN URLs

**Risk:** Medium
**Phase:** Foundation

`next/image` requires explicit `remotePatterns` config. Framer CDN URLs have specific format: `https://framerusercontent.com/images/{hash}.{ext}`

**Prevention:**
```js
// next.config.ts
images: {
  remotePatterns: [{
    protocol: 'https',
    hostname: 'framerusercontent.com',
    pathname: '/images/**'
  }]
}
```
- Always specify `width` and `height` or use `fill` with a sized container
- Use `priority` prop for above-fold hero image

### 6. Parallax Scroll Jank

**Risk:** Medium
**Phase:** Interactive Sections

Main-thread scroll handlers cause jank. The existing prototype uses `addEventListener('scroll')` without throttling.

**Prevention:**
- Use Motion's `useScroll` (uses `requestAnimationFrame` internally)
- Apply `will-change: transform` to parallax images
- Keep parallax transforms simple (translateY only)
- Test at 60fps on throttled CPU

### 7. Hardcoded Content Blocking Future CMS

**Risk:** Low (acceptable for now)
**Phase:** Data layer

All content is hardcoded in the Framer design. Hardcoding in React components makes future CMS integration painful.

**Prevention:**
- Extract all content into `data/*.ts` files (arrays/objects)
- Components receive content via props, not inline strings
- When CMS is added later, only the data layer changes

## "Looks Done But Isn't" Checklist

- [ ] FAQ accordion has `aria-expanded` attribute toggling
- [ ] All images have meaningful alt text
- [ ] Navbar links scroll to correct section with offset
- [ ] Carousel pauses on hover/focus (accessibility)
- [ ] External links have `rel="noopener noreferrer"`
- [ ] Font loaded without layout shift (FOUT/FOIT)
- [ ] All buttons have visible focus styles

## Pitfall-to-Phase Mapping

| Pitfall | Address In |
|---------|-----------|
| Spacing drift | Every section phase — compare against Framer |
| Hydration mismatch | Interactive sections (Features, FAQ, Carousel) |
| Client boundary creep | Component architecture phase |
| Typography mismatch | Foundation phase |
| Image configuration | Foundation phase |
| Parallax jank | Features section phase |
| Hardcoded content | Data layer setup |

---
*Researched: 2026-03-23*
