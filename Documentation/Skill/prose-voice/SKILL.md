> Specialized working copy (repo): original to the Aphrodite site (born from
> the WHY-PROSE / voice-consistency batch, 2026-10: the three-law prose voice
> pass over the 15 routes and the docs source tree).
> No DeepSeek counterpart. This is the specialized truth for this site's
> sessions.
---
name: prose-voice
description: THE three voice laws for every prose paragraph on the Aphrodite site and in the docs source tree - (a) the BECAUSE rationale (a mechanism sentence states why it exists, grounded in the repo's own sources, never an invented reason), (b) the ACTIVE-INTEGRATION framing (Aphrodite or its named component is the acting subject inside the Hermes turn - never the passive observer), and (c) the PAST-TENSE observed voice (transient mechanics read as what was done - never present is/gets - while timeless invariants, threshold tables, schema truths and demo UI copy stay present). Load before writing or editing any prose paragraph, caption or figcaption on the site or in docs/.
whenToUse: Mandatory before adding or editing any prose paragraph, caption, figcaption or docs markdown narrative on the Aphrodite site (Source/pages/**, Source/Content/Docs/** via ../docs/**). If you are about to write a sentence that describes what the system does to content in the Hermes turn, STOP and apply the three laws first.
---

# Prose Voice - Operating Manual

Three laws, applied together, to every paragraph that narrates what the
system does. User-mandated 2026-10, from the live feedback: "we need better
wording everywhere describing 'Aphrodite does this because...'"; "text
overall on the page needs to explain what the behavior does, not what the
behavior encountered"; "prefer past tense, was were, encountered, rather
than is".

## 1. The three laws

1. **THE BECAUSE RATIONALE** - a mechanism sentence states why it exists in
   the same breath as what it does ("Aphrodite hashed the ORIGINAL content
   because retrieval must be byte-exact"). The rationale comes ONLY from the
   repo's own sources: README.md, docs/, CHANGELOG.md, the release notes. A
   paragraph whose why is not in the sources is FLAGGED, never written with
   an invented reason.
2. **THE ACTIVE-INTEGRATION FRAMING** - Aphrodite (or its named component:
   the hook, the classifier, the CCR engine, the proxy, the injection
   assembler) is the ACTING SUBJECT inside the Hermes turn. Passive
   observer phrasing is rewritten: "the output gets compressed" becomes
   "Aphrodite compressed the output into a marker"; "markers appear"
   becomes "the hook inserted the markers".
3. **THE PAST-TENSE OBSERVED VOICE** - transient mechanics read as what was
   done in the system's operation: "was compressed", "was intercepted",
   "was hashed and stored", "was replaced with the marker". Present
   is/gets for a transient mechanic is a defect.

## 2. The exceptions (present tense is CORRECT here)

The law is about observed transients, not about grammar absolutism. These
stay present, and converting them would be a falsification:

- **Timeless invariants and design properties** - "the marker is the
  contract", "nothing is compressed, stored, or marked until the gate has
  named it", "the gate never halves the noise group", "content and hashes
  are never modified". A sentence with a never/always structure that states
  a standing rule is present.
- **Threshold/config/schema truths** - threshold tables, field tables,
  endpoint definitions, "the hash is computed from the content itself",
  "whether the output is compressed at all is decided by the thresholds".
- **Standing capabilities framed as design** - "the tax only gets paid when
  the preview fails to answer the question" (a standing conditional).
- **Interactive-demo UI copy** - button labels, step labels, live-simulation
  state descriptions; the demo's behavior is standing, not historical.
- **Quoted strings** - transcript quotes, ledger quotes, quoted data-array
  strings: BYTE-EXACT, never revoiced, whatever tense they use.
- **Imperative install steps** - docs install instructions stay imperative.

## 3. The byte-exact boundaries

Figures, benchmarks, timings, code blocks, `<code>` contents, TOML example
lines, `<<<CCR:...>>>` marker literals, SRC citation lines, links and table
data cells are NEVER reworded. A voice fix changes verb forms and actors in
prose only; it never reflows the paragraph.

## 4. The actors (use the named one)

The active subject is the component the sources name: `the hook` for the
plugin transform/pre-tool-call paths, `the classifier`/`the content-type
detector` for typing, `the proxy` for HTTP-path actions, `the injection
assembler` for pre-LLM assembly, `Aphrodite` when the sources speak of the
system as a whole. Ground every actor in the cited doc before using it.

## 5. The source-side mirror

docs prose is edited in the SOURCE tree (`../docs/`, next to the Site), then
mirrored with `pnpm run Docs` (48 pages into `Source/Content/Docs/`). Never
edit the generated copies alone - the next sync would clobber the change.

## 6. The arbiters

- `pnpm run Drift` - all content-integrity checks PASS (the count is
  dynamic; 97 at the time of writing). The printed tail is the truth.
- The residual greps: `gets compressed|is replaced with|gets classified`
  across pages + generated docs - every remaining hit must be an
  exception-class sentence (§2) or a quoted string.
- NO full build as the routine arbiter for a voice-only pass (the fast
  guards cover the prose surfaces); run the build only when structure or
  components changed.
