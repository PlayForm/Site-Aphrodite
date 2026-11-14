/**
 * Hook prose - the two pages' own sentences for the six hooks, keyed by name.
 *
 * The ROSTER is not here. `plugins/aphrodite/plugin.yaml` decides which hooks
 * exist and in what order; `Source/Generated/Facts/Plugin.json` carries that
 * list, `Source/Library/Roster.ts` numbers it, and `Assert` fails the build if
 * this file names a hook the manifest does not declare. A hook added upstream
 * renders on both pages immediately - with its name and no card body, until
 * someone gives it one here.
 *
 * Two pages carry the six hooks from different angles, so there are two maps:
 * `HookCard` is `/hooks/` (what each seam does), `PluginHookCard` is
 * `/plugin/` (what each seam does and what it refuses to do). Neither is a
 * list of hooks; both are annotations on one.
 */

/** What a page may add to a generated hook record. */
export interface HookCardRecord {
	/** The card's tape colour: `raw`, `canary` or `bone`. */
	Tape: string;
	/** The plate's shadow tone. */
	Tone: "subtle" | "canary" | "crimson";
	/** The plate's tilt from the `sm` breakpoint up. */
	Rotate: string;
	/** One paragraph per entry; rendered through `set:html`. */
	Body: string[];
}

/** The `/hooks/` page's cards. */
export const HookCard: Record<string, HookCardRecord> = {
	"on_session_start": {

		Tape: "raw",
		Tone: "subtle",
		Rotate: "sm:-rotate-[1.4deg]",
		Body: [
			"Resets every piece of per-session state to a clean baseline: turn counter, conversation index, recent markers, referenced files, tool-event telemetry, ephemeral directives.",
			"Injects nothing - the one-shot first-turn orientation renders later, on the first <span class=\"font-mono text-base text-weathered-teal\">pre_llm_call</span>.",
		],
	},
	"pre_tool_call": {

		Tape: "canary",
		Tone: "canary",
		Rotate: "sm:rotate-[1.4deg]",
		Body: [
			"Two interventions before a tool executes.",
			"<span class=\"font-bold text-bone-white\">Auto-backgrounding</span>: the hook rewrites long-running terminal/process calls to run in the background (poll worker, default on).",
			"<span class=\"font-bold text-bone-white\">Chain splitting</span> (opt-in): the hook splits chained commands with invisible segment markers so each segment compresses into its own CCR marker.",
			"Otherwise the call passes through unchanged.",
		],
	},
	"transform_tool_result": {

		Tape: "raw",
		Tone: "crimson",
		Rotate: "sm:-rotate-[1deg]",
		Body: [
			"After every tool call: record telemetry, run the skip gates, classify the content type, hash (BLAKE3), store, and replace the output with <span class=\"ccr-marker font-mono text-base text-weathered-teal\">&lt;&lt;&lt;CCR:hash|type|size&gt;&gt;&gt;</span> plus a compact preview.",
			"The hook tracks file references before the gates, so <span class=\"font-mono text-base text-weathered-teal\">aphrodite_files</span> sees every read even when nothing was compressed.",
		],
	},
	"transform_terminal_output": {

		Tape: "bone",
		Tone: "subtle",
		Rotate: "sm:rotate-[2deg]",
		Body: [
			"Same pipeline for shell stdout/stderr.",
			"The hook records non-zero exit codes as failures for the error-loop detector; chain-split segments compress unconditionally, before the threshold gate, so marked output never leaks raw; everything else passes the 1,024-char gate first.",
		],
	},
	"pre_llm_call": {

		Tape: "canary",
		Tone: "canary",
		Rotate: "sm:-rotate-[1.6deg] lg:-translate-y-1",
		Body: [
			"Runs the poll-worker checkpoint, then the context assembler: first-turn orientation (turn 0 only), <span class=\"font-mono text-base text-weathered-teal\">[directives:]</span> (never dropped), <span class=\"font-mono text-base text-weathered-teal\">[nudge:]</span> one-shots at most two (never dropped), background-task status, and the <span class=\"font-mono text-base text-weathered-teal\">[recall]</span> catalog - the first section dropped under pressure.",
			"One hard budget: 4,000 chars.",
		],
	},
	"post_llm_call": {

		Tape: "raw",
		Tone: "crimson",
		Rotate: "sm:rotate-[1.2deg] lg:translate-y-2",
		Body: [
			"Archives the last marker of the turn into the conversation index (so <span class=\"font-mono text-base text-weathered-teal\">aphrodite_diff</span> can report per-turn compressions), advances the turn counter, purges expired nudges after the counter advances - a one-shot nudge renders exactly once - and expires stale poll-worker tasks.",
		],
	},
};

/** The `/plugin/` page's cards - the same six seams, with the failure contract. */
export const PluginHookCard: Record<string, HookCardRecord> = {
	"on_session_start": {

		Tape: "raw",
		Tone: "subtle",
		Rotate: "sm:-rotate-[1.4deg]",
		Body: [
			"Resets every piece of per-session state to a clean baseline: turn counter, conversation index, recent markers, referenced files, tool-event telemetry, ephemeral directives.",
			'Injects nothing - the one-shot first-turn orientation renders later, on the first <span class="font-mono text-base text-weathered-teal">pre_llm_call</span>.',
			'<span class="font-bold text-bone-white">Fails on:</span> a resumed session that skipped the reset carries the previous session\'s counters into the new one, and the turn-0 orientation never renders because the counter is not zero.',
		],
	},
	"pre_tool_call": {

		Tape: "canary",
		Tone: "canary",
		Rotate: "sm:rotate-[1.4deg]",
		Body: [
			"Two interventions before a tool executes.",
			'<span class="font-bold text-bone-white">Auto-backgrounding</span>: the hook rewrites long-running terminal/process calls to run in the background (poll worker, default on).',
			'<span class="font-bold text-bone-white">Chain splitting</span> (opt-in): the hook splits chained commands with invisible segment markers so each segment compresses into its own CCR marker.',
			"Otherwise the call passes through unchanged.",
			'<span class="font-bold text-bone-white">Fails on:</span> a rewritten call the agent never asked for still reads as a foreground result - the poll worker owns the status, and a stopped poll worker leaves the background job running with no reader.',
		],
	},
	"transform_tool_result": {

		Tape: "raw",
		Tone: "crimson",
		Rotate: "sm:-rotate-[1deg]",
		Body: [
			'After every tool call: record telemetry, run the skip gates, classify the content type, hash (BLAKE3), store, and replace the output with <span class="ccr-marker font-mono text-base text-weathered-teal">&lt;&lt;&lt;CCR:hash|type|size&gt;&gt;&gt;</span> plus a compact preview.',
			'The hook tracks file references before the gates, so <span class="font-mono text-base text-weathered-teal">aphrodite_files</span> sees every read even when nothing was compressed.',
			'<span class="font-bold text-bone-white">Fails on:</span> a store that cannot write. The gate still passes, the marker still renders, and the bytes it addresses are gone - which is why the preview is written to answer the common question without the retrieve.',
		],
	},
	"transform_terminal_output": {

		Tape: "bone",
		Tone: "subtle",
		Rotate: "sm:rotate-[2deg]",
		Body: [
			"Same pipeline for shell stdout/stderr.",
			"The hook records non-zero exit codes as failures for the error-loop detector; chain-split segments compress unconditionally, before the threshold gate, so marked output never leaks raw; everything else passes the 1,024-char gate first.",
			'<span class="font-bold text-bone-white">Fails on:</span> interleaved stdout and stderr. The stream is compressed as one buffer, so the ordering the terminal showed is the ordering the marker keeps - and a reader who needs the two separated must retrieve.',
		],
	},
	"pre_llm_call": {

		Tape: "canary",
		Tone: "canary",
		Rotate: "sm:-rotate-[1.6deg] lg:-translate-y-1",
		Body: [
			'Runs the poll-worker checkpoint, then the context assembler: first-turn orientation (turn 0 only), <span class="font-mono text-base text-weathered-teal">[directives:]</span> (never dropped), <span class="font-mono text-base text-weathered-teal">[nudge:]</span> one-shots at most two (never dropped), background-task status, and the <span class="font-mono text-base text-weathered-teal">[recall]</span> catalog - the first section dropped under pressure.',
			"One hard budget: 4,000 chars.",
			'<span class="font-bold text-bone-white">Fails on:</span> a budget with no room left. Directives and nudges are never dropped, so the sections that lose are the recall catalog first and the background status after it - the model is told less, never told wrong.',
		],
	},
	"post_llm_call": {

		Tape: "raw",
		Tone: "crimson",
		Rotate: "sm:rotate-[1.2deg] lg:translate-y-2",
		Body: [
			'Archives the last marker of the turn into the conversation index (so <span class="font-mono text-base text-weathered-teal">aphrodite_diff</span> can report per-turn compressions), advances the turn counter, purges expired nudges after the counter advances - a one-shot nudge renders exactly once - and expires stale poll-worker tasks.',
			'<span class="font-bold text-bone-white">Fails on:</span> a turn that never completes. No post-turn archive means no per-turn diff entry for it, and the nudge that should have expired waits for the next completed turn.',
		],
	},
};

/** The `/hooks/` page's turn-loop pane, in order. */
export const Sequence: { Text: string; Tone: string }[] = [
	{ Text: "session starts", Tone: "result" },
	{ Text: "→ on_session_start · reset per-session state", Tone: "canary" },
	{ Text: "↓", Tone: "mute" },
	{ Text: "user turn", Tone: "result" },
	{ Text: "→ pre_tool_call · auto-background, chain split", Tone: "canary" },
	{ Text: "↓", Tone: "mute" },
	{ Text: "tool or terminal runs", Tone: "result" },
	{ Text: "→ transform_tool_result / transform_terminal_output · compress to marker", Tone: "canary" },
	{ Text: "↓", Tone: "mute" },
	{ Text: "→ pre_llm_call · inject directives, nudges, recall catalog", Tone: "canary" },
	{ Text: "↓", Tone: "mute" },
	{ Text: "LLM responds", Tone: "result" },
	{ Text: "→ post_llm_call · archive turn, advance counter, expire", Tone: "canary" },
	{ Text: "↓", Tone: "mute" },
	{ Text: "⟲ next turn", Tone: "plain" },
];

/** The `/plugin/` page's turn-loop pane, in order. */
export const PluginSequence: { Text: string; Tone: string }[] = [
	{ Text: "session starts", Tone: "result" },
	{ Text: "→ on_session_start · reset per-session state", Tone: "canary" },
	{ Text: "↓", Tone: "mute" },
	{ Text: "user turn", Tone: "result" },
	{ Text: "→ pre_tool_call · auto-background, chain split", Tone: "canary" },
	{ Text: "↓", Tone: "mute" },
	{ Text: "tool or terminal runs", Tone: "result" },
	{
		Text: "→ transform_tool_result / transform_terminal_output · compress to marker",
		Tone: "canary",
	},
	{ Text: "↓", Tone: "mute" },
	{ Text: "→ pre_llm_call · inject directives, nudges, recall catalog", Tone: "canary" },
	{ Text: "↓", Tone: "mute" },
	{ Text: "LLM responds", Tone: "result" },
	{ Text: "→ post_llm_call · archive turn, advance counter, expire", Tone: "canary" },
	{ Text: "↓", Tone: "mute" },
	{ Text: "⟲ next turn", Tone: "plain" },
];
