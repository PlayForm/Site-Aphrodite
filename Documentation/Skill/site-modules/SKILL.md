> Specialized working copy (repo): original to the Aphrodite site (born from
> the STUDY-MODULE batch, 2026-10: the real-world study block redesign).
> No DeepSeek counterpart. This is the specialized truth for this site's
> sessions.
---
name: site-modules
description: THE laws for the site's recurring data modules - the one-canonical-form rule (a fact block that appears on more than one page gets one shared component, not per-page copies), the byte-exact facts law (the study figures and other Drift-checked primaries never reword or round), the voice-color accents (canary = the saved/positive figure, teal = the ratio, raw-blood = the band/cost), the caveat-as-own-note rule, and the SRC citation law (plain prose token, linked by the CodeMentions pass, never a hand-built anchor). Load before adding or editing any recurring stat/telemetry/study module.
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

The numbers inside a canonical module are the Drift-checked primaries:
byte-exact from README.md, never reworded, rounded, or reformatted when the
module restructures. A redesign changes the CONTAINER (the header row, the
ledger rows, the accent colors), never the VALUES. The arbiter stays
`pnpm prepublishOnly` + `pnpm run Drift` after every touched file.

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
