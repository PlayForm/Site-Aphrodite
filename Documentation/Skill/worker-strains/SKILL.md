> Specialized working copy (repo): adapted for the Aphrodite site from the
> DeepSeek tree at ~/Developer/Application/PlayForm/DeepSeek/Documentation/Skill/worker-strains/ (same structure, Aphrodite anchors). This is the specialized truth for this site's sessions; the global ~/.dsh/skills/worker-strains/ is the fallback. Sync future changes to BOTH.
---
name: worker-strains
description: THE consolidated manual for the worker strains and the delegation methodologies of the Aphrodite site batch - the strains (explorer / coder / reviewer, all on GLM 5.3 flash low per the user's amendment), their cultivation rules, the idle-agent protocol, and the orchestrator loop. Load before ANY delegation, so the strains are always known and the methodologies always applied.
whenToUse: Mandatory before every subagent delegation or model choice in this batch - together with the task-routing skill. If you are about to delegate without knowing the strains and the protocols, STOP and read this manual first.
---

# Worker Strains - Operating Manual

This batch runs its lanes as strains. Every delegation picks a strain
first; the model is nearly always the same (GLM 5.3 flash low - the user's
standing amendment). The strains are the cultivation sites: each has its
own operating conditions, protocols, and failure handling.

## 1. The strains

| Strain | What it is for | Model (exact) | effort | Cultivation rules |
|---|---|---|---|---|
| EXPLORER | read-only surveys, research, analysis, scans of the site or the Aphrodite/Hermes source | `@cf/zai-org/glm-5.3-flash` | `low` ALWAYS | scaffold-first prompts, bounded reading; downstream validation is free (the build, the Drift checks) so later stages correct mistakes |
| CODER | implementation: pages, components, CSS, scripts, docs content | `@cf/zai-org/glm-5.3-flash` | `low` (the user's amendment: even coding runs low) | self-contained specs carrying the arbiters (the build + Drift), the never-commit rule, the report format; read-before-edit always |
| REVIEWER | verification, self-review, cross-checking claims against the built output | `@cf/zai-org/glm-5.3-flash` | `low` | verifies against printed arbiter tails and the filesystem, never prose claims; flags, never silently fixes |

Allowed models: `@cf/zai-org/glm-5.3-flash` (default, everything) and
`@cf/deepseek-ai/deepseek-v4-flash-0731` (only when the user names it, e.g.
a prose lane at high). Provider: `cloudflare-workers-ai`; reasoning_effort
values: `low` | `high` - exact strings.

## 2. The non-negotiables (every delegation, always)

1. ALWAYS pass `provider`, `model`, and `reasoning_effort` EXPLICITLY on
   every subagent call and every workflow agent() call.
2. Never use a model outside the allowed set.
3. The user's explicit override wins for the task it names.
4. Never edit agent-loop configuration while subagents are running.
5. Max 2 lanes active at a time; more wait seated IDLE.

## 3. The methodologies (the delegation loop)

THE ORCHESTRATOR LOOP (the parent's duty): receive the user's thought ->
formalize it (scope, surface, exclusions, the arbiter, the report format,
the shared facts) -> record it in Site/Documentation/TRACKING.md -> pick
the strain -> launch IDLE -> activate when a slot opens (max 2) -> monitor
(queue bookkeeping, surface-conflict analysis - concurrent lanes only when
their files are provably disjoint - stall recovery via checkpoint nudges,
failure handling: verify the tree for partial edits, then restart with the
fresh state) -> verify (trust the printed arbiter tails over prose claims)
-> report (results, residuals, decisions; the user commits - agents never
commit).

THE ORCHESTRATOR'S NON-EXECUTION LAW: the orchestrator does NOT execute on
the feedback - no builds, no site edits, no measurement runs, no
surface-location investigation before relaying. The feedback arrives
VERBATIM in the activation message; the LANE investigates + locates +
executes + builds + verifies, and its report carries the arbiter numbers.
The orchestrator's hands-on work is limited to relaying verbatim, keeping
the ledger, and read-only spot-checks.

THE SPEC-RECONFIGURATION AUTHORITY (user-granted): as requirements come in
and change, and as the other agents report feedback, the orchestrator
re-configures the specs - amends idle agents via messages (they acknowledge
"<NAME> SPEC AMENDED - IDLE"), amends working agents mid-flight when
compatible, re-applies changed requirements to not-yet-started prompts,
re-starts failed lanes with corrected specs. Every change is recorded in
Site/Documentation/TRACKING.md.

THE IDLE-AGENT PROTOCOL (the paused strain): launch with a fully
self-contained spec + the activation rules; the agent retains it verbatim,
does NO work, replies "<NAME> SPEC RETAINED - IDLE", waits for the
activation message, then executes exactly with the arbiter. Idle agents
cost zero wall-clock time and fire when their surface frees up - max 2
active at a time.

## 4. The shared facts the strains must not contradict

The Aphrodite site batch's truth: the arbiter is `cd Site &&
pnpm prepublishOnly` (63 pages - the Docs, Diagrams, Drift-Guard, astro
build chain) + `pnpm run Drift` (all checks PASS - the count is dynamic);
the zine grammar (radius 0, hard shadows, 16px floor, dark-only, the
huge-whitespace rhythm); the tree/Current law for every file mention; the
sanitization law (the site is public - no personal info, no keys, no
session ids, no user-home paths); the TRACKING.md ledger records every
requirement and feedback item. The conventions: tabs (tabWidth 4,
printWidth 100), YAML stays spaces; read-before-edit always; flag-don't-fix
content conflicts.

## 5. The cultivation sites (per-strain operating contexts)

- The EXPLORER is cultivated in read-only surfaces with bounded reading -
  its mistakes are corrected downstream for free by the deterministic
  checks.
- The CODER is cultivated with self-contained specs carrying the arbiters
  (the build + Drift), the never-commit rule, the report format (before ->
  after with file:line anchors, the arbiter results, the residuals), and
  the restart-with-fresh-state rule for rate-limited deaths.
- The REVIEWER is cultivated with the printed tails, the filesystem, and
  the TRACKING.md ledger - it flags; it never silently fixes.

## 6. The environment + the scope discipline (user-mandated)

- YOU ARE NEVER ALONE: the batch runs pairs of active lanes while a dozen
  more wait seated. The activation message carries the CURRENT STATE BLOCK
  - read it and treat it as part of the spec.
- VERIFY THE ENVIRONMENT: check the tree state (git status, recent commits
  - the user commits MID-SESSION) before AND during the work.
- STAY IN SCOPE: the surfaces the other lanes own are off-limits.
  Read-before-edit ALWAYS on shared files; coordinate via the report.
- THE SURGICAL-EDIT DISCIPLINE (hard rule): every file modification through
  the harness TOOL API only - the read tool first, the edit tool. NEVER
  python/sed/awk/scripts for content mutation. The write/edit tools are the
  governed path.
- THE BUILD-VERIFIED RULE: after every file touched, the arbiter must pass
  before continuing. Never leave the tree broken.
- THE COMMON SKILLS: the project's own tree at Site/Documentation/Skill/ is
  loaded FIRST; the global ~/.dsh/skills/ is the fallback.
