import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineSeparator,
	timelineItemClasses,
} from "@mui/lab";
import { Stack, Typography } from "@mui/material";

export const History = () => {
	const events = [
		{
			title: "一般社団法人lirfa設立",
			date: "2024-04-12",
		},
		{
			// cspell:ignore aicj
			title: "AICJ高等学校卒業",
			date: "2024-03",
		},
		{
			title: "愛知教育大学附属名古屋中学校卒業",
			date: "2021-03",
		},
		{
			title: "愛知教育大学附属名古屋小学校卒業",
			date: "2018-03",
		},
		{
			title: "愛知教育大学附属幼稚園卒園",
			date: "2012-03",
		},
		{
			title: "生誕",
			date: "2005-07-29",
		},
	] as const;

	return (
		<Stack>
			<Typography variant="h5" component="h2">
				経歴
			</Typography>

			<Timeline
				sx={{
					[`& .${timelineItemClasses.root}:before`]: {
						flex: 0,
						padding: 0,
					},
				}}
			>
				{events.map(({ title, date }, index) => (
					<TimelineItem key={title}>
						<TimelineSeparator>
							<TimelineDot />
							{index !== events.length - 1 && <TimelineConnector />}
						</TimelineSeparator>
						<TimelineContent>
							<Stack>
								{title}
								<Typography color="grey.700">{date}</Typography>
							</Stack>
						</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>
		</Stack>
	);
};
