# Structure before volume

**The rule:** knowledge that is not structured cannot be found, reused, or handed to an agent. Structure it first, then scale it.

## Why

Unstructured knowledge fails in a specific way: it is retrievable only by the person who filed it, and only while they remember filing it. That was tolerable when every output passed through a human who could supply the missing context. It is not tolerable when agents run workflows autonomously — they have no way to recover context that was never written down.

Structure is what makes knowledge addressable. Explicit schemas, a controlled vocabulary and declared relationships turn a pile of documents into something that can be queried, cross-referenced and reasoned over.

## What it rules out

- Free-text tagging, which produces synonyms and orphans within weeks
- Content whose relationship to the rest of the system is implied rather than declared
- Publishing more before the existing base is navigable
- Formats that lose their structure on export

## What it demands in this repository

The site enforces this rather than recommending it:

- **A controlled tag vocabulary.** `TAGS` in `website/src/content/config.ts` is the single source of truth. A tag outside that list fails the build.
- **Typed schemas per collection.** Each of `narratives`, `frameworks`, `writing` and `experiments` has a Zod schema. Missing or malformed frontmatter fails the build.
- **Explicit relationships.** The `related*` arrays reference other entries by slug. Relationships are data, not prose.

These constraints are deliberate friction. They make it impossible to add content that the system cannot later find.

## Test

Ask of any new content: *could an agent with no prior context locate this and know what it relates to?* If it depends on someone remembering where it went, it is not structured yet.

---

**Sources:** [Documentation as competitive advantage](../../website/src/content/writing/documentation-competitive-advantage.mdx) · [GitHub for knowledge](../../website/src/content/writing/github-for-knowledge.mdx) · [`config.ts`](../../website/src/content/config.ts)
