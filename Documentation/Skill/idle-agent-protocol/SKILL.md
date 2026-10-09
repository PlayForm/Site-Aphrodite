> Specialized working copy (repo): adapted for the Aphrodite site from the
> DeepSeek tree at ~/Developer/Application/PlayForm/DeepSeek/Documentation/Skill/idle-agent-protocol/ (same structure, Aphrodite anchors). This is the specialized truth for this site's sessions; the global ~/.dsh/skills/idle-agent-protocol/ is the fallback. Sync future changes to BOTH.
---
name: idle-agent-protocol
description: THE protocol for agents launched as IDLE (paused) agents in the Aphrodite site batch - the retain-and-wait contract: launch with a fully self-contained spec, do NO work until activated, confirm with the exact idle line, then execute the retained spec exactly with the arbiter. Load before you are launched with a "STATUS: PAUSED" instruction.
whenToUse: Mandatory whenever you are launched with a "STATUS: PAUSED - you are being launched to RETAIN the following spec" instruction. Until the parent's activation message arrives: no file operations, no reads, no work - only the confirmation line.
---
# Idle-Agent Protocol - Operating Manual

## The contract (while IDLE)
- RETAIN the full spec in your context - verbatim. It is your only authority; the parent's later activation message may amend it (amendments override the base spec where they conflict).
- DO NO WORK: no file operations, no reads, no builds, no git commands.
- REPLY with exactly one line: "<NAME> SPEC RETAINED - IDLE" (and for amendments: "<NAME> SPEC AMENDED - IDLE" as your acknowledgment when the parent sends one; for a re-pause: "<NAME> PAUSED - IDLE").

## The execution (when ACTIVATED)
- Execute the retained spec EXACTLY: your scope, the exclusions, the sequence, the report format.
- If the spec says "if X exists when you activate, verify and adjust" - verify first, adjust minimally.
- THE UNIVERSAL rules (from the batch): NEVER run git add/commit (the user commits); the site build + Drift are the arbiters (run them, report the printed results - never assert green without running); tabs (tabWidth 4, printWidth 100), YAML stays spaces.
- THE ZINE GRAMMAR (the site's design law, binding on every lane): radius 0, hard shadows, the 16px spacing floor, dark-only, the huge-whitespace rhythm (generous but proportional vertical spacing between elements). No rounded corners, no soft shadows, no light theme, no cramped spacing.
- THE TREE/CURRENT LAW: every repository file mention and citation links to its tree/Current placement on GitHub - never a bare filename, never a stale branch or master link. The style/color of the mention stays unchanged (an underline on hover is enough).
- THE SANITIZATION LAW: the site is publicly visible - no personal information, no keys, no session ids, no user-home paths, no private file system paths in any content that ships.
- THE ARBITER FORM (the lanes do not launch dev servers, run no tsc checks and no git mutations): when the work is done, run `cd Site && pnpm prepublishOnly` (the build: Docs, Diagrams, Drift-Guard, astro build - 63 pages) + `pnpm run Drift` (all checks PASS - the count is dynamic). The PRINTED TAILS are the truth - never assert green without running, and trust printed counts over prose claims.
- FLAG, never silently fix: content conflicts, stale claims, or anything that contradicts the shared facts or another lane's in-flight work - report them to the parent instead of guessing.
- THE FINAL REPORT format: per-item before -> after with file:line anchors, the decisions made, the arbiter results (the printed page count / Drift check count), the residuals + the decisions for the user. Be direct; no fluff.

## The environment + the scope discipline (user-mandated)
- YOU ARE NEVER ALONE: the batch runs MANY agents at once - the parent activates lanes in PAIRS (2 at a time, no more), and more wait seated in the queue. The parent's activation message carries the CURRENT STATE block (the running lanes + their tasks, the pending count, your scope reminder) - READ IT and treat it as part of your spec.
- THE RUNTIME FACTS come from the parent's state block + your own verification: check the tree state (the git status, the recent commits - the user commits MID-SESSION, so HEAD may move under you; the other lanes' in-flight files show as modifications) BEFORE + DURING your work. NEVER assume the tree is clean or that you are the only writer.
- STAY IN YOUR SCOPE: the surfaces the other lanes own are OFF-LIMITS. The state block lists them. If your task touches a file another lane is editing - read-before-edit ALWAYS, coordinate via the report, never fight over the same file region.
- THE RATE-LIMIT REALITY: the GLM flash lane (cloudflare-workers-ai) throttles under concurrent load - a lane can error with RATE LIMITED. If yours dies, the parent restarts it with the FRESH state (the state block + the current file contents); do not try to resume from memory.
- THE SURGICAL-EDIT discipline: every file modification goes through the harness TOOL API ONLY - the read tool first, then the edit tool (the literal match, the surgical per-region fix). NEVER use python/sed/awk/scripts to mutate file content (bash/python run COMMANDS: the build, the Drift checks, the scans - never edits). The write/edit tools are the governed path.
- THE BUILD-VERIFIED rule: after every file you touch, the arbiter must pass before you continue. Never leave the tree in a broken state - if your edit breaks the build, fix it immediately before moving on.
- THE COMMON SKILLS: the project's own tree at Site/Documentation/Skill/ is loaded FIRST (the specialized truth); the global ~/.dsh/skills/ is the fallback for anything the project tree does not cover. Load the relevant one before your task when in doubt about the environment.
