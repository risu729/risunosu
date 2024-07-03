import { Box, Divider, Stack, Typography } from "@mui/material";
import type { Metadata } from "next";
import Image from "next/image";
import risuIcon from "../../../public/risu.png";
import { Certifications } from "./certifications";
import { History } from "./history";

export const metadata: Metadata = {
	title: "About",
};

const Page = () => {
	return (
		<Stack padding={4} spacing={4}>
			<Stack direction="row" spacing={1} alignItems="center">
				<Box width="15%" minWidth="3rem" maxWidth="10rem" height="auto">
					<Image
						src={risuIcon}
						alt=""
						sizes="20vw"
						style={{
							width: "100%",
							height: "auto",
							objectFit: "contain",
						}}
					/>
				</Box>
				<Divider orientation="vertical" aria-hidden="true" flexItem={true} />
				<Stack direction="row" spacing={1} alignItems="end">
					<Typography variant="h3" component="h1">
						Taku Kodama
					</Typography>
					<Typography
						variant="h5"
						component="p"
						paddingBottom="0.25rem"
						sx={{
							// cspell:ignore palt
							fontFeatureSettings: "'palt' 1",
						}}
					>
						{/* use full-width parentheses to align bottom baseline */}
						（児玉 拓）
					</Typography>
				</Stack>
			</Stack>
			<Typography>一般社団法人lirfa代表理事・Larva06代表</Typography>
			<Certifications />
			<History />
		</Stack>
	);
};

export default Page;
