# QUORRA

QUORRA is a modern, responsive landing page for an AI-powered research workspace concept.
It is built with Next.js App Router, TypeScript, and Tailwind CSS.

## Project Overview

This project showcases a product-style marketing experience for an AI research assistant that helps users:

- upload and organize research sources
- generate fast insights from mixed content
- verify responses with clear citations
- explore privacy-first AI workflows

## Live Product Positioning

- Product name: `QUORRA`
- One-line description: `An AI research workspace that turns scattered sources into trusted, structured insight.`

## Tech Stack

- Next.js 15
- React 18
- TypeScript 5
- Tailwind CSS 4
- Lucide React (icons)
- shadcn/ui button primitive (Radix Slot + CVA utility)

## Getting Started

### Prerequisites

- Node.js `18.18.0` or newer
- npm `9+` (npm `10+` recommended)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Scripts

- `npm run dev` - run local development server
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run lint` - run ESLint
- `npm run typecheck` - run TypeScript type checking
- `npm run format` - check formatting with Prettier
- `npm run format:write` - auto-format project files

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  footer.tsx
  header.tsx
  hero-section.tsx
  features-section.tsx
  privacy-section.tsx
  use-cases-section.tsx
  testimonials-section.tsx
  ui/button.tsx
lib/
  utils.ts
public/
  *.png / *.jpg assets
```

## Engineering Standards

- Strict TypeScript enabled
- ESLint with Next.js core web vitals rules
- Prettier formatting rules committed
- GitHub CI workflow for linting, type checks, and build
- Contributor, security, conduct, and changelog docs included

## Accessibility and UX Notes

- semantic sectioning and heading hierarchy
- sticky navigation with in-page anchor links
- responsive layout for mobile and desktop
- image alt text added across the page

## Deployment

The project is deployment-ready for Vercel or any Node-compatible hosting provider:

```bash
npm run build
npm run start
```

## Documentation Index

- `CONTRIBUTING.md`
- `CODE_OF_CONDUCT.md`
- `SECURITY.md`
- `CHANGELOG.md`
- `docs/ARCHITECTURE.md`
- `docs/LINKEDIN.md`

## License

This project is licensed under the MIT License. See `LICENSE`.
