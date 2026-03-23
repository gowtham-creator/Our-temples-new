# Structure

## Directory Layout

```
new-website/
├── index.html          # Main entry point — all sections defined here
├── styles.css          # All styling — design tokens, layout, components
├── script.js           # All interactivity — FAQ, parallax, animations
└── .planning/          # GSD planning artifacts
    └── codebase/       # Codebase mapping documents
```

## Key Locations

| Purpose | File | Notes |
|---------|------|-------|
| Page structure | `index.html` | Single-page site with 11 sections |
| Design tokens | `styles.css` (`:root` block) | CSS custom properties for colors |
| Typography | `styles.css` (.h1–.h6, .body-*) | Matches Framer text styles |
| Components | `styles.css` | Badge, Button, Feature Card, FAQ Item |
| Animations | `script.js` | IntersectionObserver fade-in, parallax scroll |
| FAQ logic | `script.js` | Accordion toggle with active class |

## Naming Conventions

- **CSS classes:** kebab-case (`hero-section`, `feature-card`, `btn-primary`)
- **CSS variables:** `--` prefix with kebab-case (`--dark-1`, `--white`)
- **Section IDs:** lowercase (`#about`, `#features`, `#product`)
- **JS selectors:** Match CSS class names via `querySelectorAll`

## Section Order in index.html

1. Navbar (fixed)
2. Hero Section
3. About Section (`#about`)
4. Features Section 1 (`#features`)
5. Features Section 2
6. Stats Section
7. Product Section (`#product`)
8. FAQ Section
9. Blog Section
10. CTA Section
11. Footer
