# Aphrodite Site

The documentation and design surface for
[Aphrodite](https://GitHub.Com/PlayForm/Aphrodite) - a CCR
(Compress-Cache-Retrieve) compression proxy and absorptive preview pipeline for
Hermes Agent.

Every figure on the site is derived, not typed: the version stamps read the
monorepo's own manifests at build time, the documentation pages are generated
from the repository's `docs/` tree, and a drift guard re-derives the headline
numbers before the site can ship a value the repository does not contain.

---

## Build

The site is Astro 7 with Tailwind, PostCSS, and the `@playform/{build,compress,inline}`
integrations. It builds static HTML into `Target/` and deploys to Cloudflare
Pages from this repository.

- **Node floor** - Astro 7 refuses an interpreter below its `engines` floor with
  `Node.js v<version> is not supported by Astro`; this site is verified on Node
  `22.23.4` and newer.
- **Build** - `pnpm run prepublishOnly` runs `astro build` into `Target/`.
- **Dev server** - `pnpm run Run` serves on `127.0.0.1:9999`.
- **Origin** - `astro.config.ts` sets `site` to the site's canonical origin so
  the sitemap and the absolute social URLs resolve. The origin is also the
  repository's `homepage` in `package.json`; change both together.

---

## The content pipeline

The site does not own its documentation. It renders the repository's `docs/`
tree and its own page components.

- **Documentation** - `pnpm run Docs` regenerates `Source/Content/Docs/` from
  `../docs`: every markdown file becomes one `/docs/<slug>/` page, relative
  links between docs files are rewritten to site routes, and repository
  deep-links are recomposed through `Source/Library/Links.ts` at the canonical
  branch. Without the monorepo (a standalone deploy checkout) the committed
  generated content is used as-is.
- **Diagrams** - `pnpm run Diagrams` extracts every `mermaid` fence, renders it
  to SVG, and writes the placement manifest the pages read.
- **Redirects** - `pnpm run Redirects` regenerates `Public/_redirects` from the
  live route map; the same generator runs inside every build.
- **Drift** - `pnpm run Drift` re-derives the version pairings, the threshold
  multipliers, the hook and tool counts, the headline figures, the quoted
  preview shapes, and the diagram freshness from the monorepo primaries. A
  figure the repository does not contain fails the guard.

---

## Layout

- `Source/pages/` - one file per route, plus the `docs/[...slug]` collection
  route.
- `Source/Component/` - the `Zine*` and `Study*` component system; a page
  composes them rather than inventing markup.
- `Source/Library/` - the build-time layer: `Versions.ts` (live version
  stamps), `Links.ts` (the internal route and external URL registry),
  `Redirects.ts`, `CodeMentions.ts`, `DiagramPanels.ts`, `SourceLinks.ts`.
- `Source/Stylesheet/` - the token and base sheets; components read
  `var(--token)`, never a literal colour.
- `Scripts/` - the generators above, plus `Drift-Guard.mjs`.
- `Documentation/` - the project skills that describe how the site is built.

---

## Contributing

Issues and pull requests belong in the
[Aphrodite repository](https://GitHub.Com/PlayForm/Aphrodite). Contact:
[Community@PlayForm.Cloud](mailto:Community@PlayForm.Cloud).
