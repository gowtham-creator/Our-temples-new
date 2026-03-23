# Phase 1: Foundation - Research

**Researched:** 2026-03-23
**Status:** Complete

## Key Findings

### Next.js 15 Project Setup
- `npx create-next-app@latest` with `--typescript --app --src-dir --use-npm`
- Say NO to Tailwind (CSS Modules only)
- Say YES to ESLint, TypeScript, App Router, src/ directory
- Install `motion` (v12.x) as additional dependency

### next.config.ts — Image Configuration
```typescript
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https' as const,
        hostname: 'framerusercontent.com',
        pathname: '/images/**',
      },
    ],
  },
};
```

### next/font — Inter Setup
```typescript
// src/lib/fonts.ts
import { Inter } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});
```

Apply in layout.tsx:
```typescript
<html lang="en" className={inter.variable}>
```

### Design Tokens — CSS Custom Properties
All 12 Framer color styles map to CSS custom properties:

```css
:root {
  /* Colors */
  --dark-1: rgb(38, 38, 40);
  --dark-2: rgb(87, 87, 87);
  --dark-3: rgb(195, 196, 197);
  --dark-4: rgb(236, 237, 239);
  --dark-5: rgb(250, 250, 250);
  --white: rgb(255, 255, 255);
  --black: rgb(5, 6, 11);
  --light-blue: rgb(197, 224, 242);
  --neutral-50: rgb(112, 112, 112);
  --neutral-20: rgb(235, 235, 235);
  --neutral-10: rgb(248, 248, 248);

  /* Font */
  --font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

### Typography Classes
9 text styles from Framer mapped to global CSS classes:

| Class | Font Size | Weight | Line Height | Tag |
|-------|-----------|--------|-------------|-----|
| .h1 | 60px | 700 | 1.2 | h1 |
| .h2 | 52px | 600 | 1.2 | h2 |
| .h3 | 44px | 400 | 1.2 | h3 |
| .h4 | 36px | 400 | 1.2 | h4 |
| .h5 | 28px | 400 | 1.4 | h5 |
| .h6 | 20px | 400 | 1.2 | h6 |
| .body-xl | 24px | 400 | 1.6 | p |
| .body-l | 20px | 400 | 1.6 | p |
| .body-m | 16px | 400 | 1.5 | p |

### CSS Reset
Minimal reset — no heavy library needed:
```css
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
body { font-family: var(--font-family); color: var(--dark-1); background: var(--white); }
a { text-decoration: none; color: inherit; }
ul { list-style: none; }
img { max-width: 100%; display: block; }
```

### Test Page for Verification
Create a simple page at `/` that displays:
1. All color swatches (12 tokens)
2. All typography samples (9 styles)
3. A next/image loading from framerusercontent.com

This validates all 5 success criteria in one visual check.

## Risks
- **Font metrics:** Inter vs SF UI Display — minor differences expected, acceptable
- **Image CDN:** framerusercontent.com URLs may have CORS or caching headers — test immediately

## Recommendations
- Single plan is sufficient — all tasks are sequential and simple
- Test page should be temporary (replaced by real sections in Phase 3)

---
*Researched: 2026-03-23*
