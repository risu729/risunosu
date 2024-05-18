import { LockOutlined } from "@mui/icons-material";
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Stack,
	Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import NextLink from "next/link";
import type { Account } from "./accounts";

const SocialInfo = ({
	name,
	service,
	logo: Logo,
	privateAccount,
	description,
}: Account) => {
	return (
		<Stack
			direction="row"
			alignItems="center"
			sx={{
				height: "100%",
				justifyContent: "center",
				alignContent: "center",
			}}
		>
			<CardMedia
				sx={{
					width: "25%",
					maxWidth: "100px",
					maxHeight: "100px",
					// guidelines of logos
					minWidth: "60px",
					minHeight: "60px",
				}}
			>
				{"src" in Logo ? (
					<Image
						src={Logo}
						alt=""
						style={{
							width: "50%",
							height: "50%",
							// guidelines of logos
							margin: "25%",
						}}
					/>
				) : (
					<Logo
						sx={{
							width: "50%",
							height: "50%",
							// guidelines of logos
							margin: "25%",
						}}
					/>
				)}
			</CardMedia>
			<CardContent
				sx={{
					width: {
						xs: "100%",
						sm: "75%",
					},
				}}
			>
				<Grid
					container={true}
					spacing={1}
					alignItems={{
						xs: "flex-start",
						sm: "center",
					}}
				>
					<Grid xs={12} md="auto">
						<Typography component="h2" variant="h6">
							{service}
						</Typography>
					</Grid>
					<Grid>
						<Stack direction="row" alignItems="center" spacing={1}>
							<Typography>{name}</Typography>
							{privateAccount && <LockOutlined fontSize="small" />}
						</Stack>
					</Grid>
					{description && <Grid xs={12}>{description}</Grid>}
				</Grid>
			</CardContent>
		</Stack>
	);
};

export const SocialCard = (props: Account) => {
	return (
		<Card
			sx={{
				borderRadius: 2,
				...(props.href
					? {
							":hover": {
								boxShadow: 4,
							},
						}
					: {}),
				height: "100%",
			}}
		>
			{props.href ? (
				<CardActionArea
					LinkComponent={NextLink}
					href={props.href}
					target="_blank"
					rel="noreferrer"
					sx={{
						height: "100%",
					}}
				>
					<SocialInfo {...props} />
				</CardActionArea>
			) : (
				<SocialInfo {...props} />
			)}
		</Card>
	);
};
