# Aphrodite Site - The Tracking Ledger

The single tracking file for the Aphrodite site batch: EVERY user feedback /
requirement, the agent progress, and the pending delegations. Updated by the
orchestrator (the main agent) as the batch moves. The user commits; the agents
never commit. The lanes are GLM 5.3 Flash low, launched IDLE, activated 2 at a
time. The arbiter: `cd Site && pnpm prepublishOnly` (63 pages) + `pnpm run
Drift` (all PASS - the count is dynamic). Some lanes error with RATE LIMITED
(API throttling) - they are retried / restarted with the fresh state; mark
their statuses below as they change.

---

## 1. THE FEEDBACK LEDGER (every item, in arrival order)

Status marks: ✅ LANDED + verified · 🔵 IN FLIGHT (lane) · ⚪ SEATED - PENDING
(lane) · ❌ ERRORING (lane) · ⛔ USER DECISION (blocked on the user).

1. ✅ The build repair (PostCSS ESM interop, the aliases, install, prepublish).
2. ✅ The functionality adoption from DeepSeek/Site (no UI elements).
3. ✅ The Reference/Stitch design adopted fully (the zine grammar).
4. ✅ The plugin functionality showcase + the Hermes docs implementation.
5. ✅ The ~/.hermes sessions as ANONYMIZED examples (the 19-example bank).
6. ✅ 10-20 more agents launched (the sweep wave: 25 + the feedback lanes).
7. ✅ The functionality history + the GitHub releases implemented into the
   design (the timeline tape, the history spine, the evolution, the sim notes).
8. ✅ The tree/Current deep-link law everywhere (the registry composition).
9. ✅ /flavors APPROVED (nav + cross-links).
10. ✅ /docs "very empty and unstyled" -> the full docs shell (sidebar,
    breadcrumbs, prev/next, prose styling, the diagram embeds).
11. ✅ More vertical whitespace, proportional (the rhythm family).
12. ✅ The menu was mobile on desktop -> the lg/xl split nav.
13. ✅ HUGE vertical whitespace + the z-index discipline (the escalation).
14. ✅ Less UML focus -> the interactive flow diagrams (ZineFlow) + the
    UI-system explanation components (ZineAnatomy/Swatches/Compose).
15. ✅ The /docs sidebar badge hidden under the box -> the overflow-clip fix.
16. ✅ The homepage logo higher + the larger logo-wordmark gap.
17. ✅ Text larger everywhere - no text-sm/text-xs (the 16px floor, 44 files).
18. ✅ The mobile menu: larger, grid-ordered, tree layout (PRIMARY/MORE).
19. 🔵 The UML diagram text too small + ALL left-to-right (RESID-POLISH).
20. 🔵 The missing SVGs - the 27 docs mermaid blocks -> rendered figures
    (RESID-POLISH).
21. ✅ The "THE PAIR" badge conflicting with "[[PROXIES]]..." -> the ZineTape
    -top-7 component fix + the site-wide clearance re-check.
22. 🔵 The large paragraphs -> the double-newline short-line treatment
    (PROSE-RHYTHM).
23. ⚪ The Hermes store install method + the guide link (STORE-INSTALL).
24. ✅ The docs headings conflicting with the breadcrumb line -> the clearance
    fix.
25. ⚪ "Aphrodite does this because..." the rationale-voice rewrites everywhere
    (WHY-PROSE).
26. ⚪ The study block needs better formatting/coloring/structure/links
    (STUDY-MODULE).
27. ⚪ The WIP/PENDING marks in the sidebar for the unwired docs (WIP-MARKS).
28. 🔵 All the file mentions (aphrodite.toml.example, Cargo.toml...) -> the
    tree/Current links, style unchanged + the hover underline (FILE-LINKS).
29. ✅ The trade-off text -> the three-configuration benefits comparison with
    the A2A scenario (TRADE-OFFS).
30. ✅ The ENDPOINT tables not full width -> the display:table +
    table-layout:fixed repair.
31. ✅ The 4-grid squish ("STAGE // B 02 // ENRICH") -> the 2x2 grids.
32. ⚪ The "// RETRO_PROOF #001" smaller + the kiss as a background-free SVG,
    scaled up (HERO-KISS).
33. ⚪ The CCR markers overflowing their text boxes -> the wrap repair
    (MARKER-WRAP).
34. ⚪ The four LAYER cards -> the 2x2 grid (LAYERS-2X2).
35. 🔵 The keyword labels - the black chip with white text underneath, the
    DeepSeek "RAW"-style (PROSE-RHYTHM, amended).
36. ⚪ The command text ("CARGO RUN --RELEASE...") -> the shiki sh codefences
    (CMD-FENCES).
37. 🔵 All the SRC: citations -> the tree/Current links + the line fragments
    (FILE-LINKS, amended).
38. ⚪ CASE STUDY always visible in the menu (NAV-CASE-STUDY).
39. ✅ THIS tracking file (Site/Documentation/TRACKING.md).
40. ✅ The Cloudflare deploy repair (the .ts execution + the hermetic docs
    fallback + the pnpm-workspace.yaml allowBuilds + the Drift skip guard).
41. ⛔ The prod site URL (the sitemap + the absolute OG URLs) - USER.
42. ⛔ NODE_VERSION=24 on the Pages project - USER.
43. ⛔ The promql fences decision (vendored grammar or retag) - USER.
44. ⛔ The AA trade-offs (raw-blood/teal small text - the grammar voice) - USER.
45. ⛔ The README-vs-CHANGELOG latency figures (8-40 vs 9-40 ms) - USER.
46. ⛔ The BINARY_VERSION 1.6.4 vs 1.6.6 note - USER.
47. ⛔ The Drift chaining into prepublishOnly (landed + hermetic-skipped on the
    standalone deploy) - ratified.
48. ⛔ The workbench empty data-copy="" bug + the setup/versions copy buttons
    (design addition) - USER/owner.
49. ⛔ The rounded-full perforation dots (versions) - USER.
50. ⛔ The ZineDiagram dead component removal - USER.

## 2. THE AGENT ROSTER (the progress)

### The closed lanes (reported + verified)
FIX-1 · RESEARCH-1/2/3/4 · SITE-CORE · DOCS-PIPELINE · DOCS-LINKS · SCRIPTS ·
VERIFY · ASCII-MODEL · PLANNER · HERMES-PAGES · WORKBENCH · CASE-STUDY ·
SPACING-RHYTHM · DRIFT-ALIGN · RHYTHM-2 · SHOWCASE-PAGES · SHOWCASE-RESEARCH ·
EXAMPLES-PAGES (confessed + stood down) · EXAMPLES-2 · SITE-STRUCTURE ·
DOCS-STYLE · FLAVORS-NAV · ADVANCED-STYLES · CONFIG-PLAYGROUND · A11Y-PERF ·
HISTORY-INCORPORATE · MEDIA-SOCIAL · REVIEW-2 · HOME-CLEANUP · DEPLOY-FIX
(rounds 1+2) · VERSIONS-DYNAMIC · DOCS-HIGHLIGHT · CODE-LINKS (main) ·
TRADE-OFFS · CONSIST-NUMBERS/COPY/LINKS/ARTIFACTS/DESIGN · FUNC-PLUGIN/
SHOWCASE/DOCS/CORE/LANDING · DEEP-DEPLOY · the bank/corpus fixes.

### 🔵 ACTIVE (currently working)
- FILE-LINKS (the file mentions + the SRC-citation links).
- PROSE-RHYTHM (the paragraph breakdowns + the keyword labels).
- RESID-POLISH (the diagram LR + 16px + the 27 docs mermaid SVGs + the mounts
  + the label noise + the navigation + the 320px clip).

### ⚪ SEATED - IDLE (retained specs, awaiting activation)
HERO-KISS · STORE-INSTALL · WHY-PROSE · STUDY-MODULE · WIP-MARKS · NAV-CASE-
STUDY · MARKER-WRAP · LAYERS-2X2 · CMD-FENCES · DEEP-HTML · DEEP-RELEASES ·
DEEP-PERF · DEEP-SANITIZE (re-check) · FINAL-FEEDBACK · FINAL-VISUAL ·
FINAL-A11Y · FINAL-DEPLOY · FINAL-VERDICT.

### ❌ ERRORING / RATE LIMITED
The GLM flash lane (cloudflare-workers-ai) throttles under the concurrent
load. The affected lanes get RESTART + CONTINUE with the fresh state (the
state-first report + the completed-mandate pattern). The 2-at-a-time cadence
is the mitigation. Status updates land in this ledger as they resolve.

## 3. THE PENDING DELEGATIONS (the queue, in activation order)

1. RESID-POLISH + PROSE-RHYTHM (ACTIVE - the UML trio + the paragraphs).
2. NAV-CASE-STUDY + MARKER-WRAP (the always-visible CASE STUDY + the marker
   overflow).
3. LAYERS-2X2 + CMD-FENCES (the 2x2 layers + the shiki sh fences).
4. HERO-KISS + STORE-INSTALL (the polaroid + the store install).
5. WHY-PROSE + STUDY-MODULE (the because-voice + the study block).
6. WIP-MARKS + DEEP-HTML (the PENDING marks + the HTML/metadata sweep).
7. DEEP-RELEASES + DEEP-PERF (the release claims + the performance ledger).
8. DEEP-SANITIZE (re-check) + FINAL-FEEDBACK (the deep sweep + the feedback
   compliance).
9. FINAL-VISUAL + FINAL-A11Y (the structure + the AA package).
10. FINAL-DEPLOY + FINAL-VERDICT (the deploy package + the publish verdict).

## 4. THE ARBITERS (the current facts)

- `pnpm prepublishOnly` -> 63 pages built, Complete.
- `pnpm run Drift` -> all checks PASS (the count is dynamic: 62-63).
- The deploy path is hermetic: the Docs fallback + the Drift skip + the
  allowBuilds + the committed 48 docs pages.

## 5. THE STANDING DECISIONS (the user's)

- The lanes are GLM 5.3 Flash low, launched IDLE, activated 2 at a time.
- The user commits; the agents never commit.
- The zine grammar binds (radius 0, the hard shadows, the 16px floor, dark-only).
- The site is PUBLIC: the sanitization law holds (no personal info, no keys,
  no session ids, no user-home paths).