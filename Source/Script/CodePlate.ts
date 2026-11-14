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
 * The copy payload. One trailing newline is dropped - Shiki emits an empty
 * last line for a fence that ends with a newline, and a paste that ends in a
 * blank line is noise. Nothing else is touched.
 */
const Payload = (Pre: HTMLPreElement): string => (Pre.textContent ?? "").replace(/\n$/, "");

/** Wrap one fence in its plate and hang the chip cluster on it. */
const BuildPlate = (Pre: HTMLPreElement): void => {
	const Host = Pre.parentElement;

	// A block that already carries a copy control (Component/CodeFence.astro's
	// CopyButton) keeps that control: two copy chips on one block is two truths.
	const HasCopy = Host?.querySelector("[data-copy]") !== null && Host !== null;

	const Figure = document.createElement("figure");

	Figure.className = PlateClass;
	Pre.replaceWith(Figure);
	Figure.appendChild(Pre);

	if (HasCopy) {
		return;
	}

	const Bar = document.createElement("div");
	const Lang = document.createElement("span");
	const Button = document.createElement("button");

	Bar.className = "zine-plate-bar";
	Lang.className = "zine-plate-lang";
	Lang.textContent = (Pre.dataset["language"] ?? "code").toUpperCase();
	Bar.appendChild(Lang);

	Button.type = "button";
	Button.className = "zine-plate-copy";
	Button.dataset["copy"] = Payload(Pre);
	Button.setAttribute("aria-label", "Copy this code block to the clipboard");
	Button.innerHTML = '<span aria-hidden="true">⧉</span><span>COPY</span>';
	Bar.appendChild(Button);

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
