# Architecture Research — Sonic Next.js Marketing Site

## Component Hierarchy

```
Layout (RootLayout)
├── Navbar (client — scroll behavior, mobile toggle)
├── Page Sections (server by default)
│   ├── HeroSection
│   ├── AboutSection
│   ├── FeaturesSection (client — parallax scroll)
│   ├── StatsSection
│   ├── ProductSection
│   │   └── ImageCarousel (client — auto-scroll, interaction)
│   ├── FAQSection
│   │   └── FAQItem (client — expand/collapse state)
│   ├── BlogSection
│   └── CTASection
└── Footer
```

## Directory Structure

```
src/
├── app/
│   ├── layout.tsx          # RootLayout — font, globals, navbar, footer
│   ├── page.tsx            # Home page — assembles all sections
│   ├── blogs/
│   │   └── page.tsx        # Blog listing
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   └── not-found.tsx       # 404 page
├── components/
│   ├── ui/                 # Atomic reusable elements
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   └── SocialIcon.tsx
│   ├── cards/              # Content display cards
│   │   ├── FeatureCard.tsx
│   │   └── BlogCard.tsx
│   ├── layout/             # Structural wrappers
│   │   ├── Navbar.tsx      # "use client"
│   │   ├── Footer.tsx
│   │   ├── Container.tsx
│   │   └── TopWrapper.tsx
│   ├── sections/           # Page sections (one per design section)
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── FeaturesSection.tsx  # "use client" (parallax)
│   │   ├── StatsSection.tsx
│   │   ├── ProductSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── BlogSection.tsx
│   │   └── CTASection.tsx
│   └── interactive/        # Client-only interactive elements
│       ├── FAQItem.tsx     # "use client"
│       └── ImageCarousel.tsx # "use client"
├── data/                   # Static content data
│   ├── navigation.ts
│   ├── features.ts
│   ├── stats.ts
│   ├── faq.ts
│   ├── blogs.ts
│   └── footer.ts
├── styles/
│   ├── globals.css         # Design tokens, reset, base typography
│   └── *.module.css        # Per-component CSS Modules
└── lib/
    └── fonts.ts            # next/font configuration
```

## Server vs Client Component Boundaries

| Component | Rendering | Why |
|-----------|-----------|-----|
| Navbar | Client | Scroll listener, mobile menu toggle |
| HeroSection | Server | Static content, no interactivity |
| AboutSection | Server | Static content |
| FeaturesSection | Client | Parallax scroll with useScroll/useTransform |
| StatsSection | Server | Static cards |
| ProductSection | Server | Wrapper only |
| ImageCarousel | Client | Auto-scroll animation, user interaction |
| FAQSection | Server | Wrapper, renders FAQItem children |
| FAQItem | Client | Expand/collapse state (useState) |
| BlogSection | Server | Static grid |
| CTASection | Server | Static content |
| Footer | Server | Static links |

**Rule:** Only 5 components need "use client" — Navbar, FeaturesSection, ImageCarousel, FAQItem. Everything else renders on the server.

## Design Token System

CSS custom properties in `globals.css` mapping 1:1 to Framer's styles:

```css
:root {
  /* Colors — match Framer ColorStyles exactly */
  --dark-1: rgb(38, 38, 40);
  --dark-2: rgb(87, 87, 87);
  --dark-3: rgb(195, 196, 197);
  --dark-4: rgb(236, 237, 239);
  --dark-5: rgb(250, 250, 250);
  --white: rgb(255, 255, 255);
  --black: rgb(5, 6, 11);

  /* Typography — match Framer TextStyles */
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --h1: 700 60px/1.2 var(--font-family);
  --h2: 600 52px/1.2 var(--font-family);
  --h3: 400 44px/1.2 var(--font-family);
  --h4: 400 36px/1.2 var(--font-family);
  --h5: 400 28px/1.4 var(--font-family);
  --h6: 400 20px/1.2 var(--font-family);
  --body-l: 400 20px/1.6 var(--font-family);
  --body-m: 400 16px/1.5 var(--font-family);
}
```

## Data Flow

Static content → no API calls, no state management, no prop drilling.

```
data/*.ts (static arrays/objects)
  → imported by section components
    → passed as props to card/item components
      → rendered as server HTML
```

## Build Order (Phase Dependencies)

1. **Foundation** — Next.js setup, design tokens, fonts, global styles, types
2. **Atomic UI** — Button, Badge, SocialIcon, Container
3. **Cards** — FeatureCard, BlogCard, TopWrapper
4. **Layout** — Navbar, Footer
5. **Sections** — Hero, About, Stats, CTA, Blog (server-only sections first)
6. **Interactive Sections** — Features (parallax), FAQ (accordion), Products (carousel)
7. **Pages** — Assemble sections into routes, scroll behavior

Each layer depends only on layers above it.

## Anti-Patterns to Avoid

- **Don't wrap entire sections in "use client"** — isolate interactivity to smallest possible component
- **Don't use global CSS for component styles** — CSS Modules prevent class collisions
- **Don't use runtime image optimization** — next/image handles this at build time
- **Don't prop-drill data through layouts** — import data directly in the consuming component

---
*Researched: 2026-03-23*
