# Editorial Intelligence

[![build](https://github.com/asavinwa/editorial-intelligence-os/actions/workflows/build.yml/badge.svg)](https://github.com/asavinwa/editorial-intelligence-os/actions/workflows/build.yml)
[![content: CC BY 4.0](https://img.shields.io/badge/content-CC%20BY%204.0-blue)](LICENSE)
[![code: MIT](https://img.shields.io/badge/code-MIT-blue)](LICENSE)

Source for **[editorialintelligence.co](https://www.editorialintelligence.co)** — the published home of Editorial Intelligence.

Editorial Intelligence is a method for turning what an organisation already knows into strategic assets that compound. Most organisations do not lack insight; they lack a system for remembering it. Research is commissioned, evidence gathered, observations made — and then the learning disappears, and the next project starts from scratch.

The site sets out the method, the frameworks behind it and the experiments testing it in practice.

**→ [Read it on the site](https://www.editorialintelligence.co)**

## Structure

An [Astro 4](https://astro.build) site. Everything lives under `website/`.

| Path | Contains |
| --- | --- |
| `website/src/pages/` | Routes |
| `website/src/components/` | Components, with content-specific ones under `components/content/` |
| `website/src/content/` | The content collections — narratives, frameworks, writing, experiments |
| `website/src/content/config.ts` | Collection schemas and the controlled tag vocabulary |
| `website/public/` | Static assets |

Content is authored as MDX in typed collections rather than hard-coded into pages, so the schemas — not editorial discipline — are what keep it consistent.

## Working locally

```bash
cd website
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to website/dist
npm run preview
```

Requires Node 22.

## Deployment

Vercel builds from the repository root using [`vercel.json`](vercel.json), which points install, build and output at `website/`. Change that file rather than the Vercel dashboard, so the deploy configuration stays in the repository.

## Conventions

- **Tags are a controlled vocabulary.** Add new tags to `TAGS` in `website/src/content/config.ts` before using them; anything else fails the build.
- **`status` gates publication.** `draft` content stays out of listings. Narratives, frameworks and writing use `draft`/`published`; experiments use `active`/`complete`/`archived`/`draft`.
- **Relationships are explicit.** The `related*` frontmatter arrays reference other entries by slug and drive cross-linking. Keep them accurate in both directions.
- **CI enforces all three.** [`.github/workflows/build.yml`](.github/workflows/build.yml) builds on every push and pull request, so a bad tag or malformed frontmatter fails before it reaches the site.

## Licence

Content is [CC BY 4.0](LICENSE) — free to use and adapt with attribution. Site code is MIT. See [`LICENSE`](LICENSE).
