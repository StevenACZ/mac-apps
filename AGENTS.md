# mac-apps - Development Guide

## Scope

This repository contains the public Nuxt landing hub for Steven's macOS productivity apps. Keep it static-host friendly, SSR-rendered for crawlers, accessible, and safe for public release.

## Security and Privacy

- Never commit secrets, tokens, private keys, internal IPs, environment dumps, local machine paths, or private deployment notes.
- Keep `AGENTS.md`, `README.md`, and changelog entries public-safe.
- Keep `APPS-STEVENACZ-DESIGN.md` private unless the user explicitly approves publishing it.
- Use repository or hosting secrets for deployment credentials. Do not document raw credentials.

## Project Overview

| Field          | Value                                   |
| -------------- | --------------------------------------- |
| Name           | mac-apps                                |
| Production URL | `https://apps.stevenacz.com`            |
| Framework      | Nuxt 4.2.x                              |
| Rendering      | SSR enabled, generated as a static site |
| Purpose        | Public hub for StevenACZ macOS apps     |

Featured apps are defined in `app/composables/useApps.ts`:

- PeekOCR - screen OCR and QR scanning
- SapoWhisper - menu bar dictation with local or cloud transcription
- BuenMouse - mouse utilities

## Tech Stack

| Technology        | Purpose                             |
| ----------------- | ----------------------------------- |
| Nuxt 4            | Vue framework and static generation |
| Vue 3             | UI runtime                          |
| TypeScript        | App data and type safety            |
| SCSS              | Styling, variables, and mixins      |
| `@nuxtjs/sitemap` | Sitemap generation                  |

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

Use Bun by default because the repository includes `bun.lock`. Keep generated `.output/`, `.nuxt/`, and `dist/` output out of commits.

## Project Structure

```text
mac-apps/
├── app/
│   ├── app.vue                    # Root shell and structured data
│   ├── components/                # Reusable Vue components
│   ├── composables/useApps.ts     # Canonical app data
│   └── assets/scss/               # SCSS variables, mixins, and base styles
├── public/
│   ├── apps/                      # App icons and screenshots
│   ├── manifest.json              # Web app manifest
│   ├── og-image.png               # Social preview image
│   └── robots.txt                 # Crawler directives
├── nuxt.config.ts                 # SSR, sitemap, CSP, metadata
└── package.json
```

## SEO Configuration

- `nuxt.config.ts` is the source of truth for site URL, SSR, static prerendering, metadata, Open Graph, Twitter Card, manifest link, sitemap link, and CSP meta.
- `app/app.vue` owns the JSON-LD graph.
- The production HTML must expose crawler-visible metadata because `ssr: true` is required for this repo.
- Keep structured data consolidated and non-conflicting: `WebSite`, `ItemList`, individual `SoftwareApplication` nodes, and `Person`.
- Keep `public/robots.txt` pointing at `https://apps.stevenacz.com/sitemap.xml`.
- Keep `public/manifest.json` valid JSON with real icons, categories, `lang`, and `dir`.

## Adding a New App

1. Add app data to `app/composables/useApps.ts` using the existing `App` interface.
2. Add public assets under `public/apps/<slug>/`:
   - `icon.png`
   - `screenshot.png`
3. Ensure app URLs are public, stable, and use HTTPS.
4. Update JSON-LD expectations if a new app changes the app list semantics.
5. Run the full local verification commands before publishing.

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
- Ask before staging, committing, pushing, creating PRs, or merging unless the user has already granted explicit permission for the current task.
- Do not use destructive git operations unless explicitly requested.
