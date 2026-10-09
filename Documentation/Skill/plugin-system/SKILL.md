> Specialized working copy (repo): adapted for the Aphrodite site from the
> DeepSeek tree at ~/Developer/Application/PlayForm/DeepSeek/Documentation/Skill/plugin-system/ (same structure). STATUS: this is the FAMILY REFERENCE kept for fidelity - the DSH plugin contract is universal; the Aphrodite deltas are marked in section 6. The site's own plugin pages are the presentation layer; this manual governs the contract being presented. Sync future changes to BOTH.
---
name: plugin-system
description: THE operating manual for the DeepSeek Harness plugin system as the Aphrodite site presents it - the DSH plugin contract (the loader surface, the bundle anatomy, the smokes as the arbiter, the ledger-string contract), plus the Aphrodite deltas (how the site's plugin pages must reflect the family facts). Load before writing, extending, or reviewing any plugin page content on this site.
whenToUse: Mandatory before writing or editing any plugin-related page, registry entry, or plugin contract explanation on this site - and before any actual DSH plugin code work (where this manual is the family reference). If you are about to describe the plugin system without knowing the contract, STOP and read this manual first.
---

# Plugin System - Operating Manual

The DeepSeek Harness plugin family: many packages, one contract. This
manual states the conventions directly - it does not deliberate.

## 1. The loader contract (every plugin)

1. The default export is a cordis plugin: `name` (the identity), `apply`
   (returns NOTHING - a returned value silently kills event delivery),
   `Config` (a schema; the loader validates + fills defaults at load -
   invalid config fails LOUD), `inject` (the service list; the loader's
   PENDING state orders the loads).
2. The identity lives in the package name, the `name` export, the build
   options, and the ledger logFile default. The ledger strings are the
   module's OWN - the factory never owns them.
3. The bundle layers compose at boot: the profile's bundle list + the
   `link:` dependencies are the activation; a `file:` dependency alone is
   not activation; the patch entries declare (`insert:`) or patch (a bare
   `id:` row - the config REPLACES the entry config wholesale, unknown ids
   are rejected).

## 2. The bundle anatomy

1. `Source/` - the plugin entry (name/apply/Config/inject), the behaviors,
   the structural types, the Config schema + the defaults - one definition
   per file, deeply nested.
2. The deterministic build: type-check + bundle; a red type-check FAILS
   the build. Consumers type-check against the BUILT output.
3. The build wipes + regenerates the output directory.

## 3. The family architecture (the module leaves vs the shared machinery)

1. The FACTORY owns the shared machinery: the ledger, the storage journal,
   the write executor (the one shared path: the fresh-stat version guard,
   the fence, the root-emit), the direct-govern fold, the gate, the
   continuation, the state builder.
2. The MODULE leaves are NEVER absorbed: the transforms, the update
   engines, the update gates, the ledger STRINGS, the config extensions +
   docs.
3. The governance modules register their steps with the factory at apply
   (canonicalize/pin/cargo/update) - the raw-write's `govern` selection
   runs them through the direct fold.
4. The direct path is the raw-write's ONLY governance channel: its actor
   carries the `govern` marker; absent/false = the escape hatch.

## 4. The smokes are the arbiter

1. Every change to a bundle's source must pass the bundle's smoke with
   ZERO assertion changes (the exceptions: the identity-driven strings
   change BY DESIGN, and additive coverage for new features).
2. The smokes load the REAL built targets against a fake context; they
   prove the MECHANICS - live battery work proves the WIRING.
3. The vacuously-green trap: a smoke whose fixture wiring is wrong can
   pass without exercising the code - verify the wiring first. (The site's
   analog: the standalone deploy's Drift skip - see the smoke-writing
   skill.)

## 5. The working conventions

1. One file per response; read before editing; content via write/edit; the
   terminal for builds/tests/metadata only.
2. No commits by agents - the user commits.

## 6. THE APHRODITE DELTAS (how the site presents this)

1. The site's plugin pages present the family facts, not folklore: exact
   package names, exact versions (the releases at 0.0.1), exact ledger
   method counts - sourced from the packages' READMEs (primary) and
   CHANGELOGs (secondary), never invented.
2. Every package/file mention on a plugin page links to its tree/Current
   placement on GitHub (the tree/Current law) without changing the
   mention's style or color.
3. The plugin pages follow the zine grammar like every other page (radius
   0, hard shadows, 16px floor, dark-only, the huge-whitespace rhythm).
4. The sanitization law applies doubly here: plugin examples must not leak
   real paths, keys, or session data - use synthetic examples.
5. If the site must describe a family fact this manual does not cover,
   check the DeepSeek repo's Documentation (the family's home) - do not
   guess.
