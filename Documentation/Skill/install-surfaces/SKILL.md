> Specialized working copy (repo): original to the Aphrodite site (born from
> the STORE-INSTALL batch, 2026-10: the Hermes plugin-catalog install method
> added to every install surface). No DeepSeek counterpart. This is the
> specialized truth for this site's sessions.
---
name: install-surfaces
description: THE laws for every change to the Aph install story - the five surfaces that must move together (the /setup page modules, the /plugin page install block, docs/install README + the platform guides, the generated copies under Source/Content/Docs/install synced by the Docs pipeline), the truth law (every install step comes from a fetched source, never invented; the quote goes in the report), and the arbiter order. Load before touching any install flow on the site or in the docs.
whenToUse: Mandatory before adding, removing, renaming, or reordering any install method on any install surface (the setup page's option modules, the plugin page's install block, docs/install/*). If you are about to change an install command, an install option count, or an install-surface link, STOP and read this manual first.
---

# INSTALL SURFACES - the site's install-story laws

## 1. The five surfaces move together

The install story lives on five surfaces; a method change lands on ALL of
them in one run, or the story contradicts itself:

1. `Source/pages/setup.astro` - the option modules (`#A // HERMES PLUGIN`,
   `#B // CARGO`, `#C // FROM SOURCE`, `#D // HERMES STORE`), each with the
   tape stamp, the stream pane of exact commands, the outcome line, and the
   SRC link.
2. `Source/pages/plugin.astro` - the Download Flow section's command block
   (stays; new methods go around it) and the filesystem map (stays).
3. `docs/install/README.md` - the "ways to install" count and its table.
4. `docs/install/macos-linux.md` and `docs/install/windows.md` - the
   platform guides.
5. The generated copies under `Source/Content/Docs/install/` - never edited
   by hand; `pnpm run Docs` regenerates them from the source pages.

## 2. The truth law

Every install step comes from a fetched source - the Hermes plugin guide
(`https://hermes-agent.nousresearch.com/docs/user-guide/features/plugins/`,
registry entry `ExternalLinks.HermesGuide`), the live catalog document
(`.../docs/api/plugin.json`), or this repo's own docs. Never invent a
command or a flag; the fetched quote goes in the report. The catalog entry
for Aphrodite is `hermes plugins install aphrodite` (community tier, pinned
SHA, requires_hermes >=0.20.2, requires APHRODITE_API_KEY).

## 3. The invariants that survive every change

- `register()` never downloads - the explicit setup step
  (`bash download.sh` / `pwsh ./download.ps1` / `aphrodite setup`) is
  always shown as its own step, whatever the install method.
- Catalog (store) installs: never `aphrodite setup` against the
  catalog-managed `~/.hermes/plugins/aphrodite` directory - `download.sh`
  from the installed directory instead (the IMPORTANT block in
  docs/install/README.md carries it; keep it adjacent to any store copy).
- The filesystem map (`~/.hermes/` layout) is shared by all methods and
  stays the single map.

## 4. The arbiter order

After the source edits: `pnpm run Docs` (regenerates the copies), then
`pnpm prepublishOnly` (63 pages), then `pnpm run Drift` (the count is
dynamic; all PASS), then grep the BUILT HTML under `Target/` - every touched
surface must carry the new method's commands and the guide link. Read
before editing each file; the prose lanes may change copy under you.
