import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

// Creates the parent folder and writes UTF-8 file content.
export default async (Path: string, Content: string): Promise<void> => {
	await mkdir(dirname(Path), { recursive: true });

	await writeFile(Path, Content, "utf8");
};
