# CLAUDE.md - Anti-Gravity Developer Guidelines

## 🚀 Core Commands
- **Start Dev Server**: `npm run dev`
- **Build Production**: `npm run build`
- **Start Production Server**: `npm start`
- **Run Linter**: `npm run lint`
- **Type Checking**: `npm run type-check` (runs `tsc --noEmit`)

## 🛠 Project Structure
- `src/app/` - App Router layouts, pages, and routes (Server/Client split)
- `src/components/` - Sub-folders: `ui/` (primitives), `layout/` (structural header/footer), `sections/` (landing blocks), `cards/` (custom card collections), `animations/` (AnimateIn wrapper), `shared/` (utilities).
- `src/lib/` - Shared utilities like `cn` in `utils.ts`
- `src/styles/` - Global Tailwind CSS v4 styling rules in `theme.css`
- `src/config/` - Metadata config (`siteConfig`) in `site.ts`
- `src/constants/` - Constants such as navigation menus in `navigation.ts`
- `src/types/` - TypeScript interface declarations in `index.ts`
- `docs/` - System rules and conventions in `AI_DEVELOPER_RULES.md`

## 🎨 Style Guidelines & Code Rules
- **Component File Bounds**: Limit files to **200 lines**. Split off sub-components if they exceed this limit.
- **Tailwind CSS v4 Directives**: Modify classes inside `src/styles/theme.css` under `@theme`. Avoid utility class bloat in JSX. Do NOT search for `tailwind.config.js` (Tailwind v4 uses CSS configs only).
- **Import Prefixes**: Always use absolute paths prefixed with `@/` (e.g. `import { cn } from "@/lib/utils";`).
- **Server/Client Components**: Use Server Components by default. Use `"use client"` only for interaction hooks or animations (place at leaves).
- **Naming Conventions**:
  - React components: PascalCase (e.g. `HeroSection.tsx`)
  - Utilities and custom hooks: camelCase (e.g. `useScroll.ts`, `cn.ts`)
  - Style and configs: standard camelCase (e.g. `theme.css`, `site.ts`)
- **Animations**: Wrap components in `<AnimateIn>` and `<StaggerContainer>` from `@/components/animations/AnimateIn` to manage motion and respect preferences.
