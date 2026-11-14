// Prepare.ts - the site's generator: resolve `Module/Aphrodite`, then emit.
//
// The site no longer copies facts out of the monorepo by hand. Every fact it
// renders is generated from the `Module/Aphrodite` submodule, which IS the
// release line: the same tree `Aphrodite-Release` tracks and `PlayForm/Aphrodite`
// publishes. This step resolves that tree, checks it out when it is missing,
// refuses to generate from an unreachable or half-initialised checkout, and
// then writes the destinations its manifest names (`Scripts/Prepare/Manifest.ts`).
//
// Three things this step owns that the old content guard did not:
//
// - It INITIALISES THE NESTED SUBMODULES. `Module/Aphrodite` carries
//   `plugins/aphrodite` (Aphrodite-Hermes), `vendor/headroom` and `vendor/rtk`.
//   A shallow `--init` leaves `plugins/aphrodite/` empty, so `plugin.yaml` is
//   absent and every tool and hook row comes out empty - silently. The
//   `--recursive` flag is the fix, and the plugin.yaml assertion below is what
//   proves it ran.
// - It RE-RUNS on every build, so advancing the pin is the only way a fact
//   changes. There is no second copy to keep in step.
// - It NEVER WRITES into the module. The submodule is read-only for this
//   repository: read, generate, and stop.
//
// Run it directly (`pnpm run Prepare`) or through the build
// (`pnpm run prepublishOnly`).

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { Emit } from "./Prepare/Emit.ts";
import Manifest from "./Prepare/Manifest.ts";

/** The Site root: one level up from `Scripts/`. */
const Site = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/** The submodule the site generates from. */
const Module = resolve(Site, "Module", "Aphrodite");

/**
 * The builder has no SSH key, so the submodule is fetched over HTTPS even when
 * a local checkout recorded an SSH remote.
 */
const Url = "https://github.com/PlayForm/Aphrodite.git";

/**
 * The trees this generator cannot work without: the binary crate's manifest and
 * the docs root. A directory that holds both is a full checkout of the release
 * line, not an empty submodule directory and not a partial one.
 */
function HoldsTrees(Directory: string): boolean {
	return (
		existsSync(join(Directory, "crates", "aphrodite", "Cargo.toml")) &&
		existsSync(join(Directory, "docs", "README.md"))
	);
}

/**
 * The nested checkout the tool and hook rows read. `plugins/aphrodite` is a
 * submodule of the module, so this is the one file that proves the recursive
 * init ran rather than the shallow one.
 */
function HoldsNested(Directory: string): boolean {
	return existsSync(join(Directory, "plugins", "aphrodite", "plugin.yaml"));
}

/**
 * The tree to generate from: an explicit `APHRODITE_SOURCE_ROOT` for a
 * deliberate build against another checkout, otherwise the submodule. The
 * override is validated the same way the submodule is, so a typo names itself
 * instead of generating half a site.
 */
function Source(): string {
	const Override = process.env["APHRODITE_SOURCE_ROOT"];

	if (Override !== undefined && Override !== "") {
		const Resolved = resolve(Override);

		if (!HoldsTrees(Resolved)) {
			throw new Error(
				`[Prepare] APHRODITE_SOURCE_ROOT points at ${Resolved}, which holds neither crates/aphrodite/Cargo.toml nor docs/README.md. Point it at a full Aphrodite checkout, or unset it to use Module/Aphrodite.`,
			);
		}

		return Resolved;
	}

	return Module;
}

/**
 * Check the submodule out, recursively. `submodule sync` first, because a
 * checkout that recorded an SSH url would otherwise fail on a machine with no
 * key; then the update, with `--recursive` so the nested plugin and vendor
 * trees come with it.
 */
function Checkout(): void {
	console.warn("[Prepare] The module trees are missing; checking out Module/Aphrodite.");

	try {
		execFileSync("git", ["config", "submodule.Module/Aphrodite.url", Url], { stdio: "ignore" });
		execFileSync("git", ["submodule", "sync", "Module/Aphrodite"], { stdio: "ignore" });
		execFileSync("git", ["submodule", "update", "--init", "--recursive", "Module/Aphrodite"], {
			stdio: "inherit",
		});
	} catch (Cause) {
		throw new Error(
			`[Prepare] Checking out Module/Aphrodite failed. Run \`git submodule update --init --recursive Module/Aphrodite\` in ${Site}, or set APHRODITE_SOURCE_ROOT to a full Aphrodite checkout for a deliberate build against another tree. (${Cause instanceof Error ? Cause.message : String(Cause)})`,
		);
	}
}

/**
 * The remedy text every failure ends with. A stack trace tells a reader that
 * something went wrong; this tells them what to run.
 */
const Remedy =
	"Run `git submodule update --init --recursive Module/Aphrodite` in Site/, or set APHRODITE_SOURCE_ROOT to a full Aphrodite checkout for a deliberate build against another tree.";

function Prepare(): void {
	if (!HoldsTrees(Module) && (process.env["APHRODITE_SOURCE_ROOT"] ?? "") === "") {
		if (existsSync(resolve(Site, ".gitmodules"))) {
			Checkout();
		} else {
			throw new Error(
				`[Prepare] Module/Aphrodite is not a checkout and there is no .gitmodules to initialise it from. ${Remedy}`,
			);
		}
	}

	const Root = Source();

	if (!HoldsTrees(Root)) {
		throw new Error(`[Prepare] ${Root} is not a full Aphrodite checkout. ${Remedy}`);
	}

	if (!HoldsNested(Root)) {
		throw new Error(
			`[Prepare] ${join(Root, "plugins", "aphrodite", "plugin.yaml")} is absent: the module is checked out but its nested submodules are not. Every tool and hook row would come out empty. ${Remedy}`,
		);
	}

	const { Written, Held, Orphans } = Emit(Root, Site, Manifest);

	const Pin = Written.includes("Source/Generated/Module.json")
		? (JSON.parse(
				readFileSync(resolve(Site, "Source/Generated/Module.json"), "utf8"),
			) as { Module?: { Commit?: string | null; Branch?: string | null } }).Module
		: undefined;

	console.log(
		`[Prepare] ${Written.length} file(s) generated from Module/Aphrodite${Pin?.Commit ? ` at ${String(Pin.Commit).slice(0, 9)} (${Pin.Branch})` : ""}.`,
	);

	for (const Entry of Held) {
		console.log(`[Prepare] held  ${Entry.Destination} <- ${Entry.Source} (${Entry.Detail})`);
	}

	// Reported, never removed: deleting a destination would be the one way this
	// generator could reduce the site. An orphan is a manifest row that was
	// renamed or dropped, and a human decides which.
	for (const Entry of Orphans) {
		console.warn(`[Prepare] orphan ${Entry} - no manifest row writes it; left in place.`);
	}
}

// Every failure this generator can raise is environmental - a missing
// checkout, a half-initialised submodule, a stale pin - so the message is the
// whole report. A stack trace would only bury the command that fixes it.
try {
	Prepare();
} catch (Cause) {
	console.error(Cause instanceof Error ? Cause.message : String(Cause));
	process.exit(1);
}
