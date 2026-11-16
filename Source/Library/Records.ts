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
 * THE REFERENCE RECORDS - one shape per generated roster
 *
 * These four are written by `Scripts/Prepare.ts` into
 * `Source/Generated/Facts/`, never by hand: a page that documents the shipped
 * surface renders one of these arrays, so the list of tools, hooks, config
 * keys and crates has exactly one source and cannot disagree with itself.
 * ---------------------------------------------------------------------- */

/** One argument of a tool, as the schema declares it. */
export interface ToolParameter {
	/** The argument name, e.g. `content`. */
	Name: string;
	/** The JSON-schema gloss: base type plus enum / pattern / bounds. */
	Type: string;
	/** Whether the schema lists it as required. */
	Required: boolean;
	/** The schema's own sentence for the argument. */
	Description: string;
}

/** One tool the plugin registers, with the schema the agent actually sees. */
export interface ToolRecord {
	/** The registered name, e.g. `aphrodite_retrieve`. */
	Name: string;
	/** The description's first sentence - what the deferred catalog shows. */
	Summary: string;
	/** The full description, byte-exact from `schemas.rs`. */
	Description: string;
	/** Every argument, in declaration order. */
	Parameters: ToolParameter[];
}

/** One hook the plugin registers, in the order the manifest declares it. */
export interface HookRecord {
	/** The hook name, e.g. `pre_llm_call`. */
	Name: string;
	/** Its ordinal in the manifest, two digits, e.g. `02`. */
	N: string;
}

/** One environment variable, with the surface that reads it. */
export interface EnvVarRecord {
	/** The variable name, e.g. `APHRODITE_FLOW_BUDGET_CHARS`. */
	Variable: string;
	/** The section of `docs/config/env-vars.md` that declares it. */
	Surface: string;
	/** The precedence rule, when the doc states one. */
	Precedence?: string;
	/** The value with no override. */
	Default?: string;
	/** What it gates, in one sentence. */
	Effect: string;
}

/** One crate the workspace publishes, or the vendored fork it links. */
export interface CrateRecord {
	/** The package name, e.g. `aphrodite-hermes`. */
	Name: string;
	/** The version in its own `Cargo.toml`. */
	Version: string;
	/** Its one-line `description`. */
	Description: string;
	/** The manifest path inside the module. */
	Path: string;
	/** True for the vendored fork, which ships as a dependency rather than a target. */
	Vendored: boolean;
}

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
 * The scenario's own evidence. Five shapes cover every case on the page, and
 * a scenario picks one per panel - never a sixth shape:
 *
 * - `rows`     - one bordered line per item, term left, reading right, optional chip.
 * - `cards`    - a small plate per item, title over body, optional footer note.
 * - `lanes`    - two panes side by side, each a title over mono lines, optional marker.
 * - `table`    - an aligned comparison, one column per setting, one row per decision.
 * - `sequence` - an ordered processing sequence: ordinal, title, rule.
 *
 * A panel is a UNION of five records rather than one wide record with five
 * optional payloads, so "one shape per panel" is a fact the compiler enforces:
 * a `rows` panel cannot carry `Lanes`, and a `table` cannot be rendered from a
 * `cards` payload. `Kind` is the discriminant; every panel literal written
 * before this union existed still type-checks, because it names its own `Kind`.
 */
export type ExamplePanel = RowsPanel | CardsPanel | LanesPanel | TablePanel | SequencePanel;

/** One term -> reading pair of a `rows` panel, with its optional verdict chip. */
export interface ExamplePanelRow {
	/** The term: the stable key a reader scans down. */
	Left: string;
	/** The reading: what that key means in this scenario. */
	Right: string;
	/** An optional verdict chip, printed inside the reading's own cell. */
	Tag?: string;
	/** The chip's tone; `canary` when unset. */
	TagTone?: ExampleTagTone;
}

/** `rows` - one bordered line per item, term left, reading right. */
export interface RowsPanel {
	Kind: "rows";
	/** The panel's kicker, e.g. "THE FOUR DOORS". */
	Label: string;
	/**
	 * The pairs. Rendered as a real `<dl>` with one shared track for the terms,
	 * so the readings line up in a column a reader can scan - which a wrapping
	 * `justify-between` row cannot do, because every reading starts wherever
	 * its own term happens to end.
	 */
	Rows?: ExamplePanelRow[];
}

/** `cards` - a plate per item, title over body, optional footer note. */
export interface CardsPanel {
	Kind: "cards";
	/** The panel's kicker. */
	Label: string;
	/** The plates. */
	Cards?: { Title: string; Body: string; Note?: string }[];
}

/** `lanes` - a pane per item, side by side, optional marker under the lines. */
export interface LanesPanel {
	Kind: "lanes";
	/** The panel's kicker. */
	Label: string;
	/** The panes. */
	Lanes?: { Title: string; Lines: string[]; Marker?: string }[];
}

/**
 * `table` - an aligned comparison: the same question answered once per column.
 *
 * This is the shape the pages kept hand-rolling inline, because none of the
 * first three could express it: a setting-by-decision matrix is not a bordered
 * row, a card or a lane pair. It renders as a real `<table>`, so the columns
 * are columns to a screen reader too.
 */
export interface TablePanel {
	Kind: "table";
	/** The panel's kicker, above the table. */
	Label: string;
	/**
	 * The table's own accessible name, printed as its `<caption>`: the question
	 * the comparison answers. Required rather than derived from `Label`, because
	 * a caption that only repeats the kicker names nothing - and a table with no
	 * caption is a grid of cells with nothing saying what it compares.
	 */
	Caption: string;
	/** The header row, one cell per column. The FIRST column heads the row terms. */
	Columns: string[];
	/** One entry per row, one cell per column, in `Columns` order. */
	Rows?: string[][];
}

/**
 * `sequence` - an ordered processing sequence: what happens, and in what order.
 *
 * Rendered as an `<ol>`, so the order survives with the styling off. `N` is the
 * ordinal the reader sees; the list carries no second numbering of its own.
 */
export interface SequencePanel {
	Kind: "sequence";
	/** The panel's kicker. */
	Label: string;
	/** The ordered steps. */
	Steps?: { N: string; Title: string; Rule: string }[];
}

/** An inline diagram and its caption. */
export interface ExampleDiagram {
	/** The raw SVG markup, imported with `?raw`. */
	Html: string;
	/** The caption under it, in the mono uppercase voice. */
	Caption: string;
}

/* -------------------------------------------------------------------------
 * THE OUTCOME MODEL - how an example's bytes reach the transcript
 * ---------------------------------------------------------------------- */

/**
 * How an example's bytes reach the transcript. These are four genuinely
 * different mechanisms, so each one gets its own visual in `ExampleCase`:
 * rendering one fixed sequence for all four is what made an example that
 * produces no marker still print a `THE MARKER` label over a `PREVIEW + HASH`
 * pane - a visual claim the data contradicted.
 *
 * - `compressed`  - original output -> preview line + marker (over threshold)
 * - `passthrough` - input -> byte-identical output + the reason it was skipped
 * - `injected`    - ordered text assembly into the prompt (never a tool result)
 * - `callback`    - request -> immediate reply -> later delivery at a callback URL
 *
 * A record that leaves this unset renders the single fixed sequence the
 * component shipped with, so a page that has not adopted the outcome model
 * (or a scenario that genuinely is one stream in, one preview out) renders
 * exactly as it did before.
 */
export type ExampleOutcome = "compressed" | "passthrough" | "injected" | "callback";

/**
 * Where an example's words come from. Four different claims, and the page must
 * not blur them: "anonymized" says who was protected, "illustrative" says who
 * wrote it, and they are not synonyms.
 *
 * - `Illustrative`    - authored: a faithful fragment of the shape, not a capture
 * - `Catalog-exact`   - byte-identical to the documented enriched-preview catalog
 * - `Captured`        - recorded from a real run, then anonymized
 * - `Engine-verified` - checked against a named engine version
 *
 * Printed as TEXT beside the title. A colour may reinforce the label; colour
 * alone never carries the distinction.
 */
export type ExampleProvenance = "Illustrative" | "Catalog-exact" | "Captured" | "Engine-verified";

/**
 * One ordered stage of an example whose mechanism is a sequence: the parts of a
 * callback exchange, or the sections of an injected block. Read from the
 * entry's own raw stream, so the stages cannot describe an order the output
 * does not have.
 */
export interface ExampleStage {
	/** The stage's own label, e.g. `"THE IMMEDIATE REPLY"`. */
	Label: string;
	/** The stage's lines, in the stream pane's tones. */
	Lines: ExampleOutputLine[];
}

/** The retrieval round-trip, as the store answers it. */
export interface ExampleRetrieval {
	/** The call text, e.g. `aphrodite_retrieve(hash: "f3a1c0d4...")`. */
	Call: string;
	/** The tool that was called. */
	Tool: string;
	/** The hash argument, byte-exact. */
	Hash: string;
	/** Whether the store found the content. */
	Found: boolean;
	/** Which store answered - `ccr` on every success path. */
	Source: string;
	/** The returned content, as the answer carries it. */
	Content: string;
}

/**
 * ONE worked scenario, in the one shape every scenario takes: a claim, the
 * command that starts it, the real output, the marker it produced, then the
 * scenario's own evidence. `ExampleCase` renders exactly this; a page's array
 * is an `ExampleRecord[]` and nothing else.
 *
 * The stream/preview pair is grammar law 4, so `Output` and `Preview` are
 * required: a scenario that cannot show what the agent saw is not a scenario
 * this component can render. `Marker` is NOT required - an example whose data
 * says it produced no marker must be able to say so structurally, instead of
 * carrying a sentence where a hash belongs.
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
	 * The claim: one sentence (or tight group) per entry, separated by the
	 * published reading distance (`.prose-flow`, `--space-reading`) - the PROSE
	 * BREAKDOWN, not one flowing block. Goes through `set:html`.
	 * The FIRST entry is the one-sentence takeaway the compact resting state
	 * shows; the rest are read in the expanded pane.
	 */
	Claim: string[];
	/** The one command or call that starts the scenario; fenced byte-exact. */
	Command: { Lang: string; Code: string };
	/** The real output, in the stream pane. */
	Output: ExampleOutputLine[];
	/** The compact line the model kept. */
	Preview: string;
	/**
	 * The marker the output produced (escaped), or unset when the entry's data
	 * says it produced none. A renderer must not invent a marker for an entry
	 * that has none - that is the visual claim this field's absence settles.
	 */
	Marker?: string;
	/** How the bytes reached the transcript; unset renders the legacy sequence. */
	Outcome?: ExampleOutcome;
	/** Where the words come from, printed as text beside the title. */
	Provenance?: ExampleProvenance;
	/**
	 * The ordered stages of a sequential mechanism (a callback exchange, an
	 * injected assembly), read from the entry's own raw stream.
	 */
	Stages?: ExampleStage[];
	/** The retrieval round-trip, call and answer, when the entry made one. */
	Retrieval?: ExampleRetrieval;
	/** Closing sentences after the panels - the "what it cost" half. */
	Note?: string[];
	/** The scenario's own evidence, from the closed set of five shapes. */
	Panels?: ExamplePanel[];
	/** An inline diagram and its caption. */
	Diagram?: ExampleDiagram;
	/** The citation line, e.g. `SRC: README.md:389-407 · ...`. */
	Src: string;
}
