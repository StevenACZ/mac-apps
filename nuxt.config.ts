// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  ssr: true,
  modules: ["@nuxtjs/sitemap"],
  site: {
    url: "https://apps.stevenacz.com",
    name: "macOS Apps by Steven",
  },
  nitro: {
    preset: "static",
    prerender: {
      routes: ["/", "/sitemap.xml"],
    },
  },
  sitemap: {
    defaults: {
      changefreq: "weekly",
      priority: 1,
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "macOS Apps by Steven - Productivity Tools",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Native macOS menu bar apps built with Swift. Includes SapoWhisper for local or cloud dictation with overlay, auto-paste, and history.",
        },
        {
          name: "robots",
          content:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
        {
          name: "keywords",
          content:
            "macOS apps, menu bar apps, Swift, productivity, OCR, dictation, transcription, local AI, cloud AI, privacy, workflow automation, mouse utilities, open source",
        },
        // Open Graph
        { property: "og:title", content: "macOS Apps by Steven" },
        {
          property: "og:description",
          content:
            "Native macOS menu bar apps, including flexible dictation workflows with SapoWhisper.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://apps.stevenacz.com" },
        {
          property: "og:image",
          content: "https://apps.stevenacz.com/og-image.png",
        },
        {
          property: "og:image:alt",
          content: "macOS Apps by Steven brand icon",
        },
        { property: "og:image:width", content: "727" },
        { property: "og:image:height", content: "695" },
        { property: "og:locale", content: "en_US" },
        { property: "og:site_name", content: "macOS Apps by Steven" },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "macOS Apps by Steven" },
        {
          name: "twitter:description",
          content:
            "Native macOS menu bar apps, including flexible dictation workflows with SapoWhisper.",
        },
        {
          name: "twitter:image",
          content: "https://apps.stevenacz.com/og-image.png",
        },
        {
          name: "twitter:image:alt",
          content: "macOS Apps by Steven brand icon",
        },
        // Other
        { name: "theme-color", content: "#10B981" },
        { name: "author", content: "Steven" },
        {
          "http-equiv": "Content-Security-Policy",
          content:
            "default-src 'self'; script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: https://avatars.githubusercontent.com; connect-src 'self' https://cloudflareinsights.com; object-src 'none'; frame-ancestors 'none'; base-uri 'self'; form-action 'self';",
        },
      ],
      link: [
        { rel: "canonical", href: "https://apps.stevenacz.com" },
        { rel: "manifest", href: "/manifest.json" },
        { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
        },
      ],
    },
  },

  css: ["~/assets/scss/main.scss"],
});
