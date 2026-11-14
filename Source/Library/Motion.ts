// Motion.ts - the site's one motion runtime: the deck's motion language,
// generalised for every page.
//
// The vocabulary is lifted verbatim from Presentation/Player.ts, whose Enter()
// is the reference implementation (scene #default is the one the owner points
// at). Same numbers, same easings, same fill: both:
//
//   [data-enter]   one entrance per content root - rises 2.2cqw and fades in
//                  over 520ms. The attribute's value is a delay in ms, so a
//                  later panel can land after an earlier one. Never a
//                  per-element stagger: the whole panel is one compositor
//                  transform.
//   [data-reveal]  the same entrance, fired by scroll instead of by mount -
//                  the site-wide default for a static page's sections. One
//                  IntersectionObserver for the whole document, fires once per
//                  element, then unobserves it. [data-enter] stays for explicit
//                  sequencing: a panel that must land after another, or on a
//                  mount rather than on a scroll.
//   [data-stream]  a block prints its children line by line. That stagger IS
//                  the streaming log - the product's argument rendered as
//                  motion - not an entrance effect.
//   [data-wipe]    a bar sweeps its panel once.
//   [data-count]   a number climbs to its value as the stream runs.
//   [data-run]     a terminal that never stops. A scripted command streams its
//                  real output and the preview beside it is recomputed from the
//                  lines that have arrived so far, so the marker can never be a
//                  lie about a stream that has not finished. The one primitive
//                  here that does not settle - it cycles the classifier's arms.
//
// The entrance root owns the motion inside it, exactly as the deck's
// Enter(Scene) runs the whole vocabulary over the scene it is entering: a
// panel that rises also streams, wipes and counts on the same beat. A stream,
// wipe or counter that no entrance root claims still runs, at mount.
//
// The crossfade is deliberately NOT here. A section switch is a CSS opacity
// transition, never a JS loop, and the entrance's fill: both is what keeps the
// outgoing node's text readable while it runs (Deck.css's .deck-scene is the
// reference). A runtime that owned the fade would have to hold the outgoing
// frame's lifetime, which is the browser's job.
//
// The laws, in the order they cost you something:
//
//   - Compositor only. Every keyframe is transform and opacity, so no frame of
//     any animation can force layout or paint. A counter is the one exception,
//     and it repaints at most every 60ms for exactly that reason.
//   - Nothing on the scroll path. Reveal is one IntersectionObserver, not a
//     scroll listener, and its callback reads no layout: it fires the same
//     entrance a mount would have fired.
//   - Bounded work. One Web Animation per entrance root; [data-stream] staggers
//     at most 64 children, because a 500-line log must not create 500
//     animations.
//   - Reduced motion is the same code settling the final frame: under
//     prefers-reduced-motion: reduce every duration collapses to 1ms and every
//     delay to 0, so nothing is ever hidden from a reader who asked for
//     stillness.
//   - Copy stays inside the motion. Every attribute belongs on a content root
//     that says something: a panel with no sentence under it is a defect, and a
//     [data-count] with no line explaining the number is decoration.
//
// Mount is idempotent. Every element this runtime touches carries
// data-motion-bound, so the client router can mount the same module on every
// page without double-binding; Teardown (wired to astro:before-swap in
// Layout/Base.astro) drops the observer and the in-flight counter guards so a
// discarded page leaves nothing running.

/** The deck's numbers, stated once. Change them here and the whole site moves together. */
const Timing = {
	Enter: {
		Rise: "translate3d(0, 2.2cqw, 0)",
		Duration: 520,
		Easing: "cubic-bezier(0.16, 0.84, 0.28, 1)",
	},
	Stream: {
		Rise: "translate3d(0, 0.8cqw, 0)",
		Duration: 160,
		Lead: 140,
		Step: 70,
		/** Past this many children the tail arrives with the last staggered line. */
		Limit: 64,
	},
	Wipe: {
		Travel: "translateX(91cqw)",
		Duration: 760,
		Lead: 140,
		Easing: "cubic-bezier(0.3, 0, 0.2, 1)",
	},
	Count: {
		Duration: 900,
		/** A text change per frame forces a layout per frame; 60ms is the floor. */
		Repaint: 60,
	},
	Run: {
		/**
		 * Rows kept in the pane. The window shows about ten, so a row dropped
		 * from the head has always already left the viewport - the stream
		 * scrolls, it does not grow without bound.
		 */
		Rows: 48,
		/** The smallest window the terminal will use, in px. */
		Floor: 160,
		/** The screen clear between one command and the next. */
		Clear: 220,
		/** The beat before the first line of a new command. */
		Lead: 260,
		/** The preview is rewritten at most this often: a text change is a layout. */
		Repaint: 60,
	},
} as const;

let Preference: MediaQueryList | null = null;

/** The reader's own setting, read at every call so a mid-page change is honoured. */
const Reduced = (): MediaQueryList =>
	(Preference ??= window.matchMedia("(prefers-reduced-motion: reduce)"));

/** Every animation this runtime owns, so a change of the setting can settle them all. */
const Running = new Set<Animation>();

/** One observer for the page: reveal is not a scroll listener. */
let Watcher: IntersectionObserver | null = null;

/** Counter generations, so a discarded page's pending frames stop on their next tick. */
let Generations = new WeakMap<HTMLElement, number>();

/** The running terminals this page owns, so a discarded page leaves no timer behind. */
const Runs = new Set<() => void>();

let Listening = false;

/**
 * One animation, on one element, cancelled and replayed. A Web Animation
 * restarts deterministically from frame 0 when it is cancelled and replayed,
 * which a CSS transition cannot do without a forced layout - this is the
 * deck's own re-entry trick. Under reduced motion the duration collapses to
 * 1ms, so the same call settles the final frame instead of animating to it.
 */
const Play = (
	Target: HTMLElement,
	Frames: Keyframe[],
	Duration: number,
	Delay: number,
	Easing: string,
): void => {
	for (const Existing of Target.getAnimations()) {
		Existing.cancel();
	}

	const Settled = Reduced().matches;

	const Played = Target.animate(Frames, {
		duration: Settled ? 1 : Duration,
		delay: Settled ? 0 : Delay,
		easing: Easing,
		fill: "both",
	});

	const Forget = (): void => {
		Running.delete(Played);
	};

	Running.add(Played);
	Played.addEventListener("finish", Forget, { once: true });
	Played.addEventListener("cancel", Forget, { once: true });
};

/** The entrance, on any root: one rise, one fade, one compositor transform. */
const Rise = (Target: HTMLElement, Delay: number): void => {
	Play(
		Target,
		[
			{ opacity: 0, transform: Timing.Enter.Rise },
			{ opacity: 1, transform: "translate3d(0, 0, 0)" },
		],
		Timing.Enter.Duration,
		Delay,
		Timing.Enter.Easing,
	);
};

/** The streaming log: children print one after another, at most Limit of them. */
const Stream = (Root: HTMLElement): void => {
	[...Root.children].slice(0, Timing.Stream.Limit).forEach((Line, Index) => {
		if (!(Line instanceof HTMLElement)) {
			return;
		}

		Play(
			Line,
			[
				{ opacity: 0, transform: Timing.Stream.Rise },
				{ opacity: 1, transform: "translate3d(0, 0, 0)" },
			],
			Timing.Stream.Duration,
			Timing.Stream.Lead + Index * Timing.Stream.Step,
			Timing.Enter.Easing,
		);
	});
};

/** The sweep: a bar crosses its panel once and is gone. */
const Wipe = (Target: HTMLElement): void => {
	Play(
		Target,
		[
			{ transform: "translateX(0)", opacity: 0 },
			{ opacity: 1, offset: 0.1 },
			{ transform: Timing.Wipe.Travel, opacity: 0 },
		],
		Timing.Wipe.Duration,
		Number(Target.dataset.wipe) || Timing.Wipe.Lead,
		Timing.Wipe.Easing,
	);
};

/**
 * The climb. The value is the attribute, never the text: the element already
 * carries its final figure in the markup, so a reader without JavaScript reads
 * the number instead of a zero. A bare [data-count] is somebody else's label -
 * the showcase registry's "SHOWING n OF m" - and rewriting it to 0 would
 * delete copy the page is using, so a non-numeric value is left alone.
 */
const Count = (Target: HTMLElement): void => {
	const Raw = Target.dataset.count;

	if (Raw === undefined || Raw.trim() === "") {
		return;
	}

	const Value = Number(Raw);

	if (!Number.isFinite(Value)) {
		return;
	}

	const Generation = (Generations.get(Target) ?? 0) + 1;

	Generations.set(Target, Generation);

	const Final = Value.toLocaleString("en-US");

	if (Reduced().matches) {
		Target.textContent = Final;

		return;
	}

	const Start = performance.now();
	let Painted = 0;

	const Step = (Now: number): void => {
		if (Generations.get(Target) !== Generation) {
			return;
		}

		const Progress = Math.min(1, (Now - Start) / Timing.Count.Duration);

		// The counter repaints at most every 60ms: a per-frame text change
		// forces a layout on every frame of the entrance.
		if (Progress < 1 && Now - Painted < Timing.Count.Repaint) {
			requestAnimationFrame(Step);

			return;
		}

		Painted = Now;

		const Eased = 1 - (1 - Progress) ** 3;

		Target.textContent =
			Progress >= 1 ? Final : Math.round(Value * Eased).toLocaleString("en-US");

		if (Progress < 1) {
			requestAnimationFrame(Step);
		}
	};

	requestAnimationFrame(Step);
};

/**
 * The subtrees this runtime leaves alone. The deck drives its own scenes from
 * its own clock - Player.ts is the reference implementation, not a second
 * consumer of it - and a page whose own runtime already owns an attribute opts
 * its subtree out with data-motion="off".
 */
const Exempt = (Target: HTMLElement): boolean =>
	Target.closest('[data-motion="off"]') !== null ||
	Target.closest("[data-deck]") !== null;

/**
 * The bind guard. The client router mounts this module once per page, so an
 * element that has already been given its motion is never given it twice.
 */
const Take = (Target: HTMLElement): boolean => {
	if (Target.dataset.motionBound || Exempt(Target)) {
		return false;
	}

	Target.dataset.motionBound = "1";

	return true;
};

/**
 * The rest of the vocabulary, over one root. Defer skips anything an entrance
 * root has not fired yet: a [data-stream] inside a [data-reveal] must print
 * when the panel arrives, not while it is still off-screen.
 */
const Compose = (Root: ParentNode, Defer: boolean): void => {
	for (const Target of Root.querySelectorAll<HTMLElement>("[data-stream]")) {
		if (Defer && Target.closest("[data-enter], [data-reveal]")) {
			continue;
		}

		if (Take(Target)) {
			Stream(Target);
		}
	}

	for (const Target of Root.querySelectorAll<HTMLElement>("[data-wipe]")) {
		if (Defer && Target.closest("[data-enter], [data-reveal]")) {
			continue;
		}

		if (Take(Target)) {
			Wipe(Target);
		}
	}

	for (const Target of Root.querySelectorAll<HTMLElement>("[data-count]")) {
		if (Defer && Target.closest("[data-enter], [data-reveal]")) {
			continue;
		}

		if (Take(Target)) {
			Count(Target);
		}
	}

	for (const Target of Root.querySelectorAll<HTMLElement>("[data-run]")) {
		if (Defer && Target.closest("[data-enter], [data-reveal]")) {
			continue;
		}

		if (Take(Target)) {
			Run(Target);
		}
	}
};

/**
 * A reveal has arrived. Releasing the CSS pre-hide, the rise and everything the
 * panel owns happen in one tick, so the panel never shows a frame of its
 * pre-hidden state. A [data-enter] nested inside waits for this moment too -
 * and so does a [data-run]: the mount pass defers a terminal that sits inside a
 * reveal, so without this loop the hero's stream was deferred at mount and then
 * never started by anything, leaving it frozen on its settled frame.
 */
const Fire = (Target: HTMLElement): void => {
	Target.dataset.revealed = "1";
	Rise(Target, Number(Target.dataset.reveal) || 0);

	for (const Inner of Target.querySelectorAll<HTMLElement>("[data-enter]")) {
		if (Take(Inner)) {
			Rise(Inner, Number(Inner.dataset.enter) || 0);
		}
	}

	for (const Inner of Target.querySelectorAll<HTMLElement>("[data-run]")) {
		if (Take(Inner)) {
			Run(Inner);
		}
	}

	Compose(Target, false);
};

/**
 * One observer for the page, fires once per element, then unobserves it. A
 * panel starts its entrance when it is a tenth of the viewport in rather than
 * the instant its first pixel clips the fold, so the rise happens where the
 * reader is already looking.
 *
 * The root is extended far above the viewport and left at -10% below it. The
 * bottom margin is the deferral: nothing enters from underneath until it is a
 * tenth in. The top extension is the rescue: an element the reader SKIPPED -
 * a trackpad flick, a Page Down, an anchor jump on a 36,000px page - goes from
 * below the fold to above it between two frames, and its intersection ratio
 * never leaves zero, so no callback would ever fire for it and the CSS
 * pre-hide would strand its copy at opacity 0 for good. With the root reaching
 * up, "above the viewport" is intersecting, so the crossing is reported and the
 * panel is released behind the reader. Content wins over motion.
 */
const Watch = (): IntersectionObserver => {
	Watcher ??= new IntersectionObserver(
		(Entries) => {
			for (const Entry of Entries) {
				// The negative bottom margin holds an entrance back until the panel
				// is a tenth of the viewport in, so the rise happens where the
				// reader is already looking. An element that can never reach that
				// line - the last short block of a page, a page that cannot scroll
				// further - would then stay hidden forever, so anything already
				// inside the viewport is released here instead. The comparison is
				// against the viewport, not Entry.rootBounds: rootBounds is the
				// margin-adjusted rectangle, which is the very line the element
				// cannot reach. Content wins over motion.
				const InView =
					Entry.isIntersecting || Entry.boundingClientRect.top < window.innerHeight;

				if (!InView) {
					continue;
				}

				Watcher?.unobserve(Entry.target);
				Fire(Entry.target as HTMLElement);
			}
		},
		{ rootMargin: "100000px 0px -10% 0px" },
	);

	return Watcher;
};

const Reveal = (Target: HTMLElement): void => {
	if (typeof IntersectionObserver === "undefined") {
		// Defensive: without the observer the CSS pre-hide in Motion.css would
		// hold the panel at opacity 0 forever. Content wins over motion - the
		// panel is released and whatever it owns still prints.
		Target.dataset.revealed = "1";
		Compose(Target, false);

		return;
	}

	Watch().observe(Target);
};

/** A reader who turns reduced motion on mid-page gets the settled frame, not a half-played one. */
const Settle = (): void => {
	for (const Played of Running) {
		Played.finish();
	}

	// A running terminal has no last frame to finish, so it is stopped and its
	// server-rendered settled frame put back - the same stillness, exactly.
	for (const Stop of [...Runs]) {
		Stop();
	}
};

const Mount = (): void => {
	if (!Listening) {
		Reduced().addEventListener("change", Settle);
		Listening = true;
	}

	// A page with no motion attributes is done here: one selector walk, and the
	// runtime never touches the document again.
	if (
		!document.querySelector(
			"[data-enter], [data-reveal], [data-stream], [data-wipe], [data-count], [data-run]",
		)
	) {
		return;
	}

	for (const Root of document.querySelectorAll<HTMLElement>("[data-enter]")) {
		// A nested entrance waits for the panel that carries it.
		if (Root.closest("[data-reveal]")) {
			continue;
		}

		if (Take(Root)) {
			Rise(Root, Number(Root.dataset.enter) || 0);
			Compose(Root, false);
		}
	}

	for (const Root of document.querySelectorAll<HTMLElement>("[data-reveal]")) {
		if (Take(Root)) {
			Reveal(Root);
		}
	}

	// Whatever no entrance root claimed still runs, on the page's own beat
	// rather than on a scroll.
	Compose(document, true);
};

/* ═══ THE RUNNING TERMINAL ══════════════════════════════════════════════
 *
 * [data-run] is the one primitive in this file that does not settle. Every
 * other attribute here plays once and lands on a frame; a terminal keeps
 * producing output, and the preview beside it is recomputed from the output
 * that has arrived so far - so the marker is never a lie about a stream that
 * has not finished.
 *
 * THE ENGINE MIRROR. `RunPreview` is not a second preview renderer. It is a
 * line-for-line mirror of `build_preview`'s arms in Module/Aphrodite
 * (`crates/aphrodite/src/preview/builders/*.rs`): the same predicates, the
 * same tallies, the same 60-character cap on the first error message, and the
 * same `[json:~Nitems NL]` fallback that fires while a JSON body is still
 * incomplete. A stream that ends here produces exactly the line the engine
 * would have produced for it, which is what makes the settled frame true
 * rather than decorative.
 *
 * The type is the HINT the tool hands the engine, not a re-detection. In
 * `preview/type.rs::resolve_effective_type` an explicit non-generic hint wins
 * outright (`other => Cow::Borrowed(other)`) - that is how a tool names its
 * own arm - and detection runs only for a generic one, once, on the complete
 * content. Re-running detection over a prefix would be a different function
 * than the one being demonstrated.
 *
 * THE LAWS, applied to a stream:
 *   - No measurement. The track is pinned to the viewport's bottom edge, so
 *     appending a row scrolls the pane with no layout read at all. A transform
 *     would have to be derived from the track's height on every append, and
 *     appends arrive up to forty times a second.
 *   - Bounded. The pane keeps Timing.Run.Rows rows; the window shows about
 *     ten, so a dropped row has always already left the viewport.
 *   - One timer. The schedule is a single setTimeout chain, never a frame
 *     loop, and the preview text is rewritten at most every
 *     Timing.Run.Repaint ms because a text change is a layout.
 *   - Reduced motion is the markup's own frame. The settled build is
 *     server-rendered, so a reader who asked for stillness never needs this
 *     code - and a reader who turns the setting on mid-cycle gets that same
 *     frame back.
 *   - Copy stays inside the motion. Every line is the real output of the
 *     command printed above it, and every marker is computed from those lines.
 */

/** One scripted command: the classifier's verdict, its output, and its rhythm. */
export interface RunScript {
	/** The type name the engine would emit for this output. */
	Type: string;
	/** The shell line the terminal is running. */
	Command: string;
	/** The CCR id the marker addresses. */
	Hash: string;
	/** How long the settled frame stays before the next command starts, in ms. */
	Hold: number;
	/** The raw output, in arrival order. */
	Lines: string[];
	/** This command's own rhythm - a build stalls and bursts, a grep does not. */
	Pace: RunPace;
}

/** The character of one command's arrival. */
export interface RunPace {
	/** The interval a line arrives on, before jitter, in ms. */
	Beat: number;
	/** Deterministic ± jitter, so the stream never sounds metronomic. */
	Jitter: number;
	/** Every Nth line pauses for `Stall` - the compiler thinking. */
	Every: number;
	/** How long that pause is, in ms. */
	Stall: number;
	/** Extra pause when the line arriving is a warning or an error. */
	Turn: number;
}

/** What a line is. Derived from its text, never authored - the classification. */
type LineKind = "command" | "compiling" | "warning" | "error" | "context" | "plain";

/**
 * The suppression tones, the same 70/40/25 the pair has always drawn. The
 * classes live here and in the component's own settled frame, so the utility
 * CSS is generated for both.
 */
export const RunTone: Record<LineKind, string> = {
	command: "text-bone-white font-bold",
	compiling: "opacity-40",
	warning: "opacity-25",
	error: "text-stamped-canary",
	context: "opacity-70",
	plain: "",
};

/** Rust's `.chars().take(n)`. */
const Clip = (Text: string, Count: number): string =>
	Array.from(Text).slice(0, Count).join("");

/** Rust's `is_error_line` (preview/line/error.rs). */
const IsErrorLine = (Line: string): boolean => {
	const Trimmed = Line.trimStart();

	return (
		Trimmed.startsWith("error[") ||
		Trimmed.startsWith("error:") ||
		Trimmed.startsWith("Error:") ||
		Trimmed.startsWith("ERROR") ||
		Trimmed.startsWith("panicked at") ||
		Trimmed.includes(": error[") ||
		Trimmed.includes(": error:") ||
		ErrorWordBeforeColon(Trimmed)
	);
};

/** Rust's `error_word_before_colon`: the word run before a `:` ends `Error`, or is `Exception`. */
const ErrorWordBeforeColon = (Text: string): boolean => {
	for (let At = Text.indexOf(":"); At >= 0; At = Text.indexOf(":", At + 1)) {
		let Start = At;

		while (Start > 0 && /[A-Za-z0-9_]/.test(Text[Start - 1])) {
			Start -= 1;
		}

		const Word = Text.slice(Start, At);

		if (Word.endsWith("Error") || Word === "Exception") {
			return true;
		}
	}

	return false;
};

/** Rust's `is_warning_line` (preview/line/warning.rs). */
const IsWarningLine = (Line: string): boolean => {
	const Trimmed = Line.trimStart();

	return (
		Trimmed.startsWith("warning[") ||
		Trimmed.startsWith("warning:") ||
		Trimmed.startsWith("Warning:") ||
		Trimmed.startsWith("WARNING") ||
		Trimmed.includes(": warning[") ||
		Trimmed.includes(": warning:")
	);
};

/** Rust's `num_before_kw`: the integer immediately before a case-insensitive keyword. */
const NumBeforeKeyword = (Line: string, Keyword: string): number => {
	const At = Line.toLowerCase().indexOf(Keyword.toLowerCase());

	if (At < 0) {
		return 0;
	}

	let Start = At;

	while (Start > 0 && /[0-9]/.test(Line[Start - 1])) {
		Start -= 1;
	}

	const Value = Number(Line.slice(Start, At));

	return Number.isFinite(Value) ? Value : 0;
};

/** Rust's `is_failure_line` (preview/line/failure.rs). */
const IsFailureLine = (Line: string): boolean => {
	const Trimmed = Line.trimStart();

	return (
		Trimmed.includes("FAILED") ||
		Trimmed.startsWith("FAIL ") ||
		Trimmed.startsWith("--- FAIL:") ||
		NumBeforeKeyword(Trimmed, "failed") >= 1
	);
};

/** Rust's `split_path_line`: `path:line:...` with a numeric middle field. */
const SplitPathLine = (Line: string): [string, string] | null => {
	const First = Line.indexOf(":");

	if (First < 0) {
		return null;
	}

	const Path = Line.slice(0, First);

	if (Path.trim() === "" || Path.includes(" ")) {
		return null;
	}

	const Rest = Line.slice(First + 1);
	const Second = Rest.indexOf(":");

	// `splitn(3, ':')` needs a third segment to exist at all.
	if (Second < 0) {
		return null;
	}

	const Middle = Rest.slice(0, Second);

	if (Middle === "" || !/^[0-9]+$/.test(Middle)) {
		return null;
	}

	return [Path, Middle];
};

/** Rust's `is_grep_line`: a hit whose path looks file-ish. */
const IsGrepLine = (Line: string): boolean => {
	const Split = SplitPathLine(Line);

	return Split !== null && (Split[0].includes("/") || Split[0].includes("."));
};

/** Rust's `num_before`: the integer run immediately preceding `Keyword`. */
const NumBefore = (Line: string, Keyword: string): number => {
	const At = Line.indexOf(Keyword);

	if (At < 0) {
		return 0;
	}

	const Runs = Line.slice(0, At).trimEnd().split(/[^0-9]+/);

	for (let Index = Runs.length - 1; Index >= 0; Index -= 1) {
		if (Runs[Index] !== "") {
			const Value = Number(Runs[Index]);

			return Number.isFinite(Value) ? Value : 0;
		}
	}

	return 0;
};

/** Rust's `first_duration`: the first `150ms` / `0.31s` token on any line. */
const FirstDuration = (Lines: readonly string[]): string | null => {
	for (const Line of Lines) {
		for (const Token of Line.split(/\s+/)) {
			if (Token.endsWith("ms")) {
				const Ms = Token.slice(0, -2);

				if (Ms !== "" && /^[0-9]+$/.test(Ms)) {
					return `${Ms}ms`;
				}

				continue;
			}

			if (!Token.endsWith("s")) {
				continue;
			}

			const Seconds = Token.slice(0, -1);
			const Dot = Seconds.indexOf(".");

			if (Dot <= 0 || Dot === Seconds.length - 1) {
				continue;
			}

			const Whole = Seconds.slice(0, Dot);
			const Fraction = Seconds.slice(Dot + 1);

			if (/^[0-9]+$/.test(Whole) && /^[0-9]+$/.test(Fraction)) {
				return `${Seconds}s`;
			}
		}
	}

	return null;
};

/** The first error's message: from `error`/`Error`/`ERROR` to the end, capped at 60 chars. */
const ErrorMessage = (Line: string): string => {
	let Start = Line.indexOf("error");

	if (Start < 0) {
		Start = Line.indexOf("Error");
	}

	if (Start < 0) {
		Start = Line.indexOf("ERROR");
	}

	return Clip(Start < 0 ? Line : Line.slice(Start), 60);
};

/** `builders/build.rs` - honest error/warning LINE tallies, never success-looking. */
const BuildPreview = (Lines: readonly string[]): string => {
	const Errors = Lines.filter(IsErrorLine).length;
	const Warnings = Lines.filter(IsWarningLine).length;
	const Total = Lines.length;
	const Trimmed = Lines.map((Line) => Line.trim());
	const First = Trimmed.find(IsErrorLine);

	if (First !== undefined) {
		const Message = ErrorMessage(First);

		if (Message !== "") {
			return `[build:${Errors}E ${Warnings}W ${Total}L | ${Message}]`;
		}
	}

	if (Errors === 0 && Warnings === 0) {
		const Failure = Trimmed.find(IsFailureLine);

		// A failing run with no error line must never render as a clean build.
		if (Failure !== undefined) {
			return `[build:${Errors}E ${Warnings}W ${Total}L | ${Clip(Failure, 60)}]`;
		}
	}

	return `[build:${Errors}E ${Warnings}W ${Total}L]`;
};

/** `builders/grep.rs` - hit count, distinct files, first location. */
const GrepPreview = (Lines: readonly string[]): string => {
	let Hits = 0;
	const Files = new Set<string>();
	let First: string | null = null;

	for (const Line of Lines) {
		const Split = SplitPathLine(Line);

		if (Split === null || !IsGrepLine(Line)) {
			continue;
		}

		Hits += 1;
		Files.add(Split[0]);

		if (First === null) {
			First = Clip(`${Split[0]}:${Split[1]}`, 48);
		}
	}

	if (Hits === 0) {
		return `[grep:${Lines.length}L]`;
	}

	return First === null
		? `[grep:${Hits} hits in ${Files.size} files]`
		: `[grep:${Hits} hits in ${Files.size} files | ${First} ...]`;
};

/** `builders/ls.rs` - file/dir counts plus the top three extensions. */
const LsPreview = (Lines: readonly string[]): string => {
	let Files = 0;
	let Dirs = 0;
	const Extensions = new Map<string, number>();

	for (const Line of Lines) {
		const Trimmed = Line.trim();

		if (Trimmed === "") {
			continue;
		}

		// `ls -l` prints a `total N` header that is not a filesystem entry.
		if (Trimmed.startsWith("total ")) {
			const Rest = Trimmed.slice(6);

			if (Rest !== "" && /^[0-9]+$/.test(Rest)) {
				continue;
			}
		}

		const Long =
			Line.length >= 10 &&
			"-dlcbps".includes(Line[0]) &&
			/^[rwx\-stST]{9}$/.test(Line.slice(1, 10));

		let Name: string;
		let Directory: boolean;

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

	if (Files === 0 && Dirs === 0) {
		return `[ls:${Lines.length}L]`;
	}

	const Top = [...Extensions.entries()]
		.sort(([Left, LeftCount], [Right, RightCount]) =>
			RightCount - LeftCount || (Left < Right ? -1 : Left > Right ? 1 : 0),
		)
		.slice(0, 3)
		.map(([Extension, Count]) => `${Extension}×${Count}`);

	return Top.length === 0
		? `[ls:${Files} files ${Dirs} dirs]`
		: `[ls:${Files} files ${Dirs} dirs | ${Top.join(" ")}]`;
};

/** `builders/test.rs` - pass/fail/ignored tallies, then the first failing test. */
const TestPreview = (Lines: readonly string[]): string => {
	let Pass = 0;
	let Fail = 0;
	let Ignored = 0;
	let Found = false;

	for (const Line of Lines) {
		const At = Line.indexOf("test result:");

		if (At < 0) {
			continue;
		}

		Found = true;

		const Rest = Line.slice(At + "test result:".length);

		Pass += NumBefore(Rest, "passed");
		Fail += NumBefore(Rest, "failed");
		Ignored += NumBefore(Rest, "ignored");
	}

	if (!Found) {
		for (const Line of Lines) {
			if (!Line.includes("passed") && !Line.includes("failed")) {
				continue;
			}

			const P = NumBefore(Line, "passed");
			const F = NumBefore(Line, "failed");

			if (P > 0 || F > 0) {
				Found = true;
				Pass += P;
				Fail += F;
			}
		}
	}

	// A bare test log: `test foo ... ok` lines still give an honest tally.
	if (!Found) {
		for (const Line of Lines) {
			const Trimmed = Line.trim();

			if (!Trimmed.startsWith("test ")) {
				continue;
			}

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
	}

	let FirstFailure: string | null = null;

	for (const Line of Lines) {
		const Trimmed = Line.trim();
		let Name: string | null = null;

		if (Trimmed.startsWith("--- FAIL: ")) {
			Name = Trimmed.slice(10).split(/\s+/)[0] ?? "";
		} else if (Trimmed.startsWith("test ") && Trimmed.endsWith("FAILED")) {
			Name = Trimmed.slice(5).split(/\s+/)[0] ?? "";
		} else if (Trimmed.startsWith("FAILED ")) {
			Name = Trimmed.slice(7).split(/\s+/)[0] ?? "";
		}

		if (Name !== null) {
			FirstFailure = Name === "" ? null : Name;

			break;
		}
	}

	const Duration = FirstDuration(Lines);

	if (!Found && FirstFailure === null) {
		return `[test:${Lines.length}L]`;
	}

	let Out = `[test:${Pass} pass ${Fail} fail ${Ignored} ignored`;

	if (FirstFailure !== null) {
		Out += ` | FAIL ${Clip(FirstFailure, 40)}`;
	} else if (Duration !== null) {
		Out += ` | ${Duration}`;
	}

	return `${Out}]`;
};

/** `builders/json.rs` - item/key counts, and the crude fallback while it is incomplete. */
const JsonPreview = (Lines: readonly string[]): string => {
	const Raw = Lines.join("\n");
	let Parsed: unknown = null;
	let ParsedOk = true;

	try {
		Parsed = JSON.parse(Raw);
	} catch {
		ParsedOk = false;
	}

	if (ParsedOk && Array.isArray(Parsed)) {
		let Keys = "";
		const First: unknown = Parsed[0];

		if (First !== null && typeof First === "object" && !Array.isArray(First)) {
			const All = Object.keys(First as Record<string, unknown>);
			const Shown = All.slice(0, 8);

			Keys = ` | keys: ${Shown.join(", ")}${
				Shown.length < All.length ? ` +${All.length - Shown.length} more` : ""
			}`;
		}

		return `[json:${Parsed.length}items ${Lines.length}L${Keys}]`;
	}

	if (ParsedOk && Parsed !== null && typeof Parsed === "object") {
		const All = Object.keys(Parsed as Record<string, unknown>);
		const Shown = All.slice(0, 8);
		const More = Shown.length < All.length ? ` +${All.length - Shown.length} more` : "";

		return `[json:${All.length}keys ${Lines.length}L | ${Shown.join(", ")}${More}]`;
	}

	// Unparseable (truncated, or still arriving): the engine's own crude count.
	const Crude = (Raw.match(/\{"/g) ?? []).length;

	return `[json:~${Crude}items ${Lines.length}L]`;
};

/**
 * The preview the engine would emit for a stream that ended here. Exported so
 * the component can server-render the settled frame a reader with no
 * JavaScript reads - the same function, not a copy of its output.
 */
export const RunPreview = (Type: string, Lines: readonly string[]): string => {
	switch (Type) {
		case "build":
			return BuildPreview(Lines);
		case "grep":
			return GrepPreview(Lines);
		case "ls":
			return LsPreview(Lines);
		case "test":
			return TestPreview(Lines);
		case "json":
			return JsonPreview(Lines);
		default:
			return `[${Type}:${Lines.length}L]`;
	}
};

/** The bytes a marker addresses: the stream as it stands, UTF-8. */
export const RunBytes = (Lines: readonly string[]): number => {
	const Text = Lines.join("\n");

	return typeof TextEncoder === "undefined" ? Text.length : new TextEncoder().encode(Text).length;
};

/** The marker line: the id, the verdict, and the size of the bytes behind it. */
export const RunMarker = (Hash: string, Type: string, Lines: readonly string[]): string =>
	`<<<CCR:${Hash}|${Type}|${RunBytes(Lines)}>>>`;

/** The classification of one output line, from its text alone. */
export const RunKind = (Line: string): LineKind => {
	if (Line.startsWith("$ ")) {
		return "command";
	}

	if (IsErrorLine(Line)) {
		return "error";
	}

	if (IsWarningLine(Line)) {
		return "warning";
	}

	if (/^\s+Compiling /.test(Line)) {
		return "compiling";
	}

	if (/^\s*(-->|\||=|note:|help:)/.test(Line) || /^\s*[0-9]+\s*\|/.test(Line)) {
		return "context";
	}

	if (/\.\.\. FAILED$/.test(Line)) {
		return "error";
	}

	if (/\.\.\. ok$/.test(Line)) {
		return "context";
	}

	return "plain";
};

/** A deterministic stream, so a reload reproduces the same rhythm exactly. */
const Randomize = (Seed: number): (() => number) => {
	let State = Seed >>> 0;

	return () => {
		State = (State + 0x6d2b79f5) >>> 0;

		let Mixed = State;

		Mixed = Math.imul(Mixed ^ (Mixed >>> 15), Mixed | 1);
		Mixed ^= Mixed + Math.imul(Mixed ^ (Mixed >>> 7), Mixed | 61);

		return ((Mixed ^ (Mixed >>> 14)) >>> 0) / 4294967296;
	};
};

/**
 * The running terminal. Reads its script from a JSON payload the page ships,
 * streams the lines on that command's own rhythm, and rewrites the preview,
 * the marker and the tally from the prefix after every arrival.
 *
 * Returns the stop function so Teardown - and a reader who turns reduced
 * motion on mid-cycle - can put the server-rendered settled frame back.
 */
const Run = (Root: HTMLElement): (() => void) => {
	const Nothing = (): void => {};

	// The reader asked for stillness: the markup's settled build frame is the
	// answer, and this code never needs to run at all.
	if (Reduced().matches) {
		return Nothing;
	}

	const Payload = document.querySelector<HTMLScriptElement>(
		`script[data-run-script="${Root.dataset.run ?? ""}"]`,
	);
	const Track = Root.querySelector<HTMLElement>("[data-run-track]");
	const Viewport = Root.querySelector<HTMLElement>("[data-run-viewport]");
	const Tally = Root.querySelector<HTMLElement>("[data-run-tally]");
	const Prompt = Root.querySelector<HTMLElement>("[data-run-prompt]");
	const Verdict = Root.querySelector<HTMLElement>("[data-run-type]");
	const Preview = Root.querySelector<HTMLElement>("[data-run-preview]");
	const Marker = Root.querySelector<HTMLElement>("[data-run-marker]");

	// Defensive: a missing hook leaves the settled frame the markup already
	// carries. A hero runtime that cannot run must never blank the page.
	if (
		Payload === null ||
		Track === null ||
		Viewport === null ||
		Tally === null ||
		Prompt === null ||
		Verdict === null ||
		Preview === null ||
		Marker === null
	) {
		return Nothing;
	}

	let Scripts: RunScript[];

	try {
		const Parsed: unknown = JSON.parse(Payload.textContent ?? "");

		if (!Array.isArray(Parsed) || Parsed.length === 0) {
			return Nothing;
		}

		Scripts = Parsed as RunScript[];
	} catch {
		return Nothing;
	}

	/** The frame the markup shipped, restored verbatim if the cycle is stopped. */
	const Settled = {
		Track: Track.innerHTML,
		Tally: Tally.textContent,
		Prompt: Prompt.textContent,
		Verdict: Verdict.textContent,
		Preview: Preview.textContent,
		Marker: Marker.textContent,
	};

	let Timer = 0;
	let Stopped = false;
	let Which = 0;
	let Lines: string[] = [];
	let Painted = 0;
	let Jitter = Randomize(1);

	const Paint = (Force: boolean): void => {
		const Now = performance.now();

		if (!Force && Now - Painted < Timing.Run.Repaint) {
			return;
		}

		Painted = Now;

		const Script = Scripts[Which % Scripts.length];

		Preview.textContent = RunPreview(Script.Type, Lines);
		Marker.textContent = RunMarker(Script.Hash, Script.Type, Lines);
		Tally.textContent = `${Lines.length.toLocaleString("en-US")} lines · ${RunBytes(
			Lines,
		).toLocaleString("en-US")} characters`;
	};

	const Delay = (Pace: RunPace, Kind: LineKind, Previous: LineKind | null, Nth: number): number => {
		let Wait = Pace.Beat + Math.round((Jitter() * 2 - 1) * Pace.Jitter);

		if (Pace.Every > 0 && Nth > 0 && Nth % Pace.Every === 0) {
			Wait += Pace.Stall;
		}

		// The pause follows the KIND of the line arriving: a compiler that has
		// just found something does not print at the speed it compiled at.
		if (Previous !== null && Previous !== Kind && (Kind === "error" || Kind === "warning")) {
			Wait += Pace.Turn;
		}

		return Math.max(16, Wait);
	};

	const Emit = (Text: string): void => {
		Lines.push(Text);

		const Row = document.createElement("div");

		Row.className = "whitespace-pre-wrap break-words leading-6";

		const Span = document.createElement("span");

		Span.className = RunTone[RunKind(Text)];
		Span.textContent = Text;
		Row.append(Span);
		Track.append(Row);

		while (Track.children.length > Timing.Run.Rows) {
			Track.firstElementChild?.remove();
		}

		// The line prints rather than pops: one compositor animation per row,
		// and at most a handful are ever in flight at once.
		Play(
			Row,
			[
				{ opacity: 0, transform: Timing.Stream.Rise },
				{ opacity: 1, transform: "translate3d(0, 0, 0)" },
			],
			Timing.Stream.Duration,
			0,
			Timing.Enter.Easing,
		);

		Paint(false);
	};

	const Step = (): void => {
		if (Stopped) {
			return;
		}

		const Script = Scripts[Which % Scripts.length];

		if (Lines.length >= Script.Lines.length) {
			Paint(true);
			Timer = window.setTimeout(Next, Script.Hold);

			return;
		}

		const Index = Lines.length;
		const Text = Script.Lines[Index];
		const Kind = RunKind(Text);
		const Previous = Index === 0 ? null : RunKind(Script.Lines[Index - 1]);

		Emit(Text);

		if (Lines.length >= Script.Lines.length) {
			Paint(true);
			Timer = window.setTimeout(Next, Script.Hold);

			return;
		}

		Timer = window.setTimeout(Step, Delay(Script.Pace, Kind, Previous, Index));
	};

	const Begin = (Index: number): void => {
		if (Stopped) {
			return;
		}

		Which = Index;
		Lines = [];

		const Script = Scripts[Index % Scripts.length];

		Track.replaceChildren();
		Jitter = Randomize(Index * 2654435761 + 1);
		Prompt.textContent = `$ ${Script.Command}`;
		Verdict.textContent = Script.Type;
		Painted = 0;
		Paint(true);

		// The clear is a compositor fade, not a DOM flash.
		Play(Track, [{ opacity: 0 }, { opacity: 1 }], Timing.Run.Clear, 0, Timing.Enter.Easing);

		Timer = window.setTimeout(Step, Timing.Run.Lead);
	};

	const Next = (): void => {
		Begin(Which + 1);
	};

	const Stop = (): void => {
		Stopped = true;
		window.clearTimeout(Timer);

		// Back to flow first, then the frame the markup shipped.
		Viewport.style.position = "";
		Viewport.style.height = "";
		Track.style.position = "";
		Track.style.insetInline = "";
		Track.style.bottom = "";

		Track.innerHTML = Settled.Track;
		Tally.textContent = Settled.Tally;
		Prompt.textContent = Settled.Prompt;
		Verdict.textContent = Settled.Verdict;
		Preview.textContent = Settled.Preview;
		Marker.textContent = Settled.Marker;
		Runs.delete(Stop);
	};

	Runs.add(Stop);

	// The markup ships in flow, so a reader with no JavaScript - or one who
	// asked for stillness - gets the whole settled frame at its natural height,
	// exactly as the pair has always read. Mounting turns it into a window: a
	// track pinned to the bottom edge so an append scrolls the pane without a
	// single layout read, inside a box as tall as the frame it replaces.
	//
	// That height is MEASURED ONCE, from the settled frame itself, rather than
	// written down here. A hardcoded height has to guess the font's line box,
	// and a guess that is wrong is a layout shift on the one element the reader
	// is already looking at. One read at mount, then never again.
	const Window = Math.max(
		Timing.Run.Floor,
		Math.ceil(Track.getBoundingClientRect().height),
	);

	Viewport.style.position = "relative";
	Viewport.style.height = `${Window}px`;
	Track.style.position = "absolute";
	Track.style.insetInline = "0";
	Track.style.bottom = "0";

	Begin(0);

	return Stop;
};

/** The discarded page's teardown: no observer, no pending counter frame, nothing left running. */
export const Teardown = (): void => {
	Watcher?.disconnect();
	Watcher = null;

	for (const Stop of [...Runs]) {
		Stop();
	}

	Runs.clear();
	Generations = new WeakMap();
	Running.clear();
};

export default Mount;
