// Source/Library/Motion.ts
/**
* The suppression tones, the same 70/40/25 the pair has always drawn. The
* classes live here and in the component's own settled frame, so the utility
* CSS is generated for both.
*/
var RunTone = {
	command: "text-bone-white font-bold",
	compiling: "opacity-40",
	warning: "opacity-25",
	error: "text-stamped-canary",
	context: "opacity-70",
	plain: ""
};
/** Rust's `.chars().take(n)`. */
var Clip = (Text, Count) => Array.from(Text).slice(0, Count).join("");
/** Rust's `is_error_line` (preview/line/error.rs). */
var IsErrorLine = (Line) => {
	const Trimmed = Line.trimStart();
	return Trimmed.startsWith("error[") || Trimmed.startsWith("error:") || Trimmed.startsWith("Error:") || Trimmed.startsWith("ERROR") || Trimmed.startsWith("panicked at") || Trimmed.includes(": error[") || Trimmed.includes(": error:") || ErrorWordBeforeColon(Trimmed);
};
/** Rust's `error_word_before_colon`: the word run before a `:` ends `Error`, or is `Exception`. */
var ErrorWordBeforeColon = (Text) => {
	for (let At = Text.indexOf(":"); At >= 0; At = Text.indexOf(":", At + 1)) {
		let Start = At;
		while (Start > 0 && /[A-Za-z0-9_]/.test(Text[Start - 1])) Start -= 1;
		const Word = Text.slice(Start, At);
		if (Word.endsWith("Error") || Word === "Exception") return true;
	}
	return false;
};
/** Rust's `is_warning_line` (preview/line/warning.rs). */
var IsWarningLine = (Line) => {
	const Trimmed = Line.trimStart();
	return Trimmed.startsWith("warning[") || Trimmed.startsWith("warning:") || Trimmed.startsWith("Warning:") || Trimmed.startsWith("WARNING") || Trimmed.includes(": warning[") || Trimmed.includes(": warning:");
};
/** Rust's `num_before_kw`: the integer immediately before a case-insensitive keyword. */
var NumBeforeKeyword = (Line, Keyword) => {
	const At = Line.toLowerCase().indexOf(Keyword.toLowerCase());
	if (At < 0) return 0;
	let Start = At;
	while (Start > 0 && /[0-9]/.test(Line[Start - 1])) Start -= 1;
	const Value = Number(Line.slice(Start, At));
	return Number.isFinite(Value) ? Value : 0;
};
/** Rust's `is_failure_line` (preview/line/failure.rs). */
var IsFailureLine = (Line) => {
	const Trimmed = Line.trimStart();
	return Trimmed.includes("FAILED") || Trimmed.startsWith("FAIL ") || Trimmed.startsWith("--- FAIL:") || NumBeforeKeyword(Trimmed, "failed") >= 1;
};
/** Rust's `split_path_line`: `path:line:...` with a numeric middle field. */
var SplitPathLine = (Line) => {
	const First = Line.indexOf(":");
	if (First < 0) return null;
	const Path = Line.slice(0, First);
	if (Path.trim() === "" || Path.includes(" ")) return null;
	const Rest = Line.slice(First + 1);
	const Second = Rest.indexOf(":");
	if (Second < 0) return null;
	const Middle = Rest.slice(0, Second);
	if (Middle === "" || !/^[0-9]+$/.test(Middle)) return null;
	return [Path, Middle];
};
/** Rust's `is_grep_line`: a hit whose path looks file-ish. */
var IsGrepLine = (Line) => {
	const Split = SplitPathLine(Line);
	return Split !== null && (Split[0].includes("/") || Split[0].includes("."));
};
/** Rust's `num_before`: the integer run immediately preceding `Keyword`. */
var NumBefore = (Line, Keyword) => {
	const At = Line.indexOf(Keyword);
	if (At < 0) return 0;
	const Runs = Line.slice(0, At).trimEnd().split(/[^0-9]+/);
	for (let Index = Runs.length - 1; Index >= 0; Index -= 1) if (Runs[Index] !== "") {
		const Value = Number(Runs[Index]);
		return Number.isFinite(Value) ? Value : 0;
	}
	return 0;
};
/** Rust's `first_duration`: the first `150ms` / `0.31s` token on any line. */
var FirstDuration = (Lines) => {
	for (const Line of Lines) for (const Token of Line.split(/\s+/)) {
		if (Token.endsWith("ms")) {
			const Ms = Token.slice(0, -2);
			if (Ms !== "" && /^[0-9]+$/.test(Ms)) return `${Ms}ms`;
			continue;
		}
		if (!Token.endsWith("s")) continue;
		const Seconds = Token.slice(0, -1);
		const Dot = Seconds.indexOf(".");
		if (Dot <= 0 || Dot === Seconds.length - 1) continue;
		const Whole = Seconds.slice(0, Dot);
		const Fraction = Seconds.slice(Dot + 1);
		if (/^[0-9]+$/.test(Whole) && /^[0-9]+$/.test(Fraction)) return `${Seconds}s`;
	}
	return null;
};
/** The first error's message: from `error`/`Error`/`ERROR` to the end, capped at 60 chars. */
var ErrorMessage = (Line) => {
	let Start = Line.indexOf("error");
	if (Start < 0) Start = Line.indexOf("Error");
	if (Start < 0) Start = Line.indexOf("ERROR");
	return Clip(Start < 0 ? Line : Line.slice(Start), 60);
};
/** `builders/build.rs` - honest error/warning LINE tallies, never success-looking. */
var BuildPreview = (Lines) => {
	const Errors = Lines.filter(IsErrorLine).length;
	const Warnings = Lines.filter(IsWarningLine).length;
	const Total = Lines.length;
	const Trimmed = Lines.map((Line) => Line.trim());
	const First = Trimmed.find(IsErrorLine);
	if (First !== void 0) {
		const Message = ErrorMessage(First);
		if (Message !== "") return `[build:${Errors}E ${Warnings}W ${Total}L | ${Message}]`;
	}
	if (Errors === 0 && Warnings === 0) {
		const Failure = Trimmed.find(IsFailureLine);
		if (Failure !== void 0) return `[build:${Errors}E ${Warnings}W ${Total}L | ${Clip(Failure, 60)}]`;
	}
	return `[build:${Errors}E ${Warnings}W ${Total}L]`;
};
/** `builders/grep.rs` - hit count, distinct files, first location. */
var GrepPreview = (Lines) => {
	let Hits = 0;
	const Files = /* @__PURE__ */ new Set();
	let First = null;
	for (const Line of Lines) {
		const Split = SplitPathLine(Line);
		if (Split === null || !IsGrepLine(Line)) continue;
		Hits += 1;
		Files.add(Split[0]);
		if (First === null) First = Clip(`${Split[0]}:${Split[1]}`, 48);
	}
	if (Hits === 0) return `[grep:${Lines.length}L]`;
	return First === null ? `[grep:${Hits} hits in ${Files.size} files]` : `[grep:${Hits} hits in ${Files.size} files | ${First} ...]`;
};
/** `builders/ls.rs` - file/dir counts plus the top three extensions. */
var LsPreview = (Lines) => {
	let Files = 0;
	let Dirs = 0;
	const Extensions = /* @__PURE__ */ new Map();
	for (const Line of Lines) {
		const Trimmed = Line.trim();
		if (Trimmed === "") continue;
		if (Trimmed.startsWith("total ")) {
			const Rest = Trimmed.slice(6);
			if (Rest !== "" && /^[0-9]+$/.test(Rest)) continue;
		}
		const Long = Line.length >= 10 && "-dlcbps".includes(Line[0]) && /^[rwx\-stST]{9}$/.test(Line.slice(1, 10));
		let Name;
		let Directory;
		if (Long) {
			const Parts = Line.split(/\s+/).filter((Part) => Part !== "");
			Name = Parts.length === 0 ? "" : Parts[Parts.length - 1];
			Directory = Line[0] === "d";
		} else if (Trimmed.endsWith("/")) {
			Name = Trimmed.slice(0, -1);
			Directory = true;
		} else {
			Name = Trimmed;
			Directory = false;
		}
		if (Directory) {
			Dirs += 1;
			continue;
		}
		Files += 1;
		const Base = Name.includes("/") ? Name.slice(Name.lastIndexOf("/") + 1) : Name;
		const Dot = Base.lastIndexOf(".");
		if (Dot > 0 && Dot < Base.length - 1) {
			const Extension = Clip(Base.slice(Dot), 8);
			Extensions.set(Extension, (Extensions.get(Extension) ?? 0) + 1);
		}
	}
	if (Files === 0 && Dirs === 0) return `[ls:${Lines.length}L]`;
	const Top = [...Extensions.entries()].sort(([Left, LeftCount], [Right, RightCount]) => RightCount - LeftCount || (Left < Right ? -1 : Left > Right ? 1 : 0)).slice(0, 3).map(([Extension, Count]) => `${Extension}×${Count}`);
	return Top.length === 0 ? `[ls:${Files} files ${Dirs} dirs]` : `[ls:${Files} files ${Dirs} dirs | ${Top.join(" ")}]`;
};
/** `builders/test.rs` - pass/fail/ignored tallies, then the first failing test. */
var TestPreview = (Lines) => {
	let Pass = 0;
	let Fail = 0;
	let Ignored = 0;
	let Found = false;
	for (const Line of Lines) {
		const At = Line.indexOf("test result:");
		if (At < 0) continue;
		Found = true;
		const Rest = Line.slice(At + 12);
		Pass += NumBefore(Rest, "passed");
		Fail += NumBefore(Rest, "failed");
		Ignored += NumBefore(Rest, "ignored");
	}
	if (!Found) for (const Line of Lines) {
		if (!Line.includes("passed") && !Line.includes("failed")) continue;
		const P = NumBefore(Line, "passed");
		const F = NumBefore(Line, "failed");
		if (P > 0 || F > 0) {
			Found = true;
			Pass += P;
			Fail += F;
		}
	}
	if (!Found) for (const Line of Lines) {
		const Trimmed = Line.trim();
		if (!Trimmed.startsWith("test ")) continue;
		const Rest = Trimmed.slice(5);
		if (Rest.includes("... ok")) {
			Pass += 1;
			Found = true;
		} else if (Rest.includes("... FAILED")) {
			Fail += 1;
			Found = true;
		} else if (Rest.includes("... ignored")) {
			Ignored += 1;
			Found = true;
		}
	}
	let FirstFailure = null;
	for (const Line of Lines) {
		const Trimmed = Line.trim();
		let Name = null;
		if (Trimmed.startsWith("--- FAIL: ")) Name = Trimmed.slice(10).split(/\s+/)[0] ?? "";
		else if (Trimmed.startsWith("test ") && Trimmed.endsWith("FAILED")) Name = Trimmed.slice(5).split(/\s+/)[0] ?? "";
		else if (Trimmed.startsWith("FAILED ")) Name = Trimmed.slice(7).split(/\s+/)[0] ?? "";
		if (Name !== null) {
			FirstFailure = Name === "" ? null : Name;
			break;
		}
	}
	const Duration = FirstDuration(Lines);
	if (!Found && FirstFailure === null) return `[test:${Lines.length}L]`;
	let Out = `[test:${Pass} pass ${Fail} fail ${Ignored} ignored`;
	if (FirstFailure !== null) Out += ` | FAIL ${Clip(FirstFailure, 40)}`;
	else if (Duration !== null) Out += ` | ${Duration}`;
	return `${Out}]`;
};
/** `builders/json.rs` - item/key counts, and the crude fallback while it is incomplete. */
var JsonPreview = (Lines) => {
	const Raw = Lines.join("\n");
	let Parsed = null;
	let ParsedOk = true;
	try {
		Parsed = JSON.parse(Raw);
	} catch {
		ParsedOk = false;
	}
	if (ParsedOk && Array.isArray(Parsed)) {
		let Keys = "";
		const First = Parsed[0];
		if (First !== null && typeof First === "object" && !Array.isArray(First)) {
			const All = Object.keys(First);
			const Shown = All.slice(0, 8);
			Keys = ` | keys: ${Shown.join(", ")}${Shown.length < All.length ? ` +${All.length - Shown.length} more` : ""}`;
		}
		return `[json:${Parsed.length}items ${Lines.length}L${Keys}]`;
	}
	if (ParsedOk && Parsed !== null && typeof Parsed === "object") {
		const All = Object.keys(Parsed);
		const Shown = All.slice(0, 8);
		const More = Shown.length < All.length ? ` +${All.length - Shown.length} more` : "";
		return `[json:${All.length}keys ${Lines.length}L | ${Shown.join(", ")}${More}]`;
	}
	return `[json:~${(Raw.match(/\{"/g) ?? []).length}items ${Lines.length}L]`;
};
/**
* The preview the engine would emit for a stream that ended here. Exported so
* the component can server-render the settled frame a reader with no
* JavaScript reads - the same function, not a copy of its output.
*/
var RunPreview = (Type, Lines) => {
	switch (Type) {
		case "build": return BuildPreview(Lines);
		case "grep": return GrepPreview(Lines);
		case "ls": return LsPreview(Lines);
		case "test": return TestPreview(Lines);
		case "json": return JsonPreview(Lines);
		default: return `[${Type}:${Lines.length}L]`;
	}
};
/** The bytes a marker addresses: the stream as it stands, UTF-8. */
var RunBytes = (Lines) => {
	const Text = Lines.join("\n");
	return typeof TextEncoder === "undefined" ? Text.length : new TextEncoder().encode(Text).length;
};
/** The marker line: the id, the verdict, and the size of the bytes behind it. */
var RunMarker = (Hash, Type, Lines) => `<<<CCR:${Hash}|${Type}|${RunBytes(Lines)}>>>`;
/** The classification of one output line, from its text alone. */
var RunKind = (Line) => {
	if (Line.startsWith("$ ")) return "command";
	if (IsErrorLine(Line)) return "error";
	if (IsWarningLine(Line)) return "warning";
	if (/^\s+Compiling /.test(Line)) return "compiling";
	if (/^\s*(-->|\||=|note:|help:)/.test(Line) || /^\s*[0-9]+\s*\|/.test(Line)) return "context";
	if (/\.\.\. FAILED$/.test(Line)) return "error";
	if (/\.\.\. ok$/.test(Line)) return "context";
	return "plain";
};
export { RunTone as a, RunPreview as i, RunKind as n, RunMarker as r, RunBytes as t };
