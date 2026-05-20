import { motion } from 'framer-motion';
import Slider from 'react-slick';
import styled, { keyframes, createGlobalStyle } from 'styled-components';

import CaptionWeb from '../assets/images/caption_web.png';
import ElectronVue from '../assets/images/electron_vue.png';
import ElectronVue2 from '../assets/images/electron_vue2.png';
import FirstJsp from '../assets/images/first_jsp.png';
import ShareMobile from '../assets/images/share_mobile.png';
import SharePc from '../assets/images/share_pc.png';
import Silkroad from '../assets/images/silkroad_admin.png';
import TkitaDual from '../assets/images/tkita_dual_dark.jpg';
import TkitaMain from '../assets/images/tkita_main.jpg';
import TkitaSingle from '../assets/images/tkita_single.jpg';
import VueWeb from '../assets/images/vue_web.png';
import VueWeb2 from '../assets/images/vue_web2.png';

/* ─── 슬라이더 전역 스타일 오버라이드 ─── */
const SlickGlobal = createGlobalStyle`
  .slick-dots {
    bottom: -32px;
    li button::before {
      color: #4a5568;
      font-size: 8px;
      opacity: 1;
    }
    li.slick-active button::before {
      color: #76abae;
      opacity: 1;
    }
  }

  .slick-prev,
  .slick-next {
    z-index: 10;
    width: 36px;
    height: 36px;

    &::before {
      font-size: 28px;
      color: #76abae;
      opacity: 0.7;
      transition: opacity 0.2s;
    }
    &:hover::before {
      opacity: 1;
    }
  }

  .slick-prev { left: -44px; }
  .slick-next { right: -44px; }

  /* 모바일: 화살표 안쪽으로 */
  @media (max-width: 600px) {
    .slick-prev { left: 4px; }
    .slick-next { right: 4px; }
		.slick-prev, .slick-next, .slick-next::before, .slick-prev::before {
			display: none;
		}
		.slick-slide img {
			object-fit: cover;
			object-position: center;
		}
  }
`;

/* ─── 애니메이션 ─── */
const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`;

/* ─── 스타일 ─── */
const Section = styled(motion.section)`
	padding: 72px 0 80px;
	background: #1a1e25;
	width: 100%;
`;

const Container = styled.div`
	width: 100%;
	max-width: 900px;
	margin: 0 auto;
	padding: 0 52px; /* 화살표 공간 */

	@media (max-width: 600px) {
		padding: 0 16px; /* 모바일: 화살표 오버레이이므로 여백 최소화 */
	}
`;

const TitleWrap = styled.div`
	text-align: center;
	margin-bottom: 40px;
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

const Subtitle = styled.p`
	font-size: 13px;
	color: #6b7280;
	letter-spacing: 0.05em;
`;

/* 슬라이드 카드 */
const SlideCard = styled.div`
	outline: none;
	padding: 0 6px;
`;

const ImageWrap = styled.div`
	position: relative;
	width: 100%;
	border-radius: 14px;
	overflow: hidden;
	background: #252b34;
	border: 1px solid #2e3640;
	aspect-ratio: 16 / 9;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		object-position: center;
		display: block;
		transition: transform 0.4s ease;
	}
	.slick-slide img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		object-position: center;
		display: block;
		transition: transform 0.4s ease;
	}

	&:hover img {
		transform: scale(1.03);
	}

	/* 하단 그라디언트 오버레이 */
	&::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to top,
			rgba(26, 30, 37, 0.55) 0%,
			transparent 50%
		);
		pointer-events: none;
	}
`;

/* 마지막 슬라이드 (end...) */
const EndCard = styled.div`
	aspect-ratio: 16 / 9;
	background: #252b34;
	border: 1px solid #2e3640;
	border-radius: 14px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 12px;
`;

const EndText = styled.h3`
	font-size: 22px;
	font-weight: 700;
	color: #76abae;
	letter-spacing: 0.1em;
`;

const EndSub = styled.p`
	font-size: 13px;
	color: #4a5568;
`;

/* 슬라이드 카운터 */
const Counter = styled.div`
	text-align: center;
	margin-top: 40px;
	font-size: 12px;
	color: #4a5568;
	letter-spacing: 0.08em;
`;

/* ─── 데이터 ─── */
const SLIDES = [
	{ src: FirstJsp, label: 'First JSP Project' },
	{ src: ElectronVue, label: 'Electron + Vue' },
	{ src: ElectronVue2, label: 'Electron + Vue 2' },
	{ src: VueWeb, label: 'Vue Web' },
	{ src: VueWeb2, label: 'Vue Web 2' },
	{ src: SharePc, label: 'Share PC' },
	{ src: Silkroad, label: 'Silkroad Admin' },
	{ src: CaptionWeb, label: 'Caption Web' },
	{ src: ShareMobile, label: 'Share Mobile' },
	{ src: TkitaMain, label: 'Tkita Main' },
	{ src: TkitaSingle, label: 'Tkita Single' },
	{ src: TkitaDual, label: 'Tkita Dual Dark' },
];

/* ─── 컴포넌트 ─── */
function Project() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		draggable: true, // 모바일 드래그 활성화
		swipe: true, // 터치 스와이프
		arrows: true,
		fade: false,
		pauseOnFocus: true,
		pauseOnHover: true,
		initialSlide: 0,
	};

	return (
		<>
			<SlickGlobal />
			<Section
				initial={{ opacity: 0, y: 60 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false }}
				transition={{ ease: 'easeOut', duration: 0.7 }}
			>
				<Container>
					<TitleWrap>
						<GradientTitle>Project</GradientTitle>
						<Subtitle>작업물 모음 · {SLIDES.length} projects</Subtitle>
					</TitleWrap>

					<Slider {...settings}>
						{SLIDES.map((slide, i) => (
							<SlideCard key={i}>
								<ImageWrap>
									<img src={slide.src} alt={slide.label} loading="lazy" />
								</ImageWrap>
							</SlideCard>
						))}

						{/* 마지막 슬라이드 */}
						<SlideCard>
							<EndCard>
								<EndText>🎉 끝!</EndText>
								<EndSub>더 많은 프로젝트가 진행 중입니다</EndSub>
							</EndCard>
						</SlideCard>
					</Slider>

					<Counter>swipe or drag to navigate</Counter>
				</Container>
			</Section>
		</>
	);
}

export default Project;
