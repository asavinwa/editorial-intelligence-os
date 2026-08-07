# Start here

This is the documentation layer of the Editorial Intelligence OS. It explains how the system thinks. It is deliberately separate from the content the system produces, which lives in `website/src/content/` and is published at [editorialintelligence.co](https://www.editorialintelligence.co).

## What Editorial Intelligence is

Editorial Intelligence is a method for turning what an organisation already knows into strategic assets that compound in value over time.

Most organisations already hold the evidence they need. It sits in customer conversations, support tickets, sales calls, research decks, event feedback and the heads of the people closest to the work. What is missing is not information but a system for converting it — repeatedly and reliably — into narratives that change decisions.

The core model is a cycle, not a pipeline:

**Signals → Synthesis → Narratives → Activation → Evidence → Learning and reuse → Signals**

Each pass produces evidence that strengthens the next. That is what "compounding" means here, and it is the property that distinguishes an operating system from a content calendar.

The full articulation is in [`website/src/content/frameworks/editorial-intelligence-framework.mdx`](../website/src/content/frameworks/editorial-intelligence-framework.mdx).

## How to navigate this repository

**If you want to understand the argument**, read [`philosophy.md`](philosophy.md), then the Editorial Intelligence Framework, then the narratives in `website/src/content/narratives/`.

**If you want to apply the method**, start with [`frameworks/`](frameworks/) — it indexes all seventeen frameworks and groups them by what they are for.

**If you want to see it working**, look at [`../research/experiments/`](../research/experiments/) and the corresponding entries in `website/src/content/experiments/`. These are real builds, not illustrations.

**If you want to know where this is going**, read [`roadmap/`](roadmap/) and [`changelog/`](changelog/).

## The four content collections

The published system is organised into four collections, each with a distinct job:

| Collection | What it holds | Count |
| --- | --- | --- |
| `narratives` | Long-form, argument-led pieces that carry a strategic position | 10 |
| `frameworks` | Reusable mental models, processes and templates | 17 |
| `writing` | Articles, notes and reflections — the working surface | 26 |
| `experiments` | Implementations that test the method in practice | 6 |

Schemas for all four are defined in [`website/src/content/config.ts`](../website/src/content/config.ts).

## A note on this layer

`docs/` describes and indexes; it does not duplicate. Where a framework, narrative or experiment already exists as MDX, the documentation here links to it rather than restating it. When the two disagree, the MDX is correct — it is what gets published.
