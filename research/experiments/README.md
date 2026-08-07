# Experiments

Build logs and findings. The published description of each experiment lives in [`website/src/content/experiments/`](../../website/src/content/experiments/); this is the working record behind it — what was actually tried, what broke, and what it returned.

## Why the two are separate

The published entry says what an experiment is and what it is for. It is written for someone deciding whether the idea is useful to them. The log says what happened, including the parts that did not work, and is written for whoever picks the work up next.

Keeping them apart means the log can be honest. An experiment that failed still produces a finding, and a finding is the thing that compounds.

## Current experiments

| Experiment | Status | Published entry |
| --- | --- | --- |
| Hidden Hours Diagnostic | active | [entry](../../website/src/content/experiments/hidden-hours-diagnostic.mdx) |
| Case Study Agent | active | [entry](../../website/src/content/experiments/case-study-agent.mdx) |
| Editorial Brief Generator | active | [entry](../../website/src/content/experiments/editorial-brief-generator.mdx) |
| Webinar and Event Intelligence | active | [entry](../../website/src/content/experiments/event-intelligence.mdx) |
| AI Action Workbook | complete | [entry](../../website/src/content/experiments/ai-action-workbook.mdx) |
| Editorial Intelligence OS | draft | [entry](../../website/src/content/experiments/editorial-intelligence-os.mdx) |

None of the four active experiments currently has a published finding. Closing that gap is a [Next](../../docs/roadmap/current.md) item — an experiment that produces no recorded finding has not completed a cycle.

## Format

One directory per experiment, named to match its slug in the content collection:

```
research/experiments/
└── hidden-hours-diagnostic/
    ├── README.md      What was tested, what was found
    └── log.md         Dated entries as the work happened
```

`README.md` opens with the finding, not the method — whoever reads it later wants the conclusion first:

```markdown
# Hidden Hours Diagnostic

**Status:** active
**Question:** Can a narrative be delivered as an instrument that returns evidence?
**Finding so far:** ...

## What was tried
## What worked
## What did not
## What it returned to the system
```

That last heading is the one that matters. An experiment closes the loop only when something goes back into the signal layer — a captured signal, a revised framework, a position that changed. If the section is empty, the experiment is still open regardless of whether the build is finished.

## Adding one

Create the directory, match the slug, and link it from the table above. Keep the status in step with the `status` field on the published entry — `active`, `complete`, `archived` or `draft`. Where the two disagree, the published entry is what people see, so fix it first.
