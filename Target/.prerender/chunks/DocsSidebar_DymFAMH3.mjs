import { E as unescapeHTML, S as createHeadAndContent, _ as renderTemplate, i as renderUniqueStylesheet, n as spreadAttributes, r as renderScriptElement, u as renderComponent, v as maybeRenderHead, w as addAttribute, z as generateCspDigest } from "./server_DdG-dV1Z.mjs";
import { B as RenderUndefinedEntryError, K as UnknownContentCollectionError, X as AstroError } from "./errors-data_XstbcoNP.mjs";
import { c as isRemotePath, d as removeBase, u as prependForwardSlash } from "./path_jvl2hruy.mjs";
import { _ as createComponent, g as createAstro } from "./Base_Bs2-mKm9.mjs";
import { t as createConsoleLogger } from "./console_ClfCadOL.mjs";
import { escape } from "html-escaper";
import * as devalue from "devalue";
import * as z from "zod/v4";
// node_modules/@astrojs/runtime/dist/internal/core/render-scope/scope.js
/**
* The channel is a write-once immutable *conduit* shared so every compiled copy
* of this module resolves the same AsyncLocalStorage instance (the prerender
* runtime is bundled, so the build orchestrator and the bundled runtime hold
* different module instances of this file); all mutable per-render state lives
* in stores reachable only through async execution context. Never installed in
* dev or production SSR runtimes. It holds no state, so it stays installed across builds.
*/
var SCOPE_KEY = Symbol.for("astro:render-scope");
/** The installed render scope, or `undefined` when none was installed. */
function getInstalledRenderScope() {
	return globalThis[SCOPE_KEY];
}
/** The current render's collectors store, or `undefined` when not collecting. */
function getRenderCollectors() {
	return getInstalledRenderScope()?.getStore();
}
// node_modules/@astrojs/runtime/dist/internal/core/render-scope/record.js
/**
* Records that a content entry was rendered, keyed by its root-relative
* `filePath`. No-op outside of a collecting render (dev, production SSR,
* module top-level).
*/
function recordContentEntryRender(filePath) {
	if (!filePath) return;
	getRenderCollectors()?.contentEntries?.add(filePath);
}
function isCollectingStaticImages() {
	return getRenderCollectors()?.staticImages !== void 0;
}
/** Keeps repeats; `collectPrerenderMetadata()` dedupes them. */
function recordStaticImage(image) {
	getRenderCollectors()?.staticImages?.push(image);
}
// \0virtual:astro:logger
var level = "info";
// node_modules/astro/dist/assets/consts.js
var VALID_INPUT_FORMATS = [
	"jpeg",
	"jpg",
	"png",
	"apng",
	"tiff",
	"webp",
	"gif",
	"svg",
	"avif"
];
/**
* Valid formats that our base services support.
* Certain formats can be imported (namely SVGs) but will not be processed.
*/
var VALID_SUPPORTED_FORMATS = [
	"jpeg",
	"jpg",
	"png",
	"tiff",
	"webp",
	"gif",
	"svg",
	"avif"
];
var DEFAULT_OUTPUT_FORMAT = "webp";
var DEFAULT_HASH_PROPS = [
	"src",
	"width",
	"height",
	"format",
	"quality",
	"fit",
	"position",
	"background"
];
// Source/Component/Related.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$Related = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Related;
	const { Links = [], Title = "NEXT STEPS" } = Astro.props;
	const Entries = Links.filter(({ Href, Label }) => Boolean(Href) && Boolean(Label));
	return renderTemplate`${Entries.length > 0 && renderTemplate`${maybeRenderHead($$result)}<nav aria-label="Next steps" class="related"> <div class="related__head"> <p class="related__label">${Title}</p> <p class="related__label"> ${Entries.length} ${Entries.length === 1 ? "DESTINATION" : "DESTINATIONS"} </p> </div> <ul class="related__list"> ${Entries.map((Link, Position) => renderTemplate`<li class="related__row"> <span class="related__ordinal" aria-hidden="true"> ${String(Position + 1).padStart(2, "0")} </span> <div class="related__body"> <a class="related__link"${addAttribute(Link.Href, "href")}> ${Link.Label} </a> ${Link.Reason && renderTemplate`<p class="related__reason">${Link.Reason}</p>`} </div> </li>`)} </ul> </nav>`}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/Related.astro", void 0);
// node_modules/astro/dist/assets/runtime.js
function createSvgComponent({ meta, attributes, children, styles }) {
	const hasStyles = styles.length > 0;
	const Component = createComponent({
		async factory(result, props) {
			const normalizedProps = normalizeProps(attributes, props);
			if (hasStyles && result.cspDestination) for (const style of styles) {
				const hash = await generateCspDigest(style, result.cspAlgorithm);
				result._metadata.extraStyleHashes.push(hash);
			}
			return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
		},
		propagation: hasStyles ? "self" : "none"
	});
	Object.defineProperty(Component, "toJSON", {
		value: () => meta,
		enumerable: false
	});
	return Object.assign(Component, meta);
}
/**
* Some attributes required for `image/svg+xml` are irrelevant when inlined in a `text/html` document. We can save a few bytes by dropping them.
*/
var ATTRS_TO_DROP = [
	"xmlns",
	"xmlns:xlink",
	"version"
];
var DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
	for (const attr of ATTRS_TO_DROP) delete attributes[attr];
	return attributes;
}
function normalizeProps(attributes, props) {
	return dropAttributes({
		...DEFAULT_ATTRS,
		...attributes,
		...props
	});
}
// node_modules/astro/dist/content/consts.js
var CONTENT_IMAGE_FLAG = "astroContentImageFlag";
var IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";
// node_modules/astro/dist/assets/utils/resolveImports.js
/**
* Resolves an image src from a content file (such as markdown) to a module ID or import that can be resolved by Vite.
*
* @param imageSrc The src attribute of an image tag
* @param filePath The path to the file that contains the image relative to the site root
* @returns A module id of the image that can be resolved by Vite, or undefined if it is not a local image
*/
function imageSrcToImportId(imageSrc, filePath) {
	imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
	if (isRemotePath(imageSrc)) return;
	const ext = imageSrc.split(".").at(-1)?.toLowerCase();
	if (!ext || !VALID_INPUT_FORMATS.includes(ext)) return;
	const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
	if (filePath) params.set("importer", filePath);
	return `${imageSrc}?${params.toString()}`;
}
// node_modules/astro/dist/content/data-store-source.js
/**
* A {@link DataStoreSource} backed by an in-memory {@link ImmutableDataStore}.
* All queries resolve synchronously; the async signatures exist to satisfy the
* {@link DataStoreSource} contract.
*/
var InMemorySource = class {
	#store;
	constructor(store) {
		this.#store = store;
	}
	hasCollection(collection) {
		return this.#store.hasCollection(collection);
	}
	get(collection, key) {
		return this.#store.get(collection, key);
	}
	entries(collection) {
		return this.#store.entries(collection);
	}
	values(collection) {
		return this.#store.values(collection);
	}
	keys(collection) {
		return this.#store.keys(collection);
	}
	has(collection, key) {
		return this.#store.has(collection, key);
	}
	collections() {
		return this.#store.collections();
	}
};
// node_modules/astro/dist/content/data-store.js
/**
* Rebuilds a collection from ordered parts containing newline-delimited
* `devalue.stringify([id, entry])` records.
*/
var ChunkedCollectionParser = class {
	#entries = /* @__PURE__ */ new Map();
	#remainder = "";
	add(part) {
		const records = (this.#remainder + part).split("\n");
		this.#remainder = records.pop();
		for (const record of records) {
			const parsed = devalue.parse(record);
			if (!Array.isArray(parsed) || parsed.length !== 2 || typeof parsed[0] !== "string") throw new Error("Invalid chunked data store entry");
			this.#entries.set(parsed[0], parsed[1]);
		}
	}
	finish() {
		if (this.#remainder) throw new Error("Invalid chunked data store entry");
		return this.#entries;
	}
};
/**
* A read-only data store for content collections. This is used to retrieve data from the content layer at runtime.
* To add or modify data, use {@link MutableDataStore} instead.
*/
var ImmutableDataStore = class ImmutableDataStore {
	_collections = /* @__PURE__ */ new Map();
	constructor() {
		this._collections = /* @__PURE__ */ new Map();
	}
	get(collectionName, key) {
		return this._collections.get(collectionName)?.get(String(key));
	}
	entries(collectionName) {
		return [...(this._collections.get(collectionName) ?? /* @__PURE__ */ new Map()).entries()];
	}
	values(collectionName) {
		return [...(this._collections.get(collectionName) ?? /* @__PURE__ */ new Map()).values()];
	}
	keys(collectionName) {
		return [...(this._collections.get(collectionName) ?? /* @__PURE__ */ new Map()).keys()];
	}
	has(collectionName, key) {
		const collection = this._collections.get(collectionName);
		if (collection) return collection.has(String(key));
		return false;
	}
	hasCollection(collectionName) {
		return this._collections.has(collectionName);
	}
	collections() {
		return this._collections;
	}
	/**
	* Rebuilds a collections map from a chunked-store manifest whose part file
	* names have already been swapped for their contents.
	*
	* Each collection maps to a list of parts. A part is either a raw string
	* (when the store is loaded from disk) or an ESM namespace from a virtual
	* chunk import (`{ default: string }`, when emitted at runtime). Each part
	* contains independently serialized entry records. This is the inverse of
	* {@link import('./data-store-writer.js').ChunkedWriter} and stays free of
	* Node built-ins so it can run at runtime.
	*/
	static manifestToMap(manifest) {
		const collections = /* @__PURE__ */ new Map();
		for (const [collectionName, parts] of Object.entries(manifest)) {
			const parser = new ChunkedCollectionParser();
			for (const part of parts) parser.add(typeof part === "string" ? part : part.default);
			collections.set(collectionName, parser.finish());
		}
		return collections;
	}
	/**
	* Attempts to load a DataStore from the virtual module.
	* This only works in Vite.
	*/
	static async fromModule() {
		try {
			const data = await import("./_astro_data-layer-content_DLAC6_GI.mjs");
			if (data.default instanceof Map) return ImmutableDataStore.fromMap(data.default);
			if (Array.isArray(data.default)) {
				const map = devalue.unflatten(data.default);
				return ImmutableDataStore.fromMap(map);
			}
			const map = ImmutableDataStore.manifestToMap(data.default);
			return ImmutableDataStore.fromMap(map);
		} catch {}
		return new ImmutableDataStore();
	}
	static async fromMap(data) {
		const store = new ImmutableDataStore();
		store._collections = data;
		return store;
	}
};
function dataStoreSingleton() {
	let instance = void 0;
	return {
		get: async () => {
			if (!instance) instance = ImmutableDataStore.fromModule().then((store) => new InMemorySource(store));
			return instance;
		},
		set: (store) => {
			instance = new InMemorySource(store);
		}
	};
}
/** @internal */
var globalDataStore = dataStoreSingleton();
// node_modules/astro/dist/content/loaders/errors.js
function formatZodError(error) {
	return error.issues.map((issue) => `  **${issue.path.join(".")}**: ${issue.message}`);
}
var LiveCollectionError = class LiveCollectionError extends Error {
	collection;
	message;
	cause;
	constructor(collection, message, cause) {
		super(message);
		this.collection = collection;
		this.message = message;
		this.cause = cause;
		this.name = "LiveCollectionError";
		if (cause?.stack) this.stack = cause.stack;
	}
	static is(error) {
		return error instanceof LiveCollectionError;
	}
};
var LiveEntryNotFoundError = class extends LiveCollectionError {
	constructor(collection, entryFilter) {
		super(collection, `Entry ${collection} → ${typeof entryFilter === "string" ? entryFilter : JSON.stringify(entryFilter)} was not found.`);
		this.name = "LiveEntryNotFoundError";
	}
	static is(error) {
		return error?.name === "LiveEntryNotFoundError";
	}
};
var LiveCollectionValidationError = class extends LiveCollectionError {
	constructor(collection, entryId, error) {
		super(collection, [
			`**${collection} → ${entryId}** data does not match the collection schema.\n`,
			...formatZodError(error),
			""
		].join("\n"));
		this.name = "LiveCollectionValidationError";
	}
	static is(error) {
		return error?.name === "LiveCollectionValidationError";
	}
};
var LiveCollectionCacheHintError = class extends LiveCollectionError {
	constructor(collection, entryId, error) {
		super(collection, [
			`**${String(collection)}${entryId ? ` → ${String(entryId)}` : ""}** returned an invalid cache hint.\n`,
			...formatZodError(error),
			""
		].join("\n"));
		this.name = "LiveCollectionCacheHintError";
	}
	static is(error) {
		return error?.name === "LiveCollectionCacheHintError";
	}
};
// node_modules/astro/dist/content/runtime.js
var cacheHintSchema = z.object({
	tags: z.array(z.string()).optional(),
	lastModified: z.date().optional()
});
async function parseLiveEntry(entry, schema, collection) {
	try {
		const parsed = await z.safeParseAsync(schema, entry.data);
		if (!parsed.success) return { error: new LiveCollectionValidationError(collection, entry.id, parsed.error) };
		if (entry.cacheHint) {
			const cacheHint = cacheHintSchema.safeParse(entry.cacheHint);
			if (!cacheHint.success) return { error: new LiveCollectionCacheHintError(collection, entry.id, cacheHint.error) };
			entry.cacheHint = cacheHint.data;
		}
		return { entry: {
			...entry,
			data: parsed.data
		} };
	} catch (error) {
		return { error: new LiveCollectionError(collection, `Unexpected error parsing entry ${entry.id} in collection ${collection}`, error) };
	}
}
function createGetCollection({ liveCollections, logger }) {
	return async function getCollection(collection, filter) {
		if (collection in liveCollections) throw new AstroError({
			...UnknownContentCollectionError,
			message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
		});
		const hasFilter = typeof filter === "function";
		const store = await globalDataStore.get();
		if (await store.hasCollection(collection)) {
			const { default: imageAssetMap } = await import("./content-assets_CLeMUEVR.mjs");
			const result = [];
			for (const rawEntry of await store.values(collection)) {
				const data = resolveEntryData(rawEntry, imageAssetMap);
				let entry = {
					...rawEntry,
					data,
					collection
				};
				if (hasFilter && !filter(entry)) continue;
				result.push(entry);
			}
			return result;
		} else {
			logger.warn("content", `The collection ${JSON.stringify(collection)} does not exist or is empty. Please check your content config file for errors.`);
			return [];
		}
	};
}
function createGetEntry({ liveCollections, logger }) {
	return async function getEntry(collectionOrLookupObject, lookup) {
		let collection, lookupId;
		if (typeof collectionOrLookupObject === "string") {
			collection = collectionOrLookupObject;
			if (!lookup) throw new AstroError({
				...UnknownContentCollectionError,
				message: "`getEntry()` requires an entry identifier as the second argument."
			});
			lookupId = lookup;
		} else {
			collection = collectionOrLookupObject.collection;
			lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
		}
		if (collection in liveCollections) throw new AstroError({
			...UnknownContentCollectionError,
			message: `Collection "${collection}" is a live collection. Use getLiveEntry() instead of getEntry().`
		});
		if (typeof lookupId === "object") throw new AstroError({
			...UnknownContentCollectionError,
			message: `The entry identifier must be a string. Received object.`
		});
		const store = await globalDataStore.get();
		if (await store.hasCollection(collection)) {
			const entry = await store.get(collection, lookupId);
			if (!entry) {
				logger.warn("content", `Entry ${collection} → ${lookupId} was not found.`);
				return;
			}
			const { default: imageAssetMap } = await import("./content-assets_CLeMUEVR.mjs");
			const data = resolveEntryData(entry, imageAssetMap);
			const result = {
				...entry,
				data,
				collection
			};
			warnForPropertyAccess(logger, result.data, "slug", `[content] Attempted to access deprecated property on "${collection}" entry.\nThe "slug" property is no longer automatically added to entries. Please use the "id" property instead.`);
			warnForPropertyAccess(logger, result, "render", `[content] Invalid attempt to access "render()" method on "${collection}" entry.\nTo render an entry, use "render(entry)" from "astro:content".`);
			return result;
		}
	};
}
function warnForPropertyAccess(logger, entry, prop, message) {
	if (!(prop in entry)) {
		let _value = void 0;
		Object.defineProperty(entry, prop, {
			get() {
				if (_value === void 0) logger.error("content", message);
				return _value;
			},
			set(v) {
				_value = v;
			},
			enumerable: false
		});
	}
}
function createGetLiveCollection({ liveCollections }) {
	return async function getLiveCollection(collection, filter) {
		if (!(collection in liveCollections)) return { error: new LiveCollectionError(collection, `Collection "${collection}" is not a live collection. Use getCollection() instead of getLiveCollection() to load regular content collections.`) };
		try {
			const context = {
				filter,
				collection
			};
			const response = await liveCollections[collection].loader?.loadCollection?.(context);
			if (response && "error" in response) return { error: response.error };
			const { schema } = liveCollections[collection];
			let processedEntries = response.entries;
			if (schema) {
				const entryResults = await Promise.all(response.entries.map((entry) => parseLiveEntry(entry, schema, collection)));
				for (const result of entryResults) if (result.error) return { error: result.error };
				processedEntries = entryResults.map((result) => result.entry);
			}
			let cacheHint = response.cacheHint;
			if (cacheHint) {
				const cacheHintResult = cacheHintSchema.safeParse(cacheHint);
				if (!cacheHintResult.success) return { error: new LiveCollectionCacheHintError(collection, void 0, cacheHintResult.error) };
				cacheHint = cacheHintResult.data;
			}
			if (processedEntries.length > 0) {
				const entryTags = /* @__PURE__ */ new Set();
				let latestModified;
				for (const entry of processedEntries) if (entry.cacheHint) {
					if (entry.cacheHint.tags) entry.cacheHint.tags.forEach((tag) => entryTags.add(tag));
					if (entry.cacheHint.lastModified instanceof Date) {
						if (latestModified === void 0 || entry.cacheHint.lastModified > latestModified) latestModified = entry.cacheHint.lastModified;
					}
				}
				if (entryTags.size > 0 || latestModified || cacheHint) {
					const mergedCacheHint = {};
					if (cacheHint?.tags || entryTags.size > 0) mergedCacheHint.tags = [.../* @__PURE__ */ new Set([...cacheHint?.tags || [], ...entryTags])];
					if (cacheHint?.lastModified && latestModified) mergedCacheHint.lastModified = cacheHint.lastModified > latestModified ? cacheHint.lastModified : latestModified;
					else if (cacheHint?.lastModified || latestModified) mergedCacheHint.lastModified = cacheHint?.lastModified ?? latestModified;
					cacheHint = mergedCacheHint;
				}
			}
			return {
				entries: processedEntries,
				cacheHint
			};
		} catch (error) {
			return { error: new LiveCollectionError(collection, `Unexpected error loading collection ${collection}${error instanceof Error ? `: ${error.message}` : ""}`, error) };
		}
	};
}
function createGetLiveEntry({ liveCollections }) {
	return async function getLiveEntry(collection, lookup) {
		if (!(collection in liveCollections)) return { error: new LiveCollectionError(collection, `Collection "${collection}" is not a live collection. Use getCollection() instead of getLiveEntry() to load regular content collections.`) };
		try {
			const lookupObject = {
				filter: typeof lookup === "string" ? { id: lookup } : lookup,
				collection
			};
			let entry = await liveCollections[collection].loader?.loadEntry?.(lookupObject);
			if (entry && "error" in entry) return { error: entry.error };
			if (!entry) return { error: new LiveEntryNotFoundError(collection, lookup) };
			const { schema } = liveCollections[collection];
			if (schema) {
				const result = await parseLiveEntry(entry, schema, collection);
				if (result.error) return { error: result.error };
				entry = result.entry;
			}
			return {
				entry,
				cacheHint: entry.cacheHint
			};
		} catch (error) {
			return { error: new LiveCollectionError(collection, `Unexpected error loading entry ${collection} → ${typeof lookup === "string" ? lookup : JSON.stringify(lookup)}`, error) };
		}
	};
}
var CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
	const { default: imageAssetMap } = await import("./content-assets_CLeMUEVR.mjs");
	const imageObjects = /* @__PURE__ */ new Map();
	const { getImage } = await import("./_virtual_astro_get-image_CRWceiwf.mjs");
	for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) try {
		const decodedImagePath = JSON.parse(imagePath.replace(/&(?:#x22|quot);/g, "\"").replace(/&(?:#x27|apos);/g, "'").replace(/&(?:amp|#x26|#38);/g, "&"));
		let image;
		if (URL.canParse(decodedImagePath.src)) image = await getImage(decodedImagePath);
		else {
			const id = imageSrcToImportId(decodedImagePath.src, fileName);
			const imported = imageAssetMap.get(id);
			if (!id || imageObjects.has(id) || !imported) continue;
			image = await getImage({
				...decodedImagePath,
				src: imported
			});
		}
		imageObjects.set(imagePath, image);
	} catch {
		throw new Error(`Failed to parse image reference: ${imagePath}`);
	}
	return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
		const image = imageObjects.get(imagePath);
		if (!image) return full;
		const { index, ...attributes } = image.attributes;
		return Object.entries({
			...attributes,
			src: image.src,
			...image.srcSet.values.length > 0 ? { srcset: image.srcSet.attribute } : {}
		}).filter(([, value]) => value != null).map(([key, value]) => value === "" ? `${key}=""` : `${key}="${escape(String(value))}"`).join(" ");
	});
}
/**
* Resolves the image src at `path` within `data` to its `ImageMetadata` (or a
* renderable SVG component). Returns the resolved value, or `undefined` when the
* image is not in the asset map and the plain src already stored in `data` should
* be kept.
*/
function resolveImageAtPath(src, fileName, imageAssetMap) {
	const id = imageSrcToImportId(src, fileName);
	if (!id) return;
	const imported = imageAssetMap?.get(id);
	if (!imported) return;
	if (imported.__svgData) {
		const { __svgData: svgData, ...meta } = imported;
		return createSvgComponent({
			meta,
			...svgData
		});
	}
	return imported;
}
/**
* Writes `value` at `path` within `target`, copying only the containers along
* that path so the shared store entry is never mutated. Sibling values and every
* container off the path are shared by reference, so values that `structuredClone`
* cannot handle (e.g. `Temporal` objects or class instances from Zod transforms)
* are never touched.
*/
function setAtPathCopying(target, path, value) {
	if (path.length === 0) return target;
	const [key, ...rest] = path;
	const copy = Array.isArray(target) ? target.slice() : { ...target };
	copy[key] = rest.length === 0 ? value : setAtPathCopying(copy[key], rest, value);
	return copy;
}
function updateImageReferencesInData(data, fileName, imageAssetMap, imageImports) {
	if (!imageImports?.length) return data;
	let result = data;
	for (const path of imageImports) {
		let src = result;
		for (const key of path) src = src?.[key];
		if (typeof src !== "string") continue;
		const resolved = resolveImageAtPath(src, fileName, imageAssetMap);
		if (resolved !== void 0) result = setAtPathCopying(result, path, resolved);
	}
	return result;
}
function resolveEntryData(entry, imageAssetMap) {
	return updateImageReferencesInData(entry.data, entry.filePath, imageAssetMap, entry.imageImports);
}
function createRenderEntry({ logger }) {
	return async function renderEntry(entry) {
		if (!entry) throw new AstroError(RenderUndefinedEntryError);
		recordContentEntryRender(entry.filePath);
		if (entry.deferredRender) try {
			const { default: contentModules } = await import("./content-modules_DYcV8QGo.mjs");
			const renderEntryImport = contentModules.get(entry.filePath);
			return render$1({
				collection: "",
				id: entry.id,
				renderEntryImport
			});
		} catch (e) {
			logger.error("content", `${e}`);
		}
		const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
		return {
			Content: createComponent(() => renderTemplate`${unescapeHTML(html)}`),
			headings: entry?.rendered?.metadata?.headings ?? [],
			remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
		};
	};
}
async function render$1({ collection, id, renderEntryImport }) {
	const UnexpectedRenderError = new AstroError({
		...UnknownContentCollectionError,
		message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
	});
	if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
	const baseMod = await renderEntryImport();
	if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
	const { default: defaultMod } = baseMod;
	if (isPropagatedAssetsModule(defaultMod)) {
		const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
		if (typeof getMod !== "function") throw UnexpectedRenderError;
		const propagationMod = await getMod();
		if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
		return {
			Content: createComponent({
				factory(result, baseProps, slots) {
					let styles = "", links = "", scripts = "";
					if (Array.isArray(collectedStyles)) styles = collectedStyles.map((style) => {
						const content = typeof style === "string" ? style : style.content;
						const viteDevId = typeof style === "object" && style.id ? style.id : void 0;
						return renderUniqueStylesheet(result, {
							type: "inline",
							content,
							viteDevId
						});
					}).join("");
					if (Array.isArray(collectedLinks)) links = collectedLinks.map((link) => {
						return renderUniqueStylesheet(result, {
							type: "external",
							src: isRemotePath(link) ? link : prependForwardSlash(link)
						});
					}).join("");
					if (Array.isArray(collectedScripts)) scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
					let props = baseProps;
					if (id.endsWith("mdx")) props = {
						components: propagationMod.components ?? {},
						...baseProps
					};
					return createHeadAndContent(unescapeHTML(styles + links + scripts), renderTemplate`${renderComponent(result, "Content", propagationMod.Content, props, slots)}`);
				},
				propagation: "self"
			}),
			headings: propagationMod.getHeadings?.() ?? [],
			remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
		};
	} else if (baseMod.Content && typeof baseMod.Content === "function") return {
		Content: baseMod.Content,
		headings: baseMod.getHeadings?.() ?? [],
		remarkPluginFrontmatter: baseMod.frontmatter ?? {}
	};
	else throw UnexpectedRenderError;
}
function isPropagatedAssetsModule(module) {
	return typeof module === "object" && module != null && "__astroPropagation" in module;
}
// \0astro:content
var liveCollections = {};
var logger = createConsoleLogger({ level });
var getCollection = createGetCollection({
	liveCollections,
	logger
});
createGetEntry({
	liveCollections,
	logger
});
var render = createRenderEntry({ logger });
createGetLiveCollection({ liveCollections });
createGetLiveEntry({ liveCollections });
// Source/Component/DocsSidebar.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
async function DocsTree() {
	const HrefOf = (Id) => Id === "index" ? "/docs/" : `/docs/${Id}/`;
	const Entries = (await getCollection("Docs")).map(({ id, data }) => ({
		Id: id,
		Title: data.title,
		Section: data.section
	})).sort((A, B) => A.Id.localeCompare(B.Id));
	const ById = new Map(Entries.map((Entry) => [Entry.Id, Entry]));
	const ParentOf = (Entry) => {
		const Segments = Entry.Id.split("/");
		if (Segments.length < 3) return;
		const Parent = ById.get(Segments.slice(0, -1).join("/"));
		return Parent !== void 0 && Parent.Section === Entry.Section ? Parent.Id : void 0;
	};
	const Pages = new Map(Entries.map((Entry) => [Entry.Id, {
		Id: Entry.Id,
		Title: Entry.Title,
		Href: HrefOf(Entry.Id),
		Children: []
	}]));
	const Roots = [];
	for (const Entry of Entries) {
		const Page = Pages.get(Entry.Id);
		const Parent = ParentOf(Entry);
		switch (Parent) {
			case void 0:
				Roots.push(Page);
				break;
			default: Pages.get(Parent).Children.push(Page);
		}
	}
	const Sections = /* @__PURE__ */ new Map();
	for (const Page of Roots) {
		const Name = ById.get(Page.Id).Section;
		Sections.set(Name, [...Sections.get(Name) ?? [], Page]);
	}
	const RankOf = (Name, Page) => Page.Id === "index" || Page.Id.toLowerCase() === Name.toLowerCase() ? 0 : 1;
	return [...Sections.entries()].sort(([A], [B]) => A === "Overview" ? -1 : B === "Overview" ? 1 : A.localeCompare(B)).map(([Name, Pages]) => ({
		Name,
		Pages: [...Pages].sort((A, B) => RankOf(Name, A) - RankOf(Name, B) || A.Id.localeCompare(B.Id)),
		Count: Pages.reduce((Total, Page) => Total + 1 + Page.Children.length, 0)
	}));
}
async function DocsTrail(Id) {
	const HrefOf = (Target) => Target === "index" ? "/docs/" : `/docs/${Target}/`;
	const Sections = await DocsTree();
	if (Id === "index") return [];
	const SectionIndexOf = (Name) => Sections.some(({ Pages }) => Pages.some((Page) => Page.Id === Name.toLowerCase()) || Pages.some((Page) => Page.Children.some((Child) => Child.Id === Name.toLowerCase())));
	for (const { Name, Pages } of Sections) {
		const Trail = [{
			Label: "DOCS",
			Href: "/docs/"
		}, ...Name.toLowerCase() === Id ? [] : [{
			Label: Name,
			Href: SectionIndexOf(Name) ? HrefOf(Name.toLowerCase()) : void 0
		}]];
		for (const Page of Pages) {
			if (Page.Id === Id) return [...Trail, { Label: Page.Title }];
			for (const Child of Page.Children) if (Child.Id === Id) return [
				...Trail,
				{
					Label: Page.Title,
					Href: Page.Href
				},
				{ Label: Child.Title }
			];
		}
	}
	return [];
}
var $$DocsSidebar = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$DocsSidebar;
	const { Sections: Registry, CurrentId, Label = "Documentation sections", Order = [] } = Astro.props;
	const IdFromUrl = () => {
		const Path = Astro.url.pathname.replace(/^\/docs\/?/, "").replace(/\/+$/, "");
		return Path === "" ? "index" : Path;
	};
	const Current = CurrentId ?? IdFromUrl();
	const Tree = await DocsTree();
	const RankOf = (Name) => {
		const Position = Order.indexOf(Name);
		return Position === -1 ? Order.length : Position;
	};
	const Sections = Order.length === 0 ? Tree : [...Tree].sort((A, B) => RankOf(A.Name) - RankOf(B.Name) || A.Name.localeCompare(B.Name));
	const WipIds = new Set((Registry ?? []).flatMap(({ Entries }) => Entries.filter(({ Wip }) => Wip === true).map(({ Id }) => Id)));
	const HoldsCurrent = ({ Pages }) => Pages.some((Page) => Page.Id === Current || Page.Children.some(({ Id }) => Id === Current));
	return renderTemplate`  ${maybeRenderHead($$result)}<nav${addAttribute(Label, "aria-label")} class="docs-sidebar"> <p class="docs-sidebar__eyebrow">Doc index</p> <div class="docs-sidebar__panel">  <div class="docs-sidebar__sections"> ${Sections.map((Section) => {
		const IsCurrent = HoldsCurrent(Section);
		return renderTemplate`<details class="docs-sidebar__group"${addAttribute(IsCurrent, "open")}${addAttribute(Section.Name, "data-docs-section")}${addAttribute(IsCurrent ? "1" : void 0, "data-current-section")}> <summary class="docs-sidebar__summary"> <span${addAttribute(["docs-sidebar__marker", IsCurrent && "docs-sidebar__marker--current"], "class:list")} aria-hidden="true"></span> <span${addAttribute(["docs-sidebar__label", IsCurrent && "docs-sidebar__label--current"], "class:list")}> ${Section.Name} </span> <span class="docs-sidebar__count">${Section.Count}</span> <span class="docs-sidebar__chevron" aria-hidden="true">▸</span> </summary> <ul class="docs-sidebar__branch"> ${Section.Pages.map((Page) => renderTemplate`<li> <a${addAttribute(Page.Href, "href")}${addAttribute(Page.Id === Current ? "page" : void 0, "aria-current")}${addAttribute(["docs-sidebar__link", Page.Id === Current && "docs-sidebar__link--current"], "class:list")}> ${Page.Id === Current && renderTemplate`<span class="docs-sidebar__active" aria-hidden="true"></span>`} ${Page.Title} ${WipIds.has(Page.Id) && renderTemplate`<span class="docs-sidebar__wip" title="Roadmap: partly unimplemented">
WIP
</span>`} </a> ${Page.Children.length > 0 && renderTemplate`<ul class="docs-sidebar__branch docs-sidebar__branch--nested"> ${Page.Children.map((Child) => renderTemplate`<li> <a${addAttribute(Child.Href, "href")}${addAttribute(Child.Id === Current ? "page" : void 0, "aria-current")}${addAttribute(["docs-sidebar__link", Child.Id === Current && "docs-sidebar__link--current"], "class:list")}> ${Child.Id === Current && renderTemplate`<span class="docs-sidebar__active" aria-hidden="true"></span>`} ${Child.Title} ${WipIds.has(Child.Id) && renderTemplate`<span class="docs-sidebar__wip" title="Roadmap: partly unimplemented">
WIP
</span>`} </a> </li>`)} </ul>`} </li>`)} </ul> </details>`;
	})} </div> </div> </nav>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/DocsSidebar.astro", void 0);
export { $$Related as a, VALID_SUPPORTED_FORMATS as c, recordStaticImage as d, render as i, level as l, DocsTrail as n, DEFAULT_HASH_PROPS as o, getCollection as r, DEFAULT_OUTPUT_FORMAT as s, $$DocsSidebar as t, isCollectingStaticImages as u };
