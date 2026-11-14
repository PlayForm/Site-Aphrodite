# Restructure - the Aphrodite site audit and the plan it produces

> Scope: this file is a PLAN. It changes no page, component, layout or
> stylesheet. Every claim below was measured against the working tree on
> 2026-11-14 and carries its probe; a claim without a probe is marked CLAIM and
> is a decision, not a measurement.
>
> The design law is `Documentation/Skill/` - seven project skills. This plan
> never overrides them: where a proposal would break one, the proposal says so
> and the skill wins. The five grammar laws (4px crimson border, hard offset
> shadows, tape stamps, stream/preview pair, huge vertical rhythm) are the
> constraint set for every item in section 3 and 5.

---

## 0. What was measured, and what the brief got wrong

### 0.1 The method

Four machine passes over `Source/`, all runnable again:

- **Class census** - every literal `class="..."` attribute value (multi-line
	aware), normalised, counted across files, plus class-token n-grams (4/5/6)
	to find shells embedded in larger strings. Output: the 60 families cited in
	section 1.
- **Text + paragraph pass** - visible text per page (tags, expressions,
	scripts stripped), sentence-level repeats across pages, and `<p>` blocks
	carrying three or more sentences (PROSE BREAKDOWN compliance).
- **Component reachability** - every `import X from ".../Component/X.astro"`
	in `Source/**`, giving the true importer count per component.
- **Heading outline** - every `<h1|h2|h3>` with its line, per route file.
- **Rendered check** - `curl http://localhost:9999/` (dev server up), footer
	and landmark counts read off the real DOM, not the source.

### 0.2 The verified baseline

- 17 route files under `Source/pages/`, **9,039 lines** total (the brief said
	~10,700 - the real figure is 9,039; `find Source/pages -name '*.astro' | xargs wc -l`).
- 32 components, 2,339 lines. **17 of them are imported by nothing** - 806
	lines of dead code (section 1.12).
- One layout, `Source/Layout/Base.astro` (354 lines).
- 48 generated docs pages (`find Source/Content/Docs -name '*.md' | wc -l`),
	so 64 built pages: 14 listed top-level routes + `/` + `/docs/` + 48 docs +
	`/presentation/`.
- 103 elements in `Source/pages/**` carry a hand-written tape class
	(`border border-black bg-*`); 80 carry `border-4 border-blood-crimson`.
- Live version facts at build time: binary **1.8.1**, plugin **2.3.2**,
	headroom **0.2.0** (`Source/Library/Versions.ts`, `Stamps.BinarySuffix()`).

### 0.3 Three brief assumptions that the measurement refutes

- **"~10,700 lines"** - it is 9,039.
- **"no next/previous in docs"** - the docs route HAS prev/next:
	`Source/pages/docs/[...slug].astro:56-62` builds the reading-order sequence
	and `:298-320` renders the pair with `rel="prev"` / `rel="next"`. The
	non-docs pages have no prev/next; docs are the only surface that does.
- **"walls of prose"** - largely already fixed. Only 7 files contain any
	`<p>` with three or more sentences, and only 6 paragraphs site-wide reach
	four sentences (`case-study:923`, `:957`, `benchmarks:56`, `crates:28`,
	`setup:29` (six sentences), `versions:134`). The PROSE-RHYTHM lane landed.
	What remains is **volume and structure**, not paragraph length: `case-study`
	carries 2,163 words in 59 prose blocks and `examples` 1,847 in 54, while
	neither page offers a single in-page anchor.

### 0.4 The Drift baseline (read this before accepting any phase)

`pnpm run Drift` does NOT currently pass, and this card changed nothing:

```
97 checks run.
DRIFT DETECTED: 17 check(s) failed - the content no longer matches the primaries.
```

The 17: sixteen `diagram <id>: the .svg exists and is at least as new as the
.mmd` (staleness only - the SVGs exist, they are older than the sources), and
one `README plugin badge = plugin.yaml's version` (README still badges the
previous plugin version). Both predate this card: the tree was already dirty
(`git status` shows `.astro/*` caches and `package.json` modified by the dev
server and the auto-committer).

**Therefore the acceptance rule for every phase is "the failing count does not
rise above 17, and no failure name changes except by re-rendering diagrams",
not "all PASS".** A worker who reports "Drift all PASS" on this tree has
misread the output.

### 0.5 The thesis

The site does not suffer from too many pages or too much prose. It suffers from
**a component library that each component hard-codes to one variant, so every
page hand-rolls the variants it needs.** `ZineTape` can express exactly one tape
(`-top-7`, `-rotate-1`, `px-3 py-0.5`, 2px shadow) and the site renders 103
tapes in at least six shapes. `ZineBox` renders `p-6 sm:p-8` and the site
renders 80 plates, 39 of them at `p-8 sm:p-12`. `ZineStatBar` exists, is
imported by nobody, and four files hand-roll its markup. Seventeen components
are never imported at all.

Fix the variant surface of the existing primitives and the duplication collapses
at the source instead of being swept page by page.

---

## 1. Duplication map

Each family: **evidence** (file:line, count), **absorb into** (the component or
token that should own it), **API** (the props/variants that make adoption
mechanical), **sites** (the exact list a worker converts), **acceptance**.

### 1.1 D1 - the page shell exists in six variants

Evidence - five distinct `<main>` class strings plus docs:

| shell | class | pages |
| --- | --- | --- |
| A | `relative z-10 mx-auto flex w-full max-w-[1440px] flex-col gap-40 px-5 py-24 sm:px-8 lg:gap-64 lg:px-14 lg:py-40` | case-study:100, examples:71, flavors:12, hermes:50, hooks:14, plugin:18, tools:31 |
| B | same but `gap-24 ... py-32 ... lg:gap-40 ... lg:py-56` | benchmarks:15, crates:19, setup:16, versions:120 |
| C | `gap-24 px-5 pb-32 pt-16 ... lg:gap-40 lg:pb-56 lg:px-14 lg:pt-24` (asymmetric top) | index |
| D | `gap-28 px-5 py-20 ... lg:gap-44 lg:px-14 lg:py-32` | showcase |
| E | `flex-col px-5 pt-16 sm:px-8 lg:px-14` - no gap, no bottom padding | config |
| F | `mx-auto w-full max-w-[1440px] flex-1 flex-col gap-28 px-5 py-32 sm:px-8` - no `relative z-10` | workbench |
| G | `relative z-10 mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:py-24` - no flex/gap | docs/[...slug] |

The fifth grammar law (huge vertical rhythm) is therefore not one rhythm but
four: section gaps of 40, 24, 28 and none, with top padding 24, 32, 16, 20.

**Absorb into** a new `Source/Component/PageShell.astro`.

```
interface Props {
	/** The section gap + page padding pair. "wide" is the default page rhythm. */
	Rhythm?: "wide" | "dense" | "hero";
	/** Render <Breadcrumbs /> as the first child. */
	Crumbs?: boolean;
}
```

- `wide` -> `gap-40 px-5 py-24 sm:px-8 lg:gap-64 lg:px-14 lg:py-40` (shell A).
- `dense` -> `gap-24 px-5 py-32 sm:px-8 lg:gap-40 lg:px-14 lg:py-56` (shell B).
- `hero` -> shell C's asymmetric form (`pb-32 pt-16`, `lg:pb-56 lg:pt-24`).

The component emits `<main class={`relative z-10 mx-auto flex w-full
max-w-[1440px] flex-col px-5 sm:px-8 lg:px-14 ${RhythmClass}`}>`. The head
contract ("every page's slot content is wrapped in `<main>` BY THE PAGE",
`site-development` THE HEAD CONTRACT §5) is satisfied: the page still owns the
element, it is emitted by the component the page writes. The DEEP-HTML sweep
greps the BUILT tree for `<main>`, so verify in `Target/`, not in the page file.

**Sites**: all 17 route files. Shells D, E, F, G are retired into the three
named rhythms; `config` becomes `wide` with a `pt-16`-equivalent handled by its
own first section, `workbench` becomes `dense` and keeps `flex-1` via a
`Grow` boolean, docs keeps its own `<main>` (it is a layout-like route and its
sidebar needs the non-flex column).

**Acceptance**: `grep -c "max-w-\[1440px\]" Source/pages/*.astro` returns 1 for
every page (the PageShell import) except `docs/[...slug].astro`.

### 1.2 D2 - the page header block repeats ten times verbatim

Evidence - `relative flex w-full flex-col items-start` (the header wrapper)
appears at 10 files; the `<h1>` class
`font-headline text-3xl font-black uppercase tracking-tight text-bone-white drop-shadow-[4px_4px_0px_#520612] sm:text-5xl`
appears at exactly those 10 (benchmarks:25, crates:25, flavors:22, hermes:56,
hooks:24, plugin:28, setup:25, showcase:86, tools:41, versions:130). The
section tape above it differs only in margin (`mb-12` on flavors/hermes/hooks/
plugin/tools, `mb-5` on benchmarks/crates/setup/versions) and the lead
paragraph's top margin differs (`mt-12` vs `mt-6` vs `mt-4`).

**Absorb into** `Source/Component/PageHeader.astro`.

```
interface Props {
	/** The tape label, e.g. "BENCHMARKS // MEASURED FIGURES". */
	Tape: string;
	Title: string;
	/** The lead, one sentence per array entry - each becomes its own <p class="mt-3">. */
	Lead: string[];
	/** Tape tone; raw is the section default. */
	Tone?: "raw" | "canary" | "teal";
}
```

Fixed inside: the h1 class string above, the `mt-6` lead start, the `mt-3`
sibling rhythm, and `Tape` rendering through the extended `ZineTape` (D3)
rather than a hand-written div. That also removes the `mb-12`/`mb-5` split: the
static tape variant carries one margin (`mb-12`) and the 4 pages on `mb-5`
adopt it.

**Sites**: benchmarks:16-33, crates:22-34, flavors:15-30, hermes:52-66,
hooks:17-31, plugin:21-38, setup:18-33, showcase:79-100, tools:34-50,
versions:123-140. `index`, `case-study`, `config`, `examples`, `workbench`,
`docs` have bespoke heroes and keep them.

**Acceptance**: the h1 class string appears once in `Source/` (inside
`PageHeader.astro`).

### 1.3 D3 - the tape stamp is hand-rolled 103 times

Evidence - the four observed shapes, each in 3-5 files:

1. **Section tape (in flow)**: `mb-12 -rotate-1 border border-black bg-raw-blood px-3 py-1 text-base font-black uppercase tracking-widest text-bone-white shadow-[3px_3px_0px_#000]` - 14 sites / 5 files (flavors:17, hermes:53/81/240, hooks:19/40/80/243, plugin:23/71, tools:...); the `mb-5` twin - 7 sites / 4 files (benchmarks:20/190, crates:22/127, setup:20, versions:125/181).
2. **Corner tape, canary, left**: `absolute -top-5 left-6 z-10 border border-black bg-stamped-canary px-3 py-0.5 ... shadow-[2px_2px_0px_#000]` - 6 sites / 5 files (flavors:120, hermes:188, hooks:217, plugin:126, tools:116/220).
3. **Corner tape, teal, right**: `absolute -top-5 right-6 z-10 ... bg-weathered-teal ...` - 5 sites / 4 files; and its `-top-3.5` twin at `left-6` - 5 sites / 4 files (benchmarks:84/211, setup:260, showcase:702, versions:222).
4. **Hero stamp**: `-rotate-2 border-2 border-black bg-raw-blood px-4 py-1.5 ... shadow-[4px_4px_0px_#000]` - 5 sites / 5 files (crates:58, flavors:36, plugin:46, showcase:105, tools:59); the hash-chip form `rotate-1 border-2 border-black bg-carbon-void px-4 py-1.5 ... text-weathered-teal ...` - 4 sites / 4 files (flavors:41, plugin:51, showcase:110, tools:64).

`Source/Component/ZineTape.astro` exists (32 lines) and can express exactly one
of these: `absolute -top-7`, `-rotate-1`, `px-3 py-0.5`, `shadow-[2px_2px_0px_#000]`,
three tones, three sides. Two pages use it (config, showcase). That mismatch is
the whole duplication engine.

**Absorb into** `ZineTape` extended with a closed variant set (a closed set, not
six free-form knobs, so the grammar stays enforceable):

```
interface Props {
	Label: string;
	/** The four observed shapes. */
	Variant?: "corner" | "section" | "hero" | "hash";
	Color?: "raw" | "canary" | "teal" | "bone";
	Side?: "left" | "right" | "center";
	/** Corner offset only. */
	Offset?: "-top-3.5" | "-top-4" | "-top-5" | "-top-7";
	Rotate?: "-rotate-1" | "rotate-1" | "-rotate-2";
}
```

Variant -> class map (byte-exact from the evidence above):

- `corner`  -> `absolute ${Offset ?? "-top-5"} ${SideClass} z-10 border border-black px-3 py-0.5 text-base font-black uppercase tracking-widest shadow-[2px_2px_0px_#000] ${Tone}`
- `section` -> `mb-12 ${Rotate ?? "-rotate-1"} border border-black px-3 py-1 text-base font-black uppercase tracking-widest shadow-[3px_3px_0px_#000] ${Tone}`
- `hero`    -> `${Rotate ?? "-rotate-2"} border-2 border-black px-4 py-1.5 font-mono text-base font-black uppercase tracking-widest shadow-[4px_4px_0px_#000] ${Tone}`
- `hash`    -> `rotate-1 border-2 border-black bg-carbon-void px-4 py-1.5 font-mono text-base font-bold uppercase tracking-widest text-weathered-teal shadow-[4px_4px_0px_#000]`

`hash` is the only variant whose tone is fixed (teal on carbon-void is the
mechanical voice; `site-development` THE TAPE STAMPS law).

**Sites**: all 103 `border border-black bg-*` elements plus the 4 `hash` chips.
Section-level keyword stamps inside prose keep going through `ZineStamp`
(`site-development` PROSE BREAKDOWN §3) - `ZineStamp` is the in-prose chip and
`ZineTape` is the module label, and the `hash` variant above is what retires the
hand-written `rotate-1 border-2 ... text-weathered-teal` chip.

**Acceptance**: `grep -c "border border-black bg-" Source/pages/*.astro` returns
0 everywhere; `grep -rn "shadow-\[2px_2px_0px_#000\]" Source/pages` returns 0.

### 1.4 D4 - the crimson plate is hand-rolled 80 times

Evidence - `border-4 border-blood-crimson bg-carbon-void p-8 transition-transform duration-300 hover:rotate-0 sm:p-12`
appears 39 times across 8 files (case-study, examples, flavors, hermes, hooks,
plugin, showcase, tools) in four rotation wrappers (`rotate-[1.4deg]`,
`-rotate-[1.2deg]`, `rotate-[1.2deg]`, `-rotate-[1deg]`); the `p-6 ... sm:p-8`
form appears 24 times across 6 files (benchmarks, crates, index, setup,
showcase, versions). `Source/Component/ZineBox.astro` exists with `p-6 sm:p-8`
and is imported by exactly one page (config).

Note the double declaration: 39 plates carry `zine-box-crimson` AND the explicit
`border-4 border-blood-crimson bg-carbon-void` - the shadow token and the border
are stated twice for the same element.

**Absorb into** `ZineBox` with a `Size` prop:

```
interface Props {
	Tone?: "crimson" | "subtle" | "canary" | "teal";
	Size?: "md" | "lg";           // md = p-6 sm:p-8, lg = p-8 sm:p-12
	Rotate?: string;              // "-rotate-[1.2deg]" etc, sm-and-up only
	/** The corner tape rendered by ZineTape, if any. */
	Tape?: string;
	TapeColor?: "raw" | "canary" | "teal" | "bone";
	TapeSide?: "left" | "right";
}
```

`Size="lg"` also emits `sm:p-12`, and `Rotate` must be applied from `sm` up
(`sm:-rotate-[1.2deg]`) so mobile stays flat - grammar law 3. The four current
rotation values are hand-rolled on all viewports, which already violates the
"mobile flattens" rule.

**Sites**: the 80 `border-4 border-blood-crimson` elements; the plates that
already declare `zine-box-crimson` keep the token (the component applies it).

**Acceptance**: `grep -c "border-4 border-blood-crimson" Source/pages/*.astro`
returns 0.

### 1.5 D5 - the mono kicker label, 222 sites and six tones

Evidence - `text-base font-black uppercase tracking-widest` appears **222 times
across 33 files** (every page plus 15 components). The distinguishing suffix is
one of six colours:

- `text-zinc-dust` - 37 sites / 22 files (labels, meanings).
- `text-bone-white` - 95 sites / 23 files (headings-in-a-panel).
- `text-stamped-canary` - 31 sites / 13 files (the saved/positive figure).
- `text-weathered-teal` - 17 sites / 9 files (the ratio, the mechanical voice).
- `text-soot-black` - 31 sites / 16 files (a label ON a canary chip).
- `text-bone-newsprint` - 10 sites / 6 files (neutral paired values).

The second role, `font-headline text-lg font-black uppercase text-bone-white sm:text-xl`
(sub-headings inside plates), appears 27 times across 9 files.

**Absorb into** `Source/Component/ZineKicker.astro`.

```
interface Props {
	Tone?: "dust" | "white" | "canary" | "teal" | "ink" | "newsprint";
	/** "label" = the mono tracking-widest form; "title" = the font-headline form. */
	Size?: "label" | "title";
	As?: "div" | "span" | "p";
}
```

Tone->class map is the six-colour table above verbatim; `Size="title"` swaps
`font-mono text-base` for `font-headline text-lg ... sm:text-xl`. The
`site-modules` voice-colour law (§3) names the meaning of each tone, so the
component's prop names ARE the law: canary = saved figure, teal = ratio,
raw = band/cost, newsprint = neutral, dust = label.

**Acceptance**: `grep -rc "text-base font-black uppercase tracking-widest" Source/pages/*.astro`
returns 0 for every page (components keep the string only inside
`ZineKicker.astro` and `ZineTape.astro`).

### 1.6 D6 - the prose block has six top-margins and two breakdown idioms

Evidence - `font-body text-base leading-relaxed text-bone-newsprint` appears
**203 times across 18 files**. Its max-width variants: `max-w-3xl ...` 67 sites
/ 13 files, `mt-3 max-w-3xl ...` 24 / 6, `mt-4 max-w-3xl ...` 18 / 3,
`mt-6 max-w-3xl ...` 10 / 5, `mt-12 max-w-3xl ...` 5 / 5, `mt-8 ...` 8 / 4.

So the same paragraph role carries `mt-3`, `mt-4`, `mt-6`, `mt-8` and `mt-12`
depending on which lane wrote it. The PROSE BREAKDOWN law
(`site-development` §"THE PROSE BREAKDOWN" item 1) fixes the sibling rhythm at
`mt-3`.

Two breakdown idioms coexist:

- **sibling `<p>`s**: `benchmarks:29-33` - lead `<p class="mt-6 ...">` then
	`<p class="mt-3 ...">` (the law's form).
- **a nested block span**: `flavors:26-30` - one `<p class="mt-12 ...">` with
	`<span class="mt-1 block text-base">` for the second sentence (a third form,
	neither the law's `mt-3` sibling nor its panel-split).

**Absorb into** a CSS token pair in `Source/Stylesheet/Global.css`, not a
component (a paragraph is not a component; the margin is):

```css
.zine-prose {
	@apply max-w-3xl font-body text-base leading-relaxed text-bone-newsprint;
}

.zine-prose > p + p {
	margin-top: 0.75rem; /* mt-3 - the PROSE BREAKDOWN sibling rhythm */
}

.zine-prose--dust {
	@apply text-zinc-dust;
}
```

A page then writes `<div class="zine-prose"><p>...</p><p>...</p></div>` with no
per-paragraph margins, and the six variants collapse to one. The nested
`<span class="mt-1 block">` idiom is retired in favour of the sibling `<p>`
(the law's form); this is a byte-preserving change to line breaking only.

**Acceptance**: `grep -rc "mt-3 max-w-3xl font-body" Source/pages/*.astro`
returns 0; `.zine-prose` appears in Global.css once.

### 1.7 D7 - the stream/preview pair is hand-rolled where it is the product

Grammar law 4 says the pair "is the whole argument of the product". Current
state: `ZineStream` is imported by ONE page (config) and `ZinePreview` by ONE
(showcase). Never on the same page. Meanwhile:

- `space-y-0 border border-oxblood-dark bg-soot-black p-5 font-mono text-base leading-relaxed`
	- the stream pane - is hand-written 4 times / 3 files (hermes:194/247,
	plugin:133, tools:123), while `ZineStream` renders the same pane at `p-3.5`.
- `border-2 border-oxblood-dark bg-asphalt-panel p-3.5` - the preview pane -
	appears 6 times / 4 files (ZineFlow:92, ZinePreview:25, crates:71/112,
	setup:76/149).

**Absorb into** `ZineStream` (add `Pad?: "3.5" | "5"` and accept plain
`Lines: string[]` alongside the current `{ Text, Tone }[]`) and `ZinePreview`
(unchanged). Then a new `Source/Component/ZineSplit.astro` renders the pair
side by side - the shape the deck's `transform` beat draws and no page has:

```
interface Props {
	Raw: string[];              // the terminal lines, tones via the "dim|fade|mute" prefixes
	Preview: string;            // the compressed line the LLM reads
	Hash: string;               // "a1b2c3d4... 416x"
	Label?: string;             // the preview micro-label
}
```

Layout: `grid gap-6 lg:grid-cols-2`, stream left (`ZineStream`), preview right
(`ZinePreview`), both inside one `ZineBox Size="lg"`. This is the only new
component in section 1 that adds a *shape* rather than absorbing one - it is
required by section 5 (the `default`/`transform` beats have no home today).

### 1.8 D8 - the stat bar: a dead component and five hand-rolled copies

Evidence - `flex h-4 w-full overflow-hidden border border-oxblood-dark bg-soot-black`
appears 14 times / 5 files: `StudyLedger:149`, `ZineStatBar:40` (dead),
`benchmarks:137/147/157/167/177`, `case-study:574/811`, `index:356/363/374`.
`mb-1 flex justify-between text-base font-bold` (the label row) appears 12
times / 4 files. `ZineStatBar` is imported by nothing.

**Absorb into** `ZineStatBar` (revive - it is named by the AA-LIFT law in
`site-development:248`, so deleting it would break a cited law).

**Sites**: `StudyLedger:145-160` (replace its internal bar with the component),
`benchmarks:133-180` (5 bars), `index:352-380` (3), `case-study:574`, `:811`.

**Acceptance**: `grep -c "flex h-4 w-full overflow-hidden" Source/**` returns 1
(inside `ZineStatBar.astro`).

### 1.9 D9 - the SRC citation footer has two forms

Evidence - form 1 `mt-12 border-t border-oxblood-dark pt-8 text-base leading-relaxed text-zinc-dust`
(hermes:280, hooks:288, plugin:110, tools:94); form 2 `mt-8 border-t border-oxblood-dark pt-4 text-base text-zinc-dust`
(case-study:422, examples:219/428, versions:172). The citation itself is a plain
prose token by law (`site-modules` §5), and the CodeMentions pass links it.

**Absorb into** `Source/Component/ZineSource.astro`, form 1 only (the larger
rhythm matches the page rhythm; form 2 is drift):

```
interface Props { Lines: string[]; }   // each "SRC: file:lines." on its own line
```

**Sites**: the 7 above. Acceptance: `grep -rc "border-t border-oxblood-dark pt-4" Source/pages`
returns 0.

### 1.10 D10 - shadow literals are not tokens

Evidence - four inline shadow literals carry the grammar's "hard offset" law:
`shadow-[3px_3px_0px_#000]` 45 sites / 17 files, `shadow-[2px_2px_0px_#000]` 26 /
13, `shadow-[4px_4px_0px_#000]` (hero stamps), and
`drop-shadow-[4px_4px_0px_#520612]` (the page h1, 10 files). `Global.css` owns
`zine-box-crimson/subtle/canary/teal` for the 6+10px plane but nothing for the
small stamps.

**Absorb into** three utilities in `Global.css` (`.zine-shadow-2`,
`.zine-shadow-3`, `.zine-shadow-4`, plus `.zine-drop-4` for the h1) and let
`ZineTape`/`ZineStamp` be the only writers. Pages stop writing shadows entirely
- which D3/D4 already achieve; the utilities exist for the handful of elements
that are not tapes (the copy button, the toast).

### 1.11 D11 - the two COPY buttons disagree about the install sequence

Evidence - `index:441-451` and `plugin:218-226` carry the same CTA class
(`border border-black bg-raw-blood px-4 py-2 font-mono text-base font-black uppercase text-bone-white shadow-[3px_3px_0px_#000] ... active:translate-x-0.5 active:translate-y-0.5 active:shadow-none`)
with **different payloads**: index copies `git clone ... && cd Aphrodite-Hermes
... bash download.sh; cd ..; hermes plugins enable aphrodite`, plugin copies the
same plus a trailing `hermes` line. `install-surfaces` §1 says the five install
surfaces move together in one run; two payloads for one sequence is exactly the
drift that law exists to prevent.

**Absorb into** `Source/Component/CopyButton.astro` (`Label`, `Payload`) with the
payload sourced once - and one canonical sequence decided in the install work
(section 6, phase 2), not copied twice.

### 1.12 D12 - the dead-component ledger

17 of 32 components are imported by nothing. 806 lines.

| component | lines | disposition |
| --- | --- | --- |
| ZineStatBar | 91 | **ADOPT** - D8 revives it on 11 sites |
| ZineCopyChip | 38 | **OWNER DECISION** - named by `site-development:248`; the two COPY CTAs are a different shape (D11), so it needs a real adopter or deletion + a skill patch |
| ZineSwatches | 48 | **OWNER DECISION** - named by `site-development:243` as the token mirror; the site has no page that renders the palette |
| CodeLink | 41 | DELETE - `Global.css` already owns `a.code-link`; the CodeMentions pass emits the markup |
| ZineButton | 17 | DELETE - every button in the site is a CTA or a toggle, both of which have live components |
| ZineCompose | 43 | DELETE |
| ZineDiagram | 35 | DELETE - diagram pages use `ZineDiagramNav` + inline SVG |
| ZineDossier | 58 | DELETE |
| ZineExample | 46 | DELETE |
| ZineExecButton | 63 | DELETE |
| ZineFold | 30 | DELETE |
| ZineLedger | 50 | DELETE - the live table markup is in `hooks:251`, `hermes:86`, `tools:82` |
| ZineLesson | 27 | DELETE |
| ZinePullQuote | 34 | DELETE |
| ZineRegistry | 72 | DELETE |
| ZineReveal | 55 | DELETE |
| ZineSlider | 58 | DELETE |

Deleting a component named in `Documentation/Skill/**` requires patching that
skill in the same change. Only three names overlap (ZineStatBar, ZineCopyChip,
ZineSwatches), which is why those three are not on the delete list.

**Acceptance**: the reachability pass returns 0 dead components (or 2 if both
owner decisions resolve to "keep").

---

## 2. Structure and IA

### 2.1 The problem the routes have

17 top-level routes for 9,039 lines, of which six carry under 350 words of
prose (`benchmarks` 167, `workbench` 116, `crates` 258, `versions` 265,
`flavors` 295, `tools` 346). Three of them restate a subject another page
already owns:

- `hooks.astro` (535 words, 307 lines, **one** h2 at :221) documents the same
	six hooks that `plugin.astro` narrates at :330 ("The six hooks, the version
	pairing, and the 14-to-13 correction") and tabulates at `hooks:251`.
- `crates.astro:28` opens with "Two workspace crates plus the vendored Headroom
	fork that carries the content transforms" - which is `versions.astro`'s own
	subject; `versions` already carries the crate inventory in its "Full numbers"
	table at :333.
- `flavors.astro` (295 words) is "One engine, many hosts", i.e. the same
	question `hermes.astro` answers for the flagship host.

And one route is orphaned: **`/presentation/` is in neither `Links.ts` nor
`Scripts/GenerateRedirects.mjs`'s `TopLevelPages`** (that array lists 14 routes
and omits `/`, `/docs`, `/presentation`). The deck is reachable only by typing
the URL, and it has no variant rewrites, so `/Presentation` 404s.

### 2.2 The final route list

Fourteen top-level routes plus `/docs/` and its 48 children:

1. `/` - OVERVIEW (Product)
2. `/setup/` - SETUP (Product) - the install story, four option modules
3. `/case-study/` - CASE STUDY (Product) - why the design is shaped this way
4. `/showcase/` - SHOWCASE (Product) - the plugin worked, corpus-anchored
5. `/benchmarks/` - BENCHMARKS (Product) - the canonical numbers page (gains the
	 study module moved out of `case-study`)
6. `/docs/` - DOCS (Product) - the 48-page reference
7. `/plugin/` - PLUGIN (Surface) - manifest, shim, **the six hooks**, install
	 consequences (absorbs `hooks`)
8. `/tools/` - TOOLS (Surface) - the thirteen tools
9. `/hermes/` - HERMES (Surface) - the integration, **and the other hosts**
	 (absorbs `flavors`)
10. `/config/` - CONFIG (Knobs) - the playground
11. `/workbench/` - WORKBENCH (Knobs) - the live pipeline
12. `/examples/` - EXAMPLES (Knobs) - seven scenarios
13. `/versions/` - VERSIONS (Record) - what ships: binary, plugin, headroom,
	 **the two crates** (absorbs `crates`), the release history
14. `/presentation/` - BRIEF (Record) - the 64-second deck, now linked

Retired: `/hooks/` -> `/plugin/`, `/flavors/` -> `/hermes/`, `/crates/` -> `/versions/`.

**Why not merge more.** `tools` stays: merging it into `plugin` would produce a
1,834-word page (953 + 535 + 346), which is the largest page on the site and
would need its own in-page nav to be readable. `benchmarks` stays and grows: it
is the only page whose job is the numbers, and `case-study` currently carries
the study in two sections (`:606` "... sessions, ... calls" and `:746` "The
corpus agrees") that belong to it.

### 2.3 Header: PRIMARY stays six, MORE stops being a flat list

The essentials law (`navigation-registry` §4) fixes PRIMARY at OVERVIEW / SETUP
/ DOCS / BENCHMARKS / CASE STUDY / SHOWCASE and the fit rule (§3) proves it fits
the 1024px bar. **Do not change PRIMARY.** The change is in MORE: today it is a
flat 10-entry registry rendered as a 2-column grid (`Base.astro:214-240`), which
after the merges would be 8 entries with no shape. Render it as three labelled
groups instead, in the same 2-column grid:

- **THE SURFACE** - PLUGIN, TOOLS, HERMES
- **THE KNOBS** - CONFIG, WORKBENCH, EXAMPLES
- **THE RECORD** - VERSIONS, BRIEF

The group label reuses the tape skin already at `Base.astro:215-219` (canary
`MORE` chip); each group gets its own smaller raw-blood label. This keeps
`navigation-registry` §1 intact (one registry, one array per surface) because
the grouping is a field on the entry, not a second array.

### 2.4 The `Links.ts` shape

```ts
export type LinkGroup = "Product" | "Surface" | "Knobs" | "Record";

export interface InternalLink {
	Href: string;
	Label: string;
	/** The footer column and the MORE group. Unset = Product. */
	Group?: LinkGroup;
}

export const PrimaryLinks: InternalLink[] = [ /* unchanged, six entries */ ];

export const MenuLinks: InternalLink[] = [
	{ Href: "/plugin/", Label: "PLUGIN", Group: "Surface" },
	{ Href: "/tools/", Label: "TOOLS", Group: "Surface" },
	{ Href: "/hermes/", Label: "HERMES", Group: "Surface" },
	{ Href: "/config/", Label: "CONFIG", Group: "Knobs" },
	{ Href: "/workbench/", Label: "WORKBENCH", Group: "Knobs" },
	{ Href: "/examples/", Label: "EXAMPLES", Group: "Knobs" },
	{ Href: "/versions/", Label: "VERSIONS", Group: "Record" },
	{ Href: "/presentation/", Label: "BRIEF", Group: "Record" },
];

/** Every internal route the header knows about - still the one flat set. */
export const AllLinks: InternalLink[] = [...PrimaryLinks, ...MenuLinks];

/** The footer's columns: a VIEW of AllLinks, never a second registry. */
export const GroupOrder: LinkGroup[] = ["Product", "Surface", "Knobs", "Record"];

export const FooterGroups = GroupOrder.map((Group) => ({
	Group,
	Links: AllLinks.filter((Link) => (Link.Group ?? "Product") === Group),
}));
```

Three invariants survive: a route appears in exactly one of `PrimaryLinks` /
`MenuLinks`; `AllLinks.length` is the route count (16 -> 14); `IsActive` is
untouched, so `Breadcrumbs` and every active state keep working.

### 2.5 `AllLinks` is the wrong footer model

`AllLinks` is a good *registry view* and a bad *footer information
architecture*. The footer is not a third nav: it is the page's closing
statement - status, then where else to go, then who made it. Section 4 replaces
the flat concatenation with `FooterGroups` (which is still derived from
`AllLinks`, so no route can go missing from the footer).

### 2.6 What the merges cost

- `Scripts/GenerateRedirects.mjs:20-35` - remove `hooks`, `flavors`, `crates`
	from `TopLevelPages`; **add** `presentation` (currently missing). Add a
	`Retired` map and emit its rules in `BuildRedirects`, because the variant
	generator only rewrites toward canonical paths that exist:

```js
const Retired = new Map([
	["/hooks", "/plugin/"],
	["/flavors", "/hermes/"],
	["/crates", "/versions/"],
]);
```

- `Public/_redirects` / `Target/_redirects` are generated - never hand-edited.
	Run `pnpm run Redirects` after the route change and confirm the three retired
	paths and their case variants appear.
- `Related` lists on the surviving pages: every retired href must be replaced
	(`grep -rn '"/hooks/"\|"/flavors/"\|"/crates/"' Source/pages`). The truthful-
	target law applies - check `Target/<route>/index.html` exists.
- `Breadcrumbs` needs no change (it resolves through `AllLinks`).

---

## 3. Reading optimisation, per page

Constraints: the five grammar laws hold. **Cut copy; never tighten the
rhythm.** Where a fix needs more room, the fix is fewer words, not a smaller
margin.

### 3.1 The two universal defects

- **No in-page navigation anywhere.** Only three route files carry any `id=`
	attribute (`config` 1, `workbench` 1, `docs` 2) and **zero** route files link
	to a fragment (`href="#"` count: 0 across all 17). A 2,163-word page with
	eight sections and no anchor list is the site's single largest reading
	problem.
- **Heading depth is inconsistent.** `case-study` and `config` use h2+h3;
	`examples` has seven h2 and no h3; `hooks`, `versions`, `workbench` have
	exactly one h2 each; `benchmarks` has **no h2 at all**; `showcase` uses h2
	for each example card (dynamic titles) and has no section-level h2.

**Fix for both**: `Source/Component/SectionNav.astro`, a sticky in-page index
that takes the page's own section list:

```
interface Props { Sections: { Id: string; Label: string }[]; }
```

Rendered as `<nav aria-label="On this page">` with `href="#id"` links, the tape
skin on the label, and `aria-current` from an IntersectionObserver. Each section
gains `id={Section.Id}`. This adds the site's first fragment links and fixes
both defects at once. It is not a registry: the page passes its own sections,
which is what keeps it truthful.

### 3.2 Per page

**`/` (index, 470 lines, 379 words, h1 + 3 h2)** - the outline is sound; the
page's problem is that the hero promises the product and the first proof
("The agent spends its budget reading noise", h2:169) is prose. **Fix**: put the
split (`ZineSplit`, section 5.3) immediately after the hero; move the 4-stage
grid (`index:193-320`) below it as the "how" and give it the pipeline's four
step names as h3s (it currently has none - the stage labels are `ZineKicker`s
inside cards, so the grid contributes nothing to the outline).

**`/case-study/` (1,105 lines, 2,163 words, 8 h2 + 5 h3)** - the best outline on
the site and the worst reading experience: eight sections, no anchors, and the
five incidents (h3s at :920-1065) start 81% down the page. **Fix**: `SectionNav`
first; the five incidents become their own h2 section with the five as a
`ZineLesson`-style list (the component exists and is dead - either revive it
here or delete it, see 1.12); the study sections (:606, :746) move to
`/benchmarks/`. Net effect: two sections leave, one h2 is added, no copy is
rewritten.

**`/examples/` (1,056 lines, 1,847 words, 7 h2, 0 h3)** - each h2 is a scenario
and the scenarios are long. **Fix**: `SectionNav`, plus an h3 inside each
scenario for its "what you see" vs "what it cost" halves. Cut: the page repeats
the four-step pipeline inside three scenarios; keep one and cross-link.

**`/config/` (1,023 lines, 847 words, 8 h2 + 5 h3, the only page using the
component library)** - the reference page for the site's own primitives, and the
only page with a working stream/preview pair. Two defects: the h1 sits at
:127 after 126 lines of frontmatter/script, and its h2s are ALL-CAPS toml keys
(`WHERE THE FILE IS FOUND`, `[[PROXIES]] - CACHE :9797 + TOKEN :9798`) while
every other page's h2s are sentence case. **Fix**: keep the ALL-CAPS voice for
the toml keys (it is the page's subject), convert the four prose sections to
sentence case, add `SectionNav`. No copy cut.

**`/workbench/` (1,104 lines, 116 words, h1 at :174, one h2 at :317)** - the
most interactive page and the least readable: 173 lines before the h1, 31
paragraphs of pure UI chrome, one h2. **Fix**: the h1 moves to the top of the
`<main>`; the four panes get h3s (`INPUT`, `CLASSIFIED`, `PREVIEW + MARKER`,
`DECISION`); `SectionNav` with two entries. Retitle from "Preview Workbench" to
"The pipeline, live" (the page does all four steps, not just preview).

**`/showcase/` (877 lines, 769 words)** - one section, then one h2 per example
card whose title is a dynamic expression (`:211` renders `{Example.title}`), so
the outline is a list of corpus titles with no grouping. **Fix**: a static h2
for the section ("THE PLUGIN, WORKED"), the example titles demoted to h3, and
`SectionNav` listing the examples by short label.

**`/benchmarks/` (239 lines, 167 words, 7 plates, no h2)** - a data sheet with
no headings. **Fix**: h2 per plate group (`RATIOS`, `THE BAND`, `THE SESSION
STUDY`, `THE METHOD`) and it inherits the study module from `case-study`.
`SectionNav` optional at this length.

**`/setup/` (340 lines, 660 words, 6 h2)** - the healthiest page. **Fix**:
`SectionNav` with the four options as entries; nothing else. The COPY payload
divergence (D11) is the only defect.

**`/plugin/` (441 lines, 953 words, 5 h2)** - one h2 carries three topics ("The
six hooks, the version pairing, and the 14-to-13 correction", :330). **Fix**:
split into h2 + h3s when `hooks` merges in; `SectionNav`.

**`/tools/` (250 lines, 346 words, 4 h2)** - its first h2 is the literal marker
`<<<CCR:hash|type|size>>>` (:120). That is a good zine move and a bad outline
entry (a screen reader reads a hash grammar as a heading). **Fix**: h2 "THE
MARKER" with the literal marker as the first line of the section.

**`/hooks/`** - retired into `/plugin/` (2.2).

**`/flavors/`** - retired into `/hermes/` (2.2).

**`/crates/`** - retired into `/versions/` (2.2).

**`/versions/` (358 lines, 265 words, h1 at :129, one h2 at :333)** - 204 lines
before its only heading, and the "Full numbers" table is the page. **Fix**:
after absorbing `crates`, three h2s (`THE BINARY`, `THE PLUGIN`, `THE
WORKSPACE`) with the monument as the header; `SectionNav` with two entries.

**`/docs/[...slug]`** - already has a sidebar, prev/next, breadcrumbs and a WIP
registry. **Fix**: none structural. It is the model the other pages should
follow (and the only surface that already satisfies the reading laws).

**`/presentation/`** - the deck has **no `<h1>` at all** (`DeckScene` renders
divs). **Fix**: an `<h1 class="sr-only">Aphrodite, in sixty-four seconds</h1>`
inside `<main>`, so the route has a document title for assistive tech and the
`<title>` has a matching heading.

### 3.3 The cut list

Copy to delete rather than reflow, in order of yield:

- `case-study`: the study narrative (two sections, ~180 lines) - it moves to
	`benchmarks`, so this is a move, not a cut.
- `examples`: the pipeline re-explanation inside scenarios 2 and 6 (~60 lines) -
	cross-link `/` instead.
- `plugin`: the hook table duplicated from `hooks` (it survives once, in
	`plugin`, after the merge).
- `hermes`: the "twelve preview shapes" list (:244) restates `config`'s
	`[PREVIEWS]` section; keep the twelve names, drop the explanations.
- `index`: the hero's stat badges duplicate `benchmarks`' first plate; keep the
	badges (they are the hook) and drop their captions.

---

## 4. Footer: the eight defects, and the replacement

### 4.1 What is actually wrong with `Base.astro:248-284`

Read against the rendered DOM (`curl http://localhost:9999/`), not the source:

1. **No landmark.** The footer contains **0 `<nav>` elements and 0
	`aria-label`s**. Sixteen navigation links sit in a bare `<div>`; a
	 screen-reader user cannot jump to them and there is no "footer navigation"
	 landmark to skip to.
2. **Navigation and status are one run.** The three facts (`{Stamps.BinarySuffix()}`,
	 `{Stamps.PluginSpec()}`, `CC0-1.0` at :279-281) are siblings of the `<a>`
	 list inside the same flex container, so the rendered footer reads as one
	 sentence: `... CONFIG EXAMPLES v1.8.1 BINARY HERMES PLUGIN SPEC v2.3.2
	 CC0-1.0`. "v1.8.1 BINARY" reads as a seventeenth link.
3. **No grouping.** All 16 entries render in registry order, which is a header
	 ordering, not an information architecture (Setup sits between Overview and
	 Docs; Workbench between Flavors and Config).
4. **No copyright or attribution line.** "CC0-1.0" is a bare `<span>` with no
	 link, and there is no author/project line at all - even though the JSON-LD
	 at :78 points at `spdx.org/licenses/CC0-1.0.html` and `ExternalLinks` holds
	 `Repository`, `Releases`, `PlayForm` and `Crates`, none of which the footer
	 renders.
5. **Mobile behaviour is centred soup.** The link container is `flex flex-wrap
	 items-center justify-center gap-x-4 gap-y-2` (:263-265) inside a parent that
	 is `flex-col items-center ... sm:flex-row` (:253-255): on mobile 16 links
	 centre-wrap into a ragged block, and from `sm` up the wordmark and the whole
	 soup are squeezed side by side in one row.
6. **Three emphasis levels in one row, none of them meaningful.** The links
	 inherit `text-zinc-dust`; the stamps carry `font-bold text-stamped-canary`.
	 Nothing distinguishes "destination" from "fact" except a colour that
	 elsewhere means "saved figure".
7. **No legal or repository affordances.** The canonical place for
	 Repository/Releases/PlayForm/Crates is the footer; it renders none of them.
8. **The status wordmark is a duplicate.** `APHRODITE CCR CORE` (:260) repeats
	 the header's `APHRODITE` with different words and no job.

### 4.2 The replacement structure

Four bands, each with a job. Written as the shape, not the final copy:

```astro
<footer class="mt-auto border-t-2 border-oxblood-dark">
	<div class="mx-auto w-full max-w-[1440px] px-5 pb-8 pt-14 sm:px-8 lg:px-14">
		<!-- 1. STATUS: the facts, as facts -->
		<div class="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-oxblood-dark pb-6">
			<span class="flex items-center gap-2">
				<img class="h-4 w-4" src="/Brand/aphrodite.svg" alt="" width="16" height="16" />
				<ZineKicker Tone="white">APHRODITE CCR CORE</ZineKicker>
			</span>
			<span class="font-mono text-base text-zinc-dust">
				BINARY <span class="font-bold text-stamped-canary">{Stamps.Binary()}</span>
			</span>
			<span class="font-mono text-base text-zinc-dust">
				PLUGIN <span class="font-bold text-stamped-canary">{Stamps.Plugin()}</span>
			</span>
			<a class="font-mono text-base text-zinc-dust hover:text-bone-white"
				href="https://spdx.org/licenses/CC0-1.0.html" rel="license">CC0-1.0</a>
		</div>

		<!-- 2. THE COLUMNS: one landmark per group, 1 -> 2 -> 4 across -->
		<div class="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{FooterGroups.map(({ Group, Links }) => (
				<nav aria-label={`Footer · ${Group}`}>
					<ZineKicker Tone="dust">{Group.toUpperCase()}</ZineKicker>
					<ul class="mt-4 flex flex-col gap-2">
						{Links.map((Link) => (
							<li>
								<a class="font-mono text-base tracking-widest text-zinc-dust transition-colors hover:text-bone-white"
									href={Link.Href}
									aria-current={IsActive(Astro.url.pathname, Link) ? "page" : undefined}>
									{Link.Label}
								</a>
							</li>
						))}
					</ul>
				</nav>
			))}
		</div>

		<!-- 3. THE RECORD: the external canon + attribution -->
		<div class="mt-12 flex flex-col gap-4 border-t border-oxblood-dark pt-6 sm:flex-row sm:items-center sm:justify-between">
			<p class="font-mono text-base text-zinc-dust">
				CC0-1.0 · built in the open by
				<a class="text-bone-newsprint hover:text-bone-white" href={ExternalLinks.PlayForm}>PlayForm</a>
			</p>
			<nav aria-label="Footer · Elsewhere" class="flex flex-wrap gap-x-6 gap-y-2 font-mono text-base text-zinc-dust">
				<a class="hover:text-bone-white" href={ExternalLinks.Repository}>REPOSITORY</a>
				<a class="hover:text-bone-white" href={ExternalLinks.Releases}>RELEASES</a>
				<a class="hover:text-bone-white" href={ExternalLinks.Crates}>CRATES.IO</a>
			</nav>
		</div>
	</div>
</footer>
```

Why this shape:

- **Three landmarks, unique labels** (`Footer · Product`, `· Surface`, `· Knobs`,
	`· Record`, `· Elsewhere`) - the duplicate-label defect in the header
	(`aria-label="Primary"` appears twice in the rendered DOM) is not repeated
	here.
- **Facts above, destinations below.** The stamps are `<span>`s in a status
	 band, never inside a `<nav>`, so "v1.8.1 BINARY" can no longer read as a link.
- **Grouping from the registry, not a second list** (`FooterGroups`).
- **`aria-current` stays** - and it is now the only emphasis inside a nav.
- **Attribution exists**: license link + author line + the three external
	 canon links, all from `ExternalLinks` (no new URLs).
- **Mobile**: `grid-cols-1` then `sm:grid-cols-2` then `lg:grid-cols-4`; every
	 list is left-aligned (`items-start` by grid default), so the ragged centred
	 soup is gone. No `justify-center` anywhere in the footer.
- **The essentials law still holds**: every `MenuLinks` route is in a column, so
	 no route is reachable only from the hamburger.

### 4.3 Acceptance for the footer

- Rendered footer carries **>= 4 `<nav>` elements**, each with a unique
	`aria-label`; zero `<span>` with `text-stamped-canary` inside any `<nav>`.
- The rendered footer text no longer contains a run of 16 labels; the columns
	 are separable (`<ul>` per group, `FooterGroups.length` lists).
- `grep -c "flex-wrap items-center justify-center" Source/Layout/Base.astro`
	 returns 0.
- `grep -c 'aria-label="Primary"' Source/Layout/Base.astro` returns 1 (the
	 desktop bar only) - the mobile tree's second `Primary` is renamed
	 `Primary (mobile)` or merged into one nav.
- Every route in `Links.ts` appears exactly once in the rendered footer.

---

## 5. Presentation flows

### 5.1 What the deck actually is

`/presentation/` is a **timed, non-interactive** 16:9 animation: `Scenes.ts`
holds 11 beats summing to 64.0 s; `DeckScene.astro` renders every beat at build
time as static compositions that `Player.ts` reveals with a `requestAnimationFrame`
clock (`data-enter`, `data-wipe`, `data-count`, `data-tier`, `data-state`). The
only user input is play/pause/seek/fullscreen. It is a film, not a demo - so
"make the page flows like the deck" means **reuse the beats' arguments, never
their markup or their clock**.

### 5.2 The beat matrix (verified against the pages)

| beat | deck says | on the site today | verdict |
| --- | --- | --- | --- |
| 01 opening | Aphrodite + the version chips | `index` hero (:58) with stat badges | EXISTS |
| 02 default | 142 lines enter the context, no marker | prose only: `index:169` "The agent spends its budget reading noise" | MISSING as a flow |
| 03 transform | terminal keeps it, model gets the digest (a split) | the two halves live on *different* pages (`ZineStream` on config, `ZinePreview` on showcase); no page shows the split | MISSING |
| 04 pipeline | four steps, one decision | `index:193-204` 4-stage card grid (static) | EXISTS (static) |
| 05 classify | one type per invocation, first match wins | `workbench` sample pills -> `data-stat="classify-ns"` (interactive); `case-study:259` prose + diagram | EXISTS (workbench) |
| 06 preview | the agent reads a line, not a blob | `workbench` `[data-preview]` (interactive); `showcase` `ZinePreview` (one instance) | EXISTS |
| 07 store | BLAKE3, a 40-char address, parked in SQLite/memory | `workbench` renders the marker chip (`:279` `data-marker`) but explains nothing; `case-study:355` "The marker is the contract" is prose | PARTIAL |
| 08 decide | retrieve only when the answer needs the bytes, recursively | `workbench` `[data-decision]` (:289) is a one-line verdict; the deck's skip/retrieve branches + recursive resolve have no page equivalent | PARTIAL |
| 09 hooks | six hooks, one turn, ctypes shim over a Rust dylib | `hooks:251` a HOOK/SETTING/DEFAULT/BYPASS table; `plugin:130` prose | EXISTS as a table, not a flow |
| 10 ledger | a proxy sees the wire, Aphrodite sees the tool call | `index:322` Aggregate deflection + `case-study:606/:746` + `benchmarks` | EXISTS (three places) |
| 11 install | compress at the tool boundary | `setup` four option modules (:63/:134/:185/:226) | EXISTS |

So: **six exist, two partial, two missing, one exists in a shape that is not a
flow.** The gap is concentrated exactly where the product argument is: the
default/transform split and the decide branch.

### 5.3 Which page gains which flow

Each item is a page SECTION, not a copy of the deck. The rule: the page owns the
argument, the deck keeps the film.

- **`/` (index) gains the split - beats 02+03.** A `ZineSplit` inside a
	`ZineBox Size="lg"` directly under the hero: left the raw terminal (the
	`ZineStream` tones: dim 70 / fade 40 / mute 25), right the preview + hash. One
	 toggle (`ZineToggle`) switches between `BY DEFAULT` (both panes show the raw
	 log, the preview pane empty with "no marker") and `WITH APHRODITE` (the
	 preview fills, the stream dims). This is the deck's `data-wipe` beat as a
	 two-state page control, and it is the first time the pair appears on one
	 page. Copy comes from `index:169`'s existing section - nothing new is
	 claimed.
- **`/workbench/` becomes the pipeline's home - beats 04-08.** Retitle to "The
	 pipeline, live", add a four-step rail (`CLASSIFY / PREVIEW / STORE / DECIDE`)
	 above the panes, and give the store step a real address line (BLAKE3 prefix +
	 size) instead of only the marker chip. The page already computes all four;
	 the rail is what makes it legible as the pipeline.
- **`/case-study/` gains the decide branch - beat 08.** Inside "Four layers, one
	 decision" (`:459`), a two-branch control: `PREVIEW ANSWERS IT` (nothing is
	 retrieved) and `NEEDS THE BYTES` (the marker resolves, recursively). The
	 evidence is already in the section; the control makes the decision visible.
- **`/plugin/` gains the hook chain - beat 09.** After absorbing `hooks`, a
	 horizontal six-seam chain (one turn left to right, each seam a chip with its
	 setting), with the existing HOOK/SETTING/DEFAULT/BYPASS table demoted to its
	 legend. No new claims: the table already names the six.
- **`/config/` gains the classify companion - beat 05.** The `[COMPRESSION]`
	 section (`:361`) already lists the knobs; add the type -> threshold matrix
	 the deck's classify beat implies, sourced from the same toml defaults the
	 page already cites.
- **`/showcase/` gains the store walk - beat 07.** It narrates "the plugin,
	 worked" and already has the two-view `ZineFlow`; add the address line
	 (hash -> bytes -> where it parked) to the existing flow steps rather than a
	 new module.
- **`/benchmarks/` owns the ledger - beat 10.** It becomes the only page
	 carrying the session study (moved out of `case-study`), so the ledger beat
	 has exactly one home.
- **`/presentation/` stays a film.** Add only the `<h1 class="sr-only">` (3.2)
	 and a link back to `/` - no page flow is copied into it, and it is not
	 embedded anywhere.

### 5.4 The engine: one simulation, two consumers

`workbench.astro` carries ~430 lines of page-local client script (`:594-1028`)
that simulates classify -> preview -> marker -> decision over synthetic samples
(`Samples`, `:20-90`). Copying that into `/`, `/case-study/` or `/showcase/` is
the exact duplication this plan exists to kill. Extract it once:

- **`Source/Script/Pipeline.ts`** (client script; `Source/Script/` already holds
	 `Firebase.ts`, so this is the established home):

```ts
export interface SimulateInput {
	Text: string;
	Type?: string;      // pin a classifier type, else infer
	Thresholds?: Record<string, number>;
}

export interface SimulateResult {
	Type: string;
	Preview: string;
	Marker: string;      // <<<CCR:hash|type|size>>>
	RawBytes: number;
	ClassifyNs: number;
	Decision: "preview-answers" | "needs-bytes";
}

export function Simulate(Input: SimulateInput): SimulateResult;
export function BindPipeline(Root: HTMLElement): void;   // binds [data-pipeline]
```

- **`Source/Component/ZinePipeline.astro`** renders the four panes + the rail
	 and calls `BindPipeline` on `astro:page-load` (the rebind pattern already in
	 `Base.astro:296-352`).
- **`workbench.astro` keeps** its threshold knobs and its two diagrams (those
	 are the page's own subject); it loses the simulate code.
- The samples stay byte-exact (`workbench:20-90`), and the SANITIZATION law
	 holds: synthetic only, no session content, no home paths.

This also settles a naming debt: the deck's `Scenes.ts` and the page's
simulation both model the same four steps, and only the page one is
interactive. `Pipeline.ts` is the shared truth; `Scenes.ts` keeps the narration.

---

## 6. The work split

Two workers, **file-disjoint by phase**. The rule that makes it safe: a shared
file has exactly one owner in a phase, and no phase starts before the previous
phase's arbiter passes.

### 6.1 Phase 0 - the shared layer (ONE worker)

Nobody else touches these files while this runs.

| file | work |
| --- | --- |
| `Source/Component/ZineTape.astro` | D3: `Variant`/`Offset`/`Rotate`/tone map |
| `Source/Component/ZineBox.astro` | D4: `Size`, `Tape*`, sm-and-up rotate |
| `Source/Component/ZineStamp.astro` | `teal` tone, `Size="sm"` |
| `Source/Component/ZineKicker.astro` | NEW - D5 |
| `Source/Component/ZineSource.astro` | NEW - D9 |
| `Source/Component/PageShell.astro` | NEW - D1 |
| `Source/Component/PageHeader.astro` | NEW - D2 |
| `Source/Component/SectionNav.astro` | NEW - 3.1 |
| `Source/Component/ZineSplit.astro` | NEW - D7/5.3 |
| `Source/Component/CopyButton.astro` | NEW - D11 |
| `Source/Component/ZineStatBar.astro` | revive - D8 |
| `Source/Stylesheet/Global.css` | `.zine-prose`, `.zine-shadow-{2,3,4}`, `.zine-drop-4` |
| `Source/Library/Links.ts` | 2.4 `LinkGroup` + `FooterGroups` |
| `Source/Layout/Base.astro` | 4.2 footer + MORE groups + nav label dedupe |
| `Source/Component/{CodeLink,ZineButton,ZineCompose,ZineDiagram,ZineDossier,ZineExample,ZineExecButton,ZineFold,ZineLedger,ZineLesson,ZinePullQuote,ZineRegistry,ZineReveal,ZineSlider}.astro` | DELETE - D12 (14 files) |

Phase 0 ends with: the components exist and are proven on ONE page (config is
the natural pilot - it already uses the library), plus `pnpm run Drift` at 17
failures and no new ones.

### 6.2 Phase 1 - the page conversions (TWO workers, page-disjoint)

| worker | pages | duplication families |
| --- | --- | --- |
| **A - narrative** | `index`, `case-study`, `examples`, `showcase`, `workbench`, `benchmarks`, `presentation` | D1 D2 D3 D4 D5 D6 D7 D9 |
| **B - reference** | `setup`, `config`, `plugin`, `tools`, `hermes`, `versions`, `docs/[...slug]`, `Component/DocsSidebar.astro`, `Component/StudyLedger.astro` | D1 D2 D3 D4 D5 D6 D9 + StudyLedger adopts ZineStatBar (D8) |

Neither worker edits `Base.astro`, `Links.ts`, `Global.css` or any
`Source/Component/Zine*.astro` in this phase - if a variant is missing, it goes
in a comment addressed to the orchestrator, not into the file.

`benchmarks` is worker A's (it absorbs the study from `case-study`, which is
also A's - the move stays inside one worker).

### 6.3 Phase 2 - the merges and the registry (ONE worker, B)

| file | work |
| --- | --- |
| `Source/pages/hooks.astro` | content folded into `plugin`, file deleted |
| `Source/pages/flavors.astro` | folded into `hermes`, file deleted |
| `Source/pages/crates.astro` | folded into `versions`, file deleted |
| `Source/pages/plugin.astro`, `hermes.astro`, `versions.astro` | receive the folded sections (B already owns these) |
| `Source/Library/Links.ts` | remove the three retired entries (B is the only writer now - A's phase is closed) |
| `Scripts/GenerateRedirects.mjs` | `Retired` map + add `presentation` to `TopLevelPages` |
| `Source/pages/*.astro` | every `Related` href pointing at a retired route |
| `Documentation/Skill/navigation-registry/SKILL.md` | the essentials list and the route inventory now say 14 |

### 6.4 Phase 3 - the flows (TWO workers, page-disjoint)

| worker | files |
| --- | --- |
| **A** | `Source/Script/Pipeline.ts` (NEW), `Source/Component/ZinePipeline.astro` (NEW), `index`, `workbench`, `case-study`, `showcase` |
| **B** | `plugin`, `config`, `benchmarks` |

A owns the engine because three of the four consumers are A's pages; B consumes
the published API and never edits `Pipeline.ts`.

### 6.5 The order, and why it cannot be parallelised further

`0 -> 1 -> 2 -> 3`. Phase 1 must not start before the primitives accept the
variants (otherwise every page conversion re-invents a workaround). Phase 2 must
not run concurrently with Phase 1 because it edits three pages Phase 1 rewrites.
Phase 3 depends on `ZineSplit` (Phase 0) and on the sections Phase 1 restructured.

Total touched files: 14 deleted components, 10 new/changed components, 1
stylesheet, 1 library, 1 layout, 17 pages (3 deleted), 1 script, 1 skill.

### 6.6 How this maps onto the six cards already on the board

The board already carries six page-owner cards, all blocked on this plan. They
cover every page but **no card owns the shared layer**, and each of them says
"new shared components the plan's ownership table assigns to this card" - so the
assignment has to be made here or five workers will each hand-roll the
primitives (the exact failure this plan diagnoses). The mapping:

- **`t_b46e9094` (footer + navigation registry) also owns Phase 0.** It already
	 owns `Source/Layout/Base.astro` and `Source/Library/Links.ts`, which is the
	 same layer; add to it the component work of 6.1 (`ZineTape`, `ZineBox`,
	 `ZineStamp`, the nine new components, `Global.css` tokens, the 14 deletions).
	 It is the only card allowed to edit `Source/Component/Zine*.astro`,
	 `PageShell`, `PageHeader`, `SectionNav`, `ZineSplit`, `CopyButton`,
	 `ZineSource`, `ZineKicker` and `Source/Stylesheet/Global.css`.
- **The other five cards wait for it.** `t_20fe49b5` (showcase + landing + nine
	 small pages), `t_7bbf0d2a` (case-study + workbench), `t_132aacb2` (config +
	 examples), `t_4e62dc8a` (docs), `t_1a6fbef5` (presentation) all consume the
	 primitives. The board carries these as parent edges on `t_b46e9094`, so they
	 cannot start first.
- **Component ownership inside the page cards**: `Component/StudyLedger.astro`
	 goes to `t_20fe49b5` (its only two consumers, `index` and `benchmarks`, are
	 that card's); `Component/DocsSidebar.astro` goes to `t_4e62dc8a`.
- **The retirements are `t_20fe49b5`'s last step**, after `t_b46e9094` has
	 removed the three entries from `Links.ts`: that card owns `hooks`, `flavors`
	 and `crates`, so it is the card that folds them into `plugin`, `hermes` and
	 `versions` and deletes them. Do not polish a page that is about to be
	 deleted - fold it first.
- **`Source/Script/Pipeline.ts` + `Component/ZinePipeline.astro` (Phase 3)**
	 belong to `t_7bbf0d2a` (it owns `workbench`, which holds the simulation being
	 extracted); the other flow consumers (`index`, `case-study`, `showcase`,
	 `plugin`, `config`) consume its API and never edit it.

**Two corrections every one of those cards needs before it starts**, because
their bodies were written before this plan existed:

1. Their "Done when" says `pnpm run Drift` passes. **It does not pass and cannot
	 on this tree** - 97 checks, 17 pre-existing failures (0.4). The gate is "the
	 failure count does not rise above 17 and no failure name changes".
2. `t_20fe49b5`'s file list includes `hooks.astro`, `flavors.astro` and
	 `crates.astro`, which this plan retires (2.2). Its work on them is the fold
	 and the deletion, not a restructure.

---

## 7. Verification, per phase

No phase may claim done without these. **The Drift baseline is 17 failures**
(0.4) - the number may not rise, and the failure names may not change.

- **Phase 0** - `timeout 400 pnpm run Drift 2>&1 | tail -3` shows `97 checks run`
	and 17 failures; `curl -s localhost:9999/config/` renders the new components
	without a markup regression; the reachability pass reports 0 dead components
	(or 2, the owner decisions).
- **Phase 1** - per page: `curl -s localhost:9999/<route>/` and check (a) one
	`<main>`, (b) the `SectionNav` anchors resolve, (c) no `border border-black
	bg-` tape class left in the source, (d) the page's h1 is inside
	`PageHeader`. Then the class census: `text-base font-black uppercase
	tracking-widest` no longer appears in any `Source/pages/**`.
- **Phase 2** - `pnpm run Redirects` regenerates the map; `grep -c "/hooks/"
	Public/_redirects` is non-zero and points at `/plugin/`; the built page count
	drops by exactly three from its current value (read the real number off the
	build - `TRACKING.md` §5 says 63, which is stale against the 64 in
	`site-development`'s payload baseline, so trust neither and count);
	`grep -rn '"/crates/"\|"/flavors/"\|"/hooks/"' Source/` returns nothing.
- **Phase 3** - each new flow works with JavaScript disabled in its static
	 form (the deck's own law: "the route renders every beat at build time"), and
	with JS the toggle/rail changes state on `astro:page-load` (the rebind
	pattern), not only on first paint.
- **Never** - no phase commits. The user commits. `git status` stays dirty.

### How each measured claim in this plan can be re-probed

- Class counts: `python3 dup_census2.py` over `Source/**/*.astro` (the census in
	0.1; the 103/80/222 figures are its `A|` and `B|` rows).
- Dead components: `python3 component_reach.py` (the import census).
- Paragraph lengths: `python3 prose_pass.py` (the >=3-sentence report).
- Outlines: `python3 outline.py` (heading + line per route file).
- Footer/nav facts: `curl -s localhost:9999/ | grep -o '<footer.*</footer>'`
	then count `<a `, `<nav`, `aria-label=`.
- Versions: `Source/Library/Versions.ts` readers, or the footer's own stamps.
- Drift baseline: `timeout 400 pnpm run Drift`.

---

## 8. Open owner decisions

Two, both about dead components named in a skill (1.12):

1. **`ZineSwatches`** (48 lines, cited at `site-development:243` as the token
	 mirror). Adopt it on a page (there is no palette page today) or delete it
	 and let `Global.css` be the sole token mirror - which requires patching that
	 line of the skill in the same change.
2. **`ZineCopyChip`** (38 lines, cited at `site-development:248`). The two COPY
	 CTAs are a different shape (D11), so this is either "adopt on a page that
	 shows a marker to copy" (tools, showcase) or "delete + patch the citation".

Everything else in this plan is a decision already made here, with its evidence.
