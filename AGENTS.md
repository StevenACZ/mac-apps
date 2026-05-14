# mac-apps Guide

## Scope

Public Nuxt landing hub for Steven's macOS productivity apps. Keep it static-host friendly, crawler-visible, accessible, and safe to publish.

## Security and Privacy

- Never commit secrets, tokens, private keys, internal IPs, environment dumps, local machine paths, or private deployment notes.
- Keep `AGENTS.md`, `README.md`, `CHANGELOG.md`, and metadata public-safe.
- Keep `APPS-STEVENACZ-DESIGN.md` and local `docs/` private unless explicitly approved.
- Use repository or hosting secrets for deployment credentials. Do not document raw credentials.

## Project Overview

| Field       | Value                                       |
| ----------- | ------------------------------------------- |
| URL         | `https://apps.stevenacz.com`                |
| Stack       | Astro, TypeScript, SCSS, `@astrojs/sitemap` |
| Output      | Static HTML in `dist/`                      |
| Data source | `src/data/apps.ts`                          |

Featured apps are defined in `app/composables/useApps.ts`:

- PeekOCR - screen OCR and QR scanning
- SapoWhisper - menu bar dictation with local or cloud transcription
- BuenMouse - mouse utilities

## Commands

```bash
bun install
bun run dev
bun run format
bun run format:check
bun run typecheck
bun run build
bun run preview
```

Use Bun because this repo tracks `bun.lock`. Keep generated `dist/`, `.astro/`, local docs, and env files out of commits.

## Structure

- `astro.config.mjs`: site URL, sitemap integration, trailing slash behavior.
- `src/pages/index.astro`: single landing route.
- `src/layouts/Layout.astro`: shared shell, SEO, CSP, JSON-LD graph.
- `src/components/`: section, icon, and ui components.
- `src/data/apps.ts`: canonical app list and `App` interface.
- `src/styles/`: SCSS tokens, mixins, base, animations, utilities.
- `public/apps/`: app icons and screenshots.

## SEO Configuration

- `src/layouts/Layout.astro` owns metadata, Open Graph, Twitter Card, manifest link, CSP, and the JSON-LD graph.
- `astro.config.mjs` owns site URL and sitemap integration.
- Keep structured data consolidated and non-conflicting: `WebSite`, `ItemList`, individual `SoftwareApplication` nodes, and `Person`.
- Keep `public/robots.txt` pointing at `https://apps.stevenacz.com/sitemap-index.xml`.
- Keep `public/manifest.json` valid JSON with real icons, categories, `lang`, and `dir`.

## Adding Apps

1. Add app data to `src/data/apps.ts` using the existing `App` interface.
2. Add `icon.png` and `screenshot.png` under `public/apps/<slug>/`.
3. Ensure app URLs are public, stable, and HTTPS.
4. Update JSON-LD if the app list semantics change.

## Code Style

- Use Astro components with frontmatter for logic and `<style lang="scss">` for scoped styles.
- Use TypeScript for shared data and component props.
- Use semantic HTML and accessible labels for interactive controls.
- Keep UI changes aligned with the quiet, product-focused macOS landing style.
- Prefer editing existing components and data structures over adding new abstractions.

## Verification

Before marking work complete, run:

```bash
bun run format:check
bun run typecheck
bun run build
bun audit
```

For SEO work, inspect `dist/` for:

- HTML with `application/ld+json`
- description and Open Graph metadata
- CSP meta tag
- valid `manifest.json`
- valid `sitemap-index.xml` and `sitemap-0.xml`
- real social preview image

## Git Safety

- Use conventional commits.
- Do not use destructive git operations unless explicitly requested.
