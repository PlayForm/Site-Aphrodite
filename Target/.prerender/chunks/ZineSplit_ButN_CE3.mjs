import { n as createComponent, t as createAstro } from "./compiler_DE9Ou0YP.mjs";
import { _ as maybeRenderHead, g as renderTemplate, l as renderComponent } from "./server_CNuTCIdA.mjs";
import { t as $$ZineBox } from "./ZineBox_CmppvIAU.mjs";
import { n as $$ZineKicker } from "./Base_BfYuyvJ_.mjs";
import { t as $$ZineStream } from "./ZineStream_DlQ5np2Q.mjs";
import { t as $$ZinePreview } from "./ZinePreview_eeNcJEd9.mjs";
// Source/Component/ZineSplit.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineSplit = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineSplit;
	const { Raw, Preview, Hash, Label = "ONE LINE, ONE MARKER" } = Astro.props;
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
	return renderTemplate`${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Size": "lg",
		"Rotate": "-rotate-[1deg]"
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<div class="grid grid-cols-1 gap-6 lg:grid-cols-2"> <div> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "div",
		"Tone": "dust"
	}, { "default": ($$result) => renderTemplate`RAW STREAM // WHAT THE TERMINAL KEEPS` })} <div class="mt-2"> ${renderComponent($$result, "ZineStream", $$ZineStream, { "Lines": Lines })} </div> </div> <div> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "div",
		"Tone": "canary"
	}, { "default": ($$result) => renderTemplate`PREVIEW // WHAT THE MODEL READS` })} <div class="mt-2"> ${renderComponent($$result, "ZinePreview", $$ZinePreview, {
		"Label": Label,
		"Result": Preview,
		"Hash": Hash,
		"Color": "canary"
	})} </div> </div> </div> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineSplit.astro", void 0);
export { $$ZineSplit as t };
