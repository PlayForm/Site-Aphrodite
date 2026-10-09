import { readFile, rm } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import Collect from "./Collect.ts";
import Links from "./Links.ts";
import Meta from "./Meta.ts";
import Route from "./Route.ts";
import Write from "./Write.ts";

// The site root (two levels up from Scripts/Docs/).
const Root = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");

// The documentation source in the Aphrodite repository, next to the Site.
const Source = resolve(Root, "..", "docs");

// The generated content collection the /docs routes build from.
const Target = resolve(Root, "Source", "Content", "Docs");

export default async (): Promise<void> => {
	await rm(Target, { force: true, recursive: true });

	const Files = await Collect(Source);

	const Routes = new Map<string, string>();

	for (const File of Files) {
		const Path = relative(Source, File).replaceAll("\\", "/").slice(0, -3);

		Routes.set(Path, Route(Path));

		switch (Path === "README" || Path.endsWith("/README")) {
			case true:
				Routes.set(Path.replace(/\/README$/, ""), Route(Path));
		}
	}

	const Stale: string[] = [];

	for (const File of Files) {
		const Path = relative(Source, File).replaceAll("\\", "/").slice(0, -3);
		const Content = await readFile(File, "utf8");

		const { Title, Section } = Meta(Content, Path);

		const Linked = Links(
			Content,
			dirname(Path),
			Routes,
			(Link) => Stale.push(`${Path}: ${Link}`),
		);

		const Segments = Route(Path).split("/").filter(Boolean);
		const Leaf = Path === "README" || Path.endsWith("/README") ? "index" : (Segments.pop() ?? "index");

		await Write(
			join(Target, ...Segments, `${Leaf}.md`),
			[
				"---",
				`title: ${JSON.stringify(Title)}`,
				`section: ${JSON.stringify(Section)}`,
				"---",
				"",
				Linked.trimEnd(),
				"",
			].join("\n"),
		);
	}

	console.log(`Docs: generated ${Files.length} pages into Source/Content/Docs`);

	switch (Stale.length > 0) {
		case true:
			console.warn(`Docs: ${Stale.length} unresolvable links left as-is:`);

			for (const Link of Stale) {
				console.warn(`Docs:   ${Link}`);
			}

			break;
	}
};
