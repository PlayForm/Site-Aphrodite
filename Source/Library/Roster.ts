/**
 * Roster - the generated reference rosters, typed, with their own guards.
 *
 * Every reference page on this site answers "what does Aphrodite ship?" and
 * the answer is not the page's to remember. `Scripts/Prepare.ts` reads the
 * module's own declarations into `Source/Generated/Facts/`, and this module is
 * the one place they are typed and joined:
 *
 * | roster        | declared by                              |
 * | ------------- | ---------------------------------------- |
 * | tools, hooks  | `plugins/aphrodite/plugin.yaml`           |
 * | descriptions  | `crates/aphrodite-hermes/src/schemas.rs`  |
 * | config keys   | `docs/config/aphrodite-toml.md` + the example |
 * | env vars      | `docs/config/env-vars.md`                 |
 * | crates        | `Cargo.toml` + each crate's own manifest  |
 *
 * THE TWO FAILURES THIS MODULE REFUSES
 *
 * - UNDER-REPORT. A tool declared in `plugin.yaml` with no schema, or a hook
 *   the manifest names that no page renders, means the site is hiding part of
 *   the shipped surface. The join below throws instead.
 * - OVER-REPORT. A page that names a tool, hook or key the module does not
 *   declare is documenting something that does not ship. `Assert` throws for
 *   that, and every page calls it with its own prose before rendering.
 *
 * A page's prose is therefore an ENRICHMENT keyed by a generated name: it can
 * deepen a row, never add or remove one. Adding a tool to `plugin.yaml` makes
 * it appear on the site with no other edit - it simply arrives without the
 * page's optional extra sentence.
 */

import ConfigFacts from "../Generated/Facts/Config.json";
import CrateFacts from "../Generated/Facts/Crates.json";
import EnvFacts from "../Generated/Facts/Env.json";
import PluginFacts from "../Generated/Facts/Plugin.json";
import ToolFacts from "../Generated/Facts/Tools.json";

import type {
	ConfigKeyRecord,
	CrateRecord,
	EnvVarRecord,
	HookRecord,
	ToolRecord,
	ToolParameter,
} from "./Records";

/** The plugin manifest: identity, requirements, and the two registries. */
export const Manifest = PluginFacts.Manifest;

/** The first sentence of a description - the line the deferred catalog shows. */
function First(Text: string): string {
	const At = Text.search(/\.\s/);

	return At === -1 ? Text : Text.slice(0, At + 1);
}

/**
 * The six hooks, in manifest order.
 *
 * `plugin.yaml` is the whole source: a hook added there appears here, and the
 * ordinal is computed rather than typed.
 */
export const Hooks: HookRecord[] = Manifest.Hooks.map((Name: string, Index: number) => ({
	Name,
	N: String(Index + 1).padStart(2, "0"),
}));

/** Every schema the crate declares, by name. */
const Schemas: { Name: string; Description: string; Parameters: ToolParameter[] }[] =
	ToolFacts.Schemas.Tools;

/**
 * The registered tools, in manifest order, each carrying its own schema.
 *
 * Throws when the manifest names a tool the schema list does not - the site
 * must never quietly under-report the shipped surface.
 */
export const Tools: ToolRecord[] = Manifest.Tools.map((Name: string) => {
	const Schema = Schemas.find((Candidate) => Candidate.Name === Name);

	if (Schema === undefined) {
		throw new Error(
			`[Roster] ${Name} is declared in plugins/aphrodite/plugin.yaml but has no schema in crates/aphrodite-hermes/src/schemas.rs. The /tools/ page would under-report the shipped surface.`,
		);
	}

	return {
		Name,
		Summary: First(Schema.Description),
		Description: Schema.Description,
		Parameters: Schema.Parameters,
	};
});

/**
 * Schemas that no manifest entry declares.
 *
 * `aphrodite_debug` is compiled in only under `debug_assertions`, so it is a
 * real schema and not a registered tool. It is named on the page rather than
 * dropped: a reader who sees it in a debug build should find it here.
 */
export const Undeclared: ToolRecord[] = Schemas.filter(
	(Candidate) => !(Manifest.Tools as string[]).includes(Candidate.Name),
).map((Schema) => ({
	Name: Schema.Name,
	Summary: First(Schema.Description),
	Description: Schema.Description,
	Parameters: Schema.Parameters,
}));

/** Every configuration key, from the schema doc joined to the shipped example. */
export const ConfigKeys: ConfigKeyRecord[] = ConfigFacts.Schema.Records;

/** Every environment variable the module documents, live and inactive alike. */
export const EnvVars: EnvVarRecord[] = EnvFacts.EnvVars.Variables;

/** The workspace's crates plus the vendored fork the binary links. */
export const Crates: CrateRecord[] = CrateFacts.Workspace.Crates;

/**
 * Throw when a page's prose names something the module does not declare.
 *
 * An enrichment map is allowed to deepen a row and is not allowed to invent
 * one, so this is the check that keeps a stale sentence from outliving the
 * tool it described.
 */
export function Assert(Label: string, Prose: Record<string, unknown>, Roster: string[]): void {
	const Unknown = Object.keys(Prose).filter((Name) => !Roster.includes(Name));

	if (Unknown.length === 0) return;

	throw new Error(
		`[Roster] ${Label} names ${Unknown.join(", ")}, which the module does not declare. Delete the entry, or add the item upstream and advance the pin.`,
	);
}

/** The tool names, for `Assert`. */
export const ToolNames: string[] = Tools.map((Tool) => Tool.Name);

/** The hook names, for `Assert`. */
export const HookNames: string[] = Hooks.map((Hook) => Hook.Name);

/** The config key names, for `Assert`. */
export const ConfigNames: string[] = ConfigKeys.map((Key) => Key.Key);

/** The crate names, for `Assert`. */
export const CrateNames: string[] = Crates.map((Crate) => Crate.Name);
