# Stack Research — Sonic Next.js Marketing Site

## Recommended Stack

| Layer | Choice | Version | Confidence |
|-------|--------|---------|------------|
| Framework | Next.js (App Router) | 15.x | High |
| Language | TypeScript | 5.x | High |
| React | React 19 | 19.x | High |
| Styling | CSS Modules + CSS Custom Properties | built-in | High |
| Animations | Motion (formerly framer-motion) | 12.x | High |
| Font loading | next/font (Inter) | built-in | High |
| Image optimization | next/image | built-in | High |

## Rationale

### CSS Modules over Tailwind

The existing prototype has 500+ lines of pixel-exact CSS with custom properties (`--dark-1`, `--dark-2`, etc.) that map directly to Framer's color styles. CSS Modules let you copy these values verbatim. Tailwind would require wrapping every value in arbitrary brackets `[60px]` for zero benefit when the goal is pixel-exact Framer reproduction.

### Motion (formerly framer-motion) for Animations

- `useInView` for scroll-triggered fade-ins
- `useScroll` / `useTransform` for parallax effects
- Originally from Framer — natural fit for this conversion
- Lightweight, tree-shakeable, SSR-compatible

### next/font for Inter

Self-hosted font with zero CLS. SF UI Display is Apple-proprietary; use Inter as primary with system font fallback stack.

### next/image with remotePatterns

Configure `framerusercontent.com` as allowed remote host. Automatic optimization, lazy loading, responsive srcset.

## What NOT to Use

| Library | Reason |
|---------|--------|
| styled-components | Incompatible with Server Components, runtime overhead |
| GSAP | Overkill for scroll fade-ins and parallax |
| Sass/SCSS | CSS custom properties already suffice, no nesting needed |
| Tailwind CSS | Translation overhead with no benefit for pixel-exact designs |
| Radix UI / shadcn | No complex UI primitives needed (just FAQ accordion) |

## Installation

```bash
npx create-next-app@latest --typescript --app --src-dir --use-npm
npm install motion
```

Everything else is built into Next.js.

## Configuration Notes

- `next.config.ts`: Add `framerusercontent.com` to `images.remotePatterns`
- `next/font`: Import Inter with weights 400, 500, 600, 700
- CSS global file: Define design tokens as CSS custom properties matching Framer color/text styles
- TypeScript: Strict mode enabled

---
*Researched: 2026-03-23*
