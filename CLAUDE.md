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

### Accessibility
- Keyboard navigation required everywhere
- Focus rings: `focus-visible:ring-2 ring-[--brand-cyan] ring-offset-2`
- Semantic HTML with proper landmarks
- One h1 per page only
- Target: Lighthouse 100 accessibility score

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