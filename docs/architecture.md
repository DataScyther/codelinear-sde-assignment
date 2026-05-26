# Architecture Overview

## Stack
- **Next.js 16 (App Router)** — React Server Components by default.
- **Tailwind CSS v4** — CSS-driven config via `src/styles/theme.css`.
- **Framer Motion** — Shared `<LazyMotion>` provider at the layout level.
- **Lucide React** — Tree-shakeable vector icons.

## Structure
- `src/app` — Routes, global layout, and styles.
- `src/components/`
  - `layout/` — Structural wrappers (navbar, footer, container).
  - `sections/` — Full page sections (hero, features, CTA).
  - `cards/` — Reusable card components (feature card, dashboard mockup).
  - `animations/` — Motion provider and viewport-triggered animation wrapper.
- `src/config/` — Site metadata and SEO configuration.
- `src/constants/` — Navigation items and static data.
- `src/types/` — Shared TypeScript interfaces.
- `src/lib/` — Utility functions.
- `src/styles/` — Design tokens and theme variables.

## Conventions
- Components over ~150 lines should be split.
- Use `"use client"` only for interactive leaf nodes and animation wrappers.
- All colors and spacing use CSS variables from `theme.css`.
