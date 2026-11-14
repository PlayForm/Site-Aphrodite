import { i as __exportAll, n as createAstro, r as createComponent, t as renderScript } from "./compiler_CWd3RCEz.mjs";
import { C as addAttribute, T as unescapeHTML, _ as maybeRenderHead, g as renderTemplate, l as renderComponent } from "./server_CNuTCIdA.mjs";
import { n as $$ZineKicker, t as $$Base } from "./Base_7T8xAMbn.mjs";
import { t as $$PageShell } from "./PageShell_F2VgyKk2.mjs";
import { t as $$Related } from "./Related_Bi8U0sIn.mjs";
import { t as $$SectionNav } from "./SectionNav_D95-gRvm.mjs";
import { t as $$ZineBox } from "./ZineBox_BY6_l99A.mjs";
import { t as $$ZinePipeline } from "./ZinePipeline_DIqNvfDx.mjs";
import { t as $$ZineSource } from "./ZineSource_C5IzW2TL.mjs";
import { t as $$ZineSplit } from "./ZineSplit_B-uxYc4k.mjs";
import { t as $$ZineTape } from "./ZineTape_d6PHbVV6.mjs";
// Source/Component/ZineStatBar.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineStatBar = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineStatBar;
	const { Label, Ratio, Percent, Color = "teal", Fill = "static" } = Astro.props;
	const Palette = {
		teal: "bg-weathered-teal",
		raw: "bg-raw-blood",
		canary: "bg-stamped-canary"
	}[Color];
	const Text = {
		teal: "text-weathered-teal",
		raw: "text-raw-blood",
		canary: "text-stamped-canary"
	}[Color];
	return renderTemplate`${maybeRenderHead($$result)}<div> <div class="mb-1 flex justify-between text-base font-bold"> <span class="text-bone-newsprint">${Label}</span> <span${addAttribute(Text, "class")}>${Ratio}</span> </div> <div class="flex h-4 w-full overflow-hidden border border-oxblood-dark bg-soot-black"> ${Fill === "scroll" ? renderTemplate`<div class="zine-stat-fill h-full" style="width: 0%;"${addAttribute(Percent, "data-stat-fill")} aria-hidden="true"></div>` : renderTemplate`<div${addAttribute(`h-full ${Palette}`, "class")}${addAttribute(`width: ${Percent}%;`, "style")}></div>`} </div> </div>${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineStatBar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineStatBar.astro", void 0);
// Source/Content/Mermaid/preview-flow.svg?raw
var preview_flow_default = "<svg id=\"aphrodite-diagram-preview-flow\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" class=\"flowchart\"\n	viewBox=\"-203.76113891601562 -28 2109.6830139160156 550.2999877929688\" role=\"graphics-document document\"\n	aria-roledescription=\"flowchart-v2\">\n	<style>\n		#aphrodite-diagram-preview-flow {\n			font-family: JetBrains Mono, ui-monospace, monospace;\n			font-size: 16px;\n			fill: #dedbd2;\n		}\n\n		@keyframes edge-animation-frame {\n			from {\n				stroke-dashoffset: 0;\n			}\n		}\n\n		@keyframes dash {\n			to {\n				stroke-dashoffset: 0;\n			}\n		}\n\n		#aphrodite-diagram-preview-flow .edge-animation-slow {\n			stroke-dasharray: 9, 5 !important;\n			stroke-dashoffset: 900;\n			animation: dash 50s linear infinite;\n			stroke-linecap: round;\n		}\n\n		#aphrodite-diagram-preview-flow .edge-animation-fast {\n			stroke-dasharray: 9, 5 !important;\n			stroke-dashoffset: 900;\n			animation: dash 20s linear infinite;\n			stroke-linecap: round;\n		}\n\n		#aphrodite-diagram-preview-flow .error-icon {\n			fill: hsl(75, 11.1111111111%, 12.0588235294%);\n		}\n\n		#aphrodite-diagram-preview-flow .error-text {\n			fill: rgb(222.5416666667, 220.8333333334, 227.6666666667);\n			stroke: rgb(222.5416666667, 220.8333333334, 227.6666666667);\n		}\n\n		#aphrodite-diagram-preview-flow .edge-thickness-normal {\n			stroke-width: 1px;\n		}\n\n		#aphrodite-diagram-preview-flow .edge-thickness-thick {\n			stroke-width: 3.5px;\n		}\n\n		#aphrodite-diagram-preview-flow .edge-pattern-solid {\n			stroke-dasharray: 0;\n		}\n\n		#aphrodite-diagram-preview-flow .edge-thickness-invisible {\n			stroke-width: 0;\n			fill: none;\n		}\n\n		#aphrodite-diagram-preview-flow .edge-pattern-dashed {\n			stroke-dasharray: 3;\n		}\n\n		#aphrodite-diagram-preview-flow .edge-pattern-dotted {\n			stroke-dasharray: 2;\n		}\n\n		#aphrodite-diagram-preview-flow .marker {\n			fill: #3d040d;\n			stroke: #3d040d;\n		}\n\n		#aphrodite-diagram-preview-flow .marker.cross {\n			stroke: #3d040d;\n		}\n\n		#aphrodite-diagram-preview-flow svg {\n			font-family: JetBrains Mono, ui-monospace, monospace;\n			font-size: 16px;\n		}\n\n		#aphrodite-diagram-preview-flow p {\n			margin: 0;\n		}\n\n		#aphrodite-diagram-preview-flow .label {\n			font-family: JetBrains Mono, ui-monospace, monospace;\n			color: #dedbd2;\n		}\n\n		#aphrodite-diagram-preview-flow .cluster-label text {\n			fill: rgb(222.5416666667, 220.8333333334, 227.6666666667);\n		}\n\n		#aphrodite-diagram-preview-flow .cluster-label span {\n			color: rgb(222.5416666667, 220.8333333334, 227.6666666667);\n		}\n\n		#aphrodite-diagram-preview-flow .cluster-label span p {\n			background-color: transparent;\n		}\n\n		#aphrodite-diagram-preview-flow .label text,\n		#aphrodite-diagram-preview-flow span {\n			fill: #dedbd2;\n			color: #dedbd2;\n		}\n\n		#aphrodite-diagram-preview-flow .node rect,\n		#aphrodite-diagram-preview-flow .node circle,\n		#aphrodite-diagram-preview-flow .node ellipse,\n		#aphrodite-diagram-preview-flow .node polygon,\n		#aphrodite-diagram-preview-flow .node path {\n			fill: #111014;\n			stroke: #7a0a1e;\n			stroke-width: 1px;\n		}\n\n		#aphrodite-diagram-preview-flow .rough-node .label text,\n		#aphrodite-diagram-preview-flow .node .label text,\n		#aphrodite-diagram-preview-flow .image-shape .label,\n		#aphrodite-diagram-preview-flow .icon-shape .label {\n			text-anchor: middle;\n		}\n\n		#aphrodite-diagram-preview-flow .node .katex path {\n			fill: #000;\n			stroke: #000;\n			stroke-width: 1px;\n		}\n\n		#aphrodite-diagram-preview-flow .rough-node .label,\n		#aphrodite-diagram-preview-flow .node .label,\n		#aphrodite-diagram-preview-flow .image-shape .label,\n		#aphrodite-diagram-preview-flow .icon-shape .label {\n			text-align: center;\n		}\n\n		#aphrodite-diagram-preview-flow .node.clickable {\n			cursor: pointer;\n		}\n\n		#aphrodite-diagram-preview-flow .root .anchor path {\n			fill: #3d040d !important;\n			stroke-width: 0;\n			stroke: #3d040d;\n		}\n\n		#aphrodite-diagram-preview-flow .arrowheadPath {\n			fill: #0b0b0b;\n		}\n\n		#aphrodite-diagram-preview-flow .edgePaths .path {\n			stroke: #3d040d;\n			stroke-width: 1px;\n		}\n\n		#aphrodite-diagram-preview-flow .flowchart-link {\n			stroke: #3d040d;\n			fill: none;\n		}\n\n		#aphrodite-diagram-preview-flow .edgeLabel {\n			background-color: #111014;\n			text-align: center;\n		}\n\n		#aphrodite-diagram-preview-flow .edgeLabel p {\n			background-color: #111014;\n		}\n\n		#aphrodite-diagram-preview-flow .edgeLabel rect {\n			opacity: 0.5;\n			background-color: #111014;\n			fill: #111014;\n		}\n\n		#aphrodite-diagram-preview-flow .labelBkg {\n			background-color: rgba(17, 16, 20, 0.5);\n		}\n\n		#aphrodite-diagram-preview-flow .cluster rect {\n			fill: transparent;\n			stroke: #7a0a1e;\n			stroke-width: 1px;\n		}\n\n		#aphrodite-diagram-preview-flow .cluster text {\n			fill: rgb(222.5416666667, 220.8333333334, 227.6666666667);\n		}\n\n		#aphrodite-diagram-preview-flow .cluster span {\n			color: rgb(222.5416666667, 220.8333333334, 227.6666666667);\n		}\n\n		#aphrodite-diagram-preview-flow .node .collapsed-indicator {\n			fill: #7a0a1e;\n			stroke: none;\n			opacity: 0.6;\n		}\n\n		#aphrodite-diagram-preview-flow .node .collapsed-separator {\n			stroke: #7a0a1e;\n			stroke-width: 0.75px;\n		}\n\n		#aphrodite-diagram-preview-flow div.mermaidTooltip {\n			position: absolute;\n			text-align: center;\n			max-width: 200px;\n			padding: 2px;\n			font-family: JetBrains Mono, ui-monospace, monospace;\n			font-size: 12px;\n			background: hsl(75, 11.1111111111%, 12.0588235294%);\n			border: 1px solid hsl(75, 0%, 2.0588235294%);\n			border-radius: 2px;\n			pointer-events: none;\n			z-index: 100;\n		}\n\n		#aphrodite-diagram-preview-flow .flowchartTitleText {\n			text-anchor: middle;\n			font-size: 18px;\n			fill: #dedbd2;\n		}\n\n		#aphrodite-diagram-preview-flow rect.text {\n			fill: none;\n			stroke-width: 0;\n		}\n\n		#aphrodite-diagram-preview-flow .icon-shape,\n		#aphrodite-diagram-preview-flow .image-shape {\n			background-color: #111014;\n			text-align: center;\n		}\n\n		#aphrodite-diagram-preview-flow .icon-shape p,\n		#aphrodite-diagram-preview-flow .image-shape p {\n			background-color: #111014;\n			padding: 2px;\n		}\n\n		#aphrodite-diagram-preview-flow .icon-shape .label rect,\n		#aphrodite-diagram-preview-flow .image-shape .label rect {\n			opacity: 0.5;\n			background-color: #111014;\n			fill: #111014;\n		}\n\n		#aphrodite-diagram-preview-flow .label-icon {\n			display: inline-block;\n			height: 1em;\n			overflow: visible;\n			vertical-align: -0.125em;\n		}\n\n		#aphrodite-diagram-preview-flow .node .label-icon path {\n			fill: currentColor;\n			stroke: revert;\n			stroke-width: revert;\n		}\n\n		#aphrodite-diagram-preview-flow .node .neo-node {\n			stroke: #7a0a1e;\n		}\n\n		#aphrodite-diagram-preview-flow [data-look=\"neo\"].node rect,\n		#aphrodite-diagram-preview-flow [data-look=\"neo\"].cluster rect,\n		#aphrodite-diagram-preview-flow [data-look=\"neo\"].node polygon {\n			stroke: #7a0a1e;\n			filter: drop-shadow(1px 2px 2px rgba(185, 185, 185, 1));\n		}\n\n		#aphrodite-diagram-preview-flow [data-look=\"neo\"].swimlane.cluster rect {\n			filter: none;\n		}\n\n		#aphrodite-diagram-preview-flow [data-look=\"neo\"].node path {\n			stroke: #7a0a1e;\n			stroke-width: 1px;\n		}\n\n		#aphrodite-diagram-preview-flow [data-look=\"neo\"].node .outer-path {\n			filter: drop-shadow(1px 2px 2px rgba(185, 185, 185, 1));\n		}\n\n		#aphrodite-diagram-preview-flow [data-look=\"neo\"].node .neo-line path {\n			stroke: #7a0a1e;\n			filter: none;\n		}\n\n		#aphrodite-diagram-preview-flow [data-look=\"neo\"].node circle {\n			stroke: #7a0a1e;\n			filter: drop-shadow(1px 2px 2px rgba(185, 185, 185, 1));\n		}\n\n		#aphrodite-diagram-preview-flow [data-look=\"neo\"].node circle .state-start {\n			fill: #000000;\n		}\n\n		#aphrodite-diagram-preview-flow [data-look=\"neo\"].icon-shape .icon {\n			fill: #7a0a1e;\n			filter: drop-shadow(1px 2px 2px rgba(185, 185, 185, 1));\n		}\n\n		#aphrodite-diagram-preview-flow [data-look=\"neo\"].icon-shape .icon-neo path {\n			stroke: #7a0a1e;\n			filter: drop-shadow(1px 2px 2px rgba(185, 185, 185, 1));\n		}\n\n		#aphrodite-diagram-preview-flow .node rect,\n		#aphrodite-diagram-preview-flow .node polygon,\n		#aphrodite-diagram-preview-flow .node circle,\n		#aphrodite-diagram-preview-flow .node path {\n			stroke-width: 2px;\n			rx: 0;\n			ry: 0;\n		}\n\n		#aphrodite-diagram-preview-flow svg {\n			background-color: transparent;\n		}\n\n		#aphrodite-diagram-preview-flow .edgeLabel rect {\n			fill: rgb(17, 16, 20);\n			stroke: none;\n		}\n\n		#aphrodite-diagram-preview-flow .arrowheadPath {\n			fill: rgb(222, 219, 210);\n		}\n\n		#aphrodite-diagram-preview-flow :root {\n			--mermaid-font-family: \"trebuchet ms\", verdana, arial, sans-serif;\n		}\n	</style>\n	<g>\n		<marker id=\"aphrodite-diagram-preview-flow_flowchart-v2-pointEnd\" class=\"marker flowchart-v2\"\n			viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"8\" markerHeight=\"8\"\n			orient=\"auto\">\n			<path d=\"M 0 0 L 10 5 L 0 10 z\" class=\"arrowMarkerPath\" style=\"stroke-width: 1; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-preview-flow_flowchart-v2-pointStart\" class=\"marker flowchart-v2\"\n			viewBox=\"0 0 10 10\" refX=\"4.5\" refY=\"5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"8\" markerHeight=\"8\"\n			orient=\"auto\">\n			<path d=\"M 0 5 L 10 10 L 10 0 z\" class=\"arrowMarkerPath\" style=\"stroke-width: 1; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-preview-flow_flowchart-v2-pointEnd-margin\" class=\"marker flowchart-v2\"\n			viewBox=\"0 0 11.5 14\" refX=\"11.5\" refY=\"7\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10.5\" markerHeight=\"14\"\n			orient=\"auto\">\n			<path d=\"M 0 0 L 11.5 7 L 0 14 z\" class=\"arrowMarkerPath\"\n				style=\"stroke-width: 0; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-preview-flow_flowchart-v2-pointStart-margin\" class=\"marker flowchart-v2\"\n			viewBox=\"0 0 11.5 14\" refX=\"1\" refY=\"7\" markerUnits=\"userSpaceOnUse\" markerWidth=\"11.5\" markerHeight=\"14\"\n			orient=\"auto\">\n			<polygon points=\"0,7 11.5,14 11.5,0\" class=\"arrowMarkerPath\"\n				style=\"stroke-width: 0; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-preview-flow_flowchart-v2-circleEnd\" class=\"marker flowchart-v2\"\n			viewBox=\"0 0 10 10\" refX=\"11\" refY=\"5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"11\" markerHeight=\"11\"\n			orient=\"auto\">\n			<circle cx=\"5\" cy=\"5\" r=\"5\" class=\"arrowMarkerPath\" style=\"stroke-width: 1; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-preview-flow_flowchart-v2-circleStart\" class=\"marker flowchart-v2\"\n			viewBox=\"0 0 10 10\" refX=\"-1\" refY=\"5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"11\" markerHeight=\"11\"\n			orient=\"auto\">\n			<circle cx=\"5\" cy=\"5\" r=\"5\" class=\"arrowMarkerPath\" style=\"stroke-width: 1; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-preview-flow_flowchart-v2-circleEnd-margin\" class=\"marker flowchart-v2\"\n			viewBox=\"0 0 10 10\" refY=\"5\" refX=\"12.25\" markerUnits=\"userSpaceOnUse\" markerWidth=\"14\" markerHeight=\"14\"\n			orient=\"auto\">\n			<circle cx=\"5\" cy=\"5\" r=\"5\" class=\"arrowMarkerPath\" style=\"stroke-width: 0; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-preview-flow_flowchart-v2-circleStart-margin\" class=\"marker flowchart-v2\"\n			viewBox=\"0 0 10 10\" refX=\"-2\" refY=\"5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"14\" markerHeight=\"14\"\n			orient=\"auto\">\n			<circle cx=\"5\" cy=\"5\" r=\"5\" class=\"arrowMarkerPath\" style=\"stroke-width: 0; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-preview-flow_flowchart-v2-crossEnd\" class=\"marker cross flowchart-v2\"\n			viewBox=\"0 0 11 11\" refX=\"12\" refY=\"5.2\" markerUnits=\"userSpaceOnUse\" markerWidth=\"11\" markerHeight=\"11\"\n			orient=\"auto\">\n			<path d=\"M 1,1 l 9,9 M 10,1 l -9,9\" class=\"arrowMarkerPath\"\n				style=\"stroke-width: 2; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-preview-flow_flowchart-v2-crossStart\" class=\"marker cross flowchart-v2\"\n			viewBox=\"0 0 11 11\" refX=\"-1\" refY=\"5.2\" markerUnits=\"userSpaceOnUse\" markerWidth=\"11\" markerHeight=\"11\"\n			orient=\"auto\">\n			<path d=\"M 1,1 l 9,9 M 10,1 l -9,9\" class=\"arrowMarkerPath\"\n				style=\"stroke-width: 2; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-preview-flow_flowchart-v2-crossEnd-margin\" class=\"marker cross flowchart-v2\"\n			viewBox=\"0 0 15 15\" refX=\"17.7\" refY=\"7.5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"12\" markerHeight=\"12\"\n			orient=\"auto\">\n			<path d=\"M 1,1 L 14,14 M 1,14 L 14,1\" class=\"arrowMarkerPath\" style=\"stroke-width: 2.5;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-preview-flow_flowchart-v2-crossStart-margin\" class=\"marker cross flowchart-v2\"\n			viewBox=\"0 0 15 15\" refX=\"-3.5\" refY=\"7.5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"12\" markerHeight=\"12\"\n			orient=\"auto\">\n			<path d=\"M 1,1 L 14,14 M 1,14 L 14,1\" class=\"arrowMarkerPath\"\n				style=\"stroke-width: 2.5; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<g class=\"root\">\n			<g class=\"clusters\" />\n			<g class=\"edges edgePaths\">\n				<path\n					d=\"M419.703125,211.278568812779L432.6320571881345,211.278568812779Q439.703125,211.278568812779 439.703125,204.20750100091354L439.703125,40.571067811865476Q439.703125,33.5 446.7741928118655,33.5L674.6484375,33.5L955.640625,33.5\"\n					id=\"aphrodite-diagram-preview-flow-L_ENTRY_ERROR_0\"\n					class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\"\n					style=\"stroke-dasharray: 0 0 704.3878173828125 4; stroke-dashoffset: 0;;\" data-edge=\"true\"\n					data-et=\"edge\" data-id=\"L_ENTRY_ERROR_0\"\n					data-points=\"W3sieCI6NDE5LjcwMzEyNSwieSI6MjExLjI3ODU2ODgxMjc3OX0seyJ4Ijo0MzkuNzAzMTI1LCJ5IjoyMTEuMjc4NTY4ODEyNzc5fSx7IngiOjQzOS43MDMxMjUsInkiOjMzLjV9LHsieCI6Njc0LjY0ODQzNzUsInkiOjMzLjV9LHsieCI6OTU5LjY0MDYyNSwieSI6MzMuNX1d\"\n					data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-preview-flow_flowchart-v2-pointEnd-margin)\" />\n				<path\n					d=\"M419.703125,222.10714067731584L452.6320571881345,222.10714067731584Q459.703125,222.10714067731584 459.703125,215.03607286545036L459.703125,132.37106704892602Q459.703125,125.29999923706055 466.7741928118655,125.29999923706055L674.6484375,125.29999923706055L885.59375,125.29999923706055\"\n					id=\"aphrodite-diagram-preview-flow-L_ENTRY_CODE_0\"\n					class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\"\n					style=\"stroke-dasharray: 0 0 553.3695068359375 4; stroke-dashoffset: 0;;\" data-edge=\"true\"\n					data-et=\"edge\" data-id=\"L_ENTRY_CODE_0\"\n					data-points=\"W3sieCI6NDE5LjcwMzEyNSwieSI6MjIyLjEwNzE0MDY3NzMxNTg0fSx7IngiOjQ1OS43MDMxMjUsInkiOjIyMi4xMDcxNDA2NzczMTU4NH0seyJ4Ijo0NTkuNzAzMTI1LCJ5IjoxMjUuMjk5OTk5MjM3MDYwNTV9LHsieCI6Njc0LjY0ODQzNzUsInkiOjEyNS4yOTk5OTkyMzcwNjA1NX0seyJ4Ijo4ODkuNTkzNzUsInkiOjEyNS4yOTk5OTkyMzcwNjA1NX1d\"\n					data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-preview-flow_flowchart-v2-pointEnd-margin)\" />\n				<path\n					d=\"M419.703125,232.9357125418527L472.6320571881345,232.9357125418527Q479.703125,232.9357125418527 479.703125,225.86464472998722L479.703125,224.17106628598657Q479.703125,217.0999984741211 486.7741928118655,217.0999984741211L674.6484375,217.0999984741211L919.296875,217.0999984741211\"\n					id=\"aphrodite-diagram-preview-flow-L_ENTRY_TRACKED_0\"\n					class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\"\n					style=\"stroke-dasharray: 0 0 506.1011657714844 4; stroke-dashoffset: 0;;\" data-edge=\"true\"\n					data-et=\"edge\" data-id=\"L_ENTRY_TRACKED_0\"\n					data-points=\"W3sieCI6NDE5LjcwMzEyNSwieSI6MjMyLjkzNTcxMjU0MTg1Mjd9LHsieCI6NDc5LjcwMzEyNSwieSI6MjMyLjkzNTcxMjU0MTg1Mjd9LHsieCI6NDc5LjcwMzEyNSwieSI6MjE3LjA5OTk5ODQ3NDEyMTF9LHsieCI6Njc0LjY0ODQzNzUsInkiOjIxNy4wOTk5OTg0NzQxMjExfSx7IngiOjkyMy4yOTY4NzUsInkiOjIxNy4wOTk5OTg0NzQxMjExfV0=\"\n					data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-preview-flow_flowchart-v2-pointEnd-margin)\" />\n				<path\n					d=\"M419.703125,243.7642844063895L472.6320571881345,243.7642844063895Q479.703125,243.7642844063895 479.703125,250.83535221825497L479.703125,252.52893066225562Q479.703125,259.5999984741211 486.7741928118655,259.5999984741211L519.78125,259.5999984741211\"\n					id=\"aphrodite-diagram-preview-flow-L_ENTRY_DEFAULT_0\"\n					class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\"\n					style=\"stroke-dasharray: 0 0 106.58557891845703 4; stroke-dashoffset: 0;;\" data-edge=\"true\"\n					data-et=\"edge\" data-id=\"L_ENTRY_DEFAULT_0\"\n					data-points=\"W3sieCI6NDE5LjcwMzEyNSwieSI6MjQzLjc2NDI4NDQwNjM4OTV9LHsieCI6NDc5LjcwMzEyNSwieSI6MjQzLjc2NDI4NDQwNjM4OTV9LHsieCI6NDc5LjcwMzEyNSwieSI6MjU5LjU5OTk5ODQ3NDEyMTF9LHsieCI6NTIzLjc4MTI1LCJ5IjoyNTkuNTk5OTk4NDc0MTIxMX1d\"\n					data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-preview-flow_flowchart-v2-pointEnd-margin)\" />\n				<path\n					d=\"M419.703125,254.59285627092635L452.6320571881345,254.59285627092635Q459.703125,254.59285627092635 459.703125,261.6639240827918L459.703125,344.32892989931617Q459.703125,351.39999771118164 466.7741928118655,351.39999771118164L495.703125,351.39999771118164\"\n					id=\"aphrodite-diagram-preview-flow-L_ENTRY_NOISY_0\"\n					class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\"\n					style=\"stroke-dasharray: 0 0 163.47885131835938 4; stroke-dashoffset: 0;;\" data-edge=\"true\"\n					data-et=\"edge\" data-id=\"L_ENTRY_NOISY_0\"\n					data-points=\"W3sieCI6NDE5LjcwMzEyNSwieSI6MjU0LjU5Mjg1NjI3MDkyNjM1fSx7IngiOjQ1OS43MDMxMjUsInkiOjI1NC41OTI4NTYyNzA5MjYzNX0seyJ4Ijo0NTkuNzAzMTI1LCJ5IjozNTEuMzk5OTk3NzExMTgxNjR9LHsieCI6NDk5LjcwMzEyNSwieSI6MzUxLjM5OTk5NzcxMTE4MTY0fV0=\"\n					data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-preview-flow_flowchart-v2-pointEnd-margin)\" />\n				<path\n					d=\"M1111.640625,33.5L1214.6164321881345,33.5Q1221.6875,33.5 1221.6875,40.571067811865476L1221.6875,190.6289316795082Q1221.6875,197.6999994913737 1228.7585678118655,197.6999994913737L1237.6875,197.6999994913737\"\n					id=\"aphrodite-diagram-preview-flow-L_ERROR_EMA_0\"\n					class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\"\n					style=\"stroke-dasharray: 0 0 280.9185791015625 4; stroke-dashoffset: 0;;\" data-edge=\"true\"\n					data-et=\"edge\" data-id=\"L_ERROR_EMA_0\"\n					data-points=\"W3sieCI6MTExMS42NDA2MjUsInkiOjMzLjV9LHsieCI6MTIyMS42ODc1LCJ5IjozMy41fSx7IngiOjEyMjEuNjg3NSwieSI6MTk3LjY5OTk5OTQ5MTM3Mzd9LHsieCI6MTI0MS42ODc1LCJ5IjoxOTcuNjk5OTk5NDkxMzczN31d\"\n					data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-preview-flow_flowchart-v2-pointEnd-margin)\" />\n				<path\n					d=\"M1181.6875,125.29999923706055L1194.6164321881345,125.29999923706055Q1201.6875,125.29999923706055 1201.6875,132.37106704892602L1201.6875,200.3289311708819Q1201.6875,207.39999898274738 1208.7585678118655,207.39999898274738L1237.6875,207.39999898274738\"\n					id=\"aphrodite-diagram-preview-flow-L_CODE_EMA_0\"\n					class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\"\n					style=\"stroke-dasharray: 0 0 128.77169799804688 4; stroke-dashoffset: 0;;\" data-edge=\"true\"\n					data-et=\"edge\" data-id=\"L_CODE_EMA_0\"\n					data-points=\"W3sieCI6MTE4MS42ODc1LCJ5IjoxMjUuMjk5OTk5MjM3MDYwNTV9LHsieCI6MTIwMS42ODc1LCJ5IjoxMjUuMjk5OTk5MjM3MDYwNTV9LHsieCI6MTIwMS42ODc1LCJ5IjoyMDcuMzk5OTk4OTgyNzQ3Mzh9LHsieCI6MTI0MS42ODc1LCJ5IjoyMDcuMzk5OTk4OTgyNzQ3Mzh9XQ==\"\n					data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-preview-flow_flowchart-v2-pointEnd-margin)\" />\n				<path d=\"M1147.984375,217.0999984741211L1237.6875,217.0999984741211\"\n					id=\"aphrodite-diagram-preview-flow-L_TRACKED_EMA_0\"\n					class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\"\n					style=\"stroke-dasharray: 0 0 85.703125 4; stroke-dashoffset: 0;;\" data-edge=\"true\" data-et=\"edge\"\n					data-id=\"L_TRACKED_EMA_0\"\n					data-points=\"W3sieCI6MTE0Ny45ODQzNzUsInkiOjIxNy4wOTk5OTg0NzQxMjExfSx7IngiOjEyNDEuNjg3NSwieSI6MjE3LjA5OTk5ODQ3NDEyMTF9XQ==\"\n					data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-preview-flow_flowchart-v2-pointEnd-margin)\" />\n				<path\n					d=\"M825.515625,259.5999984741211L1035.640625,259.5999984741211L1194.6164321881345,259.5999984741211Q1201.6875,259.5999984741211 1201.6875,252.52893066225562L1201.6875,233.87106577736026Q1201.6875,226.79999796549478 1208.7585678118655,226.79999796549478L1237.6875,226.79999796549478\"\n					id=\"aphrodite-diagram-preview-flow-L_DEFAULT_EMA_0\"\n					class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\"\n					style=\"stroke-dasharray: 0 0 435.6435852050781 4; stroke-dashoffset: 0;;\" data-edge=\"true\"\n					data-et=\"edge\" data-id=\"L_DEFAULT_EMA_0\"\n					data-points=\"W3sieCI6ODI1LjUxNTYyNSwieSI6MjU5LjU5OTk5ODQ3NDEyMTF9LHsieCI6MTAzNS42NDA2MjUsInkiOjI1OS41OTk5OTg0NzQxMjExfSx7IngiOjEyMDEuNjg3NSwieSI6MjU5LjU5OTk5ODQ3NDEyMTF9LHsieCI6MTIwMS42ODc1LCJ5IjoyMjYuNzk5OTk3OTY1NDk0Nzh9LHsieCI6MTI0MS42ODc1LCJ5IjoyMjYuNzk5OTk3OTY1NDk0Nzh9XQ==\"\n					data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-preview-flow_flowchart-v2-pointEnd-margin)\" />\n				<path\n					d=\"M849.59375,351.39999771118164L1214.6164321881345,351.39999771118164Q1221.6875,351.39999771118164 1221.6875,344.32892989931617L1221.6875,243.57106526873395Q1221.6875,236.49999745686847 1228.7585678118655,236.49999745686847L1237.6875,236.49999745686847\"\n					id=\"aphrodite-diagram-preview-flow-L_NOISY_EMA_0\"\n					class=\"edge-thickness-normal edge-pattern-dotted edge-thickness-normal edge-pattern-solid flowchart-link\"\n					style=\"stroke-dasharray: 0 0 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4; stroke-dashoffset: 0;;\"\n					data-edge=\"true\" data-et=\"edge\" data-id=\"L_NOISY_EMA_0\"\n					data-points=\"W3sieCI6ODQ5LjU5Mzc1LCJ5IjozNTEuMzk5OTk3NzExMTgxNjR9LHsieCI6MTIyMS42ODc1LCJ5IjozNTEuMzk5OTk3NzExMTgxNjR9LHsieCI6MTIyMS42ODc1LCJ5IjoyMzYuNDk5OTk3NDU2ODY4NDd9LHsieCI6MTI0MS42ODc1LCJ5IjoyMzYuNDk5OTk3NDU2ODY4NDd9XQ==\"\n					data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-preview-flow_flowchart-v2-pointEnd-margin)\" />\n				<path d=\"M1476,217.0999984741211L1512,217.0999984741211\"\n					id=\"aphrodite-diagram-preview-flow-L_EMA_BUDGET_0\"\n					class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\"\n					style=\"stroke-dasharray: 0 0 32 4; stroke-dashoffset: 0;;\" data-edge=\"true\" data-et=\"edge\"\n					data-id=\"L_EMA_BUDGET_0\"\n					data-points=\"W3sieCI6MTQ3NiwieSI6MjE3LjA5OTk5ODQ3NDEyMTF9LHsieCI6MTUxNiwieSI6MjE3LjA5OTk5ODQ3NDEyMTF9XQ==\"\n					data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-preview-flow_flowchart-v2-pointEnd-margin)\" />\n				<path\n					d=\"M419.703125,265.42142813546315L432.6320571881345,265.42142813546315Q439.703125,265.42142813546315 439.703125,272.4924959473286L439.703125,444.92892837343726Q439.703125,451.99999618530273 446.7741928118655,451.99999618530273L495.703125,451.99999618530273\"\n					id=\"aphrodite-diagram-preview-flow-L_ENTRY_FOOT_0\"\n					class=\"edge-thickness-normal edge-pattern-dotted edge-thickness-normal edge-pattern-solid flowchart-link\"\n					style=\"stroke-dasharray: 0 0 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4; stroke-dashoffset: 0;;\"\n					data-edge=\"true\" data-et=\"edge\" data-id=\"L_ENTRY_FOOT_0\"\n					data-points=\"W3sieCI6NDE5LjcwMzEyNSwieSI6MjY1LjQyMTQyODEzNTQ2MzE1fSx7IngiOjQzOS43MDMxMjUsInkiOjI2NS40MjE0MjgxMzU0NjMxNX0seyJ4Ijo0MzkuNzAzMTI1LCJ5Ijo0NTEuOTk5OTk2MTg1MzAyNzN9LHsieCI6NDk5LjcwMzEyNSwieSI6NDUxLjk5OTk5NjE4NTMwMjczfV0=\"\n					data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-preview-flow_flowchart-v2-pointEnd-margin)\" />\n			</g>\n			<g class=\"edgeLabels\">\n				<g class=\"edgeLabel\" transform=\"translate(1035.640625, 350.89999771118164)\">\n					<g class=\"label\" data-id=\"L_NOISY_EMA_0\" transform=\"translate(0, -10.5)\">\n						<g>\n							<rect class=\"background\" style=\"\" x=\"-30.8984375\" y=\"-1\" width=\"61.796875\" height=\"23\" />\n							<text y=\"-10.1\" text-anchor=\"middle\" style=\"\">\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\" text-anchor=\"middle\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">exempt\n									</tspan>\n								</tspan>\n							</text>\n						</g>\n					</g>\n				</g>\n			</g>\n			<g class=\"nodes\">\n				<g class=\"node default\" id=\"aphrodite-diagram-preview-flow-flowchart-ENTRY-0\" data-look=\"neo\"\n					transform=\"translate(215.8515625, 238.3499984741211)\">\n					<rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-203.8515625\"\n						y=\"-47.900001525878906\" width=\"407.703125\" height=\"95.80000305175781\" rx=\"0\" ry=\"0\" />\n					<g class=\"label\" style=\"\" transform=\"translate(0, -35.900001525878906)\">\n						<rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\" />\n						<g>\n							<rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\" /><text\n								y=\"-10.1\" style=\"\">\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">every\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0blob\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0is</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0classified\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0first\n									</tspan>\n								</tspan>\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">16</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0pipeline\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0types\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0in</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0the\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0README\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0framing\n									</tspan>\n								</tspan>\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"2.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">the</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0semantic\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0upgrade\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0layer\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0refines\n									</tspan>\n								</tspan>\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"3.2em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">generic\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0text,\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0terminal\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0and\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0log\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0blobs\n									</tspan>\n								</tspan>\n							</text>\n						</g>\n					</g>\n				</g>\n				<g class=\"node default\" id=\"aphrodite-diagram-preview-flow-flowchart-ERROR-1\" data-look=\"neo\"\n					transform=\"translate(1035.640625, 33.5)\">\n					<rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-76\" y=\"-21.5\" width=\"152\"\n						height=\"43\" rx=\"0\" ry=\"0\" />\n					<g class=\"label\" style=\"\" transform=\"translate(0, -9.5)\">\n						<rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\" />\n						<g>\n							<rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\" /><text\n								y=\"-10.1\" style=\"\">\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">error\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0-</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0x8</tspan>\n								</tspan>\n							</text>\n						</g>\n					</g>\n				</g>\n				<g class=\"node default\" id=\"aphrodite-diagram-preview-flow-flowchart-CODE-2\" data-look=\"neo\"\n					transform=\"translate(1035.640625, 125.29999923706055)\">\n					<rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-146.046875\"\n						y=\"-30.299999237060547\" width=\"292.09375\" height=\"60.599998474121094\" rx=\"0\" ry=\"0\" />\n					<g class=\"label\" style=\"\" transform=\"translate(0, -18.299999237060547)\">\n						<rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\" />\n						<g>\n							<rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\" /><text\n								y=\"-10.1\" style=\"\">\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">code\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0types\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0-</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0x3.0\n									</tspan>\n								</tspan>\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">the</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\n										\xA0code_multiplier</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0default\n									</tspan>\n								</tspan>\n							</text>\n						</g>\n					</g>\n				</g>\n				<g class=\"node default\" id=\"aphrodite-diagram-preview-flow-flowchart-TRACKED-3\" data-look=\"neo\"\n					transform=\"translate(1035.640625, 217.0999984741211)\">\n					<rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-112.34375\" y=\"-21.5\"\n						width=\"224.6875\" height=\"43\" rx=\"0\" ry=\"0\" />\n					<g class=\"label\" style=\"\" transform=\"translate(0, -9.5)\">\n						<rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\" />\n						<g>\n							<rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\" /><text\n								y=\"-10.1\" style=\"\">\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">diff,\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0git,\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0text\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0-</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0x2</tspan>\n								</tspan>\n							</text>\n						</g>\n					</g>\n				</g>\n				<g class=\"node default\" id=\"aphrodite-diagram-preview-flow-flowchart-DEFAULT-4\" data-look=\"neo\"\n					transform=\"translate(674.6484375, 259.5999984741211)\">\n					<rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-150.8671875\" y=\"-21.5\"\n						width=\"301.734375\" height=\"43\" rx=\"0\" ry=\"0\" />\n					<g class=\"label\" style=\"\" transform=\"translate(0, -9.5)\">\n						<rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\" />\n						<g>\n							<rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\" /><text\n								y=\"-10.1\" style=\"\">\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\n										tool_output,</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0json,\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0rest\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0-</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0x1</tspan>\n								</tspan>\n							</text>\n						</g>\n					</g>\n				</g>\n				<g class=\"node default\" id=\"aphrodite-diagram-preview-flow-flowchart-NOISY-5\" data-look=\"neo\"\n					transform=\"translate(674.6484375, 351.39999771118164)\">\n					<rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-174.9453125\"\n						y=\"-30.299999237060547\" width=\"349.890625\" height=\"60.599998474121094\" rx=\"0\" ry=\"0\" />\n					<g class=\"label\" style=\"\" transform=\"translate(0, -18.299999237060547)\">\n						<rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\" />\n						<g>\n							<rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\" /><text\n								y=\"-10.1\" style=\"\">\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">linter,\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\n										\xA0build_output,</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0log\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0-</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0BASE\n									</tspan>\n								</tspan>\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">pinned,\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0never\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0halved,\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0never\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0tuned\n									</tspan>\n								</tspan>\n							</text>\n						</g>\n					</g>\n				</g>\n				<g class=\"node default\" id=\"aphrodite-diagram-preview-flow-flowchart-EMA-6\" data-look=\"neo\"\n					transform=\"translate(1358.84375, 217.0999984741211)\">\n					<rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-117.15625\"\n						y=\"-39.099998474121094\" width=\"234.3125\" height=\"78.19999694824219\" rx=\"0\" ry=\"0\" />\n					<g class=\"label\" style=\"\" transform=\"translate(0, -27.099998474121094)\">\n						<rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\" />\n						<g>\n							<rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\" /><text\n								y=\"-10.1\" style=\"\">\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">EMA</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0auto-tune\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0on</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0top:\n									</tspan>\n								</tspan>\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">ratio\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0over\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA020</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0-</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0x2.0\n									</tspan>\n								</tspan>\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"2.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">ratio\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0under\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA03</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0-</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0x0.5\n									</tspan>\n								</tspan>\n							</text>\n						</g>\n					</g>\n				</g>\n				<g class=\"node default\" id=\"aphrodite-diagram-preview-flow-flowchart-BUDGET-7\" data-look=\"neo\"\n					transform=\"translate(1690.9609375, 217.0999984741211)\">\n					<rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-174.9609375\" y=\"-21.5\"\n						width=\"349.921875\" height=\"43\" rx=\"0\" ry=\"0\" />\n					<g class=\"label\" style=\"\" transform=\"translate(0, -9.5)\">\n						<rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\" />\n						<g>\n							<rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\" /><text\n								y=\"-10.1\" style=\"\">\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">budget\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0header\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0scales\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0x0.5\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0to</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0x1.0\n									</tspan>\n								</tspan>\n							</text>\n						</g>\n					</g>\n				</g>\n				<g class=\"node default\" id=\"aphrodite-diagram-preview-flow-flowchart-FOOT-8\" data-look=\"neo\"\n					transform=\"translate(669.84375, 451.99999618530273)\">\n					<rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-170.140625\"\n						y=\"-30.299999237060547\" width=\"340.28125\" height=\"60.599998474121094\" rx=\"0\" ry=\"0\" />\n					<g class=\"label\" style=\"\" transform=\"translate(0, -18.299999237060547)\">\n						<rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\" />\n						<g>\n							<rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\" /><text\n								y=\"-10.1\" style=\"\">\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">the</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0full\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0registry\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0holds\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA030</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0types\n									</tspan>\n								</tspan>\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">see</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0the\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\n										\xA0content-type</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0taxonomy\n									</tspan>\n								</tspan>\n							</text>\n						</g>\n					</g>\n				</g>\n			</g>\n		</g>\n	</g>\n	<defs>\n		<filter id=\"aphrodite-diagram-preview-flow-drop-shadow\" height=\"130%\" width=\"130%\">\n			<feDropShadow dx=\"4\" dy=\"4\" stdDeviation=\"0\" flood-opacity=\"0.06\" flood-color=\"#000000\" />\n		</filter>\n	</defs>\n	<defs>\n		<filter id=\"aphrodite-diagram-preview-flow-drop-shadow-small\" height=\"150%\" width=\"150%\">\n			<feDropShadow dx=\"2\" dy=\"2\" stdDeviation=\"0\" flood-opacity=\"0.06\" flood-color=\"#000000\" />\n		</filter>\n	</defs>\n</svg>\n";
// Source/pages/case-study.astro
var case_study_exports = /* @__PURE__ */ __exportAll({
	default: () => $$CaseStudy,
	file: () => $$file,
	url: () => $$url
});
var $$CaseStudy = createComponent(($$result, $$props, $$slots) => {
	const Study = {
		Saved: "156,342,817",
		SavedPct: "26.9%",
		AvgPerCall: "22,921",
		MedianRatio: "22.9%"
	};
	const RealWorld = [
		{
			Type: "TERMINAL",
			Ratio: "74×",
			Percent: 74
		},
		{
			Type: "TABLE",
			Ratio: "61×",
			Percent: 61
		},
		{
			Type: "SOURCE_CODE",
			Ratio: "45×",
			Percent: 45
		},
		{
			Type: "LS",
			Ratio: "37×",
			Percent: 37
		},
		{
			Type: "DIFF",
			Ratio: "23×",
			Percent: 23
		},
		{
			Type: "BUILD",
			Ratio: "23×",
			Percent: 23
		},
		{
			Type: "SEARCH",
			Ratio: "20×",
			Percent: 20
		}
	];
	const BenchTypes = [
		{
			Type: "GIT DIFF (42L)",
			Pair: "~350 tok → ~15 tok",
			Savings: "23×",
			Width: 18
		},
		{
			Type: "BUILD OUTPUT (142L)",
			Pair: "~1,400 tok → ~10 tok",
			Savings: "140×",
			Width: 80
		},
		{
			Type: "TERMINAL OUTPUT",
			Pair: "~200 tok → ~10 tok",
			Savings: "20×",
			Width: 16
		},
		{
			Type: "JSON BLOB (30 KEYS)",
			Pair: "~400 tok → ~10 tok",
			Savings: "40×",
			Width: 30
		},
		{
			Type: "BROWSER SNAPSHOT (342 EL)",
			Pair: "~5,000 tok → ~12 tok",
			Savings: "416×",
			Width: 98
		}
	];
	const Bench = { Latency: "8-40 ms" };
	const Tiers = [
		{
			Tier: "ERROR",
			Types: "error",
			Multiplier: "×8",
			Note: "errors stay visible longest"
		},
		{
			Tier: "CODE",
			Types: "code_rust · code_python · code_go · code_js · code",
			Multiplier: "×3.0",
			Note: "source earns patience"
		},
		{
			Tier: "DIFF / TRACKED",
			Types: "diff · git · text",
			Multiplier: "×2",
			Note: "history, halved"
		},
		{
			Tier: "DEFAULT",
			Types: "tool_output · json · everything else",
			Multiplier: "×1",
			Note: "the baseline"
		},
		{
			Tier: "NOISY (BASE)",
			Types: "linter · build_output · log",
			Multiplier: "×1",
			Note: "never halved, always squeezed"
		}
	];
	const Classifier = {
		PipelineTypes: 16,
		RegistryTypes: 30
	};
	const Layers = [
		{
			N: "01",
			Name: "CLASSIFY",
			Figure: "40-123 ns",
			Tone: "raw",
			Note: "the gate: one type per invocation, first match wins"
		},
		{
			N: "02",
			Name: "PREVIEW",
			Figure: "~15 tok",
			Tone: "canary",
			Note: "the answer to 'do I care?' without the content"
		},
		{
			N: "03",
			Name: "STORE",
			Figure: "BLAKE3",
			Tone: "teal",
			Note: "SQLite / in-memory, the marker is the receipt"
		},
		{
			N: "04",
			Name: "DECIDE",
			Figure: "RETRIEVE?",
			Tone: "raw",
			Note: "the agent, not the engine, spends the budget"
		}
	];
	const Flood = [
		"result:$ cargo build --release 2>&1",
		"dim:    Compiling libc v0.2.168",
		"dim:    Compiling tokio v1.47.1",
		"fade:    Compiling serde v1.0.219",
		"fade:    Compiling axum v0.8.4",
		"mute:    Compiling aphrodite v1.6.6",
		"mute:... 136 more identical lines ...",
		"canary:warning: unused import: `HashMap`",
		"mute:Finished `release` [optimized] in 41.7s"
	];
	const Sections = [
		{
			Id: "problem",
			Label: "PROBLEM"
		},
		{
			Id: "gate",
			Label: "GATE"
		},
		{
			Id: "contract",
			Label: "CONTRACT"
		},
		{
			Id: "loop",
			Label: "LOOP"
		},
		{
			Id: "knobs",
			Label: "KNOBS"
		},
		{
			Id: "evidence",
			Label: "EVIDENCE"
		},
		{
			Id: "history",
			Label: "HISTORY"
		}
	];
	const Arcs = [
		{
			N: "ARC 1",
			Span: "v1.3.0 -> v1.3.2",
			Law: "THE LOSSLESSNESS LAW",
			Tone: "canary",
			Border: "border-raw-blood",
			Title: "Hash the ORIGINAL, never the wrapper",
			Incident: [
				"Compressing a Hermes wrapper stored the <em>extracted</em> content under",
				"<code class=\"font-mono text-base\">hash(extracted)</code> and discarded the original.",
				"A failed command's <code class=\"font-mono text-base\">exit_code</code> and",
				"<code class=\"font-mono text-base\">error</code> fields were unrecoverable after",
				"compression, and caller JSON that merely matched a wrapper shape - e.g.",
				"<code class=\"font-mono text-base\">{\"content\":\"hi\",\"id\":42}</code> - got",
				"permanently collapsed to one field."
			].join(" "),
			Fix: ["Both the hook and the tool paths now hash and store the ORIGINAL content always;", "the unwrapped view is used only for classification and preview."].join(" "),
			Today: [
				"Retrieval is byte-exact by construction - backends store and return content",
				"verbatim as UTF-8 strings, no zstd on the path - and a full-document retrieval",
				"(<code class=\"font-mono text-base\">limit: 0</code>) returns the exact original",
				"bytes, hashing back to the marker's own hash."
			].join(" "),
			Src: "SRC: CHANGELOG.md:683-706 · docs/api/retrieve.md (\"byte-exact by construction\")"
		},
		{
			N: "ARC 2",
			Span: "v1.3.8 -> v1.3.9",
			Law: "THE PUBLISHING INCIDENT",
			Tone: "canary",
			Border: "border-stamped-canary",
			Title: "The tarball that compiled locally and failed everywhere else",
			Incident: [
				"v1.3.8 published to crates.io but was <em>uninstallable</em>:",
				"<code class=\"font-mono text-base\">Cargo.toml</code> had",
				"<code class=\"font-mono text-base\">exclude = [..., \"*.md\", ...]</code>, and cargo",
				"applies <code class=\"font-mono text-base\">exclude</code> at publish time -",
				"recursively. The six <code class=\"font-mono text-base\">builtin_directives/*.md</code>",
				"files embedded via <code class=\"font-mono text-base\">include_str!</code> were",
				"stripped from the tarball, so the local checkout built fine and CI's Test job",
				"passed - but <code class=\"font-mono text-base\">cargo install aphrodite</code>",
				"failed at compile time."
			].join(" "),
			Fix: [
				"Drop the recursive <code class=\"font-mono text-base\">*.md</code> exclusion (and",
				"never combine <code class=\"font-mono text-base\">include</code> with",
				"<code class=\"font-mono text-base\">exclude</code> - cargo would ignore",
				"<code class=\"font-mono text-base\">exclude</code> and drop the targets), add a",
				"<code class=\"font-mono text-base\">cargo package --list</code> packaging guard to",
				"CI, and a durable in-crate regression test that fails when",
				"<code class=\"font-mono text-base\">*.md</code> returns to",
				"<code class=\"font-mono text-base\">exclude</code>."
			].join(" "),
			Today: [
				"crates.io versions are immutable - v1.3.8 stays broken forever, superseded as",
				"the working release; the packaging guard means this class of regression can",
				"never reach crates.io again."
			].join(" "),
			Src: "SRC: CHANGELOG.md:408-450"
		},
		{
			N: "ARC 3",
			Span: "v1.6.3",
			Law: "ONE RUNTIME HOME",
			Tone: "teal",
			Border: "border-weathered-teal",
			Title: "One decision, made once, by both halves",
			Incident: [
				"Issue #40: the plugin's Python shim resolved the runtime home from",
				"<code class=\"font-mono text-base\">$HERMES_HOME</code> while the Rust half",
				"resolved it from <code class=\"font-mono text-base\">$HOME</code>. Whenever they",
				"diverged - the shipped Docker image, profile gateways - the shim looked for",
				"binaries in a directory that never existed, disabled the plugin, and orphaned",
				"the previous runtime home, config and provider API key included."
			].join(" "),
			Fix: [
				"The shim resolves the runtime home once",
				"(<code class=\"font-mono text-base\">$APHRODITE_HOME</code> override, then",
				"<code class=\"font-mono text-base\">&lt;hermes-home&gt;/aphrodite</code>, then",
				"<code class=\"font-mono text-base\">~/.hermes/aphrodite</code>) and exports it to",
				"the Rust half through <code class=\"font-mono text-base\">APHRODITE_HOME</code>, so",
				"the dylib and the spawned proxy agree by construction. Legacy installs are",
				"adopted with a one-line warning, never migrated."
			].join(" "),
			Today: ["Per-Hermes-home isolation extends to the whole stack, and the startup log names", "the decision: <code class=\"font-mono text-base\">runtime home: &lt;path&gt; (decided by ...)</code>."].join(" "),
			Src: "SRC: CHANGELOG.md:104-154"
		},
		{
			N: "ARC 4",
			Span: "v1.6.5",
			Law: "THE CHECKSUM LAW",
			Tone: "dust",
			Border: "border-raw-blood",
			Title: "In-tree SHA256SUMS.txt is the only truth",
			Incident: [
				"The download scripts used to fetch the release-hosted per-target checksums and",
				"had warn-and-skip paths - a missing checksum file or tool degraded to a warning",
				"instead of a refusal. A plugin-hardening catalog review called it out."
			].join(" "),
			Fix: [
				"The pinned tree's <code class=\"font-mono text-base\">SHA256SUMS.txt</code> became",
				"the only checksum source of truth: a missing file, a",
				"<code class=\"font-mono text-base\">BINARY_VERSION</code> mismatch, a missing",
				"target block, or a missing asset entry is a hard refusal (exit 1), and a missing",
				"<code class=\"font-mono text-base\">shasum</code>/<code class=\"font-mono text-base\">sha256sum</code>",
				"tool is a hard refusal rather than a skipped check. The legacy",
				"<code class=\"font-mono text-base\">~/.hermes/aphrodite</code> home adoption in the",
				"runtime lookup is also gone."
			].join(" "),
			Today: [
				"Every release ships 12 artifacts - 4 targets x (binary, plugin dylib,",
				"SHA256SUMS) - and the dylib arm refuses installs when the in-tree checksums are",
				"missing."
			].join(" "),
			Src: "SRC: CHANGELOG.md:39-67 · the Aphrodite/v1.6.5 release note"
		},
		{
			N: "ARC 5",
			Span: "v1.6.6",
			Law: "THE PATH GUARDS",
			Tone: "canary",
			Border: "border-stamped-canary",
			Title: "Some paths are never read",
			Incident: ["Nothing stopped the prefetch path from reading the files most likely to contain", "secrets - environment files, auth tokens, SSH keys, or the Hermes home itself."].join(" "),
			Fix: [
				"<code class=\"font-mono text-base\">aphrodite_prefetch</code> refuses",
				"<code class=\"font-mono text-base\">.env</code>,",
				"<code class=\"font-mono text-base\">auth.json</code>,",
				"<code class=\"font-mono text-base\">~/.ssh</code>, the Hermes home, and non-file",
				"paths outright, answering with",
				"<code class=\"font-mono text-base\">ReadOutcome::Refused</code> plus a",
				"<code class=\"font-mono text-base\">refuse_reason</code> instead of reading them."
			].join(" "),
			Today: [
				"Setup is hardened the same way: the Hermes-home plugin directory is report-only -",
				"no writes, no deletes - and the same release re-described the context engine as",
				"opt-in with a <code class=\"font-mono text-base\">requires_hermes &gt;= 0.20.2</code>",
				"floor."
			].join(" "),
			Src: "SRC: CHANGELOG.md:3-37 · the Aphrodite/v1.6.6 release note"
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "CASE STUDY // APHRODITE",
		"Description": "Why Aphrodite is shaped this way: the marker is the contract, the classifier is the gate, the thresholds are the knobs - measured at 156,342,817 context tokens saved across 200 real sessions."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageShell", $$PageShell, { "Rhythm": "wide" }, { "default": ($$result) => renderTemplate`  ${maybeRenderHead($$result)}<header class="relative flex w-full flex-col items-start pt-12"> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "strip",
		"Label": "CASE FILE // APHRODITE-CCR · SEP 2026 · MEASURED"
	})} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "crimson",
		"Size": "lg",
		"Class": "w-full lg:p-16"
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "dust" }, { "default": ($$result) => renderTemplate`THE CASE STUDY // WHY, NOT HOW` })} <h1 class="mt-8 font-headline text-5xl font-black uppercase leading-[0.9] tracking-tighter text-bone-white drop-shadow-[4px_4px_0px_#520612] sm:text-7xl lg:text-8xl">
Why Aphrodite<br>is shaped <span class="text-stamped-canary">this way</span> </h1> <p class="mt-16 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Not a tour of the code - an argument about the shape.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
An agent's context is a budget, and every tool call spends it on raw output
					before the agent can decide whether any of it mattered.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Aphrodite's answer is structural: show the shape of the output, keep the
					substance on call, and make the agent - not the engine - the one who pays for
					detail.
</p>  <div class="zine-box-subtle mt-24 w-full max-w-2xl border-[3px] border-raw-blood bg-soot-black p-8 sm:p-10"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "dust" }, { "default": ($$result) => renderTemplate`CONTEXT TOKENS SAVED · 200 REAL SESSIONS` })} <div class="mt-6 font-headline text-5xl font-black tracking-tighter text-bone-white drop-shadow-[3px_3px_0px_#520612] sm:text-7xl"> ${Study.Saved} </div> <div class="mt-6 flex flex-wrap items-center gap-8 font-mono text-base font-bold"> <span class="text-stamped-canary">${Study.SavedPct} OF THE TOTAL BUDGET</span> <span class="text-zinc-dust">·</span> <span class="text-weathered-teal">${Study.AvgPerCall} TOK AVG / CALL</span> <span class="text-zinc-dust">·</span> <span class="text-zinc-dust">${Study.MedianRatio} MEDIAN SESSION</span> </div> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": ["SRC: README.md:467-511."] })} </div> ` })} </header> ${renderComponent($$result, "SectionNav", $$SectionNav, { "Sections": Sections })}  <section id="problem" class="relative w-full"> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "tab",
		"Label": "I // THE PROBLEM",
		"Color": "raw"
	})} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "crimson",
		"Size": "lg",
		"Rotate": "-rotate-[0.6deg]",
		"Class": "w-full"
	}, { "default": ($$result) => renderTemplate` <h2 class="font-headline text-2xl font-black uppercase tracking-tight text-bone-white sm:text-4xl">
The flood is not the data's fault
</h2> <p class="mt-8 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Every file read, build, code search, or browser open floods the agent's
					context with raw output - compilation logs, accessibility trees, JSON blobs.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The structural failure is that raw output arrives${" "} <em>before any decision</em>: the context pays the full price for content
					the agent may never use.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Compression applied after the fact cannot refund a turn that already
					happened.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
So the intervention point has to be${" "} <strong class="text-bone-white">before the LLM sees anything</strong>.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
That is the first design commitment: intercept at the tool boundary, not
					inside the prompt.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Aphrodite replaces the output with a compact, structured preview - ~15
					tokens of metadata instead of hundreds - and keeps the full content
					retrievable.
</p> ` })} <!-- THE PAIR: the terminal keeps the flood, the model reads one line. --> <div class="mt-24"> ${renderComponent($$result, "ZineSplit", $$ZineSplit, {
		"Raw": Flood,
		"Preview": "[build:1E 1W 142L | error[E0432]: unresolved import ...]",
		"Hash": "&lt;&lt;&lt;CCR:0e3a5c9f...a1e|build|1420&gt;&gt;&gt;"
	})} </div> <div class="mt-8"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"Tone": "dust",
		"As": "div"
	}, { "default": ($$result) => renderTemplate`
≈ 1,400 TOKENS · MOSTLY NOISE · ONE LINE MATTERED
` })} </div> </section>  <section id="gate" class="relative w-full"> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "tab",
		"Label": "II // THE GATE",
		"Color": "canary",
		"Rotate": "rotate-1"
	})} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "canary",
		"Size": "lg",
		"Rotate": "rotate-[0.5deg]",
		"Class": "w-full"
	}, { "default": ($$result) => renderTemplate` <h2 class="font-headline text-2xl font-black uppercase tracking-tight text-bone-white sm:text-4xl">
The classifier is the gate
</h2> <p class="mt-8 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Why classify before compressing? Because "compress everything equally"
					destroyed signal.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
A compiler error and a verbose build log are both output - but one must
					stay visible and the other should never have been shown in full.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
A single compression policy cannot serve both.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
So the type-aware classifier runs first - 40 to 123 nanoseconds, first
					match wins - and each content type carries its own compression threshold
					tier.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The README's pipeline renders ${Classifier.PipelineTypes} types in its
					catalog, from <code class="font-mono text-base">build</code> to${" "} <code class="font-mono text-base">text</code>; the full classification
					registry backing it is ${Classifier.RegistryTypes} types
					(docs/classification/content-types.md).
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
When the classifier only reaches a generic bucket, a conservative semantic
					detector upgrades it to the high-signal shapes (git, gitlog, grep, ls,
					test); ordinary prose is never mis-tagged.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Nothing is compressed, stored, or marked until the gate has named it - and
					the name is what everything downstream keys on.
</p> ` })} <figure class="mt-24 border border-oxblood-dark bg-asphalt-panel p-4" data-diagram="preview-flow"> <div class="overflow-x-auto">${unescapeHTML(preview_flow_default)}</div> <figcaption class="mt-6 font-mono text-base font-black uppercase tracking-widest text-zinc-dust">
M2 // PREVIEW FLOW
</figcaption> </figure> </section>  <section id="contract" class="relative w-full"> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "tab",
		"Label": "III // THE CONTRACT",
		"Color": "teal"
	})} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "teal",
		"Size": "lg",
		"Rotate": "-rotate-[0.4deg]",
		"Class": "w-full"
	}, { "default": ($$result) => renderTemplate` <h2 class="font-headline text-2xl font-black uppercase tracking-tight text-bone-white sm:text-4xl">
The marker is the contract
</h2> <p class="mt-8 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Replacing output with a summary only works if the missing content stays
					reachable.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The bridge between the two is a single string:
</p> <div class="ccr-marker mt-6 border border-oxblood-dark bg-soot-black px-4 py-3 font-mono text-base text-weathered-teal"> ${"<<<CCR:0e3a5c9f2b8d4e6a1c3f5b7d9e0a2c4b6d8f0a1e|build|1420>>>"} </div> <p class="mt-6 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Hash, type, size - in that order, on purpose.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The <strong class="text-bone-white">hash</strong> is the full 40-char BLAKE3
					digest, the address of the stored original.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The <strong class="text-bone-white">type</strong> tells the agent what kind
					of thing it skipped.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The <strong class="text-bone-white">size</strong> tells it how much.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Three fields are all an agent needs to decide whether retrieval is worth it
					- which is exactly why the marker, not a tool call, is the contract: every
					retrieval entry point (<code class="font-mono text-base">aphrodite_retrieve</code>,
<code class="font-mono text-base">/retrieve</code>,
<code class="font-mono text-base">resolve</code>) accepts the marker body
					directly, suffix or no suffix.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The store behind it is deliberately boring: BLAKE3 → SQLite (persistent, the
<span class="text-weathered-teal">:9798</span> token listener) or in-memory
					DashMap (10K entries, the <span class="text-weathered-teal">:9797</span>
cache listener).
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Storage is not the interesting problem; the interesting problem is that the
					agent's decision needs a stable address - and that is all the marker has to
					be.
</p> ` })} </section>  <section id="loop" class="relative w-full"> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "tab",
		"Label": "IV // THE LOOP",
		"Color": "raw",
		"Rotate": "rotate-1"
	})} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "crimson",
		"Size": "lg",
		"Rotate": "rotate-[0.4deg]",
		"Class": "w-full"
	}, { "default": ($$result) => renderTemplate` <h2 class="font-headline text-2xl font-black uppercase tracking-tight text-bone-white sm:text-4xl">
Four layers, one decision
</h2> <p class="mt-8 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The pipeline is short on purpose: classify, preview, store, decide.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The whole compress step is sub-millisecond - end-to-end latency is ${Bench.Latency}
including the HTTP round-trip - because the design spends its complexity budget
					on the decision, not the transform.
</p>  <div class="mt-16 isolate grid grid-cols-1 items-start gap-16 sm:grid-cols-2 xl:grid-cols-4"> ${Layers.map(({ N, Name, Figure, Tone, Note }) => renderTemplate`<div class="zine-box-subtle relative border-[3px] border-oxblood-dark bg-carbon-void p-6 pt-9 transition-transform duration-200 hover:rotate-0 sm:-rotate-[1.2deg] sm:hover:rotate-0"> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Label": `LAYER // ${N}`,
		"Color": Tone,
		"Side": "left"
	})} <div class="font-headline text-2xl font-black tracking-tight text-bone-white"> ${Figure} </div> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"Tone": "canary",
		"As": "div"
	}, { "default": ($$result) => renderTemplate`${Name}` })} <div class="mt-8 border-t border-oxblood-dark pt-8 text-base leading-relaxed text-zinc-dust"> ${Note} </div> </div>`)} </div> <div class="mt-16 border border-oxblood-dark bg-asphalt-panel p-5 font-body text-base leading-relaxed text-bone-newsprint"> <p>
And the engine stays polite about it: compression is opt-in and non-destructive
						- everything the agent ever saw stays retrievable unchanged.
</p> <p class="mt-3">
What the <code class="font-mono text-base">pre_llm_call</code> hook adds each
						turn is an injection assembler, not a rewrite: directives are never dropped,
						nudges are capped at 2, background status and recall are the first things to
						yield, and the whole injection lives inside a 4,000-character budget.
</p> <p class="mt-3">
Two modes cover every entry point -
<strong class="text-bone-white">plugin hooks</strong> intercept tool results
						directly with no API round-trip, and the${" "} <strong class="text-bone-white">reverse proxy</strong> compresses Chat
						Completions responses for any OpenAI-compatible client.
</p> <p class="mt-3">
No clever model, no lossy summarizer in the loop - just an honest receipt, a
						fast gate, and a set of knobs the evidence can turn.
</p> </div>  <h3 class="mt-24 font-headline text-xl font-black uppercase tracking-tight text-bone-white sm:text-2xl">
The decision, in two branches
</h3> <p class="mt-8 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Every marker ends in the same question, and the agent answers it twice: the
					preview either carried enough, or it did not.
</p> <div class="mt-16"> ${renderComponent($$result, "ZinePipeline", $$ZinePipeline, { "Mode": "decide" })} </div> ` })} </section>  <section id="knobs" class="relative w-full"> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "tab",
		"Label": "V // THE KNOBS",
		"Color": "canary"
	})} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "canary",
		"Size": "lg",
		"Rotate": "-rotate-[0.5deg]",
		"Class": "w-full"
	}, { "default": ($$result) => renderTemplate` <div class="grid grid-cols-1 gap-32 lg:grid-cols-2"> <div> <h2 class="font-headline text-2xl font-black uppercase tracking-tight text-bone-white sm:text-4xl">
The thresholds are the knobs
</h2> <p class="mt-8 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
A compression policy that cannot be tuned is a policy that will be fought.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Aphrodite's tunables are deliberately few and deliberately at the layer
							where they matter: the threshold multipliers per type (from
<code class="font-mono text-base">aphrodite.toml</code>'s${" "} <code class="font-mono text-base">[compression]</code>), the${" "} <code class="font-mono text-base">preview_max_chars</code> preview budget,
							and the context engine's fill threshold (
<code class="font-mono text-base">engine_threshold_pct</code>).
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Why so few?
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Because each knob maps to a question the agent actually asks:${" "} <em>how patient should I be with this kind of output?</em> </p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The adaptive layer answers it statistically -${" "} <code class="font-mono text-base">post_llm_call</code> captures savings and
							updates EMA state per type - so the defaults move toward what the sessions
							themselves prove useful, and the config only has to set the priors.
</p> <p class="mt-8 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The savings those priors produce across 200 real sessions - the ledger, the
							session-shape bands, the retrieval tax - are on the benchmarks page, which owns
							the study.
</p> </div> <!-- THRESHOLD TIERS: the knobs the gate sets. --> <div class="flex flex-col gap-6"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "dust" }, { "default": ($$result) => renderTemplate`THRESHOLD TIERS` })} ${Tiers.map(({ Tier, Types, Multiplier, Note }) => renderTemplate`<div class="flex items-center justify-between gap-8 border border-oxblood-dark bg-asphalt-panel px-4 py-3"> <div class="min-w-0"> <div class="font-mono text-base font-black uppercase tracking-widest text-bone-white"> ${Tier} <span class="ml-2 text-stamped-canary">${Multiplier}</span> </div> <div class="truncate font-mono text-base text-zinc-dust">${Types}</div> </div> <div class="hidden shrink-0 text-right font-mono text-base text-weathered-teal sm:block"> ${Note} </div> </div>`)} <div class="font-mono text-base leading-relaxed text-zinc-dust">
HIGHER MULTIPLIER = LONGER THE CONTENT STAYS VISIBLE BEFORE COMPRESSION
</div> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": ["SRC: README.md:187-198."] })} </div> </div> ` })} </section>  <section id="evidence" class="relative w-full"> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "tab",
		"Label": "VI // THE EVIDENCE",
		"Color": "teal",
		"Rotate": "rotate-1"
	})} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "teal",
		"Size": "lg",
		"Rotate": "-rotate-[0.4deg]",
		"Class": "w-full"
	}, { "default": ($$result) => renderTemplate` <h2 class="font-headline text-2xl font-black uppercase tracking-tight text-bone-white sm:text-4xl">
What one output costs
</h2> <p class="mt-8 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Two views survive here because they are the argument's own: what each output
					class compressed to in the wild, and what the standard corpus paid per type.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The corpus ratios, the 610× ceiling, the median and the reproduce commands are
					on the benchmarks page.
</p> <div class="mt-16 grid grid-cols-1 gap-24 lg:grid-cols-2"> <!-- Real-world per-output compression --><div class="flex flex-col gap-8"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"Tone": "dust",
		"As": "div"
	}, { "default": ($$result) => renderTemplate`
REAL-WORLD PER-OUTPUT COMPRESSION (ORIG → ~33-TOK MARKER)
` })} ${RealWorld.map(({ Type, Ratio, Percent }) => renderTemplate`${renderComponent($$result, "ZineStatBar", $$ZineStatBar, {
		"Label": Type,
		"Ratio": Ratio,
		"Percent": Percent,
		"Color": "canary"
	})}`)} </div> <!-- Per-type standard-corpus bars --> <div class="flex flex-col gap-8"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"Tone": "dust",
		"As": "div"
	}, { "default": ($$result) => renderTemplate`
PER-TYPE COMPRESSION (STANDARD CORPUS)
` })} ${BenchTypes.map(({ Type, Pair, Savings, Width }) => renderTemplate`${renderComponent($$result, "ZineStatBar", $$ZineStatBar, {
		"Label": `${Type} · ${Pair}`,
		"Ratio": Savings,
		"Percent": Width,
		"Color": "teal"
	})}`)} ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"Tone": "canary",
		"As": "div"
	}, { "default": ($$result) => renderTemplate`
20/20 COMPRESSED · 20/20 RETRIEVE OK
` })} </div> </div> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": ["SRC: README.md:467-511 (the per-output compression) · README.md:444-465 (the per-type table and the round trips)."] })} ` })} </section>  <section id="history" class="relative w-full"> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "tab",
		"Label": "VII // THE HISTORY SPINE",
		"Color": "raw"
	})} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "crimson",
		"Size": "lg",
		"Rotate": "-rotate-[0.3deg]",
		"Class": "w-full"
	}, { "default": ($$result) => renderTemplate` <h2 class="font-headline text-2xl font-black uppercase tracking-tight text-bone-white sm:text-4xl">
Five incidents that set the laws
</h2> <p class="mt-8 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Every rule on this page was paid for once.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Each arc below runs the same three beats: the incident, the fix, and the
					mechanic that still stands today.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
All of it is public record - the CHANGELOG entries and the release notes.
</p> <div class="mt-24 flex flex-col gap-32"> ${Arcs.map(({ N, Span, Law, Tone, Border, Title, Incident, Fix, Today, Src }) => renderTemplate`<article${addAttribute(`border-l-4 ${Border} pl-6 sm:pl-10`, "class")}> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"Tone": Tone,
		"As": "div"
	}, { "default": ($$result) => renderTemplate`${`${N} · ${Span} · ${Law}`}` })} <h3 class="mt-6 font-headline text-xl font-black uppercase tracking-tight text-bone-white sm:text-2xl"> ${Title} </h3> <p class="mt-6 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint"> <strong class="text-bone-white">The incident.</strong>${" "} <span>${unescapeHTML(Incident)}</span> </p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint"> <strong class="text-bone-white">The fix.</strong>${" "} <span>${unescapeHTML(Fix)}</span> </p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint"> <strong class="text-bone-white">Mechanics today.</strong>${" "} <span>${unescapeHTML(Today)}</span> </p> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": [Src] })} </article>`)} </div> ` })} </section>  ${renderComponent($$result, "Related", $$Related, { "Links": [
		{
			Href: "/benchmarks/",
			Label: "BENCHMARKS"
		},
		{
			Href: "/workbench/",
			Label: "THE PIPELINE, LIVE"
		},
		{
			Href: "/setup/",
			Label: "SETUP"
		}
	] })} ` })} ${renderComponent($$result, "ZineDiagramNav", ZineDiagramNav, {})} ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/case-study.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/case-study.astro";
var $$url = "/case-study";
// \0virtual:astro:page:Source/pages/case-study@_@astro
var page = () => case_study_exports;
export { page };
