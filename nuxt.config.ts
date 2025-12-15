// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  // Static site generation (no server)
  ssr: false,
  nitro: {
    preset: "static",
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
            "Free and open source macOS productivity apps. PeekOCR, SapoWhisper, BuenMouse - menu bar tools built with Swift.",
        },
        {
          name: "keywords",
          content:
            "macOS apps, menu bar apps, Swift, productivity, OCR, voice to text, mouse utilities, free, open source",
        },
        // Open Graph
        { property: "og:title", content: "macOS Apps by Steven" },
        {
          property: "og:description",
          content: "Free and open source macOS productivity apps.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://apps.stevenacz.com" },
        {
          property: "og:image",
          content: "https://apps.stevenacz.com/og-image.png",
        },
        { property: "og:locale", content: "en_US" },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "macOS Apps by Steven" },
        {
          name: "twitter:description",
          content: "Free and open source macOS productivity apps.",
        },
        {
          name: "twitter:image",
          content: "https://apps.stevenacz.com/og-image.png",
        },
        // Other
        { name: "theme-color", content: "#10B981" },
        { name: "author", content: "Steven" },
      ],
      link: [
        { rel: "canonical", href: "https://apps.stevenacz.com" },
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
