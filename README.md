# Aphrodite Site

The documentation and design surface for
[Aphrodite](https://GitHub.Com/PlayForm/Aphrodite) - a CCR
(Compress-Cache-Retrieve) compression proxy and absorptive preview pipeline for
Hermes Agent.

The site does not copy facts out of the monorepo. It **generates** them.
`Module/Aphrodite` is a git submodule pinned to the release line - the same tree
`Aphrodite-Release` tracks and `PlayForm/Aphrodite` publishes - and
`pnpm run Prepare` resolves that tree, checks it out when it is missing, and
writes `Source/Generated/` from the manifest in `Scripts/Prepare/Manifest.ts`.
Every figure the pages render is either generated there or read from the module
at build time.

**THE INVARIANT.** A fact that needs changing is changed in
`PlayForm/Aphrodite`, pushed, and the `Module/Aphrodite` pin advanced. It is
never edited in this repository. There is no second copy to keep in step,
because there is no second copy: the site no longer copies facts from the
monorepo, it generates them.

---

## The upstream chain

A fact reaches the site in eight steps. They are the whole procedure - there is
no shortcut, and editing a generated file is not one of them.

```
1. EDIT     ~/Developer/Application/PlayForm/Aphrodite          (Development)
2. PORT     ~/Developer/Application/PlayForm/Aphrodite-Release  (Current)
3. COMMIT   in Aphrodite-Release
4. PUSH     Current (and Development)
5. VERIFY   git ls-remote Source Current → remote tip is your commit
6. PULL     Site/: git -C Module/Aphrodite fetch && checkout <sha>
7. STAGE    git add Module/Aphrodite
8. REBUILD  pnpm Prepare && pnpm prepublishOnly
```

- **The module is read-only.** The generator reads `Module/Aphrodite`; it never
  writes, commits or pushes there. A change made inside the submodule is
  discarded by the next pin advance, and it is invisible to the repository the
  site is supposed to be describing.
- **The module is nested.** `Module/Aphrodite` itself carries three submodules:
  `plugins/aphrodite` (Aphrodite-Hermes), `vendor/headroom` and `vendor/rtk`. A
  shallow `--init` leaves `plugins/aphrodite/` empty, so `plugin.yaml` is absent
  and every tool and hook row generates empty - silently. Prepare therefore runs
  `git submodule update --init --recursive`, and it refuses to generate unless
  `plugins/aphrodite/plugin.yaml` exists. The pins move with the parent pin, so
  the recursive update re-runs on every build.

---

## The other direction: site to repository

The loop runs both ways. When a passage on the site is better than its
counterpart in the repository - a richer explanation, a page the repository
lacks, a clearer example, a corrected figure - that passage is pushed **up**
into `PlayForm/Aphrodite`. The site's improvement lands in the repository; it is
never discarded to make convergence easier.

The chain is the same eight steps with a different starting point: the change is
authored from the site passage, applied to `docs/` in `Development`, ported to
`Aphrodite-Release`, pushed, `git ls-remote`-verified, and the
`Module/Aphrodite` pin advanced. Then the site regenerates the page from the
module instead of hand-carrying it.

- **Union, never intersection.** Where the two ends differ in depth, the union
  wins, and the union is written by hand where it has to be. Convergence means
  the best content at both ends, not the smallest set both ends already share.
- **Nothing is truncated in either direction.** No page is retired because the
  module lacks it, no rich doc is overwritten by a thinner generated one, and no
  section is dropped to make a diff smaller.
- **A site-only page is declared, not deleted.** A passage that exists only on
  the site is either pushed up or marked site-only with the reason - never
  silently removed by a regeneration.
- **Regeneration is the test.** After the pin advance,
  `DOCS_SOURCE="$PWD/Module/Aphrodite/docs" pnpm run Docs` must reproduce the
  site's docs tree from the module alone. A diff that survives regeneration is
  content that still lives only on the site, and it belongs upstream.
- **Both SHAs are recorded.** A loop that is not written down with its commits
  is a claim, not a proof.

### Worked references

- **Down** - the repository's plugin badge read `v2.3.1` while
  `plugins/aphrodite/plugin.yaml` in the same tree said `2.3.2`. Fixed in
  `Development` (`72a8702b`), ported to `Current` (`e6800070`), pin advanced;
  `Source/Generated/Primary/README.md` now carries `v2.3.2` from the module.
- **Up** - two passages that existed only on the site's `/hooks/` page (why the
  skip gate keeps retrieval cheap, and why the reset seam exists) were added to
  `docs/plugin/hooks.md` in `Development` (`be7eb539`) and `Current`
  (`c699ea76`); the same round carried the site's enumerated run-ons back into
  `docs/` (`01f91a2c` in `Development`, `661dfb8b` in `Current`). The pin
  advanced to `661dfb8b`, and the regenerated page renders both passages from
  the module.

---

## Build

The site is Astro 7 with Tailwind, PostCSS, and the `@playform/{build,compress,inline}`
integrations. It builds static HTML into `Target/` and deploys to Cloudflare
Pages from this repository.

- **Node floor** - Astro 7 refuses an interpreter below its `engines` floor with
  `Node.js v<version> is not supported by Astro`; this site is verified on Node
  `22.23.4` and newer. A build without that floor on `PATH` fails before any
  page is rendered, so a local run carries it explicitly:
  `PATH=/Volumes/CORSAIR/Tool/NVM/versions/node/v26.5.1/bin:$PATH pnpm run prepublishOnly`.
- **Build** - `pnpm run prepublishOnly` runs `node Scripts/Prepare.ts` and then
  `astro build` into `Target/`. A generation failure stops the build before
  Astro starts, so a deploy can never publish a site generated from a half
  checkout.
- **Dev server** - `pnpm run Run` serves on `127.0.0.1:9999`.
- **Origin** - `astro.config.ts` sets `site` to the site's canonical origin so
  the sitemap and the absolute social URLs resolve. The origin is also the
  repository's `homepage` in `package.json`; change both together.

---

## The content pipeline

Four generators, in this order. The first is the one that makes the site a
generated surface; the other three shape what it renders.

- **Prepare** - `pnpm run Prepare` (and the first half of every build). It
  resolves `Module/Aphrodite`, checks the submodule out when the trees are
  missing, fails with the remedy rather than a stack trace when they are
  unreachable, and emits into `Source/Generated/`. It never writes into the
  module and never deletes a destination.
- **Docs** - `pnpm run Docs` regenerates `Source/Content/Docs/` from the docs
  tree: every markdown file becomes one `/docs/<slug>/` page, relative links
  between docs files are rewritten to site routes, and repository deep-links are
  recomposed through `Source/Library/Links.ts` at the canonical branch. Without
  the monorepo (a standalone deploy checkout) the committed generated content is
  used as-is.
- **Diagrams** - `pnpm run Diagrams` extracts every `mermaid` fence, renders it
  to SVG, and writes the placement manifest the pages read.
- **Redirects** - `pnpm run Redirects` regenerates `Public/_redirects` from the
  live route map; the same generator runs inside every build.

---

## The extraction manifest

`Scripts/Prepare/Manifest.ts` is the table that decides what the site generates:
one row per source path inside `Module/Aphrodite`, its destination in the site,
and the transform that turns one into the other. It is data, not code - the next
card extends the table, and the generator does nothing the table does not say.

- **A row** is `Source` (path in the module, `/**` for a tree), `Destination`
  (path in the site), `Transform` (`Facts`, `Copy`, `Doc`, `Mermaid`), the
  `Parser` and `Fact` key for a facts row, `Stage`, the `Consumer` that reads the
  destination, and what a missing source means (`Fail` or `Warn`).
- **Facts fan in.** Six primaries feed `Facts/Versions.json`; rows that share a
  `Destination` are merged, each under its own `Fact` key, and the destination is
  written once per run.
- **Every file names its source.** A JSON destination carries a `_Generated` key
  listing every `Module/Aphrodite/...` path it was built from; a text
  destination carries the same facts as a comment in its own syntax.
- **`Stage: "Hold"` rows are declared, verified, not written.** They exist so a
  tree that is reachable but not yet wired is visible in the table instead of
  silently absent. Flipping one to `"Emit"` is the extraction card's change.
- **The additive law.** A source file with no row is a gap in the manifest, not
  a licence to skip content - add the row. A page with no module counterpart
  survives generation: it is pushed up into `PlayForm/Aphrodite` so it gains a
  source, or the manifest declares it site-only with a reason. Generation is the
  union of the best content at both ends, never the intersection. Nothing is
  deleted: a file under `Source/Generated/` that a run did not write is reported
  as an orphan for a human to decide on.

`Source/Generated/GENERATED.md` restates all of this from the table itself, so
the area documents what it actually contains.

---

## Layout

- `Source/pages/` - one file per route, plus the `docs/[...slug]` collection
  route.
- `Source/Component/` - the `Zine*` and `Study*` component system; a page
  composes them rather than inventing markup.
- `Source/Generated/` - the generated area: `Facts/` (versions, the plugin
  manifest, the configuration keys), `Primary/` (verbatim primaries a page
  renders in full), `Module.json` (the pin), `GENERATED.md` (the area's law).
  Written by `Scripts/Prepare.ts`; never edited by hand.
- `Source/Library/` - the build-time layer: `Versions.ts` (live version
  stamps), `Links.ts` (the internal route and external URL registry),
  `Redirects.ts`, `CodeMentions.ts`, `DiagramPanels.ts`, `SourceLinks.ts`.
- `Source/Stylesheet/` - the token and base sheets; components read
  `var(--token)`, never a literal colour.
- `Scripts/` - the generators above: `Prepare.ts` with `Prepare/{Manifest,
  Emit,Transform}.ts`, `Docs/`, `Diagrams/`, `GenerateRedirects.mjs`.
- `Module/Aphrodite/` - the submodule the site generates from. Read-only.
- `Documentation/` - the project skills that describe how the site is built.

---

## Contributing

Issues and pull requests belong in the
[Aphrodite repository](https://GitHub.Com/PlayForm/Aphrodite) - a fact the site
renders is fixed there, not here. Contact:
[Community@PlayForm.Cloud](mailto:Community@PlayForm.Cloud).
