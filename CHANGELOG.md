# Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog and this project follows Semantic Versioning where practical.

## [Unreleased]

### Added

- Added `@nuxtjs/sitemap` and sitemap generation at `/sitemap.xml`.
- Added `public/manifest.json` with real icon assets already present in `public/`.
- Added structured data (`application/ld+json`) with `WebSite`, `ItemList`, `SoftwareApplication`, and `Person` entities.

### Changed

- Switched from SPA output to SSR + static generation so prerendered HTML now includes real page content.
- Expanded global SEO metadata (robots, canonical, Open Graph, Twitter, locale/site name, image dimensions, manifest link).
- Replaced `robots.txt` with a production-safe policy that includes the sitemap URL.
- Added a strict Content Security Policy meta definition aligned with Nuxt runtime needs, Google Fonts, local assets, and Cloudflare analytics endpoints.
- Fixed navbar scroll listener cleanup to avoid lifecycle warnings under SSR.
- Refreshed public site copy to better match the current SapoWhisper positioning.
- Updated SapoWhisper messaging from generic voice-to-text wording to menu bar dictation with local or cloud transcription, overlay, auto-paste, and history.
- Improved homepage and SEO copy to emphasize native macOS workflows, privacy, and flexibility.
- Corrected the public macOS requirement shown for SapoWhisper to macOS 14.0+.
- Hardened deployment configuration so GitHub Actions now validates and targets the real production path for `apps.stevenacz.com`.
