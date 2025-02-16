import { Box, Grid2 } from "@mui/material";
import type { Metadata } from "next";
import type { JSX } from "react";
import { accounts } from "./accounts";
import { ClientAccounts } from "./clientAccounts";
import { SocialCard } from "./socialCard";

export const metadata: Metadata = {
	title: "Social",
};

const Page = (): JSX.Element => {
	const shownAccounts = accounts.filter(({ hidden }) => !hidden);

	return (
		<Box padding={4}>
			<Grid2 container={true} spacing={2} alignItems="stretch">
				{shownAccounts.map((props) => {
					return (
						<Grid2
							key={`${props.service}${props.name}`}
							size={{ xs: 12, sm: 6 }}
						>
							<SocialCard {...props} />
						</Grid2>
					);
				})}
				<ClientAccounts />
			</Grid2>
		</Box>
	);
};

export default Page;
