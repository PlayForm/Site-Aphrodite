// Scenes.ts - the deck's typed narration: one scene per beat, the copy the
// page renders, the anchor a reader can link to, the page the beat exits
// into, and the duration the timeline reads.
//
// Every figure traces to the monorepo primaries: the 200-session ledger
// (26.9% deflected, 156,342,817 tokens, 1.3% retrieval tax) is README.md's
// measured study, the six hooks and thirteen tools are plugin.yaml's declared
// surface, the preview shapes are the README's own samples, and the threshold
// tiers are aphrodite.toml's defaults.
//
// The durations sum to exactly 64 seconds. The deck is a film AND a document:
// every beat is addressable at its Identifier, and every beat names the page
// that elaborates it, so the brief funnels into the site instead of looping
// back on itself.
//
// The Beat stamp carries the scene's own ordinal - the same number the
// transport shows - because two numbering systems in one frame (a stamp
// counting the ten slides beside a counter counting eleven beats) is a
// contradiction the reader has to resolve. The opening is beat 01 and carries
// its own stamp instead of a step number.

export interface Exit {
	/** The route that elaborates this beat. */
	readonly Href: string;
	/** The route's name, as the transport and the live region say it. */
	readonly Label: string;
}

export interface Scene {
	/**
	 * Stable scene key: the URL fragment the beat is addressable at
	 * (`/presentation/#classify`), and the visual branch the renderer switches
	 * on. Renaming one breaks every link to that beat, so it changes only when
	 * the beat itself does.
	 */
	readonly Identifier: string;
	/** The beat label rendered as the scene's tape stamp. */
	readonly Beat: string;
	/** The scene's one claim, set as the display headline. */
	readonly Title: string;
	/** One supporting sentence; the deck never asks for a third. */
	readonly Body: string;
	/** Seconds this scene holds the frame. */
	readonly Duration: number;
	/** The page that carries this beat's argument in full. */
	readonly Exit: Exit;
	/** The visual composition the scene renderer draws. */
	readonly Visual:
		| "opening"
		| "default"
		| "transform"
		| "overview"
		| "classify"
		| "preview"
		| "store"
		| "decide"
		| "hooks"
		| "ledger"
		| "closing";
}

export const Scenes: readonly Scene[] = [
	{
		Identifier: "opening",
		Beat: "CCR CORE // 64 SECOND BRIEF",
		Title: "Aphrodite",
		Body: "Tool output stops reaching the model raw. Four steps turn every result into a marker the agent can retrieve.",
		Duration: 4,
		Exit: { Href: "/", Label: "OVERVIEW" },
		Visual: "opening",
	},
	{
		Identifier: "default",
		Beat: "02 // THE DEFAULT",
		Title: "By default, every line enters the context.",
		Body: "A build prints 142 lines. Hermes forwards all of them, and every later turn re-sends the same block.",
		Duration: 6,
		Exit: { Href: "/", Label: "OVERVIEW" },
		Visual: "default",
	},
	{
		Identifier: "transform",
		Beat: "03 // THE TRANSFORMATION",
		Title: "The terminal keeps it. The model gets the digest.",
		Body: "One hook classifies the output, renders the preview, stores the bytes, and hands back the marker.",
		Duration: 7,
		Exit: { Href: "/showcase/", Label: "SHOWCASE" },
		Visual: "transform",
	},
	{
		Identifier: "overview",
		Beat: "04 // THE PIPELINE",
		Title: "Four steps, one decision.",
		Body: "Classify, preview, store, decide. The whole compress step stays under a millisecond.",
		Duration: 4.5,
		Exit: { Href: "/workbench/", Label: "WORKBENCH" },
		Visual: "overview",
	},
	{
		Identifier: "classify",
		Beat: "05 // STEP 1 - CLASSIFY",
		Title: "The classifier is the gate.",
		Body: "One type per invocation, first match wins. Each type carries its own threshold, so an error stays visible while a build log gets squeezed.",
		Duration: 6,
		Exit: { Href: "/tools/", Label: "TOOLS" },
		Visual: "classify",
	},
	{
		Identifier: "preview",
		Beat: "06 // STEP 2 - PREVIEW",
		Title: "The agent reads a line, not a blob.",
		Body: "An enriched, type-aware preview carries the signal the next decision needs: the error, the counts, the paths.",
		Duration: 6.5,
		Exit: { Href: "/examples/", Label: "EXAMPLES" },
		Visual: "preview",
	},
	{
		Identifier: "store",
		Beat: "07 // STEP 3 - STORE",
		Title: "The marker is the receipt.",
		Body: "BLAKE3 over the bytes, a 40-character address, and the original parked in SQLite or in memory.",
		Duration: 6,
		Exit: { Href: "/config/", Label: "CONFIG" },
		Visual: "store",
	},
	{
		Identifier: "decide",
		Beat: "08 // STEP 4 - DECIDE",
		Title: "Retrieve only when the answer needs the bytes.",
		Body: "The preview is enough most of the time. When it is not, aphrodite_retrieve resolves the marker, recursively and unchanged.",
		Duration: 6,
		Exit: { Href: "/case-study/", Label: "CASE STUDY" },
		Visual: "decide",
	},
	{
		Identifier: "hooks",
		Beat: "09 // THE HOOKS",
		Title: "Six hooks, one turn.",
		Body: "The plugin is a ctypes shim over a Rust dylib. Hermes calls it at every seam, so the intercept lands before the model sees anything.",
		Duration: 7,
		// /hooks/ carries the six-seam table today; Plan 2.2 folds that page into
		// /plugin/, whose retirement redirect keeps this link resolving.
		Exit: { Href: "/hooks/", Label: "HOOKS" },
		Visual: "hooks",
	},
	{
		Identifier: "ledger",
		Beat: "10 // THE LEDGER",
		Title: "A proxy sees the wire. Aphrodite sees the tool call.",
		Body: "The intercept lands before history, so the saving repeats on every later turn. Every marker stays resolvable.",
		Duration: 6.5,
		Exit: { Href: "/benchmarks/", Label: "BENCHMARKS" },
		Visual: "ledger",
	},
	{
		Identifier: "closing",
		Beat: "11 // THE INSTALL",
		Title: "Compress at the tool boundary.",
		Body: "The hooks run inside Hermes. The proxy stays for every other client.",
		Duration: 4.5,
		Exit: { Href: "/setup/", Label: "SETUP" },
		Visual: "closing",
	},
];
