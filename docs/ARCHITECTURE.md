# QUORRA Architecture

## Overview

QUORRA is a single-route, component-driven Next.js application using the App Router.
The architecture is intentionally lightweight and optimized for landing page performance.

## Runtime Model

- Framework: Next.js 15 App Router
- Rendering: static/server-rendered page composition
- Styling: Tailwind CSS 4 with CSS variable-based theme tokens
- Assets: local static assets in `public/`

## Core Composition

- `app/layout.tsx`
  - global metadata
  - font loading
  - global CSS import
- `app/page.tsx`
  - page assembly and section order
- `components/*`
  - isolated presentational sections

## UI Layer

- Reusable button primitive in `components/ui/button.tsx`
- Utility class merging in `lib/utils.ts`

## Styling Strategy

- Design tokens defined in `app/globals.css`
- Tailwind utility classes for section-level composition
- Custom font helper classes:
  - `font-google-sans`
  - `font-helvetica`

## Quality Gates

- ESLint (`next/core-web-vitals`, `next/typescript`)
- Type checking (`tsc --noEmit`)
- Production build validation (`next build`)
- GitHub Actions CI workflow runs all three

## Scalability Notes

Recommended next steps for product growth:

1. Move section content to typed data models (`content/*.ts`) for easier A/B testing.
2. Add end-to-end tests (Playwright) for critical render paths.
3. Add analytics events for CTA and section interactions.
