/**
 * CodePlate - the client-side half of the code plate.
 *
 * Shiki emits a bare `<pre class="astro-code ...">`: no frame, no padding, no
 * copy control, and its token colours are inline styles a stylesheet cannot
 * outrank. `Source/Stylesheet/Global.css` supplies the print grammar (frame,
 * padding, rhythm, hover, scroll cue) and `Source/Library/ShikiTheme.ts`
 * supplies the colours; this module supplies the two things neither can:
 *
 *   1. THE WRAPPER. `figure.zine-plate` exists so the language tag and the
 *      copy chip can sit outside the scroll container - an absolutely
 *      positioned child of a scrolling `<pre>` scrolls away with the code.
 *      The stylesheet also matches a bare `<pre>`, so nothing waits on this
 *      module to look like a plate.
 *
 *   2. THE ANNOTATIONS. In bash (the site's most-used fence language) a `//`
 *      note and the words around it are the SAME token - one colour, no
 *      distinction - and `$ ` is whatever token the grammar happened to give
 *      the sigil. Both are wrapped here so the stylesheet can mark them.
 *      Wrapping moves text nodes into a new `<span>` and never edits a
 *      character: `textContent` - and therefore the copy payload - is
 *      byte-identical to what Shiki rendered.
 *
 * THE ONE COPY CONTROL. The chip cluster is the block's ONLY copy control, and
 * it is built here rather than by the fence component: a fence that rendered
 * its own button shipped two controls for one payload - the plate's chip and a
 * second one whose label defaulted to the language (`BASH`), which reads as
 * metadata, not as an action. The rule that keeps it at one:
 *
 *   - the chip's label names the ACTION - `Copy`, or `Copy command` when the
 *     clipboard holds a bare command and the block on screen holds a
 *     transcript;
 *   - the language tag beside it is a `<span>`: metadata, never a button;
 *   - THE PAYLOAD IS A PROP AND THERE IS EXACTLY ONE OF IT. A fence that must
 *     copy something other than what it renders carries it as
 *     `data-plate-payload` on the host (`Component/CodeFence.astro`'s
 *     `CopyPayload`); this module copies that string, and only falls back to
 *     `pre.textContent` when the block declares nothing.
 *
 * The copy chip carries `data-copy` and nothing else: `Layout/Base.astro` owns
 * the one clipboard runtime and binds every `[data-copy]` element, so this
 * module adds markup, never a second handler. `BindPlates` runs before
 * `BindCopy` for exactly that reason.
 *
 * Idempotent by construction (`data-plate-bound`), because the view-transitions
 * router re-runs the binding on every `astro:page-load`.
 */

const PlateClass = "zine-plate";
const ScrollClass = "zine-plate--scroll";
const FlushClass = "zine-plate--flush";

/**
 * The RECESSED WELL. The Stitch direction renders every code block as a channel
 * cut into the page with a header ribbon over it, rather than a plate with a
 * chip cluster floating inside its top padding. The class is added here - and
 * only here - so `Global.css` can scope the whole treatment to
 * `body .zine-plate.well` and leave the plate rules for a bare
 * `<pre class="astro-code">` exactly as they were: a fence with no JavaScript
 * still gets its frame, its padding and its crimson spine.
 */
const WellClass = "well";

/** Wrap the `[Start, End)` slice of a text node in a span of `ClassName`. */
const Wrap = (Target: Text, Start: number, End: number, ClassName: string): void => {
	Target.splitText(End);

	const Middle = Target.splitText(Start);
	const Span = document.createElement("span");

	Span.className = ClassName;
	Middle.after(Span);
	Span.appendChild(Middle);
};

/** Every text node under `Root`, in document order, taken before any mutation. */
const TextNodes = (Root: Element): Text[] => {
	const Walker = document.createTreeWalker(Root, NodeFilter.SHOW_TEXT);
	const Nodes: Text[] = [];

	while (Walker.nextNode()) {
		Nodes.push(Walker.currentNode as Text);
	}

	return Nodes;
};

/**
 * Mark the `$` of a shell prompt. A line whose first token is `$` followed by
 * a space (or by nothing) is a prompt; `$env:HERMES_HOME` and `$(pwd)` are not,
 * which is why the character after the sigil is checked.
 */
const MarkPrompt = (Line: Element): void => {
	for (const Node_ of TextNodes(Line)) {
		if (Node_.data.trim() === "") {
			continue;
		}

		const At = Node_.data.indexOf("$");

		if (At < 0 || Node_.data.slice(0, At).trim() !== "") {
			return;
		}

		const After = Node_.data.charAt(At + 1);

		if (After !== "" && After !== " ") {
			return;
		}

		Wrap(Node_, At, At + 1, "zine-prompt");

		return;
	}
};

/**
 * Mark a trailing `//` annotation. `https://` is not an annotation, so a `//`
 * whose preceding character is a colon is skipped; the rest of the line joins
 * the annotation, which is what the fence author meant by writing it there.
 */
const MarkComment = (Line: Element): void => {
	const Nodes = TextNodes(Line);

	for (const [Index, Node_] of Nodes.entries()) {
		const At = Node_.data.indexOf("//");

		if (At < 0) {
			continue;
		}

		if (At > 0 && Node_.data.charAt(At - 1) === ":") {
			continue;
		}

		const Span = document.createElement("span");

		Span.className = "zine-comment";
		Span.appendChild(Node_.splitText(At));

		for (const Rest of Nodes.slice(Index + 1)) {
			Span.appendChild(Rest);
		}

		Node_.after(Span);

		return;
	}
};

/** Flag a plate whose code is wider than its frame, so the cue can appear. */
const FlagScroll = (Figure: HTMLElement, Pre: HTMLPreElement): void => {
	const Update = (): void => {
		Figure.classList.toggle(ScrollClass, Pre.scrollWidth > Pre.clientWidth + 1);
	};

	Update();

	// Guarded: a browser without ResizeObserver keeps the initial reading
	// rather than throwing on every block.
	if (typeof ResizeObserver === "undefined") {
		return;
	}

	new ResizeObserver(Update).observe(Pre);
};

/**
 * The copy payload, in one place and in one order: a payload the block
 * DECLARES wins, and `pre.textContent` is the fallback.
 *
 * The declared value is taken byte-exact - it is a prop, already the string the
 * author meant, so it gets no trimming. The fallback drops one trailing newline
 * because Shiki emits an empty last line for a fence that ends with a newline,
 * and a paste that ends in a blank line is noise. Nothing else is touched.
 */
const Payload = (Pre: HTMLPreElement, Declared: string | undefined): string =>
	Declared ?? (Pre.textContent ?? "").replace(/\n$/, "");

/** Wrap one fence in its plate and hang the chip cluster on it. */
const BuildPlate = (Pre: HTMLPreElement): void => {
	const Host = Pre.parentElement;

	// THE PAYLOAD IS A PROP AND THERE IS EXACTLY ONE OF IT. `Component/
	// CodeFence.astro` puts `CopyPayload` on the host as `data-plate-payload`
	// when the block displays a transcript and the clipboard must hold a bare
	// command; every other fence declares nothing and the rendered text IS the
	// payload.
	const Declared = Host?.dataset["platePayload"];
	const Command = Declared !== undefined;

	// A fence may arrive with its own copy control - a control the PAGE placed
	// beside this block, not one the fence component rendered. It is MOVED into
	// the chip cluster rather than duplicated: one block, one copy control, one
	// truth - and the cluster is the only thing that knows where the plate's
	// top-right corner is.
	//
	// The control only counts as THIS block's when the host holds this one
	// fence. A markdown fence's host is the whole reading column, so a looser
	// test adopts an unrelated CTA from elsewhere on the page and empties the
	// block's own cluster. A block that DECLARES its payload never adopts one:
	// the declared string is the truth, and a foreign control's `data-copy`
	// would be a second answer to the same question.
	const Existing =
		!Command && Host && Host.querySelectorAll("pre.astro-code").length === 1
			? Host.querySelector<HTMLElement>("[data-copy]")
			: null;
	const Holder = Existing?.parentElement ?? null;

	const Figure = document.createElement("figure");

	Figure.className = PlateClass;
	// The well is the fence's surface: `Global.css` scopes the recessed fill,
	// the lighter edge and the ribbon to this class, so a plate built here is
	// a channel and a plate rendered by markdown before this module runs is
	// still the plate it always was.
	Figure.classList.add(WellClass);

	// ONE FRAME PER REGION. A host that already frames or pads the fence asks
	// the plate to drop its own margin (`data-plate-flush`), so the fence's
	// border sits at the host's inset on all four sides instead of that inset
	// PLUS the plate's rhythm on two of them.
	if (Host?.dataset["plateFlush"] !== undefined) {
		Figure.classList.add(FlushClass);
	}

	Pre.replaceWith(Figure);
	Figure.appendChild(Pre);

	const Bar = document.createElement("div");
	const DeclaredPath = Host?.dataset["platePath"];
	const Lang = document.createElement("span");

	Bar.className = "zine-plate-bar";

	// THE RIBBON'S LEADING FIELD. A fence that declares where it came from
	// (`Component/CodeFence.astro`'s `Path`) prints it at the head of the
	// ribbon; the free space it takes is what pushes the language and the
	// control to the right edge. Metadata like the language tag - a `<span>`,
	// never a button - because a path names what the block IS, not what it
	// does.
	if (DeclaredPath !== undefined && DeclaredPath !== "") {
		const Path = document.createElement("span");

		Path.className = "zine-plate-path";
		Path.textContent = DeclaredPath;
		Bar.appendChild(Path);
	}

	Lang.className = "zine-plate-lang";
	// Metadata, not an action: a `<span>`, never a button, and the stylesheet
	// gives it the quiet label voice rather than the copy chip's.
	Lang.textContent = (Pre.dataset["language"] ?? "code").toUpperCase();
	Bar.appendChild(Lang);

	if (Existing) {
		// An adopted control keeps its own payload and its own visible label -
		// it is the page's CTA, not the plate's - but it takes the bar's
		// metrics, because a cluster of two differently sized chips reads as
		// two different kinds of thing.
		Existing.classList.add("zine-plate-copy");
		Bar.appendChild(Existing);

		// The wrapper that positioned the button absolutely is now empty; left
		// in place it would hold a row of the plate open for nothing.
		if (Holder && Holder !== Host && Holder.childElementCount === 0) {
			Holder.remove();
		}
	} else {
		const Button = document.createElement("button");

		Button.type = "button";
		Button.className = "zine-plate-copy";
		Button.dataset["copy"] = Payload(Pre, Declared);
		// The label names the ACTION. `Copy command` where the clipboard holds
		// a bare command and the block holds a transcript: the reader is told
		// which of the two they are getting.
		Button.setAttribute(
			"aria-label",
			Command
				? "Copy this block's command to the clipboard"
				: "Copy this code block to the clipboard",
		);
		Button.innerHTML = `<span aria-hidden="true">⧉</span><span>${Command ? "Copy command" : "Copy"}</span>`;
		Bar.appendChild(Button);
	}

	Figure.appendChild(Bar);
	FlagScroll(Figure, Pre);
};

/** Bind every code fence on the page. Safe to call on every page load. */
export const BindPlates = (): void => {
	for (const Pre of document.querySelectorAll<HTMLPreElement>("pre.astro-code")) {
		if (Pre.dataset["plateBound"]) {
			continue;
		}

		Pre.dataset["plateBound"] = "1";

		for (const Line of Pre.querySelectorAll("span.line")) {
			MarkPrompt(Line);
			MarkComment(Line);
		}

		BuildPlate(Pre);
	}
};
