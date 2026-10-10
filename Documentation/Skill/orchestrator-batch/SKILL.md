> Specialized working copy (repo): adapted for the Aphrodite site from the
> DeepSeek tree at ~/Developer/Application/PlayForm/DeepSeek/Documentation/Skill/orchestrator-batch/ (same structure, Aphrodite anchors). This is the specialized truth for this site's sessions; the global fallback applies only when the project tree is absent. Sync future changes to BOTH.
---
name: orchestrator-batch
description: THE orchestration methodology for the Aphrodite site batch - the incremental, 2-at-a-time, wall-clock-ordered workflow: the user's thought arrives -> record it in Site/Documentation/TRACKING.md -> formalize it -> launch an IDLE agent (paused, spec retained) or activate a seated one -> monitor -> verify with the arbiter -> report. Includes the feedback ledger, the surface-conflict analysis, the rate-limit restarts, and the relay-verbatim law. Load before running any multi-agent batch on this site.
whenToUse: Mandatory for the agent-batch regime on this site: whenever the user gives a task that lands as agents (site work, docs, corrections, scans), whenever the user asks to "launch an IDLE agent", and whenever you must decide the order, the concurrency, or the re-dispatch of the batch.
---

# Orchestrator Batch - Operating Manual

## The loop (incremental + 2-at-a-time in wall-clock time)

1. RECEIVE the user's thought/instruction - however fragmentary.
2. RECORD it: each and every requirement and feedback item goes into
   `Site/Documentation/TRACKING.md` (the requirements ledger and the
   feedback ledger, in arrival order, each its own item with a status:
   landed / in flight / seated-pending / user decision). The ledger is the
   batch's memory - it survives rate-limited deaths and session switches.
3. FORMALIZE it: structure it (scope, the surface, the exclusions, the
   sequence), bind it to the shared facts (the zine grammar, the
   tree/Current law, the sanitization law, the arbiter form), bind it to
   the conventions (tabs, read-before-edit, never-commit, the build +
   Drift as the arbiters), and shape the report format. If the user's
   wording is ambiguous, formalize the most faithful reading and state it.
4. LAUNCH IDLE: a fully self-contained spec (the subagent's conversation
   cannot see this one) + the activation rules + the confirmation line
   ("<NAME> SPEC RETAINED - IDLE"). Seated agents cost nothing and wait.
5. ACTIVATE at most 2 at a time: the activation message ("ACTIVATE")
   carries the CURRENT STATE block (the running lanes + their tasks, the
   pending count, the scope + the off-limits surfaces). When a slot frees,
   the next seated lane fires.
6. MONITOR: the queue bookkeeping (active / seated / queued), the
   SURFACE-CONFLICT analysis (concurrent lanes only when their files are
   provably disjoint; serialize everything else; read-before-edit
   always on shared files), the stall recovery (no file activity -> a
   checkpoint nudge: "report your state; STOP reading; move to the ACTION
   phase"), the failure handling (a lane that errors with RATE LIMITED:
   restart it with the FRESH state - the state block + the current file
   contents; never resume from memory).
7. THE ORCHESTRATOR DOES NOT EXECUTE (the user's standing law): no builds,
   no site edits, no measurement runs, NO surface-location investigation
   before relaying feedback. The feedback goes to the lanes VERBATIM and
   the lanes investigate + locate + execute + build + verify. The
   orchestrator's hands-on work is LIMITED to: (a) relaying the user's
   feedback verbatim; (b) keeping the ledger; (c) read-only spot-checks of
   the lanes' REPORTED claims (trust the printed arbiter tails over prose
   claims). The user commits - the agents never commit.
8. VERIFY: the ARBITERS ARE THE LANES' OWN - every activation carries the
   arbiter mandate (`cd Site && pnpm prepublishOnly` - 63 pages - plus
   `pnpm run Drift`, all checks PASS, the count is dynamic). The printed
   tails are the truth. The lanes do NOT launch dev servers (no astro
   dev/preview - the port conflicts) and run NO tsc checks and NO git
   mutations.
9. REPORT: the per-lane results, the residuals + the decisions for the
   user, the queue's next steps. The user decides the commit protocol.

## The spec-reconfiguration authority (user-granted)

As requirements come in and change, and as the other lanes report feedback:
RE-CONFIGURE the specs - amend a seated lane via send_message (it
acknowledges "<NAME> SPEC AMENDED - IDLE"), amend a working lane mid-flight
when the change is compatible (a checkpoint message), re-apply the changed
requirements to the not-yet-launched specs, and restart failed lanes with
corrected specs. Amendments override the base specs where they conflict;
every change is recorded in the TRACKING.md ledger so the state survives
connectivity losses, rate limits, and session switches.

## The shared facts (the truth the whole batch must not contradict)

The zine grammar: radius 0, hard shadows, the 16px spacing floor,
dark-only, the huge-whitespace rhythm (more but proportional). The
tree/Current law: every repo file mention and citation links to its
tree/Current placement on GitHub, without changing the mention's style or
color. The sanitization law: the site is publicly visible - no personal
info, no keys, no session ids, no user-home paths. The arbiter form:
`cd Site && pnpm prepublishOnly` (63 pages) + `pnpm run Drift` (all PASS;
the count is dynamic). The routing law: every lane is GLM 5.3 flash low
(cloudflare-workers-ai), 2 active at a time. The ledger:
`Site/Documentation/TRACKING.md`.

## The lessons (earned in this batch)

1. THE LEDGER IS THE MEMORY: after every rate-limited death or session
   switch, the fresh state comes from the ledger + the current file
   contents - never from a lane's memory.
2. THE 2-AT-A-TIME CADENCE IS THE THROTTLE FIX: the GLM flash lane
   throttles under concurrent load; more than 2 active lanes multiplies the
   RATE LIMITED errors. Keep it at 2.
3. THE STALE-STATE CLASS: a lane resumed from memory can redo or undo
   another lane's committed work - always restart with the fresh state and
   re-read the files.
4. THE PRINTED TAILS ARE THE TRUTH: a lane's prose claim ("all checks
   pass") that contradicts the printed Drift/build output is wrong; the
   count is dynamic, so compare pass/fail, not the number.
5. THE SKILL TREE IS LOADED FIRST: every lane loads the project's own
   skills from `Site/Documentation/Skill/` before working; the
   ~/.dsh/ skills are the fallback.

## THE FORMALIZED MODEL (user-mandated 2026-10-10 - save this behavior)

1. TWO ACTIVE, ALWAYS: the orchestrator keeps EXACTLY 2 lanes active at any
   moment; all others are PAUSED (retained specs, no work); only the pair's
   work is tracked. A flood (more than 2 working at once) multiplies the GLM
   flash API-limit errors - the 2-at-a-time IS the throttle.
2. THE PAIR QUEUE: lanes launch IDLE with the comprehensive retained spec
   (confirm "<NAME> SPEC RETAINED - IDLE"); activate via ACTIVATE + the
   CURRENT STATE block; when the active pair is COMPLETELY done (the reports
   delivered), release the next pair - never before.
3. THE ACK-TRAP: an amendment acknowledgment ("<NAME> SPEC AMENDED - ACK")
   is NOT work - the lane must then DO the mandate; a lane whose turn ends
   after the ACK gets a "CONTINUE + deliver the report" nudge; the urgent
   form: "do not acknowledge without the work". THE MESSAGE-FORM RULE (the
   2026-10-10 lesson): the orchestrator's amendment messages to ACTIVE lanes
   NEVER end with "Acknowledge with exactly one line ... nothing else" -
   that instruction makes the lane comply and end its turn WITHOUT the work;
   the amendment + the work happen in the SAME turn, and the message says so
   ("EXECUTE NOW - the acknowledgment + the work in the same turn; do not
   end without the deliverable").
4. THE RE-PAUSE: the message "RE-PAUSE - the batch runs 2 at a time only.
   STOP all work NOW" - the lane acknowledges "<NAME> PAUSED - IDLE"; the
   partial state persists in the session for the resume with the fresh state.
5. THE NO-BUILD LAW: the agents NEVER run prepublishOnly - the USER's own
   build is the arbiter; the fast guards only: `pnpm run Drift` + the
   targeted greps; never the dev server, never tsc.
6. THE DEPLOY ALIGNMENT (the DeepSeek-exact form): prepublishOnly =
   "astro build" only; the Docs/Diagrams/Drift scripts are the LOCAL manual
   commands (run before committing to keep the committed deploy sources
   fresh); the deploy builds purely from the committed state.
7. THE TRACKING: Site/Documentation/TRACKING.md carries EVERY user
   requirement + feedback item (each its own line), the agent roster, the
   queue - the orchestrator updates it.
8. THE SELF-REVIEW + SKILL-UPDATE clause per lane: at the end, the lane
   reviews its own work for gaps + fixes them + updates the relevant
   SKILL.md under Site/Documentation/Skill ONLY (read-before-edit; the tree
   exists) - the user's skill-updates directive.
9. THE RELAY + NON-EXECUTION: the user's feedback relays VERBATIM; the
   orchestrator never executes (no builds, no site edits, no research) -
   dispatch + relay + verify only (the read-only spot-checks of the reported
   claims).
10. THE ROUTING: GLM 5.3 flash low always (cloudflare-workers-ai); the
    DeepSeek-high coder route only when the user names it explicitly.
