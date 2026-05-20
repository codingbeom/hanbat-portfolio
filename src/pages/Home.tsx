import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

/* ─── 타입 ─── */
interface ResumeEntry {
	title: string;
	period: string;
	sub?: string;
	bullets?: string[];
}

/* ─── 데이터 ─── */
const EDUCATION: ResumeEntry[] = [
	{
		title: '전자기기 기능사',
		period: '2013',
		sub: '자격증 취득',
	},
	{
		title: '전기 기능사',
		period: '2017',
		sub: '자격증 취득',
	},
	{
		title: '전기 기사',
		period: '2020. 12',
		sub: '자격증 취득',
	},
	{
		title: '노마드코더 — HTML5 / CSS3',
		period: '2021. 07 – 09',
		sub: '코코아톡 클론 챌린지 수료',
	},
	{
		title: '효성 컴퓨터학원',
		period: '2021. 07 – 10',
		sub: 'NCS 기반 JAVA 응용 SW 엔지니어링 국비 과정 수료',
	},
	{
		title: '노마드코더 — JavaScript',
		period: '2021. 09 – 11',
		sub: 'To-do-list 챌린지 수료',
	},
	{
		title: '노마드코더 — TypeScript',
		period: '2023. 06 – 07',
		sub: 'TypeScript 챌린지 수료',
	},
	{
		title: '한밭대학교',
		period: '2024. 03 – 재학중',
		sub: '소프트웨어응용학과 (야간) 재학중',
	},
];

const EXPERIENCE: ResumeEntry[] = [
	{
		title: '(주)하우웰이엠에스',
		period: '2014. 01 – 2017. 05',
		sub: '방위산업체 산업기능요원',
		bullets: ['SMD 라인 담당', '생산라인 관리'],
	},
	{
		title: '(주)한성시스코',
		period: '2017. 06 – 2021. 12',
		sub: '제조사업부 · 생산기술 팀',
		bullets: [
			'외주 업체 생산관리 및 계획 담당',
			'IoT 제품 펌웨어 다운로드 및 서버 안정화 · 관리',
			'분배기 생산 라인 관리',
		],
	},
	{
		title: '진솔루션즈',
		period: '2022. 01 – 2022. 11',
		sub: '솔루션 개발팀',
		bullets: [
			'Vue3 + TypeScript 프론트엔드 개발 및 유지보수',
			'Electron + Vue3 + SQLite3 Windows 응용프로그램 개발',
		],
	},
	{
		title: '(주)에어사운드',
		period: '2022. 12 – 재직중',
		sub: '소프트웨어 개발팀',
		bullets: [
			'React + TypeScript 프론트엔드 개발 및 유지보수',
			'Electron + React + SQLite3 Windows 응용프로그램 개발',
			'Flutter 크로스플랫폼 앱 개발 및 유지보수',
			'Python 기반 크롤링 및 음성인식 엔진 서버 구축',
			'Bun.js + Hono + MySQL + Redis 웹 서버 구축',
		],
	},
];

/* ─── 애니메이션 ─── */
const shimmer = keyframes`
	0%   { background-position: -200% center; }
	100% { background-position:  200% center; }
`;

const lineGrow = keyframes`
	from { height: 0; }
	to   { height: 100%; }
`;

const cardIn = {
	hidden: { opacity: 0, x: -20 },
	visible: (i: number) => ({
		opacity: 1,
		x: 0,
		transition: { duration: 0.45, delay: i * 0.07, ease: 'easeOut' },
	}),
};

/* ─── 스타일 ─── */
const Section = styled(motion.section)`
	padding: 80px 0;
	background: #1a1e25;
	width: 100%;
`;

const Container = styled.div`
	max-width: 1100px;
	margin: 0 auto;
	padding: 0 24px;
`;

/* 상단 소개 */
const Intro = styled.div`
	text-align: center;
	margin-bottom: 64px;
`;

const GradientTitle = styled.h2`
	font-size: 32px;
	font-weight: 700;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	background: linear-gradient(90deg, #76abae, #a8d8da, #76abae);
	background-size: 200% auto;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: ${shimmer} 3s linear infinite;
	margin-bottom: 8px;
`;

const ProfileCard = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 12px;
	background: #252b34;
	border: 1px solid #2e3640;
	border-left: 4px solid #76abae;
	border-radius: 14px;
	padding: 28px 36px;
	max-width: 680px;
	text-align: left;

	@media (max-width: 600px) {
		padding: 20px 20px;
	}
`;

const ProfileName = styled.p`
	font-size: 18px;
	font-weight: 700;
	color: #e8d5c4;
	margin: 0;
`;

const ProfileDesc = styled.p`
	font-size: 14px;
	color: #8b95a3;
	line-height: 1.85;
	margin: 0;
`;

const TagRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	margin-top: 4px;
`;

const Tag = styled.span`
	font-size: 11px;
	font-weight: 600;
	letter-spacing: 0.06em;
	padding: 4px 10px;
	border-radius: 20px;
	background: rgba(118, 171, 174, 0.12);
	color: #76abae;
	border: 1px solid rgba(118, 171, 174, 0.25);
`;

/* 타임라인 그리드 */
const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 40px 48px;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 40px;
	}
`;

const ColTitle = styled.h3`
	font-size: 13px;
	font-weight: 700;
	letter-spacing: 0.14em;
	text-transform: uppercase;
	color: #76abae;
	margin-bottom: 28px;
	display: flex;
	align-items: center;
	gap: 8px;

	&::after {
		content: '';
		flex: 1;
		height: 1px;
		background: linear-gradient(to right, #76abae44, transparent);
	}
`;

/* 타임라인 래퍼 */
const Timeline = styled.div`
	position: relative;
	padding-left: 24px;

	/* 세로선 */
	&::before {
		content: '';
		position: absolute;
		left: 5px;
		top: 8px;
		width: 2px;
		background: linear-gradient(to bottom, #76abae88, transparent);
		animation: ${lineGrow} 1s ease forwards;
	}
`;

const TimelineItem = styled(motion.div)`
	position: relative;
	margin-bottom: 24px;

	/* 도트 */
	&::before {
		content: '';
		position: absolute;
		left: -20px;
		top: 6px;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #76abae;
		border: 2px solid #1a1e25;
		box-shadow: 0 0 6px #76abae88;
	}

	&:last-child {
		margin-bottom: 0;
	}
`;

const ItemCard = styled.div`
	background: #252b34;
	border: 1px solid #2e3640;
	border-radius: 12px;
	padding: 16px 18px;
	transition:
		border-color 0.2s ease,
		box-shadow 0.2s ease;

	&:hover {
		border-color: #76abae44;
		box-shadow: 0 4px 16px rgba(118, 171, 174, 0.1);
	}
`;

const ItemTitle = styled.h4`
	font-size: 15px;
	font-weight: 700;
	color: #e8d5c4;
	margin: 0 0 4px;
`;

const ItemPeriod = styled.span`
	font-size: 11px;
	font-weight: 600;
	letter-spacing: 0.06em;
	color: #76abae;
	background: rgba(118, 171, 174, 0.1);
	padding: 2px 8px;
	border-radius: 10px;
	display: inline-block;
	margin-bottom: 8px;
`;

const ItemSub = styled.p`
	font-size: 13px;
	color: #8b95a3;
	margin: 0 0 8px;
`;

const ItemList = styled.ul`
	margin: 0;
	padding-left: 16px;
	display: flex;
	flex-direction: column;
	gap: 4px;

	li {
		font-size: 12px;
		color: #6b7a8d;
		line-height: 1.6;
	}
`;

/* ─── 서브 컴포넌트 ─── */
function TimelineCard({ entry, index }: { entry: ResumeEntry; index: number }) {
	return (
		<TimelineItem
			custom={index}
			variants={cardIn}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
		>
			<ItemCard>
				<ItemTitle>{entry.title}</ItemTitle>
				<ItemPeriod>{entry.period}</ItemPeriod>
				{entry.sub && <ItemSub>{entry.sub}</ItemSub>}
				{entry.bullets && (
					<ItemList>
						{entry.bullets.map((b, i) => (
							<li key={i}>{b}</li>
						))}
					</ItemList>
				)}
			</ItemCard>
		</TimelineItem>
	);
}

/* ─── 메인 컴포넌트 ─── */
function Home() {
	return (
		<Section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: false }}
			transition={{ duration: 0.6 }}
		>
			<Container>
				{/* 소개 */}
				<Intro>
					<GradientTitle>Career</GradientTitle>
					<ProfileCard>
						<ProfileName>이기범 · Frontend / Software Engineer</ProfileName>
						<ProfileDesc>
							전기 분야 실무 경험을 바탕으로 소프트웨어 개발로 전환, 현재
							프론트엔드 및 크로스플랫폼 개발자로 성장하고 있습니다.
							<br />
							문제를 끝까지 파고드는 성격으로 React, Flutter, Python 기반
							음성인식 서버까지 폭넓게 다루며, 인공지능 · 빅데이터 분야로의
							확장을 목표로 한밭대학교 소프트웨어응용학과에서 학업을 이어가고
							있습니다.
						</ProfileDesc>
						<TagRow>
							{[
								'Frontend',
								'Backend',
								'Electron',
								'Flutter',
								'Python',
								'AI/STT',
								'DevOps',
							].map((t) => (
								<Tag key={t}>{t}</Tag>
							))}
						</TagRow>
					</ProfileCard>
				</Intro>

				{/* 타임라인 */}
				<Grid>
					<div>
						<ColTitle>📚 Education</ColTitle>
						<Timeline>
							{EDUCATION.map((entry, i) => (
								<TimelineCard key={entry.title} entry={entry} index={i} />
							))}
						</Timeline>
					</div>
					<div>
						<ColTitle>💼 Work Experience</ColTitle>
						<Timeline>
							{EXPERIENCE.map((entry, i) => (
								<TimelineCard key={entry.title} entry={entry} index={i} />
							))}
						</Timeline>
					</div>
				</Grid>
			</Container>
		</Section>
	);
}

export default Home;
