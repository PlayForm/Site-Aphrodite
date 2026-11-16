import { E as unescapeHTML, _ as renderTemplate, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro } from "./Base_Bs2-mKm9.mjs";
// Source/Component/ZineStream.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineStream = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineStream;
	const { Lines, Stream = false, Command, Label, Bytes } = Astro.props;
	const VolumeClass = {
		plain: "",
		dim: "opacity-70",
		fade: "opacity-40",
		mute: "opacity-25",
		result: "",
		canary: "",
		teal: ""
	};
	const ToneClass = {
		...VolumeClass,
		result: "text-bone-white",
		canary: "text-stamped-canary",
		teal: "text-weathered-teal"
	};
	const RoleInk = {
		command: "text-stamped-canary font-bold",
		tree: "text-bone-newsprint",
		tag: "text-weathered-teal",
		warning: "text-bone-white"
	};
	const Ink = (LineTone, LineRole) => LineRole === void 0 ? [ToneClass[LineTone]] : [VolumeClass[LineTone], RoleInk[LineRole]];
	const RoleRow = {
		command: "",
		tree: "",
		tag: "",
		warning: "border-l-2 border-raw-blood bg-[color-mix(in_srgb,var(--raw-blood)_18%,var(--soot-black))] pl-2"
	};
	const Ribbon = Command !== void 0 || Label !== void 0 || Bytes !== void 0;
	const Count = `${Lines.length.toLocaleString("en-US")} ${Lines.length === 1 ? "LINE" : "LINES"}`;
	const Tally = Bytes === void 0 ? Count : `${Count} · ${Bytes.toLocaleString("en-US")} B`;
	return renderTemplate`${maybeRenderHead($$result)}<figure class="ccr-marker m-0 border border-oxblood-dark bg-soot-black" data-astro-cid-u7bb65ow> ${Ribbon && renderTemplate`<div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-oxblood-dark bg-asphalt-panel px-3 py-1.5" data-astro-cid-u7bb65ow> <span class="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-0.5" data-astro-cid-u7bb65ow> ${Label !== void 0 && renderTemplate`<span${addAttribute(["break-words", Command === void 0 ? "font-black uppercase tracking-widest text-zinc-dust" : "type-meta !font-black uppercase text-zinc-dust"], "class:list")} data-astro-cid-u7bb65ow> ${Label} </span>`} ${Command !== void 0 && renderTemplate`<span class="flex min-w-0 items-baseline gap-x-2 font-mono text-base leading-snug" data-astro-cid-u7bb65ow> <span class="shrink-0 text-zinc-dust" aria-hidden="true" data-astro-cid-u7bb65ow>
$
</span> <span class="break-words font-bold text-stamped-canary" data-astro-cid-u7bb65ow>${Command}</span> </span>`} </span> <span class="telemetry-tag ml-auto shrink-0"${addAttribute(`${Lines.length} lines in this stream`, "title")} data-astro-cid-u7bb65ow> ${Tally} </span> </div>`} <div class="console-well p-3.5 font-mono text-base leading-relaxed text-zinc-dust"${addAttribute(Stream ? "" : void 0, "data-stream")} data-astro-cid-u7bb65ow> ${Lines.map(({ Text, Tone: LineTone = "plain", Role: LineRole }) => renderTemplate`<div${addAttribute(LineRole === void 0 ? "" : RoleRow[LineRole], "class")} data-astro-cid-u7bb65ow> <span${addAttribute(Ink(LineTone, LineRole), "class:list")} data-astro-cid-u7bb65ow>${unescapeHTML(Text)}</span> </div>`)} </div> </figure>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineStream.astro", void 0);
export { $$ZineStream as t };
