/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['DM Serif Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#1a1a18',
          secondary: '#4a4a46',
          tertiary: '#8a8a84',
          inverse: '#fafaf8',
        },
        surface: {
          DEFAULT: '#fafaf8',
          secondary: '#f2f2ee',
          tertiary: '#e8e8e2',
          inverse: '#1a1a18',
        },
        accent: {
          DEFAULT: '#2d5a3d',
          light: '#e8f0eb',
          mid: '#4a7c5f',
        },
        signal: '#8b5e3c',
      },
      typography: (theme) => ({
        editorial: {
          css: {
            '--tw-prose-body': theme('colors.ink.secondary'),
            '--tw-prose-headings': theme('colors.ink.DEFAULT'),
            '--tw-prose-lead': theme('colors.ink.secondary'),
            '--tw-prose-links': theme('colors.accent.DEFAULT'),
            '--tw-prose-bold': theme('colors.ink.DEFAULT'),
            '--tw-prose-counters': theme('colors.ink.tertiary'),
            '--tw-prose-bullets': theme('colors.ink.tertiary'),
            '--tw-prose-hr': theme('colors.surface.tertiary'),
            '--tw-prose-quotes': theme('colors.ink.DEFAULT'),
            '--tw-prose-quote-borders': theme('colors.accent.DEFAULT'),
            '--tw-prose-code': theme('colors.ink.DEFAULT'),
            '--tw-prose-pre-bg': theme('colors.surface.secondary'),
            maxWidth: 'none',
            lineHeight: '1.8',
            p: { marginTop: '1.5em', marginBottom: '1.5em' },
            'h2': { fontFamily: theme('fontFamily.serif').join(', '), fontWeight: '400', letterSpacing: '-0.01em' },
            'h3': { fontWeight: '500', letterSpacing: '-0.01em' },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
