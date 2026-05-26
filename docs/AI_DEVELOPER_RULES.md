# AI Developer Rules & Codebase Architecture

This document provides strict coding standards and rules for AI models (Claude, Gemini, etc.) collaborating on the **Anti-Gravity** Next.js App Router repository. Read and follow these principles to prevent style drift, build failures, and over-engineering.

---

## 1. Directory Structure

All new features and code must follow this exact layout:

```text
src/
├── app/                  # Next.js App Router pages and layouts
├── components/           # Modular React components
│   ├── ui/               # Global reusable primitives (Buttons, Inputs, Badges)
│   ├── layout/           # Shared page outlines (Header, Footer, Sidebar)
│   ├── sections/         # Complete page content blocks (Hero, Features, Pricing)
│   ├── cards/            # Content grid containers and interactive panels
│   ├── typography/       # Modular headings, subheadings, and typography blocks
│   ├── animations/       # Reusable Framer Motion animation containers
│   └── shared/           # Project-specific shared utility layouts
├── lib/                  # Library utilities (cn class merger)
├── hooks/                # Custom React hooks (useScroll, useMediaQuery)
├── constants/            # Navigation configurations, static copy text
├── styles/               # Theme tokens (theme.css)
├── data/                 # JSON or static data files for landing page grids
├── config/               # General app config (siteConfig metadata)
├── utils/                # Standard helper helpers (formatters, mathematical equations)
├── types/                # Strict TypeScript declaration types
└── providers/            # Context providers (Theme, React Query)
```

---

## 2. Tailwind CSS v4 Configuration

Tailwind v4 is fully CSS-driven and **does not use a `tailwind.config.js` file**.

* **Centralized Theme**: All styling modifications must be made inside `src/styles/theme.css` under the `@theme` directive.
* **Colors & Accents**: Utilize the custom theme color variables:
  * Brand/Background: `bg-bg-space` (dark deep space background)
  * Cards: `bg-bg-card` (dark obsidian card background)
  * Accents: `text-cyber-cyan`, `text-cyber-purple`, `bg-cyber-blue`, etc.
  * Borders: `border-border-subtle` or glassmorphic borders `border-border-glass`
* **Glassmorphism**: Use the utility classes `.glass-panel` and `.glass-panel-hover` for card elements.
* **Typography Mapping**:
  * Headings: Use `font-sans` (Plus Jakarta Sans).
  * Body copy: Use `font-body` (Inter).
  * Code/Telemetry: Use `font-mono` (Geist Mono).

---

## 3. React Component Standards

* **Concise Files**: Split any file exceeding **200 lines** into sub-components. Keep files small and focused.
* **Composition Over Inheritance**: Pass children or configuration parameters instead of duplicating full layouts.
* **Server vs. Client Components**:
  * Keep components as **Server Components** by default (e.g. layouts, sections, containers).
  * Use **Client Components** (`"use client"`) ONLY when introducing interactive state (buttons, form handling, tabs) or animation hooks.
  * Place Client Components at the leaves of your render tree to preserve SSR benefits.

---

## 4. Animation Engineering (Framer Motion)

To keep animations restrained, premium, and performant:
* **Prefer Wrappers**: Wrap elements in our custom `<AnimateIn>` and `<StaggerContainer>` components (`src/components/animations/AnimateIn.tsx`).
* **Motion Restraint**: Do not animate every item. Use small translations (`y: 30`, `scale: 0.95`) and fades (`opacity: 0` to `1`).
* **Reduced Motion Compliance**: Always support users' system settings by checking `useReducedMotion`. Our `AnimateIn` wrapper handles this automatically.

---

## 5. Naming & Import Conventions

* **Absolute Path Aliases**: Always use `@/*` alias paths. Never use relative parent paths (like `../../components`).
  * Example: `import { cn } from "@/lib/utils";`
* **File Naming**:
  * React Components: PascalCase (e.g., `HeroSection.tsx`, `PrimaryButton.tsx`).
  * Hooks/Utilities: camelCase (e.g., `useScroll.ts`, `formatCurrency.ts`).
  * Style files / configurations: kebab-case or standard camelCase (e.g., `theme.css`, `site.ts`).
* **TypeScript Types**: Import types explicitly: `import type { NavItem } from "@/types";`.

---

## 6. CLI Build Verification Commands

Before final submission or deployment, verify compile status using:
* `npm run dev` - Launches local development environment.
* `npm run build` - Validates the complete production build.
* `npm run type-check` - Compiles Typescript definitions without outputting files.

---

## 7. Hard Engineering Rules (STEP 9)

**DO NOT DEVIATE from these constraints:**
1. **No component >200 lines**: Split into sub-components aggressively.
2. **No duplicate Tailwind clusters**: Extract to `cn()` utilities or component files.
3. **No magic numbers**: Use theme variables (`var(--shadow-glass)`, `bg-[#030014]`) or constants.
4. **No inline chaos**: Keep JSX clean by defining class strings or mapping structures outside the return block.
5. **No client component unless required**: Use `"use client"` only for interactivity/animations. Default to Server Components.
6. **No random z-indexes**: Manage z-indices logically (e.g., `z-10` relative wrappers, `z-50` nav).
7. **No arbitrary spacing spam**: Rely on the established grid/container constraints and spacing scale (`gap-8`, `py-24`).
