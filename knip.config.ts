import type { KnipConfig } from "knip";

const config: KnipConfig = {
	ignoreDependencies: [
		// cannot detect usage because the binary is named commitlint
		// ref: https://knip.dev/guides/handling-issues/#example
		"@commitlint/cli",
	],
};

export default config;
