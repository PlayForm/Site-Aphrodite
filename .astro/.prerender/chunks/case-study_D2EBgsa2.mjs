import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { E as unescapeHTML, _ as renderTemplate, d as Fragment, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, n as $$ZineKicker, t as $$Base } from "./Base_B3YGMVwW.mjs";
import { n as $$PageShell, t as $$ZineTape } from "./ZineTape_SD5UQe0y.mjs";
import { a as $$Related } from "./DocsSidebar_DfVitkgG.mjs";
import { t as $$SectionNav } from "./SectionNav_B6_enHog.mjs";
import { t as $$ZineBox } from "./ZineBox_CagEU9Nk.mjs";
import { t as $$ZineDiagramNav } from "./ZineDiagramNav_CN7ukSrg.mjs";
import { t as $$ZinePipeline } from "./ZinePipeline_B3GzGLqL.mjs";
import { t as $$ZineSource } from "./ZineSource_B5XPnKZs.mjs";
import { t as $$ZineSplit } from "./ZineSplit_CHeJnp9j.mjs";
import { t as $$ZineStatBar } from "./ZineStatBar_Djd8qS_2.mjs";
import { a as Figure, f as Study, l as Registry, n as Benchmark, p as Tier, r as Cite, s as Narrative, t as Band, u as Release } from "./Numbers_DqZns1TY.mjs";
// Source/Content/Mermaid/preview-flow.svg?raw
var preview_flow_default = "<svg id=\"aphrodite-diagram-preview-flow\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" class=\"flowchart\"\n	viewBox=\"-203.76113891601562 -28 2109.6830139160156 550.2999877929688\" role=\"graphics-document document\"\n	aria-roledescription=\"flowchart-v2\">\n	<style>\n		#aphrodite-diagram-preview-flow {\n			font-family: JetBrains Mono, ui-monospace, monospace;\n			font-size: 16px;\n			fill: #dedbd2;\n		}\n\n		@keyframes edge-animation-frame {\n			from {\n				stroke-dashoffset: 0;\n			}\n		}\n\n		@keyframes dash {\n			to {\n				stroke-dashoffset: 0;\n			}\n		}\n\n		#aphrodite-diagram-preview-flow .edge-animation-slow {\n			stroke-dasharray: 9, 5 !important;\n			stroke-dashoffset: 900;\n			animation: dash 50s linear infinite;\n			stroke-linecap: round;\n		}\n\n		#aphrodite-diagram-preview-flow .edge-animation-fast {\n			stroke-dasharray: 9, 5 !important;\n			stroke-dashoffset: 900;\n			animation: dash 20s linear infinite;\n			stroke-linecap: round;\n		}\n\n		#aphrodite-diagram-preview-flow .error-icon {\n			fill: hsl(75, 11.1111111111%, 12.0588235294%);\n		}\n\n		#aphrodite-diagram-preview-flow .error-text {\n			fill: rgb(222.5416666667, 220.8333333334, 227.6666666667);\n			stroke: rgb(222.5416666667, 220.8333333334, 227.6666666667);\n		}\n\n		#aphrodite-diagram-preview-flow .edge-thickness-normal {\n			stroke-width: 1px;\n		}\n\n		#aphrodite-diagram-preview-flow .edge-thickness-thick {\n			stroke-width: 3.5px;\n		}\n\n		#aphrodite-diagram-preview-flow .edge-pattern-solid {\n			stroke-dasharray: 0;\n		}\n\n		#aphrodite-diagram-preview-flow .edge-thickness-invisible {\n			stroke-width: 0;\n			fill: none;\n		}\n\n		#aphrodite-diagram-preview-flow .edge-pattern-dashed {\n			stroke-dasharray: 3;\n		}\n\n		#aphrodite-diagram-preview-flow .edge-pattern-dotted {\n			stroke-dasharray: 2;\n		}\n\n		#aphrodite-diagram-preview-flow .marker {\n			fill: #3d040d;\n			stroke: #3d040d;\n		}\n\n		#aphrodite-diagram-preview-flow .marker.cross {\n			stroke: #3d040d;\n		}\n\n		#aphrodite-diagram-preview-flow svg {\n			font-family: JetBrains Mono, ui-monospace, monospace;\n			font-size: 16px;\n		}\n\n		#aphrodite-diagram-preview-flow p {\n			margin: 0;\n		}\n\n		#aphrodite-diagram-preview-flow .label {\n			font-family: JetBrains Mono, ui-monospace, monospace;\n			color: #dedbd2;\n		}\n\n		#aphrodite-diagram-preview-flow .cluster-label text {\n			fill: rgb(222.5416666667, 220.8333333334, 227.6666666667);\n		}\n\n		#aphrodite-diagram-preview-flow .cluster-label span {\n			color: rgb(222.5416666667, 220.8333333334, 227.6666666667);\n		}\n\n		#aphrodite-diagram-preview-flow .cluster-label span p {\n			background-color: transparent;\n		}\n\n		#aphrodite-diagram-preview-flow .label text,\n		#aphrodite-diagram-preview-flow span {\n			fill: #dedbd2;\n			color: #dedbd2;\n		}\n\n		#aphrodite-diagram-preview-flow .node rect,\n		#aphrodite-diagram-preview-flow .node circle,\n		#aphrodite-diagram-preview-flow .node ellipse,\n		#aphrodite-diagram-preview-flow .node polygon,\n		#aphrodite-diagram-preview-flow .node path {\n			fill: #111014;\n			stroke: #7a0a1e;\n			stroke-width: 1px;\n		}\n\n		#aphrodite-diagram-preview-flow .rough-node .label text,\n		#aphrodite-diagram-preview-flow .node .label text,\n		#aphrodite-diagram-preview-flow .image-shape .label,\n		#aphrodite-diagram-preview-flow .icon-shape .label {\n			text-anchor: middle;\n		}\n\n		#aphrodite-diagram-preview-flow .node .katex path {\n			fill: #000;\n			stroke: #000;\n			stroke-width: 1px;\n		}\n\n		#aphrodite-diagram-preview-flow .rough-node .label,\n		#aphrodite-diagram-preview-flow .node .label,\n		#aphrodite-diagram-preview-flow .image-shape .label,\n		#aphrodite-diagram-preview-flow .icon-shape .label {\n			text-align: center;\n		}\n\n		#aphrodite-diagram-preview-flow .node.clickable {\n			cursor: pointer;\n		}\n\n		#aphrodite-diagram-preview-flow .root .anchor path {\n			fill: #3d040d !important;\n			stroke-width: 0;\n			stroke: #3d040d;\n		}\n\n		#aphrodite-diagram-preview-flow .arrowheadPath {\n			fill: #0b0b0b;\n		}\n\n		#aphrodite-diagram-preview-flow .edgePaths .path {\n			stroke: #3d040d;\n			stroke-width: 1px;\n		}\n\n		#aphrodite-diagram-preview-flow .flowchart-link {\n			stroke: #3d040d;\n			fill: none;\n		}\n\n		#aphrodite-diagram-preview-flow .edgeLabel {\n			background-color: #111014;\n			text-align: center;\n		}\n\n		#aphrodite-diagram-preview-flow .edgeLabel p {\n			background-color: #111014;\n		}\n\n		#aphrodite-diagram-preview-flow .edgeLabel rect {\n			opacity: 0.5;\n			background-color: #111014;\n			fill: #111014;\n		}\n\n		#aphrodite-diagram-preview-flow .labelBkg {\n			background-color: rgba(17, 16, 20, 0.5);\n		}\n\n		#aphrodite-diagram-preview-flow .cluster rect {\n			fill: transparent;\n			stroke: #7a0a1e;\n			stroke-width: 1px;\n		}\n\n		#aphrodite-diagram-preview-flow .cluster text {\n			fill: rgb(222.5416666667, 220.8333333334, 227.6666666667);\n		}\n\n		#aphrodite-diagram-preview-flow .cluster span {\n			color: rgb(222.5416666667, 220.8333333334, 227.6666666667);\n		}\n\n		#aphrodite-diagram-preview-flow .node .collapsed-indicator {\n			fill: #7a0a1e;\n			stroke: none;\n			opacity: 0.6;\n		}\n\n		#aphrodite-diagram-preview-flow .node .collapsed-separator {\n			stroke: #7a0a1e;\n			stroke-width: 0.75px;\n		}\n\n		#aphrodite-diagram-preview-flow div.mermaidTooltip {\n			position: absolute;\n			text-align: center;\n			max-width: 200px;\n			padding: 2px;\n			font-family: JetBrains Mono, ui-monospace, monospace;\n			font-size: 12px;\n			background: hsl(75, 11.1111111111%, 12.0588235294%);\n			border: 1px solid hsl(75, 0%, 2.0588235294%);\n			border-radius: 2px;\n			pointer-events: none;\n			z-index: 100;\n		}\n\n		#aphrodite-diagram-preview-flow .flowchartTitleText {\n			text-anchor: middle;\n			font-size: 18px;\n			fill: #dedbd2;\n		}\n\n		#aphrodite-diagram-preview-flow rect.text {\n			fill: none;\n			stroke-width: 0;\n		}\n\n		#aphrodite-diagram-preview-flow .icon-shape,\n		#aphrodite-diagram-preview-flow .image-shape {\n			background-color: #111014;\n			text-align: center;\n		}\n\n		#aphrodite-diagram-preview-flow .icon-shape p,\n		#aphrodite-diagram-preview-flow .image-shape p {\n			background-color: #111014;\n			padding: 2px;\n		}\n\n		#aphrodite-diagram-preview-flow .icon-shape .label rect,\n		#aphrodite-diagram-preview-flow .image-shape .label rect {\n			opacity: 0.5;\n			background-color: #111014;\n			fill: #111014;\n		}\n\n		#aphrodite-diagram-preview-flow .label-icon {\n			display: inline-block;\n			height: 1em;\n			overflow: visible;\n			vertical-align: -0.125em;\n		}\n\n		#aphrodite-diagram-preview-flow .node .label-icon path {\n			fill: currentColor;\n			stroke: revert;\n			stroke-width: revert;\n		}\n\n		#aphrodite-diagram-preview-flow .node .neo-node {\n			stroke: #7a0a1e;\n		}\n\n		#aphrodite-diagram-preview-flow [data-look=\"neo\"].node rect,\n		#aphrodite-diagram-preview-flow [data-look=\"neo\"].cluster rect,\n		#aphrodite-diagram-preview-flow [data-look=\"neo\"].node polygon {\n			stroke: #7a0a1e;\n			filter: drop-shadow(1px 2px 2px rgba(185, 185, 185, 1));\n		}\n\n		#aphrodite-diagram-preview-flow [data-look=\"neo\"].swimlane.cluster rect {\n			filter: none;\n		}\n\n		#aphrodite-diagram-preview-flow [data-look=\"neo\"].node path {\n			stroke: #7a0a1e;\n			stroke-width: 1px;\n		}\n\n		#aphrodite-diagram-preview-flow [data-look=\"neo\"].node .outer-path {\n			filter: drop-shadow(1px 2px 2px rgba(185, 185, 185, 1));\n		}\n\n		#aphrodite-diagram-preview-flow [data-look=\"neo\"].node .neo-line path {\n			stroke: #7a0a1e;\n			filter: none;\n		}\n\n		#aphrodite-diagram-preview-flow [data-look=\"neo\"].node circle {\n			stroke: #7a0a1e;\n			filter: drop-shadow(1px 2px 2px rgba(185, 185, 185, 1));\n		}\n\n		#aphrodite-diagram-preview-flow [data-look=\"neo\"].node circle .state-start {\n			fill: #000000;\n		}\n\n		#aphrodite-diagram-preview-flow [data-look=\"neo\"].icon-shape .icon {\n			fill: #7a0a1e;\n			filter: drop-shadow(1px 2px 2px rgba(185, 185, 185, 1));\n		}\n\n		#aphrodite-diagram-preview-flow [data-look=\"neo\"].icon-shape .icon-neo path {\n			stroke: #7a0a1e;\n			filter: drop-shadow(1px 2px 2px rgba(185, 185, 185, 1));\n		}\n\n		#aphrodite-diagram-preview-flow .node rect,\n		#aphrodite-diagram-preview-flow .node polygon,\n		#aphrodite-diagram-preview-flow .node circle,\n		#aphrodite-diagram-preview-flow .node path {\n			stroke-width: 2px;\n			rx: 0;\n			ry: 0;\n		}\n\n		#aphrodite-diagram-preview-flow svg {\n			background-color: transparent;\n		}\n\n		#aphrodite-diagram-preview-flow .edgeLabel rect {\n			fill: rgb(17, 16, 20);\n			stroke: none;\n		}\n\n		#aphrodite-diagram-preview-flow .arrowheadPath {\n			fill: rgb(222, 219, 210);\n		}\n\n		#aphrodite-diagram-preview-flow :root {\n			--mermaid-font-family: \"trebuchet ms\", verdana, arial, sans-serif;\n		}\n	</style>\n	<g>\n		<marker id=\"aphrodite-diagram-preview-flow_flowchart-v2-pointEnd\" class=\"marker flowchart-v2\"\n			viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"8\" markerHeight=\"8\"\n			orient=\"auto\">\n			<path d=\"M 0 0 L 10 5 L 0 10 z\" class=\"arrowMarkerPath\" style=\"stroke-width: 1; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-preview-flow_flowchart-v2-pointStart\" class=\"marker flowchart-v2\"\n			viewBox=\"0 0 10 10\" refX=\"4.5\" refY=\"5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"8\" markerHeight=\"8\"\n			orient=\"auto\">\n			<path d=\"M 0 5 L 10 10 L 10 0 z\" class=\"arrowMarkerPath\" style=\"stroke-width: 1; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-preview-flow_flowchart-v2-pointEnd-margin\" class=\"marker flowchart-v2\"\n			viewBox=\"0 0 11.5 14\" refX=\"11.5\" refY=\"7\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10.5\" markerHeight=\"14\"\n			orient=\"auto\">\n			<path d=\"M 0 0 L 11.5 7 L 0 14 z\" class=\"arrowMarkerPath\"\n				style=\"stroke-width: 0; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-preview-flow_flowchart-v2-pointStart-margin\" class=\"marker flowchart-v2\"\n			viewBox=\"0 0 11.5 14\" refX=\"1\" refY=\"7\" markerUnits=\"userSpaceOnUse\" markerWidth=\"11.5\" markerHeight=\"14\"\n			orient=\"auto\">\n			<polygon points=\"0,7 11.5,14 11.5,0\" class=\"arrowMarkerPath\"\n				style=\"stroke-width: 0; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-preview-flow_flowchart-v2-circleEnd\" class=\"marker flowchart-v2\"\n			viewBox=\"0 0 10 10\" refX=\"11\" refY=\"5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"11\" markerHeight=\"11\"\n			orient=\"auto\">\n			<circle cx=\"5\" cy=\"5\" r=\"5\" class=\"arrowMarkerPath\" style=\"stroke-width: 1; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-preview-flow_flowchart-v2-circleStart\" class=\"marker flowchart-v2\"\n			viewBox=\"0 0 10 10\" refX=\"-1\" refY=\"5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"11\" markerHeight=\"11\"\n			orient=\"auto\">\n			<circle cx=\"5\" cy=\"5\" r=\"5\" class=\"arrowMarkerPath\" style=\"stroke-width: 1; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-preview-flow_flowchart-v2-circleEnd-margin\" class=\"marker flowchart-v2\"\n			viewBox=\"0 0 10 10\" refY=\"5\" refX=\"12.25\" markerUnits=\"userSpaceOnUse\" markerWidth=\"14\" markerHeight=\"14\"\n			orient=\"auto\">\n			<circle cx=\"5\" cy=\"5\" r=\"5\" class=\"arrowMarkerPath\" style=\"stroke-width: 0; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-preview-flow_flowchart-v2-circleStart-margin\" class=\"marker flowchart-v2\"\n			viewBox=\"0 0 10 10\" refX=\"-2\" refY=\"5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"14\" markerHeight=\"14\"\n			orient=\"auto\">\n			<circle cx=\"5\" cy=\"5\" r=\"5\" class=\"arrowMarkerPath\" style=\"stroke-width: 0; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-preview-flow_flowchart-v2-crossEnd\" class=\"marker cross flowchart-v2\"\n			viewBox=\"0 0 11 11\" refX=\"12\" refY=\"5.2\" markerUnits=\"userSpaceOnUse\" markerWidth=\"11\" markerHeight=\"11\"\n			orient=\"auto\">\n			<path d=\"M 1,1 l 9,9 M 10,1 l -9,9\" class=\"arrowMarkerPath\"\n				style=\"stroke-width: 2; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-preview-flow_flowchart-v2-crossStart\" class=\"marker cross flowchart-v2\"\n			viewBox=\"0 0 11 11\" refX=\"-1\" refY=\"5.2\" markerUnits=\"userSpaceOnUse\" markerWidth=\"11\" markerHeight=\"11\"\n			orient=\"auto\">\n			<path d=\"M 1,1 l 9,9 M 10,1 l -9,9\" class=\"arrowMarkerPath\"\n				style=\"stroke-width: 2; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-preview-flow_flowchart-v2-crossEnd-margin\" class=\"marker cross flowchart-v2\"\n			viewBox=\"0 0 15 15\" refX=\"17.7\" refY=\"7.5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"12\" markerHeight=\"12\"\n			orient=\"auto\">\n			<path d=\"M 1,1 L 14,14 M 1,14 L 14,1\" class=\"arrowMarkerPath\" style=\"stroke-width: 2.5;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-preview-flow_flowchart-v2-crossStart-margin\" class=\"marker cross flowchart-v2\"\n			viewBox=\"0 0 15 15\" refX=\"-3.5\" refY=\"7.5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"12\" markerHeight=\"12\"\n			orient=\"auto\">\n			<path d=\"M 1,1 L 14,14 M 1,14 L 14,1\" class=\"arrowMarkerPath\"\n				style=\"stroke-width: 2.5; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<g class=\"root\">\n			<g class=\"clusters\" />\n			<g class=\"edges edgePaths\">\n				<path\n					d=\"M419.703125,211.278568812779L432.6320571881345,211.278568812779Q439.703125,211.278568812779 439.703125,204.20750100091354L439.703125,40.571067811865476Q439.703125,33.5 446.7741928118655,33.5L674.6484375,33.5L955.640625,33.5\"\n					id=\"aphrodite-diagram-preview-flow-L_ENTRY_ERROR_0\"\n					class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\"\n					style=\"stroke-dasharray: 0 0 704.3878173828125 4; stroke-dashoffset: 0;;\" data-edge=\"true\"\n					data-et=\"edge\" data-id=\"L_ENTRY_ERROR_0\"\n					data-points=\"W3sieCI6NDE5LjcwMzEyNSwieSI6MjExLjI3ODU2ODgxMjc3OX0seyJ4Ijo0MzkuNzAzMTI1LCJ5IjoyMTEuMjc4NTY4ODEyNzc5fSx7IngiOjQzOS43MDMxMjUsInkiOjMzLjV9LHsieCI6Njc0LjY0ODQzNzUsInkiOjMzLjV9LHsieCI6OTU5LjY0MDYyNSwieSI6MzMuNX1d\"\n					data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-preview-flow_flowchart-v2-pointEnd-margin)\" />\n				<path\n					d=\"M419.703125,222.10714067731584L452.6320571881345,222.10714067731584Q459.703125,222.10714067731584 459.703125,215.03607286545036L459.703125,132.37106704892602Q459.703125,125.29999923706055 466.7741928118655,125.29999923706055L674.6484375,125.29999923706055L885.59375,125.29999923706055\"\n					id=\"aphrodite-diagram-preview-flow-L_ENTRY_CODE_0\"\n					class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\"\n					style=\"stroke-dasharray: 0 0 553.3695068359375 4; stroke-dashoffset: 0;;\" data-edge=\"true\"\n					data-et=\"edge\" data-id=\"L_ENTRY_CODE_0\"\n					data-points=\"W3sieCI6NDE5LjcwMzEyNSwieSI6MjIyLjEwNzE0MDY3NzMxNTg0fSx7IngiOjQ1OS43MDMxMjUsInkiOjIyMi4xMDcxNDA2NzczMTU4NH0seyJ4Ijo0NTkuNzAzMTI1LCJ5IjoxMjUuMjk5OTk5MjM3MDYwNTV9LHsieCI6Njc0LjY0ODQzNzUsInkiOjEyNS4yOTk5OTkyMzcwNjA1NX0seyJ4Ijo4ODkuNTkzNzUsInkiOjEyNS4yOTk5OTkyMzcwNjA1NX1d\"\n					data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-preview-flow_flowchart-v2-pointEnd-margin)\" />\n				<path\n					d=\"M419.703125,232.9357125418527L472.6320571881345,232.9357125418527Q479.703125,232.9357125418527 479.703125,225.86464472998722L479.703125,224.17106628598657Q479.703125,217.0999984741211 486.7741928118655,217.0999984741211L674.6484375,217.0999984741211L919.296875,217.0999984741211\"\n					id=\"aphrodite-diagram-preview-flow-L_ENTRY_TRACKED_0\"\n					class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\"\n					style=\"stroke-dasharray: 0 0 506.1011657714844 4; stroke-dashoffset: 0;;\" data-edge=\"true\"\n					data-et=\"edge\" data-id=\"L_ENTRY_TRACKED_0\"\n					data-points=\"W3sieCI6NDE5LjcwMzEyNSwieSI6MjMyLjkzNTcxMjU0MTg1Mjd9LHsieCI6NDc5LjcwMzEyNSwieSI6MjMyLjkzNTcxMjU0MTg1Mjd9LHsieCI6NDc5LjcwMzEyNSwieSI6MjE3LjA5OTk5ODQ3NDEyMTF9LHsieCI6Njc0LjY0ODQzNzUsInkiOjIxNy4wOTk5OTg0NzQxMjExfSx7IngiOjkyMy4yOTY4NzUsInkiOjIxNy4wOTk5OTg0NzQxMjExfV0=\"\n					data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-preview-flow_flowchart-v2-pointEnd-margin)\" />\n				<path\n					d=\"M419.703125,243.7642844063895L472.6320571881345,243.7642844063895Q479.703125,243.7642844063895 479.703125,250.83535221825497L479.703125,252.52893066225562Q479.703125,259.5999984741211 486.7741928118655,259.5999984741211L519.78125,259.5999984741211\"\n					id=\"aphrodite-diagram-preview-flow-L_ENTRY_DEFAULT_0\"\n					class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\"\n					style=\"stroke-dasharray: 0 0 106.58557891845703 4; stroke-dashoffset: 0;;\" data-edge=\"true\"\n					data-et=\"edge\" data-id=\"L_ENTRY_DEFAULT_0\"\n					data-points=\"W3sieCI6NDE5LjcwMzEyNSwieSI6MjQzLjc2NDI4NDQwNjM4OTV9LHsieCI6NDc5LjcwMzEyNSwieSI6MjQzLjc2NDI4NDQwNjM4OTV9LHsieCI6NDc5LjcwMzEyNSwieSI6MjU5LjU5OTk5ODQ3NDEyMTF9LHsieCI6NTIzLjc4MTI1LCJ5IjoyNTkuNTk5OTk4NDc0MTIxMX1d\"\n					data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-preview-flow_flowchart-v2-pointEnd-margin)\" />\n				<path\n					d=\"M419.703125,254.59285627092635L452.6320571881345,254.59285627092635Q459.703125,254.59285627092635 459.703125,261.6639240827918L459.703125,344.32892989931617Q459.703125,351.39999771118164 466.7741928118655,351.39999771118164L495.703125,351.39999771118164\"\n					id=\"aphrodite-diagram-preview-flow-L_ENTRY_NOISY_0\"\n					class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\"\n					style=\"stroke-dasharray: 0 0 163.47885131835938 4; stroke-dashoffset: 0;;\" data-edge=\"true\"\n					data-et=\"edge\" data-id=\"L_ENTRY_NOISY_0\"\n					data-points=\"W3sieCI6NDE5LjcwMzEyNSwieSI6MjU0LjU5Mjg1NjI3MDkyNjM1fSx7IngiOjQ1OS43MDMxMjUsInkiOjI1NC41OTI4NTYyNzA5MjYzNX0seyJ4Ijo0NTkuNzAzMTI1LCJ5IjozNTEuMzk5OTk3NzExMTgxNjR9LHsieCI6NDk5LjcwMzEyNSwieSI6MzUxLjM5OTk5NzcxMTE4MTY0fV0=\"\n					data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-preview-flow_flowchart-v2-pointEnd-margin)\" />\n				<path\n					d=\"M1111.640625,33.5L1214.6164321881345,33.5Q1221.6875,33.5 1221.6875,40.571067811865476L1221.6875,190.6289316795082Q1221.6875,197.6999994913737 1228.7585678118655,197.6999994913737L1237.6875,197.6999994913737\"\n					id=\"aphrodite-diagram-preview-flow-L_ERROR_EMA_0\"\n					class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\"\n					style=\"stroke-dasharray: 0 0 280.9185791015625 4; stroke-dashoffset: 0;;\" data-edge=\"true\"\n					data-et=\"edge\" data-id=\"L_ERROR_EMA_0\"\n					data-points=\"W3sieCI6MTExMS42NDA2MjUsInkiOjMzLjV9LHsieCI6MTIyMS42ODc1LCJ5IjozMy41fSx7IngiOjEyMjEuNjg3NSwieSI6MTk3LjY5OTk5OTQ5MTM3Mzd9LHsieCI6MTI0MS42ODc1LCJ5IjoxOTcuNjk5OTk5NDkxMzczN31d\"\n					data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-preview-flow_flowchart-v2-pointEnd-margin)\" />\n				<path\n					d=\"M1181.6875,125.29999923706055L1194.6164321881345,125.29999923706055Q1201.6875,125.29999923706055 1201.6875,132.37106704892602L1201.6875,200.3289311708819Q1201.6875,207.39999898274738 1208.7585678118655,207.39999898274738L1237.6875,207.39999898274738\"\n					id=\"aphrodite-diagram-preview-flow-L_CODE_EMA_0\"\n					class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\"\n					style=\"stroke-dasharray: 0 0 128.77169799804688 4; stroke-dashoffset: 0;;\" data-edge=\"true\"\n					data-et=\"edge\" data-id=\"L_CODE_EMA_0\"\n					data-points=\"W3sieCI6MTE4MS42ODc1LCJ5IjoxMjUuMjk5OTk5MjM3MDYwNTV9LHsieCI6MTIwMS42ODc1LCJ5IjoxMjUuMjk5OTk5MjM3MDYwNTV9LHsieCI6MTIwMS42ODc1LCJ5IjoyMDcuMzk5OTk4OTgyNzQ3Mzh9LHsieCI6MTI0MS42ODc1LCJ5IjoyMDcuMzk5OTk4OTgyNzQ3Mzh9XQ==\"\n					data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-preview-flow_flowchart-v2-pointEnd-margin)\" />\n				<path d=\"M1147.984375,217.0999984741211L1237.6875,217.0999984741211\"\n					id=\"aphrodite-diagram-preview-flow-L_TRACKED_EMA_0\"\n					class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\"\n					style=\"stroke-dasharray: 0 0 85.703125 4; stroke-dashoffset: 0;;\" data-edge=\"true\" data-et=\"edge\"\n					data-id=\"L_TRACKED_EMA_0\"\n					data-points=\"W3sieCI6MTE0Ny45ODQzNzUsInkiOjIxNy4wOTk5OTg0NzQxMjExfSx7IngiOjEyNDEuNjg3NSwieSI6MjE3LjA5OTk5ODQ3NDEyMTF9XQ==\"\n					data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-preview-flow_flowchart-v2-pointEnd-margin)\" />\n				<path\n					d=\"M825.515625,259.5999984741211L1035.640625,259.5999984741211L1194.6164321881345,259.5999984741211Q1201.6875,259.5999984741211 1201.6875,252.52893066225562L1201.6875,233.87106577736026Q1201.6875,226.79999796549478 1208.7585678118655,226.79999796549478L1237.6875,226.79999796549478\"\n					id=\"aphrodite-diagram-preview-flow-L_DEFAULT_EMA_0\"\n					class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\"\n					style=\"stroke-dasharray: 0 0 435.6435852050781 4; stroke-dashoffset: 0;;\" data-edge=\"true\"\n					data-et=\"edge\" data-id=\"L_DEFAULT_EMA_0\"\n					data-points=\"W3sieCI6ODI1LjUxNTYyNSwieSI6MjU5LjU5OTk5ODQ3NDEyMTF9LHsieCI6MTAzNS42NDA2MjUsInkiOjI1OS41OTk5OTg0NzQxMjExfSx7IngiOjEyMDEuNjg3NSwieSI6MjU5LjU5OTk5ODQ3NDEyMTF9LHsieCI6MTIwMS42ODc1LCJ5IjoyMjYuNzk5OTk3OTY1NDk0Nzh9LHsieCI6MTI0MS42ODc1LCJ5IjoyMjYuNzk5OTk3OTY1NDk0Nzh9XQ==\"\n					data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-preview-flow_flowchart-v2-pointEnd-margin)\" />\n				<path\n					d=\"M849.59375,351.39999771118164L1214.6164321881345,351.39999771118164Q1221.6875,351.39999771118164 1221.6875,344.32892989931617L1221.6875,243.57106526873395Q1221.6875,236.49999745686847 1228.7585678118655,236.49999745686847L1237.6875,236.49999745686847\"\n					id=\"aphrodite-diagram-preview-flow-L_NOISY_EMA_0\"\n					class=\"edge-thickness-normal edge-pattern-dotted edge-thickness-normal edge-pattern-solid flowchart-link\"\n					style=\"stroke-dasharray: 0 0 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4; stroke-dashoffset: 0;;\"\n					data-edge=\"true\" data-et=\"edge\" data-id=\"L_NOISY_EMA_0\"\n					data-points=\"W3sieCI6ODQ5LjU5Mzc1LCJ5IjozNTEuMzk5OTk3NzExMTgxNjR9LHsieCI6MTIyMS42ODc1LCJ5IjozNTEuMzk5OTk3NzExMTgxNjR9LHsieCI6MTIyMS42ODc1LCJ5IjoyMzYuNDk5OTk3NDU2ODY4NDd9LHsieCI6MTI0MS42ODc1LCJ5IjoyMzYuNDk5OTk3NDU2ODY4NDd9XQ==\"\n					data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-preview-flow_flowchart-v2-pointEnd-margin)\" />\n				<path d=\"M1476,217.0999984741211L1512,217.0999984741211\"\n					id=\"aphrodite-diagram-preview-flow-L_EMA_BUDGET_0\"\n					class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\"\n					style=\"stroke-dasharray: 0 0 32 4; stroke-dashoffset: 0;;\" data-edge=\"true\" data-et=\"edge\"\n					data-id=\"L_EMA_BUDGET_0\"\n					data-points=\"W3sieCI6MTQ3NiwieSI6MjE3LjA5OTk5ODQ3NDEyMTF9LHsieCI6MTUxNiwieSI6MjE3LjA5OTk5ODQ3NDEyMTF9XQ==\"\n					data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-preview-flow_flowchart-v2-pointEnd-margin)\" />\n				<path\n					d=\"M419.703125,265.42142813546315L432.6320571881345,265.42142813546315Q439.703125,265.42142813546315 439.703125,272.4924959473286L439.703125,444.92892837343726Q439.703125,451.99999618530273 446.7741928118655,451.99999618530273L495.703125,451.99999618530273\"\n					id=\"aphrodite-diagram-preview-flow-L_ENTRY_FOOT_0\"\n					class=\"edge-thickness-normal edge-pattern-dotted edge-thickness-normal edge-pattern-solid flowchart-link\"\n					style=\"stroke-dasharray: 0 0 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4; stroke-dashoffset: 0;;\"\n					data-edge=\"true\" data-et=\"edge\" data-id=\"L_ENTRY_FOOT_0\"\n					data-points=\"W3sieCI6NDE5LjcwMzEyNSwieSI6MjY1LjQyMTQyODEzNTQ2MzE1fSx7IngiOjQzOS43MDMxMjUsInkiOjI2NS40MjE0MjgxMzU0NjMxNX0seyJ4Ijo0MzkuNzAzMTI1LCJ5Ijo0NTEuOTk5OTk2MTg1MzAyNzN9LHsieCI6NDk5LjcwMzEyNSwieSI6NDUxLjk5OTk5NjE4NTMwMjczfV0=\"\n					data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-preview-flow_flowchart-v2-pointEnd-margin)\" />\n			</g>\n			<g class=\"edgeLabels\">\n				<g class=\"edgeLabel\" transform=\"translate(1035.640625, 350.89999771118164)\">\n					<g class=\"label\" data-id=\"L_NOISY_EMA_0\" transform=\"translate(0, -10.5)\">\n						<g>\n							<rect class=\"background\" style=\"\" x=\"-30.8984375\" y=\"-1\" width=\"61.796875\" height=\"23\" />\n							<text y=\"-10.1\" text-anchor=\"middle\" style=\"\">\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\" text-anchor=\"middle\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">exempt\n									</tspan>\n								</tspan>\n							</text>\n						</g>\n					</g>\n				</g>\n			</g>\n			<g class=\"nodes\">\n				<g class=\"node default\" id=\"aphrodite-diagram-preview-flow-flowchart-ENTRY-0\" data-look=\"neo\"\n					transform=\"translate(215.8515625, 238.3499984741211)\">\n					<rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-203.8515625\"\n						y=\"-47.900001525878906\" width=\"407.703125\" height=\"95.80000305175781\" rx=\"0\" ry=\"0\" />\n					<g class=\"label\" style=\"\" transform=\"translate(0, -35.900001525878906)\">\n						<rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\" />\n						<g>\n							<rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\" /><text\n								y=\"-10.1\" style=\"\">\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">every\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0blob\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0is</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0classified\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0first\n									</tspan>\n								</tspan>\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">16</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0pipeline\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0types\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0in</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0the\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0README\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0framing\n									</tspan>\n								</tspan>\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"2.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">the</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0semantic\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0upgrade\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0layer\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0refines\n									</tspan>\n								</tspan>\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"3.2em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">generic\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0text,\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0terminal\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0and\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0log\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0blobs\n									</tspan>\n								</tspan>\n							</text>\n						</g>\n					</g>\n				</g>\n				<g class=\"node default\" id=\"aphrodite-diagram-preview-flow-flowchart-ERROR-1\" data-look=\"neo\"\n					transform=\"translate(1035.640625, 33.5)\">\n					<rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-76\" y=\"-21.5\" width=\"152\"\n						height=\"43\" rx=\"0\" ry=\"0\" />\n					<g class=\"label\" style=\"\" transform=\"translate(0, -9.5)\">\n						<rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\" />\n						<g>\n							<rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\" /><text\n								y=\"-10.1\" style=\"\">\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">error\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0-</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0x8</tspan>\n								</tspan>\n							</text>\n						</g>\n					</g>\n				</g>\n				<g class=\"node default\" id=\"aphrodite-diagram-preview-flow-flowchart-CODE-2\" data-look=\"neo\"\n					transform=\"translate(1035.640625, 125.29999923706055)\">\n					<rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-146.046875\"\n						y=\"-30.299999237060547\" width=\"292.09375\" height=\"60.599998474121094\" rx=\"0\" ry=\"0\" />\n					<g class=\"label\" style=\"\" transform=\"translate(0, -18.299999237060547)\">\n						<rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\" />\n						<g>\n							<rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\" /><text\n								y=\"-10.1\" style=\"\">\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">code\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0types\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0-</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0x3.0\n									</tspan>\n								</tspan>\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">the</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\n										\xA0code_multiplier</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0default\n									</tspan>\n								</tspan>\n							</text>\n						</g>\n					</g>\n				</g>\n				<g class=\"node default\" id=\"aphrodite-diagram-preview-flow-flowchart-TRACKED-3\" data-look=\"neo\"\n					transform=\"translate(1035.640625, 217.0999984741211)\">\n					<rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-112.34375\" y=\"-21.5\"\n						width=\"224.6875\" height=\"43\" rx=\"0\" ry=\"0\" />\n					<g class=\"label\" style=\"\" transform=\"translate(0, -9.5)\">\n						<rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\" />\n						<g>\n							<rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\" /><text\n								y=\"-10.1\" style=\"\">\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">diff,\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0git,\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0text\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0-</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0x2</tspan>\n								</tspan>\n							</text>\n						</g>\n					</g>\n				</g>\n				<g class=\"node default\" id=\"aphrodite-diagram-preview-flow-flowchart-DEFAULT-4\" data-look=\"neo\"\n					transform=\"translate(674.6484375, 259.5999984741211)\">\n					<rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-150.8671875\" y=\"-21.5\"\n						width=\"301.734375\" height=\"43\" rx=\"0\" ry=\"0\" />\n					<g class=\"label\" style=\"\" transform=\"translate(0, -9.5)\">\n						<rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\" />\n						<g>\n							<rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\" /><text\n								y=\"-10.1\" style=\"\">\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\n										tool_output,</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0json,\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0rest\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0-</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0x1</tspan>\n								</tspan>\n							</text>\n						</g>\n					</g>\n				</g>\n				<g class=\"node default\" id=\"aphrodite-diagram-preview-flow-flowchart-NOISY-5\" data-look=\"neo\"\n					transform=\"translate(674.6484375, 351.39999771118164)\">\n					<rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-174.9453125\"\n						y=\"-30.299999237060547\" width=\"349.890625\" height=\"60.599998474121094\" rx=\"0\" ry=\"0\" />\n					<g class=\"label\" style=\"\" transform=\"translate(0, -18.299999237060547)\">\n						<rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\" />\n						<g>\n							<rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\" /><text\n								y=\"-10.1\" style=\"\">\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">linter,\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\n										\xA0build_output,</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0log\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0-</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0BASE\n									</tspan>\n								</tspan>\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">pinned,\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0never\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0halved,\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0never\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0tuned\n									</tspan>\n								</tspan>\n							</text>\n						</g>\n					</g>\n				</g>\n				<g class=\"node default\" id=\"aphrodite-diagram-preview-flow-flowchart-EMA-6\" data-look=\"neo\"\n					transform=\"translate(1358.84375, 217.0999984741211)\">\n					<rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-117.15625\"\n						y=\"-39.099998474121094\" width=\"234.3125\" height=\"78.19999694824219\" rx=\"0\" ry=\"0\" />\n					<g class=\"label\" style=\"\" transform=\"translate(0, -27.099998474121094)\">\n						<rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\" />\n						<g>\n							<rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\" /><text\n								y=\"-10.1\" style=\"\">\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">EMA</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0auto-tune\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0on</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0top:\n									</tspan>\n								</tspan>\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">ratio\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0over\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA020</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0-</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0x2.0\n									</tspan>\n								</tspan>\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"2.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">ratio\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0under\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA03</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0-</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0x0.5\n									</tspan>\n								</tspan>\n							</text>\n						</g>\n					</g>\n				</g>\n				<g class=\"node default\" id=\"aphrodite-diagram-preview-flow-flowchart-BUDGET-7\" data-look=\"neo\"\n					transform=\"translate(1690.9609375, 217.0999984741211)\">\n					<rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-174.9609375\" y=\"-21.5\"\n						width=\"349.921875\" height=\"43\" rx=\"0\" ry=\"0\" />\n					<g class=\"label\" style=\"\" transform=\"translate(0, -9.5)\">\n						<rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\" />\n						<g>\n							<rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\" /><text\n								y=\"-10.1\" style=\"\">\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">budget\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0header\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0scales\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0x0.5\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0to</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0x1.0\n									</tspan>\n								</tspan>\n							</text>\n						</g>\n					</g>\n				</g>\n				<g class=\"node default\" id=\"aphrodite-diagram-preview-flow-flowchart-FOOT-8\" data-look=\"neo\"\n					transform=\"translate(669.84375, 451.99999618530273)\">\n					<rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-170.140625\"\n						y=\"-30.299999237060547\" width=\"340.28125\" height=\"60.599998474121094\" rx=\"0\" ry=\"0\" />\n					<g class=\"label\" style=\"\" transform=\"translate(0, -18.299999237060547)\">\n						<rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\" />\n						<g>\n							<rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\" /><text\n								y=\"-10.1\" style=\"\">\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">the</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0full\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0registry\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0holds\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA030</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0types\n									</tspan>\n								</tspan>\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">see</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0the\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\n										\xA0content-type</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0taxonomy\n									</tspan>\n								</tspan>\n							</text>\n						</g>\n					</g>\n				</g>\n			</g>\n		</g>\n	</g>\n	<defs>\n		<filter id=\"aphrodite-diagram-preview-flow-drop-shadow\" height=\"130%\" width=\"130%\">\n			<feDropShadow dx=\"4\" dy=\"4\" stdDeviation=\"0\" flood-opacity=\"0.06\" flood-color=\"#000000\" />\n		</filter>\n	</defs>\n	<defs>\n		<filter id=\"aphrodite-diagram-preview-flow-drop-shadow-small\" height=\"150%\" width=\"150%\">\n			<feDropShadow dx=\"2\" dy=\"2\" stdDeviation=\"0\" flood-opacity=\"0.06\" flood-color=\"#000000\" />\n		</filter>\n	</defs>\n</svg>\n";
// Source/pages/case-study.astro
var case_study_exports = /* @__PURE__ */ __exportAll({
	default: () => $$CaseStudy,
	file: () => $$file,
	url: () => $$url
});
var $$CaseStudy = createComponent(($$result, $$props, $$slots) => {
	const Study$1 = Study;
	const Metrics = [
		{
			Id: "study.average-per-call",
			Label: "AVERAGE SAVED PER CALL",
			Unit: "TOKENS PER CALL",
			Accent: "text-weathered-teal"
		},
		{
			Id: "study.sessions.saved",
			Label: "SESSIONS WITH NONZERO ESTIMATED REDUCTION",
			Unit: `OF THE ${Study$1.Sessions} MEASURED`,
			Accent: "text-bone-white"
		},
		{
			Id: "study.median-ratio",
			Label: "MEDIAN SESSION RATIO",
			Unit: "SAVED OF THE BUDGET",
			Accent: "text-weathered-teal"
		}
	].map(({ Id, Label, Unit, Accent }) => ({
		Label,
		Unit,
		Accent,
		Fact: Figure(Id)
	}));
	const Bands = [
		{
			Id: "study.band.chat-only",
			Label: "CHAT-ONLY SESSIONS",
			Bar: "bg-zinc-dust"
		},
		{
			Id: "study.band.light-developer",
			Label: "LIGHT DEVELOPER SESSION",
			Bar: "bg-weathered-teal"
		},
		{
			Id: "study.band.tool-heavy",
			Label: "LONG TOOL-HEAVY SESSIONS",
			Bar: "bg-stamped-canary"
		},
		{
			Id: "study.band.pure-tool",
			Label: "PURE-TOOL WORKLOADS",
			Bar: "bg-raw-blood"
		}
	].map(({ Id, Label, Bar }) => ({
		Label,
		Bar,
		...Band(Id)
	}));
	const Claims = [
		{
			Stamp: "bg-raw-blood text-bone-white",
			Subject: "THE MARKER",
			Verb: "IS THE CONTRACT",
			Body: "<<<CCR:hash|type|size>>> - the address, the kind, and the cost of going back, in one string both the agent and every retrieval entry point understand."
		},
		{
			Stamp: "bg-stamped-canary text-soot-black",
			Subject: "THE CLASSIFIER",
			Verb: "IS THE GATE",
			Body: "Nothing moves until the type is named - because the type is what decides whether content earns visibility or a squeeze."
		},
		{
			Stamp: "bg-weathered-teal text-bone-white",
			Subject: "THE THRESHOLDS",
			Verb: "ARE THE KNOBS",
			Body: "A handful of per-type multipliers and a fill threshold - each mapped to one question the agent asks, each tuned by what sessions prove."
		}
	];
	const RealWorld = Benchmark.RealWorld.map(({ Type, Ratio, Percent }) => ({
		Type: Type.replace(/_/g, " ").toUpperCase(),
		Ratio,
		Percent
	}));
	const BenchTypes = Benchmark.Classes.map(({ Label, Without, With, Savings, Percent }) => ({
		Type: Label.toUpperCase(),
		Pair: `${Without} → ${With}`,
		Savings,
		Width: Percent
	}));
	const Bench = { Latency: Benchmark.Latency };
	const Tiers = [
		{
			Tier: "ERROR",
			Note: "errors stay visible longest"
		},
		{
			Tier: "CODE",
			Note: "source sits at the base threshold unless code_multiplier raises it"
		},
		{
			Tier: "DIFF / TRACKED",
			Note: "history, halved"
		},
		{
			Tier: "DEFAULT",
			Note: "the baseline"
		},
		{
			Tier: "NOISY (BASE)",
			Note: "never halved, always squeezed"
		}
	].map(({ Tier: Name, Note }) => ({
		...Tier(Name),
		Note
	}));
	const Classifier = {
		PipelineTypes: Narrative.CatalogTypes,
		RegistryTypes: Registry.Types
	};
	const Layers = [
		{
			N: "01",
			Name: "CLASSIFY",
			Figure: Benchmark.Classify,
			Tone: "teal",
			Note: "the gate: one type per invocation, first match wins"
		},
		{
			N: "02",
			Name: "PREVIEW",
			Figure: Narrative.PreviewTokens,
			Tone: "canary",
			Note: "the answer to 'do I care?' without the content"
		},
		{
			N: "03",
			Name: "STORE",
			Figure: "BLAKE3",
			Tone: "raw",
			Note: "SQLite / in-memory, the marker is the receipt"
		},
		{
			N: "04",
			Name: "DECIDE",
			Figure: "RETRIEVE?",
			Tone: "bone",
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
			Id: "claims",
			Label: "THE CLAIMS"
		},
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
			Incident: [["Compressing a Hermes wrapper stored the <em>extracted</em> content under", "<code class=\"font-mono text-base\">hash(extracted)</code> and discarded the original."].join(" "), [
				"A failed command's <code class=\"font-mono text-base\">exit_code</code> and",
				"<code class=\"font-mono text-base\">error</code> fields were unrecoverable after",
				"compression, and caller JSON that merely matched a wrapper shape - e.g.",
				"<code class=\"font-mono text-base\">{\"content\":\"hi\",\"id\":42}</code> - got",
				"permanently collapsed to one field."
			].join(" ")],
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
			Incident: [[
				"v1.3.8 published to crates.io but was <em>uninstallable</em>:",
				"<code class=\"font-mono text-base\">Cargo.toml</code> had",
				"<code class=\"font-mono text-base\">exclude = [..., \"*.md\", ...]</code>, and cargo",
				"applies <code class=\"font-mono text-base\">exclude</code> at publish time -",
				"recursively."
			].join(" "), [
				"The six <code class=\"font-mono text-base\">builtin_directives/*.md</code>",
				"files embedded via <code class=\"font-mono text-base\">include_str!</code> were",
				"stripped from the tarball, so the local checkout built fine and CI's Test job",
				"passed - but <code class=\"font-mono text-base\">cargo install aphrodite</code>",
				"failed at compile time."
			].join(" ")],
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
			Incident: [[
				"Issue #40: the plugin's Python shim resolved the runtime home from",
				"<code class=\"font-mono text-base\">$HERMES_HOME</code> while the Rust half",
				"resolved it from <code class=\"font-mono text-base\">$HOME</code>."
			].join(" "), [
				"Whenever they diverged - the shipped Docker image, profile gateways - the shim",
				"looked for binaries in a directory that never existed, disabled the plugin, and",
				"orphaned the previous runtime home, config and provider API key included."
			].join(" ")],
			Fix: [[
				"The shim resolves the runtime home once",
				"(<code class=\"font-mono text-base\">$APHRODITE_HOME</code> override, then",
				"<code class=\"font-mono text-base\">&lt;hermes-home&gt;/aphrodite</code>, then",
				"<code class=\"font-mono text-base\">~/.hermes/aphrodite</code>) and exports it to",
				"the Rust half through <code class=\"font-mono text-base\">APHRODITE_HOME</code>, so",
				"the dylib and the spawned proxy agree by construction."
			].join(" "), "Legacy installs are adopted with a one-line warning, never migrated."],
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
			Incident: [[
				"The download scripts used to fetch the release-hosted per-target checksums and",
				"had warn-and-skip paths - a missing checksum file or tool degraded to a warning",
				"instead of a refusal."
			].join(" "), "A plugin-hardening catalog review called it out."],
			Fix: [[
				"The pinned tree's <code class=\"font-mono text-base\">SHA256SUMS.txt</code> became",
				"the only checksum source of truth: a missing file, a",
				"<code class=\"font-mono text-base\">BINARY_VERSION</code> mismatch, a missing",
				"target block, or a missing asset entry is a hard refusal (exit 1), and a missing",
				"<code class=\"font-mono text-base\">shasum</code>/<code class=\"font-mono text-base\">sha256sum</code>",
				"tool is a hard refusal rather than a skipped check."
			].join(" "), [
				"The legacy",
				"<code class=\"font-mono text-base\">~/.hermes/aphrodite</code> home adoption in the",
				"runtime lookup is also gone."
			].join(" ")],
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
	for (const Arc of Arcs) for (const Version of Arc.Span.match(/v[\d.]+/g) ?? []) Release(Version);
	const ArcsWithBeats = Arcs.map((Arc) => ({
		...Arc,
		Beats: [
			{
				Label: "The incident.",
				Sentences: [Arc.Incident].flat()
			},
			{
				Label: "The fix.",
				Sentences: [Arc.Fix].flat()
			},
			{
				Label: "Mechanics today.",
				Sentences: [Arc.Today].flat()
			}
		]
	}));
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "CASE STUDY // APHRODITE",
		"Description": `Why Aphrodite is shaped this way: the marker is the contract, the classifier is the gate, the thresholds are the knobs - measured at ${Study$1.TokensSaved} context tokens saved across ${Study$1.Sessions} real sessions.`
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageShell", $$PageShell, { "Rhythm": "wide" }, { "default": ($$result) => renderTemplate`  ${maybeRenderHead($$result)}<header class="relative flex w-full flex-col items-start pt-12" data-enter> ${renderComponent($$result, "ZineTape", $$ZineTape, {
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
</p>  <div class="zine-box-subtle mt-24 w-full max-w-4xl border-[3px] border-raw-blood bg-soot-black p-8 sm:p-10" data-enter="240"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "dust" }, { "default": ($$result) => renderTemplate`CONTEXT TOKENS SAVED · 200 REAL SESSIONS` })} <div class="mt-6 font-headline text-5xl font-black tracking-tighter text-bone-white drop-shadow-[3px_3px_0px_#520612] sm:text-7xl"> <span>${Study$1.TokensSaved}</span> </div> <div class="mt-6 flex flex-wrap items-center gap-8 font-mono text-base font-bold"> <span class="text-stamped-canary">${Study$1.SavedPct.replace("%", "")}% OF THE TOTAL BUDGET</span> </div> <p class="mt-6 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The percentage is the honest way to read the number: ${Study$1.TokensSaved} tokens is
						only impressive once you know what it was a share of. ${Study$1.SessionsUnsaved} of
						the ${Study$1.Sessions} sessions saved nothing at all, and the mean is pulled up by
						the long tool-heavy runs - which is why the median sits beside it.
</p> <div class="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3"> ${Metrics.map(({ Label, Fact, Unit, Accent }) => renderTemplate`<div class="border-t border-oxblood-dark pt-4"> <div class="type-meta font-black text-zinc-dust">${Label}</div> <div${addAttribute(`mt-2 font-headline text-2xl font-black tracking-tight ${Accent}`, "class")}> ${Fact.Value} </div> <div class="mt-1 type-caption text-zinc-dust">${Unit}</div> <div class="mt-1 type-caption text-zinc-dust"> ${Fact.Kind.toUpperCase()} &bull; ${Fact.Scope} </div> </div>`)} </div> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": [`SRC: ${Cite(Study$1.From)}.`] })} </div> ` })} </header>  <section id="claims" class="relative w-full" data-reveal> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "tab",
		"Label": "THE THREE CLAIMS",
		"Color": "raw"
	})} <p class="mt-16 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The whole argument fits in three lines, and every section that follows is the evidence for one of
				them.
</p> <!-- The three claims arrive as one plate on a delay of their own: they
			     are a single argument stated three ways, so staggering them one by
			     one would make them read as three separate points. --> <div class="mt-16 isolate grid grid-cols-1 gap-16 lg:grid-cols-3" data-enter="180"> ${Claims.map(({ Stamp, Subject, Verb, Body }) => renderTemplate`<div class="zine-box-subtle relative border-[3px] border-oxblood-dark bg-carbon-void p-6 pt-9 transition-transform duration-200 hover:rotate-0 sm:-rotate-[1deg] sm:hover:rotate-0"> <div${addAttribute(`inline-block px-3 py-1 font-mono text-base font-black uppercase tracking-widest ${Stamp}`, "class")}> ${Subject} </div> <h2 class="mt-8 font-headline text-2xl font-black uppercase tracking-tight text-bone-white"> ${Verb} </h2> <p class="mt-6 font-body text-base leading-relaxed text-bone-newsprint">${Body}</p> </div>`)} </div> <p class="mt-16 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
That is the whole architecture.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The agent keeps its budget for reasoning, and pays for detail only when detail is the
				answer.
</p> </section> ${renderComponent($$result, "SectionNav", $$SectionNav, { "Sections": Sections })}  <section id="problem" class="relative w-full" data-reveal> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "tab",
		"Label": "I // THE PROBLEM",
		"Color": "raw"
	})} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "crimson",
		"Size": "lg",
		"Rotate": "-rotate-[0.6deg]",
		"Class": "w-full",
		"Wipe": true
	}, { "default": ($$result) => renderTemplate` <h2 class="font-headline text-2xl font-black uppercase tracking-tight text-bone-white sm:text-4xl">
The flood is not the data's fault
</h2> <p class="mt-8 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Every file read, build, code search, or browser open floods the agent's
					context with raw output - compilation logs, accessibility trees, JSON blobs.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The agent spends its budget reading noise instead of reasoning.
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
Aphrodite replaces the output with a compact, structured preview - ${Narrative.PreviewTokens}
of metadata instead of hundreds - and keeps the full content
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
` })} </div> </section>  <section id="gate" class="relative w-full" data-reveal> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "tab",
		"Label": "II // THE GATE",
		"Color": "canary",
		"Rotate": "rotate-1"
	})} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "canary",
		"Size": "lg",
		"Rotate": "rotate-[0.5deg]",
		"Class": "w-full",
		"Wipe": true
	}, { "default": ($$result) => renderTemplate` <h2 class="font-headline text-2xl font-black uppercase tracking-tight text-bone-white sm:text-4xl">
The classifier is the gate
</h2> <p class="mt-8 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Why classify before compressing?
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Because "compress everything equally" destroyed signal.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
A compiler error and a verbose build log are both output - but one must
					stay visible and the other should never have been shown in full.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
A single compression policy cannot serve both.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
So the type-aware classifier runs first - ${Benchmark.Classify}, first
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
This is the "secret sauce" made plain:${" "} <strong class="text-bone-white">the classifier is the gate</strong>.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Nothing is compressed, stored, or marked until the gate has named it - and
					the name is what everything downstream keys on.
</p> ` })} <figure class="mt-24 border border-oxblood-dark bg-asphalt-panel p-4" data-diagram="preview-flow" data-enter="220"> <div class="overflow-x-auto">${unescapeHTML(preview_flow_default)}</div> <figcaption class="mt-6 font-mono text-base font-black uppercase tracking-widest text-zinc-dust">
M2 // PREVIEW FLOW
</figcaption> <p class="mt-6 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The figure runs in one direction: every blob is classified first, then routed into
					one of five threshold groups:
</p> <ul class="mt-3 max-w-3xl space-y-2 font-body text-base leading-relaxed text-bone-newsprint"> <li class="border-l-4 border-raw-blood pl-4">error ×8</li> <li class="border-l-4 border-raw-blood pl-4">code ×3.0</li> <li class="border-l-4 border-raw-blood pl-4">tracked ×2</li> <li class="border-l-4 border-raw-blood pl-4">default ×1</li> <li class="border-l-4 border-raw-blood pl-4">and the noisy base group.</li> </ul> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The noisy group is pinned - linter, build_output and log are never halved and
					never tuned.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
On top of the tier sits the EMA auto-tune:
</p> <ul class="mt-3 max-w-3xl space-y-2 font-body text-base leading-relaxed text-bone-newsprint"> <li class="border-l-4 border-raw-blood pl-4">
a type whose measured ratio stays above 20 doubles its patience
</li> <li class="border-l-4 border-raw-blood pl-4">a type under 3 halves it</li> <li class="border-l-4 border-raw-blood pl-4">
and the budget header scales the result between ×0.5 and ×1.0.
</li> </ul> </figure> </section>  <section id="contract" class="relative w-full" data-reveal> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "tab",
		"Label": "III // THE CONTRACT",
		"Color": "teal"
	})} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "teal",
		"Size": "lg",
		"Rotate": "-rotate-[0.4deg]",
		"Class": "w-full",
		"Wipe": true
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
The marker carries no content of its own - three fields and no payload - so it can
					be printed, copied and passed around without spending the budget it was minted to
					save.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The store behind it is deliberately boring: BLAKE3 → SQLite (persistent, the
<span class="text-weathered-teal">:9798</span> token listener) or in-memory
					DashMap (10K entries, the <span class="text-weathered-teal">:9797</span>
cache listener).
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Storage is not the interesting problem; the interesting problem is that the
					agent's decision needs a stable address - and that is all the marker has to
					be.
</p> ` })} </section>  <section id="loop" class="relative w-full" data-reveal> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "tab",
		"Label": "IV // THE LOOP",
		"Color": "raw",
		"Rotate": "rotate-1"
	})} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "crimson",
		"Size": "lg",
		"Rotate": "rotate-[0.4deg]",
		"Class": "w-full",
		"Wipe": true
	}, { "default": ($$result) => renderTemplate` <h2 class="font-headline text-2xl font-black uppercase tracking-tight text-bone-white sm:text-4xl">
Four layers, one decision
</h2> <p class="mt-8 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The pipeline is short on purpose: classify, preview, store, decide.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The whole compress step is sub-millisecond - end-to-end latency is ${Bench.Latency}
including the HTTP round-trip - because the design spends its complexity budget
					on the decision, not the transform.
</p>  <div class="mt-16 isolate grid grid-cols-1 items-start gap-16 sm:grid-cols-2 xl:grid-cols-4" data-enter="200"> ${Layers.map(({ N, Name, Figure, Tone, Note }) => renderTemplate`<div class="zine-box-subtle relative border-[3px] border-oxblood-dark bg-carbon-void p-6 pt-9 transition-transform duration-200 hover:rotate-0 sm:-rotate-[1.2deg] sm:hover:rotate-0"> ${renderComponent($$result, "ZineTape", $$ZineTape, {
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
</p> <div class="mt-16"> ${renderComponent($$result, "ZinePipeline", $$ZinePipeline, { "Mode": "decide" })} </div> ` })} </section>  <section id="knobs" class="relative w-full" data-reveal> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "tab",
		"Label": "V // THE KNOBS",
		"Color": "canary"
	})} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "canary",
		"Size": "lg",
		"Rotate": "-rotate-[0.5deg]",
		"Class": "w-full",
		"Wipe": true
	}, { "default": ($$result) => renderTemplate` <div class="grid grid-cols-1 gap-32 lg:grid-cols-2" data-enter="200"> <div> <h2 class="font-headline text-2xl font-black uppercase tracking-tight text-bone-white sm:text-4xl">
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
</p> </div> <!-- THRESHOLD TIERS: the multiplier each content type carries. --> <div class="flex flex-col gap-6"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "dust" }, { "default": ($$result) => renderTemplate`THRESHOLD TIERS` })} ${Tiers.map(({ Tier, Types, Multiplier, Note }) => renderTemplate`<div class="flex items-center justify-between gap-8 border border-oxblood-dark bg-asphalt-panel px-4 py-3"> <div class="min-w-0"> <div class="font-mono text-base font-black uppercase tracking-widest text-bone-white"> ${Tier} <span class="ml-2 text-stamped-canary">${Multiplier}</span> </div> <div class="truncate font-mono text-base text-zinc-dust">${Types}</div> </div> <div class="hidden shrink-0 text-right font-mono text-base text-weathered-teal sm:block"> ${Note} </div> </div>`)} <div class="font-mono text-base leading-relaxed text-zinc-dust">
HIGHER MULTIPLIER = LONGER THE CONTENT STAYS VISIBLE BEFORE COMPRESSION
</div> <div class="font-mono text-base leading-relaxed text-zinc-dust">
CODE ${Narrative.CodeMultiplier} IS THE SHIPPED DEFAULT (${Narrative.CodeMultiplierKey.toUpperCase()}) - SOURCE SITS AT THE BASE THRESHOLD UNTIL AN OPERATOR RAISES IT
</div> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": [`SRC: ${Cite(Narrative.From)}.`] })} </div> </div> ` })} </section>  <section id="evidence" class="relative w-full" data-reveal> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "tab",
		"Label": "VI // THE EVIDENCE",
		"Color": "teal",
		"Rotate": "rotate-1"
	})} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "teal",
		"Size": "lg",
		"Rotate": "-rotate-[0.4deg]",
		"Class": "w-full",
		"Wipe": true
	}, { "default": ($$result) => renderTemplate` <h2 class="font-headline text-2xl font-black uppercase tracking-tight text-bone-white sm:text-4xl">
What one output costs
</h2> <p class="mt-8 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Two views survive here because they are the argument's own: what each output
					class compressed to in the wild, and what the standard corpus paid per type.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The corpus ratios, the ${Benchmark.Ceiling} ceiling, the median and the reproduce
					commands are on the benchmarks page.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Every bar is its ratio read as a width - ${Benchmark.RealWorld[0].Ratio} fills${" "} ${Benchmark.RealWorld[0].Percent}% of the scale - so the two columns compare
					magnitudes without normalising either one.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Read together, the plates carry the argument's sharpest claim: the ratio is a
					property of the content type, not of the session that produced it.
</p> <div class="mt-16 grid grid-cols-1 gap-24 lg:grid-cols-2" data-enter="200"> <!-- Real-world per-output compression --><div class="flex flex-col gap-8"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"Tone": "dust",
		"As": "div"
	}, { "default": ($$result) => renderTemplate`
REAL-WORLD PER-OUTPUT COMPRESSION (ORIG → ${Narrative.MarkerTokens.toUpperCase()} MARKER) &bull; ESTIMATED
` })} ${RealWorld.map(({ Type, Ratio, Percent }) => renderTemplate`${renderComponent($$result, "ZineStatBar", $$ZineStatBar, {
		"Label": Type,
		"Ratio": Ratio,
		"Percent": Percent,
		"Color": "canary"
	})}`)} </div> <!-- Per-type standard-corpus bars --> <div class="flex flex-col gap-8"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"Tone": "dust",
		"As": "div"
	}, { "default": ($$result) => renderTemplate`
PER-TYPE COMPRESSION (STANDARD CORPUS) &bull; MEASURED
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
` })} </div> </div>  <div class="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-2" data-enter="320"> <div class="border-l-4 border-weathered-teal pl-6"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"Tone": "teal",
		"As": "div"
	}, { "default": ($$result) => renderTemplate`RETRIEVAL TAX` })} <p class="mt-6 font-body text-base leading-relaxed text-bone-newsprint">
Retrieval re-entry cost <span class="text-stamped-canary">${Study$1.TaxCalls}</span> calls
							and <span class="text-stamped-canary">${Study$1.TaxTokens}</span> tokens across the
							study - the price of going back for detail.
</p> <p class="mt-3 font-body text-base leading-relaxed text-bone-newsprint">
It is the reason the design pushes previews so hard: the tax only gets paid
							when the preview fails to answer the question, so the preview is engineered
							to answer most of them.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Read against the ledger, that is about ${Study$1.TaxPct} of the tokens the study saved:
							the whole cost of going back, paid only on the turns a preview did not
							answer. Paying the full output again instead would have cost roughly ${Study$1.TaxFactor}
times as much.
</p> </div> <div class="border border-oxblood-dark bg-asphalt-panel p-5 font-body text-base leading-relaxed text-bone-newsprint"> <p> <span class="font-mono text-base font-bold uppercase tracking-widest text-zinc-dust">
CONFIDENCE ·${" "} </span>The causal result - CCR removes context pressure for large repeated tool
							outputs, and tool-heavy usage benefits far more than chat - is high.
</p> <p class="mt-3">
The exact percentage is a band: the marker's byte size is the only trace of
							the original content (the inline store is session-scoped), so savings were
							estimated with a calibrated chars/tok ratio; sensitivity across${" "} ${Study$1.CharsPerTok} chars/tok spans ${Study$1.Band}, centered ${Study$1.BandCenter}.
</p> <p class="mt-3">
And the study is an author-run reconstruction, not a randomised comparison: it establishes
							neither better task success nor universal cost savings. What it measures is how much context
							the markers replaced in these sessions, and what that reconstruction cost in tokens.
</p> </div> </div>  <div class="mt-24" data-enter="440"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"Tone": "dust",
		"As": "div"
	}, { "default": ($$result) => renderTemplate`SAVINGS BY SESSION SHAPE` })} <p class="mt-6 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The same engine saves nothing in a chat and almost everything in a tool-heavy run,
						because the ratio tracks how much raw output the session produces at all.
</p> <div class="mt-8 flex flex-col gap-6"> ${Bands.map(({ Label, Range, Percent, Bar, Kind }) => renderTemplate`<div> <div class="flex flex-wrap items-baseline justify-between gap-4 font-mono text-base"> <span class="font-black uppercase tracking-widest text-bone-white">${Label}</span> <span class="flex items-baseline gap-3"> ${Kind === "simulated" && renderTemplate`<span class="border border-raw-blood px-1.5 py-0.5 type-meta font-black text-raw-blood">
SIMULATED
</span>`} <span class="text-stamped-canary">${Range}</span> </span> </div> <div class="mt-2 h-3 w-full border border-oxblood-dark bg-soot-black"> <div${addAttribute(`h-full ${Bar}`, "class")}${addAttribute(`width: ${Percent}%`, "style")}></div> </div> </div>`)} </div> <p class="mt-6 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
A pure-tool workload is the ceiling case and a chat-only session is the floor, which is
						why the study reports a median beside the mean. The fourth bar is a simulated loop, not a
						recorded session: it is marked as one because a stress test read as a fourth observation would
						be the page's own over-claim.
</p> <div class="mt-6 font-mono text-base leading-relaxed text-zinc-dust">
SAVINGS SCALE WITH TOOL-OUTPUT VOLUME AND SESSION LENGTH - THE SAME ENGINE, FOUR
						DIFFERENT PAYOFFS, ALL FROM THE SAME KNOBS.
</div> </div> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": [`SRC: ${Cite(Study$1.From)} (the per-output compression and the session-shape bands) · ${Cite(Benchmark.From)} (the per-type table and the round trips).`] })} ` })} </section>  <section id="history" class="relative w-full" data-reveal> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "tab",
		"Label": "VII // THE HISTORY SPINE",
		"Color": "raw"
	})} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "crimson",
		"Size": "lg",
		"Rotate": "-rotate-[0.3deg]",
		"Class": "w-full",
		"Wipe": true
	}, { "default": ($$result) => renderTemplate` <h2 class="font-headline text-2xl font-black uppercase tracking-tight text-bone-white sm:text-4xl">
Five incidents that set the laws
</h2> <p class="mt-8 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Every rule in the engine was paid for once.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Each arc runs the same three beats: the incident, the fix, and the
					mechanic that still stands today.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
All of it is public record - the CHANGELOG entries and the release notes.
</p> <div class="mt-24 flex flex-col gap-32"> ${ArcsWithBeats.map(({ N, Span, Law, Tone, Border, Title, Beats, Src }) => renderTemplate`<article${addAttribute(`border-l-4 ${Border} pl-6 sm:pl-10`, "class")} data-reveal> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"Tone": Tone,
		"As": "div"
	}, { "default": ($$result) => renderTemplate`${`${N} · ${Span} · ${Law}`}` })} <h3 class="mt-6 font-headline text-xl font-black uppercase tracking-tight text-bone-white sm:text-2xl"> ${Title} </h3> ${Beats.map((Beat, BeatIndex) => Beat.Sentences.map((Sentence, Index) => renderTemplate`<p${addAttribute([BeatIndex === 0 && Index === 0 ? "mt-6" : "mt-3", "max-w-3xl font-body text-base leading-relaxed text-bone-newsprint"], "class:list")}> ${Index === 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate` <strong class="text-bone-white">${Beat.Label}</strong>${" "} ` })}`} <span>${unescapeHTML(Sentence)}</span> </p>`))} ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": [Src] })} </article>`)} </div> ` })} </section>  ${renderComponent($$result, "Related", $$Related, { "Links": [
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
	] })} ` })} ${renderComponent($$result, "ZineDiagramNav", $$ZineDiagramNav, {})} ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/case-study.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/case-study.astro";
var $$url = "/case-study";
// \0virtual:astro:page:Source/pages/case-study@_@astro
var page = () => case_study_exports;
export { page };
