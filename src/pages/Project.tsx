import { motion } from 'framer-motion';
import Slider from 'react-slick';

import styled from 'styled-components';

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

const Section = styled(motion.section)`
	display: flex;
	padding: 40px 0;
`;

const Container = styled.div`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 15px;
	@media screen and (max-width: 1300px) {
		max-width: 1150px;
	}
	@media screen and (max-width: 1200px) {
		max-width: 1050px;
	}
	@media screen and (max-width: 1100px) {
		max-width: 950px;
	}
	@media screen and (max-width: 1000px) {
		max-width: 850px;
	}
	@media screen and (max-width: 900px) {
		max-width: 750px;
	}
	@media screen and (max-width: 800px) {
		max-width: 650px;
	}
	@media screen and (max-width: 700px) {
		max-width: 550px;
	}
	@media screen and (max-width: 600px) {
		max-width: 450px;
	}
	@media screen and (max-width: 500px) {
		max-width: 300px;
	}
`;

const Title = styled.div`
	text-align: center;
	margin-bottom: 30px;

	h2 {
		font-size: 36px;
		color: #76abaa;
		margin-bottom: 10px;
	}
`;

function Project() {
	const settings = {
		dots: true, // 개수 표시 점
		infinite: true, // 무한 캐러셀
		speed: 500, // 다음 컨텐츠 까지의 속도
		slidesToScroll: 1, // 스크롤 시 넘어가는 컨텐츠 수
		// centerMode: true, // 현재 컨텐츠 가운데 정렬
		autoplay: true, // 자동 캐러셀
		autoplaySpeed: 4000, // 자동 캐러셀 속도
		draggable: false, // 드래그
		fade: false, // 사라졌다 나타나는 효과
		arrows: true, // 좌,우 버튼
		vertical: false, // 세로 캐러셀
		initialSlide: 0, // 첫 컨텐츠 번호
		pauseOnFocus: true, // focus시 정지
		pauseOnHover: true, // hover시 정지
	};
	return (
		<Section
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: false }}
			transition={{
				ease: 'easeInOut',
				duration: 2,
				y: { duration: 1 },
			}}
		>
			<Container>
				<Title>
					<h2>Project</h2>
				</Title>
				<Slider {...settings}>
					<div>
						<img src={FirstJsp} />
					</div>
					<div>
						<img src={ElectronVue} />
					</div>
					<div>
						<img src={ElectronVue2} />
					</div>
					<div>
						<img src={VueWeb} />
					</div>
					<div>
						<img src={VueWeb2} />
					</div>
					<div>
						<img src={SharePc} />
					</div>
					<div>
						<img src={Silkroad} />
					</div>
					<div>
						<img src={CaptionWeb} />
					</div>
					<div>
						<img src={ShareMobile} />
					</div>
					<div>
						<img src={TkitaMain} />
					</div>
					<div>
						<img src={TkitaSingle} />
					</div>
					<div>
						<img src={TkitaDual} />
					</div>
					<div>
						<h1>end...</h1>
					</div>
				</Slider>
			</Container>
		</Section>
	);
}

export default Project;
