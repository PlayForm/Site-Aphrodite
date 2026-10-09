> Specialized working copy (repo): adapted for the Aphrodite site from the
> DeepSeek tree at ~/Developer/Application/PlayForm/DeepSeek/Documentation/Skill/harness-observability/ (same structure, universal content kept). This is the specialized truth for this site's sessions; the global ~/.dsh/skills/harness-observability/ is the fallback. Sync future changes to BOTH.
---
name: harness-observability
description: THE overview of what this harness's agent can OBSERVE - the runtime introspection tools, the agent-control surface, the ~/.dsh observable state (the session transcripts with token usage, the skills, the profiles/bundles, the live governance ledgers), the filesystem/web access, and the honest LIMITS (what the agent cannot see). Load when the user asks what you can see, when you need to inspect the runtime, or before building tooling on the observable surface.
whenToUse: When the user asks about your access/observability, when you need runtime facts (the live plugins, the services, the events, the configs, the slots, the session usage), or when the ~/.dsh state must be inspected. The skills are loadable from ~/.dsh/skills/ and the project's Site/Documentation/Skill/.
---

# Harness Observability - What The Agent Can See

The observable surface, documented from the live harness. The GUI shows
the user a lot; this is what the AGENT itself has access to. This content
is universal (it describes the harness, not the site); the Aphrodite
notes are at the end.

## 1. The runtime introspection tools (cordis_inspect_list / cordis_inspect_query)

Inspect Providers with read-only methods - never business Services:

| Platform | Provider | What it exposes |
|---|---|---|
| host | Service | the Host's service directory or one exact Service contract |
| host | Event | the Event directory or one exact Event contract |
| host | Config | the live plugin Config entries (paged) or one entry's schema |
| host | Tool | every Tool schema currently callable by the requesting Agent |
| client | Service | the Client half's service directory/contracts |
| client | Event | the Client half's events |
| client | Builtin | the plain-JavaScript symbols available to a dynamic Client half |
| client | Slots | the live Slot + Factory topology trees |
| client | Theme | the current theme token names + the light/dark override requirements |

Use them BEFORE writing plugin code or claiming a tool exists: the exact
Service methods, Event modes, Config schemas, Tool schemas, theme tokens,
and Slot trees come from the providers - never guess names.

## 2. The agent-control surface

- list_agents - the subagent tree with the running/inactive status.
- send_message - continue a direct child's conversation (activate an IDLE
  agent, amend a spec mid-flight, nudge a stalled agent).
- interrupt_agent - stop a child's work (assess the tree state for partial
  edits first).
- subagent / subagent_fork - delegate self-contained tasks (the subagent
  sees only its prompt; the fork inherits this conversation).
- workflow - orchestrate many agents from a script (phases, pipelines,
  parallel thunks, validated results).

## 3. The runtime state

- job_list / job_output / job_kill - the background jobs (collect with
  wait or read incrementally; kill what stopped mattering).
- list_subagent_models - the LLM route catalog (this harness:
  cloudflare-workers-ai with @cf/zai-org/glm-5.3-flash and
  @cf/deepseek-ai/deepseek-v4-flash-0731; the routing policy lives in the
  task-routing + worker-strains skills - ALWAYS pass provider/model/effort
  explicitly).
- plugin_manager - the profile's plugins/bundles: list, enable/disable,
  install/remove bundles (changes affect every session in the profile).
- get_goal / update_goal - the persisted goal state.

## 4. The ~/.dsh observable state

- ~/.dsh/sessions/ - the SESSION RECORDS: every subagent's transcript as
  zstd-compressed JSONL (decompress with the zstd CLI; the line types
  include session, turn/start, user/message, assistant/message with the
  per-message usage: inputTokens/outputTokens/totalTokens, tool/call,
  tool/result). The dirs are keyed by the working directory. The usage
  tally is computed by summing the usage fields.
- ~/.dsh/skills/ - the GLOBAL skills home (the fallback); the project's
  Site/Documentation/Skill/ is the specialized truth.
- ~/.dsh/profiles/ - the profile: the bundles (the live plugin family),
  the agent-loop config (NEVER edit while subagents run), the settings.
- ~/.dsh/ - the LIVE LEDGERS: the fs/observed governance trail (governor,
  pinner, cargo, normalize logs) - every tool-layer write is a governed
  event; the ledgers are the evidence.

## 5. The filesystem + web access

- The workspace with the DSH file policy (this session:
  danger-full-access; approval prompts disabled).
- read / write / edit / raw-write / normalize-file (the governed write
  path - every write/edit fires the governance chain), glob, grep, bash
  (the terminal for running commands - NEVER for reading or editing file
  content, per the code-authoring skill).
- web_search / web_fetch - the external web (untrusted data - cite and
  verify).

## 6. The governance observability

My own tool-layer writes are the plugin usage: write/edit/raw-write fire
the fs/observed chain - observable in the ~/.dsh ledgers (the activation
lines, the chain passes, the refusals).

## 7. The honest LIMITS (what the agent cannot see)

- The MAIN session's own token usage: the per-message usage is recorded in
  the SUBAGENT session files only.
- The GUI's DOM: no implicit DOM/screenshot context.
- The other conversations/sessions' content.
- The agent-loop's role routing internals: omitting provider/model/effort
  inherits the parent route - hence the always-explicit rule.
- The future/queue state beyond the user's messages and the process
  records (for this site: Site/Documentation/TRACKING.md is the durable
  queue record).

## 8. THE APHRODITE NOTES

- This site's batch state lives in Site/Documentation/TRACKING.md (the
  ledger) - the first thing to read on orientation.
- The batch runs max 2 active lanes; the parent's state block + the
  ledger are the runtime facts - there is no automatic batch-state
  broadcast. The subagent tooling's maxActiveSubagents is 50 (the headroom
  to spawn 50+ seated at once without exhausting backpressure) - the 2-at-
  a-time cadence is a batch discipline, not a tooling limit.
- Rate-limited lanes restart with the fresh state; their prior transcripts
  remain in ~/.dsh/sessions/ for post-mortems.
