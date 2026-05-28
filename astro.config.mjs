// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://fodylabs.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'ru', 'uk', 'es', 'it', 'fr'],
    routing: {
      prefixDefaultLocale: false,
      fallbackType: 'rewrite',
    },
  },
});
