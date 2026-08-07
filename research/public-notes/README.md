# Public notes

Working notes, published early. This is where signals enter the system before they are ready to be narratives.

## What this is for

The [Editorial Intelligence Framework](../../website/src/content/frameworks/editorial-intelligence-framework.mdx) begins with signals — observations with the potential to change or strengthen strategic understanding. Most signals never reach that threshold. But the ones that do are usually noticed well before anyone can say why they matter, and if there is nowhere to put them in the interim, they are lost.

That is the gap this directory fills. A note here is an observation with enough substance to record and not enough to argue.

## What belongs here

- Observations from client work, events or conversations that have not yet found a pattern
- Partial readings of evidence — including evidence that does not fit the existing position
- Questions raised by a piece of work and left unanswered
- Early workings of an argument, before it is worth publishing

## What does not

- Finished positions — those are narratives or articles, and belong in `website/src/content/`
- Findings from a specific experiment — those go in [`../experiments/`](../experiments/)
- Private client material, anything under NDA, or anything identifying a client without permission

## Format

One Markdown file per note, named `YYYY-MM-DD-short-slug.md`, opening with a short header:

```markdown
# Note title

**Status:** provisional | developing | promoted | abandoned
**Date:** 2026-08-07
**Signal:** one line on what prompted this

...
```

`status` is the important field. A note that declares itself provisional is not a position — the reader knows what they are getting. A note that says nothing implies more confidence than it has.

When a note becomes an argument, promote it: write it up in `website/src/content/writing/` and set the note's status to `promoted` with a link. When it turns out to be wrong, set `abandoned` and say why. Do not delete it — a recorded dead end stops the same idea being re-explored, which is itself a form of compounding.
