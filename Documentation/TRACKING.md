# Aphrodite Site - The Tracking Ledger

The single tracking file for the Aphrodite site batch: EACH AND EVERY user
requirement + feedback item, the agent progress, and the pending delegations.
Updated by the orchestrator as the batch moves. The user commits; the agents
never commit. The lanes are GLM 5.3 Flash low, launched IDLE, activated 2 at a
time. The arbiter: `cd Site && pnpm prepublishOnly` (63 pages) + `pnpm run
Drift` (all PASS - the count is dynamic). Some lanes error with RATE LIMITED -
they are restarted with the fresh state.

---

## 1. THE REQUIREMENTS LEDGER (each directive, its own item)

Status: ✅ landed · 🔵 in flight · ⚪ seated-pending · ⛔ user decision.

R1. ✅ FIX THE BUILD (the shown failure): the PostCSS ESM interop, the
    ignored-builds/allowBuilds, the prepublish arbiter.
R2. ✅ Launch an IDLE agent for the website.
R3. ✅ Load your skills (the session skill catalog + ~/.dsh/skills).
R4. ✅ Adopt the same functionality (yet NO UI elements) from DeepSeek/Site +
    the Documentation there, for the website creation here.
R5. ✅ The fix-handling agent: preferably a low-effort GLM 5.3 per the routing
    skill (exploration or coder strains).
R6. ✅ Agents stay HALTED until activated - stack 5-6 at a time.
R7. ✅ Keep only 2 actively working at a time.
R8. ✅ Activate on feedback - the user's, the agents', relayed.
R9. ✅ I don't have to write code - research (possibly through a halted agent)
    + dispatch tasks to the subagents only.
R10. ✅ All requirements can be planned ahead or given to a planning agent.
R11. ✅ I am only the orchestrator + dispatcher - always do things with agents,
     never manually.
R12. ✅ Launch IDLE agents with the most comprehensive instructions; they
     figure it out + report back.
R13. ✅ Implement the Site/Reference/Stitch design example FULLY (through
     subagents).
R14. ✅ Also the previous examples of how we did the same in DeepSeek/Site.
R15. ✅ Adapt each and every document + code piece + research on Aphrodite +
     Hermes for Aphrodite.
R16. ✅ The specific flavor which only works currently (Hermes) - the plan to
     release Aphrodite to other agents.
R17. ✅ Analyse ALL of the possible uses + pages you can generate.
R18. ✅ Adopt the Reference design fully + the recommendations of how the
     other designs in DeepSeek/Site work.
R19. ✅ Step over step - many steps - research + execution over all the
     functionality we have.
R20. ✅ Don't stop until everything from Aphrodite's source + Aphrodite-Hermes
     is implemented into the website.
R21. ✅ You can launch as many agents as you'd like - mostly GLM 5.3 flash low,
     even for coding is enough.
R22. ✅ Borrow heavily the code style (not the layout/design style) +
     utilities from DeepSeek/Site.
R23. ✅ We'll monitor your progress; you have failovers implemented - task
     around the agents.
R24. ✅ Do not do executions or research yourself - always prompt (IDLE) an
     agent with the most comprehensive instructions.
R25. ✅ You'll be receiving messages on how to perform better.
R26. ✅ Borrow the designs from Reference/Stitch + adapt new ways to express
     them in various forms - to fit all documentation + usage scenarios +
     the plugin showcases.
R27. ✅ Find more ways to contribute to the website's design - shift its
     elements in different style layouts + pages.
R28. ✅ The unexplainable must become effortless to understand + easy to
     forget once you know the secret sauce of how Aphrodite is made + operates.
R29. ✅ Agents can (your agents can) inspect ~/.hermes + its session logs.
R30. ✅ Try not to reveal personal information or leak sensitive information -
     the website is on a publicly visible stream.
R31. ✅ Don't open external applications - focus on code edits + research.
R32. ✅ Many pages all working together nicely + links + SVG graphs +
     interactive elements + log output.
R33. ✅ If you stumble a functionality, model it out in ASCII (a subagent
     should do that), then apply the design style + the recommendations from
     the previous website.
R34. ✅ Launch 5 batches of 5 IDLEs - all functionality, all inconsistencies,
     all paused agents.
R35. ✅ All through IDLEs.
R36. ✅ They still need to be IDLE ones, not fully launched - you monitor and
     launch separately, 2 at a time.
R37. ✅ Have the ability to spawn 50 or more at a time - so as not to exhaust
     the backpressure fluidity (maxActiveSubagents: 50).
R38. ✅ Keep a file close by in Site/Documentation with absolutely every
     single feedback/requirement + agent progress + pending delegations - to
     track (some agents erroring - rate limited).
R39. ⚪ Copy over the skills from
     ~/Developer/Application/PlayForm/DeepSeek/Documentation - same layout +
     skills adapted for Aphrodite/Site - and load them ALWAYS to the
     sub-agents (SKILLS-ADAPT).
R40. ✅ After the current pairs, restart the previously halted ones with the
     new state + improvements.
R41. ✅ Are they even loading the skills? (the verified + the fixed - the
     project-local tree).
R42. ✅ EACH AND EVERY feedback: item - this ledger.
R43. ✅ Dedicate an agent to fix the remote Cloudflare failure.
R44. ✅ Monitor + report: progress + what's left + any agents erroring.
R45. ✅ The subagents are all GLM 5.3 flash low (the routing verified).
R46. ⛔ Publish: the prod site URL (the sitemap + the absolute OG URLs);
     NODE_VERSION=24 on the Pages project.

## 2. THE FEEDBACK LEDGER (each item, in arrival order)

F1.  ✅ More vertical whitespace between elements (any kind of structure) +
     combinations - more but proportional.
F2.  ✅ The menu is mobile even on desktop.
F3.  ✅ All spacing between the hero elements (the tagline, the stat badges,
     the stamp chips) - increased by a lot.
F4.  ✅ All spacing in the PIPELINE 4-STAGE section - increased by a lot.
F5.  ✅ The z-index corrected (the tape stamps above the borders, the
     rotations stack).
F6.  ✅ Every and each element like this throughout the website - corrected,
     HUGE vertical whitespace.
F7.  ✅ The badge at the top of the /docs sidebar is hiding underneath the
     box - needs overflow + to rise above it + z-index.
F8.  ✅ Check all other elements like it (the overflow-clipping audit).
F9.  ✅ The homepage logo needs to be more to the top.
F10. ✅ Larger padding - the distance from the APHRODITE text.
F11. ✅ Don't focus so much on UMLs - more focus on how to explain the
     integrated parts of the design into the UI system.
F12. ✅ Develop additional UI elements.
F13. ✅ Interactive flow diagrams.
F14. 🔵 The UML diagram's text is too small on the workbench + other pages
     (RESID-POLISH).
F15. 🔵 Make all of the UMLs LEFT to RIGHT (RESID-POLISH).
F16. 🔵 A lot of the UMLs we have are missing SVGs (RESID-POLISH - the 27
     docs mermaid blocks).
F17. ✅ Check extensively (the SVG inventory verified).
F18. ✅ The /docs/centers + others: the syntax highlighting not applied - the
     Rust highlight is missing - check all extensively throughout the website
     (DOCS-HIGHLIGHT).
F19. ✅ The "THE PAIR" text badge on /config/ conflicting with the text
     underneath.
F20. ✅ (clarified) The "THE PAIR" badge vs the "[[PROXIES]] - CACHE :9797 +
     TOKEN :9798" header line (the ZineTape -top-7 component fix).
F21. 🔵 Large paragraphs of sentences need new lines - the same double
     newline treatment as DeepSeek/Site (PROSE-RHYTHM).
F22. ✅ The v1.3.4 version numbers + all placements + links - the same
     DYNAMIC treatment as DeepSeek/Site (VERSIONS-DYNAMIC).
F23. ✅ The "ENDPOINT: METHOD, PATH, ACCESS, AUTH" table + others not full
     width due to border collapse - the tbody needs to span (the table-span
     repair).
F24. ✅ The typography responsive to the screen - the 4 grid items on the
     home page + others have breaking text ("STAGE // B 02 // ENRICH") -
     break up the grid to 2x2.
F25. ✅ Aphrodite published on the Hermes store - add this to the install
     methods (the guide URL) (STORE-INSTALL, seated - the research gate).
F26. ✅ The "Overview Aphrodite Documentation" + other page headings need to
     be placed further down - higher padding on top - the conflict with the
     breadcrumbs' horizontal line (the docs heading clearance).
F27. ⚪ Better wording everywhere describing "Aphrodite does this because..." -
     almost all paragraphs replaced in that nature + sense (WHY-PROSE).
F28. ⚪ The study block ("MEASURED, SEP 2026: 200 HERMES SESSIONS...") needs
     better formatting, coloring + structure + special links (STUDY-MODULE).
F29. ⚪ Mark the WIP items (the Centers, the unwired) with PENDING or WIP in
     the sidebar - some documentation documents unwired code (WIP-MARKS).
F30. 🔵 All the file mentions (aphrodite.toml.example, Cargo.toml, all the
     other file mentions) link to the tree/Current placement ALWAYS - without
     changing their style or color - maybe an underline on hover
     (FILE-LINKS).
F31. ✅ The trade-off text ("THE TRADE-OFF IS REAL AND STATED PLAINLY...") is
     extremely plain - explain the benefits better over Hermes, Hermes +
     Aphrodite and Hermes + (Hermes + Aphrodite + Aphrodite Proxy) - e.g. the
     A2A scenario - EVERYWHERE (TRADE-OFFS).
F32. ⚪ CASE STUDY needs to be in the menu - ALWAYS visible (NAV-CASE-STUDY).
F33. ⚪ On the case study, some CCR markers are overflowing the parent text
     box ("<<<CCR:0e3a5c9f2b8d4e6a1c3f5b7d9e0a2c4b6d8f0a1e|build|1420>>>")
     (MARKER-WRAP).
F34. ⚪ Split the four LAYER cards (40-123 ns CLASSIFY / ~15 tok PREVIEW /
     BLAKE3 STORE / RETRIEVE? DECIDE) into a 2x2 (LAYERS-2X2).
F35. 🔵 All text like the RETRIEVAL TAX paragraph - every large multi-sentence
     paragraph - broken into the short-line structure (topic sentence / blank
     line / "It is the reason the design pushes previews so hard:" / the
     conclusion) (PROSE-RHYTHM, amended).
F36. 🔵 A black label around the TAX-style keywords + others, with white text
     underneath - like the special RAW styles inside DeepSeek/Site
     (PROSE-RHYTHM, amended).
F37. ⚪ All the command text ("CACHE AND TOKEN MODES MEASURE IDENTICAL RATIOS ·
     REPRODUCIBLE: CARGO RUN --RELEASE...") properly wrapped inside a shiki
     sh codefence (CMD-FENCES).
F38. 🔵 All the "SRC: README.md:444-465..." citations + other text like them
     must have links to the original tree/Current links on GitHub
     (FILE-LINKS, amended).

## 3. THE AGENT ROSTER (the progress)

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
- FILE-LINKS (F30 + F38).
- PROSE-RHYTHM (F21 + F35 + F36).
- RESID-POLISH (F14 + F15 + F16 + the mounts + the label noise + the
  navigation + the 320px clip).

### ⚪ SEATED - IDLE (retained specs, awaiting activation)
HERO-KISS (F9/F10 polaroid) · STORE-INSTALL (F25) · WHY-PROSE (F27) ·
STUDY-MODULE (F28) · WIP-MARKS (F29) · NAV-CASE-STUDY (F32) · MARKER-WRAP
(F33) · LAYERS-2X2 (F34) · CMD-FENCES (F37) · SKILLS-ADAPT (R39) ·
DEEP-HTML · DEEP-RELEASES · DEEP-PERF · DEEP-SANITIZE (re-check) ·
FINAL-FEEDBACK · FINAL-VISUAL · FINAL-A11Y · FINAL-DEPLOY · FINAL-VERDICT.

### ❌ ERRORING / RATE LIMITED
The GLM flash lane (cloudflare-workers-ai) throttles under the concurrent
load. The affected lanes get RESTART + CONTINUE with the fresh state. The
2-at-a-time cadence is the mitigation. Status updates land here as they
resolve.

## 4. THE PENDING DELEGATIONS (the queue, in activation order)

1. RESID-POLISH + PROSE-RHYTHM (ACTIVE - the UML trio + the paragraphs).
2. NAV-CASE-STUDY + MARKER-WRAP (F32 + F33).
3. LAYERS-2X2 + CMD-FENCES (F34 + F37).
4. HERO-KISS + STORE-INSTALL (the polaroid + F25).
5. WHY-PROSE + STUDY-MODULE (F27 + F28).
6. WIP-MARKS + SKILLS-ADAPT (F29 + R39).
7. DEEP-HTML + DEEP-RELEASES (the metadata sweep + the release claims).
8. DEEP-PERF + DEEP-SANITIZE (re-check).
9. FINAL-FEEDBACK + FINAL-VISUAL.
10. FINAL-A11Y + FINAL-DEPLOY.
11. FINAL-VERDICT (the publish verdict + the ranked residuals).

## 5. THE ARBITERS (the current facts)

- `pnpm prepublishOnly` -> 63 pages built, Complete.
- `pnpm run Drift` -> all checks PASS (the count is dynamic: 62-63).
- The deploy path is hermetic: the Docs fallback + the Drift skip + the
  allowBuilds + the committed 48 docs pages + the tree/Current links.

## 6. THE STANDING DECISIONS (the user's)

- The lanes are GLM 5.3 Flash low (DeepSeek high only when the user names
  it), launched IDLE, activated 2 at a time; the orchestrator never executes
  - dispatch + relay + verify only.
- THE ARBITER LAW (2026-10-09 user directive): the agents do NOT run
  `pnpm prepublishOnly` - the USER runs the build themselves (dum
  prepublishOnly); the agents do development edits only + the fast guards
  (pnpm run Drift, targeted greps) - never the full build/dev server/tsc.
- The user commits; the agents never commit.
- The zine grammar binds (radius 0, the hard shadows, the 16px floor,
  dark-only, the huge-whitespace rhythm, the tree/Current law).
- The site is PUBLIC: the sanitization law holds (no personal info, no keys,
  no session ids, no user-home paths).
- The skills load first: the project tree (Site/Documentation/Skill/, once
  the SKILLS-ADAPT lane lands) + the ~/.dsh fallback.