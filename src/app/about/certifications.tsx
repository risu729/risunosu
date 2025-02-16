"use client";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
	Box,
	Collapse,
	IconButton,
	List,
	ListItem,
	Stack,
	Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Fragment, type JSX, type ReactNode, useState } from "react";

const CertificationWithDetails = ({
	text,
	children,
}: {
	text: string;
	children: ReactNode;
}): JSX.Element => {
	const [details, setDetails] = useState(false);

	return (
		<ListItem sx={{ display: "list-item" }}>
			{text}
			<IconButton
				onClick={(): void => {
					setDetails(!details);
				}}
				sx={{
					marginLeft: 1,
					padding: 0,
				}}
			>
				{details ? <ExpandLess /> : <ExpandMore />}
			</IconButton>
			<Collapse
				in={details}
				unmountOnExit={true}
				sx={{
					paddingTop: 1,
				}}
			>
				{children}
			</Collapse>
		</ListItem>
	);
};

const Ib = (): JSX.Element => {
	const scores = [
		{
			name: "English B HL",
			score: 5,
			fullScore: 7,
		},
		{
			name: "Japanese A: Literature SL",
			score: 7,
			fullScore: 7,
		},
		{
			name: "Mathematics Analysis & Approaches HL",
			score: 6,
			fullScore: 7,
		},
		{
			name: "Physics HL",
			score: 6,
			fullScore: 7,
		},
		{
			name: "Chemistry SL",
			score: 6,
			fullScore: 7,
		},
		{
			name: "Economics SL",
			score: 4,
			fullScore: 7,
		},
		{
			name: "EE & TOK Points",
			score: 2,
			fullScore: 3,
			details: [
				{
					name: "Extended Essay (Mathematics in English)",
					score: "B",
					fullScore: "A-E",
				},
				{
					name: "Theory of Knowledge (in Japanese)",
					score: "C",
					fullScore: "A-E",
				},
			],
		},
		{
			name: "Total Points",
			score: 36,
			fullScore: 45,
		},
	] as const;

	return (
		<CertificationWithDetails text="International Baccalaureate Bilingual Diploma">
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Subject</TableCell>
							<TableCell align="center">Score</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{scores.map((data) => (
							<Fragment key={data.name}>
								<TableRow
									sx={{
										"&:last-child td, &:last-child th": { border: 0 },
									}}
								>
									<TableCell component="th" scope="row">
										<Box
											display="flex"
											justifyContent="space-between"
											alignItems="center"
										>
											{data.name === "Total Points" ? (
												<Typography fontWeight="medium">{data.name}</Typography>
											) : (
												data.name
											)}
										</Box>
									</TableCell>
									<TableCell align="center">{`${data.score} / ${data.fullScore}`}</TableCell>
								</TableRow>
								{data.name === "EE & TOK Points" &&
									data.details.map(({ name, score, fullScore }) => (
										<TableRow key={name}>
											<TableCell
												component="th"
												scope="row"
												sx={{
													// indent the details
													paddingLeft: 4,
												}}
											>
												{name}
											</TableCell>
											<TableCell align="center">
												{`${score} / ${fullScore}`}
											</TableCell>
										</TableRow>
									))}
							</Fragment>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</CertificationWithDetails>
	);
};

// cspell:ignore ielts
const Ielts = (): JSX.Element => {
	const scores = [
		{
			name: "Listening",
			score: 7.5,
			fullScore: 9,
		},
		{
			name: "Reading",
			score: 8.0,
			fullScore: 9,
		},
		{
			name: "Writing",
			score: 7.0,
			fullScore: 9,
		},
		{
			name: "Speaking",
			score: 6.5,
			fullScore: 9,
		},
		{
			name: "Overall",
			score: 7.5,
			fullScore: 9,
		},
	] as const;

	return (
		<CertificationWithDetails
			text={`IELTS Academic ${scores.find((data) => data.name === "Overall")?.score}`}
		>
			<TableContainer component={Paper}>
				<Table>
					<TableBody>
						{scores.map(({ name, score, fullScore }) => (
							<TableRow
								key={name}
								sx={{
									"&:last-child td, &:last-child th": { border: 0 },
								}}
							>
								<TableCell component="th" scope="row">
									{name === "Overall" ? (
										<Typography fontWeight="medium">{name}</Typography>
									) : (
										name
									)}
								</TableCell>
								<TableCell align="center">{`${score.toFixed(1)} / ${fullScore.toFixed(1)}`}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</CertificationWithDetails>
	);
};

const Toefl = (): JSX.Element => {
	const scores = [
		{
			name: "Reading",
			score: 26,
			fullScore: 30,
		},
		{
			name: "Listening",
			score: 25,
			fullScore: 30,
		},
		{
			name: "Speaking",
			score: 22,
			fullScore: 30,
		},
		{
			name: "Writing",
			score: 21,
			fullScore: 30,
		},
		{
			name: "Total",
			score: 94,
			fullScore: 120,
		},
	] as const;

	return (
		<CertificationWithDetails
			text={`TOEFL iBT ${scores.find((data) => data.name === "Total")?.score}`}
		>
			<TableContainer component={Paper}>
				<Table>
					<TableBody>
						{scores.map(({ name, score, fullScore }) => (
							<TableRow
								key={name}
								sx={{
									"&:last-child td, &:last-child th": { border: 0 },
								}}
							>
								<TableCell component="th" scope="row">
									{name === "Total" ? (
										<Typography fontWeight="medium">{name}</Typography>
									) : (
										name
									)}
								</TableCell>
								<TableCell align="center">{`${score} / ${fullScore}`}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</CertificationWithDetails>
	);
};

export const Certifications = (): JSX.Element => {
	return (
		<Stack>
			<Typography variant="h5" component="h2">
				資格
			</Typography>

			<List sx={{ listStyleType: "disc", paddingLeft: "2rem" }}>
				<Ib />
				<Ielts />
				<Toefl />
				<ListItem sx={{ display: "list-item" }}>実用英語技能検定準1級</ListItem>
				<ListItem sx={{ display: "list-item" }}>
					普通自動車第一種運転免許(AT限定)
				</ListItem>
			</List>
		</Stack>
	);
};
