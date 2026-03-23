# Code Conventions

## Component Patterns

### Server vs Client Components
- **Default is server** — only `interactive/` and `layout/` components use `'use client'`
- Client components are explicitly opted-in with the `'use client'` directive at the top
- UI primitives (`Button`, `Badge`, `Container`) are server components — no hooks or browser APIs

### Component Structure
```tsx
'use client'; // only if needed

import { useRef } from 'react';          // React hooks
import { motion, useScroll } from 'motion/react'; // Third-party
import Image from 'next/image';           // Next.js
import styles from './Component.module.css'; // Co-located CSS Module

type ComponentProps = {                   // Inline type (not interface)
  src: string;
  alt: string;
};

export default function Component({ src, alt }: ComponentProps) {
  // hooks → derived values → return JSX
}
```

### Type Definitions
- **Inline `type` declarations** preferred over interfaces
- Props types named `{ComponentName}Props`
- No shared types file — types are co-located with components
- No barrel exports (`index.ts`) — direct file imports

### Export Style
- **Default exports** for all components
- **Named exports** for data files (e.g., `export const faqItems = [...]`)

## Styling

### CSS Modules
- Co-located with components: `Component.tsx` + `Component.module.css`
- Not all components have CSS modules — simple ones use inline styles
- Class names use **camelCase**: `heroInner`, `featuresRow`, `statsContainer`
- Applied via `styles.className` or template literals for conditionals:
  ```tsx
  className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
  ```

### Global CSS (`globals.css`)
- CSS reset at top
- Design tokens in `:root`
- Typography utility classes (`.h1`–`.h6`, `.body-xl`, `.body-l`, `.body-m`)
- Applied directly as className strings: `className="h2"`, `className="body-l"`

### Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--dark-1` | `rgb(38, 38, 40)` | Primary text |
| `--dark-2` | `rgb(87, 87, 87)` | Secondary text |
| `--dark-3` | `rgb(195, 196, 197)` | Borders |
| `--dark-4` | `rgb(236, 237, 239)` | Light borders |
| `--dark-5` | `rgb(250, 250, 250)` | Section backgrounds |
| `--white` | `rgb(255, 255, 255)` | Page background |
| `--black` | `rgb(5, 6, 11)` | Dark backgrounds |
| `--light-blue` | `rgb(197, 224, 242)` | Accent color |
| `--neutral-50` | `rgb(112, 112, 112)` | Muted text |
| `--neutral-20` | `rgb(235, 235, 235)` | Subtle backgrounds |
| `--neutral-10` | `rgb(248, 248, 248)` | Near-white |

### Layout Patterns
- **Max-width:** 1200px with `margin: 0 auto` for centering
- **Padding:** 24px horizontal padding on section containers
- **Section spacing:** 160px vertical padding between sections
- **Gap values:** 10px, 16px, 32px, 42px, 62px, 80px, 160px (non-standard scale)
- **Border radius:** 24px (cards), 28px (images), 100px (pills/icons)

## Animation Conventions

### Motion Library (`motion/react`)
- Imported from `motion/react` (not `framer-motion`)
- Easing curve used consistently: `[0.22, 1, 0.36, 1]` (ease-out expo)
- Alternative easing: `[0.25, 0.46, 0.45, 0.94]` (ease-out quad — used in Navbar)
- `useInView` with `{ once: true }` for one-shot scroll animations
- `useScroll` + `useTransform` for continuous scroll-linked effects
- `AnimatePresence` for enter/exit animations (FAQ, Carousel)

### Animation Durations
- Fade-in: 0.8s default
- Text reveal: 0.6s per word with 0.04s stagger
- Transitions: 0.3s–1.0s depending on effect
- Carousel crossfade: 1.0s

## Import Organization
1. React hooks
2. Third-party libraries (`motion/react`, `lenis`)
3. Next.js imports (`next/image`, `next/font`)
4. Internal components (`@/components/...`)
5. Data imports (`@/data/...`)
6. CSS Modules (last)

## Naming

- **Components:** PascalCase
- **Files:** PascalCase for components, camelCase for data/lib
- **CSS classes (modules):** camelCase
- **CSS variables:** kebab-case
- **Props:** camelCase
- **Event handlers:** camelCase (`handleScroll`, `onClick`)

## Error Handling

- No explicit error handling — relies on Next.js defaults
- No error boundaries
- No loading states
- Images fail silently via Next.js `<Image>` component
