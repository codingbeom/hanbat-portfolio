import { motion } from 'framer-motion';
import { Envelope, GeoAlt, Github } from 'react-bootstrap-icons';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
	0%   { background-position: -200% center; }
	100% { background-position:  200% center; }
`;

const Section = styled(motion.section)`
	padding: 60px 0 80px;
`;

const Container = styled.div`
	width: 100%;
	max-width: 1100px;
	margin: 0 auto;
	padding: 0 20px;
`;

const GradientTitle = styled.h2`
	font-size: 34px;
	font-weight: 800;
	letter-spacing: 0.14em;
	text-transform: uppercase;
	background: linear-gradient(90deg, #76abae, #a8d8da, #76abae);
	background-size: 200% auto;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: ${shimmer} 3.5s linear infinite;
	margin-bottom: 32px;
`;

const CardGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	margin-bottom: 60px;

	@media screen and (max-width: 900px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (max-width: 500px) {
		grid-template-columns: 1fr;
	}
`;

const Card = styled(motion.a)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 14px;
	padding: 32px 16px;
	background: rgba(49, 54, 63, 0.7);
	border: 1px solid rgba(118, 171, 174, 0.15);
	border-radius: 16px;
	text-decoration: none;
	cursor: pointer;
	transition:
		transform 0.25s ease,
		border-color 0.25s ease,
		box-shadow 0.25s ease;

	&:hover {
		transform: translateY(-6px);
		border-color: rgba(118, 171, 174, 0.5);
		box-shadow: 0 12px 32px rgba(118, 171, 174, 0.12);
	}
`;

const IconWrap = styled.div`
	width: 56px;
	height: 56px;
	border-radius: 50%;
	background: rgba(118, 171, 174, 0.12);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 24px;
	color: #76abae;
	transition: background 0.25s ease;

	${Card}:hover & {
		background: rgba(118, 171, 174, 0.22);
	}
`;

const CardLabel = styled.span`
	font-size: 13px;
	font-weight: 600;
	color: #76abae;
	letter-spacing: 0.08em;
	text-transform: uppercase;
`;

const CardValue = styled.span`
	font-size: 14px;
	color: #bbb;
	text-align: center;
	line-height: 1.5;
	word-break: break-word;
`;

const MapWrapper = styled.div`
	border-radius: 16px;
	overflow: hidden;
	border: 1px solid rgba(118, 171, 174, 0.2);
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

	iframe {
		width: 100%;
		height: 380px;
		display: block;
		border: none;
	}
`;

const cardVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
	}),
};

const contacts = [
	{
		icon: <GeoAlt />,
		label: 'Location',
		value: '43, Dacheongro, Daeduckgu\nDaejeon, Korea',
		href: undefined,
	},
	{
		icon: <Envelope />,
		label: 'Email',
		value: 'lkb951103@gmail.com',
		href: 'mailto:lkb951103@gmail.com',
	},
	{
		icon: <Github />,
		label: 'GitHub',
		value: 'github.com/codingbeom',
		href: 'https://github.com/codingbeom',
	},
];

function Contact() {
	return (
		<Section
			initial={{ opacity: 0, y: 80 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: false }}
			transition={{ ease: 'easeInOut', duration: 0.8 }}
		>
			<Container>
				<GradientTitle>Contact</GradientTitle>

				<CardGrid>
					{contacts.map((c, i) => (
						<Card
							key={c.label}
							as={c.href ? motion.a : motion.div}
							href={c.href}
							target={c.href?.startsWith('http') ? '_blank' : undefined}
							rel={
								c.href?.startsWith('http') ? 'noopener noreferrer' : undefined
							}
							custom={i}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: false }}
							variants={cardVariants}
						>
							<IconWrap>{c.icon}</IconWrap>
							<CardLabel>{c.label}</CardLabel>
							<CardValue>{c.value}</CardValue>
						</Card>
					))}
				</CardGrid>

				<MapWrapper>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3209.187065945216!2d127.42896287626438!3d36.453035287191554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565378256b23ddb%3A0x28573d3c56aaf32f!2z64yA7KCE6rSR7Jet7IucIOuMgOuNleq1rCDrjIDssq3roZwgNDM!5e0!3m2!1sko!2skr!4v1694869940137!5m2!1sko!2skr"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>
				</MapWrapper>
			</Container>
		</Section>
	);
}

export default Contact;
