<div align="center">

# 🍎 macOS Apps

**Astro landing hub for free & open-source macOS productivity apps**

[Live Site](https://apps.stevenacz.com) · [Portfolio](https://stevenacz.com) · [GitHub](https://github.com/StevenACZ)

</div>

---

## ✨ Featured Apps

| App                | Description                                          |
| ------------------ | ---------------------------------------------------- |
| 🔍 **PeekOCR**     | Extract text from anywhere on your screen            |
| 🐸 **SapoWhisper** | Menu bar dictation with local or cloud transcription |
| 🖱️ **BuenMouse**   | Mouse utilities for better productivity              |

---

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production
bun run build
```

---

## 🛠️ Tech Stack

- **Astro** - Static site framework
- **TypeScript** - Typed data layer and component props
- **SCSS** - Design tokens, mixins, and component styles
- **`@astrojs/sitemap`** - Sitemap generation
- **Static HTML output** - Zero client-side JS by default for crawlable pages

---

## 📂 Project Structure

```
mac-apps/
├── astro.config.mjs      # site URL, sitemap, trailing slash
├── src/
│   ├── pages/index.astro # single landing route
│   ├── layouts/          # shared shell + SEO + JSON-LD
│   ├── components/       # sections, icons, ui
│   ├── data/apps.ts      # canonical app list
│   └── styles/           # SCSS tokens, mixins, base
└── public/               # icons, manifest, screenshots
```

---

## 🔎 SEO & Security

- Pre-rendered static HTML for crawlable production pages
- XML sitemap generated at `/sitemap-index.xml`
- Web app manifest at `/manifest.json`
- Structured data (`application/ld+json`) for `WebSite`, `ItemList`, and `SoftwareApplication`
- Canonical + Open Graph + Twitter metadata
- CSP meta policy with explicit sources for scripts, styles, fonts, images, and analytics endpoints

---

## 🚢 Deployment

- Production URL: https://apps.stevenacz.com
- Deployment runs automatically on pushes to `main` via GitHub Actions
- The production target is configured through repository secrets so collaborators can deploy without hardcoding server internals in the repo

---

## 📝 License

MIT © [Steven](https://stevenacz.com)
