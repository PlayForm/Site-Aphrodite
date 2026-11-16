import { E as unescapeHTML, _ as renderTemplate, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro, n as $$ZineKicker } from "./Base_Bs2-mKm9.mjs";
import { t as $$ZineBox } from "./ZineBox_CVeWVZDC.mjs";
import { t as $$ZineStream } from "./ZineStream_Cta1vyoB.mjs";
import { t as $$ZinePreview } from "./ZinePreview_BaqfI0u8.mjs";
import { t as $$ZineCopyChip } from "./ZineCopyChip_CFcYs61X.mjs";
import { a as RunTone, i as RunPreview, n as RunKind, r as RunMarker, t as RunBytes } from "./Motion_vSj2iAhk.mjs";
// Source/Component/ZineSplit.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineSplit = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineSplit;
	const { Raw = [], Preview = "", Hash = "", Label = "ONE LINE, ONE MARKER", Wipe = true, Run, Id, Frame = 9 } = Astro.props;
	const Prefix = /^(plain|dim|fade|mute|result|canary|teal): ?([\s\S]*)$/;
	const RoleOf = (Text) => {
		const Trimmed = Text.trimStart();
		if (Trimmed.startsWith("$ ")) return "command";
		if (/^(warning|error)[:[]/i.test(Trimmed) || Trimmed.includes(": error[") || Trimmed.includes(": warning:")) return "warning";
		if (/^[├└│─]/.test(Trimmed) || Trimmed.startsWith("Compiling ")) return "tree";
		if (Trimmed.includes("<<<CCR:")) return "tag";
	};
	const Lines = Raw.map((Line) => {
		const Match = Prefix.exec(Line);
		const Text = Match === null ? Line : Match[2];
		const Tone = Match === null ? "plain" : Match[1];
		const Role = RoleOf(Text);
		return Role === void 0 ? {
			Text,
			Tone
		} : {
			Text,
			Tone,
			Role
		};
	});
	const RawBytes = RunBytes(Lines.map((Line) => Line.Text));
	const BytesOf = (Text) => typeof TextEncoder === "undefined" ? Text.length : new TextEncoder().encode(Text).length;
	const FirstPrompt = Lines.find((Line) => Line.Text.trimStart().startsWith("$ "));
	const RawCommand = FirstPrompt === void 0 ? void 0 : FirstPrompt.Text.trimStart().slice(2).trim();
	const CommandProp = RawCommand === void 0 || RawCommand === "" ? {} : { Command: RawCommand };
	const PreviewBytes = BytesOf(Preview);
	const PreviewTally = Preview === "" ? "ABSORBED" : `ABSORBED · ${PreviewBytes.toLocaleString("en-US")} B`;
	const Payload = Hash.replace(/<[^>]*>/g, "").trim();
	const StreamBeat = 140 + Math.max(0, Lines.length - 1) * 70 + 160;
	const Build = Run === void 0 ? void 0 : Run.find((Script) => Script.Type === "build") ?? Run[0];
	const Tail = Build === void 0 ? [] : Build.Lines.slice(-Frame);
	const SettledPreview = Build === void 0 ? "" : RunPreview(Build.Type, Build.Lines);
	const SettledMarker = Build === void 0 ? "" : RunMarker(Build.Hash, Build.Type, Build.Lines);
	const SettledTally = Build === void 0 ? "" : `${Build.Lines.length.toLocaleString("en-US")} ${Build.Lines.length === 1 ? "LINE" : "LINES"} · ${RunBytes(Build.Lines).toLocaleString("en-US")} B`;
	const Slug = Id ?? `run-${Label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}`;
	const Escape = (Text) => Text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
	const FrameRows = Tail.map((Line) => `<div class="whitespace-pre-wrap break-words leading-6"><span class="${RunTone[RunKind(Line)]}">${Escape(Line)}</span></div>`).join("");
	return renderTemplate` ${Run === void 0 ? renderTemplate`${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Size": "lg",
		"Rotate": "-rotate-[1deg]",
		"Wipe": Wipe,
		"data-astro-cid-uzysikot": true
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10" data-astro-cid-uzysikot>  <div class="flex min-w-0 flex-col gap-4" data-astro-cid-uzysikot> ${renderComponent($$result, "ZineStream", $$ZineStream, {
		"Lines": Lines,
		"Stream": true,
		"Label": "RAW STREAM // WHAT THE TERMINAL KEEPS",
		"Bytes": RawBytes,
		...CommandProp,
		"data-astro-cid-uzysikot": true
	})} <p class="font-body text-base leading-relaxed text-zinc-dust" data-astro-cid-uzysikot>
The repeated compile steps fade out, the warnings that were already counted
						mute, and the one line that stopped the build stays at full strength. Every one
						of those lines is context the agent would have paid for.
</p> </div>  <div class="flex min-w-0 flex-col gap-4" data-astro-cid-uzysikot> <div class="flex flex-col" data-astro-cid-uzysikot> <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-2 border-oxblood-dark border-b-0 bg-asphalt-panel px-3.5 py-1.5" data-astro-cid-uzysikot> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "div",
		"Tone": "canary",
		"data-astro-cid-uzysikot": true
	}, { "default": ($$result) => renderTemplate`
PREVIEW // WHAT THE MODEL READS
` })} <span class="telemetry-tag telemetry-tag--canary ml-auto shrink-0"${addAttribute(`${PreviewBytes} bytes in the preview line`, "title")} data-astro-cid-uzysikot> ${PreviewTally} </span> </div> ${renderComponent($$result, "ZinePreview", $$ZinePreview, {
		"Label": Label,
		"Result": Preview,
		"Color": "canary",
		"Enter": StreamBeat,
		"data-astro-cid-uzysikot": true
	})} <div class="mt-3 flex items-center gap-3" data-astro-cid-uzysikot> <span class="type-meta shrink-0 !font-black uppercase text-zinc-dust" data-astro-cid-uzysikot>
CUTOFF
</span> <span class="h-px flex-1 bg-oxblood-dark" aria-hidden="true" data-astro-cid-uzysikot></span> <span class="type-meta uppercase text-zinc-dust" data-astro-cid-uzysikot>
THE PREVIEW STOPS HERE · THE ORIGINAL IS STORED
</span> </div> ${Hash !== "" && renderTemplate`<details class="group mt-2" data-astro-cid-uzysikot> <summary class="flex cursor-pointer list-none items-center justify-between gap-3 font-mono text-caption text-zinc-dust transition-colors hover:text-bone-white" data-astro-cid-uzysikot> <span data-astro-cid-uzysikot>Original retained</span> <span class="shrink-0 group-open:hidden" aria-hidden="true" data-astro-cid-uzysikot>
+
</span> <span class="hidden shrink-0 group-open:inline" aria-hidden="true" data-astro-cid-uzysikot>
−
</span> </summary> <div class="mt-2 flex items-start gap-3" data-astro-cid-uzysikot> <div class="ccr-marker grow font-mono text-caption font-bold text-weathered-teal" data-astro-cid-uzysikot>${unescapeHTML(Hash)}</div> ${renderComponent($$result, "ZineCopyChip", $$ZineCopyChip, {
		"Label": "MARKER",
		"Copy": Payload,
		"data-astro-cid-uzysikot": true
	})} </div> </details>`} </div> <p class="font-body text-base leading-relaxed text-zinc-dust" data-astro-cid-uzysikot>
The same build on one line: the type, the counts, and the one error that
						mattered. The marker underneath is the address of the bytes that stayed behind -
						the agent pays for them only when this line fails to answer the question.
</p> </div> </div> ` })}` : renderTemplate`${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Size": "lg",
		"Rotate": "-rotate-[1deg]",
		"Wipe": Wipe,
		"data-astro-cid-uzysikot": true
	}, { "default": ($$result) => renderTemplate`<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10"${addAttribute(Slug, "data-run")} data-astro-cid-uzysikot>  <div class="flex min-w-0 flex-col gap-4" data-astro-cid-uzysikot> <div class="ccr-marker flex flex-col border border-oxblood-dark bg-soot-black" data-astro-cid-uzysikot> <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-oxblood-dark bg-asphalt-panel px-3 py-1.5" data-astro-cid-uzysikot> <span class="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-0.5" data-astro-cid-uzysikot> <span class="type-meta shrink-0 !font-black uppercase text-zinc-dust" data-astro-cid-uzysikot>
RAW STREAM // WHAT THE TERMINAL KEEPS
</span> <span class="break-words font-mono text-base font-bold leading-snug text-stamped-canary" data-run-prompt data-astro-cid-uzysikot>${unescapeHTML(Escape(`$ ${Build?.Command ?? ""}`))}</span> </span> <span class="telemetry-tag ml-auto shrink-0" data-run-tally data-astro-cid-uzysikot>${unescapeHTML(Escape(SettledTally))}</span> </div> <div class="console-well p-3.5 font-mono text-base leading-relaxed text-zinc-dust" data-astro-cid-uzysikot> <div class="overflow-hidden" data-run-viewport data-astro-cid-uzysikot> <pre class="m-0 font-mono" data-run-track data-astro-cid-uzysikot>${unescapeHTML(FrameRows)}</pre> </div> </div> </div> <p class="font-mono text-base leading-relaxed text-zinc-dust" data-astro-cid-uzysikot>
the whole thing enters the context
</p> <p class="font-body text-base leading-relaxed text-zinc-dust" data-astro-cid-uzysikot>
The commands in a tool-heavy session arrive in exactly this variety: a build
						that stalls and then bursts, a search that arrives flat and fast, a listing, a
						test run that ticks, a JSON body that only parses on its last line. The fade,
						the dim and the mute are the suppression marks the engine puts on these same
						lines - repeated compile steps recede, counted warnings mute, the one line that
						stopped the build stays at full strength.
</p> </div>  <div class="flex min-w-0 flex-col gap-4" data-astro-cid-uzysikot> <div class="flex flex-col" data-astro-cid-uzysikot> <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-2 border-oxblood-dark border-b-0 bg-asphalt-panel px-3.5 py-1.5" data-astro-cid-uzysikot> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "div",
		"Tone": "canary",
		"data-astro-cid-uzysikot": true
	}, { "default": ($$result) => renderTemplate`
PREVIEW // WHAT THE MODEL READS
` })} <span class="telemetry-tag telemetry-tag--crimson ml-auto shrink-0" data-run-type data-astro-cid-uzysikot>${unescapeHTML(Escape(Build?.Type ?? ""))}</span> </div> <div class="border-2 border-oxblood-dark bg-asphalt-panel p-3.5" data-enter="980" data-astro-cid-uzysikot> <div class="type-meta mb-1.5 uppercase text-stamped-canary" data-astro-cid-uzysikot>${Label}</div> <div class="border border-oxblood-dark bg-soot-black p-2" data-astro-cid-uzysikot> <div class="font-mono text-base font-bold text-bone-white" data-run-preview data-astro-cid-uzysikot>${unescapeHTML(Escape(SettledPreview))}</div> <div class="mt-2 flex items-center gap-3" data-astro-cid-uzysikot> <span class="type-meta shrink-0 !font-black uppercase text-zinc-dust" data-astro-cid-uzysikot>
CUTOFF
</span> <span class="h-px flex-1 bg-oxblood-dark" aria-hidden="true" data-astro-cid-uzysikot></span> <span class="type-meta uppercase text-zinc-dust" data-astro-cid-uzysikot>
THE PREVIEW STOPS HERE · THE ORIGINAL IS STORED
</span> </div> <div class="ccr-marker mt-2 font-mono text-base font-bold text-weathered-teal" data-run-marker data-astro-cid-uzysikot>${unescapeHTML(Escape(SettledMarker))}</div> </div> </div> </div> <p class="font-body text-base leading-relaxed text-zinc-dust" data-astro-cid-uzysikot>
Aphrodite previews the output it has received, not the output a command will
						eventually produce: the counts are the counts of the lines that have actually
						arrived, and the marker's size is the size of the bytes behind it at that
						moment. Every intermediate preview reads as one sentence -
<em data-astro-cid-uzysikot>if the stream ended here, this is the line the agent would read</em> - and
						the tally climbs with the stream until it settles on the line the build really
						ends on.
</p> <p class="font-body text-base leading-relaxed text-zinc-dust" data-astro-cid-uzysikot>
The type chip names the type the tool hands the engine, and the engine honours
						it: a build counts errors and warnings, a search counts hits and files, a
						listing counts entries and extensions, a test run counts passes and failures, a
						JSON body counts items and keys. One engine, five arms of it - the same four
						stages, reading five different kinds of output.
</p> </div> </div> <script crossorigin=\"anonymous\" type="application/json"${addAttribute(Slug, "data-run-script")}>${unescapeHTML(JSON.stringify(Run))}<\/script>` })}`}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineSplit.astro", void 0);
export { $$ZineSplit as t };
