# Architecture

## Pattern Overview

Single-page marketing website built with Next.js App Router. Server-rendered layout with client-side interactive components for animations. Section-based architecture where each page section is a self-contained block in `src/app/page.tsx`.

## Layers

### 1. App Shell (Server)
- **Location:** `src/app/layout.tsx`
- **Contains:** HTML structure, font loading, metadata, Navbar, Footer
- **Renders:** Server-side — shared across all pages (currently only one page)

### 2. Page Content (Server)
- **Location:** `src/app/page.tsx` (~300 lines)
- **Contains:** All page sections inline — Hero, About, Features (x2), Stats, Product, FAQ, Blog, CTA
- **Pattern:** Single monolithic page component importing section-specific interactive components
- **Styling:** `src/app/page.module.css` with section-scoped classes

### 3. Interactive Components (Client)
- **Location:** `src/components/interactive/`
- **Contains:** Animation wrappers and interactive UI elements
- **All marked `'use client'`** — these are the only client-side components
- **Components:**
  - `FadeIn.tsx` — Scroll-triggered fade with direction, scale, blur options
  - `TextReveal.tsx` — Word-by-word text animation on scroll
  - `ParallaxImage.tsx` — Scroll-linked parallax image with scale/border-radius transforms
  - `HeroImage.tsx` — Hero-specific parallax with opacity fade
  - `ImageCarousel.tsx` — Auto-playing image carousel with thumbnail selectors
  - `FAQItem.tsx` — Accordion item with expand/collapse animation
  - `SmoothScroll.tsx` — Lenis smooth scroll initializer (renders nothing)

### 4. Layout Components (Client)
- **Location:** `src/components/layout/`
- **Contains:** Navbar (scroll-aware with background change), Footer
- **Both marked `'use client'`** for scroll event handling and motion animations

### 5. UI Primitives (Server)
- **Location:** `src/components/ui/`
- **Contains:** Button, Badge, Container — reusable styled elements
- **No client-side behavior** — pure presentational components

### 6. Static Data
- **Location:** `src/data/`
- **Contains:** Hardcoded content arrays — `stats.ts`, `faq.ts`, `blogs.ts`, `navigation.ts`, `footer.ts`
- **Pattern:** Named exports of typed arrays, imported directly into page/components

### 7. Design System
- **Location:** `src/app/globals.css`
- **Contains:** CSS reset, design tokens (CSS custom properties), typography scale classes
- **Tokens:** Color palette (`--dark-1` through `--dark-5`, `--white`, `--black`, `--light-blue`, neutrals)
- **Typography:** Classes `.h1` through `.h6`, `.body-xl`, `.body-l`, `.body-m`

## Data Flow

```
Static Data (src/data/) → Page Component (page.tsx) → Interactive Wrappers → DOM
                                                          ↓
                                                    Motion Library → Scroll-linked animations
                                                    Lenis → Smooth scroll behavior
```

- No state management library — state is local to individual client components
- Navbar: `scrolled` boolean state from scroll listener
- ImageCarousel: `current` index + `isPaused` state
- FAQItem: `open` boolean state per item

## Entry Points

| Entry | File | Purpose |
|-------|------|---------|
| App Root | `src/app/layout.tsx` | Root layout, font, metadata |
| Home Page | `src/app/page.tsx` | All marketing sections |
| Globals | `src/app/globals.css` | Reset, tokens, typography |

## Rendering Strategy

- **Server Components:** Layout, Page, UI primitives (Button, Badge, Container)
- **Client Components:** All `interactive/` and `layout/` components (7 total)
- **Static Generation:** Site can be fully statically exported — no dynamic routes or data fetching
