---
name: prose-voice
description: THE layer model, the two page-level rules and the three voice laws for every prose surface on the Aphrodite site and in the docs source tree - the six content layers (headline, lead, demonstration, caption, detail, source) with the one job each block does, the two rules that bind every layer (the subject is the software and never the page; anchor to the baseline the reader already runs, then show the delta in that order), the three laws re-scoped to the DETAIL layer (the BECAUSE rationale, the ACTIVE-INTEGRATION framing, the PAST-TENSE observed voice), the tense each content type takes, the placement rule for rationale, and the anti-patterns the audit found. Load before writing or editing any prose paragraph, caption or figcaption on the site or in docs/.
whenToUse: Mandatory before adding or editing any prose paragraph, caption, figcaption or docs markdown narrative on the Aphrodite site (Source/pages/**, Source/Content/Docs/** via ../docs/**). If you are about to write or split a block, name its layer first - headline, lead, demonstration, caption, detail or source - and apply that layer's job and tense. If the sentence's grammatical subject would be the page, the pane, the grid or the widget rather than the product, STOP and apply Rule 1. If the page is about to open with our own mechanism, STOP and apply Rule 2 first. If you are about to write a sentence that describes what the system does to content in the Hermes turn, STOP and apply the three laws first. It is a DETAIL sentence.
---

> Specialized working copy (repo): original to the Aphrodite site (born from
> the WHY-PROSE / voice-consistency batch, 2026-10: the three-law prose voice
> pass over the 15 routes and the docs source tree). Re-scoped to the layer
> model: the three laws still govern technical accuracy, but they govern the
> DETAIL layer rather than every sentence on a page. No DeepSeek counterpart.
> This is the specialized truth for this site's sessions.

# Prose Voice - the layer model

A page is built from six layers. A layer is a JOB, not a length: the block
boundary on a page is the layer boundary, and inside a layer the sentence count
follows the job that layer does. The three voice laws - the BECAUSE rationale,
the ACTIVE-INTEGRATION framing, the PAST-TENSE observed voice - are the rules
of the DETAIL layer. They are not rules of every sentence, because a lead that
names `the hook` before the reader knows what Aphrodite is has introduced an
implementation actor before the reader needed one, and a caption that explains
the mechanism has taken the detail layer's job into the figure's voice.

## 1. The six layers

**headline** - one short statement. The page's claim (the `<h1>`,
`.type-display`, one per page) or the section's claim (the `<h2>`,
`.type-section`). One sentence, no mechanism, no qualifier. It is not a label: a
label is the `section-kicker` above it or the `ZineTape` beside it, and a
headline that only names its section has spent the page's largest type on a
table of contents.

**lead** - one or two sentences establishing the subject. It tells the reader
what they are looking at and why it matters, in the reader's terms. One or two
sentences; a third sentence is a detail that has not been moved down yet.
`PageHeader` takes the lead as an array (`Lead: string[]`), one entry per
sentence, so the lead is the one layer whose sentence count is visible in a
component's props.

**demonstration** - one focused example. The stream/preview pair, the fold, the
code plate, the figure, the interactive demo: it shows the product doing the
thing before anything explains how. It carries no prose of its own beyond its
own labels - its words live in the caption - and it comes BEFORE the detail,
because a reader who has watched the flood pays attention to the mechanism while
a reader who has only read about the flood does not.

**caption** - one or two sentences on what to notice. It points at the one thing
in the demonstration worth seeing, and at the one number that proves it when
there is one. One or two sentences, in the tense the demonstration's content
type takes (§3). It does not re-explain the mechanism - that is the detail
layer - and it does not describe the layout, because nothing on the page needs
an usher.

**detail** - mechanism and rationale, as long as necessary, separately. This is
the layer the three laws govern (§2). Two to six sentences in a block, and a
genuinely intricate mechanism may run to several blocks; the length is the
mechanism's, never the page's. It sits after the demonstration, or inside a
`ZineFold` / `<details>` under it when a reader can proceed without it.

**source** - quiet, precise links. What lets the reader check the claim: SRC
citation lines, the `docs/` page a paragraph came from, the command whose output
a figure renders. Quiet type (`.type-meta`, `.type-caption`, zinc-dust),
byte-exact, never reworded.

**Telling them apart.** Ask what the sentence does for the reader: establishes
the subject (lead), shows it (demonstration), points at what to notice
(caption), explains how and why (detail), lets them check it (source), or IS the
claim (headline). One block, one job. A sentence that does two jobs is split -
the SENTENCE, not the paragraph. The layer decides the block; a block serving
two layers has no weight of its own, which is the flattening this skill exists
to stop.

**The line-breaking half.** The DeepSeek double-newline treatment - each
sentence or sentence group its own block, no multi-sentence run in one
paragraph - lives in `site-development` SKILL.md ("THE PROSE BREAKDOWN"), and
its mechanics are unchanged: source lines break at clause boundaries, the words
stay byte-identical, and a quoted string, `<code>` content, SRC line, table row
or mermaid line is never rewrapped. What this skill governs is WHICH blocks
exist. The detail layer keeps the one-sentence-per-block rhythm, because it is
the layer that runs long; a lead or a caption is ONE block of one or two
sentences, and splitting it into two blocks is the flattening. A voice edit and
a breakdown edit must never fight over the same paragraph: apply the voice
first, then the line breaking, both byte-preserving.

## 1b. The two rules that bind every layer

The layer model decides what a block does. Two rules decide what it is ABOUT,
and they hold in all six layers. Both are owner-mandated (2026-11). The second
is the reason a page can be structurally perfect and still unreadable.

**Rule 1 - the subject is the software, never the page.** Every sentence's
grammatical subject is the product, the reader's system, or the reader's own
situation: the model, the agent, the tool, the stored bytes, the session. Never
the page, the pane, the grid, the replay, the widget, the tab. A site whose prose
explains its own interface reads as a demo of a demo.

Banned vocabulary, greppable: `this page`, `the page below`, `the pane`,
`watch the`, `as you read`, `read it as`, `you will see`, `on this screen`,
`nothing on this page is typed`, `the entry marked in`, `edit it there, never
here`, `the grid left to right`, `this demo`, `this widget`, `the replay`.

Bare deixis - `above`, `below`, `scroll`, `click` - is the same defect in one
word, because it points at the furniture. Two exceptions, both narrow: keep
`below`/`above` where they relate VALUES ("compresses above 1 KB", "below the
4,096-character gate", "a ratio above 20"), because there they name a threshold
and not a position; and keep `scroll` where it is the software's own word for
what the model does to a raw log ("scrolling... error? no..."). A threshold
relation and an interface position are different claims in the same word.

Two shapes to convert. **Interface narration** - "Watch the left pane print:
that is the flood arriving" - becomes the software fact it stands in for: "Each
line a command prints is a line the agent would have paid for." **Trust asserted
in prose** - "it is never a lie" - becomes the mechanism that makes it true:
"The preview is computed from the bytes received so far, and the marker
addresses exactly those bytes."

**Rule 2 - anchor to the baseline the reader already runs, then show the
delta.** The reader already operates a system: a tool call executes, its output
is appended to the model's context, and that raw text is what the model reads
and pays for. That is the baseline. Every explanation starts there, in the
reader's words, and then states what Aphrodite changes IN THAT ORDER: what the
tool prints -> what the model sees -> what it costs -> what it can ask for.

Never open with the internal architecture. "Classify, enrich, store, mark,
retrieve" is a tour of our modules; it answers a question the reader has not
asked, and the question they do have is what changes for them compared with the
tool call they already have.

Same facts, reordered:

- **Pipeline-first (wrong)** - "Aphrodite classifies the content, renders a
  type-aware preview, stores the original under a blake3 address, and replaces
  the result with a marker."
- **Baseline-first (right)** - "When a tool runs in Hermes, its output is
  appended to the model's context - a release build adds four thousand lines the
  model reads, and pays for, before it can answer. Aphrodite intercepts that
  result: the model receives one line naming the content and counting what is in
  it, the four thousand lines are stored, and one retrieval call brings them back
  when the preview is not enough."

The rules that follow, and a writer will otherwise write the tour it knows best:
name the baseline explicitly at least once per page; then the delta sentence by
sentence in the baseline's order; use the reader's words (tool call, tool
result, context window, the model, the agent, retrieval, the session) and let
mechanism nouns (`blake3`, dual tier, marker, classify) appear only AFTER the
baseline sentence and only where the reader must act on them; a mechanism
section may stay, introduced as "what happens between the tool printing and the
model reading"; keep the subject concrete (the model, the agent, the tool, the
stored bytes), never "the pipeline decides" or "the system handles"; present
tense for what the software does, past for what a recorded session did (§3).

**The one sanctioned exception to never-reduce-copy, and its boundary.** A
sentence may be rewritten or dropped only when its subject is the website
itself. Every fact it carried must survive as a statement about the product;
claims, numbers, units, limits and qualifications are untouched; and a paragraph
left with no product claim is merged into its neighbour rather than shortened.
The sweep must produce a mapping - removed sentence -> the product statement
that replaces it - so a preservation audit can see that nothing factual went
missing. State the exception wherever these rules are handed to a writer: one
holding both "never reduce" and "delete the narration" resolves the
contradiction by guessing, and half of them guess deletion.

## 2. The three laws (the detail layer's laws)

Three laws, applied together, to every DETAIL block that narrates what the
system does. User-mandated 2026-10, from the live feedback: "we need better
wording everywhere describing 'Aphrodite does this because...'"; "text overall
on the page needs to explain what the behavior does, not what the behavior
encountered"; "prefer past tense, was were, encountered, rather than is".

1. **THE BECAUSE RATIONALE** - a mechanism sentence states why it exists in the
   same breath as what it does ("Aphrodite hashed the ORIGINAL content because
   retrieval must be byte-exact"). The rationale comes ONLY from the repo's own
   sources: README.md, docs/, CHANGELOG.md, the release notes. A detail block - a
   mechanism paragraph - whose why is not in the sources is FLAGGED, never
   written with an invented reason.
2. **THE ACTIVE-INTEGRATION FRAMING** - Aphrodite (or its named component: the
   hook, the classifier, the CCR engine, the proxy, the injection assembler) is
   the ACTING SUBJECT inside the Hermes turn. Passive observer phrasing is
   rewritten: "the output gets compressed" becomes "Aphrodite compressed the
   output into a marker"; "markers appear" becomes "the hook inserted the
   markers".
3. **THE PAST-TENSE OBSERVED VOICE** - transient mechanics read as what was done
   in the system's operation (in a detail block): "was compressed", "was
   intercepted", "was hashed and stored", "was replaced with the marker".
   Present is/gets for a transient mechanic inside a detail block is a defect.

A lead, a caption or a headline may name the system and say what it is for
without satisfying any of the three - and it must, because the laws answer "how
did this happen and why", which is the question a reader asks third. What no
layer may do is state a mechanism with no source behind it: the truth law is not
a layer rule, it is a page rule.

## 3. Tense by content type

The page's content type sets the tense of its lead, headline and caption. The
detail layer's past tense (§2 law 3) then applies INSIDE any page, because a
detail block narrates a transient that happened in one turn while the page
describes a standing product.

- **Product overview / capability page** - present. "Aphrodite intercepts output
  before it reaches the LLM."
- **Recorded incident, study or benchmark run** - past. "The gate classified 41
  of 48 outputs as noise."
- **Interactive walkthrough** - present. "The counts climb while the flood
  arrives, and the marker's size grows with it." Present tense is about the
  demonstration's own state, never an invitation to describe the interface.
- **Installation and CLI steps** - imperative. "Run `pnpm run Prepare`."
- **Release note / changelog entry** - past. "The proxy stopped rewriting the
  marker prefix."

A page that mixes content types (an overview with a recorded incident inside it)
switches tense at the layer boundary, not inside a block: the incident's detail
block is past while the page's lead stays present.

## 4. Where the rationale lives

Rationale goes where understanding depends on it, never beside every sentence it
could justify.

- The lead carries none: the reader does not yet have the subject, so a because
  there answers a question nobody asked.
- The caption carries at most one, and only when the demonstration cannot be
  read without it.
- The detail layer carries the rationale, and a rationale that would slow the
  lead moves DOWN into the detail or into a `ZineFold` disclosure under the
  demonstration.
- A rationale is never stated twice. If the lead carries one, the detail says
  what happened and leaves the why where it was read; a page that repeats its
  because reads as unsure of it.
- A page with a because after every sentence reads as apologetic, and a reader
  stops weighing them - which is how a true reason gets the weight of a filler.

## 5. The anti-patterns (each with its reason)

1. **A sentence about the layout or about the illustration** ("Read the grid
   left to right"; "The pane below is not a screenshot of that idea"). Both spend
   a block on the interface instead of the product, and both go stale the moment
   the layout changes - the reader can already see the page, so an usher's
   sentence is a sentence not spent on a claim. Fix: apply Rule 1 (§1b) - move
   the observation into the caption as a claim about the content, or drop the
   negation and state what the figure IS.
2. **A first body sentence that restates the headline.** The headline already
   made the claim, so the restatement spends the reader's first block on nothing
   and pushes the demonstration down. Fix: the first body block is the lead -
   the subject and its stakes in the reader's terms - or the demonstration.
3. **A caption that re-explains the mechanism.** The figure already shows the
   mechanism, so explaining it in the caption's voice makes the reader meet it
   twice and makes the detail block read as repetition. Fix: the caption says
   what to notice; the mechanism sentence moves into the detail run.
4. **A run of equal-weight paragraphs** - five two-sentence blocks of identical
   size and colour. The reader gets no signal about which block is the claim,
   which is the demonstration and which is the explanation, so they read all of
   it at one speed and keep none of it. Fix: give each block its layer, and let
   the layer set its size.

Under this skill's standing rule, none of these is fixed by deleting the
sentence: each one is relocated to the layer that owns it, or demoted into a
disclosure, caption or `aria-describedby` description. Worked specimens of each,
with the before/after decomposition: `Reference/Layers.md`.

## 6. The exceptions (present tense is CORRECT here)

The past-tense law is about observed transients, not about grammar absolutism.
These stay present in any layer, and converting them would be a falsification:

- **Timeless invariants and design properties** - "the marker is the contract",
  "nothing is compressed, stored, or marked until the gate has named it", "the
  gate never halves the noise group", "content and hashes are never modified". A
  sentence with a never/always structure that states a standing rule is present.
- **Threshold/config/schema truths** - threshold tables, field tables, endpoint
  definitions, "the hash is computed from the content itself", "whether the
  output is compressed at all is decided by the thresholds".
- **Standing capabilities framed as design** - "the tax only gets paid when the
  preview fails to answer the question" (a standing conditional).
- **Interactive-demo UI copy** - button labels, step labels, live-simulation
  state descriptions; the demo's behavior is standing, not historical.
- **Quoted strings** - transcript quotes, ledger quotes, quoted data-array
  strings: BYTE-EXACT, never revoiced, whatever tense they use.
- **Imperative install steps** - docs install instructions stay imperative.

## 7. The byte-exact boundaries

Figures, benchmarks, timings, code blocks, `<code>` contents, TOML example lines,
`<<<CCR:...>>>` marker literals, SRC citation lines, links and table data cells
are NEVER reworded. A voice fix changes verb forms and actors in prose only; it
never reflows the paragraph.

## 8. The actors (use the named one)

The active subject of a detail block is the component the sources name: `the
hook` for the plugin transform/pre-tool-call paths, `the
classifier`/`the content-type detector` for typing, `the proxy` for HTTP-path
actions, `the injection assembler` for pre-LLM assembly, `Aphrodite` when the
sources speak of the system as a whole. Ground every actor in the cited doc
before using it.

A lead names the reader's subject - `Aphrodite`, `the site`, `your agent` - and
never an internal component, because the component is what the reader learns
from the detail layer and naming it first makes the lead an implementation note.

## 9. The source-side mirror

docs prose is edited in the SOURCE tree - `Module/Aphrodite/docs/`, the pinned
submodule - then mirrored with `pnpm run Docs` (48 pages into
`Source/Content/Docs/`). Never edit the generated copies alone: the next sync
clobbers the change, and the site's copy is not the source of anything.

A page the site carries that the module does not is not deleted to converge.
Push it UP into `PlayForm/Aphrodite` so it gains a source, or declare it under
`SiteOnly` in `Scripts/Prepare/Docs.ts` with the reason it exists. Generation
reports an undeclared page as an orphan and leaves it in place.

## 10. The arbiters

- `pnpm run Prepare` - regenerates `Source/Generated/` from `Module/Aphrodite`
  and prints every file it wrote plus the pin it read. A fact that no longer
  matches the repository is regenerated, not compared: there is no second copy
  to drift.
- The residual greps: `gets compressed|is replaced with|gets classified`
  across pages + generated docs - every remaining hit must be an
  exception-class sentence (§6) or a quoted string.
- The layer greps: `left to right|Watch the|pane below|is not a screenshot`
  across pages - every hit is a CANDIDATE anti-pattern (§5), never a verdict;
  read the block and name its layer before touching it. A grep cannot tell a
  relocated claim from a deleted one.
- NO full build as the routine arbiter for a voice-only pass (the fast guards
  cover the prose surfaces); run the build only when structure or components
  changed.

## Claim → test

| Claim | Test |
| --- | --- |
| A block belongs to one layer | name the layer's job for that block; a block that answers two jobs is two blocks |
| The detail layer still governs technical accuracy | in each detail block, find the named acting component and its because; a mechanism sentence with neither is a defect |
| A page's tense matches its content type | read the lead and the detail separately; the lead follows §3, a transient inside a detail block is past |
| A caption describes what to notice, not the layout | the caption names no interface position ("left", "below", "right pane") and no mechanism |
| The headline is not restated in the first body block | read the headline and the first block; a block that adds no fact is the restatement of §5 item 2 |
| A layer pass deleted nothing | diff the block set against the baseline and read every missing sentence against the new tree - relocated counts as kept, truncated does not |
| Quoted strings, code, markers and figures are byte-exact | diff them; a voice pass changes verbs and actors only |
| The docs mirror was edited upstream | re-run `pnpm run Docs` and confirm no diff in `Source/Content/Docs/` for the page |
| A residual grep hit is an exception | classify each hit against §6; a hit that is not an exception is a defect |
| A demonstration precedes its explanation | read the section top to bottom; the figure appears before the first block that explains how it works |
| No sentence's subject is the page | run the §1b banned list over the pages with comments, `<style>` and `<script>` masked out; read every hit - a hit whose sentence is about the interface is a defect, and a `below`/`above` that relates two values is not |
| A page explains the product against the reader's system | read the lead: the baseline (tool call -> output -> model's context) appears before or beside the mechanism, and no sentence's subject is an internal stage |
| A narration sweep lost no fact | the sweep's mapping lists every removed sentence against the product statement that carries its content; a removed sentence with no replacement line is a loss |
