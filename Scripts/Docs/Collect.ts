import { readdir } from "node:fs/promises";
import { join } from "node:path";

// Collects every markdown file under the root, sorted.
export default async (Root: string): Promise<string[]> => {
	const Files: string[] = [];

	const Walk = async (Folder: string): Promise<void> => {
		for (const Item of await readdir(Folder, { withFileTypes: true })) {
			const Path = join(Folder, Item.name);

			switch (true) {
				case Item.isDirectory():
					await Walk(Path);

					break;
				case Item.isFile() && Item.name.endsWith(".md"):
					Files.push(Path);

					break;
			}
		}
	};

	await Walk(Root);

	return Files.sort();
};
