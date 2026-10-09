> Specialized working copy (repo): adapted for the Aphrodite site from the
> DeepSeek tree at ~/Developer/Application/PlayForm/DeepSeek/Documentation/Skill/smoke-writing/ (same structure, the Drift-Guard analog). This is the specialized truth for this site's sessions; the global fallback applies only when the project tree is absent. Sync future changes to BOTH.
---
name: smoke-writing
description: THE discipline for the site's Drift-Guard corpus checks (the arbiter) - the byte-exact corpus lines, the figure-primary rule (the README primary + the CHANGELOG secondary), the never-weaken-a-check law, the vacuously-green trap (the Drift skip guard on the standalone deploy), and the build-arbiter form. Load before writing, extending, or debugging any Drift-Guard check or any change that could shift the corpus.
whenToUse: Mandatory before creating or modifying any Drift-Guard check in Scripts/Drift-Guard.mjs, any corpus line it asserts, or any content change that could trip the corpus. If you are about to "fix" a failing Drift check by weakening the check, STOP and read this manual first.
---

# Smoke Writing - Operating Manual (Drift-Guard)

The Drift checks are the arbiter: after every change, they must pass. This
manual states the conventions directly.

## 1. The build-arbiter form

1. The site's arbiter is the chain `cd Site && pnpm prepublishOnly`: it
   runs Docs, Diagrams, the Drift-Guard, then astro build (63 pages). The
   Drift-Guard runs BEFORE the build inside the chain - a failing check
   fails the whole prepublish.
2. `pnpm run Drift` runs the Drift-Guard standalone: `node
   Scripts/Drift-Guard.mjs`. All checks must PASS. The check count is
   dynamic - do not hardcode an expected count in prose or in a check;
   compare pass/fail.
3. The PRINTED TAILS are the truth: report the printed page count and the
   printed check results verbatim. Never assert green without running.

## 2. The corpus discipline

1. The Drift-Guard asserts corpus lines byte-exactly - the phrases, the
   counts, the version strings, the figure labels that the site's pages
   must contain. When you change a corpus-relevant string in content,
   either the change is wrong or the corpus line must be updated to the
   NEW truth (both the check and the content move together, never one
   alone).
2. THE FIGURE-PRIMARY RULE: the numbers and figures the site claims come
   from the README (primary) and the CHANGELOG (secondary) of the source
   being presented - never from a lane's guess or a stale draft. When a
   figure drifts, the README/CHANGELOG is the authority; update the page
   (and the corpus line) to match it.
3. Never fabricate a number to satisfy a check. If a check asserts a
   figure you cannot source, FLAG it - do not invent.

## 3. The never-weaken law

1. A failing check means the change is wrong (or the corpus truth moved) -
   never weaken, skip, or delete a check to pass.
2. New site guarantees GROW the checks (additive) - existing assertions
   never weaken.
3. When a corpus line must move (a real content change), move it to the new
   exact bytes and say so in the report - the move is part of the change,
   not a silent accommodation.

## 4. The vacuously-green trap (the standalone deploy)

1. The standalone deploy path skips parts of the chain: the Docs fallback +
   the Drift skip exist so the deploy can run hermetically. That means a
   deploy can go green WITHOUT the Drift checks having run - a
   vacuously-green result.
2. Corollary: green on the deploy is not green on the arbiter. A lane that
   claims verification must have run `pnpm run Drift` (or the full
   prepublish) and report the printed results - the deploy badge alone
   proves nothing about the corpus.
3. When a check "passes but the world is weird" (the content contradicts
   the pass), suspect the skip path first - verify the check actually
   executed.

## 5. The working conventions

1. The Drift-Guard lives at `Scripts/Drift-Guard.mjs`; edits go through
   the read/edit tool API (never terminal edits), read-before-edit always.
2. After touching the Drift-Guard or any corpus-relevant content, run the
   arbiter and report the printed tails.
3. Keep checks deterministic: no network, no clock-dependent assertions,
   no ordering assumptions beyond the script's own.
