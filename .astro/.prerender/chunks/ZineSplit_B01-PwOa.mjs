import { E as unescapeHTML, _ as renderTemplate, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro, n as $$ZineKicker } from "./Base_DYyCOQNQ.mjs";
import { t as $$ZineBox } from "./ZineBox_Bx8tYYbD.mjs";
import { t as $$ZineStream } from "./ZineStream_DD6gEVPo.mjs";
import { t as $$ZinePreview } from "./ZinePreview_DGRFiFtH.mjs";
import { a as RunTone, i as RunPreview, n as RunKind, r as RunMarker, t as RunBytes } from "./Motion_vSj2iAhk.mjs";
// Source/Component/ZineSplit.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineSplit = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineSplit;
	const { Raw = [], Preview = "", Hash = "", Label = "ONE LINE, ONE MARKER", Wipe = true, Run, Id, Frame = 9 } = Astro.props;
	const Prefix = /^(plain|dim|fade|mute|result|canary|teal): ?([\s\S]*)$/;
	const Lines = Raw.map((Line) => {
		const Match = Prefix.exec(Line);
		return Match === null ? {
			Text: Line,
			Tone: "plain"
		} : {
			Text: Match[2],
			Tone: Match[1]
		};
	});
	const StreamBeat = 140 + Math.max(0, Lines.length - 1) * 70 + 160;
	const Build = Run === void 0 ? void 0 : Run.find((Script) => Script.Type === "build") ?? Run[0];
	const Tail = Build === void 0 ? [] : Build.Lines.slice(-Frame);
	const SettledPreview = Build === void 0 ? "" : RunPreview(Build.Type, Build.Lines);
	const SettledMarker = Build === void 0 ? "" : RunMarker(Build.Hash, Build.Type, Build.Lines);
	const SettledTally = Build === void 0 ? "" : `${Build.Lines.length.toLocaleString("en-US")} lines · ${RunBytes(Build.Lines).toLocaleString("en-US")} bytes`;
	const Slug = Id ?? `run-${Label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}`;
	const Escape = (Text) => Text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
	const FrameRows = Tail.map((Line) => `<div class="whitespace-pre-wrap break-words leading-6"><span class="${RunTone[RunKind(Line)]}">${Escape(Line)}</span></div>`).join("");
	return renderTemplate`${Run === void 0 ? renderTemplate`${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Size": "lg",
		"Rotate": "-rotate-[1deg]",
		"Wipe": Wipe
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<div class="grid grid-cols-1 gap-6 lg:grid-cols-2"> <div> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "div",
		"Tone": "dust"
	}, { "default": ($$result) => renderTemplate`RAW STREAM // WHAT THE TERMINAL KEEPS` })} <div class="mt-2"> ${renderComponent($$result, "ZineStream", $$ZineStream, {
		"Lines": Lines,
		"Stream": true
	})} </div> <p class="mt-4 font-body text-base leading-relaxed text-zinc-dust">
The repeated compile steps fade out, the warnings that were
						already counted mute, and the one line that stopped the build stays at full
						strength. Every one of those lines is context the agent would have paid for.
</p> </div> <div> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "div",
		"Tone": "canary"
	}, { "default": ($$result) => renderTemplate`PREVIEW // WHAT THE MODEL READS` })} <div class="mt-2"> ${renderComponent($$result, "ZinePreview", $$ZinePreview, {
		"Label": Label,
		"Result": Preview,
		"Hash": Hash,
		"Color": "canary",
		"Enter": StreamBeat
	})} </div> <p class="mt-4 font-body text-base leading-relaxed text-zinc-dust">
The same build on one line: the type, the counts, and the one error that
						mattered. The marker underneath is the address of the bytes that stayed
						behind - the agent pays for them only when this line fails to answer the
						question.
</p> </div> </div> ` })}` : renderTemplate`${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Size": "lg",
		"Rotate": "-rotate-[1deg]",
		"Wipe": Wipe
	}, { "default": ($$result) => renderTemplate`<div class="grid grid-cols-1 gap-6 lg:grid-cols-2"${addAttribute(Slug, "data-run")}> <div> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "div",
		"Tone": "dust"
	}, { "default": ($$result) => renderTemplate`RAW STREAM // WHAT THE TERMINAL KEEPS` })}  <div class="ccr-marker mt-2 border border-oxblood-dark bg-soot-black p-3.5 font-mono text-base leading-relaxed text-zinc-dust"> <div class="border-b border-oxblood-dark pb-1.5 text-bone-newsprint" data-run-prompt>${unescapeHTML(Escape(`$ ${Build?.Command ?? ""}`))}</div> <div class="overflow-hidden" data-run-viewport> <pre class="m-0 font-mono" data-run-track>${unescapeHTML(FrameRows)}</pre> </div> <div class="mt-1.5 flex flex-wrap items-baseline justify-between gap-x-3 border-t border-oxblood-dark pt-1.5 text-base"> <span data-run-tally>${unescapeHTML(Escape(SettledTally))}</span> <span class="text-zinc-dust">the whole thing enters the context</span> </div> </div> <p class="mt-4 font-body text-base leading-relaxed text-zinc-dust">
The commands in a tool-heavy session arrive in exactly this variety: a build that
						stalls and then bursts, a search that arrives flat
						and fast, a listing, a test run that ticks, a JSON body that only parses on its
						last line. The fade, the dim and the mute are the suppression marks the engine
						puts on these same lines - repeated compile steps recede, counted warnings
						mute, the one line that stopped the build stays at full strength.
</p> </div> <div> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "div",
		"Tone": "canary"
	}, { "default": ($$result) => renderTemplate`PREVIEW // WHAT THE MODEL READS` })} <div class="mt-2 border-2 border-oxblood-dark bg-asphalt-panel p-3.5" data-enter="980"> <div class="mb-1 flex flex-wrap items-baseline justify-between gap-x-3"> <span class="text-base font-black uppercase tracking-widest text-stamped-canary"> ${Label} </span> <span class="border border-raw-blood/40 bg-raw-blood/10 px-2 py-0.5 font-mono text-base font-black uppercase text-bone-newsprint" data-run-type>${unescapeHTML(Escape(Build?.Type ?? ""))}</span> </div> <div class="border border-oxblood-dark bg-soot-black p-2 font-mono text-base font-bold text-bone-white sm:text-base" data-run-preview>${unescapeHTML(Escape(SettledPreview))}</div> <div class="ccr-marker mt-2 font-mono text-base font-bold text-weathered-teal" data-run-marker>${unescapeHTML(Escape(SettledMarker))}</div> </div> <p class="mt-4 font-body text-base leading-relaxed text-zinc-dust">
Aphrodite previews the output it has received, not the output a command will
						eventually produce: the counts are the counts of the lines that have actually
						arrived, and the marker's size is the size of the bytes behind it at that
						moment. Every intermediate preview reads as one sentence -
<em>if the stream ended here, this is the line the agent would read</em> - and
						the tally climbs with the stream until it settles on the line the build really
						ends on.
</p> <p class="mt-3 font-body text-base leading-relaxed text-zinc-dust">
The type chip names the type the tool hands the engine, and the
						engine honours it: a build counts errors and warnings, a search counts hits
						and files, a listing counts entries and extensions, a test run counts passes
						and failures, a JSON body counts items and keys. One engine, five arms of it -
						the same four stages, reading five different kinds of output.
</p> </div> </div> <script crossorigin=\"anonymous\" type="application/json"${addAttribute(Slug, "data-run-script")}>${unescapeHTML(JSON.stringify(Run))}<\/script>` })}`}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineSplit.astro", void 0);
export { $$ZineSplit as t };
