"use client";

import { Button, Collapse, Divider, Grid2 } from "@mui/material";
import { useState } from "react";
import { accounts } from "./accounts";
import { SocialCard } from "./socialCard";

export const ClientAccounts = () => {
	const [showAll, setShowAll] = useState(false);

	const hiddenAccounts = accounts.filter(({ hidden }) => hidden);

	return (
		<>
			<Grid2
				size={12}
				display="flex"
				justifyContent="center"
				alignItems="center"
			>
				{showAll ? (
					<Divider flexItem={true} sx={{ width: "98%" }} />
				) : (
					<Button onClick={() => setShowAll(true)}>more...</Button>
				)}
			</Grid2>
			<Collapse
				in={showAll}
				timeout="auto"
				unmountOnExit={true}
				component={Grid2}
			>
				<Grid2 container={true} spacing={2} alignItems="stretch">
					{showAll &&
						hiddenAccounts.map((props) => {
							return (
								<Grid2
									key={`${props.service}${props.name}`}
									size={{ xs: 12, sm: 6 }}
								>
									<SocialCard {...props} />
								</Grid2>
							);
						})}
				</Grid2>
			</Collapse>
		</>
	);
};
