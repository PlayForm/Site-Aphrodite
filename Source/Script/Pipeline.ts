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
 * simulated (the BLAKE3 digest, the nanosecond readout, retrieval).
 */

export interface SimulateInput {
	Text: string;
	/** Pin a classifier type; otherwise infer it. */
	Type?: string;
	/** Threshold overrides for this one call (the page's knobs pass theirs). */
	Thresholds?: Record<string, number>;
}

export interface SimulateResult {
	Type: string;
	Preview: string;
	Marker: string;
	RawBytes: number;
	ClassifyNs: number;
	/**
	 * The agent's side of the contract: a compressed blob's preview answered
	 * (that is the design bet - the marker stays a receipt), while content
	 * below the threshold was never hidden, so the agent already holds the
	 * bytes. The engine-off escape hatch always hands back raw bytes.
	 */
	Decision: "preview-answers" | "needs-bytes";
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

	// JSON / tool_output: starts with { or [ and parses as JSON.
	if (Trimmed.startsWith("{") || Trimmed.startsWith("[")) {
		try {
			const Parsed = JSON.parse(Trimmed) as Record<string, unknown>;
			if ("exit_code" in Parsed || "status" in Parsed) return "tool_output";
			return "json";
		} catch {
			// not JSON - fall through
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
				if (Code in Counts) Counts[Code] += 1;
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
		case "json":
		case "tool_output": {
			try {
				const Parsed = JSON.parse(Text.trim()) as Record<string, unknown>;
				const Keys = Object.keys(Parsed);
				return `[${Type}:${Keys.length} keys 1L | ${Ellipsis(Keys.join(", "))}]`;
			} catch {
				return `[${Type}:5 items 3L]`;
			}
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

function TokenLimit(Type: string, Table: Record<string, number>): number {
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

/** Run the four steps over one blob and return everything the page renders. */
export function Simulate(Input: SimulateInput): SimulateResult {
	const Text = Input.Text;
	const Table = { ...Thresholds, ...(Input.Thresholds ?? {}) };
	const ByteLen = new TextEncoder().encode(Text).length;
	const Type = Input.Type ?? Classify(Text);
	const Compressed = ByteLen > TokenLimit(Type, Table);
	const EngineOn = (Table["engine_threshold_pct"] ?? 100) < 100;

	return {
		Type,
		Preview: PreviewLine(Type, Text, HintFor(Table)),
		Marker: `<<<CCR:${Digest(Text)}|${Type}|${ByteLen}>>>`,
		RawBytes: ByteLen,
		// The simulated timing readout - the boundary footer says so.
		ClassifyNs: 40 + Math.floor(Math.random() * 84),
		Decision: EngineOn && Compressed ? "preview-answers" : "needs-bytes",
	};
}

/** Set one live threshold (the page's knobs call this). */
export function SetThreshold(Key: string, Value: number): void {
	Thresholds[Key] = Value;
}

/** Restore the shipped defaults (POST /reload on the page). */
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
	const ClassifyNs = Node.querySelector<HTMLElement>("[data-stat='classify-ns']");
	const Rail = Array.from(Node.querySelectorAll<HTMLElement>("[data-rail-step]"));
	// The verdict strip and the knobs live OUTSIDE the component (they are the
	// page's own subject on /workbench/), so they are looked up document-wide.
	const Verdict = document.querySelector<HTMLElement>("[data-verdict]");
	const ExecButton = Node.querySelector<HTMLButtonElement>("[data-action='exec']");

	let LastMarker = "";
	let ExecBusy = false;

	const StatValues: Record<string, number> = { ratio: 0, turns: 0, saved: 0 };
	const StatCaps: Record<string, [number, string]> = {
		ratio: [100, "%"],
		turns: [40, ""],
		saved: [100, " KB"],
	};

	const SetStat = (Key: string, Value: number) => {
		const ValueNode = Node.querySelector<HTMLElement>(`[data-stat-value='${Key}']`);
		const Bar = Node.querySelector<HTMLElement>(`[data-stat-bar='${Key}']`);
		const [Cap, Suffix] = StatCaps[Key] ?? [100, ""];
		if (ValueNode) ValueNode.textContent = `${Value.toLocaleString("en-US")}${Suffix}`;
		if (Bar) Bar.style.width = `${Math.min(100, (Value / Cap) * 100)}%`;
	};

	const BumpStat = (Key: string, Delta: number) => {
		StatValues[Key] = (StatValues[Key] ?? 0) + Delta;
		SetStat(Key, StatValues[Key]);
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
		const Table = CurrentThresholds();
		const Limit = TokenLimit(Result.Type, Table);
		const Compressed = Result.RawBytes > Limit;
		const CacheCompressed = Result.RawBytes > (Table["tool_threshold_cache"] ?? 0);
		const Inline = Result.RawBytes <= (Table["inline_threshold"] ?? 0);
		const EngineOn = (Table["engine_threshold_pct"] ?? 100) < 100;

		LastMarker = Result.Marker;

		if (Preview) Preview.textContent = Result.Preview;
		if (Marker) {
			Marker.dataset["copy"] = Result.Marker;
			Marker.textContent = Result.Marker;
		}
		if (Address) {
			Address.textContent = `blake3 ${Result.Marker.slice(8, 20)}... · ${Result.RawBytes.toLocaleString("en-US")} B · ${Result.Type}`;
		}
		if (TypeOut) TypeOut.textContent = Result.Type;
		if (TierOut) TierOut.textContent = `×${TierOf(Result.Type)}`;
		if (Decision) {
			Decision.textContent = EngineOn
				? `${Result.Decision === "preview-answers" ? "preview enough - skip retrieval, keep reasoning" : "below threshold - kept inline, no marker to resolve"} (classified ${Result.Type} in ~${Result.ClassifyNs} ns, simulated)`
				: `engine OFF (engine_threshold_pct >= 100) - raw passes through, nothing is marked`;
		}
		if (Verdict) {
			Verdict.textContent = [
				`token mode: ${Compressed ? `compressed (${Result.RawBytes}B > limit ${Math.round(Limit)}B)` : `inline (${Result.RawBytes}B <= limit ${Math.round(Limit)}B)`}`,
				`cache mode: ${CacheCompressed ? "compressed" : "inline"}`,
				`storage: ${Inline ? "inline CCR" : "durable CCR"}`,
			].join(" - ");
		}

		const Ratio = Compressed
			? Math.min(99, Math.round((1 - Result.Preview.length / Result.RawBytes) * 100))
			: 0;
		SetStat("ratio", Ratio);
		BumpStat("turns", 1);
		BumpStat(
			"saved",
			Compressed ? Math.max(1, Math.round((Result.RawBytes - Result.Preview.length) / 1024)) : 0,
		);
		if (ClassifyNs) ClassifyNs.textContent = `${Result.ClassifyNs} ns`;
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

	const Reload = document.querySelector<HTMLButtonElement>("[data-action='reload']");
	if (Reload && !Reload.dataset["reloadBound"]) {
		Reload.dataset["reloadBound"] = "1";
		// POST /reload: restore the sliders to their TOML values (the demo's
		// stand-in for the real reload endpoint). The initial `value`
		// attribute carries the shipped default, so reload resets to it.
		Reload.addEventListener("click", () => {
			ResetThresholds();
			for (const Slider of document.querySelectorAll<HTMLInputElement>("[data-knob]")) {
				const Reset = Slider.getAttribute("value");
				if (Reset !== null) Slider.value = Reset;
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
