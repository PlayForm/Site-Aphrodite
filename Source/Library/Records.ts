/**
 * Records - the two data shapes the reference pages are built from.
 *
 * A page that documents something is a DATA ARRAY plus the one component that
 * renders it. The shape of that array lives here and nowhere else, so the
 * component that renders a record and the page that fills it cannot drift
 * apart. Before this module the config page declared its own `interface Key`
 * beside `ConfigKeys`' `interface Row` - two copies of one shape, which is the
 * same defect as two copies of one value.
 *
 * The components import these types for their `Props`; a page imports the one
 * it fills. Nothing in this file renders, reads a file, or holds a value: it
 * is the shape only, so a page can be typed from it with no import of the
 * component.
 */

/* -------------------------------------------------------------------------
 * THE CONFIG KEY RECORD - one row of the aphrodite.toml reference
 * ---------------------------------------------------------------------- */

/** Which of the file's two parsers reads a key. */
export type ConfigReader = "proxy" | "dylib" | "both" | "none";

/** When a change to a key takes effect. */
export type ConfigLive = "hot" | "startup" | "load" | "unwired";

/** The resolution ladder's chain for a key (the `/config` simulation only). */
export type ConfigChain = "env-first" | "toml-first" | "toml-only";

/**
 * ONE config key. This is the single source of truth for the config table:
 * `ConfigKeys` renders it, the page's resolution ladder reads it, and the
 * `/reload` simulation reads it, so a default cannot disagree with itself.
 *
 * Both parsers read the same file, so a key only one of them reads must say
 * which; and a key whose change needs a restart must say so, because the
 * page's simulation is built from `Live`.
 */
export interface ConfigKeyRecord {
	/** The TOML key as written in the file, e.g. `tool_threshold_token`. */
	Key: string;
	/** The TOML section it lives in, e.g. `[compression]` or `[[proxies]]`. */
	Section: string;
	/** The TOML type as the reader sees it, e.g. `int (bytes)` or `"addr:port"`. */
	Type: string;
	/**
	 * The compiled default. When the shipped example ships a different value,
	 * it goes in parentheses beside it - both are true at once, and the page
	 * must not pick one silently.
	 */
	Default: string;
	/** The env override, or unset when the key has none (the table prints `-`). */
	Env?: string;
	/** Which parser reads it. */
	Reader: ConfigReader;
	/** When a change takes effect. */
	Live: ConfigLive;
	/** What the key does, in one sentence, in the page's voice. */
	Effect: string;
	/**
	 * The schema doc's own one-line gloss for the key, printed under `Effect`.
	 * It carries what the columns cannot: the hot-reload qualifier, the
	 * load-once caveat, the LOAD-BEARING warning, the "the proxy never reads
	 * it" scope note. Optional, because a key with nothing to add is better
	 * silent than padded.
	 */
	Detail?: string;
}

/**
 * A config key as the page's resolution ladder reads it: the record plus the
 * two facts the ladder needs and the table does not show. A page's array is
 * typed with this; `ConfigKeys` still accepts it, because the ladder fields are
 * additions to the record, never replacements.
 */
export interface ConfigKeyLadderRecord extends ConfigKeyRecord {
	/** The ladder's chain for this key. */
	Chain?: ConfigChain;
	/** Where the ladder reads the TOML value: a section, or the proxy entry. */
	From?: "section" | "proxy";
}

/* -------------------------------------------------------------------------
 * THE EXAMPLE RECORD - one worked scenario
 * ---------------------------------------------------------------------- */

/** A stream line's suppression tone (law 4: dim 70%, fade 40%, mute 25%). */
export type ExampleTone = "plain" | "dim" | "fade" | "mute" | "result" | "canary" | "teal";

/** The scenario plate's tape tone. */
export type ExamplePlateTone = "crimson" | "canary" | "teal";

/** A verdict chip inside a `rows` panel. */
export type ExampleTagTone = "canary" | "teal" | "newsprint";

/** One line of the real output, in the soot-black stream pane. */
export interface ExampleOutputLine {
	/** The line, byte-exact. Goes through `set:html` - escape `<` and `>`. */
	Text: string;
	/** The suppression tone; unset renders plain. */
	Tone?: ExampleTone;
}

/**
 * The scenario's own evidence. Three shapes cover every case on the page, and
 * a scenario picks one per panel - never a fourth shape:
 *
 * - `rows`  - one bordered line per item, term left, reading right, optional chip.
 * - `cards` - a small plate per item, title over body, optional footer note.
 * - `lanes` - two panes side by side, each a title over mono lines, optional marker.
 */
export interface ExamplePanel {
	Kind: "rows" | "cards" | "lanes";
	/** The panel's kicker, e.g. "THE FOUR DOORS". */
	Label: string;
	/** `rows` payload: term, reading, optional verdict chip. */
	Rows?: { Left: string; Right: string; Tag?: string; TagTone?: ExampleTagTone }[];
	/** `cards` payload: a plate per item. */
	Cards?: { Title: string; Body: string; Note?: string }[];
	/** `lanes` payload: a pane per item. */
	Lanes?: { Title: string; Lines: string[]; Marker?: string }[];
}

/** An inline diagram and its caption. */
export interface ExampleDiagram {
	/** The raw SVG markup, imported with `?raw`. */
	Html: string;
	/** The caption under it, in the mono uppercase voice. */
	Caption: string;
}

/**
 * ONE worked scenario, in the one shape every scenario takes: a claim, the
 * command that starts it, the real output, the marker it produced, then the
 * scenario's own evidence. `ExampleCase` renders exactly this; a page's array
 * is an `ExampleRecord[]` and nothing else.
 *
 * The stream/preview pair is grammar law 4, so `Output` and `Preview`/`Marker`
 * are required: a scenario that cannot show its own compression is not a
 * scenario this component can render.
 */
export interface ExampleRecord {
	/** The section anchor; the page's hero index links to it. */
	Id: string;
	/** The scenario number, e.g. `"I"`. */
	N: string;
	/** The tape label, e.g. `"THE THRESHOLD TUNING WALKTHROUGH"`. */
	Label: string;
	/** The h2. */
	Title: string;
	/** The plate's shadow tone; `crimson` by default. */
	Tone?: ExamplePlateTone;
	/** Rotation from the sm breakpoint up; mobile is always flat (law 3). */
	Rotate?: string;
	/**
	 * The claim: one sentence (or tight group) per entry, `mt-3` between them
	 * - the PROSE BREAKDOWN, not one flowing block. Goes through `set:html`.
	 */
	Claim: string[];
	/** The one command or call that starts the scenario; fenced byte-exact. */
	Command: { Lang: string; Code: string };
	/** The real output, in the stream pane. */
	Output: ExampleOutputLine[];
	/** The compact line the model kept. */
	Preview: string;
	/** The marker it produced (escaped), or the explicit "none - ..." reason. */
	Marker: string;
	/** Closing sentences after the panels - the "what it cost" half. */
	Note?: string[];
	/** The scenario's own evidence, from the closed set of three shapes. */
	Panels?: ExamplePanel[];
	/** An inline diagram and its caption. */
	Diagram?: ExampleDiagram;
	/** The citation line, e.g. `SRC: README.md:389-407 · ...`. */
	Src: string;
}
