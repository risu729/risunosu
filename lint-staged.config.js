import { dirname, relative, resolve } from "node:path";
import ts from "typescript";

/**
 * @type {(tsconfigFilename: string) => string}
 */
const getTscFilesPattern = (tsconfigFilename) => {
	const configPath = ts.findConfigFile(
		import.meta.dirname,
		ts.sys.fileExists,
		tsconfigFilename,
	);
	if (!configPath) {
		throw new Error(`${tsconfigFilename} is not found`);
	}
	const { config } = ts.readConfigFile(configPath, ts.sys.readFile);
	const { fileNames } = ts.parseJsonConfigFileContent(
		config,
		ts.sys,
		resolve(import.meta.dirname, dirname(tsconfigFilename)),
	);
	return `(${[configPath, ...fileNames]
		.map((path) => relative(import.meta.dirname, path))
		.join("|")})`;
};

/**
 * @type {import("lint-staged").Configuration}
 */
const config = {
	".gitignore?(-sync)": () => "bun run ignore-sync",

	"biome.jsonc": () =>
		process.env["CI"]
			? "biome ci --error-on-warnings ."
			: "bun run check:biome",

	"*.{js,mjs,cjs,jsx,mjsx,ts,mts,cts,tsx,mtsx,json,jsonc}": process.env["CI"]
		? "biome ci --error-on-warnings"
		: "biome check --apply-unsafe --error-on-warnings",

	"prettier.config.js": () =>
		process.env["CI"] ? "prettier --check ." : "bun run check:prettier",

	"*.{md,yml,yaml,css}": process.env["CI"]
		? "prettier --check"
		: "prettier --write --cache",

	"cspell.config.cjs": () => "bun run check:cspell",

	"*": `cspell --no-must-find-files${process.env["CI"] ? "" : " --cache"}`,
};

/**
 * @type {import("lint-staged").Configuration}
 */
const ciOnlyConfig = {
	"(*.{js,mjs,cjs,jsx,mjsx,ts,mts,cts,tsx,mtsx,mdx,json}|.github/workflows/*|.husky/*)":
		() => "bun run check:knip",

	[getTscFilesPattern("tsconfig.base.json")]: () => "bun run check:tsc:base",

	[getTscFilesPattern("tsconfig.src.json")]: () => [
		// generate type definitions (e.g. next-env.d.ts)
		"bun run build",
		"bun run check:tsc:src",
	],
};

/**
 * @type {import("lint-staged").Configuration}
 */
export default { ...config, ...(process.env["CI"] ? ciOnlyConfig : {}) };
