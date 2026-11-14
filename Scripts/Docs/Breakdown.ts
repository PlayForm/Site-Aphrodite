// Docs/Breakdown.ts - the prose breakdown: one line per option.
//
// A docs paragraph that introduces an enumeration in a single run-on sentence
// reads as a wall of commas. The site renders one line per option instead: the
// intro keeps the source's own line breaks, and every item of the enumeration
// becomes its own `- ` line.
//
// THE NO-NEW-CLAIM LAW
//
// This transform only decides WHERE A LINE ENDS. It splits on separators that
// are already in the source (`;`, `,`, ` and `, ` or `, ` but `) and it keeps
// every word, every backtick span and every link. A run of prose it cannot
// parse is returned byte-identical, so a paragraph this transform does not
// understand is a paragraph that stays as the repository wrote it.
//
// The guards that keep it from firing on ordinary prose:
//
// - the paragraph must be plain prose: not a heading, list, table, quote, fence
//   or HTML block, and not inside a fenced code block;
// - the split point is the LAST top-level colon (`::` in `path::fn` and
//   `CCR:hash` inside backticks are not separators);
// - the tail after that colon must be at least `MinTail` characters and must
//   yield at least two items;
// - a short intro (at most `MaxIntroWords` words, e.g. "Precedence rule:")
//   keeps its first clause, because "Precedence rule: where it says X, ..."
//   introduces the list, it is not the first item of it.

/** Longest line this transform will leave in place before re-wrapping it. */
const Width = 92;

/** The tail after the colon must be at least this long to be an enumeration. */
const MinTail = 80;

/** An intro this short keeps its first clause instead of starting the list. */
const MaxIntroWords = 4;

/** A split: where an item starts, and the connector word that starts it. */
interface Boundary {
	/** Index in the tail where the separator begins. */
	At: number;

	/** Length of the separator run. */
	Length: number;

	/** Words the separator carries into the next item ("and", "or", "but"). */
	Connector: string;

	/** True when the separator was a bare comma - the absorb rule reads it. */
	Comma: boolean;
}

/**
 * The set of indices that sit inside an inline code span, a parenthesis or a
 * bracket. A separator inside any of those is part of a value, not a list.
 */
function Protected(Text: string): boolean[] {
	const Mask: boolean[] = Array.from({ length: Text.length }, () => false);

	let Depth = 0;
	let Code = false;

	for (let Index = 0; Index < Text.length; Index += 1) {
		const Char = Text[Index];

		Mask[Index] = Code || Depth > 0;

		switch (true) {
			case Char === "`":
				Code = !Code;

				break;
			case Code:
				break;
			case Char === "(" || Char === "[" || Char === "{":
				Depth += 1;

				break;
			case Char === ")" || Char === "]" || Char === "}":
				Depth = Math.max(0, Depth - 1);

				break;
		}
	}

	return Mask;
}

/**
 * Every separator in the tail that a reader would take as an item boundary.
 * Longest match wins at each position, so `, and ` is never read as `, ` plus
 * a stray `and`.
 */
function Boundaries(Text: string, Mask: boolean[]): Boundary[] {
	const Forms: { Text: string; Connector: string; Comma: boolean }[] = [
		{ Text: ", and ", Connector: "and ", Comma: true },
		{ Text: ", but ", Connector: "but ", Comma: true },
		{ Text: ", or ", Connector: "or ", Comma: true },
		{ Text: ", ", Connector: "", Comma: true },
		{ Text: "; ", Connector: "", Comma: false },
		{ Text: " and ", Connector: "and ", Comma: false },
		{ Text: " or ", Connector: "or ", Comma: false },
		{ Text: " but ", Connector: "but ", Comma: false },
	];

	const Found: Boundary[] = [];

	for (let Index = 0; Index < Text.length; Index += 1) {
		if (Mask[Index] === true) {
			continue;
		}

		const Form = Forms.find(({ Text: Form }) => Text.startsWith(Form, Index));

		if (Form === undefined) {
			continue;
		}

		Found.push({
			At: Index,
			Length: Form.Text.length,
			Connector: Form.Connector,
			Comma: Form.Comma,
		});

		Index += Form.Text.length - 1;
	}

	return Found;
}

/** The last top-level colon that has a tail worth splitting. */
function SplitPoint(Text: string, Mask: boolean[]): number | undefined {
	for (let Index = Text.length - 1; Index >= 0; Index -= 1) {
		if (Text[Index] !== ":" || Mask[Index] === true) {
			continue;
		}

		// A `:` at the end of a paragraph introduces the next block (a code
		// fence, a diagram, a list): there is no tail to split.
		const Tail = Text.slice(Index + 1);

		if (Tail.trim().length < MinTail) {
			continue;
		}

		if (Boundaries(Tail, Protected(Tail)).length === 0) {
			continue;
		}

		return Index;
	}

	return undefined;
}

/** Re-wraps one item so no line exceeds `Width`, indenting continuations. */
function Wrap(Item: string, Prefix: string, Indent: string): string[] {
	const Lines: string[] = [];

	for (const Source of Item.split("\n")) {
		let Current = Lines.length === 0 ? `${Prefix}${Source}` : `${Indent}${Source}`;

		if (Current.length <= Width) {
			Lines.push(Current);

			continue;
		}

		let Line = Current;

		while (Line.length > Width) {
			const Break = Line.lastIndexOf(" ", Width);

			if (Break <= Indent.length) {
				break;
			}

			Lines.push(Line.slice(0, Break));
			Line = `${Indent}${Line.slice(Break + 1)}`;
		}

		Lines.push(Line);
	}

	return Lines;
}

/** Splits one paragraph, or returns `undefined` when it is not an enumeration. */
function Split(Paragraph: string): string[] | undefined {
	const Mask = Protected(Paragraph);
	const Colon = SplitPoint(Paragraph, Mask);

	if (Colon === undefined) {
		return undefined;
	}

	const Intro = Paragraph.slice(0, Colon + 1);
	const Tail = Paragraph.slice(Colon + 1).trimStart();
	const Cuts = Boundaries(Tail, Protected(Tail));

	if (Cuts.length === 0) {
		return undefined;
	}

	const Items: string[] = [];

	let Start = 0;

	for (const Cut of Cuts) {
		const Item = Tail.slice(Start, Cut.At).trim();

		if (Item !== "") {
			Items.push(Item);
		}

		Start = Cut.At + Cut.Length;

		// The connector belongs to the item it introduces: `, and X` is the
		// item `and X`, which is how a reader hears it.
		if (Cut.Connector !== "") {
			Start = Cut.At + Cut.Length - Cut.Connector.length;
		}
	}

	const Last = Tail.slice(Start).trim();

	if (Last !== "") {
		Items.push(Last);
	}

	if (Items.length < 2) {
		return undefined;
	}

	// A short intro keeps its first clause: "Precedence rule: where it says X,
	// the env var wins" lists the precedence levels, not the clause that names
	// them. Only a bare comma can carry a clause into the intro, and only when
	// the clause is not the whole enumeration.
	const IntroWords = Intro.split(/\s+/).filter(Boolean).length;

	const Absorb =
		IntroWords <= MaxIntroWords && Cuts[0]!.Comma && Items.length >= 3 ? Items.shift() : undefined;

	const Head =
		Absorb === undefined ? Intro.trimEnd() : `${Intro.trimEnd()} ${Absorb.trimEnd()},`;

	return [Head, "", ...Items.flatMap((Item) => Wrap(Item.replace(/[,;]$/, ""), "- ", "  "))];
}

/** True when a paragraph is plain prose this transform may re-break. */
function Prose(Block: string): boolean {
	const First = Block.trimStart();

	return !/^(#|\||>|<|-|\*|\d+\.|```|~~~|\t)/.test(First);
}

/**
 * Rewrites every enumerated run-on paragraph in a docs file. Fenced code,
 * frontmatter, tables, headings and existing lists pass through untouched.
 */
export default (Markdown: string): string => {
	const Lines = Markdown.split("\n");
	const Out: string[] = [];

	let Fence: string | undefined;
	let Block: string[] = [];

	const Flush = (): void => {
		if (Block.length === 0) {
			return;
		}

		const Paragraph = Block.join("\n");

		const Split_ = Prose(Paragraph) ? Split(Paragraph) : undefined;

		Out.push(...(Split_ ?? Block));
		Block = [];
	};

	for (const Line of Lines) {
		const Trimmed = Line.trimStart();

		const Opens = /^(```|~~~)/.exec(Trimmed)?.[0];

		switch (true) {
			case Opens !== undefined && Fence === undefined:
				Flush();

				Fence = Opens;
				Out.push(Line);

				break;
			case Opens !== undefined && Fence === Opens:
				Fence = undefined;
				Out.push(Line);

				break;
			case Fence !== undefined:
				Out.push(Line);

				break;
			case Line.trim() === "":
				Flush();
				Out.push(Line);

				break;
			case /^(#|\||>|<|-|\*|\d+\.)/.test(Trimmed):
				// A heading, table row, quote, HTML block or list line ends any
				// paragraph in progress and is never itself re-broken.
				Flush();
				Out.push(Line);

				break;
			default:
				Block.push(Line);
		}
	}

	Flush();

	return Out.join("\n");
};
