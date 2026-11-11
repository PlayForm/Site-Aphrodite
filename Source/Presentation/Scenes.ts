// Scenes.ts - the deck's typed narration: one scene per beat, the copy the
// page renders and the duration the timeline reads.
//
// Every figure traces to the monorepo primaries: the 200-session ledger
// (26.9% deflected, 156,342,817 tokens, 1.3% retrieval tax) is README.md's
// measured study, the six hooks and thirteen tools are plugin.yaml's declared
// surface, and the preview and marker shapes are the README's own samples.
//
// The durations sum to exactly 30 seconds - the brief's fixed length.

export interface Scene {
	/** Stable scene key, also the visual branch the renderer switches on. */
	readonly Identifier: string;
	/** The beat label rendered as the scene's tape stamp. */
	readonly Beat: string;
	/** The scene's one claim, set as the display headline. */
	readonly Title: string;
	/** One supporting sentence; the deck never asks for a third. */
	readonly Body: string;
	/** Seconds this scene holds the frame. */
	readonly Duration: number;
	/** The visual composition the scene renderer draws. */
	readonly Visual: "opening" | "flood" | "pipeline" | "hooks" | "ledger" | "closing";
}

export const Scenes: readonly Scene[] = [
	{
		Identifier: "opening",
		Beat: "CCR CORE // 30 SECOND BRIEF",
		Title: "Aphrodite",
		Body: "Tool output stops reaching the model raw. Six hooks classify it, store it, and hand back a marker.",
		Duration: 3.2,
		Visual: "opening",
	},
	{
		Identifier: "flood",
		Beat: "01 // THE FLOOD",
		Title: "Every tool result enters the context raw.",
		Body: "Build logs, diffs, browser trees, JSON blobs. The agent pays for noise before it reasons.",
		Duration: 4.6,
		Visual: "flood",
	},
	{
		Identifier: "pipeline",
		Beat: "02 // THE INTERCEPT",
		Title: "Classify, preview, store, decide.",
		Body: "The raw never becomes message history. A 40-character BLAKE3 address keeps it retrievable.",
		Duration: 5.0,
		Visual: "pipeline",
	},
	{
		Identifier: "hooks",
		Beat: "03 // THE HOOKS",
		Title: "Six hooks, one turn.",
		Body: "The plugin is a ctypes shim over a Rust dylib. Hermes calls it at every seam, so the intercept lands before the model sees anything.",
		Duration: 7.0,
		Visual: "hooks",
	},
	{
		Identifier: "ledger",
		Beat: "04 // THE LEDGER",
		Title: "A proxy sees the wire. Aphrodite sees the tool call.",
		Body: "The intercept lands before history, so the saving repeats on every later turn. Every marker stays resolvable.",
		Duration: 6.4,
		Visual: "ledger",
	},
	{
		Identifier: "closing",
		Beat: "05 // THE INSTALL",
		Title: "Compress at the tool boundary.",
		Body: "The hooks run inside Hermes. The proxy stays for every other client.",
		Duration: 3.8,
		Visual: "closing",
	},
];
