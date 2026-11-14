/**
 * Crate prose - the page's own sentences for each published crate.
 *
 * The roster is not here: `Source/Generated/Facts/Crates.json` is generated
 * from the workspace `Cargo.toml` plus every member's own manifest, so a crate
 * added to the workspace appears on `/crates/` with no edit to this file.
 * `Assert` in `Source/Library/Roster.ts` fails the build if this file names a
 * crate the workspace does not declare.
 *
 * `Role` and `Ships` are the page's framing of the crate's own `description`:
 * the manifest says what the package IS, these say what an install gets.
 */

/** What a page may add to a generated crate record. */
export interface CrateProseRecord {
	/** What the crate is, in the page's voice. */
	Role?: string;
	/** What a `cargo install` of it actually puts on disk. */
	Ships?: string;
	/** The paragraphs under the crate's case block. */
	Body?: string[];
	/** The decorative marker line, for the crate that has one. */
	Marker?: string;
}

export const CrateNote: Record<string, CrateProseRecord> = {
	aphrodite: {
		Role: "Chat Completions proxy with CCR, tool relay, and programmatic CCR",
		Ships: "the aphrodite binary + a cdylib/rlib",
		Body: [
			"Ships the aphrodite binary and a cdylib/rlib library; built on axum and tokio.",
		],
		Marker: "crate.aphrodite",
	},
	"aphrodite-hermes": {
		Role: "Hermes Agent integration - tool schemas, hook dispatch, skill registration",
		Ships: "the dylib + the aphrodite-hermes-setup helper",
		Body: [
			"Ships the aphrodite-hermes-setup helper binary and the dylib; watches config with notify.",
		],
	},
	"aphrodite-headroom-core": {
		Role: "The content transforms - classifier, smart crusher, tokenizer",
		Ships: "a library only; upstream's proxy surface does not ship",
		Body: [
			"The vendored fork's core library, linked by the proxy crate and published under its own name - upstream's proxy surface does not ship in Aphrodite.",
		],
	},
};
