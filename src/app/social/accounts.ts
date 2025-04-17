import { MailOutline, type SvgIconComponent } from "@mui/icons-material";
import type { StaticImageData } from "next/image";
// cspell:ignore atcoder
import atcoderLogo from "../../../public/logo/atcoder.png";
// cspell:ignore bluesky
import blueskyLogo from "../../../public/logo/bluesky.svg";
import discordLogo from "../../../public/logo/discord.svg";
import facebookLogo from "../../../public/logo/facebook.png";
import githubLogo from "../../../public/logo/github.svg";
import instagramLogo from "../../../public/logo/instagram.svg";
import larva06Logo from "../../../public/logo/larva06.svg";
import lineLogo from "../../../public/logo/line.png";
import linkedinLogo from "../../../public/logo/linkedin.png";
import noteLogo from "../../../public/logo/note.svg";
import npmLogo from "../../../public/logo/npm.png";
// cspell:ignore qiita
import qiitaLogo from "../../../public/logo/qiita.png";
import xLogo from "../../../public/logo/x.svg";
import youtubeLogo from "../../../public/logo/youtube.png";
// cspell:ignore zenn
import zennLogo from "../../../public/logo/zenn.svg";

export type Account = {
	name: string;
	service: string;
	logo: StaticImageData | SvgIconComponent;
	href?: string;
	privateAccount?: boolean;
	hidden?: boolean;
	description?: string;
};

const xAccounts: ({
	id: string;
} & Pick<Account, "privateAccount" | "hidden"> &
	Required<Pick<Account, "description">>)[] = [
	{
		id: "risu_tech",
		description: "技術垢",
	},
	{
		id: "risu_minecraft",
		description: "マイクラ垢。本垢(?)",
	},
	{
		id: "risu_real",
		privateAccount: true,
		description: "リア垢",
	},
	{
		id: "risu_taku",
		privateAccount: true,
		description: "技術垢の縮小",
	},
	{
		// cspell:ignore momonga
		id: "momonga_mc",
		privateAccount: true,
		description: "サブ垢",
	},
	{
		id: "fluffy_null",
		privateAccount: true,
		description: "サブのサブ",
	},
];

export const accounts: Account[] = [
	{
		name: "info@risunosu.com",
		service: "Email",
		logo: MailOutline,
		href: "mailto:info@risunosu.com",
		description: "重要な連絡はこちらへ",
	},
	{
		name: "risu729",
		service: "GitHub",
		logo: githubLogo,
		href: "https://github.com/risu729",
	},
	...xAccounts.map(({ id, privateAccount, hidden, description }) => ({
		name: id,
		service: "X (Twitter)",
		logo: xLogo,
		href: `https://x.com/${id}`,
		privateAccount: privateAccount ?? false,
		hidden: hidden ?? privateAccount ?? false,
		description: description,
	})),
	{
		name: "risu729",
		service: "Discord",
		logo: discordLogo,
		description: "日常的な連絡はこちらへ",
	},
	{
		name: "risu.sub",
		service: "Discord",
		logo: discordLogo,
		hidden: true,
		description: "使っていないサブ垢",
	},
	{
		name: "Risunosu",
		service: "Discord",
		logo: discordLogo,
		href: "https://discord.gg/b8sekhMmr8",
		description: "雑談サーバー",
	},
	{
		name: "risu_real",
		service: "Instagram",
		logo: instagramLogo,
		href: "https://www.instagram.com/risu_real",
		privateAccount: true,
		description: "日常など。主に旅行",
	},
	{
		name: "risu729",
		service: "Bluesky",
		logo: blueskyLogo,
		href: "https://bsky.app/profile/risu729.bsky.social",
		hidden: true,
	},
	{
		name: "risu729",
		service: "LINE",
		logo: lineLogo,
		href: "https://line.me/ti/p/XjWCd96Oxf",
		privateAccount: true,
		hidden: true,
	},
	{
		name: "risu729",
		service: "Zenn",
		logo: zennLogo,
		href: "https://zenn.dev/risu729",
		description: "技術記事",
	},
	{
		name: "risu729",
		service: "npm",
		logo: npmLogo,
		href: "https://www.npmjs.com/~risu729",
	},
	{
		name: "risu729",
		service: "Facebook",
		logo: facebookLogo,
		href: "https://www.facebook.com/risu729",
	},
	{
		name: "risu729",
		service: "LinkedIn",
		logo: linkedinLogo,
		href: "https://www.linkedin.com/in/taku-kodama/",
	},
	{
		name: "risu729",
		service: "Qiita",
		logo: qiitaLogo,
		href: "https://qiita.com/risu729",
		hidden: true,
	},
	{
		name: "risu729",
		service: "AtCoder",
		logo: atcoderLogo,
		href: "https://atcoder.jp/users/risu729",
		hidden: true,
	},
	{
		name: "りす",
		service: "Larva06",
		logo: larva06Logo,
		href: "https://larva06.com/author/risu.tk",
		description: "代表をしているWebメディア",
	},
	{
		name: "risu_mc",
		service: "YouTube",
		logo: youtubeLogo,
		href: "https://www.youtube.com/@risu_mc",
		hidden: true,
		description: "Minecraft用チャンネル",
	},
	{
		name: "risu729",
		service: "note",
		logo: noteLogo,
		href: "https://note.com/risu729/",
		hidden: true,
	},
];
