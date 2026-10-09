> Specialized working copy (repo): adapted for the Aphrodite site from the
> DeepSeek tree at ~/Developer/Application/PlayForm/DeepSeek/Documentation/Skill/plugin-development/ (same structure). STATUS: this is the FAMILY REFERENCE kept for fidelity - the DSH plugin API contract is universal and this manual is its authoritative summary; the Aphrodite deltas are marked in section 14 (the site presents this contract, it does not implement it here). Sync future changes to BOTH.
---
name: plugin-development
description: THE operating manual for authoring Deep Harness (DSH) plugins against the cordis plugin API - the five dispatch modes, plugin anatomy, Config schemas, services, fibers/effects/HMR, tools, packaging, performance pressure rules, the well-integrated checklist, and a verified pitfalls catalog. Load before writing, refactoring, or reviewing ANY DSH plugin - and before writing any site content that explains the plugin API.
whenToUse: Mandatory before creating a plugin bundle, hooking a cordis event, exporting a Config schema, providing/consuming a service, registering a tool, packing a bundle, or diagnosing why a plugin did not activate - and before writing any plugin-API explanation on the Aphrodite site. If you are about to write plugin code or plugin prose without having applied this manual, stop and read it first.
---

# DSH Plugin Development - Operating Manual

## 0. The one sentence

A DSH plugin is a cordis plugin: it receives `ctx` and `config`, declares
what it needs, and integrates ONLY through the API - events, services,
tools, config schemas, effects. The harness is a microkernel: "Every part
of the product is a plugin ... There is no privileged core to patch."
Free-floating Node.js inside a plugin is the anti-pattern.

## 1. The API map

| Seam | Entry | Role |
|---|---|---|
| Events | `ctx.on/emit/waterfall/parallel/serial/bail` | observe & influence the host |
| Config | `export const Config = Schema.object({...})` | validated, defaulted, UI-editable |
| Services | `ctx.provide` / `ctx.inject` / Service classes | typed capabilities on `ctx.<name>` |
| Tools | `ctx.tools.register(defineTool({...}))` | model-callable operations |
| Effects | `ctx.effect` | registrations that unwind on unload |
| Logger | `ctx.logger(name)` | diagnostics (never `console.log`) |
| Subprocess/Sandbox | `ctx.subprocess`, `ctx.sandbox` | confined process execution |
| Jobs | `ctx.jobs.start({kind, label, owner, run})` | harness-owned background work |

## 2. Event bus - the five dispatch modes

`DispatchMode = 'emit' | 'parallel' | 'serial' | 'bail' | 'waterfall'`. The
mode is part of the event's public contract.

| Mode | Awaited? | Dispatch Order | Has Return? |
|---|---|---|---|
| `emit` | No | registration order | No |
| `waterfall` | No (awaiting happens through `next()`) | registration order | Yes |
| `parallel` | Yes | all in parallel | No |
| `serial` | Yes | registration order | Yes |
| `bail` | No | order until one bails | Yes |

- `ctx.emit(name, ...args)` - synchronous broadcast; returned promises and
  values are not awaited or collected.
- `ctx.waterfall(...)` - each listener receives `(...args, next)`; calling
  `next()` delegates onward; returning without `next()` short-circuits.
  An observing/annotating waterfall listener MUST call `next()` -
  omitting it silently swallows the default behavior downstream.
- `ctx.on(name, listener)` - listener owned by the current fiber; removed
  on unload, no manual bookkeeping.
- Scoping: every dispatch has a `thisArg` overload; root listeners on
  unscoped events (e.g. `fs/observed`) hear ALL dispatches.

## 3. Plugin anatomy

Accepted export shapes: Function `(ctx, config) => any` (the common form),
Constructor (use when providing a service), Object `{ apply(ctx, config) }`.
Harness idiom: `export const name` + `export function apply`. Load failure
is LOUD - a plugin that fails to load is a loud failure, not a skipped
entry. Declaration merging provides typed vocabulary (`Context`,
`Events`).

## 4. Config contract

Export a real schema (`Schema.object({...})` with defaults); the loader
validates and fills defaults at load, and invalid configuration fails the
load with an actionable error. Every tunable is a config field - test:
"whether the config file can change the value without a code edit".
Config edits hot-replace the plugin (old instance unloads, new loads).

## 5. Services

Service base class: subclass calls `super(ctx, name)`; registered
immediately, removed with its fiber. `ctx.provide(name, value)` - owned by
the fiber. A plugin with `inject` stays PENDING until every service exists
- load order does not matter. Registering NO service is a legitimate
archetype (policy added through event gates).

## 6. Fibers & effects

A fiber is one loaded plugin instance: lifecycle state, validated config,
registered effects (PENDING -> LOADING -> ACTIVE -> UNLOADING -> DISPOSED).
`ctx.effect(execute)` runs immediately; disposers run in reverse
registration order on unload; keep order-dependent cleanup inside ONE
disposer. Anything raw (timers, watchers, connections, child processes)
must be wrapped in `ctx.effect` - module-level side effects are not
unwound. HMR reloads rerun apply.

## 7. Tools

`ctx.tools.register(defineTool({...}))`: typed parameters, `execute`
returns ONE canonical JSON value per `output.schema`, `output.render`
converts it to model-facing content. Registration is readonly after the
fact; honor `exec.signal`. Pipeline order: `tools/pre-execute` ->
`ctx.tools.guard()` -> `tools/execute` -> `tools/post-execute` ->
`tools/result`. Presenters are pure (no I/O, no session state, no clock).

## 8. Performance & pressure rules

The hardest rule: `fs/observed` is a fire-and-forget recording event - its
listener MUST be synchronous and side-effect-only, because the tool does
not guard the emit; a throwing listener can fail the tool call after a
mutation already succeeded. Background work goes through
`ctx.jobs.start` with a task-owned cancellation signal - never block an
emit listener. Contain listener exceptions; durable facts go through the
logger/session events.

## 9. Packaging & activation

Bundle = npm package shipping a config layer (`dsh.bundle.patch`); patch
rows `- insert:` inserts new rows, later layers override earlier rows by
`id` (the config is replaced wholesale - an override must restate every
key); `disabled: true` unmounts without deleting. Profile = the bundle
list + its own patch layer, applied after every bundle layer. Verify
activation with the Inspect tools and a durable ledger line written in
`apply()` - never assume a restart activated the bundle.

## 10. Well-integrated plugin checklist (15 items)

1. Single entry with named exports (`name` + `apply`, optional
   `Config`/`inject`/class).
2. Required services declared via `inject` - never rely on load order.
3. Real Config schema, defaults on fields, fail-loud.
4. Every tunable is a config field.
5. All registrations through `ctx` are effects; raw resources wrapped in
   `ctx.effect`.
6. Order-sensitive teardown inside ONE disposer.
7. Waterfall discipline: observers call `next()`; only decision-owners
   short-circuit.
8. `emit` listeners are synchronous recorders: no awaits, no throws.
9. Capability I/O through the seams; never parse opaque ids.
10. Policy as listeners, not service calls.
11. Tools via `defineTool`: typed parameters, one canonical value, pure
    renderers, readonly after registration.
12. Typed vocabulary via declaration merging.
13. `ctx.logger(name)`, never console.
14. Bundle packaging with stable ids and override-friendly defaults.
15. Idempotent under HMR: no module-level side effects; disposal complete
    before reload; stable row ids; load failure is loud.

## 11. Pitfalls catalog (verified)

1. `FsTarget` has no `.path` - gate on the target key/display path.
2. `fs/observed` payload is positional `(target, observation, actor)`;
   gate `observation.kind === "present"` AND the actor's tool name.
3. Bare `- id:` patch rows fail - use `- insert:`.
4. `ctx.emit` does not await listeners - contain async rejections.
5. Module-level import of an unresolvable package crashes the whole bundle
   load.
6. Relative `import.meta.dirname` chains from an installed copy resolve
   wrong - resolve via `new URL(..., import.meta.url)`.
7. Post-hoc rewrites must refresh the observation-policy's version record
   or the next guarded write fails stale-version.
8. Do not shadow globals (`const Set = ...` is a TDZ error).
9. The host PATH is not the user's shell PATH - child processes need
   absolute binary paths from config.
10. CJS-with-default packages: access the entry defensively.
11. Verify activation via Inspect + a durable ledger line - never assume.
12. Same-version reinstall can be a package-manager no-op - bump the
    version to force a real reinstall.
13. A THROW in an emit listener fails the tool call after mutation -
    catch-all suppression (logger/ledger only) is mandatory.
14. `export default { name, apply }` shadows the named exports - `inject`
    and `Config` must also be on the default object.
15. NEVER return a value from `apply` - expose state via a context
    attachment for test probes instead.
16. `ctx.jobs` at root needs a controller attached, not an injection.
17. `ctx.fs.writeText` from a root plugin requires an explicit sandbox
    policy argument.

## 12. Documented gaps (don't over-document)

- No-schema config passes through unvalidated.
- Waterfall "Awaited? No": awaiting happens through `next()`.
- Cooldowns are not a framework concept for listeners.

## 13. References

The DeepSeek repo (~/Developer/Application/PlayForm/DeepSeek) carries the
full API docs in its Documentation tree; the live reference template is the
shipped production plugin family in that repo. For the site's presentation
of this contract, see the plugin-system skill (the Aphrodite deltas).

## 14. THE APHRODITE DELTAS

1. This site PRESENTS the contract above; it does not implement plugins.
   Plugin pages must reflect the checklist and the pitfalls accurately -
   a page that contradicts section 10/11 is wrong.
2. Plugin page content is sourced from the family's real READMEs and
   docs, with tree/Current links for every file/package mention.
3. The zine grammar and the sanitization law bind plugin pages like every
   other page.
