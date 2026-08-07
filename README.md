# Editorial Intelligence OS

The repository behind [editorialintelligence.co](https://www.editorialintelligence.co) — the published site, the documentation that explains the system, and the research that feeds it.

Editorial Intelligence is a method for turning what an organisation already knows into strategic assets that compound. This repository holds three things: the **method** (`docs/`), the **evidence and work in progress** (`research/`), and the **published surface** (`website/`).

## Structure

```
editorial-intelligence-os/
├── website/          Astro site — the published surface
├── docs/             The method: philosophy, principles, frameworks, roadmap, changelog
├── research/         Public notes and experiments
└── README.md
```

### `website/`

The Astro 4 site that renders everything public-facing. It is a standard Astro project:

| Path | Role |
| --- | --- |
| `website/src/pages/` | Routes — the application layer |
| `website/src/components/` | Astro components, including content-specific ones under `components/content/` |
| `website/src/content/` | Content collections (`narratives`, `frameworks`, `writing`, `experiments`) — the canonical MDX |
| `website/src/content/config.ts` | Collection schemas and the controlled tag vocabulary |
| `website/public/` | Static assets served as-is |

Astro requires routes to live at `src/pages`, so the app and component layers sit under `src/` rather than at the root of `website/`.

**Content lives in `website/src/content/`, not in `docs/`.** The MDX files there are the canonical, rendered source of truth for frameworks, narratives, writing and experiments. `docs/` explains and indexes the system; it does not duplicate the content.

### `docs/`

Documentation of the method itself — the reasoning, not the output.

| Path | Role |
| --- | --- |
| [`start-here.md`](docs/start-here.md) | Entry point: what this is and how to navigate it |
| [`philosophy.md`](docs/philosophy.md) | Why Editorial Intelligence exists and what it argues |
| [`principles/`](docs/principles/) | The working principles that govern decisions |
| [`frameworks/`](docs/frameworks/) | Index of the frameworks and how they relate |
| [`roadmap/`](docs/roadmap/) | What is being built next and why |
| [`changelog/`](docs/changelog/) | What changed, when, and what it means |

### `research/`

| Path | Role |
| --- | --- |
| [`public-notes/`](research/public-notes/) | Open working notes — thinking in progress, published early |
| [`experiments/`](research/experiments/) | Build logs and findings for the experiments the site lists |

## Running the site

```bash
cd website
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to website/dist
npm run preview
```

## Deployment

Vercel builds from the repository root using [`vercel.json`](vercel.json), which points the install, build and output paths at `website/`. If you change the deploy target, update that file rather than the Vercel dashboard so the configuration stays in the repository.

## Conventions

- **Tags are a controlled vocabulary.** Add new tags to `TAGS` in `website/src/content/config.ts` before using them; the schema rejects anything else and the build fails.
- **`status` gates publication.** `draft` content stays out of listings. Narratives, frameworks and writing use `draft`/`published`; experiments use `active`/`complete`/`archived`/`draft`.
- **Relationships are explicit.** The `related*` frontmatter arrays reference other entries by slug and drive cross-linking. Keep them accurate in both directions.
