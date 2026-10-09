> Specialized working copy (repo): adapted for the Aphrodite site from the
> DeepSeek tree at ~/Developer/Application/PlayForm/DeepSeek/Documentation/Skill/session-orientation/ (same structure, Aphrodite anchors). This is the specialized truth for this site's sessions; the global fallback applies only when the project tree is absent. Sync future changes to BOTH.
---
name: session-orientation
description: THE first-load protocol for ANY new session working on the Aphrodite site - orient from the project's OWN skills FIRST (Site/Documentation/Skill/ is the specialized truth; ~/.dsh/skills/ is the fallback), read the current state from Site/Documentation/TRACKING.md (the ledger) and the Site README, load the routing law (every subagent = cloudflare-workers-ai/@cf/zai-org/glm-5.3-flash, reasoningEffort low), apply the git checks-only law, know the arbiter form. Load FIRST, before anything else, in every fresh session.
whenToUse: Mandatory at session start, before any other skill, tool call, or delegation. If a fresh session is about to act in this repository without having read the project's skills and this orientation protocol, STOP and load this first.
---

# SESSION ORIENTATION - the first-load protocol for every new session

A fresh session knows NOTHING except what it loads. This skill is the
loading order. Follow it top to bottom.

## 0. The loading order (do this before anything else)

1. **The project's OWN skills FIRST.** If the working repository has
   `Site/Documentation/Skill/*/SKILL.md`, read every one of them BEFORE any
   other orientation step. Those copies are the SPECIALIZED TRUTH for this
   project (each carries a header note marking it as the specialized
   working copy); the global skills at `~/.dsh/skills/<name>/SKILL.md` are
   the FALLBACK. Where the two disagree, the project copy wins; if you must
   correct a rule, sync the fix to BOTH copies.
2. **The current state.** Read `Site/Documentation/TRACKING.md` - the
   single ledger with EVERY user requirement, feedback item, agent progress
   entry, and pending delegation. Then the Site `README.md`. The ledger is
   the state of the batch; the README is the state of the site. Never
   re-investigate what the ledger already states.
3. **The routing law** (section 2 below) and the **git law** (section 3
   below) - load them now; they are non-negotiable.

## 1. The repository itself

This is the Aphrodite site: an Astro static site at
`.../Aphrodite/Site` presenting the Aphrodite/Hermes system in the zine
grammar - radius 0, hard shadows, the 16px spacing floor, dark-only, the
huge-whitespace rhythm. Layout: `Source/` (the Astro source), `Public/`,
`Scripts/` (Docs, Diagrams, Drift-Guard, Media-Social), `Documentation/`
(the TRACKING.md ledger + the Skill/ tree), `Reference/`. The build for the
site is `cd Site && pnpm prepublishOnly` (runs Docs, Diagrams,
Drift-Guard, then astro build; output under `Target/`, 63 pages) - the site
verifies via its built HTML/CSS and the printed Drift results, never via a
dev server.

## 2. THE ROUTING LAW (non-negotiable)

Every subagent delegation runs:

- provider: `cloudflare-workers-ai`
- model: `@cf/zai-org/glm-5.3-flash`
- reasoningEffort: `low`

No exceptions without the user's explicit instruction. Use the exact model
id (no whitespace, exact casing). The explicit triple
is ALWAYS passed - never rely on child defaults (an omission inherits the
parent's route). The `task-routing` skill (project copy first) carries the
full policy; this line is the enforcement floor.

## 3. THE GIT LAW (checks only - never mutate)

The orchestrator and every agent NEVER mutate the repository through the
terminal: no `git add`, no `git commit`, no `git reset`, no `git push`, no
`git tag`, no `git rm`, no checkout/branch/merge/stash, no `git clean`. The
user owns every git mutation (they commit mid-session). Allowed git work is
read-only CHECKS ONLY: `git status`, `git log`, `git diff`, `git show`,
`git rev-parse`, `git ls-files`. Any deliverable that needs a commit is
reported as READY-TO-COMMIT - the exact file list plus the suggested commit
message - and the user commits it.

## 4. The file-write law

File writes go ONLY through the `write`/`raw-write`/`edit` tool API - never
terminal content edits (no sed/awk/perl/python in-place rewrites, no heredoc
file surgery). The normalize hooks are active in this profile: streamed
model output is normalized live. Consequences:

- Prefer ASCII-safe content; never need a real unicode glyph inside a
  streamed write.
- When a real unicode glyph IS required, use `raw-write` (exempt from
  normalization by name) or `edit` (identity-exempt).
- Never build file content through NUL-terminated conventions; after any
  bulk transformation, byte-scan the touched files before reporting done.
- Read-before-edit ALWAYS: the user builds and commits mid-session and
  other lanes edit the same tree concurrently.

## 5. The batch discipline (2 at a time)

The lanes are GLM 5.3 Flash low, launched IDLE, activated at most 2 at a
time. The orchestrator never executes - dispatch, relay verbatim, verify.
Every activation message carries the CURRENT STATE block (the running
lanes, the pending count, the scope + the off-limits surfaces). A lane that
errors with RATE LIMITED is restarted with the fresh state. The feedback
ledger (Site/Documentation/TRACKING.md) records each and every item.

## 6. The one-paragraph summary a fresh session must be able to recite

Orient from the project's own skills (Site/Documentation/Skill/ first,
~/.dsh/skills/ fallback), read Site/Documentation/TRACKING.md + the README
for the state, route every subagent to cloudflare-workers-ai /
@cf/zai-org/glm-5.3-flash / low, never mutate git (checks only; report
READY-TO-COMMIT), write files only through the tool API (raw-write/edit for
unicode glyphs; read-before-edit always), respect the zine grammar and the
sanitization law, run the arbiter (`cd Site && pnpm prepublishOnly` +
`pnpm run Drift`) and trust the printed tails.

## 7. THE MODEL POINTER (2026-10-10)

Read the orchestrator-batch skill's THE FORMALIZED MODEL section FIRST (the
2-active law, the pair queue, the ACK-trap, the re-pause, the no-build law,
the deploy alignment, the tracking) + the current queue + the feedback
ledger at Site/Documentation/TRACKING.md - the ledger is the session's
memory; the active pair is tracked only, everything else is PAUSED.
