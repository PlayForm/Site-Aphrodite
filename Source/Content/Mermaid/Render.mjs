// Render.mjs - the diagram pipeline's build-time renderer.
//
// Renders every Mermaid source in this directory (<Id>.mmd) into a vendored
// SVG (<Id>.svg, committed next to the source), so the site ships pre-rendered,
// offline diagrams with NO runtime Mermaid. Run with:
//
//     pnpm run Diagrams   (in Site/)
//
// The renderer is headless but REAL: Mermaid's layout depends on actual text
// measurement, so the sources are rendered in a Chromium browser (Puppeteer
// driving the system's Brave install by default, or the bundled Chrome; set
// APHRODITE_BROWSER to override the executable path). The local Mermaid ESM
// build is loaded into the page from node_modules via a file:// import - no
// network. Mermaid resolves from Site/node_modules or, in the pnpm workspace,
// from the repository root's node_modules.
//
// The theme mirrors the zine design: the near-black #111014 panels, the bone
// #DEDBD2 ink, the oxblood #7A0A1E borders, the #3D040D veins and the JetBrains
// Mono face - dark on transparent, zero radius, 2px strokes.
//
// Qualification law: a diagram may only encode what its page's docs already
// state (the may / only / never qualifications the docs themselves declare).
// The renderer adds no semantics - it draws the source. DSH_DIAGRAMS="id1,id2"
// renders only those sources.
//
// The pipeline laws (from the reference README, they hold here):
// - the wrap budget - Mermaid word-wraps every label; a label must survive
//   wrapping with its spaces (the label-presence law below);
// - the quoted label forms - `["..."]` / `{"..."}` are the safe carriers;
// - the `<>`/quote limits - `<`, `>` and quotes inside labels must be
//   entity-escaped (`&lt;`, `&gt;`, `&quot;`);
// - the space law - the joining spaces between wrapped words are rewritten to
//   no-break spaces at render time (the .mmd sources stay plain ASCII);
// - the containment law - every label must sit fully inside the viewBox.

import { readdir, readFile, writeFile, unlink, rm, stat } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import puppeteer from "puppeteer";

const Here = dirname(fileURLToPath(import.meta.url));

const BrowserPath =
	process.env["APHRODITE_BROWSER"] ??
	process.env["DSH_BROWSER"] ??
	"/Applications/Brave Browser.app/Contents/MacOS/Brave Browser";

// Mermaid lives in Site/node_modules when the Site is installed standalone, or
// in the workspace root's node_modules when the repository installs as a whole.
// Walk up from here until the ESM build is found.
async function MermaidUrl() {
	let Dir = Here;
	while (true) {
		const Candidate = join(Dir, "node_modules/mermaid/dist/mermaid.esm.min.mjs");
		try {
			await stat(Candidate);
			return pathToFileURL(Candidate).href;
		} catch {
			const Parent = dirname(Dir);
			if (Parent === Dir) {
				throw new Error("mermaid.esm.min.mjs not found - run `pnpm install` first.");
			}
			Dir = Parent;
		}
	}
}

const PageHtml = `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<style>
			body { margin: 0; background: transparent; }
			#stage { display: inline-block; }
		</style>
	</head>
	<body>
		<div id="stage"></div>
		<script type="module">
			import mermaid from "__MERMAID_URL__";

			// THE SPACE LAW. With htmlLabels:false, Mermaid word-wraps every
			// label into per-word <tspan> runs and writes each word after the
			// first as " " + word, so the words stay separated ONLY through
			// those leading spaces. But the SVG whitespace rules treat every
			// <tspan> as its own chunk: the leading (and trailing) space of a
			// chunk is collapsed away when the text renders. The joining
			// spaces therefore vanish from the rendered output - labels read
			// glued together - AND from Mermaid's own width measurement
			// (getComputedTextLength collapses the same way), so every label
			// box is sized too narrow and edge-adjacent labels spill past the
			// viewBox, clipping their first characters.
			//
			// Fix: rewrite the joining space to a no-break space (U+00A0) at
			// the moment Mermaid writes tspan text. NBSP is not collapsible
			// whitespace, so it survives chunk boundaries in every SVG
			// consumer, it measures at full space width (layout stays in sync
			// with what renders), and it reads as a space when extracted or
			// copied. Applied only to Mermaid's leaf label tspans that begin
			// with a space - the .mmd sources stay plain ASCII.
			const NoBreakSpace = "\\u00A0";
			const TextContent = Object.getOwnPropertyDescriptor(
				Node.prototype,
				"textContent",
			);
			Object.defineProperty(Node.prototype, "textContent", {
				configurable: true,
				get() {
					return TextContent.get.call(this);
				},
				set(Value) {
					if (
						typeof Value === "string" &&
						Value.startsWith(" ") &&
						this.namespaceURI === "http://www.w3.org/2000/svg" &&
						this.localName === "tspan"
					) {
						Value = NoBreakSpace + Value.slice(1);
					}
					TextContent.set.call(this, Value);
				},
			});

			// The same law for the appendChild path: this Mermaid version
			// builds label text as Text nodes (createTextNode) and appends
			// them into the tspans, never touching tspan.textContent - so
			// the setter above never fires. Intercept the insertion: a Text
			// child whose data starts with a space, appended into an SVG
			// tspan, gets the same NBSP rewrite.
			const AppendChild = Node.prototype.appendChild;
			Node.prototype.appendChild = function (Child) {
				if (
					Child instanceof Text &&
					typeof Child.data === "string" &&
					Child.data.startsWith(" ") &&
					this.namespaceURI === "http://www.w3.org/2000/svg" &&
					this.localName === "tspan"
				) {
					Child.data = NoBreakSpace + Child.data.slice(1);
				}
				return AppendChild.call(this, Child);
			};

			// The same law for the innerHTML path: if Mermaid writes the
			// tspan markup wholesale (innerHTML on the <text> element), the
			// parsed tspans never pass through either hook above. Intercept
			// the markup: a chunk-opening space right after a tspan start tag
			// becomes the NBSP before the parser ever sees it.
			const InnerHtml = Object.getOwnPropertyDescriptor(
				Element.prototype,
				"innerHTML",
			);
			Object.defineProperty(Element.prototype, "innerHTML", {
				configurable: true,
				get() {
					return InnerHtml.get.call(this);
				},
				set(Value) {
					if (
						typeof Value === "string" &&
						this.namespaceURI === "http://www.w3.org/2000/svg" &&
						this.localName === "text"
					) {
						Value = Value.replace(/(<tspan\b[^>]*>) /g, "$1" + NoBreakSpace);
					}
					InnerHtml.set.call(this, Value);
				},
			});

			mermaid.initialize({
				startOnLoad: false,
				securityLevel: "strict",
				// Plain SVG <text> labels (not HTML-in-foreignObject): every
				// context renders them - inline HTML, <img>, strict parsers.
				// With htmlLabels the labels live inside <foreignObject> divs,
				// which many SVG consumers drop or fail to render. Both the
				// top-level and the flowchart key must be false: the flowchart
				// renderer reads the top-level flag, the CSS builder the
				// flowchart one.
				htmlLabels: false,
				theme: "base",
				themeVariables: {
					fontFamily: "JetBrains Mono, ui-monospace, monospace",
					// 13px is the renderer floor: at 16px the htmlLabels:false
					// flowchart word-breaks and drops spaces, failing the
					// MISSING TEXT integrity check below. FLAG: the only
					// sub-16px text on the site lives in these generated SVGs.
					fontSize: "13px",
					// The zine tokens: near-black panels on transparent, bone
					// ink, oxblood borders and veins.
					primaryColor: "#111014",
					primaryTextColor: "#dedbd2",
					primaryBorderColor: "#7a0a1e",
					lineColor: "#3d040d",
					textColor: "#dedbd2",
					mainBkg: "#111014",
					nodeBorder: "#7a0a1e",
					clusterBkg: "transparent",
					clusterBorder: "#7a0a1e",
					edgeLabelBackground: "#111014",
					// The sequence-diagram accents: the amber #E5A93B for notes,
					// the teal #20807B for activations.
					noteBkgColor: "#e5a93b",
					noteTextColor: "#111014",
					noteBorderColor: "#7a0a1e",
					activationBkgColor: "#20807b",
					activationBorderColor: "#7a0a1e",
					actorBkg: "#111014",
					actorTextColor: "#dedbd2",
					actorBorder: "#7a0a1e",
					actorLineColor: "#3d040d",
					signalColor: "#dedbd2",
					signalTextColor: "#dedbd2",
					labelBoxBkgColor: "#111014",
					labelBoxBorderColor: "#7a0a1e",
					labelTextColor: "#dedbd2",
					loopTextColor: "#dedbd2",
				},
				// Zero-radius, 2px strokes on every node shape - the zine law.
				themeCSS: ".node rect,.node polygon,.node circle,.node path { stroke-width: 2px; rx: 0; ry: 0; } svg { background-color: transparent; } .edgeLabel rect { fill: #111014; stroke: none; } .arrowheadPath { fill: #dedbd2; }",
				// (kept false in sync with the top-level flag - see above)
				// The rhythm scale, one consistent proportional raise from the
				// defaults: nodeSpacing 70 and rankSpacing 84 between the
				// elements and the layers (defaults 50/50), diagramPadding 24
				// around the whole graph (default 8), and wrappingWidth 260 so
				// a single long token (a tool name, an env var) is never split
				// mid-token by the auto-wrap.
				flowchart: {
					htmlLabels: false,
					curve: "basis",
					wrappingWidth: 260,
					nodeSpacing: 70,
					rankSpacing: 84,
					diagramPadding: 24,
				},
			});
			window.__render = async (Id, Text) => {
				const Stage = document.getElementById("stage");
				Stage.innerHTML = "";
				const { svg } = await mermaid.render(\`aphrodite-diagram-\${Id}\`, Text);
				// Inject the render so the labels can be measured AS LAID OUT:
				// the containment law needs real geometry, not string math.
				Stage.innerHTML = svg;
				const Svg = Stage.querySelector("svg");
				if (!Svg) throw new Error("mermaid rendered no <svg>");
				// THE ZERO-RADIUS LAW: every node shape renders square-cornered.
				for (const Shape of Svg.querySelectorAll(".node rect, .node polygon, .node path, .basic.label-container")) {
					Shape.setAttribute("rx", "0");
					Shape.setAttribute("ry", "0");
				}
				// THE 2PX LAW: the oxblood borders carry their full weight.
				for (const Shape of Svg.querySelectorAll(".node rect, .node polygon, .node path, .node circle")) {
					Shape.style.strokeWidth = "2px";
				}
				const View = Svg.viewBox.baseVal;
				const Boxes = [...Svg.querySelectorAll("text")]
					.map((T) => T.getBBox())
					.filter((B) => B.width > 0 || B.height > 0);
				// The layout reserves the measured label widths, so with the
				// space law in place every label fits inside the viewBox. If a
				// label still pokes out (measurement drift), grow the viewBox
				// to cover every label plus the internal padding margin - a
				// label's first or last character must never be cropped by the
				// viewport. The pad is part of the rhythm scale: 16 units of
				// breathing room inside the viewBox on every side.
				const Pad = 16;
				const MinX = Math.min(View.x, ...Boxes.map((B) => B.x));
				const MinY = Math.min(View.y, ...Boxes.map((B) => B.y));
				const MaxX = Math.max(View.x + View.width, ...Boxes.map((B) => B.x + B.width));
				const MaxY = Math.max(View.y + View.height, ...Boxes.map((B) => B.y + B.height));
				if (
					MinX < View.x - 0.01 ||
					MinY < View.y - 0.01 ||
					MaxX > View.x + View.width + 0.01 ||
					MaxY > View.y + View.height + 0.01
				) {
					Svg.setAttribute(
						"viewBox",
						\`\${MinX - Pad} \${MinY - Pad} \${MaxX - MinX + 2 * Pad} \${MaxY - MinY + 2 * Pad}\`,
					);
				}
				// The containment law, enforced on the FINAL geometry: every
				// label's bounding box must sit fully inside the viewBox.
				const Final = Svg.viewBox.baseVal;
				for (const T of Svg.querySelectorAll("text")) {
					const B = T.getBBox();
					if (B.width === 0 && B.height === 0) continue;
					const Outside = Math.max(
						Final.x - B.x,
						B.x + B.width - (Final.x + Final.width),
						Final.y - B.y,
						B.y + B.height - (Final.y + Final.height),
					);
					if (Outside > 0.5) {
						throw new Error(
							\`label "\${(T.textContent ?? "").trim()}" sits \${Outside.toFixed(2)}px outside the viewBox\`,
						);
					}
				}
				const Out = new XMLSerializer().serializeToString(Svg);
				Stage.innerHTML = "";
				// Mermaid's HTML labels emit void \`<br>\` tags, which are invalid
				// XML (and break strict SVG parsers). Self-close them.
				let Fixed = Out.replace(/<br\\s*>/g, "<br/>");
				// THE MARKER SUBSTITUTION. The strict sanitizer displays every
				// escape form literally (&lt;, &#60;, even a raw &lt; breaks the
				// flowchart parser), so a source writes the marker's angle
				// brackets as @@@ - opening before CCR:, closing after - and
				// the renderer rewrites them to the real brackets here. The
				// .mmd stays plain ASCII and the label-presence law applies
				// the same rewrite (see the Marker Substitution below).
				Fixed = Fixed
					.replace(/@@@CCR:/g, "&lt;&lt;&lt;CCR:")
					.replace(/size@@@/g, "size&gt;&gt;&gt;");
				// Mermaid caps the diagram at its natural pixel size with an
				// inline \`style="max-width: ...px;"\`. That cap would keep the
				// rendered diagram from spanning its container's width, so it
				// is dropped here: the vendored SVG carries width="100%" plus
				// the viewBox, and the site's CSS makes it a fluid full-width
				// band at every viewport size.
				return Fixed.replace(/(<svg\\b[^>]*?)\\s+style="max-width:[^"]*"/, "$1");
			};
			window.__ready = true;
		</script>
	</body>
</html>`;

const Sources = (await readdir(Here)).filter((Name) => Name.endsWith(".mmd"));
if (Sources.length === 0) {
	console.error("No .mmd sources found.");
	process.exit(1);
}

// The optional subset filter: APHRODITE_DIAGRAMS="id1,id2" renders only those
// sources (a full run re-renders every diagram; a filtered run touches only
// the named ones, so unchanged vendored SVGs stay byte-identical).
const Filter = process.env["APHRODITE_DIAGRAMS"]
	? new Set(process.env["APHRODITE_DIAGRAMS"].split(",").map((Name) => Name.trim()))
	: null;
const Selected = Filter
	? Sources.filter((Name) => Filter.has(Name.replace(/\.mmd$/, "")))
	: Sources;
if (Filter && Selected.length === 0) {
	console.error(`No .mmd source matches APHRODITE_DIAGRAMS="${process.env["APHRODITE_DIAGRAMS"]}".`);
	process.exit(1);
}

// The label-presence law, space-exact: every label in a source must appear
// in the rendered SVG's text content WITH its separators. Mermaid renders
// labels as word-wrapped <tspan> runs; the joining spaces live in the runs
// (as U+00A0 - see the Space Law in the page), so the check normalizes those
// back to plain spaces and compares the single-space form. A line wrap is
// allowed only as an actual line break (wrapped lines are joined with a
// space, never glued); a label that appears only in the whitespace-free form
// has had its spaces dropped and fails the pipeline. A render that loses
// text or spaces must fail, never ship.
const Unescape = (Text) =>
	Text.replace(
		/&gt;|&lt;|&amp;|&quot;|&apos;|&#39;|&nbsp;|&#160;|#124;/g,
		(Entity) =>
			({
				"&gt;": ">",
				"&lt;": "<",
				"&amp;": "&",
				"&quot;": '"',
				"&apos;": "'",
				"&#39;": "'",
				// The Mermaid pipe entity (#124;) decodes to a literal pipe in
				// the rendered label - the marker format needs it.
				"#124;": "|",
			})[Entity] ?? " ",
	);
// The comparison form: entities decoded, no-break spaces read as spaces,
// all runs of whitespace collapsed to ONE space. Collapsing to a single
// space keeps the separators visible; only line breaks are free.
const Normalize = (Text) => Unescape(Text).replace(/\s+/g, " ").trim();
// The rendered text, line by line: one entry per Mermaid wrap line
// (text-outer-tspan), built from that line's word runs (text-inner-tspan).
// The word runs are nested INSIDE their outer tspan (not siblings of it),
// so a flat `class="text-(outer|inner)-tspan">...<\/tspan>` scan cannot
// see either tag - the outer opener would never match (its child is a
// tag, not text, so wrap lines glue together) and the inner opener would
// never close. Walk BOTH tag kinds by position instead: an outer opening
// starts a new line, the inner runs that follow inside it supply its
// words. Empty placeholder labels (unlabeled edges) contribute nothing.
const SvgLines = (Svg) => {
	const Lines = [];
	for (const TextMatch of Svg.matchAll(/<text[\s>][^>]*>([\s\S]*?)<\/text>/g)) {
		const Tokens = [];
		for (const Match of TextMatch[1].matchAll(
			/<tspan[^>]*class="text-inner-tspan"[^>]*>([^<]*)<\/tspan>/g,
		)) {
			Tokens.push({ At: Match.index, Outer: false, Text: Match[1] });
		}
		for (const Match of TextMatch[1].matchAll(
			// The class may carry extra tokens (mermaid emits
			// "text-outer-tspan row"), so the match stops at the closing
			// quote, not at the class value's end.
			/<tspan[^>]*class="text-outer-tspan[^"]*"[^>]*>([^<]*)/g,
		)) {
			// Direct text after an outer opener only exists on plain
			// (non-nested) labels; nested labels capture an empty string
			// here because their first word is an inner tspan tag.
			Tokens.push({ At: Match.index, Outer: true, Text: Match[1] });
		}
		Tokens.sort((A, B) => A.At - B.At);
		let Line = "";
		for (const Token of Tokens) {
			if (Token.Outer) {
				if (Line) Lines.push(Line);
				Line = Token.Text.trim() === "" ? "" : Token.Text;
			} else {
				Line += Token.Text;
			}
		}
		if (Line) Lines.push(Line);
	}
	return Lines;
};
const SourceLabels = (Text) => {
	const Labels = [];
	for (const Match of Text.matchAll(
		/\[\s*"((?:[^"\\]|\\.)*)"\s*\]|\{\s*"((?:[^"\\]|\\.)*)"\s*\}/g,
	)) {
		Labels.push(Match[1] ?? Match[2]);
	}
	for (const Match of Text.matchAll(/(?:--|-\.-)\s+"((?:[^"\\]|\\.)*)"\s+(?:-->|\.->)/g)) {
		Labels.push(Match[1]);
	}
	for (const Match of Text.matchAll(/--\s*\|\s*"((?:[^"\\]|\\.)*)"\s*\|\s*-->/g)) {
		Labels.push(Match[1]);
	}
	return Labels;
};
const SvgHasLabels = (Svg, Labels) => {
	const Lines = SvgLines(Svg);
	// The space-exact form: rendered lines joined with single spaces. A
	// label whose words got glued together (spaces dropped at the wrap) can
	// never match here.
	const Spaced = Normalize(Lines.join(" "));
	// The marker substitution, on the comparison side: the source's @@@
	// brackets read as the real angle brackets, matching what the renderer
	// wrote (see the Marker Substitution in the page).
	const MarkerRewrite = (Text) =>
		Text.replace(/@@@CCR:/g, "<<<CCR:").replace(/size@@@/g, "size>>>");
	for (const Label of Labels) {
		for (const Line of Label.split(/<br\s*\/?>/)) {
			const Want = MarkerRewrite(Normalize(Line));
			if (!Want) continue;
			if (Spaced.includes(Want)) continue;
			// Present only in the whitespace-free form? Then the spaces were
			// dropped - the exact defect this law forbids - so report it as
			// such rather than as missing text.
			const Squashed = Want.replace(/\s+/g, "");
			if (Squashed && Spaced.replace(/\s+/g, "").includes(Squashed)) {
				return `spaces dropped in "${Want}"`;
			}
			return `"${Want}" not in the SVG`;
		}
	}
	return null;
};

const HostPath = join(tmpdir(), "aphrodite-diagram-render.html");

const Browser = await puppeteer.launch({
	headless: true,
	executablePath: BrowserPath,
	args: ["--no-sandbox", "--disable-gpu", "--allow-file-access-from-files"],
});
try {
	const Page = await Browser.newPage();
	Page.on("pageerror", (Error) => console.error(`page error: ${Error.message}`));
	Page.on("console", (Message) => {
		if (Message.type() === "error") console.error(`page console: ${Message.text()}`);
	});
	await Page.setViewport({ width: 1600, height: 1200 });
	// The page must be served from a file:// URL: a module script on an
	// about:blank origin (setContent) is not allowed to import local files.
	const Html = PageHtml.replace("__MERMAID_URL__", await MermaidUrl());
	await writeFile(HostPath, Html, "utf8");
	await Page.goto(pathToFileURL(HostPath).href, { waitUntil: "load" });
	await Page.waitForFunction("window.__ready === true", { timeout: 30000 });

	let Failed = 0;
	for (const Source of Selected) {
		const Id = Source.replace(/\.mmd$/, "");
		const SvgPath = join(Here, `${Id}.svg`);
		try {
			const Text = await readFile(join(Here, Source), "utf8");
			const Svg = await Page.evaluate(
				(DiagramId, DiagramText) => window.__render(DiagramId, DiagramText),
				Id,
				Text,
			);
			// Drop any stale artifact, then write the vendored SVG.
			await unlink(SvgPath).catch(() => {});
			await writeFile(SvgPath, `${Svg.trim()}\n`, "utf8");
			// The label-presence law, enforced at render time.
			const Missing = SvgHasLabels(Svg, SourceLabels(Text));
			if (Missing !== null) {
				Failed += 1;
				console.error(`MISSING TEXT ${Id}: ${Missing}`);
				await writeFile(`/tmp/debug-${Id}.svg`, Svg, "utf8");
				await unlink(SvgPath).catch(() => {});
				continue;
			}
			console.log(`rendered ${Id}.svg (${Svg.length} bytes) - all labels present`);
		} catch (Error) {
			Failed += 1;
			console.error(`FAILED ${Id}: ${Error.message}`);
			// A failed source must not leave a stale SVG claiming implementation.
			await unlink(SvgPath).catch(() => {});
		}
	}
	if (Failed > 0) {
		console.error(`${Failed} diagram(s) failed - fix the sources and re-run.`);
		process.exitCode = 1;
	} else {
		console.log(`${Sources.length} diagram(s) rendered.`);
	}
} finally {
	await Browser.close();
	await rm(HostPath, { force: true }).catch(() => {});
}
