<div align="center">

# 🍎 macOS Apps

**Beautiful landing page showcasing free & open source macOS productivity apps**

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

- **Nuxt 4** - Vue framework
- **SCSS** - Styling
- **SSR + Static Generation** - Search-engine friendly HTML with static output

---

## 🔎 SEO & Security

- `ssr: true` with static output for crawlable production HTML
- XML sitemap generated at `/sitemap.xml`
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
