# mac-apps Guide

## Scope

Public Astro landing hub for Steven's macOS productivity apps. Keep it static, fast, crawler-visible, accessible, and safe to publish.

## Security and Privacy

- Never commit secrets, tokens, private keys, internal IPs, env dumps, local paths, or private deployment notes.
- Keep `APPS-STEVENACZ-DESIGN.md` and local `docs/` ignored.
- Use repository or hosting secrets for deployment credentials.

## Project Overview

| Field       | Value                                       |
| ----------- | ------------------------------------------- |
| URL         | `https://apps.stevenacz.com`                |
| Stack       | Astro, TypeScript, SCSS, `@astrojs/sitemap` |
| Output      | Static HTML in `dist/`                      |
| Data source | `src/data/apps.ts`                          |

Featured apps: PeekOCR (screen OCR), SapoWhisper (menu bar dictation), BuenMouse (mouse utilities).

## Commands

```bash
bun install
bun run dev
bun run format:check
bun run typecheck
bun run build
bun run preview
```

Bun is the package manager (lockfile is `bun.lock`). Keep `dist/`, `.astro/`, `node_modules/`, local docs, and env files out of commits.

## Structure

- `astro.config.mjs`: site URL, sitemap, trailing slash.
- `src/pages/index.astro`: single landing route.
- `src/layouts/Layout.astro`: head, SEO, CSP, JSON-LD graph.
- `src/components/`: sections, icons, ui.
- `src/data/apps.ts`: canonical app list and `App` interface.
- `src/styles/`: SCSS tokens, mixins, base, animations, utilities.
- `public/apps/`: app icons and screenshots.

## SEO

- `src/layouts/Layout.astro` owns metadata, OG/Twitter, CSP, manifest link, and JSON-LD.
- Keep structured data consolidated: `WebSite`, `ItemList`, `SoftwareApplication` nodes, `Person`.
- `public/robots.txt` points at `https://apps.stevenacz.com/sitemap-index.xml`.
- Keep `public/manifest.json` valid JSON with real icons, categories, `lang`, and `dir`.

## Adding Apps

1. Append to `src/data/apps.ts` using the `App` interface.
2. Add `icon.png` and `screenshot.png` under `public/apps/<slug>/`.
3. Use public, stable, HTTPS URLs only.

## Code Style

- Astro components with TypeScript frontmatter and `<style lang="scss">` scoped styles.
- Semantic HTML and accessible labels for interactive controls.
- Prefer editing existing components and data over adding new abstractions.

## Verification

```bash
bun run format:check
bun run typecheck
bun run build
bun audit
```

For SEO work, inspect `dist/` for `application/ld+json`, OG metadata, CSP meta, valid `manifest.json`, valid `sitemap-index.xml`, and a real social preview image.

## Git Safety

- Use conventional commits.
- Do not use destructive git operations unless explicitly requested.
