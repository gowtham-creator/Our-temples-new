# Sonic — Speaker Product Website

## What This Is

A pixel-accurate Next.js implementation of the Sonic speaker product website, converted from a Framer design file. The site is a marketing/product website for a premium speaker brand, featuring hero, about, features, stats, products, FAQ, blog, and CTA sections with a navbar and footer. Desktop view is the primary target.

## Core Value

The website must visually match the Framer design file exactly — every section, spacing, typography, color, and image must be pixel-accurate to the design source.

## Requirements

### Validated

- ✓ Static HTML/CSS/JS prototype built and verified against Framer design — existing

### Active

- [ ] Next.js app with App Router and proper project structure
- [ ] Reusable React components for all design elements (Navbar, Badge, Button, FeatureCard, TopWrapper, FAQ, BlogCard, Footer, CTA, ImageCarousel)
- [ ] Design token system matching Framer styles (colors, typography, spacing)
- [ ] Navbar component — fixed, blurred backdrop, logo + nav links + CTA button
- [ ] Hero section — centered heading, description, CTA, product image
- [ ] About section — flowing text with inline images
- [ ] Features sections (x2) — content + parallax image, alternating layout
- [ ] Stats section — badge, heading, 3 feature cards with icons
- [ ] Product section — badge, heading, image carousel
- [ ] FAQ section — heading + accordion with expand/collapse
- [ ] Blog section — 3-column grid of blog cards
- [ ] CTA section — heading, CTA button, supporting text
- [ ] Footer — dark theme, logo, links, social icons, copyright
- [ ] Smooth scroll navigation with anchor links
- [ ] Scroll-triggered fade-in animations
- [ ] Parallax scroll effect on feature images

### Out of Scope

- Mobile/tablet responsive layouts — desktop-first, responsive deferred
- Backend/CMS integration — static content only for now
- Blog functionality — static cards, no dynamic routing
- Contact form — link only, no form implementation
- E-commerce/checkout — CTA buttons are placeholder links
- SEO optimization — basic meta tags only

## Context

- **Design source:** Framer project `Sonic-copy--KZONd6UIyL6d8N9Tte4t-giXhb` (connected via Framer MCP)
- **Design file pages:** Home (/), Blogs (/blogs), Blog post (/blogs/:slug), Legal (/legal/:slug), Contact (/contact), 404
- **Current state:** Working static HTML prototype exists in project root (index.html, styles.css, script.js)
- **Color palette:** Dark 1 (#262628), Dark 2 (#575757), Dark 3 (#C3C4C5), Dark 4 (#ECEDEF), Dark 5 (#FAFAFA), White (#FFF), Black (#05060B)
- **Typography:** SF UI Display (Inter as web fallback) — Heading 1 (60px/700), H2 (52px/600), H3 (44px/400), H4 (36px/400), H5 (28px/400), H6 (20px/400), Body L (20px), Body M (16px)
- **Layout:** 1440px desktop width, 1200px max-width containers
- **Images:** Hosted on framerusercontent.com CDN
- **Logo SVGs:** Brand logo (light + dark variants) from Framer CDN

## Constraints

- **Tech stack:** Next.js 15 with App Router, React 19, TypeScript
- **Styling:** CSS Modules or Tailwind — must preserve exact Framer design tokens
- **Desktop-only:** 1440px viewport, no responsive breakpoints required
- **No backend:** Static site, all content hardcoded
- **Image source:** Use existing Framer CDN URLs for all images

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js App Router over Pages Router | Modern standard, better for future expansion | — Pending |
| Component-per-section architecture | Matches Framer component structure, easy to maintain | — Pending |
| Framer CDN images (no self-hosting) | Simplifies initial build, images already optimized | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd:transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-03-23 after initialization*
