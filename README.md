# Codelinear Frontend Assignment

A responsive, high-performance landing page built for the Codelinear frontend hiring assignment.

## Tech Stack
- Next.js (App Router)
- React 19
- Tailwind CSS v4
- Framer Motion
- TypeScript

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Performance Highlights
- **Server Components**: The entire page structure is server-rendered by default.
- **Lazy Motion**: Framer Motion uses `<LazyMotion>` and `domAnimation` to remove the projection engine from the initial bundle.
- **Optimized Assets**: Fonts are preloaded via `next/font` and icons are purely SVG based (`lucide-react`).
- **CSS-Driven Theming**: Uses Tailwind v4's native CSS variables configuration for scalable design tokens.
