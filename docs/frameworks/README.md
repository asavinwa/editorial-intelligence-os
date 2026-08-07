# Frameworks

Seventeen frameworks, grouped by what they are for. The canonical text of each lives in [`website/src/content/frameworks/`](../../website/src/content/frameworks/) and is published at [editorialintelligence.co/frameworks](https://www.editorialintelligence.co/frameworks). This page is the map, not the territory.

## Core method

The frameworks that describe the system itself. Start here.

| Framework | What it does | Type |
| --- | --- | --- |
| [Editorial Intelligence Framework](../../website/src/content/frameworks/editorial-intelligence-framework.mdx) | The core cycle: signals → synthesis → narratives → activation → evidence → reuse | cycle |
| [Narrative Architecture](../../website/src/content/frameworks/narrative-architecture.mdx) | How narratives are structured so they hold across formats and time | model |
| [Customer Signal Framework](../../website/src/content/frameworks/customer-signal-framework.mdx) | Capturing and qualifying signals before they become argument | process |
| [The Evidence Engine](../../website/src/content/frameworks/evidence-engine.mdx) | Turning activity into evidence that feeds the next cycle | process |
| [Portable Intelligence](../../website/src/content/frameworks/portable-intelligence.mdx) | Making knowledge travel between people, organisations and tools | model |

## Operating practice

Day-to-day mechanics — how the method is actually run.

| Framework | What it does | Type |
| --- | --- | --- |
| [The Daily OS](../../website/src/content/frameworks/daily-os.mdx) | The daily working rhythm of the system | process |
| [Workflow Library](../../website/src/content/frameworks/workflow-library.mdx) | Repeatable workflows, catalogued | template |
| [Content Activation Framework](../../website/src/content/frameworks/content-activation-framework.mdx) | Moving a narrative into formats and channels *(draft)* | process |
| [Case Study Intelligence Framework](../../website/src/content/frameworks/case-study-intelligence-framework.mdx) | Turning customer stories into reusable evidence | process |

## AI and agents

Where the method meets the tooling.

| Framework | What it does | Type |
| --- | --- | --- |
| [Editorial Intelligence and Agentic AI](../../website/src/content/frameworks/editorial-intelligence-agentic-ai.mdx) | What agents need from the knowledge layer to act well | model |
| [The AI Maturity Curve](../../website/src/content/frameworks/ai-maturity-curve.mdx) | Stages of AI capability and what each one requires | matrix |
| [Editorial Intelligence and AI Search](../../website/src/content/frameworks/ai-search-visibility.mdx) | How structured knowledge surfaces in AI search | model |
| [AI visibility is the outcome](../../website/src/content/frameworks/ai-visibility-buyability.mdx) | Visibility and buyability as results of the operating system | model |

## Commercial application

The method applied to specific commercial contexts.

| Framework | What it does | Type |
| --- | --- | --- |
| [Product Marketing Framework](../../website/src/content/frameworks/product-marketing-framework.mdx) | Editorial Intelligence applied to product marketing | process |
| [Editorial Intelligence for product teams](../../website/src/content/frameworks/editorial-intelligence-product-management.mdx) | The method inside product management | process |
| [MTD Operational Reset](../../website/src/content/frameworks/mtd-operational-reset.mdx) | Making Tax Digital as an operational change problem | process |
| [MTD Pricing Framework](../../website/src/content/frameworks/mtd-pricing-framework.mdx) | Pricing under a continuous compliance model | matrix |

## Reading the types

The `type` field in each framework's frontmatter is constrained to five values, and they mean different things:

- **cycle** — a continuous loop with no terminal state
- **process** — an ordered sequence with a defined start and end
- **model** — a way of seeing a problem; explains rather than instructs
- **matrix** — a positioning grid or comparison structure
- **template** — a reusable artefact to be filled in

## Adding a framework

Create the MDX in `website/src/content/frameworks/`, matching the schema in [`config.ts`](../../website/src/content/config.ts): `title`, `excerpt`, `date`, `status`, `tags` (from the controlled vocabulary), `type`, and the `related*` arrays. Then add it to the relevant group above. Set `status: draft` until it has survived contact with a real project — the grouping here reflects use, not intention.
