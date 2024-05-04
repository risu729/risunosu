"use client";

import { Close as CloseIcon, Menu as MenuIcon } from "@mui/icons-material";
import {
	AppBar,
	IconButton,
	Link,
	type LinkProps,
	Stack,
	Toolbar,
	Typography,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Image from "next/image";
import NextLink from "next/link";
import { useState } from "react";

const navigationItems = ["home", "about", "works", "social"];

const Menu = ({
	showsHome = false,
	...props
}: Omit<LinkProps, "href"> & { showsHome?: boolean }) => {
	return navigationItems
		.filter((item) => showsHome || item !== "home")
		.map((item) => {
			return (
				<Link
					component={NextLink}
					key={item}
					href={`/${item === "home" ? "" : item}`}
					textTransform="capitalize"
					underline="hover"
					color="inherit"
					{...props}
				>
					{item}
				</Link>
			);
		});
};

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<AppBar
				component="header"
				position="relative"
				color="inherit"
				elevation={0}
			>
				<Toolbar
					sx={{
						maxHeight: "10svh",
						justifyContent: "space-between",
						paddingX: {
							xs: 2,
							sm: 8,
						},
						paddingY: 2,
						borderBottom: 1,
						borderColor: "grey.500",
					}}
				>
					<Link
						component={NextLink}
						href="/"
						underline="none"
						color="inherit"
						aria-label="Home"
					>
						<Stack direction="row" alignItems="center" spacing={1}>
							<Image src="/risu.png" alt="" width={40} height={40} />
							<Typography fontSize="1.5rem" fontWeight="bold">
								Risunosu
							</Typography>
						</Stack>
					</Link>
					<IconButton
						aria-label="メニューを開く"
						onClick={() => {
							setOpen(true);
						}}
						sx={{
							// disable hover effect
							":hover": { backgroundColor: "transparent" },
							display: { xs: "inherit", sm: "none" },
						}}
					>
						{open ? <CloseIcon /> : <MenuIcon />}
					</IconButton>
					<Stack
						component="nav"
						direction="row"
						justifyContent="space-between"
						spacing={4}
						sx={{ display: { xs: "none", sm: "flex" } }}
					>
						<Menu />
					</Stack>
				</Toolbar>
			</AppBar>
			<Drawer
				component="nav"
				open={open}
				onClose={() => {
					setOpen(false);
				}}
				anchor="right"
				ModalProps={{
					// better open performance on mobile
					keepMounted: true,
				}}
				sx={{ display: { xs: "flex", sm: "none" } }}
			>
				<Stack alignItems="center" padding={10} spacing={6}>
					<Menu
						showsHome={true}
						onClick={() => {
							setOpen(false);
						}}
					/>
				</Stack>
			</Drawer>
		</>
	);
};

export default Header;
