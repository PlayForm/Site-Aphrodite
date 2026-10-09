// Turns a docs source path (relative to the docs root, without extension,
// forward slashes) into its site route: "README" -> "", "install/README" ->
// "install", "architecture/01-startup" -> "architecture/01-startup".
export default (Path: string): string => {
	const Segments = Path.split("/");
	const Leaf = Segments.pop() ?? "";

	switch (Leaf === "README" || Leaf === "index") {
		case false:
			Segments.push(Leaf);
	}

	return Segments.join("/");
};
