import type { KnipConfig } from "knip";

const config: KnipConfig = {
	ignoreDependencies: [
		// cannot detect usage because the binary is named commitlint
		// ref: https://knip.dev/guides/handling-issues/#example
		"@commitlint/cli",
		// used internally in Next.js
		"sharp",
	],
};

export default config;
