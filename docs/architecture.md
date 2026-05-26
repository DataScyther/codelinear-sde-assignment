# Architecture Overview

This document outlines the technical decisions and constraints for the frontend application.

## Core Stack
- **Next.js 16 (App Router)**: Utilizing React Server Components by default for optimal performance.
- **Tailwind CSS v4**: CSS-driven configuration via `src/styles/theme.css`.
- **Framer Motion**: Handled securely with `<LazyMotion>` to minimize bundle footprint.
- **Lucide React**: Lightweight vector icon imports.

## Structure
- `src/app`: Routes, global layout, and styles.
- `src/components`: 
  - `ui`: Reusable primitive components (buttons, badges).
  - `layout`: Structural page wrappers (navbar, grid containers).
  - `sections`: Large page sections (hero, features).
  - `animations`: Lazy motion wrapper components.

## Guidelines
- Components exceeding ~150 lines should be broken down into sub-components.
- Use `"use client"` exclusively for interactive leaf nodes and animation wrappers to maximize Server Component usage.
- All styles rely on CSS variables defined in `src/styles/theme.css` to prevent arbitrary numbers in Tailwind class lists.
