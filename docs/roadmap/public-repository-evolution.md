# Public repository evolution

**Status:** phase 1 complete · phases 2–4 parked pending decision
**Date:** 2026-08-07
**Horizon:** phase 1 done; remainder undecided
**Depends on:** the August 2026 restructure ([changelog](../changelog/2026-08.md))

---

## Decision — is the rest of this worth doing?

**Short answer: probably not as written. Phase 1 is done. Phases 2–4 are parked until there is a reason to take them off the shelf.**

### What changed

This document was written against an assumption that the repository should reward exploration — that a visitor would arrive, navigate the methodology, and read their way into the discipline. That assumption drove the size of it, and particularly phase 3.

The assumption is wrong for this audience. The people this work is aimed at — practitioners and leaders in marketing, communications and product — do not browse repositories. They will never open `docs/implementation/`. Building depth for a reader who does not exist is the most expensive mistake available here.

### The revised objective

> The repository should demonstrate at a glance that Editorial Intelligence is a technical exercise — a real system, built and maintained — without requiring anyone to dig into it.

That is a much smaller job, and a different one. It is satisfied by signals, not by documentation:

| Signal | What it says | Status |
| --- | --- | --- |
| Passing build badge | This is engineered and continuously verified | Done |
| Licence | This is intended for use, not just display | Done |
| Description and topics | This is a methodology, not a site build | Needs dashboard change |
| Coherent three-layer structure | Someone thought about this | Done in the restructure |
| Recent, meaningful commits | This is alive | Ongoing |
| Dated changelog and roadmap | This evolves and the evolution is recorded | Done |

All but one of those is already in place. The remaining item is four settings changes.

### What this means for each phase

| Phase | Verdict |
| --- | --- |
| **1 — settings and hygiene** | **Done.** Licence, CI and the untracking are committed; four dashboard settings remain. |
| **2 — README and navigation** | **Worth a single sitting, later.** The first screen is the only part most visitors will read. Do sections 1–5 of the outline and stop. The rest of the outline is for a reader who is not coming. |
| **3 — new documentation areas** | **Parked.** `docs/standards/` should be dropped outright — it is documentation governing documentation, and the repository is not large enough to need it. `docs/implementation/` is the one part with independent value, but that value is to clients and practitioners, and it would serve them better as site content or a delivered artefact than as a directory here. |
| **4 — website integration** | **Reduced to one item.** A footer link from the site to the repository. The `/changelog` page, the "how this was built" links and the experiment-log pairing all assume visitors will follow the link and explore, which is the assumption being retired. |

### The trade being made

Depth is being given up in exchange for not spending weeks on it. That is the right trade at current evidence: nobody is asking for the depth, and the effort has a better home.

The thing genuinely worth doing instead is unchanged and sits in [now, next and later](current.md): four active experiments have produced no published findings. One honest experiment write-up — including what did not work — does more for the credibility of the discipline than the whole of phase 3, because it is evidence rather than structure.

### What would un-park this

Revisit if any of these become true:

- Someone asks for the methodology in a form they can implement themselves
- A client or employer wants to adopt the frameworks internally and needs implementation guidance
- The repository starts attracting traffic or contributors on its own
- The method is taught — a course or workshop makes implementation guides a deliverable rather than an aspiration

Until one of those happens, the sections below are a specification held in reserve, not a plan. They are kept because the thinking is done and re-deriving it later would be wasteful — which is the whole argument of the [compounding principle](../principles/compounding.md) applied to this document itself.

---

## Purpose

Transform the Editorial Intelligence OS repository into both:

- the source repository for the Editorial Intelligence website
- the canonical public home of the Editorial Intelligence methodology

The repository should demonstrate that Editorial Intelligence is an evolving discipline supported by practical frameworks, research and implementation, rather than simply a website.

This is not a documentation exercise. The [philosophy](../philosophy.md) argues that knowledge which is not structured cannot be found, reused or handed to an agent, and that documentation is increasingly the work rather than overhead on it. A repository that presents Editorial Intelligence as a website with some notes attached contradicts the argument it exists to make. A repository that presents it as a maintained, versioned, navigable body of method is the argument, demonstrated.

## Objectives

1. Make the repository legible to a visitor who will never read the codebase.
2. Give the methodology a public home that is versioned, dated and attributable.
3. Keep website development practical — no structure that makes shipping content harder.
4. Avoid duplication between repository and website, with a rule that decides every future case.

---

## Where the repository stands today

The August 2026 restructure did the structural work: the site moved to `website/`, and `docs/` and `research/` were established. What remains is almost entirely presentation and GitHub surface.

**What is already in place**

- Three-layer separation — `website/`, `docs/`, `research/` — with a stated non-duplication rule
- Four documented principles, a seventeen-framework index, a roadmap and a changelog
- Schema-enforced content collections with a controlled tag vocabulary and declared cross-references
- A root `README.md` covering structure, conventions and local development

**What is missing or working against the goal**

| Gap | Effect | Severity |
| --- | --- | --- |
| Repository description reads "The EIOS website" | The first sentence a visitor sees frames the project as a web build. It is also the text that appears in GitHub search results and social cards. | High |
| Homepage field points at `editorial-intelligence-os.vercel.app` | Sends visitors to the deployment preview rather than `www.editorialintelligence.co`. | High |
| No licence | The repository is public with no `LICENSE`, so default copyright applies — all rights reserved. A methodology positioned as portable and reusable that carries no usage terms is a contradiction a careful reader will notice. | High |
| `.claude/settings.local.json` is tracked | A public file containing local machine paths and internal document filenames from a previous employer's storage. Unrelated to positioning, but it is public now. | High |
| No topics | Nothing connects the repository to how people search — `editorial-intelligence`, `knowledge-systems`, `content-strategy`, `ai-workflows`. | Medium |
| No releases or tags | Nothing marks the method's evolution. A visitor cannot tell whether this is active or abandoned without reading commits. | Medium |
| README opens with structure | Correct for a contributor, wrong for the primary audience. A visitor arriving from a talk or article meets a directory table before an argument. | Medium |
| Wiki enabled and empty | A second, competing documentation surface that will always be emptier than `docs/`. | Low |
| No implementation guides | The brief names them as a documentation area, and they are the missing rung between a framework and its use. | Medium |

The three high-severity items are configuration and one deletion. They are the cheapest changes in this document and the most visible.

---

## Visitor experience

A first-time visitor should understand within a few minutes what Editorial Intelligence is, why it exists, who it is for, how the methodology is organised, and where to begin.

There are four arrival patterns, and they want different things:

| Arrival | Wants | Lands on | Should reach |
| --- | --- | --- | --- |
| **Curious** — from a talk, article or link | To know what this is and whether it is serious | README | Website, within one click |
| **Practitioner** — has the problem, wants the method | A framework they can apply on Monday | README → start here | Framework index, then an implementation guide |
| **Evaluator** — considering working with you | Evidence of depth and continued practice | README → roadmap, changelog | Experiments and research |
| **Developer** — running or extending the site | To build it | README → structure | `website/`, conventions |

The failure mode is optimising for the fourth. That reader is the most fluent in what a repository is, and by far the smallest group here.

**Design consequence:** the README must answer *what and why* before *where*, and each of the four audiences must find their route within the first screen. The Start here section is the fork.

**Rule:** if a visitor has to open a second file to know whether Editorial Intelligence is relevant to them, the README has failed.

---

## README redesign

The README carries almost all of the visitor experience. Proposed outline, in order — the sequence is the design, since a README is read top-down and most readers stop early.

| # | Section | Contains | Length |
| --- | --- | --- | --- |
| 1 | Title and one-line definition | What Editorial Intelligence is, in a sentence a stranger can repeat | 1 line |
| 2 | Overview | The problem — insight that does not accumulate — and what this repository holds | 2 short paragraphs |
| 3 | What Editorial Intelligence is | The two words, the loop, why it is a system and not a content practice | ~150 words |
| 4 | Why this repository exists | The methodology's public home, not just site source; the transparency argument | 1 paragraph |
| 5 | **Start here** | Four labelled routes matching the arrival patterns above | A table |
| 6 | Repository structure | Three layers, one line each, links to each README | Compact table |
| 7 | Key frameworks | Five or six entry-point frameworks with a line each — not all seventeen | A table |
| 8 | The website | What lives there versus here, and the non-duplication rule | 2 lines |
| 9 | Roadmap | Now / next, three bullets, link to the roadmap | 3 bullets |
| 10 | Latest developments | Newest changelog entries, link to the changelog | 3 bullets |
| 11 | Working locally | Install, dev, build | Code block |
| 12 | Conventions and licence | Tag vocabulary, status gating, contribution stance, licence | Short |

**Notes on the design**

- **Sections 1–5 must fit one screen.** That is the whole budget for the curious visitor. Everything after section 6 exists for readers who have already decided to stay.
- **Development instructions move to the bottom.** They are currently high in the file. No visitor needs them; every developer will scroll.
- **Sections 9 and 10 are the liveness signal**, and they are the only sections that go stale. Update them when the changelog changes — a "latest developments" block six months old is worse than none, because it dates the project precisely.
- **Link out, do not restate.** Section 7 links to the framework MDX; section 3 links to `docs/philosophy.md`. The README is a hub.
- **No badges** except a build badge if CI is added. Badge rows read as web-application furniture and work against the intended feel.

---

## Documentation architecture

### Should documentation live in this repository?

**Yes — one repository.** The alternative is a separate `editorial-intelligence-method` repository holding the docs, with the site repository kept clean.

The case for splitting: contributors to the method never see build tooling, and each repository has one job.

The case against, which is stronger here: the method and its implementation are the same body of work by the same person, and the repository's argument is that they are inseparable. Two repositories create a synchronisation problem — the framework index would live apart from the frameworks — and halve the visible activity in each, which undercuts the liveness the project is trying to demonstrate. A split is the right move when contributor populations diverge. That is not the situation.

**Revisit if:** external contributors to the method appear, or the site grows tooling that dominates the commit history.

### Proposed structure

Additions to the current tree are marked **new**.

```
editorial-intelligence-os/
├── README.md
├── LICENSE                      new — dual licence, see GitHub positioning
├── CONTRIBUTING.md              new — how to engage; sets expectations
├── .github/                     new
│   ├── ISSUE_TEMPLATE/
│   │   ├── signal.md            an observation for the signal layer
│   │   ├── framework-gap.md     a gap or error in the method
│   │   └── site.md              a bug or request for the website
│   └── pull_request_template.md
│
├── docs/
│   ├── start-here.md
│   ├── philosophy.md
│   ├── principles/              4 principles + index
│   ├── frameworks/              index of the 17; grouped by purpose
│   ├── implementation/          new — how to run the method
│   │   ├── README.md
│   │   ├── first-90-days.md     new — standing the system up
│   │   ├── running-the-loop.md  new — the cycle as an operating rhythm
│   │   ├── signal-capture.md    new — getting signals in reliably
│   │   └── working-with-agents.md  new — what agents need from the layer
│   ├── standards/               new — documentation standards
│   │   ├── README.md
│   │   ├── writing.md           voice, sentence case, structure
│   │   └── content-model.md     collections, tags, status, relationships
│   ├── roadmap/
│   │   ├── README.md
│   │   ├── current.md
│   │   ├── open-questions.md
│   │   └── public-repository-evolution.md   this document
│   └── changelog/
│       ├── README.md
│       └── YYYY-MM.md
│
├── research/
│   ├── public-notes/
│   └── experiments/
│
├── website/                     unchanged
└── vercel.json
```

### The two genuinely new areas

**`docs/implementation/`** is the largest gap in the current documentation and the one a practitioner feels first. Seventeen frameworks describe *what* to think; nothing describes *how to start on Monday*. Implementation guides are sequenced, opinionated and reference several frameworks at once — which is exactly what a framework page cannot do without losing its own shape. This is also the layer most likely to convert a reader into a user of the method.

**`docs/standards/`** is where the brief's "documentation standards" requirement lands. It also does work the repository already needs: the content model — collections, the controlled tag vocabulary, `status` gating, the `related*` arrays — is currently explained across the root README and `config.ts` comments. One page should own it.

### Documentation navigation

Three fixed rules, so navigation does not have to be re-decided per file:

1. **Every directory has a `README.md`** that indexes its contents with a line on each. GitHub renders it on directory view, so this is the only navigation aid that appears automatically.
2. **Every document opens with orientation** — a status line and one sentence on what the document is for, before any content.
3. **Every document ends with where to go next.** Terminal pages are where visitors leave.

The resulting path — README → start here → philosophy or frameworks → implementation → research — should be traversable in either direction, and each step should be reachable within two clicks of the README.

---

## Website integration

**The website is the polished public experience. The repository is the working evidence behind it.** Same body of work, different jobs: the site is written to persuade, the repository is written to be verified, reused and built on.

### The non-duplication rule

> Content that is **read** lives in `website/src/content/`. Content that **explains, indexes or records** lives in `docs/`.

Applied:

| Kind | Home | Why |
| --- | --- | --- |
| Frameworks, narratives, articles, experiment write-ups | `website/src/content/` | Written to be read; benefit from the site's design and cross-linking |
| Philosophy, principles, standards | `docs/` | Explain the reasoning; the audience is someone building on the method |
| Framework index and grouping | `docs/` | Navigation, not content |
| Implementation guides | `docs/`, selectively surfaced | Long, revised often, read while working |
| Roadmap, changelog, open questions | `docs/` | Record of evolution; belongs where it can be versioned alongside the work |
| Experiment findings and logs | `research/` | Includes what failed — which the site should not carry, and which is the most useful part to a practitioner |

Where the same subject appears in both, one is canonical and the other links to it. Never both.

### Making the link visible in both directions

The integration currently fails in one direction: the site does not acknowledge the repository exists. Four changes fix that.

1. **Site → repository.** A persistent footer link, plus a "how this was built" link on `/editorial-intelligence-os` and `/methods`. This is where the transparency claim becomes checkable.
2. **Repository → site.** Fix the GitHub homepage field to `https://www.editorialintelligence.co`. Every framework link in `docs/` should point at the published page rather than the raw MDX where a published page exists — a visitor reading raw MDX with frontmatter is having a worse experience than the one you built for them.
3. **A `/changelog` page on the site**, generated from `docs/changelog/`. Single source, two surfaces, no duplication — and it makes the site visibly alive.
4. **The experiments section is the natural seam.** Each site entry links to its `research/experiments/` log. The polished description says what it is; the log says what actually happened. That pairing is the whole thesis in miniature, and it is nearly free to build.

**Rule of thumb:** a visitor should never feel they have found the same page twice, and should always feel the other surface holds something this one does not.

---

## GitHub positioning

The repository is already public. These changes make it read as a maintained knowledge system rather than a personal site build.

### Repository settings

| Setting | Now | Change to |
| --- | --- | --- |
| Description | "The EIOS website" | "The Editorial Intelligence methodology — frameworks, research and the operating system behind editorialintelligence.co" |
| Homepage | Vercel preview URL | `https://www.editorialintelligence.co` |
| Topics | none | `editorial-intelligence`, `knowledge-systems`, `content-strategy`, `ai-workflows`, `methodology`, `documentation`, `astro` |
| Wiki | enabled, empty | Disable — `docs/` is the documentation surface |
| Issues | enabled, unused | Keep, with templates (below) |
| Discussions | disabled | Leave disabled until there is an audience to host |

### Licensing

The repository is public with no licence, which means all rights reserved by default. Anyone who wants to use a framework has no permission to, and a methodology arguing for portability that cannot legally be ported is a visible inconsistency.

**Recommended:** dual licence, stated in `LICENSE` and summarised in the README.

- **Documentation, frameworks and content** — CC BY 4.0. Free to use and adapt with attribution. Attribution is what makes the method compound in public.
- **Site code** — MIT.

If commercial use of the frameworks should be restricted, CC BY-NC 4.0 is the alternative. It is a real trade-off: NC protects consulting work but discourages exactly the organisational adoption that builds a discipline's standing. **Recommended: BY, not BY-NC** — the frameworks are the shopfront; the judgement in applying them is the service, and that was never copyable anyway.

### Releases and versioning

Tag the method, not the site. Releases are the clearest available signal that a body of work is maintained, and GitHub surfaces them prominently.

- **Scheme:** `method-v0.x` alongside the existing version 0.1 of the OS experiment
- **Cadence:** when the method changes — a framework added, a position revised — not on a schedule
- **Notes:** the corresponding changelog entry
- **First release:** `method-v0.1` covering the current seventeen frameworks and four principles, so there is a baseline to move from

### Milestones and project roadmap

Use **milestones** for phases of this document — one per phase below — so progress is visible without a project board. Add a **GitHub Project** only if issue volume justifies it; an empty board is a worse signal than no board.

`docs/roadmap/` stays the authoritative roadmap. GitHub milestones track execution; the roadmap holds reasoning. Do not maintain the same list twice.

### Issues

Issues are the public front door of the signal layer, which makes them a genuine fit rather than borrowed convention. Three templates:

- **Signal** — an observation that might matter to the method
- **Framework gap** — something missing, unclear or wrong
- **Site** — a bug or request for the website

Label as `signal`, `method`, `site`, `research`, `question`. Keep the count low and close decisively — a repository with sixty stale issues reads as abandoned regardless of commit activity.

### Documentation standards

`docs/standards/writing.md` should fix, at minimum:

- **Sentence case for all headings**, throughout the repository and site
- **Status lines** at the head of every document — status, date, purpose
- **Sources cited** as links to the canonical file, never restated
- **British English**, matching the existing content
- **Position over hedge** — say what is thought and what would change it

---

## Success criteria

| # | Criterion | Test |
| --- | --- | --- |
| 1 | The repository immediately communicates the purpose of Editorial Intelligence | A reader who has never heard the term can define it after one screen of README |
| 2 | Visitors can navigate the methodology without understanding the codebase | Every documentation route works without opening `website/`; no route dead-ends |
| 3 | The repository reinforces the discipline's credibility | Dated changelog, tagged releases, a real roadmap, honest experiment logs — including failures |
| 4 | Website development and public documentation coexist cleanly | Shipping content still takes one commit; no file needs updating in two places |
| 5 | The repository is the authoritative public reference | Every framework, principle and position resolves to exactly one canonical location |

Criterion 4 is the constraint on the rest. Any proposal here that makes routine publishing slower has failed, however well it scores on the others.

---

## Phased migration plan

Four phases, each independently shippable, none touching `website/src/`. **The website is not modified until phase 4, and never structurally** — so no phase can disrupt the live site.

### Phase 1 — settings and hygiene

*Effort: under an hour. Highest visibility per unit of work in this document.*

1. Update the repository description
2. Point the homepage field at `www.editorialintelligence.co`
3. Add topics
4. Disable the wiki
5. Add `LICENSE` (dual, per above)
6. Remove `.claude/settings.local.json` from tracking and add `.claude/settings.local.json` to `.gitignore`

On item 6: deleting the file removes it from the current tree but not from history. Given the contents are local paths and internal document filenames rather than credentials, removing it going forward is proportionate; a history rewrite is not warranted and would break every existing clone and commit link.

**Done when:** the repository's GitHub header describes the methodology and links to the live site.

### Phase 2 — README and navigation

*Effort: half a day. No structural change.*

1. Rewrite the README to the outline above
2. Add `CONTRIBUTING.md` — how to engage, and that the method is authored rather than crowd-edited
3. Add the "where to go next" footer to each existing `docs/` page
4. Repoint `docs/` framework links at published pages where they exist

**Done when:** a first-time visitor can reach any part of the methodology in two clicks and never sees raw MDX for a page that is published.

### Phase 3 — new documentation areas

*Effort: the substantial phase. Sequence by value.*

1. `docs/standards/` — `writing.md` and `content-model.md`. First, because it governs everything written after it.
2. `docs/implementation/README.md` plus `first-90-days.md`. The single highest-value new document for a practitioner.
3. `.github/` issue and PR templates
4. Remaining implementation guides, one at a time, as the underlying practice is actually run

Phase 3 is incremental by design. Each guide ships alone. There is no point at which the documentation is half-migrated and broken.

### Phase 4 — website integration

*Effort: a day. The only phase touching the site.*

1. Footer link to the repository
2. "How this was built" links on `/editorial-intelligence-os` and `/methods`
3. `/changelog` page generated from `docs/changelog/`
4. Experiment pages link to their `research/experiments/` logs
5. Tag `method-v0.1`

**Done when:** both surfaces acknowledge each other and the changelog is visible from the site.

### Sequencing note

Phases 1 and 2 are worth doing immediately and together — they are cheap, fully reversible, and they are what an unprepared visitor actually encounters. Phase 3 can run for months without harm. Phase 4 should wait until phases 1–3 have landed, since it points visitors at the repository and there is no benefit in doing that before the repository is ready to receive them.

---

## Open decisions

Four choices this document does not make. Each belongs in [open questions](open-questions.md) if it is not resolved before phase 1.

1. **Licence — BY or BY-NC?** Recommended BY. This decision is hard to reverse in practice, since a permissive grant cannot be withdrawn from work already published under it.
2. **Do implementation guides appear on the site, or repository-only?** Recommended: repository-first, promoting individual guides to the site once stable. They will be revised often, and the site is the polished surface.
3. **Are issues genuinely open to the public, or a personal tracker in the open?** Recommended: open, with `CONTRIBUTING.md` stating plainly that the method is authored, not crowd-edited. Ambiguity here produces contributions that have to be declined.
4. **Does the repository get a stated audience?** Currently implicit. Naming it — practitioners in marketing, communications and product who own a knowledge problem — would sharpen the README, and this is the one open question that changes how sections 1–5 are written.

---

**Next:** [roadmap index](README.md) · [now, next and later](current.md) · [open questions](open-questions.md)
