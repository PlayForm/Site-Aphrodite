/**
 * Pipeline - the ONE client-side simulation of Aphrodite's four steps
 * (classify -> preview -> store -> decide), shared by every page that shows
 * the stream/preview pair. `Component/ZinePipeline.astro` is the only
 * consumer of the bindings; a page renders the component and writes no
 * simulation code of its own.
 *
 * Why this module exists: the grammar's fourth law says the stream/preview
 * pair is the whole argument of the product, and two pages narrate it. Before
 * this module each page (and the deck) carried its own copy of the classifier,
 * the preview shapes and the digest - three sources for one truth. The rules
 * below are byte-exact from README.md:104-176 (the type-aware classifier and
 * the preview shapes) and README.md:371-442 (the live-reloadable thresholds).
 *
 * The SANITIZATION law: the samples this drives are synthetic, generated for
 * the demo - never real session content, no personal info, no user-home paths.
 * The SIMULATION BOUNDARY on /workbench/ states exactly what is real (the
 * classifier rules, the preview shapes, the threshold semantics) and what is
 * not (the digest is a deterministic stand-in, no engine timing is measured
 * here, and retrieval is a visitor's action, never a call).
 *
 * NO FABRICATED FIGURES. Every number this module returns is derived from the
 * input and the threshold table: bytes are measured with `TextEncoder`, counts
 * are counted, and nothing is randomised. A readout that changes because it
 * was generated rather than measured is a lie on a page whose whole pitch is
 * an honest preview, so there is no timing field here at all - the engine's
 * own nanosecond figures live on /benchmarks/ with their environment and their
 * source, and they are historical measurements, not this tab's.
 *
 * MECHANICAL OUTCOME, NOT JUDGEMENT. This module reports what the pipeline did
 * with the bytes (pass-through, or preview + marker, plus where the store
 * would route them). It does NOT report whether the preview answers the
 * agent's question: the simulator was never given a task, so that judgement
 * belongs to the agent and retrieval is the visitor's action.
 */

export interface SimulateInput {
	Text: string;
	/** Pin a classifier type; otherwise infer it. */
	Type?: string;
	/** Threshold overrides for this one call (the page's knobs pass theirs). */
	Thresholds?: Record<string, number>;
}

/**
 * Everything one run produces. Every field is MEASURED or DERIVED - there is no
 * random value and no clock reading anywhere in this shape, because the page
 * that prints it claims to be an honest instrument.
 */
export interface SimulateResult {
	/** The classifier's first-match type name. */
	Type: string;
	/** The enriched preview line, built by `PreviewLine`. */
	Preview: string;
	/** The illustrative marker this run would mint, or "" when nothing was marked. */
	Marker: string;
	/** Input size in UTF-8 bytes (never `String.length`, which counts UTF-16 units). */
	RawBytes: number;
	/** Preview line size in UTF-8 bytes. */
	PreviewBytes: number;
	/** Marker size in UTF-8 bytes. */
	MarkerBytes: number;
	/**
	 * What the agent would actually receive in place of the raw bytes: the
	 * preview PLUS the marker, because both are what a compressed turn holds.
	 * This is the unit /benchmarks/ counts, so this page counts it too.
	 */
	ReplacementBytes: number;
	/**
	 * `1 - ReplacementBytes / RawBytes`, in whole percent. 0 when nothing was
	 * replaced, and NEGATIVE when the replacement is larger than the original -
	 * a small blob can cost more as a preview plus a marker than it did raw,
	 * and reporting that as 0% would hide a real outcome.
	 */
	ReductionPercent: number;
	/** True when the replacement is larger than the input it replaced. */
	ReplacementLarger: boolean;
	/** Whether the token proxy compressed this blob (and therefore minted a marker). */
	Marked: boolean;
	/** The effective token limit applied to this type, in bytes (base x multiplier). */
	ThresholdBytes: number;
	/** Where the store would route the blob: inline in the session, or durable CCR. */
	Storage: "inline" | "durable";
	/** Whether the cache lane's own threshold was crossed. */
	CacheCompressed: boolean;
	/**
	 * The MECHANICAL outcome, which is all a simulator can know. Whether the
	 * preview answers the agent's question is the agent's judgement, not this
	 * function's, and retrieval is the visitor's action on this page.
	 */
	Outcome: "pass-through" | "preview-and-marker";
}

/**
 * The shipped [compression] defaults, byte-exact from
 * crates/aphrodite/templates/aphrodite.toml. A slider that shows anything
 * else is drift: the page used to print 512/4096/2048/3.0 while the engine
 * ran 256/2048/1024/1.0.
 */
export const ThresholdDefaults: Record<string, number> = {
	tool_threshold_token: 256,
	tool_threshold_cache: 2048,
	inline_threshold: 1024,
	code_multiplier: 1.0,
	engine_threshold_pct: 30,
};

const Thresholds: Record<string, number> = { ...ThresholdDefaults };

/** Tier multipliers (README.md:187-198): how long a type stays visible. */
const TierMultiplier: Record<string, number> = {
	error: 8,
	build: 1,
	linter: 1,
	log: 1,
	diff: 2,
	git: 2,
	text: 2,
};

function TierOf(Type: string): number {
	if (Type.startsWith("code")) return 4;
	return TierMultiplier[Type] ?? 1;
}

/**
 * JSON parsing, with the failure made explicit instead of thrown.
 *
 * `JSON.parse` succeeds on more than an object: `[]`, `null`, `42` and `"text"`
 * are all valid JSON, and `"exit_code" in null` throws a TypeError. The old
 * classifier cast the result to a record and asked `in`, which meant a pasted
 * `null` or a bare array took the whole classifier down - and a classifier that
 * throws is indistinguishable from one that has no opinion, except that nothing
 * downstream renders at all.
 */
const ParseFailed: unique symbol = Symbol("ParseFailed");

type ParseOutcome = unknown | typeof ParseFailed;

function TryParseJson(Text: string): ParseOutcome {
	try {
		return JSON.parse(Text) as unknown;
	} catch {
		return ParseFailed;
	}
}

/** A parsed object that is not an array - the only shape `in` is safe on. */
function IsRecord(Value: unknown): Value is Record<string, unknown> {
	return typeof Value === "object" && Value !== null && !Array.isArray(Value);
}

/** The JSON type name for a parsed scalar, for the preview's own vocabulary. */
function ScalarName(Value: unknown): string {
	if (Value === null) return "null";
	return typeof Value;
}

/** A one-item peek at an array's first element: its keys, or the value itself. */
function FirstItem(Items: readonly unknown[]): string {
	if (Items.length === 0) return "empty array";
	const First = Items[0];
	return IsRecord(First) ? Object.keys(First).join(", ") : String(First);
}

/**
 * The classifier: type-aware, first match wins, mirroring the
 * README.md:153-176 catalog order and detection keywords.
 */
export function Classify(Text: string): string {
	const Lines = Text.split("\n").filter((Line) => Line.trim() !== "");
	const First = Lines[0] ?? "";
	const Trimmed = Text.trim();

	// search: search-result JSON (total_count + query). Checked BEFORE the
	// generic json rule - a search result is itself JSON, so the generic
	// branch would otherwise claim it first (README.md:169).
	if (Trimmed.includes("total_count") && Trimmed.includes("query")) return "search";

	// JSON / tool_output: starts with { or [ and parses as JSON. The `in` test
	// runs only on a parsed RECORD: `[]`, `null` and `42` are all valid JSON,
	// and `"exit_code" in null` is a TypeError, not a false.
	if (Trimmed.startsWith("{") || Trimmed.startsWith("[")) {
		const Parsed = TryParseJson(Trimmed);
		if (Parsed !== ParseFailed) {
			if (IsRecord(Parsed) && ("exit_code" in Parsed || "status" in Parsed)) return "tool_output";
			return "json";
		}
	}

	// diff headers.
	if (/^diff --git|^@@ -|^\+\+\+|^--- /m.test(Text)) return "diff";

	// git porcelain status codes, majority.
	const StatusLines = Lines.filter((Line) => /^(M|A|D|R|UU|\?\?) /i.test(Line));
	if (Lines.length > 0 && StatusLines.length / Lines.length > 0.5) return "git";

	// gitlog: commit blocks + Author.
	if (/^commit [0-9a-f]{7,40}/m.test(Text) && /^Author:/m.test(Text)) return "gitlog";

	// ls: mode strings or bare path tokens, majority.
	const ModeLines = Lines.filter((Line) => /^[-dl][rwxsStT-]{9} /.test(Line));
	if (Lines.length > 0 && ModeLines.length / Lines.length > 0.5) return "ls";

	// test summaries.
	if (
		/test result:|=== RUN|passed|failed.*finished in|pytest|jest/i.test(Text) &&
		/test/i.test(Text)
	)
		return "test";

	// grep: path:line:match hits, majority.
	const GrepLines = Lines.filter((Line) => /^[\w./-]+:\d+:.+/.test(Line));
	if (Lines.length > 0 && GrepLines.length / Lines.length > 0.5) return "grep";

	// code variants (keyword pairs).
	if (/\bfn\b|\bimpl\b|\bstruct\b|\benum\b/.test(Text) && /->|&|\buse\b/.test(Text))
		return "code_rust";
	if (/\bdef\b/.test(Text) && /import|class|from|self\./.test(Text)) return "code_python";
	if (/\bfunc\b|\bpackage\b/.test(Text) && /import \(/.test(Text)) return "code_go";
	if (/function|const|=>/.test(Text) && /import|export/.test(Text)) return "code_js";
	if (/\bfn\b|\bdef\b|\bclass\b|\bimport\b/.test(Text)) return "code";

	// build: first line keywords.
	if (/^\s*(Compiling|Finished|running|test)\b/m.test(Text)) return "build";

	// error: first-line keywords.
	if (/^(error|Error|Traceback|panic)/.test(First)) return "error";

	// linter keywords.
	if (/error\[E|error:|warning:|clippy|tsc/.test(Text)) return "linter";

	// log levels or timestamps.
	if (/\[(INFO|WARN|ERROR|DEBUG|TRACE)\]|^\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}/m.test(Text))
		return "log";

	// terminal: shell / exit-code traces.
	if (/^\$ |exit code: \d+|^exit \d+/m.test(Text)) return "terminal";

	// fallback.
	return "text";
}

function CountMatches(Text: string, Re: RegExp): number {
	return (Text.match(Re) ?? []).length;
}

function FirstError(Text: string): string {
	const Match = Text.match(/(error\[E\d+\]:.*|error:.*)/);
	return (Match?.[1] ?? "no error").slice(0, 60);
}

/** The preview line shapes (README.md:108-133). */
export function PreviewLine(Type: string, Text: string, Hint: number): string {
	const Lines = Text.split("\n").filter((Line) => Line.trim() !== "");
	const ByteLen = new TextEncoder().encode(Text).length;
	const Ellipsis = (Part: string) => (Part.length > Hint ? `${Part.slice(0, Hint)}...` : Part);
	const CodeCounts = (Re: RegExp, Name: string) => `${CountMatches(Text, Re)}${Name}`;

	switch (Type) {
		case "build":
			return `[build:${CountMatches(Text, /error\[E|error:/g)}E ${CountMatches(Text, /warning:/g)}W ${Lines.length}L | ${Ellipsis(FirstError(Text))}]`;
		case "test": {
			// Prefer the summary line's numbers ("N passed; M failed; K
			// ignored"), fall back to the per-line "... ok/FAILED" tallies.
			const Summary = Text.match(/(\d+) passed; (\d+) failed; (\d+) ignored/);
			const Pass = Number(Summary?.[1] ?? CountMatches(Text, /\. \.\.\. ok/g));
			const Fail = Number(Summary?.[2] ?? CountMatches(Text, /\. \.\.\. FAILED/g));
			const Ignored = Number(Summary?.[3] ?? 0);
			const Secs = Text.match(/finished in ([\d.]+)s/)?.[1] ?? "0.00";
			const Body =
				Fail > 0
					? ` | FAIL ${Ellipsis(Text.match(/failures:\s*\n\s*(\S+)/)?.[1] ?? "")}`
					: "";
			// The corpus's shape carries the unit: `[test:220 pass 0 fail 1 ignored | 0.31s]`
			// (README.md:148, docs/proxy/compression.md:235). The captured group drops
			// the "s", so it is restored here - the sim must print what the engine prints.
			return `[test:${Pass} pass ${Fail} fail ${Ignored} ignored | ${Secs}s${Body}]`;
		}
		case "terminal": {
			const Exit = Text.match(/exit code: (\d+)/)?.[1] ?? "0";
			return `[terminal:${Lines.length}L exit code: ${Exit}]`;
		}
		case "code_rust":
		case "code_python":
		case "code_go":
		case "code_js":
		case "code": {
			const Fns = CodeCounts(/\bfn\b|\bdef\b|\bfunc\b|function|const \w+ = \(/g, "fns");
			const Structs = Type === "code_rust" ? `|${CodeCounts(/\bstruct\b/g, "structs")} ` : " ";
			const Signature = Ellipsis(
				Lines.find((Line) => /^(fn|def|func|function) |^(pub )?fn /.test(Line.trim())) ??
					"",
			);
			return `[code:${Fns}${Structs}${Signature} ${Lines.length}L]`;
		}
		case "grep": {
			const Hits = Text.split("\n").filter((Line) => /^[\w./-]+:\d+:.+/.test(Line));
			const Files = new Set(Hits.map((Line) => Line.split(":")[0]));
			return `[grep:${Hits.length} hits in ${Files.size} files | ${Ellipsis(Hits[0]?.split(":").slice(0, 2).join(":") ?? "")}]`;
		}
		case "search": {
			// Simulated boundary: the file count is derived from the "path"
			// fields present in the result JSON - a real search_files run
			// carries them; arbitrary pasted search output cannot.
			const Hits = Number(Text.match(/"total_count": (\d+)/)?.[1] ?? 0);
			const Files = new Set((Text.match(/"path": "([^"]+)"/g) ?? []).map((M) => M));
			return `[search:${Hits} hits in ${Files.size || "?"} files | first hit]`;
		}
		case "git": {
			const Counts: Record<string, number> = { M: 0, A: 0, D: 0, "??": 0 };
			for (const Line of Lines) {
				const Code = Line.slice(0, 2).trim();
				// `in` narrows the KEY, not the VALUE: under noUncheckedIndexedAccess
				// the read is still `number | undefined`, so the tally reads it once
				// and writes the increment back explicitly.
				const Seen = Counts[Code];
				if (Seen !== undefined) Counts[Code] = Seen + 1;
			}
			const Tally = Object.entries(Counts)
				.filter(([, N]) => N > 0)
				.map(([Code, N]) => `${N}${Code}`)
				.join(" ");
			return `[git:${Tally} | ${Ellipsis(Lines[0]?.slice(3) ?? "")} +${Math.max(0, Lines.length - 1)} more]`;
		}
		case "gitlog": {
			const Commits = CountMatches(Text, /^commit /gm);
			const Hashes = Text.match(/commit ([0-9a-f]{7,40})/g) ?? [];
			return `[gitlog:${Commits} commits | ${Ellipsis((Hashes[0]?.slice(7, 14) ?? "") + " fix")} -> ${Hashes[1]?.slice(7, 14) ?? ""} feat]`;
		}
		case "diff": {
			const Files = CountMatches(Text, /^diff --git /gm);
			const Added = CountMatches(Text, /^\+[^+]/gm);
			const Removed = CountMatches(Text, /^-[^-]/gm);
			const Names = (Text.match(/^diff --git a\/(\S+)/gm) ?? [])
				.map((Line) => Line.replace("diff --git a/", ""))
				.slice(0, 2)
				.join(" ");
			return `[diff:${Files}F +${Added}/-${Removed} ${Lines.length}L | ${Ellipsis(Names)}]`;
		}
		case "ls": {
			// Mode-string entries: leading "d" marks a directory; bare
			// path tokens count as dirs when they carry no extension.
			const Dirs = Lines.filter(
				(Line) => Line.startsWith("d") || !/\.\w+$/.test(Line.trim()),
			).length;
			return `[ls:${Lines.length - Dirs} files ${Dirs} dirs | first entries]`;
		}
		// JSON's preview shape, with its four supported cases STATED rather than
		// guessed: object -> key count, array -> item count, scalar -> its JSON
		// type, invalid -> the generic text preview. The line count is the real
		// one, never a hard-coded `1L` (a pretty-printed blob is many lines and
		// the old shape printed 1 for every one of them) and never the fixed
		// `5 items 3L` the old fallback printed for input it had failed to parse.
		case "json":
		case "tool_output": {
			const Parsed = TryParseJson(Text.trim());
			if (Parsed === ParseFailed)
				return `[${Type}:${Lines.length}L ${ByteLen}B | ${Ellipsis(Lines[0] ?? "")}]`;
			if (Array.isArray(Parsed))
				return `[${Type}:${Parsed.length} items ${Lines.length}L | ${Ellipsis(FirstItem(Parsed))}]`;
			if (IsRecord(Parsed)) {
				const Keys = Object.keys(Parsed);
				return `[${Type}:${Keys.length} keys ${Lines.length}L | ${Ellipsis(Keys.join(", "))}]`;
			}
			return `[${Type}:${ScalarName(Parsed)} scalar ${Lines.length}L | ${Ellipsis(String(Parsed))}]`;
		}
		case "html":
			return `[html:${CountMatches(Text, /<h\d/gi)}h ${CountMatches(Text, /<a /gi)}a ${Lines.length}L | title]`;
		case "error":
			return `[error:${Lines.length}L ${ByteLen}B | ${Ellipsis(Lines[0] ?? "")}]`;
		case "log":
			return `[log:${Lines.length}L ${ByteLen}B | ${Ellipsis(Lines[0] ?? "")}]`;
		case "linter":
			return `[linter:${Lines.length}L ${ByteLen}B | ${Ellipsis(Text.match(/(error\[E\d+\]:.*|warning:.*)/)?.[1] ?? Lines[0] ?? "")}]`;
		default:
			return `[text:${Lines.length}L ${ByteLen}B | ${Ellipsis(Lines[0] ?? "")}]`;
	}
}

/**
 * The simulated digest: a deterministic stand-in for the BLAKE3 store (the
 * real 40-char digest needs the Rust binary - the SIMULATION BOUNDARY says so
 * on the page). Deterministic on purpose: the same input must yield the same
 * marker twice, because a marker's whole value is being a stable address.
 */
export function Digest(Text: string): string {
	let Hash = 0x811c9dc5;
	for (let Index = 0; Index < Text.length; Index += 1) {
		Hash ^= Text.charCodeAt(Index);
		Hash = Math.imul(Hash, 0x01000193) >>> 0;
	}
	let Out = "";
	let State = Hash;
	while (Out.length < 40) {
		State = Math.imul(State ^ 0x9e3779b9, 0x85ebca6b) >>> 0;
		Out += State.toString(16).padStart(8, "0");
	}
	return Out.slice(0, 40);
}

function TokenLimitOf(Type: string, Table: Record<string, number>): number {
	const Base = Table["tool_threshold_token"] ?? ThresholdDefaults["tool_threshold_token"]!;
	const Tier = TierOf(Type);
	const Multiplier = Type.startsWith("code")
		? (Table["code_multiplier"] ?? 1)
		: Tier > 1
			? Tier
			: 1;
	return Base * Multiplier;
}

function HintFor(Table: Record<string, number>): number {
	// The preview hint budget: the inline threshold scales how much of the
	// first error / first line survives into the preview line.
	const Inline = Table["inline_threshold"] ?? ThresholdDefaults["inline_threshold"]!;
	return Math.max(12, Math.min(60, Math.round(Inline / 48)));
}

/**
 * Run the four steps over one blob and return everything the page renders.
 *
 * Every figure is measured: `TextEncoder` for both sides of the comparison
 * (a `String.length` is UTF-16 code units, so an em dash or an emoji would make
 * the percentage disagree with the byte count printed beside it), and the
 * replacement counts the preview PLUS the marker, because a compressed turn
 * holds both - that is the unit /benchmarks/ reports, so it is the unit here.
 *
 * `engine_threshold_pct` is deliberately NOT read: it governs the context
 * engine's compaction pass, which this page does not model. Reading it here is
 * what produced the old contradiction, where the verdict said "compressed"
 * while the decision line said "engine OFF, raw passes through". Compression,
 * storage and compaction are three dimensions, and this function reports the
 * two it can measure.
 */
export function Simulate(Input: SimulateInput): SimulateResult {
	const Text = Input.Text;
	const Table = { ...Thresholds, ...(Input.Thresholds ?? {}) };
	const Encoder = new TextEncoder();
	const RawBytes = Encoder.encode(Text).length;
	const Type = Input.Type ?? Classify(Text);
	const ThresholdBytes = TokenLimitOf(Type, Table);
	const Marked = RawBytes > ThresholdBytes;
	const Preview = PreviewLine(Type, Text, HintFor(Table));
	const PreviewBytes = Encoder.encode(Preview).length;
	const Marker = Marked ? `<<<CCR:${Digest(Text)}|${Type}|${RawBytes}>>>` : "";
	const MarkerBytes = Marked ? Encoder.encode(Marker).length : 0;
	const ReplacementBytes = Marked ? PreviewBytes + MarkerBytes : RawBytes;
	const ReductionPercent =
		Marked && RawBytes > 0 ? Math.round((1 - ReplacementBytes / RawBytes) * 100) : 0;

	return {
		Type,
		Preview,
		Marker,
		RawBytes,
		PreviewBytes,
		MarkerBytes,
		ReplacementBytes,
		ReductionPercent,
		ReplacementLarger: Marked && ReplacementBytes > RawBytes,
		Marked,
		ThresholdBytes,
		Storage:
			RawBytes <= (Table["inline_threshold"] ?? ThresholdDefaults["inline_threshold"]!)
				? "inline"
				: "durable",
		CacheCompressed: RawBytes > (Table["tool_threshold_cache"] ?? ThresholdDefaults["tool_threshold_cache"]!),
		Outcome: Marked ? "preview-and-marker" : "pass-through",
	};
}

/** Set one live threshold (the page's knobs call this). */
export function SetThreshold(Key: string, Value: number): void {
	Thresholds[Key] = Value;
}

/**
 * Restore the shipped defaults. This backs the page's "Reset defaults" control,
 * which restores THIS PAGE's sliders - it is not the engine's `POST /reload`,
 * which re-applies aphrodite.toml to a running binary. The page's own copy says
 * where the real endpoint is documented, because a button labelled "reload"
 * that reloads nothing is the kind of small lie this page exists to avoid.
 */
export function ResetThresholds(): void {
	for (const [Key, Value] of Object.entries(ThresholdDefaults)) Thresholds[Key] = Value;
}

/** The current threshold table, for a page that renders its own readout. */
export function CurrentThresholds(): Record<string, number> {
	return { ...Thresholds };
}

// The most recent full-mode run, so a page control outside the component
// (the threshold knobs) can re-run it without knowing the DOM.
let ActiveRun: (() => void) | null = null;

/** Re-run the bound pipeline, if one is on the page. */
export function RunPipeline(): void {
	ActiveRun?.();
}

function BindDecide(Node: HTMLElement): void {
	const Buttons = Array.from(Node.querySelectorAll<HTMLButtonElement>("[data-branch]"));
	const Panels = Array.from(Node.querySelectorAll<HTMLElement>("[data-branch-panel]"));

	const Show = (Branch: string) => {
		for (const Button of Buttons) {
			const On = Button.dataset["branch"] === Branch;
			Button.setAttribute("aria-pressed", On ? "true" : "false");
			if (On) Button.setAttribute("data-active", "");
			else Button.removeAttribute("data-active");
		}
		for (const Panel of Panels) {
			Panel.hidden = Panel.dataset["branchPanel"] !== Branch;
		}
	};

	for (const Button of Buttons) {
		Button.addEventListener("click", () => Show(Button.dataset["branch"] ?? "preview-answers"));
	}

	Show(Buttons.find((Button) => Button.hasAttribute("data-active"))?.dataset["branch"] ?? "preview-answers");
}

function BindFull(Node: HTMLElement): void {
	const SampleIsland =
		Node.querySelector<HTMLScriptElement>("script[data-samples-json]") ??
		document.querySelector<HTMLScriptElement>("script[data-samples-json]");
	const Samples: { Id: string; Label: string; Text: string }[] = SampleIsland
		? JSON.parse(SampleIsland.textContent ?? "[]")
		: [];

	const Input = Node.querySelector<HTMLTextAreaElement>("[data-input]");
	const Preview = Node.querySelector<HTMLElement>("[data-preview]");
	const Marker = Node.querySelector<HTMLElement>("[data-marker]");
	const Address = Node.querySelector<HTMLElement>("[data-address]");
	const Decision = Node.querySelector<HTMLElement>("[data-decision]");
	const TypeOut = Node.querySelector<HTMLElement>("[data-type]");
	const TierOut = Node.querySelector<HTMLElement>("[data-tier]");
	const RawBytes = Node.querySelector<HTMLElement>("[data-stat='raw-bytes']");
	const ThresholdOut = Node.querySelector<HTMLElement>("[data-stat='threshold']");
	const Rail = Array.from(Node.querySelectorAll<HTMLElement>("[data-rail-step]"));
	// The verdict strip and the knobs live OUTSIDE the component (they are the
	// page's own subject on /workbench/), so they are looked up document-wide.
	const Verdict = document.querySelector<HTMLElement>("[data-verdict]");
	const ExecButton = Node.querySelector<HTMLButtonElement>("[data-action='exec']");

	let LastMarker = "";
	let ExecBusy = false;

	// The readout is STATELESS: every field is recomputed from the current input
	// and the current threshold table, so typing a character, picking a sample
	// and dragging a slider each report the same one run. The old readout
	// accumulated (`BumpStat("turns", 1)` fired on every keystroke), so one
	// edited sample counted as several turns and several savings - a session
	// total that measured nothing but the visitor's typing speed. A session
	// simulator would be a separate mode with explicit actions.
	const SetFact = (Key: string, Text: string) => {
		const Value = Node.querySelector<HTMLElement>(`[data-fact='${Key}']`);
		if (Value) Value.textContent = Text;
	};

	const SetFactBar = (Key: string, Percent: number) => {
		const Bar = Node.querySelector<HTMLElement>(`[data-fact-bar='${Key}']`);
		if (Bar) Bar.style.width = `${Math.max(0, Math.min(100, Percent))}%`;
	};

	const LightRail = () => {
		for (const Step of Rail) Step.setAttribute("data-on", "");
	};

	const Run = () => {
		const Text = Input?.value ?? "";
		if (!Text.trim()) {
			if (Verdict) Verdict.textContent = "empty input - paste output or load a sample";
			return;
		}

		const Result = Simulate({ Text });
		LastMarker = Result.Marker;

		if (Preview) Preview.textContent = Result.Preview;
		if (Marker) {
			Marker.dataset["copy"] = LastMarker;
			Marker.textContent = Result.Marked
				? Result.Marker
				: "no marker - the bytes stayed in the transcript";
		}
		// The address line names the digest for what it is: an illustrative
		// stand-in, not a BLAKE3 hash of this text and not resolvable by any
		// engine. Prefixing it `blake3` overstated what the browser computed.
		if (Address) {
			Address.textContent = Result.Marked
				? `illustrative marker ${Result.Marker.slice(8, 20)}... · ${Result.RawBytes.toLocaleString("en-US")} B · ${Result.Type} · not engine-resolvable`
				: `not hashed · ${Result.RawBytes.toLocaleString("en-US")} B · ${Result.Type}`;
		}
		if (TypeOut) TypeOut.textContent = Result.Type;
		if (TierOut) TierOut.textContent = `×${TierOf(Result.Type)}`;
		if (ThresholdOut) ThresholdOut.textContent = `limit ${Math.round(Result.ThresholdBytes).toLocaleString("en-US")} B`;
		// The mechanical outcome only. Whether the preview answers the agent's
		// question is the agent's call, and retrieval is the visitor's action -
		// a simulator that has never been given a task cannot know either.
		if (Decision) {
			Decision.textContent =
				Result.Outcome === "preview-and-marker"
					? "preview + marker emitted - the preview line is what the agent reads, the marker is its receipt; whether to retrieve the bytes is the agent's decision, and a visitor's action here"
					: "pass-through - the bytes stayed in the transcript, so there is no marker to resolve";
		}
		// Three dimensions, never conflated: compression (the token proxy),
		// the cache lane, and where the store routes the blob. Compaction is a
		// fourth and this page does not model it, so it is not reported here.
		if (Verdict) {
			Verdict.textContent = [
				`compression: ${Result.Marked ? `compressed (${Result.RawBytes}B > limit ${Math.round(Result.ThresholdBytes)}B)` : `inline (${Result.RawBytes}B <= limit ${Math.round(Result.ThresholdBytes)}B)`}`,
				`cache lane: ${Result.CacheCompressed ? "compressed" : "inline"}`,
				`storage: ${Result.Storage === "inline" ? "inline CCR" : "durable CCR"}`,
			].join(" - ");
		}

		SetFact("type", Result.Type);
		SetFact("raw-bytes", `${Result.RawBytes.toLocaleString("en-US")} B`);
		SetFact("threshold", `${Math.round(Result.ThresholdBytes).toLocaleString("en-US")} B`);
		SetFact(
			"replacement",
			Result.Marked
				? `${Result.ReplacementBytes.toLocaleString("en-US")} B`
				: `${Result.RawBytes.toLocaleString("en-US")} B - nothing replaced`,
		);
		SetFact("marker", Result.Marked ? "emitted" : "not emitted");
		SetFact(
			"reduction",
			Result.Marked
				? `${Result.ReductionPercent}%${Result.ReplacementLarger ? " - the replacement is larger than the original" : ""}`
				: "0% - nothing was replaced",
		);
		SetFactBar("reduction", Result.ReductionPercent);
		if (RawBytes) RawBytes.textContent = `${Result.RawBytes.toLocaleString("en-US")} B`;
		LightRail();
	};

	ActiveRun = Run;

	if (Marker) {
		// The CCR chip: click to copy (the "CLICK TO COPY" label). Clipboard
		// API with the textarea fallback for non-secure contexts.
		Marker.addEventListener("click", async () => {
			if (!LastMarker) return;
			let Copied = false;
			try {
				await navigator.clipboard.writeText(LastMarker);
				Copied = true;
			} catch {
				const Helper = document.createElement("textarea");
				Helper.value = LastMarker;
				Helper.style.position = "fixed";
				Helper.style.opacity = "0";
				document.body.appendChild(Helper);
				Helper.select();
				Copied = document.execCommand("copy");
				Helper.remove();
			}
			const Label = Marker.textContent ?? "";
			Marker.textContent = Copied ? "COPIED ✓" : "COPY FAILED";
			setTimeout(() => {
				Marker.textContent = Label;
			}, 1200);
		});
	}

	if (ExecButton) {
		// The exec ornament: spin -> result -> reset.
		ExecButton.addEventListener("click", () => {
			if (ExecBusy) return;
			ExecBusy = true;
			ExecButton.setAttribute("aria-pressed", "true");
			ExecButton.classList.add("zp-exec-spin");
			ExecButton.textContent = "CLASSIFYING...";
			setTimeout(() => {
				Run();
				ExecButton.classList.remove("zp-exec-spin");
				ExecButton.textContent = "RUN PIPELINE";
				ExecButton.setAttribute("aria-pressed", "false");
				ExecBusy = false;
			}, 420);
		});
	}

	for (const Button of Node.querySelectorAll<HTMLButtonElement>("[data-sample]")) {
		Button.addEventListener("click", () => {
			const Sample = Samples.find((Entry) => Entry.Id === Button.dataset["sample"]);
			if (!Sample || !Input) return;
			Input.value = Sample.Text;
			for (const Pill of Node.querySelectorAll("[data-sample]")) {
				Pill.removeAttribute("data-active");
				Pill.setAttribute("aria-pressed", "false");
			}
			Button.setAttribute("data-active", "");
			Button.setAttribute("aria-pressed", "true");
			Run();
		});
	}

	if (Input) {
		// Live edit: re-classify on every keystroke.
		Input.addEventListener("input", () => {
			if (!ExecBusy) Run();
		});
	}
}

function BindKnobs(): void {
	for (const Slider of document.querySelectorAll<HTMLInputElement>("[data-knob]")) {
		if (Slider.dataset["knobBound"]) continue;
		Slider.dataset["knobBound"] = "1";

		Slider.addEventListener("input", () => {
			const Key = Slider.dataset["knob"]!;
			const Value = Number(Slider.value);
			SetThreshold(Key, Value);
			const Out = document.querySelector<HTMLElement>(`[data-knob-value='${Key}']`);
			if (Out) {
				Out.textContent = `${Key === "code_multiplier" ? Value.toFixed(1) : Value}${
					Key === "code_multiplier" ? "x" : Key === "engine_threshold_pct" ? "%" : " B"
				}`;
			}
			RunPipeline();
		});
	}

	const Reset = document.querySelector<HTMLButtonElement>("[data-action='reset-defaults']");
	if (Reset && !Reset.dataset["resetBound"]) {
		Reset.dataset["resetBound"] = "1";
		// "Reset defaults" restores THIS PAGE's sliders to the shipped
		// [compression] values - the initial `value` attribute carries them. It
		// is not the engine's POST /reload, which re-applies aphrodite.toml to a
		// running binary; the page's reference line points at that endpoint's
		// documentation instead of pretending this button performs it.
		Reset.addEventListener("click", () => {
			ResetThresholds();
			for (const Slider of document.querySelectorAll<HTMLInputElement>("[data-knob]")) {
				const Shipped = Slider.getAttribute("value");
				if (Shipped !== null) Slider.value = Shipped;
				Slider.dispatchEvent(new Event("input"));
			}
			RunPipeline();
		});
	}
}

/**
 * Bind every `[data-pipeline]` on the page plus the page-level knobs. Safe to
 * call on every astro:page-load: each node is bound once.
 */
export function BindPipeline(Root: ParentNode = document): void {
	for (const Node of Root.querySelectorAll<HTMLElement>("[data-pipeline]")) {
		if (Node.dataset["pipelineBound"]) continue;
		Node.dataset["pipelineBound"] = "1";
		if (Node.dataset["pipeline"] === "decide") BindDecide(Node);
		else BindFull(Node);
	}
	BindKnobs();
}
