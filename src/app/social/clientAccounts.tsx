"use client";

import { Button, Collapse, Divider } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import { accounts } from "./accounts";
import { SocialCard } from "./socialCard";

export const ClientAccounts = () => {
	const [showAll, setShowAll] = useState(false);

	const hiddenAccounts = accounts.filter(({ hidden }) => hidden);

	return (
		<>
			<Grid xs={12} display="flex" justifyContent="center" alignItems="center">
				{showAll ? (
					<Divider flexItem={true} sx={{ width: "98%" }} />
				) : (
					<Button onClick={() => setShowAll(true)}>more...</Button>
				)}
			</Grid>
			<Collapse
				in={showAll}
				timeout="auto"
				unmountOnExit={true}
				component={Grid}
			>
				<Grid container={true} spacing={2} alignItems="stretch">
					{showAll &&
						hiddenAccounts.map((props) => {
							return (
								<Grid key={`${props.service}${props.name}`} xs={12} sm={6}>
									<SocialCard {...props} />
								</Grid>
							);
						})}
				</Grid>
			</Collapse>
		</>
	);
};
