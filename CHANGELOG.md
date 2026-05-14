# Changelog

## Unreleased

- Migrated the landing from Nuxt 4 / Vue 3 to Astro with the same SCSS tokens and visual identity.
- Replaced the `useApps` composable with a plain TypeScript module under `src/data/apps.ts`.
- Realigned `robots.txt` and the `<link rel="sitemap">` to Astro's `sitemap-index.xml`.
- Updated Nuxt/Vue/Sass dependencies to the current 2026 line.
- Removed the duplicate npm lockfile; Bun is the single package manager.
- Kept `AGENTS.md` as the public maintenance guide and `CLAUDE.md` as a pointer.
- Ignored local `docs/` notes.

## 2026-05-13

- Added sitemap generation, manifest metadata, JSON-LD, CSP, and production-safe robots.
- Switched from SPA output to SSR plus static generation.
- Refreshed copy for the current macOS apps and SapoWhisper positioning.
