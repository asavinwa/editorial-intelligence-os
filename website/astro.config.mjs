import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.editorialintelligence.co',
  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      customPages: ['https://www.editorialintelligence.co/diagnostic/'],
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
