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
      /**
       * A page carrying `noindex` must also stay out of the sitemap. Submitting
       * one for crawling contradicts the tag, and the sitemap is the more
       * public of the two — anyone can read it, so a page listed there is
       * discoverable whatever the meta tag says.
       *
       * The practitioner questionnaire is a pilot, reached by invitation from
       * `/compare-notes` until version 1.0 is frozen. Keep this in step with
       * the `noindex` props set in `src/pages/`.
       */
      filter: (page) => !page.includes('/compare-notes/questionnaire'),
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
