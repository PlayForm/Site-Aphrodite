/**
 * Tool prose - the page's own sentences for a tool, where it has one.
 *
 * The roster is not here: `Source/Generated/Facts/Tools.json` is generated
 * from `crates/aphrodite-hermes/src/schemas.rs` and ordered by
 * `plugins/aphrodite/plugin.yaml`, so a tool added upstream appears on
 * `/tools/` with no edit to this file. `Assert` in `Source/Library/Roster.ts`
 * fails the build if this file names a tool the plugin does not register.
 *
 * A tool with no entry renders the schema's own first sentence and nothing
 * else - which is the point: the module's description is always enough, and
 * this map only adds the phrasing the schema cannot carry.
 */

/** What a page may add to a generated tool record. */
export interface ToolProseRecord {
	/** One sentence the schema does not say - the behaviour a reader asks about. */
	Note?: string;

	/** The paragraphs under a worked schema panel, for the tools that earn one. */
	Paragraph?: string[];
}

export const ToolProse: Record<string, ToolProseRecord> = {
	aphrodite_compress: {
		Paragraph: [
			"Hashes the content, classifies it (or trusts the type hint), keeps it in the session store, and hands back a resolvable marker - park bulky text here instead of carrying it in context.",
		],
	},
	aphrodite_retrieve: {
		Paragraph: [
			"Give hash or path - if both are present, path wins.",
			"The query parameter is the cheap way to poke at a large entry without pulling all of it into context.",
		],
	},
	aphrodite_rebuild: {
		Note: "Reports state; it never rebuilds anything, whatever the name suggests.",
	},
	aphrodite_prefetch_status: {
		Note: "Live prefetch schedule - what is loaded and ready, not what was once asked for.",
	},
};
