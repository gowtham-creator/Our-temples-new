# Technology Stack

## Languages

| Language | Version | Usage |
|----------|---------|-------|
| TypeScript | ^5 | Primary language for all source code |
| CSS | CSS3 | Styling via CSS Modules and globals |
| HTML | HTML5 | Markup via JSX in React components |

## Runtime

- **Node.js** — Development and build runtime
- **Browser** — Client-side execution target (desktop 1440px viewport)

## Frameworks

| Framework | Version | Role |
|-----------|---------|------|
| Next.js | 16.2.1 | App Router, SSR/SSG, image optimization, routing |
| React | 19.2.4 | UI component library |
| React DOM | 19.2.4 | DOM rendering |

## Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `motion` | ^12.38.0 | Animation library (formerly Framer Motion) — scroll-linked parallax, fade-ins, text reveals, carousel transitions |
| `lenis` | ^1.3.20 | Smooth scroll behavior — replaces native scroll with momentum-based scrolling |

## Dev Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `@types/node` | ^20 | Node.js type definitions |
| `@types/react` | ^19 | React type definitions |
| `@types/react-dom` | ^19 | React DOM type definitions |
| `eslint` | ^9 | Linting |
| `eslint-config-next` | 16.2.1 | Next.js ESLint rules (core-web-vitals + typescript) |
| `typescript` | ^5 | TypeScript compiler |

## Configuration

### `next.config.ts`
- Image remote patterns: allows `https://framerusercontent.com/images/**`
- No other custom configuration

### `tsconfig.json`
- Path alias: `@/*` maps to `./src/*`
- Target: ES2017
- Strict mode enabled

### `eslint.config.mjs`
- Uses `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- Global ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

## Build & Scripts

| Script | Command |
|--------|---------|
| `dev` | `next dev` |
| `build` | `next build` |
| `start` | `next start` |
| `lint` | `eslint` |

## Font Loading

- **Inter** font loaded via `next/font/google` in `src/lib/fonts.ts`
- Exposed as CSS variable `--font-inter` on `<html>` element
- Fallback stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
