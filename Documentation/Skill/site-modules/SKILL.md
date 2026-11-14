> Specialized working copy (repo): original to the Aphrodite site (born from
> the STUDY-MODULE batch, 2026-10: the real-world study block redesign).
> No DeepSeek counterpart. This is the specialized truth for this site's
> sessions.
---
name: site-modules
description: THE laws for the site's recurring data modules - the one-canonical-form rule (a fact block that appears on more than one page gets one shared component, not per-page copies), the byte-exact facts law (the study figures and other generated primaries never reword or round), the voice-color accents (canary = the saved/positive figure, teal = the ratio, raw-blood = the band/cost), the caveat-as-own-note rule, and the SRC citation law (plain prose token, linked by the CodeMentions pass, never a hand-built anchor). Load before adding or editing any recurring stat/telemetry/study module.
whenToUse: Mandatory before adding, editing, or duplicating any recurring structured module (the study module Component/StudyLedger, the telemetry modules, any stat/ledger block that appears on two or more pages). If you are about to copy-paste a stat block from one page to another, STOP and read this manual first.
---

# SITE MODULES - the canonical recurring data modules

## 1. The one-canonical-form rule

A fact block that appears on more than one page (the real-world study, the
install story, the version pairings) gets ONE shared component under
`Source/Component/` - never per-page copies. The pages render the component
at the size their module needs (the `Scale` prop: "full" = the primary page,
"compact" = the footnote variants), and toggle optional sections (the
`ShowBars`-style props). A bespoke per-page copy of the same numbers is the
drift surface this rule exists to kill.

## 2. The byte-exact facts law

The numbers inside a canonical module are the generated primaries:
byte-exact from `Module/Aphrodite/README.md` or, for figures a page cites
directly from the CHANGELOG (the history content's CHANGELOG.md anchors),
byte-exact from `Module/Aphrodite/CHANGELOG.md` - the CHANGELOG is the
secondary figure-primary, so the unrounded forms it prints (like 132.82× and
225×) are the legal glyphs where it is the cited source. Never reworded,
rounded, or reformatted when the module restructures. A redesign changes the
CONTAINER (the header row, the ledger rows, the accent colors), never the
VALUES. The arbiter stays `pnpm run Prepare` after every touched file: it
regenerates `Source/Generated/` from the submodule, so a figure that no longer
matches the repository is regenerated rather than compared.

## 3. The voice-color accents

The grammar's voices, applied consistently inside every data module:

- `text-stamped-canary` - the saved/positive figure (the headline number).
- `text-weathered-teal` - the ratio or the per-unit rate.
- `text-raw-blood` - the band, the cost, or the attention-grabbing label.
- `text-bone-newsprint` - the neutral paired values; `text-zinc-dust` for
  the labels and the meanings.

Each ledger row carries three parts: the label (uppercase mono, zinc-dust),
the value (mono, black, accent-colored, the numerals), and the one-line
meaning (body text, zinc-dust).

## 4. The caveat-as-own-note rule

A caveat ("THE EXACT PERCENTAGE IS A BAND: ...") is its own bordered note
block - a left-accent border on the accent color plus the asphalt panel -
never buried in a run-on paragraph. The caveat text stays byte-exact.

## 5. The SRC citation law

The source citation is written as a PLAIN PROSE TOKEN
(`SRC: README.md:467-511.`) - never a hand-built anchor. The CodeMentions
build pass wraps it into the real `tree/Current` link with the
`#L467-L511` fragment, emitting the fragment only when the referenced range
exists in the local checkout (a dead-range citation degrades to the file
anchor). Verify the rendered link in `Target/` after the build; never
inline `https://github.com/...` for a source citation.

## 6. The structure (the study module as the exemplar)

`Component/StudyLedger.astro` is the reference form: header row (the
period + the scope), key-value ledger rows (label + value + meaning, the
voice accents), optional stat bars (the ratio presentation, bar widths at
the band centers, ranges as labels), the caveat note, the SRC citation.
New recurring modules copy this skeleton, not the study's content.

## 7. The card-grid law (2x2 until xl)

Every multi-card grid (the index pipeline stages, the case-study loop
layers) uses the same responsive shape: `grid-cols-1` on mobile, 2x2 from
`sm` (`sm:grid-cols-2`), and 4-across only at `xl` (`xl:grid-cols-4`).
Rationale: 4-across between 1024-1279px (the `lg` band) squishes the cards
- the enlarged headline labels rub against the absolutely-positioned stamp
chips. Never use `lg:grid-cols-4` on a card grid. The reading order is the
DOM order (cards 01/02 on the first row, 03/04 on the second); reflowing
the grid never reorders the items. Precedents: `pages/index.astro` (the
4-stage pipeline grid, `gap-12 sm:gap-14 xl:gap-14`) and
`pages/case-study.astro` (the layer grid, `gap-16`). When you touch one,
grep the other and keep the breakpoints identical.

## 8. The marker-render law (the CCR-marker overflow rule)

Every element that renders a CCR marker string (`<<<CCR:hash|type|size>>>`,
the 40-hex form is ~50+ chars with no break opportunity) carries
`overflow-wrap: anywhere` - the shared utility class `.ccr-marker` in
`Source/Stylesheet/Global.css` (or the `.docs-prose :global(:not(pre) > code)`
/ `:global(td)` rules for the docs prose, which already carry it). The wrap is
VISUAL ONLY: the rendered text and every `data-copy` payload stay byte-exact
(the generated showcase catalog is the arbiter). `truncate` is NOT an acceptable
substitute on a marker line - it hides the size field instead of wrapping.
Raw stream panes (ZineStream, the per-page equivalents) take `.ccr-marker` on
the pane container so every line inherits it; `pre` blocks keep
`overflow-x: auto` (scroll containment) so intentional code formatting never
re-wraps. The 16px floor and the mono chip styling are untouched by the wrap.

## 9. The codefence law (the command-block rendering rule)

Every command/terminal-line block goes through Shiki, and every Shiki block is
a PLATE. A hand-written page renders one through
`Source/Component/CodeFence.astro`; a docs ``` fence gets the same markup from
Astro's markdown pipeline. Both emit the same bare element - normalize to it,
never hand-roll it:

```html
<pre class="astro-code zine-print" data-language="bash"
      style="background-color:#111014;color:#dedbd2">...</pre>
```

NEVER render a command run as plain styled divs: the command names, the flags
and the paths are tokenized by the grammar, not hand-colored. The law:

1. **The palette is the THEME, never the stylesheet.** `ZineTheme` in
   `Source/Library/ShikiTheme.ts` is imported twice - by `astro.config.ts`
   (`markdown.shikiConfig.theme`) and by `CodeFence.astro` (`codeToHtml`) - so
   the two paths cannot drift. Shiki writes its colours as inline
   `style="color:#..."` attributes on every token span, and an inline style
   outranks every stylesheet rule short of `!important`; re-colouring a named
   third-party theme from CSS is a fight that cannot be won. Add a scope to the
   theme instead. Blood stays CHROME: raw-blood measures ~2.3:1 on carbon-void
   and is never a code-text colour.
2. **The frame is declared ONCE.** `body pre.astro-code` (plus
   `body .zine-plate > pre.astro-code`) in `Source/Stylesheet/Global.css` owns
   the 1px oxblood hairline, the 3px blood-crimson spine, `radius: 0`, the
   padding, the 1.75rem rhythm, the hover lift and the scroll cue. A reading
   column must not declare a second `pre` frame: Astro compiles
   `.docs-prose :global(pre)` to `.docs-prose[data-astro-cid-...] pre`, which is
   (0,2,1) and wins the tie against the base rule on source order. The same
   reason retired `[&>pre]:p-3.5` and `font-mono text-base` from `CodeFence.astro`.
3. **The hover lift rides `background-image`.** Shiki's inline style sets
   `background-color` only, so a `linear-gradient` wash over it is the one
   background a stylesheet can apply without `!important`. Motion settles
   instantly under `prefers-reduced-motion` (the global rule collapses every
   transition to 0.01ms).
4. **One copy control per block.** `Source/Script/CodePlate.ts` wraps each
   fence in `figure.zine-plate` and hangs a `[data-copy]` chip in
   `.zine-plate-bar`; `Layout/Base.astro` binds it through the site's ONE
   clipboard runtime (`BindRuntime` calls `BindPlates()` then `BindCopy()`). A
   `CodeFence` `Copy` button is MOVED into that cluster, never duplicated. The
   "this control is mine" test is
   `Host.querySelectorAll("pre.astro-code").length === 1` - a markdown fence's
   host is the whole reading column, so a looser test adopts an unrelated CTA
   from elsewhere on the page and leaves the block with no chip.
5. **The annotations never edit a character.** In bash a `//` note and the
   words around it are the SAME token, and `$ ` is whatever the grammar gave
   the sigil. `MarkPrompt`/`MarkComment` move text nodes into
   `<span class="zine-prompt">` / `<span class="zine-comment">`, so
   `textContent` - and therefore the payload, `pre.textContent` minus one
   trailing newline - stays byte-identical to what Shiki rendered. A class rule
   on the wrapper outranks the INHERITED inline colour of the token span around
   it, which is how the two stay distinct without `!important`. `https://` is
   never an annotation (a `//` preceded by `:` is skipped) and `$env:...` is
   never a prompt (the character after the sigil is checked).
6. **Long lines scroll inside the plate.** `overflow-x: auto` lives on the
   pre (the plate), never on a wrapper, and a styled scrollbar is the
   persistent cue (`::-webkit-scrollbar` is what makes it non-overlay on
   macOS); `.zine-plate--scroll` adds the explicit `⇥` mark. A fence may never
   widen the page.
7. Simulated OUTPUT lines inside a terminal pane (the `[INIT] ...` receipts,
   the compile flood) are NOT commands - they stay as the pane's styled divs
   next to the fence, preserving the voice-color accents. Demo data that only
   SIMULATES a terminal (the workbench compression samples) is exempt: those
   strings are generated showcase content, not install instructions.

## 10. The flow-pane law (the ZineFlow two-view rule)

`ZineFlow.astro` renders each step as two synchronized panes: AGENT-VIEW ·
CONVERSATION (what the agent sees in its user-facing transcript: the user
turn, the tool output, the preview line, the marker chip, the
`aphrodite_retrieve` call and its result) and SYSTEM-PATH · BACKEND (what
happens behind the conversation: the BLAKE3 store, the inline-then-durable
lookup, the byte-exact return). Two hard rules:

1. The pane steps stack in ONE grid cell (`grid` wrapper + `col-start-1
   row-start-1` on every step div, `hidden` for the inactive ones), so the
   pane AUTO-GROWS with the visible step's content. Never put the step divs
   in `absolute inset-0` inside a fixed-height wrapper - absolute stacking
   cannot grow the parent, and long content overflows or clips. The panes
   are never clipped and never internally scrolled; auto-grow is the
   decision (no max-height, no overflow-y).
2. A pane value is a string or a list of mono lines. The per-line tone
   convention: a line containing `<<<CCR:` renders as the marker chip
   (`.ccr-marker` + canary bold), `» ` highlights teal, `→ ` dims, `· ` fades
   to opacity-40. Content must be corpus-anchored (hooks.md,
   retrieve.md, the backends and install docs, the enriched preview catalog
   at docs/proxy/compression.md:228-241); the marker and preview shapes are
   the corpus's own examples, never invented formats. Flag any step whose
   two-view content the sources do not support.

## 11. The page-overflow law (nothing may widen the document)

The page's horizontal overflow is `document.documentElement.scrollWidth -
window.innerWidth`, and it is the ONLY honest reading: `body` carries
`overflow-x-hidden`, so a real overflow never shows a scrollbar - it just
leaves the document scrollable, which `window.scrollTo(400, 0)` proves
(`window.scrollX` stays above 0). A route that reports a non-zero value is
broken even when nothing looks wrong. Five ways it happens here, each with
the arbiter that finds it:

- **A payload rendered as text.** A `data-*` attribute is TEXT to the
  browser until something writes markup into it or splits the tag open.
  `Source/Library/CodeMentions.ts` walks the built HTML as tokens; its tag
  patterns are quote-aware (`Attrs` = `(?:[^>"']|"[^"]*"|'[^']*')*`) so a
  `>` inside a quoted value cannot end the tag - with `[^>]*` the rest of
  the value becomes a "text node", the prose pass links a file name inside
  it, and the element breaks open (the /config/ COPY TOML button rendered
  its whole 4.5 KB payload and measured 2034px). The same law binds every
  HTML string built in frontmatter: `Chip`/`Row` in `pages/config.astro`
  interpolate a key name, so they run it through `Escape` - unescaped,
  `preview.<family>.<ctype>` became three real elements and the label read
  `preview..`. Arbiter:
  `document.querySelectorAll("family, ctype").length === 0` and a
  `[data-copy]` button whose `textContent` is only its label.
- **`processScripts` re-parsing a JSON island.** `@playform/compress`
  ships `html-minifier-terser` with `processScripts` including
  `application/json`; that option makes the minifier parse a matching
  `<script>`'s TEXT as HTML recursively, and a JSON array long enough came
  back with `</String>` appended - every `JSON.parse` then threw
  `Unexpected non-whitespace character after JSON at position 2454`.
  `astro.config.ts` therefore passes
  `HTML: { "html-minifier-terser": { processScripts: [] } }` (deep-merged,
  so every other minifier option keeps its default). Arbiter:
  `grep -c '</String>' Target/workbench/index.html` must print `0`.
- **A long unbreakable token.** Repository paths, 40-hex hashes, TOML keys
  and dotted identifiers carry no break opportunity, so they set the
  MIN-CONTENT width of every box that holds them - which is why a chip or a
  PREV/NEXT link can widen the page from inside a grid. `body {
  overflow-wrap: anywhere }` in `Global.css` is the fix, and it must be
  `anywhere`, not `break-word`: only `anywhere` also shrinks the min-content
  contribution, which is what lets a grid/flex item stay inside its track.
  `td, th` keep `normal` on purpose - a wide table scrolls in its own box
  instead of shredding paths mid-token. Arbiter: the widest text node whose
  `Range.getClientRects()` right edge passes the viewport.
- **A table with no scroll box.** A table cannot shrink below its
  min-content width, so it widens the page unless an ancestor scrolls.
  `Component/ZineLedger.astro` is the pattern: the bordered box itself
  carries `overflow-x-auto` (`/versions/` was 226px over without it). Every
  `<table>` on the site lives inside a scroll container - grep
  `<table` and check the parent.
- **A tilted plate.** `ZineBox` rotates from `sm` up, and a rotated box's
  BOUNDING box is wider than its layout box: 1.2deg on a 6.5k-px-tall plate
  adds height·sin(1.2deg) - 137px - to the width, which put `/plugin/` 12px
  past a 1440px viewport with no content actually out of place.
  `main > section { overflow-x: clip }` is the frame: `clip`, not `hidden`,
  because clip creates no scroll container, so `position: sticky` and the
  tape corners behave exactly as before.

Diagnosis ladder - each step exists because the previous one lies:

1. Element boxes sorted by `getBoundingClientRect().right` report CLIPPED
   children (a table inside `overflow-x-auto`) at their unclipped width.
   Filter out any element with an ancestor whose `overflow-x` is not
   `visible` before trusting the list.
2. When no unclipped element is at fault, scan text nodes
   (`document.createTreeWalker` + `Range.getClientRects()`) - a long token
   inside an inline box is invisible to the element scan.
3. When neither finds it, hide each child in turn and keep the one whose
   `display: none` collapses `scrollWidth` back to `innerWidth`, descending
   into it. Several siblings can each overflow, so a single-child bisect
   stops early; confirm by re-measuring after the fix.

The full acceptance is a sweep of every sitemap route at 375 and 1440 -
`0` everywhere, not just on the routes that were reported.
