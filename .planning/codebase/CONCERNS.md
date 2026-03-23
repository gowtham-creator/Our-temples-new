# Concerns

## Technical Debt

### Monolithic Page Component
- `src/app/page.tsx` contains all sections inline (~300 lines)
- Each section (Hero, About, Features, Stats, Product, FAQ, Blog, CTA) could be extracted into separate components
- Currently manageable but will become unwieldy if sections grow or get interactive features

### Hardcoded Framer CDN URLs
- All images reference `https://framerusercontent.com/images/` directly in component code
- No centralized image manifest or constants file
- If Framer CDN URLs change or expire, images will break silently
- Logo SVG in Navbar uses raw `<img>` tag with ESLint override instead of `next/image`

### Non-Standard Spacing Scale
- Gap values (10px, 16px, 32px, 42px, 62px, 80px, 160px) are hardcoded in CSS
- No spacing tokens in `:root` — only color and typography tokens are systematized
- Makes consistent spacing across new sections harder to maintain

## Performance

### Image Loading
- Multiple images marked `priority` — `ParallaxImage`, `HeroImage`, `ImageCarousel` all use `priority`
- Excessive priority flags defeat the purpose (browsers can only prioritize a few resources)
- Carousel loads all 3 images eagerly even though only 1 is visible

### Client-Side JavaScript
- 7 client components for a mostly static page
- `SmoothScroll` component initializes Lenis on every page load via `requestAnimationFrame` loop
- Each `FadeIn` wrapper creates its own `IntersectionObserver` via `useInView` — no shared observer

### Animation Bundle Size
- `motion` library (~30KB gzipped) imported for scroll animations
- `lenis` (~8KB gzipped) imported for smooth scrolling
- These are the largest dependencies for what is fundamentally a static marketing page

## Security

- **Low risk** — no user input, no forms, no authentication, no API calls
- No CSP headers configured
- External image URLs could theoretically be replaced if Framer CDN is compromised
- No `rel="noopener"` on external links (none detected, but worth checking if added)

## Accessibility

### Missing Features
- No skip-to-content link
- No focus-visible styles for keyboard navigation
- FAQ accordion uses `aria-expanded` (good) but no `aria-controls` or `id` linking
- Carousel thumbnail buttons have `aria-label` (good)
- No reduced-motion media query — animations play regardless of user preference
- Some inline images have empty `alt=""` (decorative, acceptable)

### Heading Hierarchy
- Uses utility classes (`.h1`, `.h2`, etc.) which may not match semantic heading levels
- Multiple `<h3>` elements used with different visual sizes (`.h3`, `.h4`)

## Desktop-Only

- **No responsive design** — 1440px viewport is the only target
- Content may overflow or break on smaller screens
- This is intentional per project constraints but limits real-world usability
- No meta viewport tag issues detected (Next.js handles this)

## Missing Infrastructure

- No testing framework or test files
- No CI/CD pipeline
- No error monitoring (Sentry, etc.)
- No analytics
- No sitemap or robots.txt
- No structured data / SEO metadata beyond basic title and description
