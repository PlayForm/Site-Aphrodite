import { d as renderScript, f as createAstro, m as __exportAll, p as createComponent, t as $$Base } from "./Base_DtRxtNeh.mjs";
import { t as $$ZineDiagramNav } from "./ZineDiagramNav_mTakJVAP.mjs";
import { t as config_resolution_default } from "./config-resolution_CNua9ciR.mjs";
import { t as dual_listener_default } from "./dual-listener_zaJHb_As.mjs";
import { t as marker_format_default } from "./marker-format_Bool3VbQ.mjs";
import { t as session_lifecycle_default } from "./session-lifecycle_Cg9aKKuk.mjs";
import { t as createConsoleLogger } from "./console_ClfCadOL.mjs";
import { E as unescapeHTML, S as createHeadAndContent, _ as renderTemplate, d as Fragment, i as renderUniqueStylesheet, n as spreadAttributes, r as renderScriptElement, u as renderComponent, v as maybeRenderHead, w as addAttribute, z as generateCspDigest } from "./server_DdG-dV1Z.mjs";
import { c as isRemotePath, d as removeBase, u as prependForwardSlash } from "./path_jvl2hruy.mjs";
import { B as RenderUndefinedEntryError, K as UnknownContentCollectionError, X as AstroError } from "./errors-data_XstbcoNP.mjs";
import { escape } from "html-escaper";
import * as devalue from "devalue";
import * as z from "zod/v4";
// node_modules/@astrojs/runtime/dist/internal/core/render-scope/scope.js
/**
* The channel is a write-once immutable *conduit* shared so every compiled copy
* of this module resolves the same AsyncLocalStorage instance (the prerender
* runtime is bundled, so the build orchestrator and the bundled runtime hold
* different module instances of this file); all mutable per-render state lives
* in stores reachable only through async execution context. Never installed in
* dev or production SSR runtimes. It holds no state, so it stays installed across builds.
*/
var SCOPE_KEY = Symbol.for("astro:render-scope");
/** The installed render scope, or `undefined` when none was installed. */
function getInstalledRenderScope() {
	return globalThis[SCOPE_KEY];
}
/** The current render's collectors store, or `undefined` when not collecting. */
function getRenderCollectors() {
	return getInstalledRenderScope()?.getStore();
}
// node_modules/@astrojs/runtime/dist/internal/core/render-scope/record.js
/**
* Records that a content entry was rendered, keyed by its root-relative
* `filePath`. No-op outside of a collecting render (dev, production SSR,
* module top-level).
*/
function recordContentEntryRender(filePath) {
	if (!filePath) return;
	getRenderCollectors()?.contentEntries?.add(filePath);
}
function isCollectingStaticImages() {
	return getRenderCollectors()?.staticImages !== void 0;
}
/** Keeps repeats; `collectPrerenderMetadata()` dedupes them. */
function recordStaticImage(image) {
	getRenderCollectors()?.staticImages?.push(image);
}
// \0virtual:astro:logger
var level = "info";
// node_modules/astro/dist/assets/consts.js
var VALID_INPUT_FORMATS = [
	"jpeg",
	"jpg",
	"png",
	"apng",
	"tiff",
	"webp",
	"gif",
	"svg",
	"avif"
];
/**
* Valid formats that our base services support.
* Certain formats can be imported (namely SVGs) but will not be processed.
*/
var VALID_SUPPORTED_FORMATS = [
	"jpeg",
	"jpg",
	"png",
	"tiff",
	"webp",
	"gif",
	"svg",
	"avif"
];
var DEFAULT_OUTPUT_FORMAT = "webp";
var DEFAULT_HASH_PROPS = [
	"src",
	"width",
	"height",
	"format",
	"quality",
	"fit",
	"position",
	"background"
];
// Source/Component/DocsSidebar.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$DocsSidebar = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$DocsSidebar;
	const { Sections, CurrentId, Headings = [], Label = "Documentation sections" } = Astro.props;
	const Href = (Id) => Id === "index" ? "/docs/" : `/docs/${Id}/`;
	const Rows = (Entries) => {
		const Rows = [];
		const Seen = /* @__PURE__ */ new Set();
		for (const Entry of Entries) {
			switch (Entry.Group) {
				case void 0: break;
				default: if (!Seen.has(Entry.Group)) {
					Seen.add(Entry.Group);
					Rows.push({
						Kind: "group",
						Label: Entry.Group
					});
				}
			}
			Rows.push({
				Kind: "entry",
				Entry
			});
		}
		return Rows;
	};
	const CurrentSection = Sections.find(({ Entries }) => Entries.some((Entry) => Entry.Id === CurrentId))?.Name;
	return renderTemplate`${maybeRenderHead($$result)}<nav${addAttribute(Label, "aria-label")}> <div class="relative"> <!-- The tape stamp lives OUTSIDE the scroll container: overflow-y-auto
	     clips absolutely-positioned children that cross its top edge, and
	     z-index cannot undo a clip. The scroll applies to the entry box only. --><span class="absolute -top-3.5 left-4 z-20 -rotate-1 border border-black bg-raw-blood px-3 py-0.5 text-base font-black uppercase tracking-widest text-bone-white shadow-[2px_2px_0px_#000]">
DOC INDEX
</span> <div class="relative z-10 max-h-[calc(100vh-9rem)] overflow-y-auto border-4 border-blood-crimson bg-carbon-void p-5 zine-box-subtle"> ${Headings.length > 1 && renderTemplate`<nav${addAttribute(`${Label} · on this page`, "aria-label")} class="mb-8 border-b border-oxblood-dark pb-6"> <p class="font-mono text-base font-black uppercase tracking-widest text-stamped-canary">
ON THIS PAGE
</p> <ul class="mt-3 flex flex-col gap-1 border-l border-oxblood-dark pl-3"> ${Headings.map(({ Depth, Id, Label: Text }) => renderTemplate`<li${addAttribute(Depth === 3 ? "pl-3" : void 0, "class")}> <a${addAttribute(`#${Id}`, "href")}${addAttribute(Id, "data-toc-link")} class="block px-2 py-0.5 font-mono text-base leading-relaxed text-zinc-dust transition-colors hover:text-bone-white aria-[current=location]:bg-raw-blood aria-[current=location]:text-bone-white"> ${Text} </a> </li>`)} </ul> </nav>`} <div class="flex flex-col gap-8"> ${Sections.map(({ Name, Entries }) => renderTemplate`<div class="flex flex-col gap-2"> <p${addAttribute(`flex items-center gap-2 font-mono text-base font-black uppercase tracking-widest ${Name === CurrentSection ? "text-bone-white" : "text-zinc-dust"}`, "class")}${addAttribute(Name === CurrentSection ? "1" : void 0, "data-current-section")}> <span${addAttribute(`inline-block h-3 w-1 ${Name === CurrentSection ? "bg-stamped-canary" : "bg-blood-crimson"}`, "class")} aria-hidden="true"></span> ${Name} </p> <ul class="flex flex-col gap-1 border-l border-oxblood-dark pl-3"> ${Rows(Entries).map((Row) => Row.Kind === "group" ? renderTemplate`<li class="mt-1"> <p class="px-2 font-mono text-[13px] uppercase tracking-widest text-oxblood-dark"> ${Row.Label} </p> </li>` : renderTemplate`<li> <a${addAttribute(Href(Row.Entry.Id), "href")}${addAttribute(Row.Entry.Id === CurrentId ? "page" : void 0, "aria-current")}${addAttribute(`block py-0.5 pr-2 font-mono text-base leading-relaxed transition-colors ${Row.Entry.Group === void 0 ? "pl-2" : "pl-5"} ${Row.Entry.Id === CurrentId ? "bg-raw-blood text-bone-white" : "text-zinc-dust hover:text-bone-white"}`, "class")}> ${Row.Entry.Title} ${Row.Entry.Wip && renderTemplate`<span class="ml-2 inline-block border border-black bg-stamped-canary px-1.5 align-middle font-mono text-[13px] font-black uppercase leading-tight tracking-widest text-soot-black" title="Roadmap: partly unimplemented">
WIP
</span>`} </a> </li>`)} </ul> </div>`)} </div> </div> </div> </nav>${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/DocsSidebar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/DocsSidebar.astro", void 0);
// Source/Content/Mermaid/ccr-pipeline.svg?raw
var ccr_pipeline_default = "<svg id=\"aphrodite-diagram-ccr-pipeline\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" class=\"flowchart\" viewBox=\"-194.12986755371094 -28 3856.020492553711 436.2947692871094\" role=\"graphics-document document\" aria-roledescription=\"flowchart-v2\"><style>#aphrodite-diagram-ccr-pipeline{font-family:JetBrains Mono,ui-monospace,monospace;font-size:16px;fill:#dedbd2;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#aphrodite-diagram-ccr-pipeline .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#aphrodite-diagram-ccr-pipeline .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#aphrodite-diagram-ccr-pipeline .error-icon{fill:hsl(75, 11.1111111111%, 12.0588235294%);}#aphrodite-diagram-ccr-pipeline .error-text{fill:rgb(222.5416666667, 220.8333333334, 227.6666666667);stroke:rgb(222.5416666667, 220.8333333334, 227.6666666667);}#aphrodite-diagram-ccr-pipeline .edge-thickness-normal{stroke-width:1px;}#aphrodite-diagram-ccr-pipeline .edge-thickness-thick{stroke-width:3.5px;}#aphrodite-diagram-ccr-pipeline .edge-pattern-solid{stroke-dasharray:0;}#aphrodite-diagram-ccr-pipeline .edge-thickness-invisible{stroke-width:0;fill:none;}#aphrodite-diagram-ccr-pipeline .edge-pattern-dashed{stroke-dasharray:3;}#aphrodite-diagram-ccr-pipeline .edge-pattern-dotted{stroke-dasharray:2;}#aphrodite-diagram-ccr-pipeline .marker{fill:#3d040d;stroke:#3d040d;}#aphrodite-diagram-ccr-pipeline .marker.cross{stroke:#3d040d;}#aphrodite-diagram-ccr-pipeline svg{font-family:JetBrains Mono,ui-monospace,monospace;font-size:16px;}#aphrodite-diagram-ccr-pipeline p{margin:0;}#aphrodite-diagram-ccr-pipeline .label{font-family:JetBrains Mono,ui-monospace,monospace;color:#dedbd2;}#aphrodite-diagram-ccr-pipeline .cluster-label text{fill:rgb(222.5416666667, 220.8333333334, 227.6666666667);}#aphrodite-diagram-ccr-pipeline .cluster-label span{color:rgb(222.5416666667, 220.8333333334, 227.6666666667);}#aphrodite-diagram-ccr-pipeline .cluster-label span p{background-color:transparent;}#aphrodite-diagram-ccr-pipeline .label text,#aphrodite-diagram-ccr-pipeline span{fill:#dedbd2;color:#dedbd2;}#aphrodite-diagram-ccr-pipeline .node rect,#aphrodite-diagram-ccr-pipeline .node circle,#aphrodite-diagram-ccr-pipeline .node ellipse,#aphrodite-diagram-ccr-pipeline .node polygon,#aphrodite-diagram-ccr-pipeline .node path{fill:#111014;stroke:#7a0a1e;stroke-width:1px;}#aphrodite-diagram-ccr-pipeline .rough-node .label text,#aphrodite-diagram-ccr-pipeline .node .label text,#aphrodite-diagram-ccr-pipeline .image-shape .label,#aphrodite-diagram-ccr-pipeline .icon-shape .label{text-anchor:middle;}#aphrodite-diagram-ccr-pipeline .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#aphrodite-diagram-ccr-pipeline .rough-node .label,#aphrodite-diagram-ccr-pipeline .node .label,#aphrodite-diagram-ccr-pipeline .image-shape .label,#aphrodite-diagram-ccr-pipeline .icon-shape .label{text-align:center;}#aphrodite-diagram-ccr-pipeline .node.clickable{cursor:pointer;}#aphrodite-diagram-ccr-pipeline .root .anchor path{fill:#3d040d!important;stroke-width:0;stroke:#3d040d;}#aphrodite-diagram-ccr-pipeline .arrowheadPath{fill:#0b0b0b;}#aphrodite-diagram-ccr-pipeline .edgePaths .path{stroke:#3d040d;stroke-width:1px;}#aphrodite-diagram-ccr-pipeline .flowchart-link{stroke:#3d040d;fill:none;}#aphrodite-diagram-ccr-pipeline .edgeLabel{background-color:#111014;text-align:center;}#aphrodite-diagram-ccr-pipeline .edgeLabel p{background-color:#111014;}#aphrodite-diagram-ccr-pipeline .edgeLabel rect{opacity:0.5;background-color:#111014;fill:#111014;}#aphrodite-diagram-ccr-pipeline .labelBkg{background-color:rgba(17, 16, 20, 0.5);}#aphrodite-diagram-ccr-pipeline .cluster rect{fill:transparent;stroke:#7a0a1e;stroke-width:1px;}#aphrodite-diagram-ccr-pipeline .cluster text{fill:rgb(222.5416666667, 220.8333333334, 227.6666666667);}#aphrodite-diagram-ccr-pipeline .cluster span{color:rgb(222.5416666667, 220.8333333334, 227.6666666667);}#aphrodite-diagram-ccr-pipeline .node .collapsed-indicator{fill:#7a0a1e;stroke:none;opacity:0.6;}#aphrodite-diagram-ccr-pipeline .node .collapsed-separator{stroke:#7a0a1e;stroke-width:0.75px;}#aphrodite-diagram-ccr-pipeline div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:JetBrains Mono,ui-monospace,monospace;font-size:12px;background:hsl(75, 11.1111111111%, 12.0588235294%);border:1px solid hsl(75, 0%, 2.0588235294%);border-radius:2px;pointer-events:none;z-index:100;}#aphrodite-diagram-ccr-pipeline .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#dedbd2;}#aphrodite-diagram-ccr-pipeline rect.text{fill:none;stroke-width:0;}#aphrodite-diagram-ccr-pipeline .icon-shape,#aphrodite-diagram-ccr-pipeline .image-shape{background-color:#111014;text-align:center;}#aphrodite-diagram-ccr-pipeline .icon-shape p,#aphrodite-diagram-ccr-pipeline .image-shape p{background-color:#111014;padding:2px;}#aphrodite-diagram-ccr-pipeline .icon-shape .label rect,#aphrodite-diagram-ccr-pipeline .image-shape .label rect{opacity:0.5;background-color:#111014;fill:#111014;}#aphrodite-diagram-ccr-pipeline .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#aphrodite-diagram-ccr-pipeline .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#aphrodite-diagram-ccr-pipeline .node .neo-node{stroke:#7a0a1e;}#aphrodite-diagram-ccr-pipeline [data-look=\"neo\"].node rect,#aphrodite-diagram-ccr-pipeline [data-look=\"neo\"].cluster rect,#aphrodite-diagram-ccr-pipeline [data-look=\"neo\"].node polygon{stroke:#7a0a1e;filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#aphrodite-diagram-ccr-pipeline [data-look=\"neo\"].swimlane.cluster rect{filter:none;}#aphrodite-diagram-ccr-pipeline [data-look=\"neo\"].node path{stroke:#7a0a1e;stroke-width:1px;}#aphrodite-diagram-ccr-pipeline [data-look=\"neo\"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#aphrodite-diagram-ccr-pipeline [data-look=\"neo\"].node .neo-line path{stroke:#7a0a1e;filter:none;}#aphrodite-diagram-ccr-pipeline [data-look=\"neo\"].node circle{stroke:#7a0a1e;filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#aphrodite-diagram-ccr-pipeline [data-look=\"neo\"].node circle .state-start{fill:#000000;}#aphrodite-diagram-ccr-pipeline [data-look=\"neo\"].icon-shape .icon{fill:#7a0a1e;filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#aphrodite-diagram-ccr-pipeline [data-look=\"neo\"].icon-shape .icon-neo path{stroke:#7a0a1e;filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#aphrodite-diagram-ccr-pipeline .node rect,#aphrodite-diagram-ccr-pipeline .node polygon,#aphrodite-diagram-ccr-pipeline .node circle,#aphrodite-diagram-ccr-pipeline .node path{stroke-width:2px;rx:0;ry:0;}#aphrodite-diagram-ccr-pipeline svg{background-color:transparent;}#aphrodite-diagram-ccr-pipeline .edgeLabel rect{fill:rgb(17, 16, 20);stroke:none;}#aphrodite-diagram-ccr-pipeline .arrowheadPath{fill:rgb(222, 219, 210);}#aphrodite-diagram-ccr-pipeline :root{--mermaid-font-family:\"trebuchet ms\",verdana,arial,sans-serif;}</style><g><marker id=\"aphrodite-diagram-ccr-pipeline_flowchart-v2-pointEnd\" class=\"marker flowchart-v2\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M 0 0 L 10 5 L 0 10 z\" class=\"arrowMarkerPath\" style=\"stroke-width: 1; stroke-dasharray: 1, 0;\"/></marker><marker id=\"aphrodite-diagram-ccr-pipeline_flowchart-v2-pointStart\" class=\"marker flowchart-v2\" viewBox=\"0 0 10 10\" refX=\"4.5\" refY=\"5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M 0 5 L 10 10 L 10 0 z\" class=\"arrowMarkerPath\" style=\"stroke-width: 1; stroke-dasharray: 1, 0;\"/></marker><marker id=\"aphrodite-diagram-ccr-pipeline_flowchart-v2-pointEnd-margin\" class=\"marker flowchart-v2\" viewBox=\"0 0 11.5 14\" refX=\"11.5\" refY=\"7\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10.5\" markerHeight=\"14\" orient=\"auto\"><path d=\"M 0 0 L 11.5 7 L 0 14 z\" class=\"arrowMarkerPath\" style=\"stroke-width: 0; stroke-dasharray: 1, 0;\"/></marker><marker id=\"aphrodite-diagram-ccr-pipeline_flowchart-v2-pointStart-margin\" class=\"marker flowchart-v2\" viewBox=\"0 0 11.5 14\" refX=\"1\" refY=\"7\" markerUnits=\"userSpaceOnUse\" markerWidth=\"11.5\" markerHeight=\"14\" orient=\"auto\"><polygon points=\"0,7 11.5,14 11.5,0\" class=\"arrowMarkerPath\" style=\"stroke-width: 0; stroke-dasharray: 1, 0;\"/></marker><marker id=\"aphrodite-diagram-ccr-pipeline_flowchart-v2-circleEnd\" class=\"marker flowchart-v2\" viewBox=\"0 0 10 10\" refX=\"11\" refY=\"5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"11\" markerHeight=\"11\" orient=\"auto\"><circle cx=\"5\" cy=\"5\" r=\"5\" class=\"arrowMarkerPath\" style=\"stroke-width: 1; stroke-dasharray: 1, 0;\"/></marker><marker id=\"aphrodite-diagram-ccr-pipeline_flowchart-v2-circleStart\" class=\"marker flowchart-v2\" viewBox=\"0 0 10 10\" refX=\"-1\" refY=\"5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"11\" markerHeight=\"11\" orient=\"auto\"><circle cx=\"5\" cy=\"5\" r=\"5\" class=\"arrowMarkerPath\" style=\"stroke-width: 1; stroke-dasharray: 1, 0;\"/></marker><marker id=\"aphrodite-diagram-ccr-pipeline_flowchart-v2-circleEnd-margin\" class=\"marker flowchart-v2\" viewBox=\"0 0 10 10\" refY=\"5\" refX=\"12.25\" markerUnits=\"userSpaceOnUse\" markerWidth=\"14\" markerHeight=\"14\" orient=\"auto\"><circle cx=\"5\" cy=\"5\" r=\"5\" class=\"arrowMarkerPath\" style=\"stroke-width: 0; stroke-dasharray: 1, 0;\"/></marker><marker id=\"aphrodite-diagram-ccr-pipeline_flowchart-v2-circleStart-margin\" class=\"marker flowchart-v2\" viewBox=\"0 0 10 10\" refX=\"-2\" refY=\"5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"14\" markerHeight=\"14\" orient=\"auto\"><circle cx=\"5\" cy=\"5\" r=\"5\" class=\"arrowMarkerPath\" style=\"stroke-width: 0; stroke-dasharray: 1, 0;\"/></marker><marker id=\"aphrodite-diagram-ccr-pipeline_flowchart-v2-crossEnd\" class=\"marker cross flowchart-v2\" viewBox=\"0 0 11 11\" refX=\"12\" refY=\"5.2\" markerUnits=\"userSpaceOnUse\" markerWidth=\"11\" markerHeight=\"11\" orient=\"auto\"><path d=\"M 1,1 l 9,9 M 10,1 l -9,9\" class=\"arrowMarkerPath\" style=\"stroke-width: 2; stroke-dasharray: 1, 0;\"/></marker><marker id=\"aphrodite-diagram-ccr-pipeline_flowchart-v2-crossStart\" class=\"marker cross flowchart-v2\" viewBox=\"0 0 11 11\" refX=\"-1\" refY=\"5.2\" markerUnits=\"userSpaceOnUse\" markerWidth=\"11\" markerHeight=\"11\" orient=\"auto\"><path d=\"M 1,1 l 9,9 M 10,1 l -9,9\" class=\"arrowMarkerPath\" style=\"stroke-width: 2; stroke-dasharray: 1, 0;\"/></marker><marker id=\"aphrodite-diagram-ccr-pipeline_flowchart-v2-crossEnd-margin\" class=\"marker cross flowchart-v2\" viewBox=\"0 0 15 15\" refX=\"17.7\" refY=\"7.5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"12\" markerHeight=\"12\" orient=\"auto\"><path d=\"M 1,1 L 14,14 M 1,14 L 14,1\" class=\"arrowMarkerPath\" style=\"stroke-width: 2.5;\"/></marker><marker id=\"aphrodite-diagram-ccr-pipeline_flowchart-v2-crossStart-margin\" class=\"marker cross flowchart-v2\" viewBox=\"0 0 15 15\" refX=\"-3.5\" refY=\"7.5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"12\" markerHeight=\"12\" orient=\"auto\"><path d=\"M 1,1 L 14,14 M 1,14 L 14,1\" class=\"arrowMarkerPath\" style=\"stroke-width: 2.5; stroke-dasharray: 1, 0;\"/></marker><g class=\"root\"><g class=\"clusters\"/><g class=\"edges edgePaths\"><path d=\"M333.015625,87.56406211853027L345.9445571881345,87.56406211853027Q353.015625,87.56406211853027 353.015625,94.63512993039575L353.015625,119.62632751284156Q353.015625,126.69739532470703 360.0866928118655,126.69739532470703L369.015625,126.69739532470703\" id=\"aphrodite-diagram-ccr-pipeline-L_ANY_CLASS_0\" class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\" style=\"stroke-dasharray: 0 0 65.8050537109375 4; stroke-dashoffset: 0;;\" data-edge=\"true\" data-et=\"edge\" data-id=\"L_ANY_CLASS_0\" data-points=\"W3sieCI6MzMzLjAxNTYyNSwieSI6ODcuNTY0MDYyMTE4NTMwMjd9LHsieCI6MzUzLjAxNTYyNSwieSI6ODcuNTY0MDYyMTE4NTMwMjd9LHsieCI6MzUzLjAxNTYyNSwieSI6MTI2LjY5NzM5NTMyNDcwNzAzfSx7IngiOjM3My4wMTU2MjUsInkiOjEyNi42OTczOTUzMjQ3MDcwM31d\" data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-ccr-pipeline_flowchart-v2-pointEnd-margin)\"/><path d=\"M607.3125,133.46406173706055L643.3125,133.46406173706055\" id=\"aphrodite-diagram-ccr-pipeline-L_CLASS_THRESH_0\" class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\" style=\"stroke-dasharray: 0 0 32 4; stroke-dashoffset: 0;;\" data-edge=\"true\" data-et=\"edge\" data-id=\"L_CLASS_THRESH_0\" data-points=\"W3sieCI6NjA3LjMxMjUsInkiOjEzMy40NjQwNjE3MzcwNjA1NX0seyJ4Ijo2NDcuMzEyNSwieSI6MTMzLjQ2NDA2MTczNzA2MDU1fV0=\" data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-ccr-pipeline_flowchart-v2-pointEnd-margin)\"/><path d=\"M844.0051969587803,98.12552007039389L879.34375,98.12552007039389L892.2726821881345,98.12552007039389Q899.34375,98.12552007039389 899.34375,91.05445225852841L899.34375,49.37106704892602Q899.34375,42.29999923706055 906.4148178118655,42.29999923706055L988.25,42.29999923706055\" id=\"aphrodite-diagram-ccr-pipeline-L_THRESH_INLINE_0\" class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\" style=\"stroke-dasharray: 0 0 190.74205017089844 4; stroke-dashoffset: 0;;\" data-edge=\"true\" data-et=\"edge\" data-id=\"L_THRESH_INLINE_0\" data-points=\"W3sieCI6ODQ0LjAwNTE5Njk1ODc4MDMsInkiOjk4LjEyNTUyMDA3MDM5Mzg5fSx7IngiOjg3OS4zNDM3NSwieSI6OTguMTI1NTIwMDcwMzkzODl9LHsieCI6ODk5LjM0Mzc1LCJ5Ijo5OC4xMjU1MjAwNzAzOTM4OX0seyJ4Ijo4OTkuMzQzNzUsInkiOjQyLjI5OTk5OTIzNzA2MDU1fSx7IngiOjk5Mi4yNSwieSI6NDIuMjk5OTk5MjM3MDYwNTV9XQ==\" data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-ccr-pipeline_flowchart-v2-pointEnd-margin)\"/><path d=\"M1303.625,42.29999923706055L1339.625,42.29999923706055\" id=\"aphrodite-diagram-ccr-pipeline-L_INLINE_RAW_0\" class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\" style=\"stroke-dasharray: 0 0 32 4; stroke-dashoffset: 0;;\" data-edge=\"true\" data-et=\"edge\" data-id=\"L_INLINE_RAW_0\" data-points=\"W3sieCI6MTMwMy42MjUsInkiOjQyLjI5OTk5OTIzNzA2MDU1fSx7IngiOjEzNDMuNjI1LCJ5Ijo0Mi4yOTk5OTkyMzcwNjA1NX1d\" data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-ccr-pipeline_flowchart-v2-pointEnd-margin)\"/><path d=\"M844.0051969587803,168.80260340372723L879.34375,168.80260340372723L892.2726821881345,168.80260340372723Q899.34375,168.80260340372723 899.34375,175.8736712155927L899.34375,217.55705642519507Q899.34375,224.62812423706055 906.4148178118655,224.62812423706055L1002.703125,224.62812423706055\" id=\"aphrodite-diagram-ccr-pipeline-L_THRESH_HASH_0\" class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\" style=\"stroke-dasharray: 0 0 205.1951904296875 4; stroke-dashoffset: 0;;\" data-edge=\"true\" data-et=\"edge\" data-id=\"L_THRESH_HASH_0\" data-points=\"W3sieCI6ODQ0LjAwNTE5Njk1ODc4MDMsInkiOjE2OC44MDI2MDM0MDM3MjcyM30seyJ4Ijo4NzkuMzQzNzUsInkiOjE2OC44MDI2MDM0MDM3MjcyM30seyJ4Ijo4OTkuMzQzNzUsInkiOjE2OC44MDI2MDM0MDM3MjcyM30seyJ4Ijo4OTkuMzQzNzUsInkiOjIyNC42MjgxMjQyMzcwNjA1NX0seyJ4IjoxMDA2LjcwMzEyNSwieSI6MjI0LjYyODEyNDIzNzA2MDU1fV0=\" data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-ccr-pipeline_flowchart-v2-pointEnd-margin)\"/><path d=\"M1289.171875,224.62812423706055L1341.1354166666667,224.62812423706055\" id=\"aphrodite-diagram-ccr-pipeline-L_HASH_DEDUP_0\" class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\" style=\"stroke-dasharray: 0 0 47.9635009765625 4; stroke-dashoffset: 0;;\" data-edge=\"true\" data-et=\"edge\" data-id=\"L_HASH_DEDUP_0\" data-points=\"W3sieCI6MTI4OS4xNzE4NzUsInkiOjIyNC42MjgxMjQyMzcwNjA1NX0seyJ4IjoxMzQ1LjEzNTQxNjY2NjY2NjcsInkiOjIyNC42MjgxMjQyMzcwNjA1NX1d\" data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-ccr-pipeline_flowchart-v2-pointEnd-margin)\"/><path d=\"M1549.848941276471,187.68541590372723L1586.7916666666667,187.68541590372723L1600.4758071881345,187.68541590372723Q1607.546875,187.68541590372723 1607.546875,194.7564837155927L1607.546875,195.55705642519507Q1607.546875,202.62812423706055 1614.6179428118655,202.62812423706055L2028.640625,202.62812423706055L2139.4601821881347,202.62812423706055Q2146.53125,202.62812423706055 2146.53125,209.69919204892602L2146.53125,247.0903892499021Q2146.53125,254.16145706176758 2153.6023178118653,254.16145706176758L2162.53125,254.16145706176758\" id=\"aphrodite-diagram-ccr-pipeline-L_DEDUP_MARK_0\" class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\" style=\"stroke-dasharray: 0 0 664.501953125 4; stroke-dashoffset: 0;;\" data-edge=\"true\" data-et=\"edge\" data-id=\"L_DEDUP_MARK_0\" data-points=\"W3sieCI6MTU0OS44NDg5NDEyNzY0NzEsInkiOjE4Ny42ODU0MTU5MDM3MjcyM30seyJ4IjoxNTg2Ljc5MTY2NjY2NjY2NjcsInkiOjE4Ny42ODU0MTU5MDM3MjcyM30seyJ4IjoxNjA3LjU0Njg3NSwieSI6MTg3LjY4NTQxNTkwMzcyNzIzfSx7IngiOjE2MDcuNTQ2ODc1LCJ5IjoyMDIuNjI4MTI0MjM3MDYwNTV9LHsieCI6MjAyOC42NDA2MjUsInkiOjIwMi42MjgxMjQyMzcwNjA1NX0seyJ4IjoyMTQ2LjUzMTI1LCJ5IjoyMDIuNjI4MTI0MjM3MDYwNTV9LHsieCI6MjE0Ni41MzEyNSwieSI6MjU0LjE2MTQ1NzA2MTc2NzU4fSx7IngiOjIxNjYuNTMxMjUsInkiOjI1NC4xNjE0NTcwNjE3Njc1OH1d\" data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-ccr-pipeline_flowchart-v2-pointEnd-margin)\"/><path d=\"M1549.848941276471,261.57083257039386L1586.7916666666667,261.57083257039386L1604.6088542938232,261.57083257039386Q1607.546875,261.57083257039386 1607.546875,258.6328118642171L1607.546875,258.6328118642171Q1607.546875,255.69479115804037 1610.4848957061768,255.69479115804037L1903.6789321881345,255.69479115804037Q1910.75,255.69479115804037 1910.75,262.7658589699058L1910.75,280.08309745607886Q1910.75,287.15416526794434 1917.8210678118655,287.15416526794434L1926.75,287.15416526794434\" id=\"aphrodite-diagram-ccr-pipeline-L_DEDUP_STORE_0\" class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\" style=\"stroke-dasharray: 0 0 402.6943359375 4; stroke-dashoffset: 0;;\" data-edge=\"true\" data-et=\"edge\" data-id=\"L_DEDUP_STORE_0\" data-points=\"W3sieCI6MTU0OS44NDg5NDEyNzY0NzEsInkiOjI2MS41NzA4MzI1NzAzOTM4Nn0seyJ4IjoxNTg2Ljc5MTY2NjY2NjY2NjcsInkiOjI2MS41NzA4MzI1NzAzOTM4Nn0seyJ4IjoxNjA3LjU0Njg3NSwieSI6MjYxLjU3MDgzMjU3MDM5Mzg2fSx7IngiOjE2MDcuNTQ2ODc1LCJ5IjoyNTUuNjk0NzkxMTU4MDQwMzd9LHsieCI6MTkxMC43NSwieSI6MjU1LjY5NDc5MTE1ODA0MDM3fSx7IngiOjE5MTAuNzUsInkiOjI4Ny4xNTQxNjUyNjc5NDQzNH0seyJ4IjoxOTMwLjc1LCJ5IjoyODcuMTU0MTY1MjY3OTQ0MzR9XQ==\" data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-ccr-pipeline_flowchart-v2-pointEnd-margin)\"/><path d=\"M2126.53125,302.72083218892413L2139.4601821881347,302.72083218892413Q2146.53125,302.72083218892413 2146.53125,295.64976437705866L2146.53125,268.89919154029974Q2146.53125,261.82812372843426 2153.6023178118653,261.82812372843426L2162.53125,261.82812372843426\" id=\"aphrodite-diagram-ccr-pipeline-L_STORE_MARK_0\" class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\" style=\"stroke-dasharray: 0 0 67.56448364257812 4; stroke-dashoffset: 0;;\" data-edge=\"true\" data-et=\"edge\" data-id=\"L_STORE_MARK_0\" data-points=\"W3sieCI6MjEyNi41MzEyNSwieSI6MzAyLjcyMDgzMjE4ODkyNDEzfSx7IngiOjIxNDYuNTMxMjUsInkiOjMwMi43MjA4MzIxODg5MjQxM30seyJ4IjoyMTQ2LjUzMTI1LCJ5IjoyNjEuODI4MTIzNzI4NDM0MjZ9LHsieCI6MjE2Ni41MzEyNSwieSI6MjYxLjgyODEyMzcyODQzNDI2fV0=\" data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-ccr-pipeline_flowchart-v2-pointEnd-margin)\"/><path d=\"M2554.953125,257.99479039510095L2590.953125,257.99479039510095\" id=\"aphrodite-diagram-ccr-pipeline-L_MARK_DECIDE_0\" class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\" style=\"stroke-dasharray: 0 0 32 4; stroke-dashoffset: 0;;\" data-edge=\"true\" data-et=\"edge\" data-id=\"L_MARK_DECIDE_0\" data-points=\"W3sieCI6MjU1NC45NTMxMjUsInkiOjI1Ny45OTQ3OTAzOTUxMDA5NX0seyJ4IjoyNTk0Ljk1MzEyNSwieSI6MjU3Ljk5NDc5MDM5NTEwMDk1fV0=\" data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-ccr-pipeline_flowchart-v2-pointEnd-margin)\"/><path d=\"M2743.4816919341683,232.28906122843426L2769.1875,232.28906122843426L2782.1164321881347,232.28906122843426Q2789.1875,232.28906122843426 2789.1875,225.2179934165688L2789.1875,219.16585858843612Q2789.1875,212.09479077657065 2796.2585678118653,212.09479077657065L2964.796875,212.09479077657065\" id=\"aphrodite-diagram-ccr-pipeline-L_DECIDE_SKIP_0\" class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\" style=\"stroke-dasharray: 0 0 232.18141174316406 4; stroke-dashoffset: 0;;\" data-edge=\"true\" data-et=\"edge\" data-id=\"L_DECIDE_SKIP_0\" data-points=\"W3sieCI6Mjc0My40ODE2OTE5MzQxNjgzLCJ5IjoyMzIuMjg5MDYxMjI4NDM0MjZ9LHsieCI6Mjc2OS4xODc1LCJ5IjoyMzIuMjg5MDYxMjI4NDM0MjZ9LHsieCI6Mjc4OS4xODc1LCJ5IjoyMzIuMjg5MDYxMjI4NDM0MjZ9LHsieCI6Mjc4OS4xODc1LCJ5IjoyMTIuMDk0NzkwNzc2NTcwNjV9LHsieCI6Mjk2OC43OTY4NzUsInkiOjIxMi4wOTQ3OTA3NzY1NzA2NX1d\" data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-ccr-pipeline_flowchart-v2-pointEnd-margin)\"/><path d=\"M2743.4816919341683,283.7005195617676L2769.1875,283.7005195617676L2782.1164321881347,283.7005195617676Q2789.1875,283.7005195617676 2789.1875,290.77158737363305L2789.1875,296.82372220176575Q2789.1875,303.8947900136312 2796.2585678118653,303.8947900136312L3022.6015625,303.8947900136312\" id=\"aphrodite-diagram-ccr-pipeline-L_DECIDE_RET_0\" class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\" style=\"stroke-dasharray: 0 0 289.986083984375 4; stroke-dashoffset: 0;;\" data-edge=\"true\" data-et=\"edge\" data-id=\"L_DECIDE_RET_0\" data-points=\"W3sieCI6Mjc0My40ODE2OTE5MzQxNjgzLCJ5IjoyODMuNzAwNTE5NTYxNzY3Nn0seyJ4IjoyNzY5LjE4NzUsInkiOjI4My43MDA1MTk1NjE3Njc2fSx7IngiOjI3ODkuMTg3NSwieSI6MjgzLjcwMDUxOTU2MTc2NzZ9LHsieCI6Mjc4OS4xODc1LCJ5IjozMDMuODk0NzkwMDEzNjMxMn0seyJ4IjozMDI2LjYwMTU2MjUsInkiOjMwMy44OTQ3OTAwMTM2MzEyfV0=\" data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-ccr-pipeline_flowchart-v2-pointEnd-margin)\"/><path d=\"M3231.9921875,303.8947900136312L3325.796875,303.8947900136312\" id=\"aphrodite-diagram-ccr-pipeline-L_RET_FULL_0\" class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\" style=\"stroke-dasharray: 0 0 89.8046875 4; stroke-dashoffset: 0;;\" data-edge=\"true\" data-et=\"edge\" data-id=\"L_RET_FULL_0\" data-points=\"W3sieCI6MzIzMS45OTIxODc1LCJ5IjozMDMuODk0NzkwMDEzNjMxMn0seyJ4IjozMzI5Ljc5Njg3NSwieSI6MzAzLjg5NDc5MDAxMzYzMTJ9XQ==\" data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-ccr-pipeline_flowchart-v2-pointEnd-margin)\"/><path d=\"M333.015625,179.36406135559082L345.9445571881345,179.36406135559082Q353.015625,179.36406135559082 353.015625,172.29299354372534L353.015625,147.30179596127954Q353.015625,140.23072814941406 360.0866928118655,140.23072814941406L369.015625,140.23072814941406\" id=\"aphrodite-diagram-ccr-pipeline-L_BYP_CLASS_0\" class=\"edge-thickness-normal edge-pattern-dotted edge-thickness-normal edge-pattern-solid flowchart-link\" style=\"stroke-dasharray: 0 0 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4; stroke-dashoffset: 0;;\" data-edge=\"true\" data-et=\"edge\" data-id=\"L_BYP_CLASS_0\" data-points=\"W3sieCI6MzMzLjAxNTYyNSwieSI6MTc5LjM2NDA2MTM1NTU5MDgyfSx7IngiOjM1My4wMTU2MjUsInkiOjE3OS4zNjQwNjEzNTU1OTA4Mn0seyJ4IjozNTMuMDE1NjI1LCJ5IjoxNDAuMjMwNzI4MTQ5NDE0MDZ9LHsieCI6MzczLjAxNTYyNSwieSI6MTQwLjIzMDcyODE0OTQxNDA2fV0=\" data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-ccr-pipeline_flowchart-v2-pointEnd-margin)\"/><path d=\"M1890.75,337.99479039510095L1903.6789321881345,337.99479039510095Q1910.75,337.99479039510095 1910.75,330.9237225832355L1910.75,325.3585669217694Q1910.75,318.28749910990393 1917.8210678118655,318.28749910990393L1926.75,318.28749910990393\" id=\"aphrodite-diagram-ccr-pipeline-L_FAIL_STORE_0\" class=\"edge-thickness-normal edge-pattern-dotted edge-thickness-normal edge-pattern-solid flowchart-link\" style=\"stroke-dasharray: 0 0 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4; stroke-dashoffset: 0;;\" data-edge=\"true\" data-et=\"edge\" data-id=\"L_FAIL_STORE_0\" data-points=\"W3sieCI6MTg5MC43NSwieSI6MzM3Ljk5NDc5MDM5NTEwMDk1fSx7IngiOjE5MTAuNzUsInkiOjMzNy45OTQ3OTAzOTUxMDA5NX0seyJ4IjoxOTEwLjc1LCJ5IjozMTguMjg3NDk5MTA5OTAzOTN9LHsieCI6MTkzMC43NSwieSI6MzE4LjI4NzQ5OTEwOTkwMzkzfV0=\" data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-ccr-pipeline_flowchart-v2-pointEnd-margin)\"/></g><g class=\"edgeLabels\"><g class=\"edgeLabel\" transform=\"translate(935.796875, 41.79999923706055)\"><g class=\"label\" data-id=\"L_THRESH_INLINE_0\" transform=\"translate(0, -10.5)\"><g><rect class=\"background\" style=\"\" x=\"-11.6328125\" y=\"-1\" width=\"23.265625\" height=\"23\"/><text y=\"-10.1\" text-anchor=\"middle\" style=\"\"><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\" text-anchor=\"middle\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">no</tspan></tspan></text></g></g></g><g class=\"edgeLabel\" transform=\"translate(935.796875, 224.12812423706055)\"><g class=\"label\" data-id=\"L_THRESH_HASH_0\" transform=\"translate(0, -10.5)\"><g><rect class=\"background\" style=\"\" x=\"-16.453125\" y=\"-1\" width=\"32.90625\" height=\"23\"/><text y=\"-10.1\" text-anchor=\"middle\" style=\"\"><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\" text-anchor=\"middle\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">yes</tspan></tspan></text></g></g></g><g class=\"edgeLabel\" transform=\"translate(1759.1484375, 202.12812423706055)\"><g class=\"label\" data-id=\"L_DEDUP_MARK_0\" transform=\"translate(0, -10.5)\"><g><rect class=\"background\" style=\"\" x=\"-16.453125\" y=\"-1\" width=\"32.90625\" height=\"23\"/><text y=\"-10.1\" text-anchor=\"middle\" style=\"\"><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\" text-anchor=\"middle\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">hit</tspan></tspan></text></g></g></g><g class=\"edgeLabel\" transform=\"translate(1759.1484375, 255.19479115804037)\"><g class=\"label\" data-id=\"L_DEDUP_STORE_0\" transform=\"translate(0, -10.5)\"><g><rect class=\"background\" style=\"\" x=\"-21.265625\" y=\"-1\" width=\"42.53125\" height=\"23\"/><text y=\"-10.1\" text-anchor=\"middle\" style=\"\"><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\" text-anchor=\"middle\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">miss</tspan></tspan></text></g></g></g><g class=\"edgeLabel\" transform=\"translate(2868.9921875, 211.59479077657065)\"><g class=\"label\" data-id=\"L_DECIDE_SKIP_0\" transform=\"translate(0, -10.5)\"><g><rect class=\"background\" style=\"\" x=\"-21.265625\" y=\"-1\" width=\"42.53125\" height=\"23\"/><text y=\"-10.1\" text-anchor=\"middle\" style=\"\"><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\" text-anchor=\"middle\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">skip</tspan></tspan></text></g></g></g><g class=\"edgeLabel\" transform=\"translate(2868.9921875, 303.3947900136312)\"><g class=\"label\" data-id=\"L_DECIDE_RET_0\" transform=\"translate(0, -10.5)\"><g><rect class=\"background\" style=\"\" x=\"-59.8046875\" y=\"-1\" width=\"119.609375\" height=\"23\"/><text y=\"-10.1\" text-anchor=\"middle\" style=\"\"><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\" text-anchor=\"middle\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">needs</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0detail</tspan></tspan></text></g></g></g></g><g class=\"nodes\"><g class=\"node default\" id=\"aphrodite-diagram-ccr-pipeline-flowchart-ANY-0\" data-look=\"neo\" transform=\"translate(172.5078125, 87.56406211853027)\"><rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-160.5078125\" y=\"-21.5\" width=\"321.015625\" height=\"43\" rx=\"0\" ry=\"0\"/><g class=\"label\" style=\"\" transform=\"translate(0, -9.5)\"><rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\"/><g><rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\"/><text y=\"-10.1\" style=\"\"><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">any</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0output</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0enters</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0the</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0pipeline</tspan></tspan></text></g></g></g><g class=\"node default\" id=\"aphrodite-diagram-ccr-pipeline-flowchart-CLASS-1\" data-look=\"neo\" transform=\"translate(490.1640625, 133.46406173706055)\"><rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-117.1484375\" y=\"-30.299999237060547\" width=\"234.296875\" height=\"60.599998474121094\" rx=\"0\" ry=\"0\"/><g class=\"label\" style=\"\" transform=\"translate(0, -18.299999237060547)\"><rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\"/><g><rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\"/><text y=\"-10.1\" style=\"\"><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">classify</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0-</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0type-aware</tspan></tspan><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"1em\" dy=\"1.1em\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">40-123</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0ns</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0per</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0blob</tspan></tspan></text></g></g></g><g class=\"node default\" id=\"aphrodite-diagram-ccr-pipeline-flowchart-THRESH-2\" data-look=\"neo\" transform=\"translate(763.328125, 133.46406173706055)\"><polygon points=\"116.015625,0 232.03125,-116.015625 116.015625,-232.03125 0,-116.015625\" class=\"label-container\" transform=\"translate(-115.515625, 116.015625)\" rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\"/><g class=\"label\" style=\"\" transform=\"translate(0, -9.5)\"><rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\"/><g><rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\"/><text y=\"-10.1\" style=\"\"><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">over</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0the</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0threshold?</tspan></tspan></text></g></g></g><g class=\"node default\" id=\"aphrodite-diagram-ccr-pipeline-flowchart-INLINE-3\" data-look=\"neo\" transform=\"translate(1147.9375, 42.29999923706055)\"><rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-155.6875\" y=\"-30.299999237060547\" width=\"311.375\" height=\"60.599998474121094\" rx=\"0\" ry=\"0\"/><g class=\"label\" style=\"\" transform=\"translate(0, -18.299999237060547)\"><rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\"/><g><rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\"/><text y=\"-10.1\" style=\"\"><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">below</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0threshold:</tspan></tspan><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"1em\" dy=\"1.1em\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">inline</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0cache</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0only</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0-</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0no</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0marker</tspan></tspan></text></g></g></g><g class=\"node default\" id=\"aphrodite-diagram-ccr-pipeline-flowchart-RAW-4\" data-look=\"neo\" transform=\"translate(1465.5859375, 42.29999923706055)\"><rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-121.9609375\" y=\"-21.5\" width=\"243.921875\" height=\"43\" rx=\"0\" ry=\"0\"/><g class=\"label\" style=\"\" transform=\"translate(0, -9.5)\"><rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\"/><g><rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\"/><text y=\"-10.1\" style=\"\"><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">pass-through</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0untouched</tspan></tspan></text></g></g></g><g class=\"node default\" id=\"aphrodite-diagram-ccr-pipeline-flowchart-HASH-5\" data-look=\"neo\" transform=\"translate(1147.9375, 224.62812423706055)\"><rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-141.234375\" y=\"-21.5\" width=\"282.46875\" height=\"43\" rx=\"0\" ry=\"0\"/><g class=\"label\" style=\"\" transform=\"translate(0, -9.5)\"><rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\"/><g><rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\"/><text y=\"-10.1\" style=\"\"><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">BLAKE3</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0hash</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0of</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0the</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0content</tspan></tspan></text></g></g></g><g class=\"node default\" id=\"aphrodite-diagram-ccr-pipeline-flowchart-DEDUP-6\" data-look=\"neo\" transform=\"translate(1465.9635416666667, 224.62812423706055)\"><polygon points=\"120.828125,0 241.65625,-120.828125 120.828125,-241.65625 0,-120.828125\" class=\"label-container\" transform=\"translate(-120.328125, 120.828125)\" rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\"/><g class=\"label\" style=\"\" transform=\"translate(0, -9.5)\"><rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\"/><g><rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\"/><text y=\"-10.1\" style=\"\"><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">hash</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0already</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0stored?</tspan></tspan></text></g></g></g><g class=\"node default\" id=\"aphrodite-diagram-ccr-pipeline-flowchart-STORE-7\" data-look=\"neo\" transform=\"translate(2028.640625, 302.72083218892413)\"><rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-97.890625\" y=\"-56.70000076293945\" width=\"195.78125\" height=\"113.4000015258789\" rx=\"0\" ry=\"0\"/><g class=\"label\" style=\"\" transform=\"translate(0, -44.70000076293945)\"><rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\"/><g><rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\"/><text y=\"-10.1\" style=\"\"><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">store</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0on</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0miss:</tspan></tspan><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"1em\" dy=\"1.1em\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">inline</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0LRU</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA01,024</tspan></tspan><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"2.1em\" dy=\"1.1em\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">DashMap</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0over</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA08</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0KB</tspan></tspan><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"3.2em\" dy=\"1.1em\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">SQLite</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0over</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA01</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0KB</tspan></tspan><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"4.300000000000001em\" dy=\"1.1em\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">session</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0inline</tspan></tspan></text></g></g></g><g class=\"node default\" id=\"aphrodite-diagram-ccr-pipeline-flowchart-MARK-8\" data-look=\"neo\" transform=\"translate(2360.7421875, 257.99479039510095)\"><rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-194.2109375\" y=\"-21.5\" width=\"388.421875\" height=\"43\" rx=\"0\" ry=\"0\"/><g class=\"label\" style=\"\" transform=\"translate(0, -9.5)\"><rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\"/><g><rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\"/><text y=\"-10.1\" style=\"\"><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">marker</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0+</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0preview</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0replaces</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0the</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0content</tspan></tspan></text></g></g></g><g class=\"node default\" id=\"aphrodite-diagram-ccr-pipeline-flowchart-DECIDE-9\" data-look=\"neo\" transform=\"translate(2682.0703125, 257.99479039510095)\"><polygon points=\"87.1171875,0 174.234375,-87.1171875 87.1171875,-174.234375 0,-87.1171875\" class=\"label-container\" transform=\"translate(-86.6171875, 87.1171875)\" rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\"/><g class=\"label\" style=\"\" transform=\"translate(0, -9.5)\"><rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\"/><g><rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\"/><text y=\"-10.1\" style=\"\"><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">agent</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0decides</tspan></tspan></text></g></g></g><g class=\"node default\" id=\"aphrodite-diagram-ccr-pipeline-flowchart-SKIP-10\" data-look=\"neo\" transform=\"translate(3129.296875, 212.09479077657065)\"><rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-160.5\" y=\"-30.299999237060547\" width=\"321\" height=\"60.599998474121094\" rx=\"0\" ry=\"0\"/><g class=\"label\" style=\"\" transform=\"translate(0, -18.299999237060547)\"><rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\"/><g><rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\"/><text y=\"-10.1\" style=\"\"><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">preview</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0is</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0enough</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0-</tspan></tspan><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"1em\" dy=\"1.1em\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">skip</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0retrieval,</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0keep</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0reasoning</tspan></tspan></text></g></g></g><g class=\"node default\" id=\"aphrodite-diagram-ccr-pipeline-flowchart-RET-11\" data-look=\"neo\" transform=\"translate(3129.296875, 303.8947900136312)\"><rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-102.6953125\" y=\"-21.5\" width=\"205.390625\" height=\"43\" rx=\"0\" ry=\"0\"/><g class=\"label\" style=\"\" transform=\"translate(0, -9.5)\"><rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\"/><g><rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\"/><text y=\"-10.1\" style=\"\"><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">aphrodite_retrieve</tspan></tspan></text></g></g></g><g class=\"node default\" id=\"aphrodite-diagram-ccr-pipeline-flowchart-FULL-12\" data-look=\"neo\" transform=\"translate(3475.84375, 303.8947900136312)\"><rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-146.046875\" y=\"-47.900001525878906\" width=\"292.09375\" height=\"95.80000305175781\" rx=\"0\" ry=\"0\"/><g class=\"label\" style=\"\" transform=\"translate(0, -35.900001525878906)\"><rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\"/><g><rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\"/><text y=\"-10.1\" style=\"\"><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">normalize</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0the</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0hash</tspan></tspan><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"1em\" dy=\"1.1em\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">inline</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0first</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0-</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0then</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0backend</tspan></tspan><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"2.1em\" dy=\"1.1em\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">404</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0on</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0a</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0miss</tspan></tspan><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"3.2em\" dy=\"1.1em\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">byte-identical</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0content</tspan></tspan></text></g></g></g><g class=\"node default\" id=\"aphrodite-diagram-ccr-pipeline-flowchart-BYP-13\" data-look=\"neo\" transform=\"translate(172.515625, 179.36406135559082)\"><rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-160.5\" y=\"-30.299999237060547\" width=\"321\" height=\"60.599998474121094\" rx=\"0\" ry=\"0\"/><g class=\"label\" style=\"\" transform=\"translate(0, -18.299999237060547)\"><rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\"/><g><rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\"/><text y=\"-10.1\" style=\"\"><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">SSE</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0streams</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0bypass</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0-</tspan></tspan><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"1em\" dy=\"1.1em\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">tool_calls</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0args</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0never</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0targeted</tspan></tspan></text></g></g></g><g class=\"node default\" id=\"aphrodite-diagram-ccr-pipeline-flowchart-FAIL-14\" data-look=\"neo\" transform=\"translate(1759.1484375, 337.99479039510095)\"><rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-131.6015625\" y=\"-30.299999237060547\" width=\"263.203125\" height=\"60.599998474121094\" rx=\"0\" ry=\"0\"/><g class=\"label\" style=\"\" transform=\"translate(0, -18.299999237060547)\"><rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\"/><g><rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\"/><text y=\"-10.1\" style=\"\"><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">a</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0failed</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0store</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0leaves</tspan></tspan><tspan class=\"text-outer-tspan row\" x=\"0\" y=\"1em\" dy=\"1.1em\"><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">the</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0content</tspan><tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0uncompressed</tspan></tspan></text></g></g></g></g></g></g><defs><filter id=\"aphrodite-diagram-ccr-pipeline-drop-shadow\" height=\"130%\" width=\"130%\"><feDropShadow dx=\"4\" dy=\"4\" stdDeviation=\"0\" flood-opacity=\"0.06\" flood-color=\"#000000\"/></filter></defs><defs><filter id=\"aphrodite-diagram-ccr-pipeline-drop-shadow-small\" height=\"150%\" width=\"150%\"><feDropShadow dx=\"2\" dy=\"2\" stdDeviation=\"0\" flood-opacity=\"0.06\" flood-color=\"#000000\"/></filter></defs></svg>\n";
// node_modules/astro/dist/assets/runtime.js
function createSvgComponent({ meta, attributes, children, styles }) {
	const hasStyles = styles.length > 0;
	const Component = createComponent({
		async factory(result, props) {
			const normalizedProps = normalizeProps(attributes, props);
			if (hasStyles && result.cspDestination) for (const style of styles) {
				const hash = await generateCspDigest(style, result.cspAlgorithm);
				result._metadata.extraStyleHashes.push(hash);
			}
			return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
		},
		propagation: hasStyles ? "self" : "none"
	});
	Object.defineProperty(Component, "toJSON", {
		value: () => meta,
		enumerable: false
	});
	return Object.assign(Component, meta);
}
/**
* Some attributes required for `image/svg+xml` are irrelevant when inlined in a `text/html` document. We can save a few bytes by dropping them.
*/
var ATTRS_TO_DROP = [
	"xmlns",
	"xmlns:xlink",
	"version"
];
var DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
	for (const attr of ATTRS_TO_DROP) delete attributes[attr];
	return attributes;
}
function normalizeProps(attributes, props) {
	return dropAttributes({
		...DEFAULT_ATTRS,
		...attributes,
		...props
	});
}
// node_modules/astro/dist/content/consts.js
var CONTENT_IMAGE_FLAG = "astroContentImageFlag";
var IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";
// node_modules/astro/dist/assets/utils/resolveImports.js
/**
* Resolves an image src from a content file (such as markdown) to a module ID or import that can be resolved by Vite.
*
* @param imageSrc The src attribute of an image tag
* @param filePath The path to the file that contains the image relative to the site root
* @returns A module id of the image that can be resolved by Vite, or undefined if it is not a local image
*/
function imageSrcToImportId(imageSrc, filePath) {
	imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
	if (isRemotePath(imageSrc)) return;
	const ext = imageSrc.split(".").at(-1)?.toLowerCase();
	if (!ext || !VALID_INPUT_FORMATS.includes(ext)) return;
	const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
	if (filePath) params.set("importer", filePath);
	return `${imageSrc}?${params.toString()}`;
}
// node_modules/astro/dist/content/data-store-source.js
/**
* A {@link DataStoreSource} backed by an in-memory {@link ImmutableDataStore}.
* All queries resolve synchronously; the async signatures exist to satisfy the
* {@link DataStoreSource} contract.
*/
var InMemorySource = class {
	#store;
	constructor(store) {
		this.#store = store;
	}
	hasCollection(collection) {
		return this.#store.hasCollection(collection);
	}
	get(collection, key) {
		return this.#store.get(collection, key);
	}
	entries(collection) {
		return this.#store.entries(collection);
	}
	values(collection) {
		return this.#store.values(collection);
	}
	keys(collection) {
		return this.#store.keys(collection);
	}
	has(collection, key) {
		return this.#store.has(collection, key);
	}
	collections() {
		return this.#store.collections();
	}
};
// node_modules/astro/dist/content/data-store.js
/**
* Rebuilds a collection from ordered parts containing newline-delimited
* `devalue.stringify([id, entry])` records.
*/
var ChunkedCollectionParser = class {
	#entries = /* @__PURE__ */ new Map();
	#remainder = "";
	add(part) {
		const records = (this.#remainder + part).split("\n");
		this.#remainder = records.pop();
		for (const record of records) {
			const parsed = devalue.parse(record);
			if (!Array.isArray(parsed) || parsed.length !== 2 || typeof parsed[0] !== "string") throw new Error("Invalid chunked data store entry");
			this.#entries.set(parsed[0], parsed[1]);
		}
	}
	finish() {
		if (this.#remainder) throw new Error("Invalid chunked data store entry");
		return this.#entries;
	}
};
/**
* A read-only data store for content collections. This is used to retrieve data from the content layer at runtime.
* To add or modify data, use {@link MutableDataStore} instead.
*/
var ImmutableDataStore = class ImmutableDataStore {
	_collections = /* @__PURE__ */ new Map();
	constructor() {
		this._collections = /* @__PURE__ */ new Map();
	}
	get(collectionName, key) {
		return this._collections.get(collectionName)?.get(String(key));
	}
	entries(collectionName) {
		return [...(this._collections.get(collectionName) ?? /* @__PURE__ */ new Map()).entries()];
	}
	values(collectionName) {
		return [...(this._collections.get(collectionName) ?? /* @__PURE__ */ new Map()).values()];
	}
	keys(collectionName) {
		return [...(this._collections.get(collectionName) ?? /* @__PURE__ */ new Map()).keys()];
	}
	has(collectionName, key) {
		const collection = this._collections.get(collectionName);
		if (collection) return collection.has(String(key));
		return false;
	}
	hasCollection(collectionName) {
		return this._collections.has(collectionName);
	}
	collections() {
		return this._collections;
	}
	/**
	* Rebuilds a collections map from a chunked-store manifest whose part file
	* names have already been swapped for their contents.
	*
	* Each collection maps to a list of parts. A part is either a raw string
	* (when the store is loaded from disk) or an ESM namespace from a virtual
	* chunk import (`{ default: string }`, when emitted at runtime). Each part
	* contains independently serialized entry records. This is the inverse of
	* {@link import('./data-store-writer.js').ChunkedWriter} and stays free of
	* Node built-ins so it can run at runtime.
	*/
	static manifestToMap(manifest) {
		const collections = /* @__PURE__ */ new Map();
		for (const [collectionName, parts] of Object.entries(manifest)) {
			const parser = new ChunkedCollectionParser();
			for (const part of parts) parser.add(typeof part === "string" ? part : part.default);
			collections.set(collectionName, parser.finish());
		}
		return collections;
	}
	/**
	* Attempts to load a DataStore from the virtual module.
	* This only works in Vite.
	*/
	static async fromModule() {
		try {
			const data = await import("./_astro_data-layer-content_MS6AQO_j.mjs");
			if (data.default instanceof Map) return ImmutableDataStore.fromMap(data.default);
			if (Array.isArray(data.default)) {
				const map = devalue.unflatten(data.default);
				return ImmutableDataStore.fromMap(map);
			}
			const map = ImmutableDataStore.manifestToMap(data.default);
			return ImmutableDataStore.fromMap(map);
		} catch {}
		return new ImmutableDataStore();
	}
	static async fromMap(data) {
		const store = new ImmutableDataStore();
		store._collections = data;
		return store;
	}
};
function dataStoreSingleton() {
	let instance = void 0;
	return {
		get: async () => {
			if (!instance) instance = ImmutableDataStore.fromModule().then((store) => new InMemorySource(store));
			return instance;
		},
		set: (store) => {
			instance = new InMemorySource(store);
		}
	};
}
/** @internal */
var globalDataStore = dataStoreSingleton();
// node_modules/astro/dist/content/loaders/errors.js
function formatZodError(error) {
	return error.issues.map((issue) => `  **${issue.path.join(".")}**: ${issue.message}`);
}
var LiveCollectionError = class LiveCollectionError extends Error {
	collection;
	message;
	cause;
	constructor(collection, message, cause) {
		super(message);
		this.collection = collection;
		this.message = message;
		this.cause = cause;
		this.name = "LiveCollectionError";
		if (cause?.stack) this.stack = cause.stack;
	}
	static is(error) {
		return error instanceof LiveCollectionError;
	}
};
var LiveEntryNotFoundError = class extends LiveCollectionError {
	constructor(collection, entryFilter) {
		super(collection, `Entry ${collection} → ${typeof entryFilter === "string" ? entryFilter : JSON.stringify(entryFilter)} was not found.`);
		this.name = "LiveEntryNotFoundError";
	}
	static is(error) {
		return error?.name === "LiveEntryNotFoundError";
	}
};
var LiveCollectionValidationError = class extends LiveCollectionError {
	constructor(collection, entryId, error) {
		super(collection, [
			`**${collection} → ${entryId}** data does not match the collection schema.\n`,
			...formatZodError(error),
			""
		].join("\n"));
		this.name = "LiveCollectionValidationError";
	}
	static is(error) {
		return error?.name === "LiveCollectionValidationError";
	}
};
var LiveCollectionCacheHintError = class extends LiveCollectionError {
	constructor(collection, entryId, error) {
		super(collection, [
			`**${String(collection)}${entryId ? ` → ${String(entryId)}` : ""}** returned an invalid cache hint.\n`,
			...formatZodError(error),
			""
		].join("\n"));
		this.name = "LiveCollectionCacheHintError";
	}
	static is(error) {
		return error?.name === "LiveCollectionCacheHintError";
	}
};
// node_modules/astro/dist/content/runtime.js
var cacheHintSchema = z.object({
	tags: z.array(z.string()).optional(),
	lastModified: z.date().optional()
});
async function parseLiveEntry(entry, schema, collection) {
	try {
		const parsed = await z.safeParseAsync(schema, entry.data);
		if (!parsed.success) return { error: new LiveCollectionValidationError(collection, entry.id, parsed.error) };
		if (entry.cacheHint) {
			const cacheHint = cacheHintSchema.safeParse(entry.cacheHint);
			if (!cacheHint.success) return { error: new LiveCollectionCacheHintError(collection, entry.id, cacheHint.error) };
			entry.cacheHint = cacheHint.data;
		}
		return { entry: {
			...entry,
			data: parsed.data
		} };
	} catch (error) {
		return { error: new LiveCollectionError(collection, `Unexpected error parsing entry ${entry.id} in collection ${collection}`, error) };
	}
}
function createGetCollection({ liveCollections, logger }) {
	return async function getCollection(collection, filter) {
		if (collection in liveCollections) throw new AstroError({
			...UnknownContentCollectionError,
			message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
		});
		const hasFilter = typeof filter === "function";
		const store = await globalDataStore.get();
		if (await store.hasCollection(collection)) {
			const { default: imageAssetMap } = await import("./content-assets_CLeMUEVR.mjs");
			const result = [];
			for (const rawEntry of await store.values(collection)) {
				const data = resolveEntryData(rawEntry, imageAssetMap);
				let entry = {
					...rawEntry,
					data,
					collection
				};
				if (hasFilter && !filter(entry)) continue;
				result.push(entry);
			}
			return result;
		} else {
			logger.warn("content", `The collection ${JSON.stringify(collection)} does not exist or is empty. Please check your content config file for errors.`);
			return [];
		}
	};
}
function createGetEntry({ liveCollections, logger }) {
	return async function getEntry(collectionOrLookupObject, lookup) {
		let collection, lookupId;
		if (typeof collectionOrLookupObject === "string") {
			collection = collectionOrLookupObject;
			if (!lookup) throw new AstroError({
				...UnknownContentCollectionError,
				message: "`getEntry()` requires an entry identifier as the second argument."
			});
			lookupId = lookup;
		} else {
			collection = collectionOrLookupObject.collection;
			lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
		}
		if (collection in liveCollections) throw new AstroError({
			...UnknownContentCollectionError,
			message: `Collection "${collection}" is a live collection. Use getLiveEntry() instead of getEntry().`
		});
		if (typeof lookupId === "object") throw new AstroError({
			...UnknownContentCollectionError,
			message: `The entry identifier must be a string. Received object.`
		});
		const store = await globalDataStore.get();
		if (await store.hasCollection(collection)) {
			const entry = await store.get(collection, lookupId);
			if (!entry) {
				logger.warn("content", `Entry ${collection} → ${lookupId} was not found.`);
				return;
			}
			const { default: imageAssetMap } = await import("./content-assets_CLeMUEVR.mjs");
			const data = resolveEntryData(entry, imageAssetMap);
			const result = {
				...entry,
				data,
				collection
			};
			warnForPropertyAccess(logger, result.data, "slug", `[content] Attempted to access deprecated property on "${collection}" entry.\nThe "slug" property is no longer automatically added to entries. Please use the "id" property instead.`);
			warnForPropertyAccess(logger, result, "render", `[content] Invalid attempt to access "render()" method on "${collection}" entry.\nTo render an entry, use "render(entry)" from "astro:content".`);
			return result;
		}
	};
}
function warnForPropertyAccess(logger, entry, prop, message) {
	if (!(prop in entry)) {
		let _value = void 0;
		Object.defineProperty(entry, prop, {
			get() {
				if (_value === void 0) logger.error("content", message);
				return _value;
			},
			set(v) {
				_value = v;
			},
			enumerable: false
		});
	}
}
function createGetLiveCollection({ liveCollections }) {
	return async function getLiveCollection(collection, filter) {
		if (!(collection in liveCollections)) return { error: new LiveCollectionError(collection, `Collection "${collection}" is not a live collection. Use getCollection() instead of getLiveCollection() to load regular content collections.`) };
		try {
			const context = {
				filter,
				collection
			};
			const response = await liveCollections[collection].loader?.loadCollection?.(context);
			if (response && "error" in response) return { error: response.error };
			const { schema } = liveCollections[collection];
			let processedEntries = response.entries;
			if (schema) {
				const entryResults = await Promise.all(response.entries.map((entry) => parseLiveEntry(entry, schema, collection)));
				for (const result of entryResults) if (result.error) return { error: result.error };
				processedEntries = entryResults.map((result) => result.entry);
			}
			let cacheHint = response.cacheHint;
			if (cacheHint) {
				const cacheHintResult = cacheHintSchema.safeParse(cacheHint);
				if (!cacheHintResult.success) return { error: new LiveCollectionCacheHintError(collection, void 0, cacheHintResult.error) };
				cacheHint = cacheHintResult.data;
			}
			if (processedEntries.length > 0) {
				const entryTags = /* @__PURE__ */ new Set();
				let latestModified;
				for (const entry of processedEntries) if (entry.cacheHint) {
					if (entry.cacheHint.tags) entry.cacheHint.tags.forEach((tag) => entryTags.add(tag));
					if (entry.cacheHint.lastModified instanceof Date) {
						if (latestModified === void 0 || entry.cacheHint.lastModified > latestModified) latestModified = entry.cacheHint.lastModified;
					}
				}
				if (entryTags.size > 0 || latestModified || cacheHint) {
					const mergedCacheHint = {};
					if (cacheHint?.tags || entryTags.size > 0) mergedCacheHint.tags = [.../* @__PURE__ */ new Set([...cacheHint?.tags || [], ...entryTags])];
					if (cacheHint?.lastModified && latestModified) mergedCacheHint.lastModified = cacheHint.lastModified > latestModified ? cacheHint.lastModified : latestModified;
					else if (cacheHint?.lastModified || latestModified) mergedCacheHint.lastModified = cacheHint?.lastModified ?? latestModified;
					cacheHint = mergedCacheHint;
				}
			}
			return {
				entries: processedEntries,
				cacheHint
			};
		} catch (error) {
			return { error: new LiveCollectionError(collection, `Unexpected error loading collection ${collection}${error instanceof Error ? `: ${error.message}` : ""}`, error) };
		}
	};
}
function createGetLiveEntry({ liveCollections }) {
	return async function getLiveEntry(collection, lookup) {
		if (!(collection in liveCollections)) return { error: new LiveCollectionError(collection, `Collection "${collection}" is not a live collection. Use getCollection() instead of getLiveEntry() to load regular content collections.`) };
		try {
			const lookupObject = {
				filter: typeof lookup === "string" ? { id: lookup } : lookup,
				collection
			};
			let entry = await liveCollections[collection].loader?.loadEntry?.(lookupObject);
			if (entry && "error" in entry) return { error: entry.error };
			if (!entry) return { error: new LiveEntryNotFoundError(collection, lookup) };
			const { schema } = liveCollections[collection];
			if (schema) {
				const result = await parseLiveEntry(entry, schema, collection);
				if (result.error) return { error: result.error };
				entry = result.entry;
			}
			return {
				entry,
				cacheHint: entry.cacheHint
			};
		} catch (error) {
			return { error: new LiveCollectionError(collection, `Unexpected error loading entry ${collection} → ${typeof lookup === "string" ? lookup : JSON.stringify(lookup)}`, error) };
		}
	};
}
var CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
	const { default: imageAssetMap } = await import("./content-assets_CLeMUEVR.mjs");
	const imageObjects = /* @__PURE__ */ new Map();
	const { getImage } = await import("./_virtual_astro_get-image_BTI_mYnk.mjs");
	for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) try {
		const decodedImagePath = JSON.parse(imagePath.replace(/&(?:#x22|quot);/g, "\"").replace(/&(?:#x27|apos);/g, "'").replace(/&(?:amp|#x26|#38);/g, "&"));
		let image;
		if (URL.canParse(decodedImagePath.src)) image = await getImage(decodedImagePath);
		else {
			const id = imageSrcToImportId(decodedImagePath.src, fileName);
			const imported = imageAssetMap.get(id);
			if (!id || imageObjects.has(id) || !imported) continue;
			image = await getImage({
				...decodedImagePath,
				src: imported
			});
		}
		imageObjects.set(imagePath, image);
	} catch {
		throw new Error(`Failed to parse image reference: ${imagePath}`);
	}
	return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
		const image = imageObjects.get(imagePath);
		if (!image) return full;
		const { index, ...attributes } = image.attributes;
		return Object.entries({
			...attributes,
			src: image.src,
			...image.srcSet.values.length > 0 ? { srcset: image.srcSet.attribute } : {}
		}).filter(([, value]) => value != null).map(([key, value]) => value === "" ? `${key}=""` : `${key}="${escape(String(value))}"`).join(" ");
	});
}
/**
* Resolves the image src at `path` within `data` to its `ImageMetadata` (or a
* renderable SVG component). Returns the resolved value, or `undefined` when the
* image is not in the asset map and the plain src already stored in `data` should
* be kept.
*/
function resolveImageAtPath(src, fileName, imageAssetMap) {
	const id = imageSrcToImportId(src, fileName);
	if (!id) return;
	const imported = imageAssetMap?.get(id);
	if (!imported) return;
	if (imported.__svgData) {
		const { __svgData: svgData, ...meta } = imported;
		return createSvgComponent({
			meta,
			...svgData
		});
	}
	return imported;
}
/**
* Writes `value` at `path` within `target`, copying only the containers along
* that path so the shared store entry is never mutated. Sibling values and every
* container off the path are shared by reference, so values that `structuredClone`
* cannot handle (e.g. `Temporal` objects or class instances from Zod transforms)
* are never touched.
*/
function setAtPathCopying(target, path, value) {
	if (path.length === 0) return target;
	const [key, ...rest] = path;
	const copy = Array.isArray(target) ? target.slice() : { ...target };
	copy[key] = rest.length === 0 ? value : setAtPathCopying(copy[key], rest, value);
	return copy;
}
function updateImageReferencesInData(data, fileName, imageAssetMap, imageImports) {
	if (!imageImports?.length) return data;
	let result = data;
	for (const path of imageImports) {
		let src = result;
		for (const key of path) src = src?.[key];
		if (typeof src !== "string") continue;
		const resolved = resolveImageAtPath(src, fileName, imageAssetMap);
		if (resolved !== void 0) result = setAtPathCopying(result, path, resolved);
	}
	return result;
}
function resolveEntryData(entry, imageAssetMap) {
	return updateImageReferencesInData(entry.data, entry.filePath, imageAssetMap, entry.imageImports);
}
function createRenderEntry({ logger }) {
	return async function renderEntry(entry) {
		if (!entry) throw new AstroError(RenderUndefinedEntryError);
		recordContentEntryRender(entry.filePath);
		if (entry.deferredRender) try {
			const { default: contentModules } = await import("./content-modules_DYcV8QGo.mjs");
			const renderEntryImport = contentModules.get(entry.filePath);
			return render$1({
				collection: "",
				id: entry.id,
				renderEntryImport
			});
		} catch (e) {
			logger.error("content", `${e}`);
		}
		const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
		return {
			Content: createComponent(() => renderTemplate`${unescapeHTML(html)}`),
			headings: entry?.rendered?.metadata?.headings ?? [],
			remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
		};
	};
}
async function render$1({ collection, id, renderEntryImport }) {
	const UnexpectedRenderError = new AstroError({
		...UnknownContentCollectionError,
		message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
	});
	if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
	const baseMod = await renderEntryImport();
	if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
	const { default: defaultMod } = baseMod;
	if (isPropagatedAssetsModule(defaultMod)) {
		const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
		if (typeof getMod !== "function") throw UnexpectedRenderError;
		const propagationMod = await getMod();
		if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
		return {
			Content: createComponent({
				factory(result, baseProps, slots) {
					let styles = "", links = "", scripts = "";
					if (Array.isArray(collectedStyles)) styles = collectedStyles.map((style) => {
						const content = typeof style === "string" ? style : style.content;
						const viteDevId = typeof style === "object" && style.id ? style.id : void 0;
						return renderUniqueStylesheet(result, {
							type: "inline",
							content,
							viteDevId
						});
					}).join("");
					if (Array.isArray(collectedLinks)) links = collectedLinks.map((link) => {
						return renderUniqueStylesheet(result, {
							type: "external",
							src: isRemotePath(link) ? link : prependForwardSlash(link)
						});
					}).join("");
					if (Array.isArray(collectedScripts)) scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
					let props = baseProps;
					if (id.endsWith("mdx")) props = {
						components: propagationMod.components ?? {},
						...baseProps
					};
					return createHeadAndContent(unescapeHTML(styles + links + scripts), renderTemplate`${renderComponent(result, "Content", propagationMod.Content, props, slots)}`);
				},
				propagation: "self"
			}),
			headings: propagationMod.getHeadings?.() ?? [],
			remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
		};
	} else if (baseMod.Content && typeof baseMod.Content === "function") return {
		Content: baseMod.Content,
		headings: baseMod.getHeadings?.() ?? [],
		remarkPluginFrontmatter: baseMod.frontmatter ?? {}
	};
	else throw UnexpectedRenderError;
}
function isPropagatedAssetsModule(module) {
	return typeof module === "object" && module != null && "__astroPropagation" in module;
}
// \0astro:content
var liveCollections = {};
var logger = createConsoleLogger({ level });
var getCollection = createGetCollection({
	liveCollections,
	logger
});
createGetEntry({
	liveCollections,
	logger
});
var render = createRenderEntry({ logger });
createGetLiveCollection({ liveCollections });
createGetLiveEntry({ liveCollections });
// Source/pages/docs/[...slug].astro
var ____slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://Aphrodite.PlayForm.Cloud");
async function getStaticPaths() {
	return (await getCollection("Docs")).map((Doc) => ({
		params: { slug: Doc.id === "index" ? void 0 : Doc.id },
		props: { Doc }
	}));
}
var $$Component = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Component;
	const { Doc } = Astro.props;
	const { Content, headings } = await render(Doc);
	const Toc = headings.filter(({ depth }) => depth === 2 || depth === 3).map(({ depth, slug, text }) => ({
		Depth: depth,
		Id: slug,
		Label: text
	}));
	const HasToc = Toc.length > 1;
	const WipDocs = /* @__PURE__ */ new Set(["centers"]);
	const Pages = await getCollection("Docs");
	const IsFolderIndex = (Id) => Pages.some((Page) => Page.id.startsWith(`${Id}/`));
	const GroupKeyOf = (Id) => {
		const Segments = Id.split("/");
		switch (true) {
			case Segments.length >= 3: return Segments.slice(1, -1).join("/");
			case Segments.length === 2 && IsFolderIndex(Id): return Segments[1];
			default: return;
		}
	};
	const GroupLabels = new Map(Pages.filter((Page) => IsFolderIndex(Page.id)).map((Page) => [Page.id.split("/").slice(1).join("/"), Page.data.title]));
	const Sections = [...Pages.sort((A, B) => A.id.localeCompare(B.id)).reduce((Groups, Page) => {
		const Key = GroupKeyOf(Page.id);
		Groups.set(Page.data.section, [...Groups.get(Page.data.section) ?? [], {
			Id: Page.id,
			Title: Page.data.title,
			Wip: WipDocs.has(Page.id),
			Group: Key === void 0 ? void 0 : GroupLabels.get(Key) ?? Key
		}]);
		return Groups;
	}, /* @__PURE__ */ new Map()).entries()].sort(([A], [B]) => A === "Overview" ? -1 : B === "Overview" ? 1 : A.localeCompare(B)).map(([Name, Entries]) => ({
		Entries,
		Name
	}));
	const Sequence = Sections.flatMap(({ Entries }) => Entries);
	const Position = Sequence.findIndex((Entry) => Entry.Id === Doc.id);
	const Previous = Position > 0 ? Sequence[Position - 1] : void 0;
	const Next = Position > -1 && Position < Sequence.length - 1 ? Sequence[Position + 1] : void 0;
	const Href = (Id) => Id === "index" ? "/docs/" : `/docs/${Id}/`;
	const Diagram = {
		"architecture/01-startup": {
			Id: "ccr-pipeline",
			Label: "M1 // CCR PIPELINE",
			Svg: ccr_pipeline_default
		},
		"ccr/lifecycle": {
			Id: "ccr-pipeline",
			Label: "M1 // CCR PIPELINE",
			Svg: ccr_pipeline_default
		},
		"ccr/marker-format": {
			Id: "marker-format",
			Label: "M6 // MARKER FORMAT",
			Svg: marker_format_default
		},
		"architecture/07-config-resolution": {
			Id: "config-resolution",
			Label: "M7 // CONFIG RESOLUTION",
			Svg: config_resolution_default
		},
		"architecture/05-ccr-lifecycle": {
			Id: "session-lifecycle",
			Label: "M8 // SESSION LIFECYCLE",
			Svg: session_lifecycle_default
		},
		"proxy/architecture": {
			Id: "dual-listener",
			Label: "M5 // DUAL LISTENER",
			Svg: dual_listener_default
		}
	}[Doc.id];
	const IsSectionIndex = Doc.id !== "index" && Doc.id.toLowerCase() === Doc.data.section.toLowerCase();
	const IsIndex = Doc.id === "index" || IsSectionIndex;
	const IndexEntries = IsSectionIndex ? [{
		Name: Doc.data.section,
		Entries: (Sections.find(({ Name }) => Name.toLowerCase() === Doc.data.section.toLowerCase())?.Entries ?? []).filter((Entry) => Entry.Id !== Doc.id)
	}] : Sections.filter(({ Name }) => Name !== "Overview");
	const Purpose = (Body) => {
		for (const Line of (Body ?? "").split("\n")) {
			const Trimmed = Line.trim();
			if (!Trimmed || Trimmed.startsWith("#") || Trimmed.startsWith("|") || Trimmed.startsWith("<") || Trimmed.startsWith("```") || Trimmed.startsWith(">")) continue;
			const Text = Trimmed.replace(/[*`_[\]()]/g, "").replace(/\s+/g, " ").trim();
			const Cut = Text.indexOf(". ");
			return (Cut > 0 ? Text.slice(0, Cut + 1) : Text).slice(0, 220);
		}
		return "";
	};
	const Purposes = new Map(Pages.map((Page) => [Page.id, Purpose(Page.body)]));
	const SelfPurpose = Purposes.get(Doc.id) ?? "";
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": `${Doc.data.title} - Aphrodite`,
		"Description": SelfPurpose || `Aphrodite documentation - ${Doc.data.section}.`,
		"data-astro-cid-v5c56ei3": true
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<main class="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:py-24" data-astro-cid-v5c56ei3> <!-- Mobile: the docs index opens as a full-screen drawer --><button id="docs-nav-toggle" class="mb-8 flex w-full items-center justify-between border-4 border-blood-crimson bg-carbon-void px-4 py-2.5 font-mono text-base font-black uppercase tracking-widest text-bone-newsprint shadow-[4px_4px_0px_#000] lg:hidden" aria-expanded="false" aria-controls="docs-drawer" data-astro-cid-v5c56ei3>
DOCUMENTATION INDEX
<span aria-hidden="true" data-astro-cid-v5c56ei3>+</span> </button> <nav aria-label="Breadcrumb" class="flex flex-wrap items-center gap-2 font-mono text-base" data-astro-cid-v5c56ei3> <a class="text-stamped-canary underline decoration-2 underline-offset-4 hover:text-bone-white" href="/docs/" data-astro-cid-v5c56ei3>
DOCS
</a> <span class="text-zinc-dust" aria-hidden="true" data-astro-cid-v5c56ei3>/</span> <span class="uppercase tracking-widest text-zinc-dust" data-astro-cid-v5c56ei3>${Doc.data.section}</span> ${!IsIndex && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate` <span class="text-zinc-dust" aria-hidden="true" data-astro-cid-v5c56ei3>
/
</span> <span class="uppercase tracking-widest text-bone-white" data-astro-cid-v5c56ei3>${Doc.data.title}</span> ` })}`} </nav> <!-- Three tracks once the outline has a home: the docs index, the
		     reading column, and the page's own outline. Without an outline the
		     third track is not reserved, so a short page keeps its full measure. --> <div${addAttribute(`mt-10 flex flex-col gap-16 lg:grid lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-x-20 ${HasToc ? "xl:grid-cols-[17rem_minmax(0,1fr)_15rem] xl:gap-x-12" : ""}`, "class")} data-astro-cid-v5c56ei3> <!-- Desktop: sticky sidebar. The index only - the page's outline
			     lives in the right rail (xl) and the disclosure (below xl), so
			     no viewport ever shows the same list twice. --><aside class="hidden lg:block" data-astro-cid-v5c56ei3> <div class="sticky top-24" data-astro-cid-v5c56ei3> ${renderComponent($$result, "DocsSidebar", $$DocsSidebar, {
		"Sections": Sections,
		"CurrentId": Doc.id,
		"Label": "Documentation sections",
		"data-astro-cid-v5c56ei3": true
	})} </div> </aside> <div class="min-w-0" data-astro-cid-v5c56ei3> <!-- Page header: the tape-stamp section tag above the crimson rule.
			     pt-12 pushes the whole block clear of the breadcrumb row above -
			     the section stamp's -top-7 rise previously reached the
			     breadcrumb text at the mt-10 gap. --><header class="relative pt-12" data-astro-cid-v5c56ei3> <span class="absolute left-0 top-0 z-20 -rotate-1 border border-black bg-stamped-canary px-3 py-0.5 text-base font-black uppercase tracking-widest text-soot-black shadow-[2px_2px_0px_#000]" data-astro-cid-v5c56ei3> ${Doc.data.section} </span> ${WipDocs.has(Doc.id) && renderTemplate`<span class="absolute right-0 top-0 z-20 rotate-1 border border-black bg-raw-blood px-3 py-0.5 text-base font-black uppercase tracking-widest text-bone-white shadow-[2px_2px_0px_#000]" title="Roadmap: partly unimplemented" data-astro-cid-v5c56ei3>
WIP
</span>`} <h1 class="border-b-4 border-blood-crimson pb-6 font-headline text-3xl font-black uppercase tracking-tight text-bone-white drop-shadow-[3px_3px_0px_#520612] sm:text-4xl" data-astro-cid-v5c56ei3> ${Doc.data.title} </h1> </header> ${Diagram && renderTemplate`<figure class="relative z-10 mt-16 border border-oxblood-dark bg-soot-black p-4"${addAttribute(Diagram.Id, "data-diagram")} data-astro-cid-v5c56ei3> <div class="overflow-x-auto [&amp;_svg]:h-auto [&amp;_svg]:max-w-full" data-astro-cid-v5c56ei3>${unescapeHTML(Diagram.Svg)}</div> <figcaption class="mt-3 font-mono text-base font-black uppercase tracking-widest text-zinc-dust" data-astro-cid-v5c56ei3> ${Diagram.Label} </figcaption> </figure>`} <!-- Index pages: the zine index cards with one-line purposes --> ${IsIndex && renderTemplate`<section aria-label="Section index" class="relative mt-16" data-astro-cid-v5c56ei3> <h2 class="font-mono text-base font-black uppercase tracking-widest text-zinc-dust" data-astro-cid-v5c56ei3> ${IsSectionIndex ? "IN THIS SECTION" : "THE SECTIONS"} </h2> <div class="mt-8 grid gap-16 sm:grid-cols-2 sm:gap-x-8" data-astro-cid-v5c56ei3> ${IndexEntries.map(({ Name, Entries }, GridIndex) => renderTemplate`<div${addAttribute(`relative border-4 border-blood-crimson bg-carbon-void p-6 ${GridIndex % 2 === 0 ? "zine-box-subtle" : "zine-box-crimson"}`, "class")} data-astro-cid-v5c56ei3> <span class="absolute -top-3.5 left-4 z-20 -rotate-1 border border-black bg-raw-blood px-3 py-0.5 text-base font-black uppercase tracking-widest text-bone-white shadow-[2px_2px_0px_#000]" data-astro-cid-v5c56ei3> ${Name} </span> <ul class="mt-2 flex flex-col gap-4" data-astro-cid-v5c56ei3> ${Entries.filter((Entry) => Entry.Id !== Doc.id).map((Entry) => renderTemplate`<li class="flex flex-col gap-1" data-astro-cid-v5c56ei3> <a${addAttribute(Href(Entry.Id), "href")}${addAttribute(Entry.Id === Doc.id ? "page" : void 0, "aria-current")}${addAttribute(`font-mono text-base font-bold tracking-wide ${Entry.Id === Doc.id ? "text-stamped-canary underline decoration-2 underline-offset-4" : "text-bone-white hover:text-stamped-canary"}`, "class")} data-astro-cid-v5c56ei3> ${Entry.Title} ${Entry.Wip && renderTemplate`<span class="ml-2 inline-block border border-black bg-stamped-canary px-1.5 align-middle font-mono text-[13px] font-black uppercase leading-tight tracking-widest text-soot-black" title="Roadmap: partly unimplemented" data-astro-cid-v5c56ei3>
WIP
</span>`} </a> ${Purposes.get(Entry.Id) && renderTemplate`<p class="font-body text-base leading-relaxed text-zinc-dust" data-astro-cid-v5c56ei3> ${Purposes.get(Entry.Id)} </p>`} </li>`)} </ul> </div>`)} </div> </section>`} <!-- Narrow viewports: the page's outline as a disclosure. Same
				     generated list as the right rail - the page derives it once
				     and presents it twice, and only one is ever visible. --> ${HasToc && renderTemplate`<details class="group mt-16 border-4 border-blood-crimson bg-carbon-void xl:hidden" data-astro-cid-v5c56ei3> <summary class="flex cursor-pointer list-none items-center justify-between px-5 py-3 font-mono text-base font-black uppercase tracking-widest text-stamped-canary [&amp;::-webkit-details-marker]:hidden" data-astro-cid-v5c56ei3>
ON THIS PAGE
<span aria-hidden="true" class="transition-transform group-open:rotate-45" data-astro-cid-v5c56ei3>
+
</span> </summary> <ul class="flex flex-col gap-1 border-t border-oxblood-dark px-5 py-4" data-astro-cid-v5c56ei3> ${Toc.map(({ Depth, Id, Label }) => renderTemplate`<li${addAttribute(Depth === 3 ? "pl-4" : void 0, "class")} data-astro-cid-v5c56ei3> <a${addAttribute(`#${Id}`, "href")}${addAttribute(Id, "data-outline-link")} class="block px-2 py-0.5 font-mono text-base leading-relaxed text-zinc-dust transition-colors hover:text-bone-white aria-[current=location]:bg-raw-blood aria-[current=location]:text-bone-white" data-astro-cid-v5c56ei3> ${Label} </a> </li>`)} </ul> </details>`} <!-- The reading column --> <article class="docs-prose mt-16 min-w-0" data-astro-cid-v5c56ei3> ${renderComponent($$result, "Content", Content, { "data-astro-cid-v5c56ei3": true })} </article> <!-- Prev / next: the zine cards at the bottom of the reading column --> ${(Previous || Next) && renderTemplate`<nav aria-label="Docs pagination" class="mt-32 grid gap-16 border-t-4 border-dashed border-oxblood-dark pt-16 sm:grid-cols-2 sm:gap-8" data-astro-cid-v5c56ei3> ${Previous ? renderTemplate`<a${addAttribute(Href(Previous.Id), "href")} rel="prev" class="group relative border-4 border-blood-crimson bg-carbon-void p-6 zine-box-subtle transition-transform hover:-translate-y-1" data-astro-cid-v5c56ei3> <span class="absolute -top-3.5 left-4 z-20 -rotate-1 border border-black bg-raw-blood px-3 py-0.5 text-base font-black uppercase tracking-widest text-bone-white shadow-[2px_2px_0px_#000]" data-astro-cid-v5c56ei3>
PREV
</span> <span class="mt-2 block font-mono text-base font-bold text-bone-white group-hover:text-stamped-canary" data-astro-cid-v5c56ei3> ${Previous.Title} </span> <span class="mt-1 block font-mono text-base uppercase tracking-widest text-zinc-dust" data-astro-cid-v5c56ei3> ${Href(Previous.Id)} </span> </a>` : renderTemplate`<span aria-hidden="true" data-astro-cid-v5c56ei3></span>`} ${Next ? renderTemplate`<a${addAttribute(Href(Next.Id), "href")} rel="next" class="group relative border-4 border-blood-crimson bg-carbon-void p-6 text-right zine-box-subtle transition-transform hover:-translate-y-1" data-astro-cid-v5c56ei3> <span class="absolute -top-3.5 right-4 z-20 rotate-1 border border-black bg-stamped-canary px-3 py-0.5 text-base font-black uppercase tracking-widest text-soot-black shadow-[2px_2px_0px_#000]" data-astro-cid-v5c56ei3>
NEXT
</span> <span class="mt-2 block font-mono text-base font-bold text-bone-white group-hover:text-stamped-canary" data-astro-cid-v5c56ei3> ${Next.Title} </span> <span class="mt-1 block font-mono text-base uppercase tracking-widest text-zinc-dust" data-astro-cid-v5c56ei3> ${Href(Next.Id)} </span> </a>` : renderTemplate`<span aria-hidden="true" data-astro-cid-v5c56ei3></span>`} </nav>`} </div> <!-- Wide viewports: the in-page outline as a sticky right rail. The
			     entries come from the page's own headings, so the rail can never
			     drift from the anchors the renderer emitted. --> ${HasToc && renderTemplate`<aside class="hidden xl:block" data-astro-cid-v5c56ei3> <div class="sticky top-24" data-astro-cid-v5c56ei3> <nav aria-label="On this page" class="relative border-4 border-blood-crimson bg-carbon-void p-5 zine-box-subtle" data-astro-cid-v5c56ei3> <p class="font-mono text-base font-black uppercase tracking-widest text-stamped-canary" data-astro-cid-v5c56ei3>
ON THIS PAGE
</p> <ul class="mt-3 flex max-h-[calc(100vh-16rem)] flex-col gap-1 overflow-y-auto border-l border-oxblood-dark pl-3" data-astro-cid-v5c56ei3> ${Toc.map(({ Depth, Id, Label }) => renderTemplate`<li${addAttribute(Depth === 3 ? "pl-3" : void 0, "class")} data-astro-cid-v5c56ei3> <a${addAttribute(`#${Id}`, "href")}${addAttribute(Id, "data-outline-link")} class="block px-2 py-0.5 font-mono text-base leading-relaxed text-zinc-dust transition-colors hover:text-bone-white aria-[current=location]:bg-raw-blood aria-[current=location]:text-bone-white" data-astro-cid-v5c56ei3> ${Label} </a> </li>`)} </ul> </nav> </div> </aside>`} </div> </main>  <div id="docs-drawer" class="fixed inset-0 z-50 hidden lg:hidden" role="dialog" aria-modal="true" aria-label="Documentation index" data-astro-cid-v5c56ei3> <div class="absolute inset-0 bg-soot-black/90" data-drawer-close data-astro-cid-v5c56ei3></div> <div class="absolute inset-y-0 left-0 w-80 max-w-[85vw] overflow-y-auto border-r-4 border-blood-crimson bg-carbon-void p-6" data-astro-cid-v5c56ei3> <button data-drawer-close class="mb-8 border-2 border-black bg-raw-blood px-3 py-1.5 font-mono text-base font-black uppercase tracking-widest text-bone-white shadow-[3px_3px_0px_#000]" data-astro-cid-v5c56ei3>
CLOSE
</button> ${renderComponent($$result, "DocsSidebar", $$DocsSidebar, {
		"Sections": Sections,
		"CurrentId": Doc.id,
		"Label": "Documentation sections (mobile)",
		"data-astro-cid-v5c56ei3": true
	})} </div> </div> ${renderComponent($$result, "ZineDiagramNav", $$ZineDiagramNav, { "data-astro-cid-v5c56ei3": true })} ` })}${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/docs/[...slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/docs/[...slug].astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/docs/[...slug].astro";
var $$url = "/docs/[...slug]";
// \0virtual:astro:page:Source/pages/docs/[...slug]@_@astro
var ____exports = /* @__PURE__ */ __exportAll({ page: () => page });
var page = () => ____slug__exports;
export { level as a, VALID_SUPPORTED_FORMATS as i, DEFAULT_HASH_PROPS as n, isCollectingStaticImages as o, page, DEFAULT_OUTPUT_FORMAT as r, recordStaticImage as s, ____exports as t };
