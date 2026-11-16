import { E as unescapeHTML, _ as renderTemplate, d as Fragment, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro, n as $$ZineKicker } from "./Base_B3YGMVwW.mjs";
import { t as $$ZineBox } from "./ZineBox_CagEU9Nk.mjs";
import { t as $$ZineTape } from "./ZineTape_SD5UQe0y.mjs";
import { t as $$ZineStream } from "./ZineStream_BAQz1w1v.mjs";
import { t as $$ZinePreview } from "./ZinePreview_Bu6cez_G.mjs";
import { t as $$ZineSource } from "./ZineSource_B5XPnKZs.mjs";
import { t as $$CodeFence } from "./CodeFence_C7O6HIFG.mjs";
// Source/Component/ExamplePanels.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ExamplePanels = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ExamplePanels;
	const { Panels = [], Class = "" } = Astro.props;
	return renderTemplate`${Panels.map((Panel) => renderTemplate`${maybeRenderHead($$result)}<div${addAttribute([Class], "class:list")}> ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "dust" }, { "default": ($$result) => renderTemplate`${Panel.Label}` })} ${Panel.Kind === "rows" && renderTemplate`<dl class="mt-8 flex flex-col gap-3"> ${Panel.Rows?.map(({ Left, Right, Tag, TagTone = "canary" }) => renderTemplate`<div class="grid grid-cols-1 gap-x-8 gap-y-1 border border-oxblood-dark bg-asphalt-panel px-4 py-3 sm:grid-cols-[minmax(0,16rem)_minmax(0,1fr)]"> <dt class="font-mono text-base font-black uppercase tracking-widest text-bone-white"> ${Left} </dt> <dd class="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-base text-zinc-dust"> <span>${Right}</span> ${Tag && renderTemplate`<span${addAttribute(["border px-2 py-0.5 font-mono text-base font-black", {
		canary: "border-stamped-canary text-stamped-canary",
		teal: "border-weathered-teal text-weathered-teal",
		newsprint: "border-bone-newsprint text-bone-newsprint"
	}[TagTone]], "class:list")}> ${Tag} </span>`} </dd> </div>`)} </dl>`} ${Panel.Kind === "cards" && renderTemplate`<div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"> ${Panel.Cards?.map(({ Title, Body, Note }) => renderTemplate`<div class="zine-box-subtle border-[3px] border-oxblood-dark bg-soot-black p-5"> <div class="font-mono text-base font-black uppercase tracking-widest text-zinc-dust"> ${Title} </div> <div class="mt-4 font-mono text-base text-bone-white">${Body}</div> ${Note && renderTemplate`<div class="mt-4 border-t border-oxblood-dark pt-4 font-mono text-base leading-relaxed text-zinc-dust"> ${Note} </div>`} </div>`)} </div>`} ${Panel.Kind === "lanes" && renderTemplate`<div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2"> ${Panel.Lanes?.map(({ Title, Lines, Marker }) => renderTemplate`<div class="border border-oxblood-dark bg-soot-black p-5 font-mono text-base"> <div class="font-black uppercase tracking-widest text-bone-white">${Title}</div> ${Lines.map((Line) => renderTemplate`<div class="mt-2 text-zinc-dust">${Line}</div>`)} ${Marker && renderTemplate`<div class="ccr-marker mt-4 text-weathered-teal">${unescapeHTML(Marker)}</div>`} </div>`)} </div>`} ${Panel.Kind === "table" && renderTemplate`<div class="mt-8 overflow-x-auto"> <table class="w-full min-w-[36rem] border-collapse text-left"> <caption class="type-sub mb-[var(--space-tight)] text-left text-bone-white"> ${Panel.Caption} </caption> <thead> <tr> ${Panel.Columns.map((Column) => renderTemplate`<th scope="col" class="border border-oxblood-dark px-3 py-2 font-mono text-base font-black uppercase tracking-widest text-zinc-dust"> ${Column} </th>`)} </tr> </thead> <tbody> ${Panel.Rows?.map((Row) => renderTemplate`<tr> ${Row.map((Cell, Index) => Index === 0 ? renderTemplate`<th scope="row" class="border border-oxblood-dark px-3 py-3 align-top font-mono text-base font-black uppercase tracking-widest text-bone-white"> ${Cell} </th>` : renderTemplate`<td class="border border-oxblood-dark px-3 py-3 align-top font-mono text-base leading-relaxed text-zinc-dust"> ${Cell} </td>`)} </tr>`)} </tbody> </table> </div>`} ${Panel.Kind === "sequence" && renderTemplate`<ol role="list" class="mt-8 flex list-none flex-col gap-3"> ${Panel.Steps?.map(({ N, Title, Rule }) => renderTemplate`<li class="border border-oxblood-dark bg-asphalt-panel px-4 py-3"> <div class="flex flex-wrap items-baseline gap-3"> <span aria-hidden="true" class="border border-oxblood-dark bg-raw-blood px-1.5 py-0.5 font-mono text-base font-black text-bone-white"> ${N} </span> <span class="font-mono text-base font-black uppercase tracking-widest text-stamped-canary"> ${Title} </span> </div> <p class="mt-2 font-mono text-base leading-relaxed text-zinc-dust">${Rule}</p> </li>`)} </ol>`} </div>`)}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ExamplePanels.astro", void 0);
// Source/Component/ExampleCase.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ExampleCase = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ExampleCase;
	const { Id, N, Label, Title, Tone = "crimson", Rotate = "", Claim, Command, Output, Preview, Marker, Outcome = "compressed", Provenance = "Illustrative", Stages = [], Retrieval, Note, Panels = [], Diagram, Src, Reveal = false, Stream = false, Library = false, Defaults = {} } = Astro.props;
	const TapeColor = {
		crimson: "raw",
		canary: "canary",
		teal: "teal"
	};
	const StreamBeat = 140 + Math.max(0, Output.length - 1) * 70 + 160;
	const OutcomeCopy = {
		compressed: {
			Label: "COMPRESSED",
			Original: "THE ORIGINAL OUTPUT",
			Result: "WHAT THE AGENT SEES // PREVIEW + MARKER",
			Decision: "Over the surface's threshold: the bytes are hashed (BLAKE3), stored, and the transcript keeps a preview line plus a marker that addresses the original. Retrieval returns the exact original bytes, so the round trip closes with nothing lost."
		},
		passthrough: {
			Label: "PASSED THROUGH",
			Original: "THE INPUT",
			Result: "WHAT THE AGENT SEES // UNCHANGED",
			Decision: "Under the surface's threshold, or stopped by a skip gate: the output reaches the transcript byte-identical and nothing is stored. Compression is a byte count against a threshold, never a judgment call - which is why the preview below was computed and then never emitted."
		},
		injected: {
			Label: "INJECTED",
			Original: "THE ASSEMBLY ORDER",
			Result: "WHAT THE AGENT SEES // THE BLOCK HEADER",
			Decision: "Not a tool result at all: short behavioural files are assembled in a fixed order and injected into the prompt every turn, ahead of nudges and the recall catalog. Sections drop bottom-up when the flow budget is tight; directives and nudges never drop."
		},
		callback: {
			Label: "CALLBACK",
			Original: "THE EXCHANGE",
			Result: "WHAT THE AGENT SEES // THE QUEUED REPLY",
			Decision: "A fire-and-forget relay call: the request answers immediately with a queued reply, and the real result arrives later, POSTed to the callback URL. Two deliveries, one call - which is why the exchange below is three stages and not one stream."
		}
	};
	const ProvenanceTone = {
		Illustrative: "border-zinc-dust text-zinc-dust",
		"Catalog-exact": "border-weathered-teal text-weathered-teal",
		Captured: "border-stamped-canary text-stamped-canary",
		"Engine-verified": "border-bone-white text-bone-white"
	};
	const ExcerptLines = Output.slice(0, 4);
	const ExcerptMore = Math.max(0, Output.length - ExcerptLines.length);
	const Sequential = Outcome === "injected" || Outcome === "callback";
	const OutcomeChip = {
		compressed: "border-stamped-canary text-stamped-canary",
		passthrough: "border-weathered-teal text-weathered-teal",
		injected: "border-bone-newsprint text-bone-newsprint",
		callback: "border-raw-blood text-bone-white"
	}[Outcome];
	return renderTemplate`${maybeRenderHead($$result)}<section${addAttribute(Id, "id")} class="relative w-full scroll-mt-24"${addAttribute(Reveal ? "" : void 0, "data-reveal")}> ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": Tone,
		"Rotate": Rotate
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Label": `${N} // ${Label}`,
		"Color": TapeColor[Tone],
		"Side": "left"
	})} ${Library ? renderTemplate`<div class="mt-6 flex flex-col"> <!-- ============ THE RESTING STATE ============ --><div class="flex flex-wrap items-center gap-2"> <span${addAttribute(["border px-2 py-0.5 font-mono text-base font-black uppercase tracking-widest", ProvenanceTone[Provenance]], "class:list")}> ${Provenance} </span> <span${addAttribute(["border px-2 py-0.5 font-mono text-base font-black uppercase tracking-widest", OutcomeChip], "class:list")}> ${OutcomeCopy[Outcome].Label} </span> </div> <h3 class="type-sub mt-5 uppercase text-bone-white">${Title}</h3>  <p class="type-body mt-3 max-w-3xl text-bone-newsprint">${unescapeHTML(Claim[0])}</p> ${Sequential ? renderTemplate`<div class="mt-8 flex flex-col gap-8"> <div class="flex flex-col gap-4"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "p",
		"Tone": "dust"
	}, { "default": ($$result) => renderTemplate`${OutcomeCopy[Outcome].Original}` })} ${Stages.map((Stage, Index) => renderTemplate`<div class="border border-oxblood-dark bg-asphalt-panel p-4"> <div class="flex flex-wrap items-baseline gap-3"> <span class="border border-oxblood-dark bg-raw-blood px-1.5 py-0.5 font-mono text-base font-black text-bone-white"> ${String(Index + 1).padStart(2, "0")} </span> <span class="font-mono text-base font-black uppercase tracking-widest text-stamped-canary"> ${Stage.Label} </span> </div> <div class="mt-3"> ${renderComponent($$result, "ZineStream", $$ZineStream, { "Lines": Stage.Lines })} </div> </div>`)} </div> <div> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "p",
		"Tone": "dust"
	}, { "default": ($$result) => renderTemplate`${OutcomeCopy[Outcome].Result}` })} <div class="mt-3 max-w-3xl"> ${renderComponent($$result, "ZinePreview", $$ZinePreview, {
		"Label": Outcome === "callback" ? "PREVIEW + MARKER" : "THE PREVIEW LINE",
		"Result": Preview,
		"Hash": Outcome === "callback" ? Marker : void 0,
		"Enter": StreamBeat
	})} </div> </div> </div>` : renderTemplate`<div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2"> <div> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "p",
		"Tone": "dust"
	}, { "default": ($$result) => renderTemplate`${OutcomeCopy[Outcome].Original}` })} <div class="mt-3"> ${renderComponent($$result, "ZineStream", $$ZineStream, {
		"Lines": ExcerptLines,
		"Stream": Stream
	})} </div> ${ExcerptMore > 0 && renderTemplate`<p class="mt-3 font-mono text-base leading-relaxed text-zinc-dust"> ${ExcerptMore} more ${ExcerptMore === 1 ? "line" : "lines"} - inspect the example for
										the full stream.
</p>`} </div> <div> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "p",
		"Tone": "dust"
	}, { "default": ($$result) => renderTemplate`${OutcomeCopy[Outcome].Result}` })} ${Outcome === "compressed" ? renderTemplate`<div class="mt-3"> ${renderComponent($$result, "ZinePreview", $$ZinePreview, {
		"Label": "PREVIEW + MARKER",
		"Result": Preview,
		"Hash": Marker,
		"Enter": StreamBeat
	})} </div>` : renderTemplate`<div class="mt-3 border-2 border-oxblood-dark bg-asphalt-panel p-4"> <ul class="flex flex-col gap-2 font-mono text-base leading-relaxed"> <li> <span class="text-zinc-dust">bytes</span>${" "} <span class="text-bone-white">identical to the input above</span> </li> <li> <span class="text-zinc-dust">marker</span>${" "} <span class="text-bone-white">none - the output stays raw, no marker stored</span> </li> <li> <span class="text-zinc-dust">store</span>${" "} <span class="text-bone-white">no entry</span> </li> </ul> <div class="mt-4 border-t border-oxblood-dark pt-4"> <p class="font-mono text-base font-black uppercase tracking-widest text-zinc-dust">
THE PREVIEW THE CLASSIFIER WOULD HAVE WRITTEN - NEVER EMITTED
</p> <div class="mt-2 border border-oxblood-dark bg-soot-black p-2 font-mono text-base text-bone-newsprint"> ${Preview} </div> </div> </div>`} </div> </div>`} <!-- ============ THE INSPECT FOLD ============ --> <details class="group mt-10 border-2 border-oxblood-dark bg-carbon-void"> <summary class="flex cursor-pointer list-none flex-wrap items-center gap-3 border-b border-transparent bg-soot-black px-4 py-3 font-mono text-base text-bone-newsprint transition-colors group-open:border-oxblood-dark hover:text-bone-white"> <span class="border border-oxblood-dark bg-raw-blood px-2 py-0.5 font-black uppercase tracking-widest text-bone-white">
INSPECT EXAMPLE
</span> <span class="grow font-normal text-zinc-dust">
full output · retrieval call and answer · threshold decision · configuration ·
								sources
</span> <span class="text-stamped-canary group-open:hidden" aria-hidden="true">OPEN +</span> <span class="hidden text-zinc-dust group-open:inline" aria-hidden="true">CLOSE −</span> </summary> <div class="flex flex-col gap-12 p-4 sm:p-6"> <!-- THE CLAIM, IN FULL --><div> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "p",
		"Tone": "dust"
	}, { "default": ($$result) => renderTemplate`THE CLAIM // IN FULL` })} <div class="prose-flow mt-4 max-w-3xl"> ${Claim.map((Sentence) => renderTemplate`<p class="type-body text-bone-newsprint">${unescapeHTML(Sentence)}</p>`)} </div> </div> <!-- THE COMMAND --> <div> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "p",
		"Tone": "dust"
	}, { "default": ($$result) => renderTemplate`THE COMMAND` })} <div class="mt-3 border-2 border-oxblood-dark bg-soot-black"> ${renderComponent($$result, "CodeFence", $$CodeFence, {
		"Code": Command.Code,
		"Lang": Command.Lang,
		"Copy": true
	})} </div> </div> <!-- THE FULL OUTPUT --> <div> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "p",
		"Tone": "dust"
	}, { "default": ($$result) => renderTemplate`THE FULL OUTPUT // EVERY LINE` })} <div class="mt-3"> ${renderComponent($$result, "ZineStream", $$ZineStream, { "Lines": Output })} </div> </div> <!-- THE RETRIEVAL ROUND TRIP --> ${Retrieval && renderTemplate`<div> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "p",
		"Tone": "dust"
	}, { "default": ($$result) => renderTemplate`
THE RETRIEVAL // THE CALL AND THE ANSWER
` })} <div class="mt-3 border-2 border-oxblood-dark bg-soot-black"> ${renderComponent($$result, "CodeFence", $$CodeFence, {
		"Code": Retrieval.Call,
		"Lang": "text",
		"Copy": true
	})} </div> <ul class="mt-3 flex flex-col gap-2 border border-oxblood-dark bg-asphalt-panel p-4 font-mono text-base leading-relaxed"> <li> <span class="text-zinc-dust">found</span>${" "} <span class="text-bone-white">${Retrieval.Found ? "true" : "false"}</span> </li> <li> <span class="text-zinc-dust">source</span>${" "} <span class="text-bone-white">${Retrieval.Source}</span> </li> <li> <span class="text-zinc-dust">hash</span>${" "} <span class="break-all text-weathered-teal">${Retrieval.Hash}</span> </li> <li> <span class="text-zinc-dust">content</span>${" "} <span class="text-bone-white">${Retrieval.Content}</span> </li> </ul> </div>`} <!-- THE THRESHOLD DECISION + THE CONFIGURATION IT READ --> <div> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "p",
		"Tone": "dust"
	}, { "default": ($$result) => renderTemplate`THE THRESHOLD DECISION` })} <p class="type-body mt-3 max-w-3xl text-bone-newsprint"> ${OutcomeCopy[Outcome].Decision} </p> ${Object.keys(Defaults).length > 0 && renderTemplate`<div class="mt-6 border border-oxblood-dark bg-asphalt-panel p-4"> <p class="font-mono text-base font-black uppercase tracking-widest text-zinc-dust">
THE CONFIGURATION IN PLAY
</p> <p class="type-body mt-2 max-w-3xl text-bone-newsprint">
These are the numbers every decision on this page is made against, read
												from the example bank rather than typed into the markup.
</p> <ul class="mt-4 flex flex-wrap gap-x-8 gap-y-2 font-mono text-base leading-relaxed"> ${Object.entries(Defaults).map(([Key, Value]) => renderTemplate`<li> <span class="text-zinc-dust">${Key}</span>${" "} <span class="text-weathered-teal">= ${String(Value)}</span> </li>`)} </ul> </div>`} </div> <!-- THE SCENARIO'S OWN EVIDENCE -->  ${renderComponent($$result, "ExamplePanels", $$ExamplePanels, { "Panels": Panels })} <!-- THE DIAGRAM --> ${Diagram && renderTemplate`<figure class="border border-oxblood-dark bg-asphalt-panel p-4"> <div class="overflow-x-auto">${unescapeHTML(Diagram.Html)}</div> <figcaption class="mt-6 font-mono text-base font-black uppercase tracking-widest text-zinc-dust"> ${Diagram.Caption} </figcaption> </figure>`} <!-- THE CLOSING --> ${Note?.length ? renderTemplate`<div class="prose-flow max-w-3xl"> ${Note.map((Sentence) => renderTemplate`<p class="type-body text-bone-newsprint">${unescapeHTML(Sentence)}</p>`)} </div>` : null} <!-- THE CITATION --> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": [Src] })} </div> </details> </div>` : renderTemplate`<div class="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-2"> <!-- THE CLAIM --><div> <h2 class="font-headline text-2xl font-black uppercase tracking-tight text-bone-white sm:text-4xl"> ${Title} </h2>  <div class="prose-flow mt-[var(--space-tight)]"> ${Claim.map((Sentence) => renderTemplate`<p class="font-body text-base leading-relaxed text-bone-newsprint">${unescapeHTML(Sentence)}</p>`)} </div> </div> <!-- THE MECHANICS: command, output, marker --> <div class="flex flex-col gap-8"> <div> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "h3",
		"Tone": "dust"
	}, { "default": ($$result) => renderTemplate`THE COMMAND` })} <div class="mt-3 border-2 border-oxblood-dark bg-soot-black"> ${renderComponent($$result, "CodeFence", $$CodeFence, {
		"Code": Command.Code,
		"Lang": Command.Lang,
		"Copy": true
	})} </div> </div> <div> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "h3",
		"Tone": "dust"
	}, { "default": ($$result) => renderTemplate`THE OUTPUT` })} <div class="mt-3"> ${renderComponent($$result, "ZineStream", $$ZineStream, {
		"Lines": Output,
		"Stream": Stream
	})} </div> </div> <div> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "h3",
		"Tone": "dust"
	}, { "default": ($$result) => renderTemplate`THE MARKER` })} <div class="mt-3"> ${renderComponent($$result, "ZinePreview", $$ZinePreview, {
		"Label": "PREVIEW + HASH",
		"Result": Preview,
		"Hash": Marker,
		"Enter": StreamBeat
	})} </div> </div> </div> </div>`}${!Library && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate` <!-- THE SCENARIO'S OWN EVIDENCE -->${renderComponent($$result, "ExamplePanels", $$ExamplePanels, {
		"Panels": Panels,
		"Class": "mt-24"
	})} <!-- THE DIAGRAM --> ${Diagram && renderTemplate`<figure class="mt-24 border border-oxblood-dark bg-asphalt-panel p-4"> <div class="overflow-x-auto">${unescapeHTML(Diagram.Html)}</div> <figcaption class="mt-6 font-mono text-base font-black uppercase tracking-widest text-zinc-dust"> ${Diagram.Caption} </figcaption> </figure>`} <!-- THE CLOSING --> ${Note?.length ? renderTemplate`<div class="prose-flow mt-24 max-w-3xl"> ${Note.map((Sentence) => renderTemplate`<p class="font-body text-base leading-relaxed text-bone-newsprint">${unescapeHTML(Sentence)}</p>`)} </div>` : null} <!-- THE CITATION --> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": [Src] })} ` })}`}` })} </section>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ExampleCase.astro", void 0);
export { $$ExampleCase as t };
