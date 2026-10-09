// shot.cjs - the screenshot verification of the built pages.
//
// Captures full-page screenshots of the built site plus close-ups of every
// `[data-diagram]` block, so a diagram's on-page rendering can be verified
// against the committed SVG by eye. Run it against a serving build:
//
//     pnpm exec astro preview &   # serves Target/ (default http://localhost:4321)
//     node Scripts/shot.cjs
//
// The target base URL and the output directory come from SHOT_BASE and
// SHOT_OUT; the page list below is the site's route set. Puppeteer drives
// the system's Brave install by default (APHRODITE_BROWSER overrides the
// executable path), matching the diagram renderer.

const puppeteer = require("puppeteer");

const Base = process.env["SHOT_BASE"] ?? "http://localhost:4321";
const Out = process.env["SHOT_OUT"] ?? "/tmp/aphrodite-shots";
const BrowserPath =
	process.env["APHRODITE_BROWSER"] ??
	"/Applications/Brave Browser.app/Contents/MacOS/Brave Browser";

const Pages = [
	"",
	"docs/",
	"hooks/",
	"plugin/",
	"setup/",
	"tools/",
	"versions/",
	"workbench/",
	"case-study/",
];

(async () => {
	const fs = require("fs");
	fs.mkdirSync(Out, { recursive: true });
	const browser = await puppeteer.launch({
		headless: true,
		executablePath: BrowserPath,
		args: ["--no-sandbox", "--disable-gpu"],
	});
	const page = await browser.newPage();
	await page.setViewport({ width: 1280, height: 900 });
	let shots = 0;
	for (const Route of Pages) {
		const Url = `${Base}/${Route}`;
		try {
			await page.goto(Url, { waitUntil: "networkidle2", timeout: 60000 });
		} catch (error) {
			console.error(`FAILED ${Url}: ${error.message}`);
			continue;
		}
		const name = Route.replace(/\/$/, "") || "index";
		await page.screenshot({ path: `${Out}/${name || "index"}.png`, fullPage: true });
		shots += 1;
		const diagrams = await page.$$eval(
			"[data-diagram]",
			(nodes) => nodes.map((node) => node.getAttribute("data-diagram")),
		);
		for (const id of diagrams) {
			const el = await page.$(`[data-diagram="${id}"]`);
			if (!el) continue;
			await el.scrollIntoView();
			await new Promise((resolve) => setTimeout(resolve, 500));
			await el.screenshot({ path: `${Out}/${name}-${id}.png` });
			shots += 1;
		}
		console.log(`shot ${Url} (${diagrams.length} diagram blocks)`);
	}
	await browser.close();
	console.log(`${shots} screenshot(s) in ${Out}`);
})();
