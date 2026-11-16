import { _ as renderTemplate, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro, h as renderScript } from "./Base_Bs2-mKm9.mjs";
// Source/Component/ZineStatBar.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineStatBar = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineStatBar;
	const { Label, Ratio, Percent, Color = "teal", Fill = "static", Scale = "metric", Unit, Qualifier, Variant = "bar", Count = false } = Astro.props;
	const Palette = {
		teal: "bg-weathered-teal",
		raw: "bg-raw-blood",
		canary: "bg-stamped-canary"
	}[Color];
	const Text = {
		teal: "!text-weathered-teal",
		raw: "!text-bone-white",
		canary: "!text-stamped-canary"
	}[Color];
	const MetricScale = Scale === "compact" ? "metric metric--compact" : "metric";
	const Pod = {
		raw: {
			Ground: "bg-raw-blood",
			Figure: "!text-bone-white",
			Label: "text-bone-white",
			Qualifier: "text-bone-newsprint"
		},
		teal: {
			Ground: "bg-carbon-void",
			Figure: "!text-weathered-teal",
			Label: "text-bone-white",
			Qualifier: "text-zinc-dust"
		},
		canary: {
			Ground: "bg-stamped-canary",
			Figure: "!text-soot-black",
			Label: "text-soot-black",
			Qualifier: "text-soot-black"
		}
	}[Color];
	const TrailingUnit = /^(.*[0-9])\s*([^\s0-9]{1,3})$/;
	const Trimmed = Ratio.trim();
	const Split = Trimmed.match(TrailingUnit);
	const Splittable = Split !== null && Split[1].length <= 12;
	const Figure = Unit === void 0 && Splittable ? Split[1] : Trimmed;
	const UnitText = Unit ?? (Splittable ? Split[2] : "");
	const Width = Math.max(0, Math.min(100, Percent ?? 0));
	return renderTemplate`${Variant === "pod" ? renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`flex h-full flex-col gap-2 border-2 border-black px-4 py-3 ${Pod.Ground}`, "class")} data-astro-cid-lpyltiad>  <p${addAttribute(`type-meta !font-black uppercase tracking-widest ${Pod.Label}`, "class")} data-astro-cid-lpyltiad>${Label}</p>  <p${addAttribute(`${MetricScale} ${Pod.Figure}`, "class")} data-astro-cid-lpyltiad> ${Count ? renderTemplate`<span${addAttribute(Figure, "data-count")} data-astro-cid-lpyltiad>${Figure}</span>` : Figure} ${UnitText === "" ? null : renderTemplate`<span${addAttribute(`metric__unit ${Pod.Figure}`, "class")} data-astro-cid-lpyltiad>${UnitText}</span>`} </p>  ${Qualifier === void 0 ? null : renderTemplate`<p${addAttribute(`text-base leading-relaxed ${Pod.Qualifier}`, "class")} data-astro-cid-lpyltiad>${Qualifier}</p>`} </div>` : renderTemplate`<div data-astro-cid-lpyltiad>  <p class="type-meta !font-black uppercase text-bone-white" data-astro-cid-lpyltiad>${Label}</p>  <div class="mt-2" data-astro-cid-lpyltiad> <p${addAttribute(`${MetricScale} ${Text}`, "class")} data-astro-cid-lpyltiad> ${Count ? renderTemplate`<span${addAttribute(Figure, "data-count")} data-astro-cid-lpyltiad>${Figure}</span>` : Figure} ${UnitText === "" ? null : renderTemplate`<span class="metric__unit" data-astro-cid-lpyltiad>${UnitText}</span>`} </p> </div> ${Qualifier === void 0 ? null : renderTemplate`<p class="mt-2 type-meta uppercase text-zinc-dust" data-astro-cid-lpyltiad>${Qualifier}</p>`} <div class="mt-3 flex h-4 w-full overflow-hidden well" data-astro-cid-lpyltiad> ${Fill === "scroll" ? renderTemplate`<div${addAttribute(`zine-stat-fill h-full ${Palette}`, "class")}${addAttribute(`width: ${Width}%;`, "style")}${addAttribute(Width, "data-stat-fill")} aria-hidden="true" data-astro-cid-lpyltiad></div>` : renderTemplate`<div${addAttribute(`h-full ${Palette}`, "class")}${addAttribute(`width: ${Width}%;`, "style")} data-astro-cid-lpyltiad></div>`} </div> </div>`}${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineStatBar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineStatBar.astro", void 0);
export { $$ZineStatBar as t };
