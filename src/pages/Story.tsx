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
	width: 100%;
	max-width: 1100px;
	min-height: 700px;
	border: 1px solid #ccc;
	border-radius: 10px;
	overflow: hidden;
	cursor: pointer;
	transition: transform 0.3s ease-in-out;

	&:hover {
		transform: scale(1.02);
	}

	& > div {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	& > img {
		width: 100%;
		height: 100%;
		object-fit: fill;
	}

	@media screen and (max-width: 900px) {
		min-height: 400px;
	}
	@media screen and (max-width: 500px) {
		min-height: 300px;
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
