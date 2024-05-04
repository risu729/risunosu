import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { theme } from "../theme";
import Footer from "./footer";
import Header from "./header";

export const metadata: Metadata = {
	title: {
		template: "%s | Risunosu",
		default: "Risunosu",
	},
};

const Layout = ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	return (
		<html lang="ja">
			<AppRouterCacheProvider>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Container
						component="body"
						maxWidth="md"
						sx={{ minHeight: "100dvh" }}
					>
						<Header />
						<Container component="main">{children}</Container>
						<Footer />
						<Analytics />
						<SpeedInsights />
					</Container>
				</ThemeProvider>
			</AppRouterCacheProvider>
		</html>
	);
};

export default Layout;
