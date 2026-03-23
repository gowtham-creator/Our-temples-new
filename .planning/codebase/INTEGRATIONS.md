# External Integrations

## Overview

This is a static marketing website with minimal external dependencies. No backend, no APIs, no databases, no authentication.

## Image CDN — Framer

- **Provider:** Framer CDN (`https://framerusercontent.com/images/`)
- **Usage:** All product photography and speaker images
- **Configuration:** Allowed via `next.config.ts` `images.remotePatterns`
- **Optimization:** Images served through Next.js `<Image>` component with automatic optimization
- **Examples:**
  - Hero image: `ubG0q5oU24cynTwk8AE2YihwtQ4.jpg`
  - Feature images: `ICfDgHiYeg3CrkgPh0eIAqjfps.jpg`, `b2pU6wEvFiNfe0hneAEK9s55W4I.jpg`
  - Carousel images: `cLXMCm17ntE7skBNfueokzH8q8.jpg`, `lelyO33appQMx848NrtNZZ6iEI.jpg`, `Qi9yR8aP0GD25HrRBpMLab0TB1Q.jpg`
  - Logo SVG: `EWwybjVc0FzkiqCXEUuyTPfgU.svg`

## Fonts — Google Fonts

- **Provider:** Google Fonts (via `next/font/google`, not CDN link)
- **Font:** Inter (variable weight)
- **Loading:** Self-hosted by Next.js at build time — no runtime external requests

## External APIs

None. All content is hardcoded in `src/data/` files.

## Databases

None. Static site with no data persistence.

## Authentication

None. No user accounts or protected routes.

## Analytics / Tracking

None detected in codebase.

## Webhooks / Third-Party Services

None.
