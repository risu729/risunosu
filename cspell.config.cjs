/**
 * @type {import("@cspell/cspell-types").CSpellUserSettings}
 */
module.exports = {
	version: "0.2",
	language: "en",
	dictionaries: ["typescript", "node", "npm", "bash"],
	enableGlobDot: true,
	useGitignore: true,
	ignorePaths: [
		".git/",
		// ignore auto-generated files
		".gitignore",
		"bun.lockb",
		// ignore license files
		"LICENSE",
	],
	words: [
		"risu",
		"risunosu",
		"erutcurts",
		"nextjs",
		"bunfig",
		"lockb",
		"biomejs",
		"knip",
		"commitlint",
		"automerge",
		"mjsx",
		"mtsx",
	],
};
