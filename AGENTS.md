# Working in Editorial Intelligence OS

Orientation for an AI coding assistant starting a session here. Written to be tool-neutral: Claude Code, Codex or anything else.

## What this repository is

The Editorial Intelligence website — the public, visible form of the methodology. Live at [editorialintelligence.co](https://www.editorialintelligence.co).

An Astro site in `website/`, styled with Tailwind and deployed by Vercel from `main`. Content lives in `website/src/content/` as MDX collections; pages in `website/src/pages/`.

## The methodology lives somewhere else

This repository is the publishing layer, not the source of truth.

| Repository | Role |
|---|---|
| `asavinwa/editorial-intelligence-core` (private) | Frameworks, methods, research instruments, principles and development history. |
| `asavinwa/editorial-intelligence-os` (public) | This one. The website. |

**If a task involves why something says what it says, attach `editorial-intelligence-core` and read it there.** Start with that repository's `NOW.md` and the most recent handover in its `06-backlog/`.

This is not a second methodology home. A documentation layer duplicating Core was created here once and deliberately removed. Do not recreate it.

Where a page implements something specified in Core — the practitioner questionnaire at `/compare-notes/questionnaire` is the current example — the specification is canonical. Change it there first, then change the page.

## Working on the site

```bash
cd website
npm install
npm run dev      # local development
npm run build    # what CI runs
```

CI runs `npm run build` on every pull request and on `main`. Astro's content collections enforce the schemas and controlled tag vocabulary in `website/src/content/config.ts`, so malformed frontmatter or an unrecognised tag fails the build rather than shipping.

Run the build before pushing. It is the only check there is.

## Conventions

- **British English** throughout, including in code comments and commit messages.
- Match the surrounding page's structure. Pages carry their own scoped `<style>` blocks and use the design tokens in `website/src/styles/global.css` — `--color-ink`, `--color-surface`, `--color-accent`, `--font-serif` and so on. Use the tokens rather than literal colours, and check both themes.
- Shared page furniture lives in `website/src/components/`. `CompareNotesCallout.astro` in particular renders on seven pages, so a change there is a change everywhere.
- Navigation is defined once in `website/src/config/site.ts`.
- Pages that are pilots or otherwise not ready for search carry `noindex` via the `BaseLayout` prop.
- Photographs go in `website/public/Images/photos/`, uploaded through GitHub's own upload form. A photo attached to a Claude Code or Codex session on the web is never uploaded — the assistant gets a rendering to look at, not the file — so asking it to "add this photo" from a chat attachment cannot work. See that folder's `README.md` for the route that does, and for naming, sizing and orientation.
- **Asked where to upload a photo, answer with the link, not a description.** It is https://github.com/asavinwa/editorial-intelligence-os/upload/main/website/public/Images/photos — the upload form, aimed at the folder. Give it in full every time it is asked for; it is the detail worth not having to remember.
