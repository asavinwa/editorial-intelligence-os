# Photos

Drop photographs here. Anything in this folder is served straight from the site
root, so a file uploaded as `garden-desk.jpg` is immediately live at
`/Images/photos/garden-desk.jpg` — no build wiring, no import, no code change
needed to make the file exist.

## How to add one from a phone

This is the route to use. It is the only one that works away from a laptop.

1. On github.com, open this folder on the branch you are working on.
2. **Add file → Upload files.**
3. Pick the photo. Commit to a branch and open a pull request.
4. Tell Claude Code or Codex the filename and where it should appear. Wiring it
   into a page, writing the alt text and sizing it are the assistant's job.

To put the photo inside a piece of writing, that wiring is
`src/components/content/Figure.astro` — point its `src` at the path above. Note
that nothing validates the path at build time, so a typo ships as a broken
image rather than a failed build. Look at the page before publishing.

Uploading through GitHub is deliberate. Attaching a photo to a Claude Code or
Codex session on the web does **not** upload it — the assistant receives a
rendering it can look at and describe, never the file's bytes, so there is
nothing for it to commit. The upload has to happen through something that
actually transfers the file. GitHub's own upload form does; a chat attachment
does not.

Working at a laptop instead, the Claude Code CLI can read a real file from disk,
so handing it a path works there.

## Naming

Lowercase, hyphenated, descriptive of what is in the shot:
`garden-desk.jpg`, not `IMG_4821.jpg`. Date-prefix
(`2026-08-08-garden-desk.jpg`) only when the date is part of the point.

## Before it ships

Phone photos are large — several megabytes each — and this folder is served
verbatim, with no optimisation between the file and the reader. Resize anything
oversized before it reaches a published page.

Phone photos also carry EXIF orientation, so a shot that looks upright in the
camera roll can render on its side. Check both.

Photographs are binary, and git keeps every version of them forever. A handful
here is fine. If photos become routine, move them to a blob store rather than
letting the repository carry the weight.
