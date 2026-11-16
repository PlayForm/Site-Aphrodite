import { _ as renderTemplate, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro } from "./Base_DYyCOQNQ.mjs";
// Source/Component/ZineLedger.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineLedger = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineLedger;
	const { Rows, Headers } = Astro.props;
	const Delta = {
		up: "text-stamped-canary",
		down: "text-weathered-teal"
	};
	return renderTemplate`${maybeRenderHead($$result)}<!-- The table cannot shrink below its content's min-content width, so on a
	narrow viewport it widened the PAGE (/versions/ by 226px) instead of
	scrolling. The box is the scroll container: the border stays put, the
	rows move. Same pattern as every hand-written table on the site. --><div class="zine-box-subtle overflow-x-auto border-[3px] border-oxblood-dark bg-carbon-void"> <table class="w-full border-collapse font-mono text-base"> ${Headers && renderTemplate`<thead> <tr class="border-b-2 border-blood-crimson"> ${Headers.map((Header) => renderTemplate`<th class="px-3 py-2 text-left text-base font-black uppercase tracking-widest text-zinc-dust">${Header}</th>`)} </tr> </thead>`} <tbody> ${Rows.map((Row) => renderTemplate`<tr class="border-b border-oxblood-dark/60 last:border-b-0 hover:bg-raw-blood/10"> ${Row.Cells.map((Cell) => renderTemplate`<td${addAttribute(`px-3 py-2 ${Cell.Delta ? Delta[Cell.Delta] : "text-bone-newsprint"} ${Cell.Align === "right" ? "text-right" : "text-left"}`, "class")}> ${Cell.Delta && renderTemplate`<span class="mr-1 font-black">${Cell.Delta === "up" ? "▲" : "▼"}</span>`} ${Cell.Text} </td>`)} </tr>`)} </tbody> </table> </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineLedger.astro", void 0);
export { $$ZineLedger as t };
