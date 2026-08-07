# Now, next and later

*Derived from the state of the repository as of the August 2026 restructure. Horizons reflect what the content itself declares — `status` fields, draft flags and active experiments — rather than a separately maintained plan.*

## Now

**Experiments in flight.** Four experiments carry `status: active`, meaning they are being built and used rather than described:

| Experiment | Type | What it tests |
| --- | --- | --- |
| [Hidden Hours Diagnostic](../../website/src/content/experiments/hidden-hours-diagnostic.mdx) | diagnostic | Whether a narrative can be delivered as an instrument that returns evidence |
| [Case Study Agent](../../website/src/content/experiments/case-study-agent.mdx) | agent | Whether customer stories can be turned into reusable evidence semi-autonomously |
| [Editorial Brief Generator](../../website/src/content/experiments/editorial-brief-generator.mdx) | workflow | Whether structured knowledge produces usable briefs without a human synthesising each time |
| [Webinar and Event Intelligence](../../website/src/content/experiments/event-intelligence.mdx) | workflow | Whether events can feed the signal layer systematically rather than anecdotally |

**Documenting the OS itself.** The [Editorial Intelligence OS](../../website/src/content/experiments/editorial-intelligence-os.mdx) experiment is at version 0.1 and marked draft: the structure is stable, the components are being added as they are tested. This `docs/` layer is part of that work.

## Next

**Finish the Content Activation Framework.** It is the one framework still carrying `status: draft`, and it sits at the weakest point in the cycle — the step between a settled narrative and its appearance in formats and channels. Until it is written, activation is the part of the method that relies most on judgement in the moment rather than documented practice.

**Close the evidence loop on the active experiments.** All four are running; none has a published account of what it returned. The [compounding principle](../principles/compounding.md) applies to the system's own work: an experiment that produces no recorded finding has not completed a cycle. Findings belong in [`research/experiments/`](../../research/experiments/).

**Populate `research/public-notes/`.** The directory exists and is empty. Working notes published early are how signals enter the system before they are ready to be narratives.

**Finish the repository settings.** Four dashboard changes complete phase 1 of [public repository evolution](public-repository-evolution.md) — description, homepage, topics, wiki. Phases 2–4 of that proposal are parked; the reasoning is at the top of the document.

## Later

**Agent-readable exports.** The content collections are structured, schema-enforced and cross-referenced — most of the work required to make the knowledge base directly consumable by an agent is already done. What is missing is a defined export surface and a decision about what should be exposed.

**Principles beyond the initial four.** The current set was extracted from published positions. More will earn a place as decisions accumulate; the bar is in [`principles/README.md`](../principles/README.md).

## Not doing

**Duplicating content into `docs/`.** The canonical text stays in `website/src/content/`. Documentation that restates content drifts from it, and then the reader has to know which copy is authoritative.

**Publishing on a schedule.** The [compounding principle](../principles/compounding.md) makes cadence the wrong target — a volume commitment forces output ahead of position, which is the failure mode the whole method exists to avoid.

---

*This file records the position inferred from the repository. Where it does not match your actual intent, the file is wrong — edit it, and note anything that moved in the [changelog](../changelog/).*
