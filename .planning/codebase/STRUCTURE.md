# Directory Structure

## Layout

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (font, metadata, Navbar, Footer)
│   ├── page.tsx                  # Home page (all sections)
│   ├── page.module.css           # Page-level section styles
│   ├── globals.css               # Reset, design tokens, typography classes
│   └── favicon.ico
├── components/
│   ├── interactive/              # Client-side animated components
│   │   ├── FadeIn.tsx            # Scroll-triggered fade animation wrapper
│   │   ├── TextReveal.tsx        # Word-by-word text reveal animation
│   │   ├── ParallaxImage.tsx     # Scroll-linked parallax image
│   │   ├── ParallaxImage.module.css
│   │   ├── HeroImage.tsx         # Hero-specific parallax image
│   │   ├── ImageCarousel.tsx     # Auto-play image carousel with thumbnails
│   │   ├── ImageCarousel.module.css
│   │   ├── FAQItem.tsx           # Accordion FAQ item
│   │   ├── FAQItem.module.css
│   │   └── SmoothScroll.tsx      # Lenis smooth scroll initializer
│   ├── layout/                   # Page-level layout components
│   │   ├── Navbar.tsx            # Fixed navbar with scroll-aware styling
│   │   ├── Navbar.module.css
│   │   ├── Footer.tsx            # Site footer
│   │   └── Footer.module.css
│   └── ui/                       # Reusable UI primitives
│       ├── Button.tsx            # Button with variant/size props
│       ├── Button.module.css
│       ├── Badge.tsx             # Icon + label badge
│       ├── Badge.module.css
│       ├── Container.tsx         # Max-width container wrapper
│       └── Container.module.css
├── data/                         # Static content data
│   ├── blogs.ts                  # Blog post entries
│   ├── faq.ts                    # FAQ question/answer pairs
│   ├── footer.ts                 # Footer link groups
│   ├── navigation.ts             # Navbar link items
│   └── stats.ts                  # Statistics cards data
└── lib/                          # Shared utilities
    └── fonts.ts                  # Inter font configuration via next/font
```

## Key Locations

| Purpose | Location |
|---------|----------|
| Page content | `src/app/page.tsx` |
| Section styles | `src/app/page.module.css` |
| Design tokens | `src/app/globals.css` (`:root` block) |
| Typography classes | `src/app/globals.css` (`.h1`–`.h6`, `.body-*`) |
| Animation components | `src/components/interactive/` |
| Static content | `src/data/` |
| Font config | `src/lib/fonts.ts` |
| Next.js config | `next.config.ts` |
| TypeScript config | `tsconfig.json` |
| ESLint config | `eslint.config.mjs` |

## File Counts

| Category | Count |
|----------|-------|
| TypeScript components | 12 |
| CSS Module files | 8 |
| Data files | 5 |
| Config files | 4 |
| Total source files | 31 |

## Naming Conventions

- **Components:** PascalCase (`FadeIn.tsx`, `ParallaxImage.tsx`)
- **CSS Modules:** PascalCase matching component (`FadeIn.module.css` — note: not all components have CSS modules)
- **Data files:** kebab-case plurals (`blogs.ts`, `stats.ts`)
- **Lib files:** kebab-case (`fonts.ts`)
- **CSS classes (modules):** camelCase (`heroInner`, `featuresRow`, `statsContainer`)
- **CSS classes (globals):** kebab/dot notation (`.h1`, `.body-m`)
- **CSS variables:** kebab-case with semantic naming (`--dark-1`, `--light-blue`)
