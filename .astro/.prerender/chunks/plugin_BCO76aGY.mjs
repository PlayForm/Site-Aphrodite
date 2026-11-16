import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { E as unescapeHTML, _ as renderTemplate, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, a as Versions, i as Stamps, l as ExternalLinks, m as Routes, n as $$ZineKicker, t as $$Base } from "./Base_DYyCOQNQ.mjs";
import { a as $$Related } from "./DocsSidebar_BegnaZwP.mjs";
import { n as $$PageShell, t as $$ZineTape } from "./ZineTape_CVpY0Eb1.mjs";
import { t as $$PageHeader } from "./PageHeader_BrcAOhPj.mjs";
import { t as $$CodeFence } from "./CodeFence_DvHIyNPh.mjs";
import { t as $$ZineBox } from "./ZineBox_Bx8tYYbD.mjs";
import { t as $$ZineStamp } from "./ZineStamp_DfhrgJvn.mjs";
import { t as $$ZineStatBar } from "./ZineStatBar_DXy-gPsS.mjs";
import { t as $$ZineLesson } from "./ZineLesson_jOnxj05f.mjs";
import { t as $$ZinePullQuote } from "./ZinePullQuote_CWKoI_lR.mjs";
import { t as $$ZineReveal } from "./ZineReveal_Bbo-pknp.mjs";
import { t as $$ZineFlow } from "./ZineFlow_8jIudqBQ.mjs";
import { t as $$ZineSource } from "./ZineSource_Cgxm1vKC.mjs";
import { t as $$ZineDiagramNav } from "./ZineDiagramNav_4mg_4jxJ.mjs";
import { a as hook_chain_default, n as PluginHookCard, r as PluginSequence } from "./Hooks_BVWFe9KC.mjs";
import { c as Hooks, l as ToolNames, s as HookNames, t as Assert } from "./Roster_DWXQuOMb.mjs";
// Source/Content/Mermaid/context-engine.svg?raw
var context_engine_default = "<svg id=\"aphrodite-diagram-context-engine\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" class=\"flowchart\"\n	viewBox=\"-198.69921875 -28 1742.18359375 477.6000061035156\" role=\"graphics-document document\"\n	aria-roledescription=\"flowchart-v2\">\n	<style>\n		#aphrodite-diagram-context-engine {\n			font-family: JetBrains Mono, ui-monospace, monospace;\n			font-size: 16px;\n			fill: #dedbd2;\n		}\n\n		@keyframes edge-animation-frame {\n			from {\n				stroke-dashoffset: 0;\n			}\n		}\n\n		@keyframes dash {\n			to {\n				stroke-dashoffset: 0;\n			}\n		}\n\n		#aphrodite-diagram-context-engine .edge-animation-slow {\n			stroke-dasharray: 9, 5 !important;\n			stroke-dashoffset: 900;\n			animation: dash 50s linear infinite;\n			stroke-linecap: round;\n		}\n\n		#aphrodite-diagram-context-engine .edge-animation-fast {\n			stroke-dasharray: 9, 5 !important;\n			stroke-dashoffset: 900;\n			animation: dash 20s linear infinite;\n			stroke-linecap: round;\n		}\n\n		#aphrodite-diagram-context-engine .error-icon {\n			fill: hsl(75, 11.1111111111%, 12.0588235294%);\n		}\n\n		#aphrodite-diagram-context-engine .error-text {\n			fill: rgb(222.5416666667, 220.8333333334, 227.6666666667);\n			stroke: rgb(222.5416666667, 220.8333333334, 227.6666666667);\n		}\n\n		#aphrodite-diagram-context-engine .edge-thickness-normal {\n			stroke-width: 1px;\n		}\n\n		#aphrodite-diagram-context-engine .edge-thickness-thick {\n			stroke-width: 3.5px;\n		}\n\n		#aphrodite-diagram-context-engine .edge-pattern-solid {\n			stroke-dasharray: 0;\n		}\n\n		#aphrodite-diagram-context-engine .edge-thickness-invisible {\n			stroke-width: 0;\n			fill: none;\n		}\n\n		#aphrodite-diagram-context-engine .edge-pattern-dashed {\n			stroke-dasharray: 3;\n		}\n\n		#aphrodite-diagram-context-engine .edge-pattern-dotted {\n			stroke-dasharray: 2;\n		}\n\n		#aphrodite-diagram-context-engine .marker {\n			fill: #3d040d;\n			stroke: #3d040d;\n		}\n\n		#aphrodite-diagram-context-engine .marker.cross {\n			stroke: #3d040d;\n		}\n\n		#aphrodite-diagram-context-engine svg {\n			font-family: JetBrains Mono, ui-monospace, monospace;\n			font-size: 16px;\n		}\n\n		#aphrodite-diagram-context-engine p {\n			margin: 0;\n		}\n\n		#aphrodite-diagram-context-engine .label {\n			font-family: JetBrains Mono, ui-monospace, monospace;\n			color: #dedbd2;\n		}\n\n		#aphrodite-diagram-context-engine .cluster-label text {\n			fill: rgb(222.5416666667, 220.8333333334, 227.6666666667);\n		}\n\n		#aphrodite-diagram-context-engine .cluster-label span {\n			color: rgb(222.5416666667, 220.8333333334, 227.6666666667);\n		}\n\n		#aphrodite-diagram-context-engine .cluster-label span p {\n			background-color: transparent;\n		}\n\n		#aphrodite-diagram-context-engine .label text,\n		#aphrodite-diagram-context-engine span {\n			fill: #dedbd2;\n			color: #dedbd2;\n		}\n\n		#aphrodite-diagram-context-engine .node rect,\n		#aphrodite-diagram-context-engine .node circle,\n		#aphrodite-diagram-context-engine .node ellipse,\n		#aphrodite-diagram-context-engine .node polygon,\n		#aphrodite-diagram-context-engine .node path {\n			fill: #111014;\n			stroke: #7a0a1e;\n			stroke-width: 1px;\n		}\n\n		#aphrodite-diagram-context-engine .rough-node .label text,\n		#aphrodite-diagram-context-engine .node .label text,\n		#aphrodite-diagram-context-engine .image-shape .label,\n		#aphrodite-diagram-context-engine .icon-shape .label {\n			text-anchor: middle;\n		}\n\n		#aphrodite-diagram-context-engine .node .katex path {\n			fill: #000;\n			stroke: #000;\n			stroke-width: 1px;\n		}\n\n		#aphrodite-diagram-context-engine .rough-node .label,\n		#aphrodite-diagram-context-engine .node .label,\n		#aphrodite-diagram-context-engine .image-shape .label,\n		#aphrodite-diagram-context-engine .icon-shape .label {\n			text-align: center;\n		}\n\n		#aphrodite-diagram-context-engine .node.clickable {\n			cursor: pointer;\n		}\n\n		#aphrodite-diagram-context-engine .root .anchor path {\n			fill: #3d040d !important;\n			stroke-width: 0;\n			stroke: #3d040d;\n		}\n\n		#aphrodite-diagram-context-engine .arrowheadPath {\n			fill: #0b0b0b;\n		}\n\n		#aphrodite-diagram-context-engine .edgePaths .path {\n			stroke: #3d040d;\n			stroke-width: 1px;\n		}\n\n		#aphrodite-diagram-context-engine .flowchart-link {\n			stroke: #3d040d;\n			fill: none;\n		}\n\n		#aphrodite-diagram-context-engine .edgeLabel {\n			background-color: #111014;\n			text-align: center;\n		}\n\n		#aphrodite-diagram-context-engine .edgeLabel p {\n			background-color: #111014;\n		}\n\n		#aphrodite-diagram-context-engine .edgeLabel rect {\n			opacity: 0.5;\n			background-color: #111014;\n			fill: #111014;\n		}\n\n		#aphrodite-diagram-context-engine .labelBkg {\n			background-color: rgba(17, 16, 20, 0.5);\n		}\n\n		#aphrodite-diagram-context-engine .cluster rect {\n			fill: transparent;\n			stroke: #7a0a1e;\n			stroke-width: 1px;\n		}\n\n		#aphrodite-diagram-context-engine .cluster text {\n			fill: rgb(222.5416666667, 220.8333333334, 227.6666666667);\n		}\n\n		#aphrodite-diagram-context-engine .cluster span {\n			color: rgb(222.5416666667, 220.8333333334, 227.6666666667);\n		}\n\n		#aphrodite-diagram-context-engine .node .collapsed-indicator {\n			fill: #7a0a1e;\n			stroke: none;\n			opacity: 0.6;\n		}\n\n		#aphrodite-diagram-context-engine .node .collapsed-separator {\n			stroke: #7a0a1e;\n			stroke-width: 0.75px;\n		}\n\n		#aphrodite-diagram-context-engine div.mermaidTooltip {\n			position: absolute;\n			text-align: center;\n			max-width: 200px;\n			padding: 2px;\n			font-family: JetBrains Mono, ui-monospace, monospace;\n			font-size: 12px;\n			background: hsl(75, 11.1111111111%, 12.0588235294%);\n			border: 1px solid hsl(75, 0%, 2.0588235294%);\n			border-radius: 2px;\n			pointer-events: none;\n			z-index: 100;\n		}\n\n		#aphrodite-diagram-context-engine .flowchartTitleText {\n			text-anchor: middle;\n			font-size: 18px;\n			fill: #dedbd2;\n		}\n\n		#aphrodite-diagram-context-engine rect.text {\n			fill: none;\n			stroke-width: 0;\n		}\n\n		#aphrodite-diagram-context-engine .icon-shape,\n		#aphrodite-diagram-context-engine .image-shape {\n			background-color: #111014;\n			text-align: center;\n		}\n\n		#aphrodite-diagram-context-engine .icon-shape p,\n		#aphrodite-diagram-context-engine .image-shape p {\n			background-color: #111014;\n			padding: 2px;\n		}\n\n		#aphrodite-diagram-context-engine .icon-shape .label rect,\n		#aphrodite-diagram-context-engine .image-shape .label rect {\n			opacity: 0.5;\n			background-color: #111014;\n			fill: #111014;\n		}\n\n		#aphrodite-diagram-context-engine .label-icon {\n			display: inline-block;\n			height: 1em;\n			overflow: visible;\n			vertical-align: -0.125em;\n		}\n\n		#aphrodite-diagram-context-engine .node .label-icon path {\n			fill: currentColor;\n			stroke: revert;\n			stroke-width: revert;\n		}\n\n		#aphrodite-diagram-context-engine .node .neo-node {\n			stroke: #7a0a1e;\n		}\n\n		#aphrodite-diagram-context-engine [data-look=\"neo\"].node rect,\n		#aphrodite-diagram-context-engine [data-look=\"neo\"].cluster rect,\n		#aphrodite-diagram-context-engine [data-look=\"neo\"].node polygon {\n			stroke: #7a0a1e;\n			filter: drop-shadow(1px 2px 2px rgba(185, 185, 185, 1));\n		}\n\n		#aphrodite-diagram-context-engine [data-look=\"neo\"].swimlane.cluster rect {\n			filter: none;\n		}\n\n		#aphrodite-diagram-context-engine [data-look=\"neo\"].node path {\n			stroke: #7a0a1e;\n			stroke-width: 1px;\n		}\n\n		#aphrodite-diagram-context-engine [data-look=\"neo\"].node .outer-path {\n			filter: drop-shadow(1px 2px 2px rgba(185, 185, 185, 1));\n		}\n\n		#aphrodite-diagram-context-engine [data-look=\"neo\"].node .neo-line path {\n			stroke: #7a0a1e;\n			filter: none;\n		}\n\n		#aphrodite-diagram-context-engine [data-look=\"neo\"].node circle {\n			stroke: #7a0a1e;\n			filter: drop-shadow(1px 2px 2px rgba(185, 185, 185, 1));\n		}\n\n		#aphrodite-diagram-context-engine [data-look=\"neo\"].node circle .state-start {\n			fill: #000000;\n		}\n\n		#aphrodite-diagram-context-engine [data-look=\"neo\"].icon-shape .icon {\n			fill: #7a0a1e;\n			filter: drop-shadow(1px 2px 2px rgba(185, 185, 185, 1));\n		}\n\n		#aphrodite-diagram-context-engine [data-look=\"neo\"].icon-shape .icon-neo path {\n			stroke: #7a0a1e;\n			filter: drop-shadow(1px 2px 2px rgba(185, 185, 185, 1));\n		}\n\n		#aphrodite-diagram-context-engine .node rect,\n		#aphrodite-diagram-context-engine .node polygon,\n		#aphrodite-diagram-context-engine .node circle,\n		#aphrodite-diagram-context-engine .node path {\n			stroke-width: 2px;\n			rx: 0;\n			ry: 0;\n		}\n\n		#aphrodite-diagram-context-engine svg {\n			background-color: transparent;\n		}\n\n		#aphrodite-diagram-context-engine .edgeLabel rect {\n			fill: rgb(17, 16, 20);\n			stroke: none;\n		}\n\n		#aphrodite-diagram-context-engine .arrowheadPath {\n			fill: rgb(222, 219, 210);\n		}\n\n		#aphrodite-diagram-context-engine :root {\n			--mermaid-font-family: \"trebuchet ms\", verdana, arial, sans-serif;\n		}\n	</style>\n	<g>\n		<marker id=\"aphrodite-diagram-context-engine_flowchart-v2-pointEnd\" class=\"marker flowchart-v2\"\n			viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"8\" markerHeight=\"8\"\n			orient=\"auto\">\n			<path d=\"M 0 0 L 10 5 L 0 10 z\" class=\"arrowMarkerPath\" style=\"stroke-width: 1; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-context-engine_flowchart-v2-pointStart\" class=\"marker flowchart-v2\"\n			viewBox=\"0 0 10 10\" refX=\"4.5\" refY=\"5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"8\" markerHeight=\"8\"\n			orient=\"auto\">\n			<path d=\"M 0 5 L 10 10 L 10 0 z\" class=\"arrowMarkerPath\" style=\"stroke-width: 1; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-context-engine_flowchart-v2-pointEnd-margin\" class=\"marker flowchart-v2\"\n			viewBox=\"0 0 11.5 14\" refX=\"11.5\" refY=\"7\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10.5\" markerHeight=\"14\"\n			orient=\"auto\">\n			<path d=\"M 0 0 L 11.5 7 L 0 14 z\" class=\"arrowMarkerPath\"\n				style=\"stroke-width: 0; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-context-engine_flowchart-v2-pointStart-margin\" class=\"marker flowchart-v2\"\n			viewBox=\"0 0 11.5 14\" refX=\"1\" refY=\"7\" markerUnits=\"userSpaceOnUse\" markerWidth=\"11.5\" markerHeight=\"14\"\n			orient=\"auto\">\n			<polygon points=\"0,7 11.5,14 11.5,0\" class=\"arrowMarkerPath\"\n				style=\"stroke-width: 0; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-context-engine_flowchart-v2-circleEnd\" class=\"marker flowchart-v2\"\n			viewBox=\"0 0 10 10\" refX=\"11\" refY=\"5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"11\" markerHeight=\"11\"\n			orient=\"auto\">\n			<circle cx=\"5\" cy=\"5\" r=\"5\" class=\"arrowMarkerPath\" style=\"stroke-width: 1; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-context-engine_flowchart-v2-circleStart\" class=\"marker flowchart-v2\"\n			viewBox=\"0 0 10 10\" refX=\"-1\" refY=\"5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"11\" markerHeight=\"11\"\n			orient=\"auto\">\n			<circle cx=\"5\" cy=\"5\" r=\"5\" class=\"arrowMarkerPath\" style=\"stroke-width: 1; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-context-engine_flowchart-v2-circleEnd-margin\" class=\"marker flowchart-v2\"\n			viewBox=\"0 0 10 10\" refY=\"5\" refX=\"12.25\" markerUnits=\"userSpaceOnUse\" markerWidth=\"14\" markerHeight=\"14\"\n			orient=\"auto\">\n			<circle cx=\"5\" cy=\"5\" r=\"5\" class=\"arrowMarkerPath\" style=\"stroke-width: 0; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-context-engine_flowchart-v2-circleStart-margin\" class=\"marker flowchart-v2\"\n			viewBox=\"0 0 10 10\" refX=\"-2\" refY=\"5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"14\" markerHeight=\"14\"\n			orient=\"auto\">\n			<circle cx=\"5\" cy=\"5\" r=\"5\" class=\"arrowMarkerPath\" style=\"stroke-width: 0; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-context-engine_flowchart-v2-crossEnd\" class=\"marker cross flowchart-v2\"\n			viewBox=\"0 0 11 11\" refX=\"12\" refY=\"5.2\" markerUnits=\"userSpaceOnUse\" markerWidth=\"11\" markerHeight=\"11\"\n			orient=\"auto\">\n			<path d=\"M 1,1 l 9,9 M 10,1 l -9,9\" class=\"arrowMarkerPath\"\n				style=\"stroke-width: 2; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-context-engine_flowchart-v2-crossStart\" class=\"marker cross flowchart-v2\"\n			viewBox=\"0 0 11 11\" refX=\"-1\" refY=\"5.2\" markerUnits=\"userSpaceOnUse\" markerWidth=\"11\" markerHeight=\"11\"\n			orient=\"auto\">\n			<path d=\"M 1,1 l 9,9 M 10,1 l -9,9\" class=\"arrowMarkerPath\"\n				style=\"stroke-width: 2; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-context-engine_flowchart-v2-crossEnd-margin\" class=\"marker cross flowchart-v2\"\n			viewBox=\"0 0 15 15\" refX=\"17.7\" refY=\"7.5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"12\" markerHeight=\"12\"\n			orient=\"auto\">\n			<path d=\"M 1,1 L 14,14 M 1,14 L 14,1\" class=\"arrowMarkerPath\" style=\"stroke-width: 2.5;\" />\n		</marker>\n		<marker id=\"aphrodite-diagram-context-engine_flowchart-v2-crossStart-margin\" class=\"marker cross flowchart-v2\"\n			viewBox=\"0 0 15 15\" refX=\"-3.5\" refY=\"7.5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"12\" markerHeight=\"12\"\n			orient=\"auto\">\n			<path d=\"M 1,1 L 14,14 M 1,14 L 14,1\" class=\"arrowMarkerPath\"\n				style=\"stroke-width: 2.5; stroke-dasharray: 1, 0;\" />\n		</marker>\n		<g class=\"root\">\n			<g class=\"clusters\" />\n			<g class=\"edges edgePaths\">\n				<path d=\"M304.125,184.39999771118164L340.125,184.39999771118164\"\n					id=\"aphrodite-diagram-context-engine-L_OPTIN_REG_0\"\n					class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\"\n					style=\"stroke-dasharray: 0 0 32 4; stroke-dashoffset: 0;;\" data-edge=\"true\" data-et=\"edge\"\n					data-id=\"L_OPTIN_REG_0\"\n					data-points=\"W3sieCI6MzA0LjEyNSwieSI6MTg0LjM5OTk5NzcxMTE4MTY0fSx7IngiOjM0NC4xMjUsInkiOjE4NC4zOTk5OTc3MTExODE2NH1d\"\n					data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-context-engine_flowchart-v2-pointEnd-margin)\" />\n				<path\n					d=\"M655.515625,172.21999816894532L668.4445571881345,172.21999816894532Q675.515625,172.21999816894532 675.515625,165.14893035707985L675.515625,49.37106704892602Q675.515625,42.29999923706055 682.5866928118655,42.29999923706055L711.515625,42.29999923706055\"\n					id=\"aphrodite-diagram-context-engine-L_REG_REC_0\"\n					class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\"\n					style=\"stroke-dasharray: 0 0 176.59173583984375 4; stroke-dashoffset: 0;;\" data-edge=\"true\"\n					data-et=\"edge\" data-id=\"L_REG_REC_0\"\n					data-points=\"W3sieCI6NjU1LjUxNTYyNSwieSI6MTcyLjIxOTk5ODE2ODk0NTMyfSx7IngiOjY3NS41MTU2MjUsInkiOjE3Mi4yMTk5OTgxNjg5NDUzMn0seyJ4Ijo2NzUuNTE1NjI1LCJ5Ijo0Mi4yOTk5OTkyMzcwNjA1NX0seyJ4Ijo3MTUuNTE1NjI1LCJ5Ijo0Mi4yOTk5OTkyMzcwNjA1NX1d\"\n					data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-context-engine_flowchart-v2-pointEnd-margin)\" />\n				<path\n					d=\"M655.515625,180.33999786376953L688.4445571881345,180.33999786376953Q695.515625,180.33999786376953 695.515625,173.26893005190405L695.515625,141.17106628598657Q695.515625,134.0999984741211 702.5866928118655,134.0999984741211L711.515625,134.0999984741211\"\n					id=\"aphrodite-diagram-context-engine-L_REG_FALSE_0\"\n					class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\"\n					style=\"stroke-dasharray: 0 0 92.91171264648438 4; stroke-dashoffset: 0;;\" data-edge=\"true\"\n					data-et=\"edge\" data-id=\"L_REG_FALSE_0\"\n					data-points=\"W3sieCI6NjU1LjUxNTYyNSwieSI6MTgwLjMzOTk5Nzg2Mzc2OTUzfSx7IngiOjY5NS41MTU2MjUsInkiOjE4MC4zMzk5OTc4NjM3Njk1M30seyJ4Ijo2OTUuNTE1NjI1LCJ5IjoxMzQuMDk5OTk4NDc0MTIxMX0seyJ4Ijo3MTUuNTE1NjI1LCJ5IjoxMzQuMDk5OTk4NDc0MTIxMX1d\"\n					data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-context-engine_flowchart-v2-pointEnd-margin)\" />\n				<path\n					d=\"M655.515625,188.45999755859376L688.4445571881345,188.45999755859376Q695.515625,188.45999755859376 695.515625,195.53106537045923L695.515625,227.6289291363767Q695.515625,234.6999969482422 702.5866928118655,234.6999969482422L711.515625,234.6999969482422\"\n					id=\"aphrodite-diagram-context-engine-L_REG_PASS_0\"\n					class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\"\n					style=\"stroke-dasharray: 0 0 92.91173553466797 4; stroke-dashoffset: 0;;\" data-edge=\"true\"\n					data-et=\"edge\" data-id=\"L_REG_PASS_0\"\n					data-points=\"W3sieCI6NjU1LjUxNTYyNSwieSI6MTg4LjQ1OTk5NzU1ODU5Mzc2fSx7IngiOjY5NS41MTU2MjUsInkiOjE4OC40NTk5OTc1NTg1OTM3Nn0seyJ4Ijo2OTUuNTE1NjI1LCJ5IjoyMzQuNjk5OTk2OTQ4MjQyMn0seyJ4Ijo3MTUuNTE1NjI1LCJ5IjoyMzQuNjk5OTk2OTQ4MjQyMn1d\"\n					data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-context-engine_flowchart-v2-pointEnd-margin)\" />\n				<path\n					d=\"M655.515625,196.57999725341796L668.4445571881345,196.57999725341796Q675.515625,196.57999725341796 675.515625,203.65106506528343L675.515625,354.6289291363767Q675.515625,361.6999969482422 682.5866928118655,361.6999969482422L711.515625,361.6999969482422\"\n					id=\"aphrodite-diagram-context-engine-L_REG_REAL_0\"\n					class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\"\n					style=\"stroke-dasharray: 0 0 211.79171752929688 4; stroke-dashoffset: 0;;\" data-edge=\"true\"\n					data-et=\"edge\" data-id=\"L_REG_REAL_0\"\n					data-points=\"W3sieCI6NjU1LjUxNTYyNSwieSI6MTk2LjU3OTk5NzI1MzQxNzk2fSx7IngiOjY3NS41MTU2MjUsInkiOjE5Ni41Nzk5OTcyNTM0MTc5Nn0seyJ4Ijo2NzUuNTE1NjI1LCJ5IjozNjEuNjk5OTk2OTQ4MjQyMn0seyJ4Ijo3MTUuNTE1NjI1LCJ5IjozNjEuNjk5OTk2OTQ4MjQyMn1d\"\n					data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-context-engine_flowchart-v2-pointEnd-margin)\" />\n				<path d=\"M1113.59375,361.6999969482422L1149.59375,361.6999969482422\"\n					id=\"aphrodite-diagram-context-engine-L_REAL_NO_0\"\n					class=\"edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link\"\n					style=\"stroke-dasharray: 0 0 32 4; stroke-dashoffset: 0;;\" data-edge=\"true\" data-et=\"edge\"\n					data-id=\"L_REAL_NO_0\"\n					data-points=\"W3sieCI6MTExMy41OTM3NSwieSI6MzYxLjY5OTk5Njk0ODI0MjJ9LHsieCI6MTE1My41OTM3NSwieSI6MzYxLjY5OTk5Njk0ODI0MjJ9XQ==\"\n					data-look=\"neo\" marker-end=\"url(#aphrodite-diagram-context-engine_flowchart-v2-pointEnd-margin)\" />\n			</g>\n			<g class=\"edgeLabels\" />\n			<g class=\"nodes\">\n				<g class=\"node default\" id=\"aphrodite-diagram-context-engine-flowchart-OPTIN-0\" data-look=\"neo\"\n					transform=\"translate(158.0625, 184.39999771118164)\">\n					<rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-146.0625\" y=\"-39.099998474121094\"\n						width=\"292.125\" height=\"78.19999694824219\" rx=\"0\" ry=\"0\" />\n					<g class=\"label\" style=\"\" transform=\"translate(0, -27.099998474121094)\">\n						<rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\" />\n						<g>\n							<rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\" /><text\n								y=\"-10.1\" style=\"\">\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">activation\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0is</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0opt-in:\n									</tspan>\n								</tspan>\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\n										APHRODITE_CONTEXT_ENGINE=1</tspan>\n								</tspan>\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"2.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">the</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0TOML\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0flag\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0defaults\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0true\n									</tspan>\n								</tspan>\n							</text>\n						</g>\n					</g>\n				</g>\n				<g class=\"node default\" id=\"aphrodite-diagram-context-engine-flowchart-REG-1\" data-look=\"neo\"\n					transform=\"translate(499.8203125, 184.39999771118164)\">\n					<rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-155.6953125\"\n						y=\"-30.299999237060547\" width=\"311.390625\" height=\"60.599998474121094\" rx=\"0\" ry=\"0\" />\n					<g class=\"label\" style=\"\" transform=\"translate(0, -18.299999237060547)\">\n						<rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\" />\n						<g>\n							<rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\" /><text\n								y=\"-10.1\" style=\"\">\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">the</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0registered\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0engine\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0is</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0thin\n									</tspan>\n								</tspan>\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">and</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\n										\xA0non-destructive</tspan>\n								</tspan>\n							</text>\n						</g>\n					</g>\n				</g>\n				<g class=\"node default\" id=\"aphrodite-diagram-context-engine-flowchart-REC-2\" data-look=\"neo\"\n					transform=\"translate(895.28125, 42.29999923706055)\">\n					<rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-179.765625\"\n						y=\"-30.299999237060547\" width=\"359.53125\" height=\"60.599998474121094\" rx=\"0\" ry=\"0\" />\n					<g class=\"label\" style=\"\" transform=\"translate(0, -18.299999237060547)\">\n						<rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\" />\n						<g>\n							<rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\" /><text\n								y=\"-10.1\" style=\"\">\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\n										update_from_response</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0records\n									</tspan>\n								</tspan>\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">prompt,\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0completion\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0and\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0total\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0usage\n									</tspan>\n								</tspan>\n							</text>\n						</g>\n					</g>\n				</g>\n				<g class=\"node default\" id=\"aphrodite-diagram-context-engine-flowchart-FALSE-3\" data-look=\"neo\"\n					transform=\"translate(904.9140625, 134.0999984741211)\">\n					<rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-189.3984375\" y=\"-21.5\"\n						width=\"378.796875\" height=\"43\" rx=\"0\" ry=\"0\" />\n					<g class=\"label\" style=\"\" transform=\"translate(0, -9.5)\">\n						<rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\" />\n						<g>\n							<rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\" /><text\n								y=\"-10.1\" style=\"\">\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\n										should_compress</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0always\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0returns\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0False\n									</tspan>\n								</tspan>\n							</text>\n						</g>\n					</g>\n				</g>\n				<g class=\"node default\" id=\"aphrodite-diagram-context-engine-flowchart-PASS-4\" data-look=\"neo\"\n					transform=\"translate(904.9140625, 234.6999969482422)\">\n					<rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-189.3984375\"\n						y=\"-39.099998474121094\" width=\"378.796875\" height=\"78.19999694824219\" rx=\"0\" ry=\"0\" />\n					<g class=\"label\" style=\"\" transform=\"translate(0, -27.099998474121094)\">\n						<rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\" />\n						<g>\n							<rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\" /><text\n								y=\"-10.1\" style=\"\">\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">compress\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0returns\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0the\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0transcript\n									</tspan>\n								</tspan>\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">unchanged\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0-</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0never\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0rewrites\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0messages,\n									</tspan>\n								</tspan>\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"2.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">never\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0touches\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0the\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0inline\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0store\n									</tspan>\n								</tspan>\n							</text>\n						</g>\n					</g>\n				</g>\n				<g class=\"node default\" id=\"aphrodite-diagram-context-engine-flowchart-REAL-5\" data-look=\"neo\"\n					transform=\"translate(914.5546875, 361.6999969482422)\">\n					<rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-199.0390625\"\n						y=\"-47.900001525878906\" width=\"398.078125\" height=\"95.80000305175781\" rx=\"0\" ry=\"0\" />\n					<g class=\"label\" style=\"\" transform=\"translate(0, -35.900001525878906)\">\n						<rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\" />\n						<g>\n							<rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\" /><text\n								y=\"-10.1\" style=\"\">\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">the</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0real\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0per-turn\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0mechanism:\n									</tspan>\n								</tspan>\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">the</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\n										\xA0pre_llm_call</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0injection\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0assembler\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0-</tspan>\n								</tspan>\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"2.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">directives,\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0nudges,\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0background\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0status\n									</tspan>\n								</tspan>\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"3.2em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">and</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0recall\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0under\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0the\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA04,000-char\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0budget\n									</tspan>\n								</tspan>\n							</text>\n						</g>\n					</g>\n				</g>\n				<g class=\"node default\" id=\"aphrodite-diagram-context-engine-flowchart-NO-6\" data-look=\"neo\"\n					transform=\"translate(1328.5390625, 361.6999969482422)\">\n					<rect class=\"basic label-container\" style=\"stroke-width: 2px;\" x=\"-174.9453125\"\n						y=\"-30.299999237060547\" width=\"349.890625\" height=\"60.599998474121094\" rx=\"0\" ry=\"0\" />\n					<g class=\"label\" style=\"\" transform=\"translate(0, -18.299999237060547)\">\n						<rect rx=\"0\" ry=\"0\" style=\"stroke-width: 2px;\" />\n						<g>\n							<rect class=\"background\" style=\"stroke: none; stroke-width: 2px;\" rx=\"0\" ry=\"0\" /><text\n								y=\"-10.1\" style=\"\">\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"-0.1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">no</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\n										\xA0middle-turn</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\n										\xA0compression</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0exists\n									</tspan>\n								</tspan>\n								<tspan class=\"text-outer-tspan row\" x=\"0\" y=\"1em\" dy=\"1.1em\">\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">in</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0the\n									</tspan>\n									<tspan font-style=\"normal\" class=\"text-inner-tspan\" font-weight=\"normal\">\xA0code\n									</tspan>\n								</tspan>\n							</text>\n						</g>\n					</g>\n				</g>\n			</g>\n		</g>\n	</g>\n	<defs>\n		<filter id=\"aphrodite-diagram-context-engine-drop-shadow\" height=\"130%\" width=\"130%\">\n			<feDropShadow dx=\"4\" dy=\"4\" stdDeviation=\"0\" flood-opacity=\"0.06\" flood-color=\"#000000\" />\n		</filter>\n	</defs>\n	<defs>\n		<filter id=\"aphrodite-diagram-context-engine-drop-shadow-small\" height=\"150%\" width=\"150%\">\n			<feDropShadow dx=\"2\" dy=\"2\" stdDeviation=\"0\" flood-opacity=\"0.06\" flood-color=\"#000000\" />\n		</filter>\n	</defs>\n</svg>\n";
// Source/pages/plugin.astro
var plugin_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Plugin,
	file: () => $$file,
	url: () => $$url
});
var $$Plugin = createComponent(($$result, $$props, $$slots) => {
	const Head = "font-headline text-lg font-black uppercase text-bone-white sm:text-xl";
	const InstallCommands = "git clone https://github.com/PlayForm/Aphrodite-Hermes.git\ncd Aphrodite-Hermes\nln -s \"$(pwd)\" ~/.hermes/plugins/aphrodite\nbash download.sh\ncd ..\nhermes plugins enable aphrodite\nhermes";
	const InstallFence = `$ git clone https://github.com/PlayForm/Aphrodite-Hermes.git
$ cd Aphrodite-Hermes
$ ln -s "$(pwd)" ~/.hermes/plugins/aphrodite
$ bash download.sh // or: pwsh ./download.ps1
$ cd ..
$ hermes plugins enable aphrodite
$ hermes`;
	Assert("Source/Library/Prose/Hooks.ts", PluginHookCard, HookNames);
	const Hooks$1 = Hooks.map((Hook) => {
		const Prose = PluginHookCard[Hook.Name];
		return {
			...Hook,
			Tape: Prose?.Tape ?? "raw",
			Tone: Prose?.Tone ?? "subtle",
			Rotate: Prose?.Rotate ?? "",
			Body: Prose?.Body ?? ["The manifest registers this seam; its card is not written yet."]
		};
	});
	const Lanes = [
		{
			Hook: "on_session_start",
			When: "session starts",
			Does: "resets all per-session state to a clean baseline - injects nothing"
		},
		{
			Hook: "pre_tool_call",
			When: "before a tool executes",
			Does: "auto-backgrounds long-running calls; splits chained commands"
		},
		{
			Hook: "transform_tool_result",
			When: "after every tool call",
			Does: "compresses large tool results into CCR markers"
		},
		{
			Hook: "transform_terminal_output",
			When: "after every terminal execution",
			Does: "compresses large terminal output into CCR markers"
		},
		{
			Hook: "pre_llm_call",
			When: "before each LLM request",
			Does: "injects directives, nudges, and the recall catalog"
		},
		{
			Hook: "post_llm_call",
			When: "after each LLM response",
			Does: "archives the turn, advances the counter, expires stale state"
		}
	];
	const Layers = [
		{
			N: "01",
			Name: "Hermes Agent",
			Role: "Owns the turn loop, the tool registry and the model call. It fires a hook because plugin.yaml promised one, and it reads the reply only as an object it can hand back.",
			Fails: "A seam that was never registered is invisible here: the turn runs without it, so a plugin that failed to load looks exactly like a plugin with nothing to say."
		},
		{
			N: "02",
			Name: "__init__.py",
			Role: "Declares the ctypes signatures, asks the dylib for its hook names and tool schemas, and registers one callback per name. It holds no state between calls.",
			Fails: "A dylib built against a different ABI raises at import, and the whole plugin is disabled - it does not degrade into a partial surface."
		},
		{
			N: "03",
			Name: "libaphrodite_hermes.dylib",
			Role: "The Hermes bridge: one JSON contract in, one JSON contract out, six hooks and thirteen tools with their schemas attached.",
			Fails: "A reply the shim cannot parse is a hard error, never a guess - the bridge does not repair a malformed payload."
		},
		{
			N: "04",
			Name: "libaphrodite (core)",
			Role: "All the compression logic: classification, hashing, marker composition, preview extraction, directives, retrieval. Every number the engine reports is decided here.",
			Fails: "A store that will not open degrades to the in-memory backend - the compression still happens, the persistence does not."
		},
		{
			N: "05",
			Name: "CCR store",
			Role: "SQLite at :9798, in-memory at :9797, or inline. It is the address space the markers point into, and the only layer that outlives the process.",
			Fails: "A lost database loses markers, not the transcript: the previews still read, and a marker that no longer resolves returns an explicit miss."
		}
	];
	const Dispatch = [
		{
			Title: "A HOOK FIRES",
			Agent: ["Hermes is about to run a tool", "· the seam is pre_tool_call"],
			System: ["the shim's callback receives the tool name and arguments as a Python dict; it does no work of its own"]
		},
		{
			Title: "THE SHIM SERIALIZES",
			Agent: ["the call is still untouched", "· nothing has been rewritten yet"],
			System: ["the dict becomes JSON and crosses the FFI boundary; the shim keeps no state between calls"]
		},
		{
			Title: "THE BRIDGE DISPATCHES",
			Agent: ["· the hook name is matched to its handler"],
			System: ["libaphrodite_hermes matches the hook name to its Rust handler and hands the payload to the core"]
		},
		{
			Title: "THE CORE DECIDES",
			Agent: ["the call may come back rewritten", "» cd x && cargo build && cargo test"],
			System: ["the core applies the hook's rule: background the call, split the chain, compress the result, assemble the context"]
		},
		{
			Title: "THE REPLY RETURNS",
			Agent: ["the model sees the result, not the machinery"],
			System: ["the JSON reply crosses back and the shim returns it to Hermes unchanged; the store keeps the bytes the marker addresses"]
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "PLUGIN // APHRODITE",
		"Description": `The Aphrodite Hermes plugin, v${Versions.Plugin}: a thin Python registration shim over a Rust dylib - ${HookNames.length} hooks, ${ToolNames.length} tools, an opt-in context engine, and an explicit SHA-256-verified download flow.`
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageShell", $$PageShell, { "Rhythm": "wide" }, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHeader", $$PageHeader, {
		"Tape": "PLUGIN // THE THIN LOADER",
		"Title": "The plugin",
		"Lead": [
			`A tool call's output becomes part of the model's context, and the plugin is the only layer that sees that result before it becomes message history.`,
			`Aphrodite ships as a Hermes Agent plugin: a thin Python registration shim over a Rust dylib.`,
			`Six hooks, thirteen tools, and an opt-in context engine - all declared in <code class="font-mono text-base text-weathered-teal">plugin.yaml</code>, all logic living in <code class="font-mono text-base text-weathered-teal">libaphrodite_hermes.dylib</code>.`,
			`What follows is the v${Versions.Plugin} plugin spec.`
		]
	})} ${maybeRenderHead($$result)}<div class="flex max-w-4xl flex-wrap items-center gap-6"> ${renderComponent($$result, "ZineStamp", $$ZineStamp, {
		"Label": `${Stamps.Plugin()} STANDALONE`,
		"Color": "raw",
		"Rotate": "sm:-rotate-2"
	})} ${renderComponent($$result, "ZineStamp", $$ZineStamp, {
		"Label": "6 HOOKS",
		"Color": "teal",
		"Rotate": "sm:rotate-1"
	})} ${renderComponent($$result, "ZineStamp", $$ZineStamp, {
		"Label": `${ToolNames.length} TOOLS`,
		"Color": "teal",
		"Rotate": "sm:-rotate-1"
	})} ${renderComponent($$result, "ZineStamp", $$ZineStamp, {
		"Label": "ZERO LOGIC IN PYTHON",
		"Color": "canary",
		"Rotate": "sm:rotate-2"
	})} </div> ${renderComponent($$result, "ZinePullQuote", $$ZinePullQuote, {
		"Text": "A plugin is a promise about a binary. The manifest says which seams exist and which tools answer; validation exists to keep that promise and the running surface identical.",
		"Attribution": "plugin.yaml // the contract",
		"Tone": "subtle",
		"Rotate": "sm:rotate-[0.6deg]"
	})}  <section class="relative w-full" data-reveal> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": "plugin.yaml // THE DECLARED SURFACE"
	})} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Size": "lg",
		"Rotate": "-rotate-[1deg]"
	}, { "default": ($$result) => renderTemplate` <h2 id="manifest"${addAttribute(`mb-8 ${Head}`, "class")}>
What the manifest declares
</h2> <p class="mb-6 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The manifest is read before a line of Python loads. Hermes takes:
</p> <ul class="mb-12 max-w-3xl space-y-2 font-body text-base leading-relaxed text-bone-newsprint"> <li class="border-l-4 border-raw-blood pl-4">the name it will list</li> <li class="border-l-4 border-raw-blood pl-4">the spec version it will pin</li> <li class="border-l-4 border-raw-blood pl-4">
the six hook names it must find a registration for
</li> <li class="border-l-4 border-raw-blood pl-4">
the thirteen tool schemas it will advertise to the model
</li> <li class="border-l-4 border-raw-blood pl-4">
and the flag that says an engine is present.
</li> </ul> <p class="mb-12 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Nothing in the file describes behavior. Every field is an identity, a
					requirement, or a promise about what the dylib will answer when it is asked -
					which is why a manifest that overstates the surface fails validation instead of
					failing at runtime.
</p> <div class="grid grid-cols-1 gap-10 md:grid-cols-2"> <div class="space-y-4 border border-oxblood-dark bg-soot-black p-5 font-mono text-base"> <div> <span class="text-zinc-dust">name:</span>${" "} <span class="text-bone-white">aphrodite</span> </div> <div> <span class="text-zinc-dust">version:</span>${" "} <span class="text-bone-white">${Versions.Plugin}</span> </div> <div> <span class="text-zinc-dust">kind:</span>${" "} <span class="text-bone-white">standalone</span> </div> <div> <span class="text-zinc-dust">requires_hermes:</span> <span class="text-stamped-canary">&gt;=0.20.2</span> </div> <div> <span class="text-zinc-dust">requires_hooks:</span> <span class="text-bone-white">true</span> </div> <div> <span class="text-zinc-dust">provides_context_engine:</span> <span class="text-bone-white">true</span> </div> </div> <div class="space-y-4 border border-oxblood-dark bg-soot-black p-5 font-mono text-base"> <div class="text-weathered-teal"># provides_hooks (6)</div> <div class="text-bone-newsprint">on_session_start · pre_tool_call</div> <div class="text-bone-newsprint">
transform_tool_result · transform_terminal_output
</div> <div class="text-bone-newsprint">pre_llm_call · post_llm_call</div> <div class="pt-6 text-weathered-teal"># provides_tools (13)</div> <div class="text-bone-newsprint">
retrieve · compress · stats · rebuild · files · diff
</div> <div class="text-bone-newsprint">search · directive · test · catalog</div> <div class="text-bone-newsprint">
reclassify · prefetch · prefetch_status
</div> </div> </div> <div class="mt-12 grid grid-cols-1 gap-8 border-t border-oxblood-dark pt-8 md:grid-cols-2"> <div class="space-y-4"> ${renderComponent($$result, "ZineStatBar", $$ZineStatBar, {
		"Label": "DECLARED SURFACE = RUNNING SURFACE",
		"Ratio": "13 / 13",
		"Percent": 100
	})} <p class="font-body text-base leading-relaxed text-zinc-dust">
The bar is full because the two sets are compared, not assumed: the
							manifest's
<code class="font-mono text-base text-weathered-teal">
provides_tools
</code>${" "}
list and the schemas the release dylib reports are held to the same
							thirteen names.
</p> </div> <div class="space-y-4"> ${renderComponent($$result, "ZineStatBar", $$ZineStatBar, {
		"Label": "LOGIC IN THE PYTHON SHIM",
		"Ratio": "0%",
		"Percent": 0,
		"Color": "raw"
	})} <p class="font-body text-base leading-relaxed text-zinc-dust">
The bar is empty on purpose. Nothing in the shim decides anything - a
							Python traceback means a load failure, never a compression bug.
</p> </div> </div> <div class="mt-12 space-y-3 border-t border-oxblood-dark pt-8"> <p class="text-base leading-relaxed text-zinc-dust">
ENGINE THRESHOLD SEMANTICS: -1 = ALWAYS COMPRESS · 0 = DISABLED · &gt;0 =
						FILL PERCENT.
</p> <p class="text-base leading-relaxed text-zinc-dust">
SKILLS ARE NOT SHIPPED WITH THE PLUGIN - THEY LIVE DEV-SIDE.
</p> </div> <div class="mt-12"> ${renderComponent($$result, "ZineLesson", $$ZineLesson, {
		"Label": "ZERO LOGIC IN PYTHON",
		"Text": "The Python is a registration shim: ctypes signatures, one callback per name, and the JSON reply handed back untouched. Every threshold, every marker and every classification lives in the dylib."
	})} </div> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": "ENGINE // OPT-IN, AND OFF BY DEFAULT"
	})} <h3 id="engine"${addAttribute(`mb-8 mt-4 ${Head}`, "class")}>
The engine is a flag, not a behavior
</h3> <p class="max-w-3xl font-body text-base leading-relaxed text-bone-newsprint"> <code class="font-mono text-base text-weathered-teal">
provides_context_engine: true
</code>
does not turn anything on.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
It tells Hermes that the dylib can answer the engine's questions - which file is
					being read, what the turn's markers were, how much context is left - so the host
					knows to ask.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The engine's own thresholds are the ones that decide whether a result is
					compressed at all.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The three threshold values are the whole tuning surface, and their polarity is
					the one thing readers get wrong: <span class="text-stamped-canary">-1</span>${" "}
compresses everything, <span class="text-stamped-canary">0</span> disables the
					engine, and a positive number is the fill percentage at which compression
					starts. A${" "}<span class="text-stamped-canary">0</span> that reads as "off by
					default" is the correct reading.
</p> ` })} ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": ["SRC: plugins/aphrodite/plugin.yaml (provides_hooks, provides_tools)", "SRC: docs/plugin/context-engine.md:38-48"] })} </section> <section class="relative w-full" data-reveal> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": "ARCHITECTURE // CALL CHAIN"
	})} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Size": "lg",
		"Rotate": "rotate-[1.2deg]"
	}, { "default": ($$result) => renderTemplate` <h2 id="architecture"${addAttribute(`mb-8 ${Head}`, "class")}>
A thin shim, a Rust brain
</h2> <p class="mb-8 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Five layers, one contract between each pair. Read top to bottom, the list is the
					path a single tool result takes; read bottom to top, it is the path a retrieval
					takes when the model asks for the bytes back.
</p> <div class="space-y-0 border border-oxblood-dark bg-soot-black p-5 font-mono text-base leading-relaxed"> <div class="text-bone-white">Hermes Agent (hooks + tool dispatch)</div> <div class="pl-4 text-zinc-dust">│</div> <div class="pl-4 text-bone-newsprint">
__init__.py - ctypes FFI, registers hooks/tools/engine · no logic
</div> <div class="pl-4 text-zinc-dust">│</div> <div class="pl-4 text-stamped-canary">
libaphrodite_hermes.dylib - Hermes bridge (JSON contract) · 6 hooks · 13
						tools · schemas
</div> <div class="pl-4 text-zinc-dust">│</div> <div class="pl-4 text-bone-newsprint">
libaphrodite (core engine) - ALL compression logic: hooks · resolve ·
						retrieve · marker · preview · directives
</div> <div class="pl-4 text-zinc-dust">│</div> <div class="pl-4 text-weathered-teal">
CCR store - SQLite :9798 / in-memory :9797 / inline
</div> </div> <p class="mt-8 font-body text-base leading-relaxed text-zinc-dust">
Registration is driven by the dylib: the shim asks the dylib for its hook names
					and tool schemas and registers one callback per name.
</p> <p class="mt-3 font-body text-base leading-relaxed text-zinc-dust">
It is the reason there is no hot-reload: the dylib is resolved once per process,
					so to pick up a new build you restart the Hermes session.
</p> <p class="mt-3 font-body text-base leading-relaxed text-zinc-dust">
The same resolve-once rule is why the plugin never half-loads. Either the dylib
					opens and every seam registers, or the import raises and nothing registers -
					there is no state in which three hooks fire and three do not.
</p> <h3 id="layers"${addAttribute(`mb-8 mt-20 ${Head}`, "class")}>
What each layer does, and what it fails on
</h3> <div class="isolate grid grid-cols-1 items-start gap-10 lg:grid-cols-2"> ${Layers.map(({ N, Name, Role, Fails }) => renderTemplate`<div class="relative border-2 border-oxblood-dark bg-soot-black p-6 transition-transform duration-200 hover:rotate-0 sm:even:rotate-[0.6deg] sm:odd:-rotate-[0.6deg]"> <div class="flex items-baseline gap-3"> <span class="font-mono text-base font-black text-raw-blood"> ${N} </span> <span class="font-mono text-base font-black text-bone-white"> ${Name} </span> </div> <p class="mt-4 font-body text-base leading-relaxed text-bone-newsprint"> ${Role} </p> <div class="mt-4 border-l-4 border-stamped-canary pl-4"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "canary" }, { "default": ($$result) => renderTemplate`FAILS ON` })} <p class="mt-2 font-body text-base leading-relaxed text-zinc-dust"> ${Fails} </p> </div> </div>`)} </div> <figure class="mt-20 border border-oxblood-dark bg-soot-black p-4" data-diagram="context-engine"> <div class="overflow-x-auto">${unescapeHTML(context_engine_default)}</div> <figcaption class="mt-6 font-mono text-base font-black uppercase tracking-widest text-zinc-dust">
M9 // CONTEXT ENGINE
</figcaption> </figure> <h3 id="dispatch"${addAttribute(`mb-8 mt-20 ${Head}`, "class")}>
One call, end to end
</h3> <p class="mb-10 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The left pane is what the agent sees; the right pane is what the process does.
					Step through it once and the split becomes obvious: every intervention is
					invisible on the agent's side, and every rewrite is decided on the system's
					side.
</p> ${renderComponent($$result, "ZineFlow", $$ZineFlow, {
		"Title": "THE DISPATCH // ONE HOOK CALL",
		"Complete": "REPLY RETURNED",
		"Steps": Dispatch
	})} <p class="mt-10 max-w-3xl font-body text-base leading-relaxed text-zinc-dust">
The failure mode of the whole chain sits at the boundary, not in the middle:
</p> <ul class="mt-3 max-w-3xl space-y-2 font-body text-base leading-relaxed text-zinc-dust"> <li class="border-l-2 border-oxblood-dark pl-3">
a hook that raises is logged and skipped
</li> <li class="border-l-2 border-oxblood-dark pl-3">
a hook that returns nothing is a no-op
</li> <li class="border-l-2 border-oxblood-dark pl-3">and neither ever aborts the turn.</li> </ul> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-zinc-dust">
What a hook cannot do is pretend it ran.
</p> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": "HOOKS // THE CHAIN"
	})} <h3 id="chain"${addAttribute(`mb-8 mt-4 ${Head}`, "class")}>
Six hooks, one turn
</h3> <p class="max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Every hook is a thin dispatch that forwards its arguments to the Rust dylib and
					hands the JSON reply back to Hermes.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
It is the reason the shim registers one callback per name: on plugin load it
					asks the dylib for its hook names, and the six hooks are always registered
					together.
</p> <h4 class="mb-6 mt-12 font-headline text-lg font-black uppercase text-bone-white">
The turn, in order
</h4> <div class="space-y-0 border border-oxblood-dark bg-soot-black p-4 font-mono text-base leading-relaxed"> ${PluginSequence.map(({ Text: Line, Tone }) => renderTemplate`<div${addAttribute(Tone === "canary" ? "pl-4 text-stamped-canary" : Tone === "mute" ? "pl-4 text-zinc-dust" : Tone === "result" ? "text-bone-white" : "pl-4 text-bone-newsprint", "class")}> ${Line} </div>`)} </div> <p class="mt-8 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The loop closes on itself, so the state a turn leaves behind is the state the
					next turn reads. That is why the reset seam exists: a new session starts from a
					clean baseline instead of inheriting the previous session's counters and
					markers.
</p> <figure class="mt-16 border border-oxblood-dark bg-soot-black p-4" data-diagram="hook-chain"> <div class="overflow-x-auto">${unescapeHTML(hook_chain_default)}</div> <figcaption class="mt-6 font-mono text-base font-black uppercase tracking-widest text-zinc-dust">
M3 // HOOK CHAIN
</figcaption> </figure> <h3 id="six"${addAttribute(`mb-8 mt-20 ${Head}`, "class")}>
The six, one card each
</h3> <div class="isolate grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-24"> ${Hooks$1.map(({ N, Name, Tape, Tone, Rotate, Body }) => renderTemplate`<div${addAttribute(`zine-box-${Tone} relative border-[3px] bg-carbon-void p-6 transition-transform duration-200 hover:rotate-0 ${Rotate} ${Tone === "canary" ? "border-stamped-canary/40" : Tone === "crimson" ? "border-raw-blood" : N === "04" ? "border-zinc-dust/40" : "border-oxblood-dark"}`, "class")}> <h4${addAttribute(`absolute -top-5 left-4 z-10 border border-black px-2 py-0.5 text-base font-black uppercase ${Tape === "canary" ? "bg-stamped-canary text-soot-black" : Tape === "bone" ? "bg-bone-newsprint text-soot-black" : "bg-raw-blood text-bone-white"}`, "class")}> ${N} // ${Name} </h4> ${Body.map((Paragraph, I) => renderTemplate`<p${addAttribute(I === 0 ? "mt-4 font-body text-base leading-relaxed text-bone-newsprint" : "mt-3 font-body text-base leading-relaxed text-bone-newsprint", "class")}>${unescapeHTML(Paragraph)}</p>`)} </div>`)} </div> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": "BYPASS // THE ESSENTIAL-TOOL GATE"
	})} <h3 id="gate"${addAttribute(`mb-8 mt-4 ${Head}`, "class")}>
What never gets compressed
</h3> <p class="mb-8 font-body text-base leading-relaxed text-bone-newsprint">
A result is left untouched when it is empty, below threshold, or from the
					essential set - tools the agent needs raw:
</p> <div class="border border-oxblood-dark bg-soot-black p-4 font-mono text-base text-bone-newsprint">
skill_view · skills_list · skill_manage · memory · session_search · read_file ·
					read_terminal
</div> <p class="mt-8 font-body text-base leading-relaxed text-zinc-dust">
Aphrodite also skips its own tools and headroom helpers - compressing
<span class="font-mono text-base text-weathered-teal">aphrodite_retrieve</span>
would just replace resolved content with another marker.
</p> <p class="mt-3 font-body text-base leading-relaxed text-zinc-dust">
The gate is the reason retrieval stays cheap: a marker the model resolves comes
					back whole, because nothing downstream of the gate rewrites it a second time.
</p> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": "THRESHOLDS // GATES AND BYPASSES"
	})} <h3 id="thresholds"${addAttribute(`mb-8 mt-4 ${Head}`, "class")}>
The numbers that decide
</h3> <div class="overflow-x-auto"> <table class="w-full border-collapse font-mono text-base"> <thead> <tr class="border-b-2 border-oxblood-dark text-left"> <th class="py-3 pr-4 text-base font-black uppercase tracking-widest text-stamped-canary">
HOOK
</th> <th class="py-3 pr-4 text-base font-black uppercase tracking-widest text-stamped-canary">
SETTING
</th> <th class="py-3 pr-4 text-base font-black uppercase tracking-widest text-stamped-canary">
DEFAULT
</th> <th class="py-3 text-base font-black uppercase tracking-widest text-stamped-canary">
BYPASS
</th> </tr> </thead> <tbody class="text-bone-newsprint"> <tr class="border-b border-oxblood-dark"> <td class="py-3 pr-4">transform_tool_result</td> <td class="py-3 pr-4 text-weathered-teal">tool_threshold_token</td> <td class="py-3 pr-4 text-bone-white">4,096</td> <td class="py-3">
empty · essential tools · self tools ·${" "} <span class="text-stamped-canary">0 = always compress</span> </td> </tr> <tr class="border-b border-oxblood-dark"> <td class="py-3 pr-4">transform_terminal_output</td> <td class="py-3 pr-4 text-weathered-teal">terminal_threshold</td> <td class="py-3 pr-4 text-bone-white">1,024</td> <td class="py-3">
empty · below threshold ·${" "} <span class="text-stamped-canary">0 = always compress</span> </td> </tr> <tr class="border-b border-oxblood-dark"> <td class="py-3 pr-4">pre_llm_call</td> <td class="py-3 pr-4 text-weathered-teal">flow budget_chars</td> <td class="py-3 pr-4 text-bone-white">4,000</td> <td class="py-3">
recall catalog drops first; directives and nudges never drop
</td> </tr> <tr> <td class="py-3 pr-4">pre_tool_call (chain split)</td> <td class="py-3 pr-4 text-weathered-teal">
chain_split_min_segments
</td> <td class="py-3 pr-4 text-bone-white">-</td> <td class="py-3">feature off by default (chain_split = false)</td> </tr> </tbody> </table> </div> <p class="mt-12 border-t border-oxblood-dark pt-8 text-base leading-relaxed text-zinc-dust">
PRECEDENCE: ENVIRONMENT &gt; TOML &gt; DEFAULT (APHRODITE_TOOL_THRESHOLD_TOKEN ·
					APHRODITE_TERMINAL_THRESHOLD · APHRODITE_FLOW_BUDGET_CHARS ·
					APHRODITE_CHAIN_SPLIT).
</p> <p class="mt-3 text-base leading-relaxed text-zinc-dust">
The precedence matters at the edges: a value in the environment wins over the
					same key in${" "} <span class="font-mono text-base text-weathered-teal">aphrodite.toml</span>, and
					the compiled default is only reached when neither exists. Every knob is listed
					on
<a class="text-weathered-teal underline transition-colors hover:text-bone-white"${addAttribute(Routes.Config, "href")}>
CONFIG
</a>.
</p> ` })} ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": ["SRC: docs/architecture/04-hook-ffi.md", "SRC: docs/plugin/hooks.md; plugins/aphrodite/plugin.yaml (provides_hooks)"] })} </section> <section class="relative w-full" data-reveal> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": "DOWNLOAD // EXPLICIT STEPS ONLY"
	})} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Size": "lg",
		"Rotate": "-rotate-[1.4deg]"
	}, { "default": ($$result) => renderTemplate` <h2 id="download"${addAttribute(`mb-8 ${Head}`, "class")}>
register() never downloads
</h2> <p class="mb-10 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The split is deliberate: loading a plugin is a read, and fetching a binary is a
					write. Keeping them apart means an agent that starts in a clean environment
					never silently pulls an executable over the network - the fetch is a step a
					person runs, with a verdict attached to it.
</p> <div class="grid grid-cols-1 gap-16 lg:grid-cols-2"> <div> <p class="mb-8 font-body text-base leading-relaxed text-bone-newsprint">
Binaries are never shipped in the repository.
</p> <p class="mb-8 font-body text-base leading-relaxed text-bone-newsprint">
Fetching them is an explicit setup step you run yourself - and the
							verification is mandatory, not best-effort:
</p> <ul class="space-y-6 font-body text-base text-bone-newsprint"> <li class="border-l-4 border-raw-blood pl-4"> <span class="font-bold text-bone-white">
SHA-256 against the in-tree checksum list
</span>
-${" "} <code class="font-mono text-base text-weathered-teal">
SHA256SUMS.txt
</code>, generated by CI into the tree; a mismatch is refused outright.
</li> <li class="border-l-4 border-raw-blood pl-4"> <span class="font-bold text-bone-white">Magic-byte validation</span>
- the downloaded file must be a real ELF / Mach-O / PE image, or it
								is rejected.
</li> <li class="border-l-4 border-raw-blood pl-4"> <span class="font-bold text-bone-white">Backup + restore</span>${" "}- an
								existing install is backed up and restored if any step fails. No
								release-hosted fallback.
</li> <li class="border-l-4 border-raw-blood pl-4"> <span class="font-bold text-bone-white">
A missing binary disables, not breaks
</span>
- the plugin logs the setup command and stays disabled until the
								binaries are present.
</li> </ul> <p class="mt-8 font-body text-base leading-relaxed text-zinc-dust">
The four checks are ordered by cost, not by importance:
</p> <ul class="mt-3 space-y-2 font-body text-base leading-relaxed text-zinc-dust"> <li class="border-l-2 border-oxblood-dark pl-3">the checksum is one hash</li> <li class="border-l-2 border-oxblood-dark pl-3">the magic bytes are four</li> <li class="border-l-2 border-oxblood-dark pl-3">the backup is a rename</li> <li class="border-l-2 border-oxblood-dark pl-3">
and the last one is not a check at all - it is what the plugin does when every
								check before it has already failed.
</li> </ul> </div> <div> ${renderComponent($$result, "CodeFence", $$CodeFence, {
		"Class": "mb-6 border border-oxblood-dark",
		"Code": InstallFence,
		"Copy": true,
		"CopyLabel": "COPY"
	})} <div class="flex flex-wrap items-center justify-between gap-4 border-2 border-oxblood-dark bg-asphalt-panel p-4"> <span class="text-base font-black uppercase tracking-widest text-stamped-canary">
COPY THE FULL SEQUENCE:
</span> <span class="font-mono text-base text-zinc-dust">
the COPY tab on the fence copies all seven lines
</span> </div> <p class="mt-6 font-mono text-base leading-relaxed text-zinc-dust">
The copy payload is ${InstallCommands.split("\n").length} lines: clone,
							link, fetch, enable, start. The${" "} <span class="text-weathered-teal">ln -s</span> line is the one that
							makes the repo the plugin Hermes sees - the install directory is a
							symlink, not a copy.
</p> </div> </div> <p class="mt-12 border-t border-oxblood-dark pt-8 font-body text-base leading-relaxed text-zinc-dust">
ALSO ON THE STORE: the plugin is in the Hermes plugin catalog - the reviewed,
					pinned alternative to the manual clone.
</p> <p class="mt-3 font-body text-base leading-relaxed text-zinc-dust"> <code class="font-mono text-base text-weathered-teal">
hermes plugins install aphrodite
</code>
checks out the catalog entry's exact commit, then
<code class="font-mono text-base text-weathered-teal">bash download.sh</code>
from${" "} <code class="font-mono text-base text-weathered-teal">
~/.hermes/plugins/aphrodite
</code>
still fetches the binaries (never
<code class="font-mono text-base text-weathered-teal">aphrodite setup</code>
against the catalog-managed directory).
</p> <p class="mt-3 font-body text-base leading-relaxed text-zinc-dust">
The full flow is on
<a class="text-weathered-teal underline transition-colors hover:text-bone-white"${addAttribute(Routes.Setup, "href")}>
SETUP
</a>;
					the mechanics are in${" "} <a class="text-weathered-teal underline transition-colors hover:text-bone-white"${addAttribute(ExternalLinks.HermesGuide, "href")}>
the Hermes plugin guide
</a>.
</p> <h3 id="key"${addAttribute(`mb-8 mt-16 ${Head}`, "class")}>
The proxy needs its own key
</h3> <p class="font-body text-base leading-relaxed text-zinc-dust">
LLM API KEY REQUIRED: the proxy is an OpenAI-compatible forwarder and needs its
					own credentials -${" "} <code class="font-mono text-base text-weathered-teal">APHRODITE_API_KEY</code>,
<code class="font-mono text-base text-weathered-teal">aphrodite setup</code>, or
<code class="font-mono text-base text-weathered-teal">api_key</code> in
					~/.hermes/aphrodite/aphrodite.toml.
</p> <p class="mt-3 font-body text-base leading-relaxed text-zinc-dust">
Hermes' provider config is NOT reused, and there is no keyless mode: without a
					key the proxy refuses to start.
</p> <p class="mt-3 font-body text-base leading-relaxed text-zinc-dust">
That refusal is the point. A forwarder that started without a key would accept a
					request, hold it, and fail it somewhere downstream - so the proxy checks first
					and exits with the missing variable named.
</p> <h3 id="config"${addAttribute(`mb-8 mt-16 ${Head}`, "class")}>
What happens without a config file
</h3> <p class="font-body text-base leading-relaxed text-zinc-dust">
A MISSING CONFIG IS REPORTED, NOT INFERRED: when
<code class="font-mono text-base text-weathered-teal">aphrodite.toml</code> is
					absent the plugin says so, and the binary falls back to a single token-mode
					listener on the first port - the second proxy never binds, and every
<code class="font-mono text-base text-weathered-teal">[compression]</code> knob,
					the store retention caps included, is simply absent.
</p> <p class="mt-3 font-body text-base leading-relaxed text-zinc-dust">
It is the reason the install runs
<code class="font-mono text-base text-weathered-teal">aphrodite setup</code>:
					the config file is written before the binary is ever started, so the fallback
					never becomes the everyday state.
</p> <p class="mt-3 font-body text-base leading-relaxed text-zinc-dust">
The fallback is a floor, not a mode: one listener, token compression, no
					retention promise. It exists so a fresh checkout can answer a request before
					anyone has written a config, and it is reported every time it is in effect.
</p> <div class="mt-12"> ${renderComponent($$result, "ZineLesson", $$ZineLesson, {
		"Label": "FAILS SAFE",
		"Color": "raw",
		"Lines": [
			"Every step degrades in the same direction:",
			"a missing binary disables the plugin",
			"a missing key stops the proxy",
			"a missing config narrows it to one listener.",
			"None of them runs half-configured and calls it success."
		]
	})} </div> ` })} ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": ["SRC: plugins/aphrodite/download.sh · SHA256SUMS.txt (generated by CI)", "SRC: docs/guides/hermes-integration.md:115-141"] })} </section> <section class="relative w-full" data-reveal> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": "FILESYSTEM // CANONICAL LAYOUT"
	})} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Size": "lg",
		"Rotate": "rotate-[1.2deg]"
	}, { "default": ($$result) => renderTemplate` <h2 id="layout"${addAttribute(`mb-8 ${Head}`, "class")}>
What changes after install
</h2> <p class="mb-10 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Two directories, two owners. Hermes owns the plugin directory and the plugin
					owns everything under the runtime home - the arrow annotations are the
					whole map of who writes what.
</p> <div class="space-y-0 border border-oxblood-dark bg-soot-black p-5 font-mono text-base leading-relaxed text-bone-newsprint"> <div>~/.hermes/</div> <div class="pl-4">
├── plugins/aphrodite${" "} <span class="text-zinc-dust">← manual symlink to the plugin repo</span> </div> <div class="pl-4 text-bone-white">
└── aphrodite/ <span class="text-zinc-dust">← runtime home</span> </div> <div class="pl-10">
├── binaries/aphrodite${" "} <span class="text-zinc-dust">← proxy binary, fetched + verified</span> </div> <div class="pl-10">├── binaries/libaphrodite_hermes.dylib</div> <div class="pl-10">
├── aphrodite.toml <span class="text-zinc-dust">← config</span> </div> <div class="pl-10">
├── directives/${" "} <span class="text-zinc-dust">← 7 built-ins materialized</span> </div> <div class="pl-10">
├── ccr.db <span class="text-zinc-dust">← SQLite CCR store</span> </div> <div class="pl-10">
└── proxy-stderr.log${" "} <span class="text-zinc-dust">← proxy logs (empty = healthy)</span> </div> </div> <div class="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3"> <div class="border-l-4 border-raw-blood pl-4"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "white" }, { "default": ($$result) => renderTemplate`binaries/` })} <p class="mt-2 font-body text-base leading-relaxed text-bone-newsprint">
The only two files that execute. Both arrive through
<span class="font-mono text-base text-weathered-teal">
download.sh
</span>${" "}
and both are verified before they land; a failed fetch restores the pair
							that was already there.
</p> </div> <div class="border-l-4 border-raw-blood pl-4"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "white" }, { "default": ($$result) => renderTemplate`directives/` })} <p class="mt-2 font-body text-base leading-relaxed text-bone-newsprint">
The seven built-ins, materialized on first start so an edited directive
							is never silently overwritten by an upgrade. A deleted one comes back; a
							changed one stays changed.
</p> </div> <div class="border-l-4 border-raw-blood pl-4"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "white" }, { "default": ($$result) => renderTemplate`ccr.db` })} <p class="mt-2 font-body text-base leading-relaxed text-bone-newsprint">
The address space the markers point into. Delete it and the markers stop
							resolving - the previews in the transcript still read, which is why the
							store can be dropped without losing the conversation.
</p> </div> </div> <h3 id="selfheal"${addAttribute(`mb-8 mt-16 ${Head}`, "class")}>
The self-heal, and where it stops
</h3> <p class="font-body text-base leading-relaxed text-zinc-dust">
The runtime home self-heals toward
<code class="font-mono text-base text-weathered-teal">
layout_schema.json
</code>${" "}
at startup: the self-heal moves misplaced config and binaries to their canonical
					paths and quarantines stale plugin-source copies.
</p> <p class="mt-3 font-body text-base leading-relaxed text-zinc-dust">
It is the reason the self-healing stops at the Hermes-owned boundary: the
					~/.hermes/plugins/aphrodite install dir is Hermes' territory, and the plugin
					never creates, converts, or modifies it.
</p> <p class="mt-3 font-body text-base leading-relaxed text-zinc-dust">
The schema is the authority, not the directory listing: a file is misplaced when
					it is not where the schema says, and the repair is a move - never a copy, never
					a rewrite. Anything it cannot place it quarantines instead of deleting, so a
					stale copy is set aside with its bytes intact and the next start does not trip
					over it again.
</p> <div class="mt-8"> ${renderComponent($$result, "ZineReveal", $$ZineReveal, {
		"Cover": "QUARANTINE // stale plugin-source copy, moved aside with its bytes intact",
		"Tag": "MOVED ASIDE",
		"Raw": "<span class='font-mono text-base text-stamped-canary'>~/.hermes/aphrodite/quarantine/&lt;timestamp&gt;/plugins-aphrodite</span>"
	})} </div> <figure class="mx-auto mt-20 max-w-md border border-oxblood-dark bg-soot-black p-3" data-diagram="hook-chain-mini"> <div class="overflow-x-auto [&amp;_svg]:h-auto">${unescapeHTML(hook_chain_default)}</div> <figcaption class="mt-4 font-mono text-base font-black uppercase tracking-widest text-zinc-dust">
M3 MINI // HOOK CHAIN
</figcaption> </figure> ` })} ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": ["SRC: plugins/aphrodite/layout_schema.json"] })} </section> <section class="relative w-full" data-reveal> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": "EVOLUTION // HOW THE SURFACE GREW"
	})} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Size": "lg",
		"Rotate": "-rotate-[0.8deg]"
	}, { "default": ($$result) => renderTemplate` <h2 id="evolution"${addAttribute(`mb-8 ${Head}`, "class")}>
The six hooks, the version pairing, and the 14-to-13 correction
</h2> <p class="mb-12 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Three things grew at once:
</p> <ul class="mb-12 max-w-3xl space-y-2 font-body text-base leading-relaxed text-bone-newsprint"> <li class="border-l-4 border-raw-blood pl-4">the seams</li> <li class="border-l-4 border-raw-blood pl-4">
the pairing rule that keeps a plugin pointing at a binary that exists
</li> <li class="border-l-4 border-raw-blood pl-4">
and the discipline that keeps the declared tool count honest.
</li> </ul> <p class="mb-12 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Read together they explain why the plugin can be installed from a tag and verified
					against a checksum list.
</p> <h3 id="lanes"${addAttribute(`mb-8 ${Head}`, "class")}>
Six lanes, one trigger each
</h3> <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 xl:grid-cols-3 xl:gap-6"> ${Lanes.map(({ Hook, When, Does }) => renderTemplate`<div class="border-2 border-oxblood-dark bg-soot-black p-5"> <div class="font-mono text-base font-black text-bone-white">${Hook}</div> <div class="mt-3 font-mono text-base font-bold uppercase tracking-widest text-stamped-canary"> ${When} </div> <p class="mt-3 font-body text-base leading-relaxed text-bone-newsprint"> ${Does} </p> </div>`)} </div> <p class="mt-8 font-mono text-base text-zinc-dust">
SRC: docs/plugin/hooks.md:13-20 - every hook is a thin dispatch that forwards to
					the Rust dylib; the dylib holds all the behavior.
</p> <div class="mt-24 border-2 border-raw-blood bg-soot-black p-6"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "div",
		"Tone": "canary"
	}, { "default": ($$result) => renderTemplate`
THE VERSION PAIRING · BINARY_VERSION MECHANICS
` })} <div class="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-3"> <div> <div class="font-headline text-2xl font-black text-bone-white"> ${Stamps.Pairing()} </div> <p class="mt-3 font-body text-base leading-relaxed text-bone-newsprint">
Today's pairing: binary ${Versions.Binary}, plugin ${Versions.Plugin}.
</p> <p class="mt-3 font-body text-base leading-relaxed text-bone-newsprint">
Every release moves both: "${Versions.ChangelogPairing.replaceAll("`", "")}"
</p> </div> <div> <div class="font-headline text-2xl font-black text-bone-white">
BUMPED LAST
</div> <p class="mt-3 font-body text-base leading-relaxed text-bone-newsprint"> <code class="font-mono text-base text-weathered-teal">
BINARY_VERSION
</code>${" "}
is pinned to a binary release tag the plugin can download.
</p> <p class="mt-3 font-body text-base leading-relaxed text-bone-newsprint">
Since the first plugin-first release (v1.4.6), the plugin is tagged
<em>before the parent</em>, so the pinned version points at assets
								that already exist.
</p> </div> <div> <div class="font-headline text-2xl font-black text-bone-white">
OR IT REFUSES
</div> <p class="mt-3 font-body text-base leading-relaxed text-bone-newsprint">
The plugin warns before${" "} <code class="font-mono text-base">download.sh</code>
when the pinned${" "} <code class="font-mono text-base">BINARY_VERSION</code> points at a
								release with no assets - and since v1.6.5, a checksum mismatch is a
								hard refusal, not a warning.
</p> </div> </div> <p class="mt-8 font-body text-base leading-relaxed text-zinc-dust">
The order is the mechanic. Tagging the plugin first means the pinned version
						can only ever point backwards, at a release whose assets are already
						uploaded and hashed - so the download has something to verify against before
						anyone asks for it.
</p> <div class="mt-6 font-mono text-base text-zinc-dust">
SRC: CHANGELOG.md v1.4.6/v1.4.4/v1.6.5/v1.6.6 entries · the Aphrodite/v1.4.6
						release note ("released plugin-first ... points at assets that already
						exist")
</div> </div> <div class="mt-16 border-l-4 border-stamped-canary bg-soot-black p-6"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "div",
		"Tone": "canary"
	}, { "default": ($$result) => renderTemplate`
13 TOOLS, NOT 14 · THE CORRECTION IS A BEAT
` })} <p class="mt-4 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
v1.6.5 corrected the manifest: "14 tools" → "13 tools" - the release dylib
						registers exactly the 13 declared tools.
</p> <p class="mt-4 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The 14th,${" "} <code class="font-mono text-base text-weathered-teal">
aphrodite_debug
</code>, is${" "} <code class="font-mono text-base text-weathered-teal">
debug_assertions
</code>-gated out of release builds, matching what
<code class="font-mono text-base text-weathered-teal">
hermes plugins validate
</code>
enforces.
</p> <p class="mt-4 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Earlier, v1.6.1 had already removed it from
<code class="font-mono text-base text-weathered-teal">provides_tools</code>,
						closing the catalog-review mismatch on the pinned tree - and v1.4.6 had done
						the same for${" "} <code class="font-mono text-base text-weathered-teal">
aphrodite_navigate
</code>, the navigation tool whose feature was unbuildable.
</p> <p class="mt-4 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The declared surface and the running surface are kept identical on purpose.
</p> <p class="mt-4 max-w-3xl font-body text-base leading-relaxed text-zinc-dust">
The count is not cosmetic: the validator compares the manifest's tool list
						against the schemas the dylib reports, so a release that advertises fourteen
						while registering thirteen fails that comparison before a user ever runs it.
						A debug-only tool is therefore a build artifact, not a declared surface -
						and the manifest says so.
</p> <div class="mt-4 font-mono text-base text-zinc-dust">
SRC: CHANGELOG.md:61-64 (v1.6.5) · CHANGELOG.md:166-173 (v1.6.1) · v1.4.6
						release note
</div> </div> ` })} ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": ["SRC: CHANGELOG.md v1.6.5 · CHANGELOG.md v1.6.1 · the Aphrodite/v1.4.6 release note", "SRC: plugins/aphrodite/plugin.yaml (provides_tools)"] })} </section>  ${renderComponent($$result, "Related", $$Related, { "Links": [
		{
			Href: "/setup/",
			Label: "SETUP"
		},
		{
			Href: "/hermes/",
			Label: "HERMES"
		},
		{
			Href: "/hooks/",
			Label: "HOOKS"
		},
		{
			Href: "/flavors/",
			Label: "FLAVORS"
		},
		{
			Href: "/tools/",
			Label: "TOOLS"
		}
	] })} ` })} ${renderComponent($$result, "ZineDiagramNav", $$ZineDiagramNav, {})} ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/plugin.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/plugin.astro";
var $$url = "/plugin";
// \0virtual:astro:page:Source/pages/plugin@_@astro
var page = () => plugin_exports;
export { page };
