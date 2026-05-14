# mac-apps Guide

## Scope

Public Nuxt landing hub for Steven's macOS productivity apps. Keep it static-host friendly, crawler-visible, accessible, and safe to publish.

## Security and Privacy

- Never commit secrets, tokens, private keys, internal IPs, environment dumps, local machine paths, or private deployment notes.
- Keep `AGENTS.md`, `README.md`, `CHANGELOG.md`, and metadata public-safe.
- Keep `APPS-STEVENACZ-DESIGN.md` and local `docs/` private unless explicitly approved.
- Use repository or hosting secrets for deployment credentials. Do not document raw credentials.

## Project Overview

| Field       | Value                                              |
| ----------- | -------------------------------------------------- |
| URL         | `https://apps.stevenacz.com`                       |
| Stack       | Nuxt 4, Vue 3, TypeScript, SCSS, `@nuxtjs/sitemap` |
| Output      | SSR enabled, generated as static HTML              |
| Data source | `app/composables/useApps.ts`                       |

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
bun run generate
bun run preview
```

Use Bun because this repo tracks `bun.lock`. Keep generated `.output/`, `.nuxt/`, `dist/`, local docs, and env files out of commits.

## Structure

- `app/app.vue`: root shell and structured data.
- `app/components/`: reusable Vue components.
- `app/composables/useApps.ts`: canonical app list.
- `app/assets/scss/`: variables, mixins, base styles.
- `public/apps/`: app icons and screenshots.
- `nuxt.config.ts`: SSR, sitemap, CSP, metadata.

## SEO Configuration

- `nuxt.config.ts` owns site URL, SSR, prerendering, metadata, Open Graph, Twitter Card, manifest, sitemap, and CSP.
- `app/app.vue` owns the JSON-LD graph.
- Keep structured data consolidated and non-conflicting: `WebSite`, `ItemList`, individual `SoftwareApplication` nodes, and `Person`.
- Keep `public/robots.txt` pointing at `https://apps.stevenacz.com/sitemap.xml`.
- Keep `public/manifest.json` valid JSON with real icons, categories, `lang`, and `dir`.

## Adding Apps

1. Add app data to `app/composables/useApps.ts` using the existing `App` interface.
2. Add `icon.png` and `screenshot.png` under `public/apps/<slug>/`.
3. Ensure app URLs are public, stable, and HTTPS.
4. Update JSON-LD if the app list semantics change.

## Code Style

- Use Vue 3 Composition API and `<script setup>`.
- Use TypeScript for composables and shared data.
- Use semantic HTML and accessible labels for interactive controls.
- Keep UI changes aligned with the quiet, product-focused macOS landing style.
- Prefer editing existing components and data structures over adding new abstractions.

## Verification

Before marking work complete, run:

```bash
bun run format:check
bun run typecheck
bun run build
bun run generate
bun audit
```

For SEO work, inspect `.output/public/` for:

- SSR HTML with `application/ld+json`
- description and Open Graph metadata
- CSP meta tag
- valid `manifest.json`
- valid `sitemap.xml`
- real social preview image

## Git Safety

- Use conventional commits.
- Do not use destructive git operations unless explicitly requested.
