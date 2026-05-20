import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled, { keyframes } from 'styled-components';

/* ─── 타입 ─── */
interface SkillItem {
	name: string;
	value: number;
	color: string;
}

/* ─── 스킬 데이터 ─── */
const SKILLS: SkillItem[][] = [
	[
		{ name: 'Html5', value: 0.9, color: '#E44D26' },
		{ name: 'Css3', value: 0.8, color: '#264DE4' },
		{ name: 'TypeScript', value: 0.8, color: '#3178C6' },
		{ name: 'Flutter', value: 0.7, color: '#02569B' },
	],
	[
		{ name: 'Vue3', value: 0.7, color: '#42B883' },
		{ name: 'React', value: 0.9, color: '#61DAFB' },
		{ name: 'Python', value: 0.8, color: '#3776AB' },
		{ name: 'Vite', value: 0.6, color: '#646CFF' },
	],
	[
		{ name: 'Nginx', value: 0.5, color: '#009639' },
		{ name: 'MySql', value: 0.6, color: '#4479A1' },
		{ name: 'Ubuntu', value: 0.7, color: '#E95420' },
		{ name: 'Electron.js', value: 0.7, color: '#47848F' },
	],
	[
		{ name: 'Node.js', value: 0.8, color: '#339933' },
		{ name: 'Bun.js', value: 0.5, color: '#c8a97e' }, // 원본 #FBF0DF → 어두운 배경 가독성 개선
		{ name: 'Redis', value: 0.6, color: '#DC382D' },
	],
];

/* ─── 애니메이션 ─── */
const fadeUp = {
	hidden: { opacity: 0, y: 60 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
	}),
};

const shimmer = keyframes`
	0%   { background-position: -200% center; }
	100% { background-position: 200% center; }
`;

/* ─── 스타일 ─── */
const Section = styled(motion.section)`
	padding: 60px 0 80px;
	background: #1e2228;
	width: 100%;
`;

const Container = styled.div`
	width: 100%;
	max-width: 1100px;
	margin: 0 auto;
	padding: 0 20px;
`;

const Title = styled.div`
	text-align: center;
	margin-bottom: 48px;

	h2 {
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
	}

	p {
		color: #6b7280;
		font-size: 14px;
		letter-spacing: 0.05em;
	}
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 24px;
	margin-bottom: 24px;

	@media (max-width: 900px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 480px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 16px;
	}
`;

const Card = styled(motion.div)<{ $color: string }>`
	background: #252b34;
	border: 1px solid #2e3640;
	border-radius: 16px;
	padding: 24px 16px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
	transition:
		transform 0.2s ease,
		border-color 0.2s ease,
		box-shadow 0.2s ease;

	&:hover {
		transform: translateY(-4px);
		border-color: ${(p) => p.$color}55;
		box-shadow: 0 8px 24px ${(p) => p.$color}22;
	}
`;

const SkillName = styled.h3<{ $color: string }>`
	font-size: 14px;
	font-weight: 600;
	letter-spacing: 0.06em;
	color: ${(p) => p.$color};
	text-align: center;
	margin: 0;
`;

const ProgressBox = styled.div`
	width: 110px;
	height: 110px;

	@media (max-width: 480px) {
		width: 90px;
		height: 90px;
	}
`;

const PercentLabel = styled.span`
	font-size: 12px;
	color: #6b7280;
	letter-spacing: 0.04em;
`;

/* ─── 서브 컴포넌트 ─── */
function SkillCard({ skill, index }: { skill: SkillItem; index: number }) {
	return (
		<Card
			$color={skill.color}
			custom={index}
			variants={fadeUp}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
		>
			<SkillName $color={skill.color}>{skill.name}</SkillName>
			<ProgressBox>
				<CircularProgressbar
					value={skill.value}
					maxValue={1}
					text={`${Math.round(skill.value * 100)}%`}
					styles={buildStyles({
						pathColor: skill.color,
						textColor: skill.color,
						trailColor: '#2e3640',
						textSize: '20px',
					})}
				/>
			</ProgressBox>
			<PercentLabel>{`${Math.round(skill.value * 100)}%`}</PercentLabel>
		</Card>
	);
}

/* ─── 메인 컴포넌트 ─── */
function Skill() {
	return (
		<Section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: false }}
			transition={{ duration: 0.6 }}
		>
			<Container>
				<Title>
					<h2>Skill</h2>
					<p>Technologies I work with</p>
				</Title>

				{SKILLS.map((row, rowIdx) => (
					<Grid key={rowIdx}>
						{row.map((skill, colIdx) => (
							<SkillCard
								key={skill.name}
								skill={skill}
								index={rowIdx * 4 + colIdx}
							/>
						))}
					</Grid>
				))}
			</Container>
		</Section>
	);
}

export default Skill;
