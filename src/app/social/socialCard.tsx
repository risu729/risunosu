import { LockOutlined } from "@mui/icons-material";
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Grid2,
	Stack,
	Typography,
} from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";
import type { JSX } from "react";
import type { Account } from "./accounts";

const SocialInfo = ({
	name,
	service,
	logo: Logo,
	privateAccount,
	description,
}: Account): JSX.Element => {
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
				<Grid2
					container={true}
					spacing={1}
					alignItems={{
						xs: "flex-start",
						sm: "center",
					}}
				>
					<Grid2 size={{ xs: 12, md: "auto" }}>
						<Typography component="h2" variant="h6">
							{service}
						</Typography>
					</Grid2>
					<Grid2>
						<Stack direction="row" alignItems="center" spacing={1}>
							<Typography>{name}</Typography>
							{privateAccount && <LockOutlined fontSize="small" />}
						</Stack>
					</Grid2>
					{description && <Grid2 size={12}>{description}</Grid2>}
				</Grid2>
			</CardContent>
		</Stack>
	);
};

export const SocialCard = (props: Account): JSX.Element => {
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
