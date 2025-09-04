# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Abzu Research Web is a fast, accessible portfolio site showcasing research papers and clusters. Built with Next.js 15, React 19, and Tailwind v4, it features a cyan-led water theme ("looking down into the waters of the Abzu").

## Development Commands

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Run production server
pnpm start

# Lint code
pnpm lint
```

Note: No test configuration exists yet.

## Architecture

The app follows a content-driven architecture with MDX files for research papers and clusters:

- **App Router**: All pages in `src/app/` using Next.js 15 App Router
- **Content**: MDX files in `content/` directory (clusters and papers)
- **Components**: Modular React components in `src/components/`
  - `ui/`: Basic UI primitives
  - `sections/`: Page sections (hero, about, etc.)
  - `papers/`: Paper-specific components
  - `graphs/`: Data visualization with D3
- **Lib**: Utilities in `src/lib/` for content loading and MDX processing

## Critical Coding Conventions

### Theming & Colors
**Never hard-code hex values**. Always use CSS variables:
- Text: `text-[--ink-h1]`, `text-[--ink-body]`, `text-[--ink-sub]`, `text-[--ink-meta]`
- Borders: `border-[--line]`
- Accent: `bg-[--brand-cyan]`, `text-[--brand-cyan]`
- Background: `bg-[--base]`, `bg-[--base-elevated]`

### Brand Color System
**Primary Gradient (Cyan)**
- Start: #00f5ff
- End: #00ccfe
- Implementation: Gradient-native (elements reveal gradient, never applied as fill)
- Direction: Horizontal bias, deeper at edges
- Scope: Per gestalt unit (never global)

**Electric Sunshine Yellow**
- Hex: #FCF951
- Usage: Precision boundaries, activation states
- Rule: Always solid, never gradient

**Gradient-Native CSS Implementation**
```css
.gradient-field {
  background: linear-gradient(90deg, #00f5ff 0%, #00ccfe 100%);
  position: absolute;
  z-index: -1;
}

.text-reveal {
  background: inherit;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Typography System
**Font Stack**
- Display/Headlines: "Rialto Titling", serif
- Body Text: "Kuenstler 480", serif
- UI/Secondary: "GT Zirkon", sans-serif
- Code/Technical: "JetBrains Mono", monospace
- Academic/LaTeX: "Cardo", serif

**Digital Size Specifications**
- Body text: 16px (1rem)
- UI text: 14px (0.875rem)
- Small text: 12px (0.75rem) minimum
- Display: 48px minimum

### Accessibility
- Keyboard navigation required everywhere
- Focus rings: `focus-visible:ring-2 ring-[--brand-cyan] ring-offset-2`
- Semantic HTML with proper landmarks
- One h1 per page only
- Target: Lighthouse 100 accessibility score
- Note: Light grays (30-40%) acceptable for sophisticated non-critical text

### Component Patterns
- TypeScript strict mode - no `any` types
- Colocate components with minimal logic
- Use `clsx` and `tailwind-merge` for conditional classes
- Motion should be CSS-only and feather-light

### Performance
- Target Lighthouse ≥95 performance score
- Optimize images and lazy load where appropriate
- Use Next.js built-in optimization features

## Content Structure

Research content is organized as:
```
content/
├── clusters/       # Research cluster descriptions (MDX)
├── papers/         # Papers organized by cluster (MDX)
└── relations.json  # Paper relationships
```

Papers include metadata: title, authors, date, abstract, urls (pdf, code, datasets), etc.

## Commit Conventions

Use conventional commits:
- `feat:` - New features
- `fix:` - Bug fixes
- `style:` - Style changes
- `refactor:` - Code refactoring
- `chore:` - Maintenance
- `docs:` - Documentation

## Key Dependencies

- **Framework**: Next.js 15, React 19
- **Styling**: Tailwind CSS v4 (no external UI frameworks)
- **Theming**: next-themes with class strategy
- **MDX**: gray-matter, react-markdown, remark-gfm, remark-math, rehype-katex
- **Package Manager**: pnpm (always use pnpm, not npm or yarn)

## Important Notes

- Dark mode is implemented via CSS variables and next-themes
- The project emphasizes accessibility (WCAG AA compliance)
- No external CSS frameworks allowed (only Tailwind v4)
- All colors must use design tokens, never hard-coded values
- Focus on performance and SEO optimization

## Brand Implementation Rules

### Core Positioning
- "Computational Arbitrage" - Direct, technical, precise messaging
- No democratization language, no startup clichés
- Target audience: 100-150 decision makers (filter effect intentional)

### Gradient-Native Execution
The gradient is NEVER:
- Stretched to fit shapes
- Applied as a fill
- Rotated per element

The gradient ALWAYS:
- Exists as a fixed field
- Gets revealed through masks
- Maintains consistent orientation within scope

### Responsive Type Scale
```css
/* Mobile First */
h1 { font-size: 2rem; }    /* 32px */
h2 { font-size: 1.75rem; }  /* 28px */
h3 { font-size: 1.5rem; }   /* 24px */
body { font-size: 1rem; }   /* 16px */

/* Desktop (min-width: 768px) */
@media (min-width: 768px) {
  h1 { font-size: 3rem; }    /* 48px */
  h2 { font-size: 2.25rem; } /* 36px */
  h3 { font-size: 1.75rem; } /* 28px */
}
```