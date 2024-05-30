import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import type { Metadata } from "next";
import { accounts } from "./accounts";
import { ClientAccounts } from "./clientAccounts";
import { SocialCard } from "./socialCard";

export const metadata: Metadata = {
	title: "Social",
};

const Page = () => {
	const shownAccounts = accounts.filter(({ hidden }) => !hidden);

	return (
		<Box padding={4}>
			<Grid container={true} spacing={2} alignItems="stretch">
				{shownAccounts.map((props) => {
					return (
						<Grid key={`${props.service}${props.name}`} xs={12} sm={6}>
							<SocialCard {...props} />
						</Grid>
					);
				})}
				<ClientAccounts />
			</Grid>
		</Box>
	);
};

export default Page;
