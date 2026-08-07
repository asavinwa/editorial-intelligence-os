# Open questions

Decisions that shape the roadmap but have not been made. Recorded so they are argued once rather than re-encountered.

Each question states the choice, what turns on it, and — where there is one — the current lean. A question leaves this file when it is answered; the answer goes to the [changelog](../changelog/) with its reasoning.

---

## Where is the boundary between `docs/` and `website/src/content/`?

The current rule is that `docs/` explains the system and `website/src/content/` holds what the system produces. It holds cleanly for narratives and writing. It is less clear for frameworks: a framework is arguably part of the method rather than an output of it, yet all seventeen live in the content collections because they are published pages.

**What turns on it:** whether `docs/frameworks/` stays an index or becomes the source, with the site rendering from it.

**Current lean:** keep the index. The frameworks are read by people on the site, and moving them would break the collection schemas and cross-references for a gain that is mostly conceptual.

---

## Should the method be versioned?

Frameworks change. Nothing currently records which version of a framework a piece of work was built against, so a client using a 2025 framework has no way to see what has changed since.

**What turns on it:** whether frameworks carry a version field, and whether superseded versions stay published.

**Current lean:** unresolved. The [changelog](../changelog/) covers some of this need; a full versioning scheme may be more machinery than the volume of change justifies.

---

## What is exposed to agents, and to whom?

The knowledge base is structured well enough to be agent-consumable. That raises a question the roadmap defers: an export that makes the system genuinely useful to an agent also makes it trivially extractable.

**What turns on it:** whether the export surface is public, gated, or client-specific — and whether the answer differs for frameworks (arguably the shopfront) and evidence (arguably the asset).

**Current lean:** unresolved, and the most consequential question on this list. It should be answered before the export is built, not after.

---

## Does research get published before it is right?

`research/public-notes/` is premised on publishing thinking early. That conflicts, at the margin, with holding a position only when the evidence supports it.

**What turns on it:** the editorial bar for the notes directory, and whether notes are visible on the site or repository-only.

**Current lean:** publish early, but mark status explicitly. A note that declares itself provisional is not a position; a note that does not is.

---

## Adding to this file

A question belongs here if it has come up twice and the answer would change what gets built. Questions that only affect one piece of work should be settled in that work.
