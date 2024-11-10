// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://shukrullojondev.uz",
  i18n: {
    defaultLocale: "uz",
    locales: ["uz", "ru", "en"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "uz",
        locales: { uz: "uz-UZ", ru: "ru-RU", en: "en-US" },
      },
    }),
  ],
});
