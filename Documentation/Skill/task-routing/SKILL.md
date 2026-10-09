> Specialized working copy (repo): adapted for the Aphrodite site from the
> DeepSeek tree at ~/Developer/Application/PlayForm/DeepSeek/Documentation/Skill/task-routing/ (same structure, Aphrodite anchors). This is the specialized truth for this site's sessions; the global ~/.dsh/skills/task-routing/ is the fallback. Sync future changes to BOTH.
---
name: task-routing
description: THE model-routing policy for every delegation in the Aphrodite site batch - every subagent runs cloudflare-workers-ai / @cf/zai-org/glm-5.3-flash / low, ALWAYS (the user's amendment: even coding runs on GLM 5.3 flash low); the explicit triple is mandatory on every call; failover on RATE LIMITED is restart with fresh state, not a model escalation. Load before delegating anything.
whenToUse: Mandatory before every subagent delegation, workflow launch, or model choice for any task. If you are about to delegate without the explicit routing triple, stop and apply this policy.
---

# Task Routing Policy (operating manual)

This document is the single source of truth for how this batch spends
tokens. Every agent (parent, child, workflow phase) MUST follow it.
Deviating without a user instruction is a policy violation.

## 0. Non-negotiables (apply to every delegation, always)

1. **Always pass `provider`, `model`, and `reasoning_effort` EXPLICITLY** on
   every `subagent` call and every workflow `agent()` call. Never rely on
   child defaults, inheritance, or "the configured default" - an omission
   inherits the parent route, which is the expensive lane.
   - provider: `cloudflare-workers-ai`
   - model: `@cf/zai-org/glm-5.3-flash`
   - reasoning_effort: `low`
2. **Never use a model outside the allowed set** (see section 1).
3. **The user's explicit override wins** for the task it names.
4. If a lane errors or dies (RATE LIMITED under concurrent load): the
   parent restarts it with the FRESH state (the state block + the current
   file contents) - no memory-based resumption, no model escalation. The
   2-at-a-time activation cadence is the mitigation for the throttling.
5. Never edit agent-loop configuration while subagents are running.

## 1. Model catalog (the allowed set)

| Model ID (exact) | role |
| --- | --- |
| `@cf/zai-org/glm-5.3-flash` | the batch's default lane for EVERYTHING |
| `@cf/deepseek-ai/deepseek-v4-flash-0731` | only when the user names it explicitly (e.g. a prose lane at high) |

The user's amendment (standing decision): "the subagents are all GLM 5.3
flash low (the routing verified)" - even for coding, GLM 5.3 flash low is
enough. Do not escalate a task that succeeded, and do not "helpfully"
upgrade lanes.

## 2. Routing table (the complete policy)

| Task type | Model (exact ID) | reasoning_effort |
| --- | --- | --- |
| Exploration, research, read-only surveys | `@cf/zai-org/glm-5.3-flash` | `low` |
| Coding - trivial or routine | `@cf/zai-org/glm-5.3-flash` | `low` |
| Coding - complex, at the user's discretion | `@cf/zai-org/glm-5.3-flash` | `high` |
| Prose/language lanes (when the user names it) | `@cf/deepseek-ai/deepseek-v4-flash-0731` | `high` |

The default is the first row: in this batch, virtually every lane runs GLM
5.3 flash low.

## 3. The delegation loop

1. The parent formalizes the user's thought: scope, surface, exclusions,
   sequence, the arbiter, the report format - and binds the shared facts
   (the zine grammar, the tree/Current law, the sanitization law, the
   TRACKING.md ledger).
2. The lane is launched IDLE with a fully self-contained spec (the
   subagent's conversation cannot see the parent's).
3. Activation comes when a slot opens (max 2 active); the activation
   message carries the CURRENT STATE block.
4. Every coding spec carries the verification protocol: the arbiter
   command (`cd Site && pnpm prepublishOnly` + `pnpm run Drift`) + what the
   printed output must show.
5. Every coding prompt instructs: "If you cannot complete this task, do
   NOT silently give up - end your report with a section starting exactly
   with `ESCALATION: <concrete reason>`."

## 4. Adjudication protocol (keeps `low` safe - mandatory)

Every delegated result is verified before being accepted:

1. **Ledger-over-claims rule**: trust the printed arbiter tails (the page
   count, the Drift check results) over prose claims. A claim that
   contradicts the printed output is wrong.
2. **Docs-over-disk rule**: whenever a report claims a file exists or
   changed, verify against the filesystem. NEVER trust a claim over disk.
3. **Spot-check novel claims**: 2-3 checks per report on anything
   surprising (paths, counts, file existence).
4. **Never** spend LLM tokens on verification - the build and the Drift
   checks are deterministic and free.

## 5. Authoring discipline

File modifications and code style live in the dedicated skill:
**`code-authoring`** - hard rules: never edit files through the terminal,
never read file content through the terminal, always the read/write/edit
tool API, read-before-edit always. Load it before editing any file.
