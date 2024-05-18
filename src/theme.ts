"use client";

import { deepPurple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
// cspell:ignore roboto
import { Roboto } from "next/font/google";

const roboto = Roboto({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

export const theme = createTheme({
	typography: {
		fontFamily: roboto.style.fontFamily,
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
