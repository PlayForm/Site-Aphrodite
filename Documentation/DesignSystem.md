# Design system - the layers, and where a value belongs

> `Source/Stylesheet/` - one entry point (`System.scss`), one contract
> (`_contract.scss`), component partials under `Component/`, and one sheet per
> route under `Page/`. The contract is the file to read first: it lists every
> public class with its variants, and it is comments only, so it costs nothing.

The site is one design language expressed in four layers. A value is declared
once, in the lowest layer that can hold it, and every layer above reads it. The
failure this document exists to prevent is a hex code appearing in a component:
at that point the palette has two homes and neither is authoritative.

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
