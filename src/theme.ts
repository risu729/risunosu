"use client";

import { deepPurple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
// cspell:ignore noto
import { Noto_Sans_JP } from "next/font/google";

const noto = Noto_Sans_JP({
	preload: false,
});

export const theme = createTheme({
	typography: {
		fontFamily: noto.style.fontFamily,
	},
	palette: {
		primary: deepPurple,
		secondary: deepPurple,
	},
	components: {
		// biome-ignore lint/style/useNamingConvention: following MUI's naming convention
		MuiTypography: {
			styleOverrides: {
				// enable auto-phrase word break for all Typography components
				root: ({ theme }) =>
					theme.unstable_sx({
						wordBreak: "auto-phrase",
					}),
			},
		},
	},
});
