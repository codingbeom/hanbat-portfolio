import StoryNavbar from '@/components/StoryNavbar';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import styled from 'styled-components';

import { motion } from 'framer-motion';
import Chapter1 from '../assets/images/001.png';
import Chapter2 from '../assets/images/002.png';
import Chapter3 from '../assets/images/003.png';
import Chapter4 from '../assets/images/004.png';

const StoryContainer = styled(motion.div)`
	width: 100%;
	padding: 20px;
`;

export const SectionContainer = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	margin: 20px 0;
`;

const PPTContainer = styled.div`
	position: relative;
	width: 100%;
	max-width: 1100px;
	min-height: 700px;
	overflow: hidden;

	border-radius: 24px;
	background: #ffffff;
	border: 1px solid rgba(16, 185, 129, 0.12);

	box-shadow:
		0 10px 30px rgba(15, 23, 42, 0.08),
		0 4px 12px rgba(59, 130, 246, 0.06);

	cursor: pointer;

	transition:
		transform 0.35s ease,
		box-shadow 0.35s ease,
		border-color 0.35s ease;

	backdrop-filter: blur(10px);

	&:hover {
		transform: translateY(-6px) scale(1.01);

		border-color: rgba(59, 130, 246, 0.28);

		box-shadow:
			0 24px 50px rgba(15, 23, 42, 0.14),
			0 10px 24px rgba(16, 185, 129, 0.12);
	}

	/* top gradient accent */
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 5px;

		z-index: 2;
	}

	/* content wrapper */
	& > div {
		position: relative;
		height: 100%;

		display: flex;
		align-items: center;
		justify-content: center;

		padding: 24px;

		background: linear-gradient(90deg, #10b981, #14b8a6, #3b82f6);
	}

	/* image */
	& > img {
		width: 100%;
		height: 100%;
		object-fit: cover;

		transition:
			transform 0.5s ease,
			filter 0.35s ease;
	}

	&:hover > img {
		transform: scale(1.03);
		filter: brightness(1.03);
	}

	@media screen and (max-width: 900px) {
		min-height: 450px;
		border-radius: 18px;

		& > div {
			padding: 18px;
		}
	}

	@media screen and (max-width: 500px) {
		min-height: 300px;
		border-radius: 14px;

		& > div {
			padding: 12px;
		}
	}
`;

function Story() {
	const [story, setStory] = useState([
		{
			href: '#name',
			name: '나의 이름 삼행시',
			img: Chapter1,
			flip: false,
		},
		{
			href: '#number',
			name: '숫자 아이덴티티',
			img: Chapter2,
			flip: false,
		},
		{
			href: '#hobby',
			name: '취미 생활',
			img: Chapter3,
			flip: false,
		},
		{
			href: '#model',
			name: '나의 롤모델',
			img: Chapter4,
			flip: false,
		},
	]);

	const handleFlip = (href: string) => {
		setStory(
			story.map((item) => {
				if (href === item.href) {
					return { ...item, flip: !item.flip };
				} else {
					return { ...item };
				}
			})
		);
	};

	return (
		<StoryContainer
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: false }}
			transition={{
				ease: 'easeInOut',
				duration: 2,
				y: { duration: 1 },
			}}
		>
			<StoryNavbar story={story} />
			{story.map((item, idx) => (
				<ReactCardFlip
					key={idx}
					isFlipped={item.flip}
					flipDirection="horizontal"
				>
					<SectionContainer
						id={item.href.replace(/^#/, '')}
						onClick={() => handleFlip(item.href)}
					>
						<PPTContainer>
							<div>
								<h2>{item.name}</h2>
							</div>
						</PPTContainer>
					</SectionContainer>
					<SectionContainer
						id={item.href.replace(/^#/, '')}
						onClick={() => handleFlip(item.href)}
					>
						<PPTContainer>
							<img src={item.img} alt={item.name} />
						</PPTContainer>
					</SectionContainer>
				</ReactCardFlip>
			))}
		</StoryContainer>
	);
}

export default Story;
