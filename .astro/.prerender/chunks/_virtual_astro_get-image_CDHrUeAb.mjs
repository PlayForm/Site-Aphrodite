import { t as createConsoleLogger } from "./console_ClfCadOL.mjs";
import { c as VALID_SUPPORTED_FORMATS, d as recordStaticImage, l as level, o as DEFAULT_HASH_PROPS, s as DEFAULT_OUTPUT_FORMAT, u as isCollectingStaticImages } from "./DocsSidebar_DfVitkgG.mjs";
import { a as fileExtension, c as isRemotePath, d as removeBase, l as joinPaths, p as removeQueryString, u as prependForwardSlash } from "./path_jvl2hruy.mjs";
import { t as isRemoteAllowed } from "./remote_Ce-ZTEMF.mjs";
import { A as NoImageMetadata, E as MissingImageDimension, J as UnsupportedImageFormat, X as AstroError, b as InvalidImageService, c as ExpectedImageOptions, g as IncompatibleDescriptorOptions, l as ExpectedNotESMImage, q as UnsupportedImageConversion, s as ExpectedImage, u as FailedToFetchRemoteImageDimensions, x as LocalImageUsedWrongly, z as RemoteImageNotAllowed } from "./errors-data_XstbcoNP.mjs";
import { t as getAssetsPrefix } from "./getAssetsPrefix_Bl-SD0g7.mjs";
import { t as shorthash } from "./shorthash_5mHx45p2.mjs";
// node_modules/astro/dist/assets/layout.js
var DEFAULT_RESOLUTIONS = [
	640,
	750,
	828,
	960,
	1080,
	1280,
	1668,
	1920,
	2048,
	2560,
	3200,
	3840,
	4480,
	5120,
	6016
];
var LIMITED_RESOLUTIONS = [
	640,
	750,
	828,
	1080,
	1280,
	1668,
	2048,
	2560
];
/**
* Gets the breakpoints for an image, based on the layout and width
*
* The rules are as follows:
*
* - For full-width layout we return all breakpoints smaller than the original image width
* - For fixed layout we return 1x and 2x the requested width, unless the original image is smaller than that.
* - For responsive layout we return all breakpoints smaller than 2x the requested width, unless the original image is smaller than that.
*/
var getWidths = ({ width, layout, breakpoints = DEFAULT_RESOLUTIONS, originalWidth }) => {
	const smallerThanOriginal = (w) => !originalWidth || w <= originalWidth;
	if (layout === "full-width") return breakpoints.filter(smallerThanOriginal);
	if (!width) return [];
	const doubleWidth = width * 2;
	const maxSize = originalWidth ? Math.min(doubleWidth, originalWidth) : doubleWidth;
	if (layout === "fixed") return originalWidth && width > originalWidth ? [originalWidth] : [width, maxSize];
	if (layout === "constrained") return [
		width,
		doubleWidth,
		...breakpoints
	].filter((w) => w <= maxSize).sort((a, b) => a - b);
	return [];
};
/**
* Gets the `sizes` attribute for an image, based on the layout and width
*/
var getSizesAttribute = ({ width, layout }) => {
	if (!width || !layout) return;
	switch (layout) {
		case "constrained": return `(min-width: ${width}px) ${width}px, 100vw`;
		case "fixed": return `${width}px`;
		case "full-width": return `100vw`;
		default: return;
	}
};
// node_modules/astro/dist/assets/utils/imageKind.js
/**
* Determines if the given source is an ECMAScript Module (ESM) imported image.
*
* @param {ImageMetadata | string} src - The source to check. It can be an `ImageMetadata` object or a string.
* @return {boolean} Returns `true` if the source is an `ImageMetadata` object; otherwise, `false`.
*/
function isESMImportedImage(src) {
	return typeof src === "object" || typeof src === "function" && "src" in src;
}
/**
* Determines if the provided source is a remote image URL in the form of a string.
*
* @param {ImageMetadata | string} src - The source to check, which can either be an `ImageMetadata` object or a string.
* @return {boolean} Returns `true` if the source is a string; otherwise, `false`.
*/
function isRemoteImage(src) {
	return typeof src === "string";
}
/**
* Resolves the source of an image transformation by handling asynchronous or synchronous inputs.
*
* @param {UnresolvedImageTransform['src']} src - The source of the image transformation.
* @return {Promise<string | ImageMetadata>} A promise that resolves to the image source. It returns either the default export of the resolved source or the resolved source itself if the default export doesn't exist.
*/
async function resolveSrc(src) {
	if (typeof src === "object" && "then" in src) {
		const resource = await src;
		return resource.default ?? resource;
	}
	return src;
}
// node_modules/astro/dist/assets/utils/inferSourceFormat.js
var DATA_PREFIX = "data:";
/**
* Infer the image format from a source path or URL.
*
* For `data:` URIs the MIME is read up to the first `;` or `,` (whichever comes first),
* so both `data:image/svg+xml;base64,...` and `data:image/svg+xml,<svg>...` work.
* `image/svg+xml` normalizes to `svg`; otherwise the subtype after the slash is returned.
*
* Returns undefined when the format cannot be determined.
*/
function inferSourceFormat(src) {
	if (src.startsWith(DATA_PREFIX)) {
		const sepIndex = src.indexOf(";");
		const commaIndex = src.indexOf(",");
		const mimeEnd = sepIndex === -1 ? commaIndex : commaIndex === -1 ? sepIndex : Math.min(sepIndex, commaIndex);
		if (mimeEnd === -1) return void 0;
		const mime = src.slice(5, mimeEnd);
		if (mime === "image/svg+xml") return "svg";
		return mime.split("/")[1] || void 0;
	}
	try {
		const cleanSrc = removeQueryString(src).split("#")[0];
		const lastSlash = cleanSrc.lastIndexOf("/");
		const basename = lastSlash === -1 ? cleanSrc : cleanSrc.slice(lastSlash + 1);
		const lastDot = basename.lastIndexOf(".");
		if (lastDot === -1) return void 0;
		return basename.slice(lastDot + 1).toLowerCase();
	} catch {
		return;
	}
}
function resolveDefaultOutputFormat(sourceFormat) {
	return sourceFormat === "svg" ? "svg" : DEFAULT_OUTPUT_FORMAT;
}
// node_modules/astro/dist/assets/utils/vendor/image-size/types/utils.js
var decoder = new TextDecoder();
var toUTF8String = (input, start = 0, end = input.length) => decoder.decode(input.slice(start, end));
var toHexString = (input, start = 0, end = input.length) => input.slice(start, end).reduce((memo, i) => memo + `0${i.toString(16)}`.slice(-2), "");
var getView = (input, offset) => new DataView(input.buffer, input.byteOffset + offset);
var readInt16LE = (input, offset = 0) => getView(input, offset).getInt16(0, true);
var readUInt16BE = (input, offset = 0) => getView(input, offset).getUint16(0, false);
var readUInt16LE = (input, offset = 0) => getView(input, offset).getUint16(0, true);
var readUInt24LE = (input, offset = 0) => {
	const view = getView(input, offset);
	return view.getUint16(0, true) + (view.getUint8(2) << 16);
};
var readInt32LE = (input, offset = 0) => getView(input, offset).getInt32(0, true);
var readUInt32BE = (input, offset = 0) => getView(input, offset).getUint32(0, false);
var readUInt32LE = (input, offset = 0) => getView(input, offset).getUint32(0, true);
var readUInt64 = (input, offset, isBigEndian) => getView(input, offset).getBigUint64(0, !isBigEndian);
var methods = {
	readUInt16BE,
	readUInt16LE,
	readUInt32BE,
	readUInt32LE
};
function readUInt(input, bits, offset = 0, isBigEndian = false) {
	return methods[`readUInt${bits}${isBigEndian ? "BE" : "LE"}`](input, offset);
}
var MIN_BOX_HEADER = 8;
function readBox(input, offset) {
	if (input.length - offset < MIN_BOX_HEADER) return;
	const boxSize = readUInt32BE(input, offset);
	if (boxSize === 0) return {
		name: toUTF8String(input, offset + 4, offset + 8),
		offset,
		size: input.length - offset
	};
	if (boxSize === 1) return;
	if (boxSize < MIN_BOX_HEADER) return;
	if (input.length - offset < boxSize) return;
	return {
		name: toUTF8String(input, offset + 4, offset + 8),
		offset,
		size: boxSize
	};
}
function findBox(input, boxName, startOffset) {
	let offset = startOffset;
	while (offset < input.length) {
		const box = readBox(input, offset);
		if (!box) break;
		if (box.name === boxName) return box;
		if (box.size < MIN_BOX_HEADER) break;
		const nextOffset = offset + box.size;
		if (nextOffset <= offset) break;
		offset = nextOffset;
	}
}
// node_modules/astro/dist/assets/utils/vendor/image-size/types/bmp.js
var BMP = {
	validate: (input) => toUTF8String(input, 0, 2) === "BM",
	calculate: (input) => ({
		height: Math.abs(readInt32LE(input, 22)),
		width: readUInt32LE(input, 18)
	})
};
// node_modules/astro/dist/assets/utils/vendor/image-size/types/ico.js
var TYPE_ICON = 1;
/**
* ICON Header
*
* | Offset | Size | Purpose |
* | 0	    | 2    | Reserved. Must always be 0.  |
* | 2      | 2    | Image type: 1 for icon (.ICO) image, 2 for cursor (.CUR) image. Other values are invalid. |
* | 4      | 2    | Number of images in the file. |
*
*/
var SIZE_HEADER$1 = 6;
/**
* Image Entry
*
* | Offset | Size | Purpose |
* | 0	    | 1    | Image width in pixels. Can be any number between 0 and 255. Value 0 means width is 256 pixels. |
* | 1      | 1    | Image height in pixels. Can be any number between 0 and 255. Value 0 means height is 256 pixels. |
* | 2      | 1    | Number of colors in the color palette. Should be 0 if the image does not use a color palette. |
* | 3      | 1    | Reserved. Should be 0. |
* | 4      | 2    | ICO format: Color planes. Should be 0 or 1. |
* |        |      | CUR format: The horizontal coordinates of the hotspot in number of pixels from the left. |
* | 6      | 2    | ICO format: Bits per pixel. |
* |        |      | CUR format: The vertical coordinates of the hotspot in number of pixels from the top. |
* | 8      | 4    | The size of the image's data in bytes |
* | 12     | 4    | The offset of BMP or PNG data from the beginning of the ICO/CUR file |
*
*/
var SIZE_IMAGE_ENTRY = 16;
function getSizeFromOffset(input, offset) {
	const value = input[offset];
	return value === 0 ? 256 : value;
}
function getImageSize$1(input, imageIndex) {
	const offset = SIZE_HEADER$1 + imageIndex * SIZE_IMAGE_ENTRY;
	return {
		height: getSizeFromOffset(input, offset + 1),
		width: getSizeFromOffset(input, offset)
	};
}
var ICO = {
	validate(input) {
		const reserved = readUInt16LE(input, 0);
		const imageCount = readUInt16LE(input, 4);
		if (reserved !== 0 || imageCount === 0) return false;
		return readUInt16LE(input, 2) === TYPE_ICON;
	},
	calculate(input) {
		const nbImages = readUInt16LE(input, 4);
		const imageSize = getImageSize$1(input, 0);
		if (nbImages === 1) return imageSize;
		const images = [];
		for (let imageIndex = 0; imageIndex < nbImages; imageIndex += 1) images.push(getImageSize$1(input, imageIndex));
		return {
			width: imageSize.width,
			height: imageSize.height,
			images
		};
	}
};
// node_modules/astro/dist/assets/utils/vendor/image-size/types/cur.js
var TYPE_CURSOR = 2;
var CUR = {
	validate(input) {
		const reserved = readUInt16LE(input, 0);
		const imageCount = readUInt16LE(input, 4);
		if (reserved !== 0 || imageCount === 0) return false;
		return readUInt16LE(input, 2) === TYPE_CURSOR;
	},
	calculate: (input) => ICO.calculate(input)
};
// node_modules/astro/dist/assets/utils/vendor/image-size/types/dds.js
var DDS = {
	validate: (input) => readUInt32LE(input, 0) === 542327876,
	calculate: (input) => ({
		height: readUInt32LE(input, 12),
		width: readUInt32LE(input, 16)
	})
};
// node_modules/astro/dist/assets/utils/vendor/image-size/types/gif.js
var gifRegexp = /^GIF8[79]a/;
var GIF = {
	validate: (input) => gifRegexp.test(toUTF8String(input, 0, 6)),
	calculate: (input) => ({
		height: readUInt16LE(input, 8),
		width: readUInt16LE(input, 6)
	})
};
// node_modules/astro/dist/assets/utils/vendor/image-size/types/heif.js
var brandMap = {
	avif: "avif",
	avis: "avif",
	mif1: "heif",
	msf1: "heif",
	heic: "heic",
	heix: "heic",
	hevc: "heic",
	hevx: "heic"
};
function detectType(input, start, end) {
	let hasAvif = false;
	let hasHeic = false;
	let hasHeif = false;
	for (let i = start; i <= end; i += 4) {
		const brand = toUTF8String(input, i, i + 4);
		if (brand === "avif" || brand === "avis") hasAvif = true;
		else if (brand === "heic" || brand === "heix" || brand === "hevc" || brand === "hevx") hasHeic = true;
		else if (brand === "mif1" || brand === "msf1") hasHeif = true;
	}
	if (hasAvif) return "avif";
	if (hasHeic) return "heic";
	if (hasHeif) return "heif";
}
var HEIF = {
	validate(input) {
		if (toUTF8String(input, 4, 8) !== "ftyp") return false;
		const ftypBox = findBox(input, "ftyp", 0);
		if (!ftypBox) return false;
		return toUTF8String(input, ftypBox.offset + 8, ftypBox.offset + 12) in brandMap;
	},
	calculate(input) {
		const metaBox = findBox(input, "meta", 0);
		const iprpBox = metaBox && findBox(input, "iprp", metaBox.offset + 12);
		const ipcoBox = iprpBox && findBox(input, "ipco", iprpBox.offset + 8);
		if (!ipcoBox) throw new TypeError("Invalid HEIF, no ipco box found");
		const type = detectType(input, 8, metaBox.offset);
		const images = [];
		let currentOffset = ipcoBox.offset + 8;
		const ipcoEnd = ipcoBox.offset + ipcoBox.size;
		while (currentOffset < ipcoEnd) {
			const ispeBox = findBox(input, "ispe", currentOffset);
			if (!ispeBox) break;
			if (ispeBox.size < 8) break;
			if (ispeBox.offset + ispeBox.size > ipcoEnd) break;
			const rawWidth = readUInt32BE(input, ispeBox.offset + 12);
			const rawHeight = readUInt32BE(input, ispeBox.offset + 16);
			const clapBox = findBox(input, "clap", currentOffset);
			let width = rawWidth;
			let height = rawHeight;
			if (clapBox && clapBox.offset < ipcoEnd && clapBox.size >= 8) width = rawWidth - readUInt32BE(input, clapBox.offset + 12);
			images.push({
				height,
				width
			});
			const nextOffset = ispeBox.offset + ispeBox.size;
			if (nextOffset <= currentOffset) break;
			currentOffset = nextOffset;
		}
		if (images.length === 0) throw new TypeError("Invalid HEIF, no sizes found");
		return {
			width: images[0].width,
			height: images[0].height,
			type,
			...images.length > 1 ? { images } : {}
		};
	}
};
// node_modules/astro/dist/assets/utils/vendor/image-size/types/icns.js
/**
* ICNS Header
*
* | Offset | Size | Purpose                                                |
* | 0	    | 4    | Magic literal, must be "icns" (0x69, 0x63, 0x6e, 0x73) |
* | 4      | 4    | Length of file, in bytes, msb first.                   |
*
*/
var SIZE_HEADER = 8;
var FILE_LENGTH_OFFSET = 4;
var MIN_ENTRY_LENGTH = 8;
/**
* Image Entry
*
* | Offset | Size | Purpose                                                          |
* | 0	    | 4    | Icon type, see OSType below.                                     |
* | 4      | 4    | Length of data, in bytes (including type and length), msb first. |
* | 8      | n    | Icon data                                                        |
*/
var ENTRY_LENGTH_OFFSET = 4;
var ICON_TYPE_SIZE = {
	ICON: 32,
	"ICN#": 32,
	"icm#": 16,
	icm4: 16,
	icm8: 16,
	"ics#": 16,
	ics4: 16,
	ics8: 16,
	is32: 16,
	s8mk: 16,
	icp4: 16,
	icl4: 32,
	icl8: 32,
	il32: 32,
	l8mk: 32,
	icp5: 32,
	ic11: 32,
	ich4: 48,
	ich8: 48,
	ih32: 48,
	h8mk: 48,
	icp6: 64,
	ic12: 32,
	it32: 128,
	t8mk: 128,
	ic07: 128,
	ic08: 256,
	ic13: 256,
	ic09: 512,
	ic14: 512,
	ic10: 1024
};
function readImageHeader(input, imageOffset) {
	const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
	return [toUTF8String(input, imageOffset, imageLengthOffset), readUInt32BE(input, imageLengthOffset)];
}
function getImageSize(type) {
	const size = ICON_TYPE_SIZE[type];
	return {
		width: size,
		height: size,
		type
	};
}
var ICNS = {
	validate: (input) => toUTF8String(input, 0, 4) === "icns",
	calculate(input) {
		const inputLength = input.length;
		const fileLength = readUInt32BE(input, FILE_LENGTH_OFFSET);
		let imageOffset = SIZE_HEADER;
		const images = [];
		while (imageOffset < fileLength && imageOffset < inputLength) {
			if (inputLength - imageOffset < MIN_ENTRY_LENGTH) break;
			const imageHeader = readImageHeader(input, imageOffset);
			const entryLength = imageHeader[1];
			if (entryLength < MIN_ENTRY_LENGTH) break;
			const imageSize = getImageSize(imageHeader[0]);
			if (imageSize.width && imageSize.height) images.push(imageSize);
			const nextOffset = imageOffset + entryLength;
			if (nextOffset <= imageOffset) break;
			imageOffset = nextOffset;
		}
		if (images.length === 0) throw new TypeError("Invalid ICNS, no sizes found");
		return {
			width: images[0].width,
			height: images[0].height,
			...images.length > 1 ? { images } : {}
		};
	}
};
// node_modules/astro/dist/assets/utils/vendor/image-size/types/j2c.js
var J2C = {
	validate: (input) => readUInt32BE(input, 0) === 4283432785,
	calculate: (input) => ({
		height: readUInt32BE(input, 12),
		width: readUInt32BE(input, 8)
	})
};
// node_modules/astro/dist/assets/utils/vendor/image-size/types/jp2.js
var JP2 = {
	validate(input) {
		if (toUTF8String(input, 4, 8) !== "jP  ") return false;
		const ftypBox = findBox(input, "ftyp", 0);
		if (!ftypBox) return false;
		return toUTF8String(input, ftypBox.offset + 8, ftypBox.offset + 12) === "jp2 ";
	},
	calculate(input) {
		const jp2hBox = findBox(input, "jp2h", 0);
		const ihdrBox = jp2hBox && jp2hBox.size >= 8 && findBox(input, "ihdr", jp2hBox.offset + 8);
		if (ihdrBox && ihdrBox.size >= 8) return {
			height: readUInt32BE(input, ihdrBox.offset + 8),
			width: readUInt32BE(input, ihdrBox.offset + 12)
		};
		throw new TypeError("Unsupported JPEG 2000 format");
	}
};
// node_modules/astro/dist/assets/utils/vendor/image-size/types/jpg.js
var EXIF_MARKER = "45786966";
var APP1_DATA_SIZE_BYTES = 2;
var EXIF_HEADER_BYTES = 6;
var BIG_ENDIAN_BYTE_ALIGN = "4d4d";
var LITTLE_ENDIAN_BYTE_ALIGN = "4949";
var IDF_ENTRY_BYTES = 12;
function isEXIF(input) {
	return toHexString(input, 2, 6) === EXIF_MARKER;
}
function extractSize(input, index) {
	return {
		height: readUInt16BE(input, index),
		width: readUInt16BE(input, index + 2)
	};
}
function extractOrientation(exifBlock, isBigEndian) {
	const idfDirectoryEntries = readUInt(exifBlock, 16, 14, isBigEndian);
	for (let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++) {
		const start = 16 + directoryEntryNumber * IDF_ENTRY_BYTES;
		const end = start + IDF_ENTRY_BYTES;
		if (start > exifBlock.length) return;
		const block = exifBlock.slice(start, end);
		if (readUInt(block, 16, 0, isBigEndian) === 274) {
			if (readUInt(block, 16, 2, isBigEndian) !== 3) return;
			if (readUInt(block, 32, 4, isBigEndian) !== 1) return;
			return readUInt(block, 16, 8, isBigEndian);
		}
	}
}
function validateExifBlock(input, index) {
	const exifBlock = input.slice(APP1_DATA_SIZE_BYTES, index);
	const byteAlign = toHexString(exifBlock, EXIF_HEADER_BYTES, 8);
	const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
	if (isBigEndian || byteAlign === LITTLE_ENDIAN_BYTE_ALIGN) return extractOrientation(exifBlock, isBigEndian);
}
function validateInput(input, index) {
	if (index > input.length) throw new TypeError("Corrupt JPG, exceeded buffer limits");
}
var JPG = {
	validate: (input) => toHexString(input, 0, 2) === "ffd8",
	calculate(_input) {
		let input = _input.slice(4);
		let orientation;
		let next;
		while (input.length) {
			const i = readUInt16BE(input, 0);
			validateInput(input, i);
			if (input[i] !== 255) {
				input = input.slice(1);
				continue;
			}
			if (isEXIF(input)) orientation = validateExifBlock(input, i);
			next = input[i + 1];
			if (next === 192 || next === 193 || next === 194) {
				const size = extractSize(input, i + 5);
				if (!orientation) return size;
				return {
					height: size.height,
					orientation,
					width: size.width
				};
			}
			input = input.slice(i + 2);
		}
		throw new TypeError("Invalid JPG, no size found");
	}
};
// node_modules/astro/dist/assets/utils/vendor/image-size/utils/bit-reader.js
/** This class helps read Uint8Array bit-by-bit */
var BitReader = class {
	byteOffset = 2;
	bitOffset = 0;
	input;
	endianness;
	constructor(input, endianness) {
		this.input = input;
		this.endianness = endianness;
	}
	/** Reads a specified number of bits, and move the offset */
	getBits(length = 1) {
		let result = 0;
		let bitsRead = 0;
		while (bitsRead < length) {
			if (this.byteOffset >= this.input.length) throw new Error("Reached end of input");
			const currentByte = this.input[this.byteOffset];
			const bitsLeft = 8 - this.bitOffset;
			const bitsToRead = Math.min(length - bitsRead, bitsLeft);
			if (this.endianness === "little-endian") {
				const mask = (1 << bitsToRead) - 1;
				const bits = currentByte >> this.bitOffset & mask;
				result |= bits << bitsRead;
			} else {
				const bits = (currentByte & (1 << bitsToRead) - 1 << 8 - this.bitOffset - bitsToRead) >> 8 - this.bitOffset - bitsToRead;
				result = result << bitsToRead | bits;
			}
			bitsRead += bitsToRead;
			this.bitOffset += bitsToRead;
			if (this.bitOffset === 8) {
				this.byteOffset++;
				this.bitOffset = 0;
			}
		}
		return result;
	}
};
// node_modules/astro/dist/assets/utils/vendor/image-size/types/jxl-stream.js
function calculateImageDimension(reader, isSmallImage) {
	if (isSmallImage) return 8 * (1 + reader.getBits(5));
	const extraBits = [
		9,
		13,
		18,
		30
	][reader.getBits(2)];
	return 1 + reader.getBits(extraBits);
}
function calculateImageWidth(reader, isSmallImage, widthMode, height) {
	if (isSmallImage && widthMode === 0) return 8 * (1 + reader.getBits(5));
	if (widthMode === 0) return calculateImageDimension(reader, false);
	return Math.floor(height * [
		1,
		1.2,
		4 / 3,
		1.5,
		16 / 9,
		5 / 4,
		2
	][widthMode - 1]);
}
var JXLStream = {
	validate: (input) => {
		return toHexString(input, 0, 2) === "ff0a";
	},
	calculate(input) {
		const reader = new BitReader(input, "little-endian");
		const isSmallImage = reader.getBits(1) === 1;
		const height = calculateImageDimension(reader, isSmallImage);
		return {
			width: calculateImageWidth(reader, isSmallImage, reader.getBits(3), height),
			height
		};
	}
};
// node_modules/astro/dist/assets/utils/vendor/image-size/types/jxl.js
/** Extracts the codestream from a containerized JPEG XL image */
function extractCodestream(input) {
	const jxlcBox = findBox(input, "jxlc", 0);
	if (jxlcBox && jxlcBox.size >= 8) return input.slice(jxlcBox.offset + 8, jxlcBox.offset + jxlcBox.size);
	const partialStreams = extractPartialStreams(input);
	if (partialStreams.length > 0) return concatenateCodestreams(partialStreams);
}
/** Extracts partial codestreams from jxlp boxes */
function extractPartialStreams(input) {
	const partialStreams = [];
	let offset = 0;
	while (offset < input.length) {
		const jxlpBox = findBox(input, "jxlp", offset);
		if (!jxlpBox) break;
		if (jxlpBox.size < 12) break;
		partialStreams.push(input.slice(jxlpBox.offset + 12, jxlpBox.offset + jxlpBox.size));
		const nextOffset = jxlpBox.offset + jxlpBox.size;
		if (nextOffset <= offset) break;
		offset = nextOffset;
	}
	return partialStreams;
}
/** Concatenates partial codestreams into a single codestream */
function concatenateCodestreams(partialCodestreams) {
	const totalLength = partialCodestreams.reduce((acc, curr) => acc + curr.length, 0);
	const codestream = new Uint8Array(totalLength);
	let position = 0;
	for (const partial of partialCodestreams) {
		codestream.set(partial, position);
		position += partial.length;
	}
	return codestream;
}
var JXL = {
	validate: (input) => {
		if (toUTF8String(input, 4, 8) !== "JXL ") return false;
		const ftypBox = findBox(input, "ftyp", 0);
		if (!ftypBox) return false;
		return toUTF8String(input, ftypBox.offset + 8, ftypBox.offset + 12) === "jxl ";
	},
	calculate(input) {
		const codestream = extractCodestream(input);
		if (codestream) return JXLStream.calculate(codestream);
		throw new Error("No codestream found in JXL container");
	}
};
// node_modules/astro/dist/assets/utils/vendor/image-size/types/ktx.js
var KTX = {
	validate: (input) => {
		const signature = toUTF8String(input, 1, 7);
		return ["KTX 11", "KTX 20"].includes(signature);
	},
	calculate: (input) => {
		const type = input[5] === 49 ? "ktx" : "ktx2";
		const offset = type === "ktx" ? 36 : 20;
		return {
			height: readUInt32LE(input, offset + 4),
			width: readUInt32LE(input, offset),
			type
		};
	}
};
// node_modules/astro/dist/assets/utils/vendor/image-size/types/png.js
var pngSignature = "PNG\r\n\n";
var pngImageHeaderChunkName = "IHDR";
var pngFriedChunkName = "CgBI";
var PNG = {
	validate(input) {
		if (pngSignature === toUTF8String(input, 1, 8)) {
			let chunkName = toUTF8String(input, 12, 16);
			if (chunkName === pngFriedChunkName) chunkName = toUTF8String(input, 28, 32);
			if (chunkName !== pngImageHeaderChunkName) throw new TypeError("Invalid PNG");
			return true;
		}
		return false;
	},
	calculate(input) {
		if (toUTF8String(input, 12, 16) === pngFriedChunkName) return {
			height: readUInt32BE(input, 36),
			width: readUInt32BE(input, 32)
		};
		return {
			height: readUInt32BE(input, 20),
			width: readUInt32BE(input, 16)
		};
	}
};
// node_modules/astro/dist/assets/utils/vendor/image-size/types/pnm.js
var PNMTypes = {
	P1: "pbm/ascii",
	P2: "pgm/ascii",
	P3: "ppm/ascii",
	P4: "pbm",
	P5: "pgm",
	P6: "ppm",
	P7: "pam",
	PF: "pfm"
};
var handlers = {
	default: (lines) => {
		let dimensions = [];
		while (lines.length > 0) {
			const line = lines.shift();
			if (line[0] === "#") continue;
			dimensions = line.split(" ");
			break;
		}
		if (dimensions.length === 2) return {
			height: Number.parseInt(dimensions[1], 10),
			width: Number.parseInt(dimensions[0], 10)
		};
		throw new TypeError("Invalid PNM");
	},
	pam: (lines) => {
		const size = {};
		while (lines.length > 0) {
			const line = lines.shift();
			if (line.length > 16 || line.charCodeAt(0) > 128) continue;
			const [key, value] = line.split(" ");
			if (key && value) size[key.toLowerCase()] = Number.parseInt(value, 10);
			if (size.height && size.width) break;
		}
		if (size.height && size.width) return {
			height: size.height,
			width: size.width
		};
		throw new TypeError("Invalid PAM");
	}
};
var PNM = {
	validate: (input) => toUTF8String(input, 0, 2) in PNMTypes,
	calculate(input) {
		const type = PNMTypes[toUTF8String(input, 0, 2)];
		const lines = toUTF8String(input, 3).split(/[\r\n]+/);
		return (handlers[type] || handlers.default)(lines);
	}
};
// node_modules/astro/dist/assets/utils/vendor/image-size/types/psd.js
var PSD = {
	validate: (input) => toUTF8String(input, 0, 4) === "8BPS",
	calculate: (input) => ({
		height: readUInt32BE(input, 14),
		width: readUInt32BE(input, 18)
	})
};
// node_modules/astro/dist/assets/utils/vendor/image-size/types/svg.js
var svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
var extractorRegExps = {
	height: /\sheight=(['"])([^%]+?)\1/,
	root: svgReg,
	viewbox: /\sviewBox=(['"])(.+?)\1/i,
	width: /\swidth=(['"])([^%]+?)\1/
};
var INCH_CM = 2.54;
var units = {
	in: 96,
	cm: 96 / INCH_CM,
	em: 16,
	ex: 8,
	m: 96 / INCH_CM * 100,
	mm: 96 / INCH_CM / 10,
	pc: 96 / 72 / 12,
	pt: 96 / 72,
	px: 1
};
var unitsReg = new RegExp(`^([0-9.]+(?:e\\d+)?)(${Object.keys(units).join("|")})?$`);
function parseLength(len) {
	const m = unitsReg.exec(len);
	if (!m) return;
	return Math.round(Number(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
	const bounds = viewbox.split(" ");
	return {
		height: parseLength(bounds[3]),
		width: parseLength(bounds[2])
	};
}
function parseAttributes(root) {
	const width = extractorRegExps.width.exec(root);
	const height = extractorRegExps.height.exec(root);
	const viewbox = extractorRegExps.viewbox.exec(root);
	return {
		height: height && parseLength(height[2]),
		viewbox: viewbox && parseViewbox(viewbox[2]),
		width: width && parseLength(width[2])
	};
}
function calculateByDimensions(attrs) {
	return {
		height: attrs.height,
		width: attrs.width
	};
}
function calculateByViewbox(attrs, viewbox) {
	const ratio = viewbox.width / viewbox.height;
	if (attrs.width) return {
		height: Math.floor(attrs.width / ratio),
		width: attrs.width
	};
	if (attrs.height) return {
		height: attrs.height,
		width: Math.floor(attrs.height * ratio)
	};
	return {
		height: viewbox.height,
		width: viewbox.width
	};
}
var SVG = {
	validate: (input) => svgReg.test(toUTF8String(input, 0, 1e3)),
	calculate(input) {
		const root = extractorRegExps.root.exec(toUTF8String(input));
		if (root) {
			const attrs = parseAttributes(root[0]);
			if (attrs.width != null && attrs.height != null) return calculateByDimensions(attrs);
			if (attrs.viewbox) return calculateByViewbox(attrs, attrs.viewbox);
		}
		throw new TypeError("Invalid SVG");
	}
};
// node_modules/astro/dist/assets/utils/vendor/image-size/types/tga.js
var TGA = {
	validate(input) {
		return readUInt16LE(input, 0) === 0 && readUInt16LE(input, 4) === 0;
	},
	calculate(input) {
		return {
			height: readUInt16LE(input, 14),
			width: readUInt16LE(input, 12)
		};
	}
};
// node_modules/astro/dist/assets/utils/vendor/image-size/types/tiff.js
var CONSTANTS = {
	TAG: {
		WIDTH: 256,
		HEIGHT: 257,
		COMPRESSION: 259
	},
	TYPE: {
		SHORT: 3,
		LONG: 4,
		LONG8: 16
	},
	ENTRY_SIZE: {
		STANDARD: 12,
		BIG: 20
	},
	COUNT_SIZE: {
		STANDARD: 2,
		BIG: 8
	}
};
function readIFD(input, { isBigEndian, isBigTiff }) {
	const ifdOffset = isBigTiff ? Number(readUInt64(input, 8, isBigEndian)) : readUInt(input, 32, 4, isBigEndian);
	const entryCountSize = isBigTiff ? CONSTANTS.COUNT_SIZE.BIG : CONSTANTS.COUNT_SIZE.STANDARD;
	return input.slice(ifdOffset + entryCountSize);
}
function readTagValue(input, type, offset, isBigEndian) {
	switch (type) {
		case CONSTANTS.TYPE.SHORT: return readUInt(input, 16, offset, isBigEndian);
		case CONSTANTS.TYPE.LONG: return readUInt(input, 32, offset, isBigEndian);
		case CONSTANTS.TYPE.LONG8: {
			const value = Number(readUInt64(input, offset, isBigEndian));
			if (value > Number.MAX_SAFE_INTEGER) throw new TypeError("Value too large");
			return value;
		}
		default: return 0;
	}
}
function nextTag(input, isBigTiff) {
	const entrySize = isBigTiff ? CONSTANTS.ENTRY_SIZE.BIG : CONSTANTS.ENTRY_SIZE.STANDARD;
	if (input.length > entrySize) return input.slice(entrySize);
}
function extractTags(input, { isBigEndian, isBigTiff }) {
	const tags = {};
	let temp = input;
	while (temp?.length) {
		const code = readUInt(temp, 16, 0, isBigEndian);
		const type = readUInt(temp, 16, 2, isBigEndian);
		const length = isBigTiff ? Number(readUInt64(temp, 4, isBigEndian)) : readUInt(temp, 32, 4, isBigEndian);
		if (code === 0) break;
		if (length === 1 && (type === CONSTANTS.TYPE.SHORT || type === CONSTANTS.TYPE.LONG || isBigTiff && type === CONSTANTS.TYPE.LONG8)) tags[code] = readTagValue(temp, type, isBigTiff ? 12 : 8, isBigEndian);
		temp = nextTag(temp, isBigTiff);
	}
	return tags;
}
function determineFormat(input) {
	const signature = toUTF8String(input, 0, 2);
	const version = readUInt(input, 16, 2, signature === "MM");
	return {
		isBigEndian: signature === "MM",
		isBigTiff: version === 43
	};
}
function validateBigTIFFHeader(input, isBigEndian) {
	const byteSize = readUInt(input, 16, 4, isBigEndian);
	const reserved = readUInt(input, 16, 6, isBigEndian);
	if (byteSize !== 8 || reserved !== 0) throw new TypeError("Invalid BigTIFF header");
}
var signatures = /* @__PURE__ */ new Set([
	"49492a00",
	"4d4d002a",
	"49492b00",
	"4d4d002b"
]);
var TIFF = {
	validate: (input) => {
		const signature = toHexString(input, 0, 4);
		return signatures.has(signature);
	},
	calculate(input) {
		const format = determineFormat(input);
		if (format.isBigTiff) validateBigTIFFHeader(input, format.isBigEndian);
		const tags = extractTags(readIFD(input, format), format);
		const info = {
			height: tags[CONSTANTS.TAG.HEIGHT],
			width: tags[CONSTANTS.TAG.WIDTH],
			type: format.isBigTiff ? "bigtiff" : "tiff"
		};
		if (tags[CONSTANTS.TAG.COMPRESSION]) info.compression = tags[CONSTANTS.TAG.COMPRESSION];
		if (!info.width || !info.height) throw new TypeError("Invalid Tiff. Missing tags");
		return info;
	}
};
// node_modules/astro/dist/assets/utils/vendor/image-size/types/webp.js
function calculateExtended(input) {
	return {
		height: 1 + readUInt24LE(input, 7),
		width: 1 + readUInt24LE(input, 4)
	};
}
function calculateLossless(input) {
	return {
		height: 1 + ((input[4] & 15) << 10 | input[3] << 2 | (input[2] & 192) >> 6),
		width: 1 + ((input[2] & 63) << 8 | input[1])
	};
}
function calculateLossy(input) {
	return {
		height: readInt16LE(input, 8) & 16383,
		width: readInt16LE(input, 6) & 16383
	};
}
// node_modules/astro/dist/assets/utils/vendor/image-size/types/index.js
var typeHandlers = /* @__PURE__ */ new Map([
	["bmp", BMP],
	["cur", CUR],
	["dds", DDS],
	["gif", GIF],
	["heif", HEIF],
	["icns", ICNS],
	["ico", ICO],
	["j2c", J2C],
	["jp2", JP2],
	["jpg", JPG],
	["jxl", JXL],
	["jxl-stream", JXLStream],
	["ktx", KTX],
	["png", PNG],
	["pnm", PNM],
	["psd", PSD],
	["svg", SVG],
	["tga", TGA],
	["tiff", TIFF],
	["webp", {
		validate(input) {
			const riffHeader = "RIFF" === toUTF8String(input, 0, 4);
			const webpHeader = "WEBP" === toUTF8String(input, 8, 12);
			const vp8Header = "VP8" === toUTF8String(input, 12, 15);
			return riffHeader && webpHeader && vp8Header;
		},
		calculate(_input) {
			const chunkHeader = toUTF8String(_input, 12, 16);
			const input = _input.slice(20, 30);
			if (chunkHeader === "VP8X") {
				const extendedHeader = input[0];
				const validStart = (extendedHeader & 192) === 0;
				const validEnd = (extendedHeader & 1) === 0;
				if (validStart && validEnd) return calculateExtended(input);
				throw new TypeError("Invalid WebP");
			}
			if (chunkHeader === "VP8 " && input[0] !== 47) return calculateLossy(input);
			const signature = toHexString(input, 3, 6);
			if (chunkHeader === "VP8L" && signature !== "9d012a") return calculateLossless(input);
			throw new TypeError("Invalid WebP");
		}
	}]
]);
var types = Array.from(typeHandlers.keys());
// node_modules/astro/dist/assets/utils/vendor/image-size/detector.js
var firstBytes = /* @__PURE__ */ new Map([
	[0, "heif"],
	[56, "psd"],
	[66, "bmp"],
	[68, "dds"],
	[71, "gif"],
	[73, "tiff"],
	[77, "tiff"],
	[82, "webp"],
	[105, "icns"],
	[137, "png"],
	[255, "jpg"]
]);
function detector(input) {
	const byte = input[0];
	const type = firstBytes.get(byte);
	if (type && typeHandlers.get(type).validate(input)) return type;
	return types.find((imageType) => typeHandlers.get(imageType).validate(input));
}
// node_modules/astro/dist/assets/utils/vendor/image-size/lookup.js
/**
* Return size information based on an Uint8Array
*
* @param {Uint8Array} input
* @returns {ISizeCalculationResult}
*/
function lookup(input) {
	const type = detector(input);
	if (typeof type !== "undefined") {
		const size = typeHandlers.get(type).calculate(input);
		if (size !== void 0) {
			size.type = size.type ?? type;
			return size;
		}
	}
	throw new TypeError("unsupported file type: " + type);
}
// node_modules/astro/dist/assets/utils/metadata.js
/**
* Extracts image metadata such as dimensions, format, and orientation from the provided image data.
*
* @param {Uint8Array} data - The binary data of the image.
* @param {string} [src] - The source path or URL of the image, used for error messages. Optional.
* @return {Promise<Omit<ImageMetadata, 'src' | 'fsPath'>>} A promise that resolves with the extracted metadata, excluding `src` and `fsPath`.
* @throws {AstroError} Throws an error if the image metadata cannot be extracted.
*/
async function imageMetadata(data, src) {
	let result;
	try {
		result = lookup(data);
	} catch {
		throw new AstroError({
			...NoImageMetadata,
			message: NoImageMetadata.message(src)
		});
	}
	if (result.height == null || result.width == null || !result.type) throw new AstroError({
		...NoImageMetadata,
		message: NoImageMetadata.message(src)
	});
	const { width, height, type, orientation } = result;
	const isPortrait = (orientation || 0) >= 5;
	return {
		width: isPortrait ? height : width,
		height: isPortrait ? width : height,
		format: type,
		orientation
	};
}
// node_modules/astro/dist/assets/utils/redirectValidation.js
/**
* Recursively follows HTTP redirects with validation according to the image configuration.
*
* If any of the domains in the redirect chain are not allowed by either `image.remotePatterns`
* or `image.domains`, this function will throw an error for a disallowed redirect.
*
* @param options The options for this fetch call.
*/
async function fetchWithRedirects(options) {
	const { url, headers, imageConfig, fetchFn = globalThis.fetch, redirectLimit = 10, onMaxRedirectsExceeded = (_u) => /* @__PURE__ */ new Error("Maximum redirect depth exceeded"), onMissingLocationHeader = (_s, _u) => /* @__PURE__ */ new Error(`Redirect response ${_s} missing Location header`), onDisallowedRedirect = (_current, _target) => /* @__PURE__ */ new Error(`The image at ${_current} redirected to ${_target}, which is not an allowed remote location.`) } = options;
	if (redirectLimit <= 0) throw onMaxRedirectsExceeded(typeof url === "string" ? url : url.toString());
	const urlString = typeof url === "string" ? url : url.toString();
	const res = await fetchFn(new Request(url, { headers }), { redirect: "manual" });
	if ([
		301,
		302,
		303,
		307,
		308
	].includes(res.status)) {
		const location = res.headers.get("Location");
		if (!location) throw onMissingLocationHeader(res.status, urlString);
		const redirectUrl = new URL(location, urlString).toString();
		if (!isRemoteAllowed(redirectUrl, {
			domains: imageConfig.domains ?? [],
			remotePatterns: imageConfig.remotePatterns ?? []
		})) throw onDisallowedRedirect(urlString, redirectUrl);
		return fetchWithRedirects({
			url: redirectUrl,
			headers,
			imageConfig,
			fetchFn,
			redirectLimit: redirectLimit - 1,
			onMaxRedirectsExceeded,
			onMissingLocationHeader,
			onDisallowedRedirect
		});
	}
	return res;
}
// node_modules/astro/dist/assets/utils/remoteProbe.js
/**
* Infers the dimensions of a remote image by streaming its data and analyzing it progressively until sufficient metadata is available.
*
* @param {string} url - The URL of the remote image from which to infer size metadata.
* @param {RemoteImageConfig} [imageConfig] - Optional image config used to validate remote allowlists.
* @return {Promise<Omit<ImageMetadata, 'src' | 'fsPath'>>} Returns a promise that resolves to an object containing the image dimensions metadata excluding `src` and `fsPath`.
* @throws {AstroError} Thrown when the fetching fails or metadata cannot be extracted.
*/
async function inferRemoteSize(url, imageConfig) {
	if (!URL.canParse(url)) throw new AstroError({
		...FailedToFetchRemoteImageDimensions,
		message: FailedToFetchRemoteImageDimensions.message(url)
	});
	const allowlistConfig = imageConfig ? {
		domains: imageConfig.domains ?? [],
		remotePatterns: imageConfig.remotePatterns ?? []
	} : void 0;
	if (!allowlistConfig) {
		const parsedUrl = new URL(url);
		if (!["http:", "https:"].includes(parsedUrl.protocol)) throw new AstroError({
			...FailedToFetchRemoteImageDimensions,
			message: FailedToFetchRemoteImageDimensions.message(url)
		});
	}
	if (allowlistConfig && !isRemoteAllowed(url, allowlistConfig)) throw new AstroError({
		...RemoteImageNotAllowed,
		message: RemoteImageNotAllowed.message(url)
	});
	let response;
	try {
		response = await fetchWithRedirects({
			url,
			onMaxRedirectsExceeded: (u) => new AstroError({
				...FailedToFetchRemoteImageDimensions,
				message: FailedToFetchRemoteImageDimensions.message(u)
			}),
			onMissingLocationHeader: (_status, u) => new AstroError({
				...FailedToFetchRemoteImageDimensions,
				message: FailedToFetchRemoteImageDimensions.message(u)
			}),
			imageConfig: imageConfig ?? {
				remotePatterns: [],
				domains: []
			}
		});
	} catch (_err) {
		throw new AstroError({
			...FailedToFetchRemoteImageDimensions,
			message: FailedToFetchRemoteImageDimensions.message(url)
		});
	}
	if (allowlistConfig && !isRemoteAllowed(response.url, allowlistConfig)) throw new AstroError({
		...RemoteImageNotAllowed,
		message: RemoteImageNotAllowed.message(url)
	});
	if (!response.body || !response.ok) throw new AstroError({
		...FailedToFetchRemoteImageDimensions,
		message: FailedToFetchRemoteImageDimensions.message(url)
	});
	const reader = response.body.getReader();
	let done, value;
	let accumulatedChunks = /* @__PURE__ */ new Uint8Array();
	while (!done) {
		const readResult = await reader.read();
		done = readResult.done;
		if (done) break;
		if (readResult.value) {
			value = readResult.value;
			let tmp = new Uint8Array(accumulatedChunks.length + value.length);
			tmp.set(accumulatedChunks, 0);
			tmp.set(value, accumulatedChunks.length);
			accumulatedChunks = tmp;
			try {
				const dimensions = await imageMetadata(accumulatedChunks, url);
				if (dimensions) {
					await reader.cancel();
					return dimensions;
				}
			} catch {}
		}
	}
	throw new AstroError({
		...NoImageMetadata,
		message: NoImageMetadata.message(url)
	});
}
// node_modules/astro/dist/assets/services/service.js
function isLocalService(service) {
	if (!service) return false;
	return "transform" in service;
}
function parseQuality(quality) {
	let result = Number.parseInt(quality);
	if (Number.isNaN(result)) return quality;
	return result;
}
var sortNumeric = (a, b) => a - b;
function verifyOptions(options) {
	if (!options.src || !isRemoteImage(options.src) && !isESMImportedImage(options.src)) throw new AstroError({
		...ExpectedImage,
		message: ExpectedImage.message(JSON.stringify(options.src), typeof options.src, JSON.stringify(options, (_, v) => v === void 0 ? null : v))
	});
	if (!isESMImportedImage(options.src)) {
		if (options.src.startsWith("/@fs/") || !isRemotePath(options.src) && !options.src.startsWith("/")) throw new AstroError({
			...LocalImageUsedWrongly,
			message: LocalImageUsedWrongly.message(options.src)
		});
		let missingDimension;
		if (!options.width && !options.height) missingDimension = "both";
		else if (!options.width && options.height) missingDimension = "width";
		else if (options.width && !options.height) missingDimension = "height";
		if (missingDimension) throw new AstroError({
			...MissingImageDimension,
			message: MissingImageDimension.message(missingDimension, options.src)
		});
	} else {
		if (!VALID_SUPPORTED_FORMATS.includes(options.src.format)) throw new AstroError({
			...UnsupportedImageFormat,
			message: UnsupportedImageFormat.message(options.src.format, options.src.src, VALID_SUPPORTED_FORMATS)
		});
		if (options.widths && options.densities) throw new AstroError(IncompatibleDescriptorOptions);
		if (options.src.format !== "svg" && options.format === "svg") throw new AstroError(UnsupportedImageConversion);
	}
}
/**
* Basic local service using the included `_image` endpoint.
* This service intentionally does not implement `transform`.
*
* Example usage:
* ```ts
* const service = {
*  getURL: baseService.getURL,
*  parseURL: baseService.parseURL,
*  getHTMLAttributes: baseService.getHTMLAttributes,
*  async transform(inputBuffer, transformOptions) {...}
* }
* ```
*
* This service adhere to the included services limitations:
* - Only a limited amount of formats are supported.
* - For remote images, `width` and `height` are always required.
*
*/
var baseService = {
	propertiesToHash: DEFAULT_HASH_PROPS,
	validateOptions(options) {
		verifyOptions(options);
		if (!options.format) {
			if (isESMImportedImage(options.src)) options.format = resolveDefaultOutputFormat(options.src.format);
			else {
				const inferred = inferSourceFormat(options.src);
				if (inferred) options.format = resolveDefaultOutputFormat(inferred);
			}
		}
		if (options.width) options.width = Math.round(options.width);
		if (options.height) options.height = Math.round(options.height);
		if (options.layout) delete options.layout;
		if (options.fit === "none") delete options.fit;
		return options;
	},
	getHTMLAttributes(options) {
		const { targetWidth, targetHeight } = getTargetDimensions(options);
		const { src, width, height, format, quality, densities, widths, formats, layout, priority, fit, position, background, ...attributes } = options;
		return {
			...attributes,
			width: targetWidth,
			height: targetHeight,
			loading: attributes.loading ?? "lazy",
			decoding: attributes.decoding ?? "async"
		};
	},
	getSrcSet(options) {
		const { targetWidth, targetHeight } = getTargetDimensions(options);
		const aspectRatio = targetWidth / targetHeight;
		const { widths, densities } = options;
		const targetFormat = options.format;
		let transformedWidths = (widths ?? []).sort(sortNumeric);
		let imageWidth = options.width;
		let maxWidth = Number.POSITIVE_INFINITY;
		if (isESMImportedImage(options.src)) {
			imageWidth = options.src.width;
			maxWidth = imageWidth;
			if (transformedWidths.length > 0 && transformedWidths.at(-1) > maxWidth) {
				transformedWidths = transformedWidths.filter((width) => width <= maxWidth);
				transformedWidths.push(maxWidth);
			}
		}
		transformedWidths = Array.from(new Set(transformedWidths));
		const { width: transformWidth, height: transformHeight, ...transformWithoutDimensions } = options;
		let allWidths = [];
		if (densities) {
			const densityValues = Array.from(new Set(densities.map((density) => {
				if (typeof density === "number") return density;
				else return Number.parseFloat(density);
			})));
			allWidths = densityValues.sort(sortNumeric).map((density) => Math.round(targetWidth * density)).map((width, index) => ({
				width,
				descriptor: `${densityValues[index]}x`
			}));
		} else if (transformedWidths.length > 0) allWidths = transformedWidths.map((width) => ({
			width,
			descriptor: `${width}w`
		}));
		return allWidths.map(({ width, descriptor }) => {
			const height = Math.round(width / aspectRatio);
			return {
				transform: {
					...transformWithoutDimensions,
					width,
					height
				},
				descriptor,
				attributes: targetFormat ? { type: `image/${targetFormat}` } : {}
			};
		});
	},
	getURL(options, imageConfig) {
		const searchParams = new URLSearchParams();
		if (isESMImportedImage(options.src)) searchParams.append("href", options.src.src);
		else if (isRemoteAllowed(options.src, imageConfig)) searchParams.append("href", options.src);
		else return options.src;
		Object.entries({
			w: "width",
			h: "height",
			q: "quality",
			f: "format",
			fit: "fit",
			position: "position",
			background: "background"
		}).forEach(([param, key]) => {
			options[key] && searchParams.append(param, options[key].toString());
		});
		let url = `${joinPaths("/", imageConfig.endpoint.route)}?${searchParams}`;
		if (imageConfig.assetQueryParams) {
			const assetQueryString = imageConfig.assetQueryParams.toString();
			if (assetQueryString) url += "&" + assetQueryString;
		}
		return url;
	},
	parseURL(url) {
		const params = url.searchParams;
		if (!params.has("href")) return;
		return {
			src: params.get("href"),
			width: params.has("w") ? Number.parseInt(params.get("w")) : void 0,
			height: params.has("h") ? Number.parseInt(params.get("h")) : void 0,
			format: params.has("f") ? params.get("f") : void 0,
			quality: params.get("q"),
			fit: params.get("fit"),
			position: params.get("position") ?? void 0,
			background: params.get("background") ?? void 0
		};
	},
	getRemoteSize(url, imageConfig) {
		return inferRemoteSize(url, imageConfig);
	}
};
/**
* Returns the final dimensions of an image based on the user's options.
*
* For local images:
* - If the user specified both width and height, we'll use those.
* - If the user specified only one of them, we'll use the original image's aspect ratio to calculate the other.
* - If the user didn't specify either, we'll use the original image's dimensions.
*
* For remote images:
* - Widths and heights are always required, so we'll use the user's specified width and height.
*/
function getTargetDimensions(options) {
	let targetWidth = options.width;
	let targetHeight = options.height;
	if (isESMImportedImage(options.src)) {
		const aspectRatio = options.src.width / options.src.height;
		if (targetHeight && !targetWidth) targetWidth = Math.round(targetHeight * aspectRatio);
		else if (targetWidth && !targetHeight) targetHeight = Math.round(targetWidth / aspectRatio);
		else if (!targetWidth && !targetHeight) {
			targetWidth = options.src.width;
			targetHeight = options.src.height;
		}
	}
	return {
		targetWidth,
		targetHeight
	};
}
// node_modules/astro/dist/assets/types.js
function isImageMetadata(src) {
	return !!src.fsPath && !Object.prototype.propertyIsEnumerable.call(src, "fsPath");
}
// node_modules/astro/dist/assets/utils/image-asset.js
var RAW_SRC = Symbol.for("astro:image-asset:raw-src");
function getUntrackedImage(image) {
	if (typeof image !== "object" || image === null || !(RAW_SRC in image)) return image;
	const asset = image;
	const copy = {};
	for (const key of Object.keys(asset)) copy[key] = key === "src" ? asset[RAW_SRC] : asset[key];
	Object.defineProperty(copy, "fsPath", {
		value: asset.fsPath,
		enumerable: false
	});
	return copy;
}
// node_modules/astro/dist/assets/utils/deterministic-string.js
/**
* Vendored from deterministic-object-hash@2.0.2 (MIT)
* https://github.com/nicholasgasior/deterministic-object-hash
*
* Only `deterministicString` is needed - the async `deterministicHash` (which
* pulls in `node:crypto`) is intentionally excluded so this module stays
* runtime-agnostic (works in Node, workerd, browsers, etc.).
*/
var objConstructorString = Function.prototype.toString.call(Object);
function isPlainObject(value) {
	if (typeof value !== "object" || value === null || Object.prototype.toString.call(value) !== "[object Object]") return false;
	const proto = Object.getPrototypeOf(value);
	if (proto === null) return true;
	if (!Object.prototype.hasOwnProperty.call(proto, "constructor")) return false;
	return typeof proto.constructor === "function" && proto.constructor instanceof proto.constructor && Function.prototype.toString.call(proto.constructor) === objConstructorString;
}
/** Recursively serializes any JS value into a deterministic string. */
function deterministicString(input) {
	if (typeof input === "string") return JSON.stringify(input);
	else if (typeof input === "symbol" || typeof input === "function") return input.toString();
	else if (typeof input === "bigint") return `${input}n`;
	else if (input === globalThis || input === void 0 || input === null || typeof input === "boolean" || typeof input === "number" || typeof input !== "object") return `${input}`;
	else if (input instanceof Date) return `(${input.constructor.name}:${input.getTime()})`;
	else if (input instanceof RegExp || input instanceof Error || input instanceof WeakMap || input instanceof WeakSet) return `(${input.constructor.name}:${input.toString()})`;
	else if (input instanceof Set) {
		let ret = `(${input.constructor.name}:[`;
		for (const val of input.values()) ret += `${deterministicString(val)},`;
		ret += "])";
		return ret;
	} else if (Array.isArray(input) || input instanceof Int8Array || input instanceof Uint8Array || input instanceof Uint8ClampedArray || input instanceof Int16Array || input instanceof Uint16Array || input instanceof Int32Array || input instanceof Uint32Array || input instanceof Float32Array || input instanceof Float64Array || input instanceof BigInt64Array || input instanceof BigUint64Array) {
		let ret = `(${input.constructor.name}:[`;
		for (const [k, v] of input.entries()) ret += `(${k}:${deterministicString(v)}),`;
		ret += "])";
		return ret;
	} else if (input instanceof ArrayBuffer || input instanceof SharedArrayBuffer) {
		if (input.byteLength % 8 === 0) return deterministicString(new BigUint64Array(input));
		else if (input.byteLength % 4 === 0) return deterministicString(new Uint32Array(input));
		else if (input.byteLength % 2 === 0) return deterministicString(new Uint16Array(input));
		else {
			let ret = "(";
			for (let i = 0; i < input.byteLength; i++) ret += `${deterministicString(new Uint8Array(input.slice(i, i + 1)))},`;
			ret += ")";
			return ret;
		}
	} else if (input instanceof Map || isPlainObject(input)) {
		const sortable = [];
		const entries = input instanceof Map ? input.entries() : Object.entries(input);
		for (const [k, v] of entries) sortable.push([deterministicString(k), deterministicString(v)]);
		if (!(input instanceof Map)) {
			const symbolKeys = Object.getOwnPropertySymbols(input);
			for (let i = 0; i < symbolKeys.length; i++) sortable.push([deterministicString(symbolKeys[i]), deterministicString(input[symbolKeys[i]])]);
		}
		sortable.sort(([a], [b]) => a.localeCompare(b));
		let ret = `(${input.constructor.name}:[`;
		for (const [k, v] of sortable) ret += `(${k}:${v}),`;
		ret += "])";
		return ret;
	}
	const allEntries = [];
	for (const k in input) allEntries.push([deterministicString(k), deterministicString(input[k])]);
	const symbolKeys = Object.getOwnPropertySymbols(input);
	for (let i = 0; i < symbolKeys.length; i++) allEntries.push([deterministicString(symbolKeys[i]), deterministicString(input[symbolKeys[i]])]);
	allEntries.sort(([a], [b]) => a.localeCompare(b));
	let ret = `(${input.constructor.name}:[`;
	for (const [k, v] of allEntries) ret += `(${k}:${v}),`;
	ret += "])";
	return ret;
}
// node_modules/astro/dist/assets/utils/hash.js
var INVALID_CHAR_REGEX = /[\u0000-\u001F"#$%&*+,:;<=>?[\]^`{|}\u007F]/g;
/** Pure-string replacement for `path.posix.basename` (no node: import). */
function basename(filePath, ext) {
	let end = filePath.length;
	while (end > 0 && filePath[end - 1] === "/") end--;
	const stripped = filePath.slice(0, end);
	const lastSlash = stripped.lastIndexOf("/");
	const base = lastSlash === -1 ? stripped : stripped.slice(lastSlash + 1);
	if (ext && base.endsWith(ext)) return base.slice(0, base.length - ext.length);
	return base;
}
/** Pure-string replacement for `path.posix.dirname` (no node: import). */
function dirname(filePath) {
	const lastSlash = filePath.lastIndexOf("/");
	if (lastSlash === -1) return ".";
	if (lastSlash === 0) return "/";
	return filePath.slice(0, lastSlash);
}
/** Pure-string replacement for `path.posix.extname` (no node: import). */
function extname(filePath) {
	const base = basename(filePath);
	const dotIndex = base.lastIndexOf(".");
	if (dotIndex <= 0) return "";
	return base.slice(dotIndex);
}
/**
* Converts a file path and transformation properties into a formatted filename.
*
* `<prefixDirname>/<baseFilename>_<hash><outputExtension>`
*/
function propsToFilename(filePath, transform, hash) {
	let filename = decodeURIComponent(removeQueryString(filePath));
	const ext = extname(filename);
	if (filePath.startsWith("data:")) filename = shorthash(filePath);
	else filename = basename(filename, ext).replace(INVALID_CHAR_REGEX, "_");
	const prefixDirname = isESMImportedImage(transform.src) ? dirname(filePath) : "";
	let outputExt = transform.format ? `.${transform.format}` : ext;
	return `${prefixDirname}/${filename}_${hash}${outputExt}`;
}
/** Hashes the subset of transform properties that affect the output image. */
function hashTransform(transform, imageService, propertiesToHash) {
	const hashFields = propertiesToHash.reduce((acc, prop) => {
		acc[prop] = transform[prop];
		return acc;
	}, { imageService });
	return shorthash(deterministicString(hashFields));
}
// node_modules/astro/dist/assets/utils/url.js
/**
* Placeholder base URL used when creating URL objects from relative paths.
* This avoids collisions with actual URLs (e.g., absolute asset prefixes like 'http://localhost:4321')
*/
var PLACEHOLDER_BASE = "astro://placeholder";
/**
* Creates a URL object from a path or URL string, using a placeholder base for relative paths.
* This allows safe manipulation of URLs using the native URL API.
*
* @param pathOrUrl - A relative path (e.g., '/_astro/image.png') or absolute URL (e.g., 'https://cdn.example.com/...')
* @returns A URL object that can be safely manipulated
*/
function createPlaceholderURL(pathOrUrl) {
	return new URL(pathOrUrl, PLACEHOLDER_BASE);
}
/**
* Extracts the pathname and search parameters from a URL created with `createPlaceholderURL`.
* Removes the placeholder base, returning just the path and query string.
*
* @param url - A URL object created with `createPlaceholderURL`
* @returns The URL string without the placeholder base
*/
function stringifyPlaceholderURL(url) {
	return url.href.replace(PLACEHOLDER_BASE, "");
}
// node_modules/astro/dist/assets/utils/static-image.js
function resolveStaticImage(options, hashProperties, originalFSPath, config) {
	const ESMImportedImageSrc = isESMImportedImage(options.src) ? options.src.src : options.src;
	const assetPrefix = getAssetsPrefix(fileExtension(ESMImportedImageSrc), config.assetsPrefix);
	const finalOriginalPath = removeBase(removeBase(ESMImportedImageSrc, config.base), assetPrefix);
	const hash = hashTransform(options, config.serviceEntrypoint, hashProperties);
	const finalFilePath = prependForwardSlash(joinPaths(isESMImportedImage(options.src) ? "" : config.assetsDir, prependForwardSlash(propsToFilename(finalOriginalPath, options, hash))));
	const url = createPlaceholderURL(config.assetsPrefix ? encodeURI(joinPaths(assetPrefix, finalFilePath)) : encodeURI(prependForwardSlash(joinPaths(config.base, finalFilePath))));
	if (config.assetQueryParams) config.assetQueryParams.forEach((value, key) => {
		url.searchParams.set(key, value);
	});
	return {
		url: stringifyPlaceholderURL(url),
		image: {
			originalPath: finalOriginalPath,
			hash,
			finalPath: finalFilePath,
			originalSrcPath: originalFSPath,
			transform: typeof options.src === "function" ? {
				...options,
				src: { ...options.src }
			} : options
		}
	};
}
// node_modules/astro/dist/assets/internal.js
var cssFitValues = [
	"fill",
	"contain",
	"cover",
	"scale-down"
];
var configuredImageService;
async function getConfiguredImageService() {
	if (!configuredImageService) {
		const { default: service } = await import("./sharp_pGs9dNRD.mjs").catch((e) => {
			const error = new AstroError(InvalidImageService);
			error.cause = e;
			throw error;
		});
		configuredImageService = service;
	}
	return configuredImageService;
}
function getStaticImageConfig(imageConfig) {
	return isCollectingStaticImages() ? imageConfig.staticImageConfig : void 0;
}
async function getImage$1(options, imageConfig, logger) {
	if (!options || typeof options !== "object") throw new AstroError({
		...ExpectedImageOptions,
		message: ExpectedImageOptions.message(JSON.stringify(options))
	});
	if (typeof options.src === "undefined") throw new AstroError({
		...ExpectedImage,
		message: ExpectedImage.message(options.src, "undefined", JSON.stringify(options))
	});
	if (isImageMetadata(options)) throw new AstroError(ExpectedNotESMImage);
	const service = await getConfiguredImageService();
	const resolvedOptions = {
		...options,
		src: await resolveSrc(options.src)
	};
	let originalWidth;
	let originalHeight;
	if (resolvedOptions.inferSize) {
		delete resolvedOptions.inferSize;
		if (isRemoteImage(resolvedOptions.src) && isRemotePath(resolvedOptions.src)) {
			if (!isRemoteAllowed(resolvedOptions.src, imageConfig)) throw new AstroError({
				...RemoteImageNotAllowed,
				message: RemoteImageNotAllowed.message(resolvedOptions.src)
			});
			const getRemoteSize = (url) => service.getRemoteSize?.(url, imageConfig, logger) ?? inferRemoteSize(url, imageConfig);
			const result = await getRemoteSize(resolvedOptions.src);
			resolvedOptions.width ??= result.width;
			resolvedOptions.height ??= result.height;
			if (result.format) resolvedOptions.format ??= resolveDefaultOutputFormat(result.format);
			originalWidth = result.width;
			originalHeight = result.height;
		}
	}
	const originalFilePath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : void 0;
	const clonedSrc = getUntrackedImage(resolvedOptions.src);
	if (isESMImportedImage(clonedSrc)) {
		originalWidth = clonedSrc.width;
		originalHeight = clonedSrc.height;
	}
	if (originalWidth && originalHeight) {
		const aspectRatio = originalWidth / originalHeight;
		if (resolvedOptions.height && !resolvedOptions.width) resolvedOptions.width = Math.round(resolvedOptions.height * aspectRatio);
		else if (resolvedOptions.width && !resolvedOptions.height) resolvedOptions.height = Math.round(resolvedOptions.width / aspectRatio);
		else if (!resolvedOptions.width && !resolvedOptions.height) {
			resolvedOptions.width = originalWidth;
			resolvedOptions.height = originalHeight;
		}
	}
	resolvedOptions.src = clonedSrc;
	const layout = options.layout ?? imageConfig.layout ?? "none";
	if (resolvedOptions.priority) {
		resolvedOptions.loading ??= "eager";
		resolvedOptions.decoding ??= "sync";
		resolvedOptions.fetchpriority ??= "high";
		delete resolvedOptions.priority;
	} else {
		resolvedOptions.loading ??= "lazy";
		resolvedOptions.decoding ??= "async";
		resolvedOptions.fetchpriority ??= void 0;
	}
	if (layout !== "none") {
		resolvedOptions.widths ||= getWidths({
			width: resolvedOptions.width,
			layout,
			originalWidth,
			breakpoints: imageConfig.breakpoints?.length ? imageConfig.breakpoints : isLocalService(service) ? LIMITED_RESOLUTIONS : DEFAULT_RESOLUTIONS
		});
		resolvedOptions.sizes ||= getSizesAttribute({
			width: resolvedOptions.width,
			layout
		});
		delete resolvedOptions.densities;
		resolvedOptions["data-astro-image"] = layout;
		if (resolvedOptions.fit && cssFitValues.includes(resolvedOptions.fit)) resolvedOptions["data-astro-image-fit"] = resolvedOptions.fit;
		resolvedOptions["data-astro-image-pos"] = (resolvedOptions.position || "center").replace(/\s+/g, "-");
	}
	const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig, logger) : resolvedOptions;
	validatedOptions.format ??= await peekRemoteFormatForStaticEmit(validatedOptions, imageConfig, service, logger);
	const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig, logger) : [];
	const lazyImageURLFactory = (getValue) => {
		let cached = null;
		return () => cached ??= getValue();
	};
	const initialImageURL = await service.getURL(validatedOptions, imageConfig, logger);
	let lazyImageURL = lazyImageURLFactory(() => initialImageURL);
	const matchesValidatedTransform = (transform) => transform.width === validatedOptions.width && transform.height === validatedOptions.height && transform.format === validatedOptions.format;
	let srcSets = await Promise.all(srcSetTransforms.map(async (srcSet) => {
		return {
			transform: srcSet.transform,
			url: matchesValidatedTransform(srcSet.transform) ? initialImageURL : await service.getURL(srcSet.transform, imageConfig, logger),
			descriptor: srcSet.descriptor,
			attributes: srcSet.attributes
		};
	}));
	const staticImageConfig = getStaticImageConfig(imageConfig);
	if (isLocalService(service) && staticImageConfig && !(isRemoteImage(validatedOptions.src) && initialImageURL === validatedOptions.src)) {
		const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
		const addStaticImage = (transform) => {
			const { url, image } = resolveStaticImage(transform, propsToHash, originalFilePath, {
				...staticImageConfig,
				serviceEntrypoint: imageConfig.service.entrypoint,
				assetQueryParams: imageConfig.assetQueryParams
			});
			recordStaticImage(image);
			return url;
		};
		lazyImageURL = lazyImageURLFactory(() => addStaticImage(validatedOptions));
		srcSets = srcSetTransforms.map((srcSet) => {
			return {
				transform: srcSet.transform,
				url: matchesValidatedTransform(srcSet.transform) ? lazyImageURL() : addStaticImage(srcSet.transform),
				descriptor: srcSet.descriptor,
				attributes: srcSet.attributes
			};
		});
	} else if (imageConfig.assetQueryParams) {
		const imageURLObj = createPlaceholderURL(initialImageURL);
		imageConfig.assetQueryParams.forEach((value, key) => {
			imageURLObj.searchParams.set(key, value);
		});
		lazyImageURL = lazyImageURLFactory(() => stringifyPlaceholderURL(imageURLObj));
		srcSets = srcSets.map((srcSet) => {
			const urlObj = createPlaceholderURL(srcSet.url);
			imageConfig.assetQueryParams.forEach((value, key) => {
				urlObj.searchParams.set(key, value);
			});
			return {
				...srcSet,
				url: stringifyPlaceholderURL(urlObj)
			};
		});
	}
	return {
		rawOptions: resolvedOptions,
		options: validatedOptions,
		get src() {
			return lazyImageURL();
		},
		srcSet: {
			values: srcSets,
			attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
		},
		attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig, logger) : {}
	};
}
/**
* Build-time only: probes the remote URL via `getRemoteSize` so we can commit a real `format`
* before the filename is hashed. Returns undefined when no peek applies (SSR, non-remote,
* disallowed remote, external service, missing `getRemoteSize`, or probe failure) — the
* transform service handles those by detecting from the actual buffer.
*/
async function peekRemoteFormatForStaticEmit(options, imageConfig, service, logger) {
	if (!isRemoteImage(options.src) || !isRemoteAllowed(options.src, imageConfig) || !getStaticImageConfig(imageConfig) || !isLocalService(service) || !service.getRemoteSize) return;
	try {
		return resolveDefaultOutputFormat((await service.getRemoteSize(options.src, imageConfig, logger)).format);
	} catch {
		return;
	}
}
// \0virtual:astro:get-image
var imageConfig = {
	"endpoint": { "route": "/_image" },
	"service": {
		"entrypoint": "astro/assets/services/sharp",
		"config": {}
	},
	"dangerouslyProcessSVG": false,
	"domains": [],
	"remotePatterns": [],
	"responsiveStyles": false
};
Object.defineProperties(imageConfig, {
	assetQueryParams: {
		value: void 0,
		enumerable: false,
		configurable: true
	},
	staticImageConfig: {
		value: {
			"base": "/",
			"assetsDir": "_astro"
		},
		enumerable: false,
		configurable: true
	}
});
var _astroLogger = createConsoleLogger({ level });
var _runtimeLogger = {
	info: (message) => _astroLogger.info(null, message),
	warn: (message) => _astroLogger.warn(null, message),
	error: (message) => _astroLogger.error(null, message)
};
var getImage = async (options) => await getImage$1(options, imageConfig, _runtimeLogger);
export { getImage, resolveDefaultOutputFormat as i, parseQuality as n, detector as r, baseService as t };
