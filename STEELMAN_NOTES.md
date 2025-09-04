# Steelman Pack — Abzu Research Site

This snapshot adds:
- Research IA (programs → cluster pages → paper detail) with MDX content.
- Papers grid **filters** (program/year/status) via URL params.
- **Relation graph** widget on paper pages (D3) using `content/relations.json`.
- **Dynamic OG covers** tinted per program.
- **Wolfram embeds** via `NEXT_PUBLIC_WOLFRAM_CLOUD_BASE` (see WolframEmbed).
- Markdown rendering with math, headings anchors, and autolinked section titles.
- BibTeX box with **copy‑to‑clipboard**.

Edit content under `content/` and restart dev. For OG covers, you can optionally set `thumbnail` on a paper.
