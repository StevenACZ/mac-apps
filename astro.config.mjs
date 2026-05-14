// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://apps.stevenacz.com",
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 1,
      lastmod: new Date(),
    }),
  ],
  build: {
    assets: "assets",
  },
  vite: {
    build: {
      cssMinify: true,
      assetsInlineLimit: 0,
    },
  },
  trailingSlash: "always",
});
