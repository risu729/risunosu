import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Stack,
	Typography,
} from "@mui/material";
import Image, { type StaticImageData } from "next/image";
import NextLink from "next/link";
import type { ReactNode } from "react";
import astroLogo from "../../public/logo/astro.svg";
import erutcurtsLogo from "../../public/logo/erutcurts.png";
import larva06Logo from "../../public/logo/larva06.svg";

const Content = ({
	name,
	iconSrc,
	href,
	children,
}: {
	name: string;
	iconSrc: StaticImageData;
	href: string;
	children: ReactNode;
}) => {
	return (
		<Card
			sx={{
				borderRadius: 2,
				":hover": {
					boxShadow: 4,
				},
			}}
		>
			<CardActionArea
				LinkComponent={NextLink}
				href={href}
				target="_blank"
				rel="noreferrer"
			>
				<Stack
					direction={{
						xs: "column",
						sm: "row",
					}}
					alignItems="center"
					padding={{
						xs: 2,
						sm: 4,
					}}
				>
					<CardMedia
						sx={{
							width: "25%",
						}}
					>
						<Image
							src={iconSrc}
							alt={`${name}のアイコン`}
							style={{
								width: "100%",
								height: "100%",
								maxWidth: "150px",
							}}
						/>
					</CardMedia>
					<CardContent
						sx={{
							width: {
								xs: "100%",
								sm: "75%",
							},
						}}
					>
						<Stack
							spacing={2}
							alignItems={{
								xs: "flex-start",
								sm: "center",
							}}
						>
							<Typography component="h2" variant="h4">
								{name}
							</Typography>
							{children}
						</Stack>
					</CardContent>
				</Stack>
			</CardActionArea>
		</Card>
	);
};

const Page = () => {
	return (
		<Stack padding={4} spacing={4}>
			<Content name="Larva06" iconSrc={larva06Logo} href="https://larva06.com">
				<Typography>中高生による中高生研究者採掘メディア</Typography>
			</Content>
			<Content
				name="Erutcurts"
				iconSrc={erutcurtsLogo}
				href="https://discord.com/api/oauth2/authorize?client_id=989728847899541504&permissions=274878024704&scope=bot%20applications.commands"
			>
				<Typography>
					{/* cspell:ignore mcstructure mcpack */}
					Minecraft Bedrock Editionからエクスポートされた .mcstructureファイル
					を .mcpack ファイルなどに変換するDiscord Bot
				</Typography>
			</Content>
			<Content
				// cspell:ignore astro
				name="astro-better-image-service"
				iconSrc={astroLogo}
				href="https://github.com/risu729/astro-better-image-service#readme"
			>
				<Typography>
					画像の最適化と形式変換を行うAstroインテグレーション
				</Typography>
			</Content>
		</Stack>
	);
};

export default Page;
