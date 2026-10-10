> Specialized working copy (repo): original to the Aphrodite site (born from
> the NAV-CASE-STUDY batch, 2026-10: the CASE STUDY + SHOWCASE always-visible
> promotion). No DeepSeek counterpart. This is the specialized truth for this
> site's sessions.
---
name: navigation-registry
description: THE laws for the Aph site navigation - the single-registry rule (Library/Links.ts is the only source), the always-visible promotion rule, the no-duplicate law across the four nav surfaces (the lg bar, the xl bar, the mobile PRIMARY tree, the mobile MORE tree, the footer), and the fit rule for the lg row. Load before touching Links.ts or any nav markup.
whenToUse: Mandatory before adding, removing, moving, or reordering any entry in Source/Library/Links.ts, or before changing any nav markup in Source/Layout/Base.astro. If you are about to add the same route to two arrays, or to edit nav HTML directly instead of the registry, STOP and read this manual first.
---

# NAVIGATION REGISTRY - the site's nav laws

## 1. The single-registry rule

Every nav surface renders from `Source/Library/Links.ts` - never from inline
HTML:

- `PrimaryLinks` - the always-visible set: the desktop bar (lg and up) and
  the mobile tree's PRIMARY group.
- `MenuLinks` - the collapsed set: the mobile tree's MORE group only (no
  desktop tail - the essentials law, section 4).
- `AllLinks` - `[...PrimaryLinks, ...MenuLinks]`: the footer only.

`Base.astro` maps these arrays verbatim; nav markup edits happen ONLY when a
new surface kind is added. A route appears in EXACTLY ONE of PrimaryLinks or
MenuLinks - never both (the footer concatenates them, so a duplicate renders
twice). This bit for real: SHOWCASE was momentarily present in both arrays.

## 2. The always-visible promotion rule

The user's "X needs to be on the menu" for a specific route means X is
PROMOTED into `PrimaryLinks` (the desktop bar and the mobile PRIMARY group) - not merely kept somewhere. Promotion is a MOVE, in two edits:

1. Add `{ Href, Label }` to `PrimaryLinks` at the intended position
   (append, or the slot the ordering implies).
2. Remove the same entry from `MenuLinks`.

After both edits, the counts must reconcile: `PrimaryLinks.length +
MenuLinks.length` is unchanged, and no route exists in both. Verify on the
BUILT html (the compressor strips attribute quotes; parse `aria-label=...`
unquoted): each nav contains the promoted href exactly once.

## 3. The fit rule for the lg bar

The lg bar (1024px) must hold brand + all PrimaryLinks + the MENU toggle.
With six entries (OVERVIEW / SETUP / DOCS / BENCHMARKS / CASE STUDY /
SHOWCASE) at `text-base` mono tracking-widest it fits with room - roughly
brand ~150px + labels ~520px + gaps ~60px + toggle ~110px + padding ~64px,
well under 1024px. No label shortening was needed. If a future promotion
pushes the estimate near the viewport, the order of remedies is: reduce the
gap (`gap-3` to `gap-2`), then shorten a label - and state the decision in
the report.

## 4. THE ESSENTIALS LAW (user-mandated 2026-10: the desktop reduction)

The desktop bar shows ONLY THE ESSENTIALS at every width - lg AND xl. There
is no "full row": the xl bar does NOT get the MenuLinks tail. The essentials
are the PrimaryLinks set the user explicitly promoted (OVERVIEW / SETUP /
DOCS / BENCHMARKS / CASE STUDY / SHOWCASE); deeper tooling pages (CRATES,
VERSIONS, PLUGIN, HERMES, HOOKS, TOOLS, FLAVORS, WORKBENCH, CONFIG, EXAMPLES)
stay OUT of the desktop bar. Implementation: Base.astro has ONE desktop nav
(the PrimaryLinks map, `hidden lg:flex` - no `xl:hidden`), the Full nav is
DELETED, and the MENU toggle + the nav-menu container carry NO `xl:hidden`
(the hamburger is available at all widths so the MORE group stays reachable
on desktop). The non-essential routes must remain reachable without the bar:
the mobile tree's MORE group, the footer (AllLinks), the RELATED modules, and
the cross-links. Verify no orphaned route: every route in MenuLinks must
appear in the footer at minimum.

## 5. The aria-current behavior

`IsActive(path, link)` (Links.ts) decides `aria-current="page"`: the root
matches only itself; every other route matches by prefix. All surfaces use
it - do not hand-roll active states. After any registry change, check the
promoted route's built page: the link must carry `aria-current` when that
page is served.

## 6. The arbiter after every change

The FULL build (`pnpm prepublishOnly`) is for structural changes; for
markup-only nav changes the fast guard is `pnpm run Drift` (the count is
dynamic; all PASS - 97 checks at the essentials reduction). Verify the
markup with greps of the SOURCE when no build ran, and note that the built
HTML under Target/ is stale until the next full build.

## 7. The RELATED + BREADCRUMB laws (born from the RESID-RELATED closeout)

The two cross-link components complete the web the bar cannot hold:

- `Source/Component/Related.astro` - rendered at the foot of a page's
  content, before `</main>`. Its markup is CANONICAL: never restyled, never
  forked per page. A page adds `<Related Links={[{ Href, Label }, ...]} />`
  plus the `import Related from "@Component/Related.astro";` line.
- `Source/Component/Breadcrumbs.astro` - rendered as the FIRST element
  inside `<main>` on the deep pages. Same registry rule: it resolves the
  active page through `AllLinks` + `IsActive`; a page with no registry entry
  renders nothing, which is correct.

The truthful-target law (this bit for real): every `Href` in a Related list
MUST resolve to a built route - check `Target/<route>/index.html` exists
before choosing it. The docs section indexes are NOT auto-generated: a docs
section folder with no `index.md` (config, plugin, ... - only their leaf
.md files exist) has no `/docs/<section>/` route, so link the LEAF page
instead (`/docs/config/aphrodite-toml/`, `/docs/plugin/hooks/`) or `/docs/`.
A dead Related link is a silent 404 the build does not catch - grep the
target tree, never assume the route exists.

Neighbors are curated, not exhaustive: three to four links that name the
page's actual companions (the flow the reader came from / goes to), using
the registry's label vocabulary. Docs links carry the `DOCS · X` label form
when they name a specific doc page.
