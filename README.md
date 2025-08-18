# Abzu — Portfolio

Next.js 15 + React 19 + Tailwind v4 scaffold for the Abzu portfolio.
Cult UI blocks/sections live under `src/components/ui` and `src/components/sections`.

## Quickstart
```bash
pnpm i   # or npm i / yarn
pnpm dev
```

## Structure
- `src/app` — App Router pages (`/`, `/articles`, `/projects`, `/speaking`, `/uses`, 404)
- `src/components/ui` — primitives from Cult/shadcn (Tabs, Button, Input, ModeToggle…)
- `src/components/sections` — Nimigi sections (Navbar, HeroAbout, ImageStrip, Timeline, Rails…)
- `src/components/brand` — gradient helpers, logo components
- `src/content` — JSON/MDX articles + projects/speaking/uses
- `src/lib` — mdx/seo/utils
- `public/brand` — logos/marks

### Theming
Tailwind v4 tokens are defined in `src/app/globals.css` using CSS variables.
Brand palette lives in `brand.tokens.json`; gradients/FX helpers consume those.

### Notes
- Dark/light by `next-themes` (`class` strategy).
- Article body uses `@tailwindcss/typography` (`prose`, `dark:prose-invert`).
- Cult UI blocks: drop into `src/components/ui` or `src/components/sections` and align classes with our tokens.
