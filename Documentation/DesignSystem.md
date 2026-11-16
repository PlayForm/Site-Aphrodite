# Design system - the layers, and where a value belongs

> `Source/Stylesheet/` - one entry point (`System.scss`), one contract
> (`_contract.scss`), component partials under `Component/`, and one sheet per
> route under `Page/`. The contract is the file to read first: it lists every
> public class with its variants, and it is comments only, so it costs nothing.

The site is one design language expressed in four layers. A value is declared
once, in the lowest layer that can hold it, and every layer above reads it. The
failure this document exists to prevent is a hex code appearing in a component:
at that point the palette has two homes and neither is authoritative.

This document has two axes. Everything down to `HOW TO CHECK IT` answers "where
does this VALUE belong". From `THE ATOMIC LAYERS` down it answers a different
question - "which PRIMITIVE is this SHAPE" - and carries the component
catalogue, the register of shapes still hand-built on two or more pages, and the
uniformity check every route is measured against.

---

## THE FOUR LAYERS

**Tokens.** Every colour, distance, radius and type size is a custom property in
`:root`, declared in `_tokens`. There are four spacing roles and they mean
relationships, not sizes: `--space-tight` (label to value), `--space-reading`
(paragraph to paragraph), `--space-group` (explanation to figure),
`--space-chapter` (a new subject). There are seven type roles, and prose is never
set smaller than `--type-body`.

**Mixins.** The idioms that would otherwise be retyped: `hard-shadow`,
`plate-frame`, `mono-label`, `inset-well`, `telemetry-tag`. A partial that inlines
one of these is a missing `@use`, not a style choice.

**Component partials.** `Component/Plate`, `Texture`, `Console`, `Data`, `Chrome`.
Each owns one family of surfaces and publishes the classes the rest of the site
may name. A partial reads tokens and mixins; it never restates a palette value
and never re-derives a type role.

**Utilities.** `_utilities` carries the page-level vocabulary: the type roles, the
section grammar (`.blueprint-section`, `.section-index`), `.prose-flow`, and the
label laws. A page composes from this layer instead of writing geometry.

Page sheets are a fifth thing and they sit outside the entry point on purpose:
`Source/Stylesheet/Page/<Name>.css` is imported by the page that owns it, and
`Deck.css` is the same arrangement for the presentation route. A page's rules
ship only with that page. Routing them through `System.scss` would apply them to
all 64 routes - the homepage's `main p.type-body { max-width: 40rem }` would
re-measure every other page's prose.

---

## THE RULE

- **A new value is a token, never a literal.** A colour, a distance, a radius or
  a type size that is not in `_tokens` is added there first and read as
  `var(--name)` afterwards. A `var(--token, #fallback)` is still a stray literal:
  the fallback is a second copy of the palette, and a token-contract check will
  refuse it.
- **A public class is named by other files; a component-local one is not.**
  `.shell`, `.type-*`, `.telemetry-tag`, `.tier-*` and `.band` are public. The
  `.zp-*`, `.wb-*`, `.deck-*` and `.workflow__*` families belong to the one
  component or route that renders them; a page reaching into `.zp-*` breaks
  silently the next time that partial changes.
- **One expressive assembly per section.** `.emphasis-expressive` spends the whole
  budget, `.emphasis-quiet` spends none, and two expressive plates in one section
  halve each other. Emphasis is the volume knob; identity - accent colour, stage
  letter, headline figure - is never turned down with it.
- **A sentence is never set at `--type-caption` or `--type-meta`.** Those roles are
  for labels, units, counts and identifiers. Prose that will not fit gets a
  shorter sentence, never a smaller size.
- **A label breaks at its spaces or not at all.** The label voice carries
  `overflow-wrap: normal`; only a container holding an unbreakable token opts in
  with `.break-token`.

---

## WHAT STAYS IN A COMPONENT

The extraction is finished when `grep -rc "<style"` over `Source/Component` and
`Source/pages` returns nothing but the two exceptions below. Both are real:

- **A `<noscript>` block.** `presentation.astro` hides the dead transport controls
  and restores the UI inside `<noscript>`. An imported sheet always applies, so it
  cannot express "only when scripting is off".
- **A genuinely data-driven value.** The grunge's per-element custom properties,
  the stage accent variables, and Shiki's inline colour are computed per element
  or per render. A stylesheet cannot know them; they arrive as inline style or as
  custom properties on the element.

Everything else - a margin, a border, a colour, a breakpoint - is a rule, and a
rule lives in the layer.

---

## HOW TO CHECK IT

`grep -rc "<style" Source/Component Source/pages` is the extraction check: it
reports the blocks still in the tree, and each remaining one must be one of the
two exceptions above. The visual check is the owner's: the proof of a correct
extraction is that the page renders identically, and no measurement in this
repository substitutes for looking at it.

A page sheet is proven faithful the way it was moved: the extracted rules must
equal their source block character for character once whitespace and parentheses
are removed. The only legal transform is dropping Astro's `:global(...)`
wrappers, because Astro scopes a page block with `:where(.astro-hash)`, which
contributes zero specificity - so `.docs-prose :global(h2)` and the global
`.docs-prose h2` are the same selector at the same weight, and the sheet cannot
change a render by moving.

---

## THE ATOMIC LAYERS

The site is assembled from a small set of reusable primitives, so that every
route reads as the same publication instead of a series of hand-built layouts.
Five layers, and what may live in each:

- **Tokens** - values only, no selectors. The palette, the seven type roles, the
  four spacing roles, the elevation tiers, the splat and deck ink. A value is
  declared in `_tokens` and read as `var(--name)` everywhere above it.
- **Atoms** - one job, no layout assumptions. A plate, a surface, a tag, a type
  role, a code plate, a button. An atom never positions itself: it has no
  margin, no width, no flex participation of its own.
- **Molecules** - two or three atoms with ONE relationship. A console (bar +
  well), a ledger row, a figure with its unit, a header (index + title + lead).
- **Organisms** - a section's shape. A band, a matrix with a dominant lead, a
  two-column split, a pod pair, the blueprint chapter wrapper.
- **Pages** - arrangement and copy only. A route chooses organisms and fills
  their slots; it does not invent a style.

Four rules follow from that, and they are the whole of this section:

- **A page may not invent a style.** If a page needs something that does not
  exist, it is added to the atoms or molecules layer FIRST and then used - never
  as a one-off class in the route.
- **A repeated block becomes a component.** Two pages rendering the same shape
  means one component with props, not two copies.
- **Variants are named, not ad-hoc.** `.plate--quiet`, `.button--ghost`,
  `.metric--compact` - a variant is a documented class, never an inline style.
- **Data-driven custom properties are the only exception.** The grunge's
  per-element vars, the stage accent variables and Shiki's inline colour are
  computed per element or per render, and a stylesheet cannot know them.

---

## ATOMS

One job each. Every name here is public: a page may put it on its own markup.

### Surface and frame

- **`.plate`** - the module surface. Variants: `--quiet` (hairline rule, no fill,
  no shadow, no tilt), `--standard` (4px crimson boundary + zero-blur hard
  shadow), `--featured` (standard plus the one legal tilt); `--surface-plain`
  (carbon-void, the default), `--surface-inset` (the page ground, so the plate
  reads as a hole in it), `--surface-paper` (one sheet up), `--surface-none` (the
  DECLARED opt-out - never rely on a `bg-transparent` utility winning a
  specificity argument); `--accent-none`, `--accent-crimson`, `--accent-canary`,
  `--accent-teal` (the boundary, and the shadow plane that mirrors it);
  `--size-md` (1.5rem, 2rem from `sm`), `--size-lg` (2rem, 3rem from `sm`);
  `--straighten` (a leaning plate that holds flat under the pointer). Use it for
  a block that must read as a framed module. Prefer `ZineBox`, which composes it.
- **`.shell-card`** - a surface utility: shell fill, 1px `--tier-shell-edge`,
  radius 0, `position: relative`. NO padding: the caller's own `p-*` states how
  tight the block is. The quiet card, and one half of the `ZineSurface` idiom.
- **`.well`** - the same shape recessed instead of lifted: well fill and the
  LIGHTER `--tier-well-edge`, which is what makes a well read as depth rather
  than as one more panel.
- **`.tier-canvas`**, **`.tier-shell`**, **`.tier-well`** - fills only, no edge,
  no radius. Use them when the frame is already decided and only the depth moves.
- **`.tier-critical`** - a complete tier: crimson fill, its glow, bone type. Not
  legible as a bare fill.
- **`.tier-inverted`** - a complete tier: bone ground, carbon ink.
- **`.emphasis-quiet`**, **`.emphasis-standard`**, **`.emphasis-expressive`** -
  the volume knob. `quiet` spends no budget, `expressive` spends all of it (tilt,
  stacked shadow, tape). ONE expressive assembly per section.
- **`.zine-box-crimson`**, **`.zine-box-teal`**, **`.zine-box-canary`**,
  **`.zine-box-subtle`** - the shadow PLANE only, with no boundary and no fill.
  Composes under any frame.
- **`.splat-frame`** - the asymmetric torn edge; `--bone` for bone ink instead of
  oxblood, `--right` for a tear on the trailing edge, `--strong` for the full
  displacement.
- **`.plate__stamp`** (`--raw`, `--canary`, `--teal`, `--bone`) and
  **`.plate__tape--corner`**, `--section`, `--hero`, `--hash`, `--tab`, `--strip`,
  `--kicker`, `--fill-raw|canary|teal|bone`, `--ink-raw|canary|teal|bone` - the
  label pasted across an edge. The tape carries the section's identity colour;
  the stamp is the verdict and one per argument is the budget.
- **`.fold`** (`__summary`, `__tag`, `__label`, `__marker`, `__marker--open`,
  `__body`) - the quiet disclosure, a real `<details>`.

### Texture - decoration only, always BEHIND the plate

- **`.grunge`** - the noise-drawn ink layer, a real inline `<svg>` child.
  **`.grunge__ink`** is one ink group inside it. Modifiers `--oxblood`, `--bone`,
  `--faint`. Keep every decoration at `z-index: -1` behind the plate's own opaque
  fill, and give a plate that carries a `<pre>` a fainter weight or none.
- **`.halftone-screen`**, **`.photocopy-grit`** - print overlays.
- **`.tape-staple`**, **`.tape-strip`** - the pasted-strip hardware.

### Ink and type

- **`.type-display`**, **`.type-section`**, **`.type-sub`**, **`.type-body`**,
  **`.type-caption`**, **`.type-meta`**, **`.type-code`** - seven roles, and a
  page never writes a raw size. A role sets size, leading, weight and tracking
  together; pair it with a colour utility and never restate its size. Prose is
  never smaller than `--type-body`, and a SENTENCE is never set at
  `--type-caption` or `--type-meta` - those are for labels, units, counts and
  identifiers.
- **`.telemetry-tag`** (`--crimson` solid raw-blood with bone text, `--canary`
  solid with soot text, `--bone` solid with soot text, `--teal` an OUTLINE with
  transparent fill) - the mono micro-label chip. Crimson is solid and teal is an
  outline because `--raw-blood` as text on the dark fills fails 4.5:1. Do not
  invent a fifth.
- **`.metric`** (`--compact`) and **`.metric__unit`** - the giant mono figure, one
  per section, with its unit as a CHILD so the two stay on one line. `--compact`
  is the same figure a step down, for two on one page.
- **`.section-index`** - the numbered tag, `01 // POSITIONING`. Mono, 11px,
  uppercase, 0.08em, never breaking mid-token.
- **`.section-kicker`** - the quiet eyebrow above a heading.
- **`.figure-caption`** - the sentence under a figure, at `--type-body`.
- **`.zine-drop-cap`** - the first letter as a stamped block.
- **`.break-token`** - opt-in `overflow-wrap: anywhere` for a container holding an
  unbreakable token (a hash, a path, a TOML key). Never on `body`: `anywhere`
  shrinks min-content and shreds every label on the site.
- **`.ccr-marker`**, **`.code-link`**, **`.zine-comment`**, **`.zine-prompt`** -
  the identifier vocabulary inside prose and code.

### Control

- **`.button`** (`--primary`, `--secondary`, `--text`, `--utility`) - the action
  hierarchy. `primary` is the one raw-blood block per view; a row or a band with
  a handler is a real `<button type="button">`, never a `div` with `onClick`.
- **`.zine-plate`** (`--scroll` for a payload that scrolls inside it),
  **`.zine-plate-bar`** (the chip band across the top padding),
  **`.zine-plate-lang`** (the language tag - METADATA, never an action),
  **`.zine-plate-copy`** (the ONE action per payload), **`.zine-plate-path`** (the
  path line above a plate) - the code plate. One payload gets one copy control.

### Motion - every one degrades to its final state

**`.motion-wipe`** and **`.motion-wipe-host`**, **`.zine-stat-fill`**,
**`.zine-exec-spin`**, **`.zine-flow-step`**, **`.zine-flow-step-index`**,
**`.zine-flow-tick-bar`**, **`.zine-flow-pane-label`**, **`.zine-toggle-bar`**,
**`.zine-diagram-node`**, **`.zine-diagram-hot`**, **`.zine-diagram-dim`**,
**`.zine-diagram-linkable`**. A pre-hide is only legal under
`html.js [data-reveal]:not([data-revealed])` inside
`@media (prefers-reduced-motion: no-preference)`: a no-JS reader and a
reduced-motion reader must both get the finished page.

---

## MOLECULES

Two or three atoms with one relationship. Each is a family with a base class and
BEM parts; the parts are named only by the component that renders them.

- **`.console`** + `__bar`, `__well`, `__cutoff` - a pod: the bar names what
  produced the bytes, the well holds them, the cutoff is the truncation line.
- **`.ledger`** + `__scroll`, `__band`, `__bandrow`, `__head` (`--right`,
  `--wrap`), `__cell` (`--numeric`, `--up`, `--down`), `__value` (`--strong`),
  `__row`, `__ribbon`, `__lead`, `__arrow` - the data matrix: a recessed well of
  readings, one row per record, a caption band, hairlines between rows and no
  drawn lattice. `Delta` is identity, not emphasis: `up` is canary, `down` teal.
- **`.dossier`** + `__band`, `__stamp`, `__rule`, `__heads`, `__column`
  (`--right`), `__caption`, `__row` (`--ruled`), `__cell` (`--left`, `--right`),
  `__label`, `__text` - two evidence columns read as ONE comparison.
- **`.statbar`** (`--teal`, `--raw`, `--canary`) + `__label`, `__figure`,
  `__value`, `__qualifier`, `__track`, `__fill`, `__pod` - the monument: a ratio
  as a filled bar.
- **`.example__*`** - `__plate`, `__tags`, `__pods`, `__pod`, `__ribbon`,
  `__panel`, `__facts`, `__seam`, `__seamrule`, `__seamword`, `__retrieval`,
  `__grid` (`--loose`), `__stack`, `__stages`, `__stage`, `__stagename`,
  `__fold`, `__foldsummary`, `__foldbody` - one worked scenario in the one shape
  every scenario takes.
- **`.header`** + `__index`, `__title`, `__lead` (`--first`) - the page head. The
  index sits above the tape in the QUIET telemetry voice whatever the tape's tone
  is: the tape carries identity, and a second chip in the same colour takes
  emphasis instead of adding information.
- **`.crumbs`** + `__trail`, `__sep`, `__link`, `__current`, `__promise`,
  `__group`, `__body`.
- **`.section-nav`** (`--bar`, `--drawer`) + `__list`, `__entry`, `__ordinal`
  (`--inline`), `__link` (`--block`), `__summary`, `__count`, `__drawer-list`,
  `__row` - the on-page index.
- **`.related`** + `__head`, `__label`, `__list`, `__row`, `__ordinal`, `__body`,
  `__link`, `__reason` - the continuation module at the foot of a page.
- **`.docs-sidebar`** + `__eyebrow`, `__panel`, `__sections`, `__group`,
  `__summary`, `__marker` (`--current`), `__label` (`--current`), `__count`,
  `__chevron`, `__branch` (`--nested`), `__link` (`--current`), `__active`,
  `__wip` - the docs tree.
- **`.chips`** - a telemetry chip row.
- **`ZineSurface`** - `.grunge` + `.shell-card` + the painter hook
  (`data-grunge`, `data-grunge-mode`). Three facts that must agree, which is why
  the idiom is a component and not two classes: a page that writes the classes
  and forgets the hook gets an empty plate with no ink and no error.

---

## ORGANISMS

A section's shape. A page assembles these and writes copy inside them.

- **`.shell`** - the `<main>` measure, gutter and rhythm. `max-width: 1440px`,
  `margin-inline: auto`, `padding-inline` 1.25rem, 2rem from `sm`, 3.5rem from
  `lg`. Rhythms: `--wide` (the default page rhythm - `gap` 4rem and `padding-block`
  4rem, 5rem and 6rem from `lg`), `--dense` (the tight rhythm), `--hero` (the
  opening rhythm), `--grow` (fills the viewport's remaining height - the
  workbench), `--blueprint` (the drawn ruling behind every plate).
- **`.band`** - a full-width horizontal band: a 1px `--oxblood-dark` hairline on
  its top edge, `--space-group` from the rule to the first line. `--split` puts
  prose beside its figure instead of above it.
- **`.split`**, **`.split--even`** - two panels side by side.
- **`.pods`** - two console pods in one band.
- **`.matrix`** - a row of cells where one child is visibly dominant
  (`.matrix-lead`); collapses to a stack.
- **`.blueprint-section`** - the chapter wrapper: a full-width hairline on its top
  edge and the short drop to the first line. Knobs `--blueprint-rule` (default
  `--tier-shell-edge`) and `--blueprint-inset` (default `--space-tight`).

---

## THE COMPONENT CATALOGUE

Forty-two components plus `ZineSurface`. A page assembles these; it does not
re-type their markup. Grouped by the job they do, because that is how a page
author looks for one.

### Chrome and frame

- **`PageShell`** - the `<main>` measure, gutter and rhythm. `Rhythm` picks
  `--wide` (default), `--dense` or `--hero`; `Crumbs`, `Grow`, `Blueprint`.
- **`PageHeader`** - the header block repeated verbatim across routes: tape,
  index coordinate, `<h1>`, and the lead as one sentence per array entry
  (`Lead: string[]`).
- **`Breadcrumbs`** - the trail above the title.
- **`SectionNav`** - the on-page index, as a sticky bar or a drawer.
- **`DocsSidebar`** - the docs tree.
- **`Related`** - the continuation module at the foot of a page.

### Surface and frame

- **`ZineBox`** - the module plate, and the one place a block decides how loudly
  it is framed. `Emphasis` (quiet / standard / featured), `Surface` (plain /
  inset / paper / canvas / shell / well), `Accent`, `Tone`, `Size`, `Tilt`,
  `Rotate`, `Hover`, `Wipe`, `Grunge`, `GrungeCorner`, `Tape`, `TapeColor`,
  `TapeSide`, `Class`.
- **`ZineSurface`** - the QUIET plate grammar: `.grunge` + `.shell-card` + the
  painter hook. `Class`, `Mode`, `Id`, `Style`. Renders a `<div>`; an `<article>`
  that must stay an article composes the two classes itself.
- **`ZineTape`** - the module's label, and the site's annotation hierarchy.
- **`ZineStamp`** - the expressive accent, at its loudest legal volume.
- **`ZineKicker`** - the mono kicker label.
- **`ZineFold`** - the quiet disclosure, wearing the telemetry tag.

### Console and data

- **`ZineLedger`** - the generic data matrix: a recessed well of readings, one
  row per record, an optional caption band. `Rows` / `Headers`.
- **`StudyLedger`** - the canonical real-world study block, rendered as a
  telemetry matrix.
- **`ZineDossier`** - two evidence columns read as one comparison.
- **`ZineStatBar`** - a giant figure, its unit in the label voice, and the track.
- **`ZineStream`** - the raw pane: what the terminal keeps.
- **`ZinePreview`** - the compressed result, framed as the product's own argument.
- **`ZinePipeline`** - the stream/preview pair as a live four-step pipeline.
- **`ZineDiagram`** - one figure, framed as a console pod.
- **`ZineDiagramNav`** - the figure's own index.
- **`ZineFlow`** - the interactive traversal stepper, UI-native.
- **`ZineToggle`** - the comparison switch over two panes.
- **`ConfigKeys`** - the config page's single reference for the `aphrodite.toml`
  keys.

### Evidence

- **`ZineSource`** - where a claim came from, at two levels.
- **`ExampleCase`** - one worked scenario, in the one shape every scenario takes.
- **`ExamplePanels`** - the five evidence shapes an `ExampleCase` panel can take.
- **`ZineExample`** - the pre-assembled form of one worked example.
- **`ZineLesson`** - one lesson, stamped and set beside the argument it came from.
- **`ZinePullQuote`** - the manifesto plate: one quotation, at the expressive
  tier.
- **`ZineSplit`** - the two-panel split with its own grammar.

### Control

- **`ZineButton`** - the site's one action control, and its action hierarchy.
- **`CopyButton`** - the one clipboard control.
- **`ZineCopyChip`** - the small inline copy chip.
- **`CodeFence`** - the code plate, with its optional result callout.
- **`CodeLink`** - the code-mention link: the mono chip that links to an
  identifier's definition. **No route renders it yet.**
- **`ZineExecButton`** - the exec demo's control. **No route renders it yet.**

### Content and decoration

- **`ZineReveal`** - the redacted-cover layer. DECORATIVE ONLY.
- **`DeckScene`** - one scene of the presentation route.
- **`ZineCompose`** - the component-composition guide, embedded when a page wants
  the reader to see the machinery. **No route renders it yet.**
- **`ZineSwatches`** - the token-swatch strip. **No route renders it yet.**
- **`ZineRegistry`** - **no route renders it yet.**
- **`ZineSlider`** - **no route renders it yet.**

---

## THE DUPLICATE REGISTER

A shape rendered by two or more pages without a shared component is a defect.
Measured across `Source/pages/**` after the extraction below.

### Extracted

- **The quiet surface idiom.** The tag
  `<div class="grunge shell-card ..." data-grunge data-grunge-mode="edge">` was
  written **54 times across 10 pages**. It is now
  `ZineSurface`: **47 sites** adopted (benchmarks 1, config 5, crates 1, flavors
  1, hermes 9, index 1, plugin 17, setup 7, tools 2, versions 3), each rendering
  the identical class list and the identical painter hook. The seven that remain
  are all `<article>` elements - a self-contained composition whose semantics
  belong to the outline, one of them carrying a conditional shadow through
  `class:list`. `ZineSurface` renders a `<div>` (Astro cannot render a dynamic tag
  name), so those keep the literal idiom. They are listed here rather than
  silently skipped.

### Open - the ledger tables

**Eighteen `<table>` elements across 11 pages, in three grammars and one bespoke
case, while `ZineLedger` - the `.ledger` matrix - is rendered by exactly one
route (benchmarks, three times) and by none of those eighteen.**
This is the largest remaining duplicate on the site, and converging it changes
what the tables look like, so it is registered rather than rewritten.

- **Grammar A, the mono matrix.** The table class is
  `min-w-[Nrem] border-collapse font-mono text-base`; `<thead class="bg-asphalt-panel">`,
  the head rule `border-b-2 border-blood-crimson`, cells
  `type-meta whitespace-nowrap px-4 py-2 ... !font-black uppercase text-zinc-dust sm:px-5`.
  benchmarks ×2, config ×1, examples ×1, tools ×1, versions ×2.
- **Grammar B, the ruled table.** `w-full border-collapse text-left`, plain
  `<thead>`, head rule `border-b border-[color:var(--tier-well-edge)]`, cells
  `type-meta px-4 py-3 font-bold uppercase text-zinc-dust sm:px-5`. config ×1,
  crates, flavors, plugin, examples ×1.
- **Grammar C, the canary head.** `border-collapse font-mono text-base`, the head
  rule `border-b-2 border-oxblood-dark`, cells
  `py-3 pr-4 text-base font-black uppercase tracking-widest text-stamped-canary`.
  hermes, hooks, setup ×3.
- **Bespoke.** `tools.astro`'s second table (`text-left font-mono`, no head rule,
  `px-4 py-3 text-left font-bold` cells) is none of the three.

### Open - the rest

- **The page title.** `PageHeader` renders `.header__title`, and five routes
  still hand-build their own `<h1>` with a bespoke class string - examples
  (`type-display ... max-sm:!text-4xl`), index
  (`text-[min(72px,17.5vw)]`), docs (`border-b-4 border-blood-crimson ...`),
  workbench (`text-3xl`) and case-study (`text-5xl`). One component, five
  private copies: this is the title-scale half of the uniformity check, and it
  is the most visible remaining duplicate.
- **The metric figure.** `.metric` with a `<span class="metric__unit">` child is
  hand-built in benchmarks, hermes ×2, setup and workbench - five sites, four
  pages. `ZineStatBar` renders figure + unit + track, so the bare figure has no
  component; it should be one, with the unit as a prop.
- **The padded well.** `well p-4 sm:p-5` in case-study, crates and flavors.
- **The 3/2 split.** `mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-5`
  with `lg:col-span-3` / `lg:col-span-2` in plugin and setup.
- **The two-up band.** `mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2` in hermes
  and plugin.
- **The quoted callout.** `border-l-4 border-raw-blood pl-4` in benchmarks,
  case-study, plugin, tools and versions - a blockquote bar that should be a
  variant on the quiet plate.
- **The inverted proof pod.** `.tier-inverted` plus a
  `--tier-inverted: var(--bone-newsprint)` override in case-study and hermes.
- **The tinted section rule.** `--blueprint-rule` set inline in index and
  workbench.

---

## THE ONE-OFF REGISTER

Page-level inline styles and literal values that are not data-driven. Each needs
a named variant before it can be removed; deleting it today would change a
render, so the class each one needs is stated instead.

- **`--blueprint-rule` section tints.** `index.astro` sets it to
  `var(--oxblood-dark)`; `workbench.astro` sets it to `var(--weathered-teal)`
  twice and `var(--stamped-canary)` twice. Needed:
  `.blueprint-section--oxblood`, `--teal`, `--canary`, each declaring one
  `--blueprint-rule`.
- **`--tier-inverted: var(--bone-newsprint)`.** `case-study.astro` and
  `hermes.astro`. The token's own value is `--bone-white`, so this is a real
  variant, not a no-op. Needed: `.tier-inverted--newsprint`.
- **`color: var(--tier-inverted-ink)`.** `versions.astro`, on a `.metric` sitting
  on a sand sheet rather than on `.tier-inverted`. Needed: `.metric--ink`.
- **`--ledger-min: 46rem`.** `StudyLedger.astro` sets its own floor inline.
  Needed: a `Min` prop on the component, so the value is a call site's decision
  rather than a style attribute.
- **The pipeline's fade.** `ZinePipeline.astro` writes
  `background: linear-gradient(..., var(--carbon-void, #111014))`. A `var()`
  FALLBACK is a second copy of the palette, and `#111014` is not a token. Needed:
  `.console__fade` in `Component/Console`, reading `var(--carbon-void)` bare.
- **`#520612` as a literal.** `Chrome.scss` writes it into `.header__title`'s
  `drop-shadow`, and `benchmarks.astro` / `hermes.astro` repeat it as
  `drop-shadow-[3px_3px_0px_#520612]`. Needed: a `--plate-shadow-ink` token.
- **`#000` as a literal.** `versions.astro` writes
  `shadow-[6px_6px_0px_#000]` twice. Needed: the same token family -
  `index.astro` already does it correctly as
  `shadow-[6px_6px_0px_var(--oxblood-dark)]`.
- **`style="width:0%"`** on `ZinePipeline` is DATA-DRIVEN - the fill's start
  position - and is legal.

**Nothing was removed from a page in this pass.** Every inline style above is
load-bearing until its variant exists, and adding a rule to a partial was outside
this card's file set. The extraction removed 47 hand-written surfaces, not a
single claim.

---

## THE UNIFORMITY CHECK

Four facts every route shares. Any two pages must agree on all four and differ
only in which organisms they assemble.

- **Gutter.** `.shell` owns it: `max-width: 1440px`, `margin-inline: auto`,
  `padding-inline` 1.25rem, 2rem from `sm`, 3.5rem from `lg`. A page writes no
  horizontal padding of its own - a band that adds `px-*` moves the whole page
  sideways relative to its siblings, which reads as a rendering bug on every
  navigation.
- **Title scale.** `.header__title` only: 1.875rem / 2.25rem, weight 900,
  uppercase, `-0.025em`, `--bone-white`, a 4px `#520612` offset; 3.75rem / 1 from
  `sm`. `PageHeader` renders it, and it was extracted precisely because the same
  `<h1>` class string stood in ten files. **Five routes still hand-build their
  own `<h1>`** - examples, index, docs, workbench and case-study - each with a
  bespoke class string (`type-display` on one, `text-[min(72px,17.5vw)]` on
  another, `text-5xl` on a third), so the title scale is the one uniformity fact
  the site does NOT yet hold. Registering it is the first step to closing it:
  a route's opening claim is `PageHeader`, and a route that needs a different
  treatment needs a named variant of `.header__title`, not a second class string.
- **Band rhythm.** `.band` is a 1px `--oxblood-dark` hairline with `--space-group`
  from the rule to the first line; the shell rhythm (`--wide`, `--dense`,
  `--hero`) owns the gap BETWEEN sections. A page never writes its own section
  padding, and never two spacing mechanisms on one relationship.
- **Plate grammar.** 4px crimson boundary (the module edge), a zero-blur hard
  shadow, radius 0, and mobile flattens (`max-sm:rotate-0`). One expressive
  assembly per section. The quiet grammar is `ZineSurface`, and the two are not
  variants of each other.

---

## THE UNUSED SHELF

Components no route renders. They are not defects - each is a finished primitive
waiting for its page - but a primitive nobody uses is not evidence that the site
is assembled from primitives, so they are listed here rather than counted as
coverage.

**`CodeLink`**, **`ZineCompose`**, **`ZineExecButton`**, **`ZineRegistry`**,
**`ZineSlider`**, **`ZineSwatches`**. `ZineCompose` and `ZineSwatches` are
content components (they render a guide and a swatch strip); the other four are
live primitives with no caller.
