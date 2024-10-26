import { motion } from 'framer-motion';
import styled from 'styled-components';

const ResumeSection = styled(motion.section)`
	padding: 40px 0;
`;

const Container = styled.div`
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
`;

const SectionTitle = styled.div`
	text-align: center;
	margin-bottom: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
	& > div {
		max-width: 80%;
		& > p {
			line-height: 2;
		}
	}

	h2 {
		font-size: 36px;
		color: #76abaa;
		margin-bottom: 10px;
	}
`;

const Row = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
`;

const Col = styled.div`
	position: relative;
	flex: 0 0 50%;
	max-width: 40%;
	padding-right: 15px;
	padding-left: 15px;

	@media (max-width: 768px) {
		flex: 0 0 100%;
		max-width: 100%;
		margin-bottom: 30px;
	}
`;

const ResumeItem = styled.div<{ $isFirst?: boolean }>`
	position: relative;
	padding: 20px;
	background-color: #ccc;
	margin-bottom: 20px;
	border-radius: 10px;
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
	&::before {
		content: '';
		position: absolute;
		left: -20px;
		top: -40%;
		bottom: 60%;
		width: 4px;
		border-radius: 6px;
		background-color: #ccc;
		display: ${({ $isFirst }) => ($isFirst ? 'none' : 'block')};
	}
	&::after {
		content: '';
		position: absolute;
		left: -23px;
		bottom: 60%;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: #ccc;
		display: ${({ $isFirst }) => ($isFirst ? 'none' : 'block')};
	}

	h4 {
		font-size: 20px;
		color: #007bff;
		margin-bottom: 10px;
	}

	h5 {
		font-size: 16px;
		color: #555;
		margin-bottom: 5px;
	}

	p {
		font-size: 15px;
		color: black;
		margin-bottom: 5px;
	}

	em {
		font-size: 17px;
		color: black;
		margin-bottom: 5px;
	}

	ul {
		padding-left: 20px;

		li {
			font-size: 15px;
			color: black;
			margin-bottom: 5px;
		}
	}
`;

function Home() {
	return (
		<ResumeSection
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
				<SectionTitle>
					<h2>Career</h2>
					<div>
						<p>
							안녕하세요! 저는 이기범이라고 합니다.
							<br />
							개발하는 것을 즐기며 해답을 찾기 위해 끊임없이 생각하는
							사람입니다.
							<br /> 또한, 미래에 대한 고민을 하면서 새로운 가능성을 모색하는
							것을 좋아하며,
							<br /> 제가 해결해야 할 문제에는 적극적인 행동을 통해 더 나은
							결과물을 만들어내는 것을 목표로 하고있습니다.
							<br />
							협업을 통해 함께 미래를 개척해나가는 기회를 소중히 생각하며,
							<br /> 더 나은 세상을 만들어가는 일에 열정을 갖고 있습니다.
							<br />
							저는 다양한 분야에 도전하는 것을 즐기며,
							<br /> 인공지능, 빅데이터, 머신러닝 등의 기술에 관심을 가지고
							있습니다.
							<br /> 다양한 분야에 도전함으로써, 더 큰 영향력을 가진 개발자로
							성장하고 싶습니다.
						</p>
					</div>
				</SectionTitle>
				<Row>
					<Col>
						<h3>Education</h3>
						<ResumeItem $isFirst={true}>
							<h4>전자기기 기능사</h4>
							<h5>2013</h5>
							<em>자격증 취득</em>
						</ResumeItem>

						<ResumeItem>
							<h4>전기 기능사</h4>
							<h5>2017</h5>
							<em>자격증 취득</em>
						</ResumeItem>

						<ResumeItem>
							<h4>전기 기사</h4>
							<h5>2020. 12</h5>
							<em>자격증 취득</em>
						</ResumeItem>

						<ResumeItem>
							<h4>노마드코더</h4>
							<h5>2021. 07 - 2021. 09</h5>
							<em>Html5, Css3 코코아톡 클론</em>
							<p>챌린지 과정 수료</p>
						</ResumeItem>

						<ResumeItem>
							<h4>효성 컴퓨터학원</h4>
							<h5>2021. 07 - 2021. 10</h5>
							<em>JAVA 프로그래밍 과정 수료</em>
							<p>NCS기반 국비 과정, 응용 SW엔지니어링(3수준)</p>
						</ResumeItem>

						<ResumeItem>
							<h4>노마드코더</h4>
							<h5>2021. 09 - 2021. 11</h5>
							<em>JavaScript To-do-list</em>
							<p>JavaScript를 활용한 To-do-list 챌린지 과정 수료</p>
						</ResumeItem>

						<ResumeItem>
							<h4>노마드코더</h4>
							<h5>2023. 06 - 2023. 07</h5>
							<em>TypeScript Challenge</em>
							<p>TypeScript 챌린지 과정 수료</p>
						</ResumeItem>

						<ResumeItem>
							<h4>한밭대학교</h4>
							<h5>2024. 03 - 재학중</h5>
							<em>대전 한밭대학교 소프트웨어응용학과</em>
							<p>대전 한밭대학교 야간(소프트웨어 응용학과) 재학중</p>
						</ResumeItem>
					</Col>
					<Col>
						<h3>Work Experience</h3>
						<ResumeItem $isFirst={true}>
							<h4>(주)하우웰이엠에스</h4>
							<h5>2014. 01 ~ 2017. 05</h5>
							<em>방위산업체 산업기능요원</em>
							<ul>
								<li>SMD라인 담당</li>
								<li>생산라인 관리</li>
							</ul>
						</ResumeItem>

						<ResumeItem>
							<h4>(주)한성시스코</h4>
							<h5>2017. 06 ~ 2021. 12</h5>
							<em>제조사업부 - 생산기술 팀</em>
							<ul>
								<li>외주 업체 생산관리 및 계획 담당</li>
								<li>
									Iot 제품 펌웨어 다운로드 및 펌웨어 서버 안정화,서버 관리
								</li>
								<li>분배기 생산 라인 관리</li>
							</ul>
						</ResumeItem>

						<ResumeItem>
							<h4>진솔루션즈</h4>
							<h5>2022. 01 - 2022. 11</h5>
							<em>솔루션 개발팀</em>
							<ul>
								<li>Vue3 + Typescript를 사용해 프론트 개발 및 유지보수</li>
								<li>
									Electron + Vue3 + Sqlite3 + TS를 사용해 windows 응용프로그램
									개발 및 유지보수
								</li>
							</ul>
						</ResumeItem>

						<ResumeItem>
							<h4>(주)에어사운드</h4>
							<h5>2022. 12 - 재직중</h5>
							<em>소프트웨어 개발팀</em>
							<ul>
								<li>React + Ts를 사용해 프론트 개발 및 유지보수</li>
								<li>
									Electron + React + Sqlite3 + TS를 사용해 windows 응용프로그램
									개발 및 유지보수
								</li>
								<li>
									Flutter를 사용해 크로스플랫폼 어플리케이션 개발 및 유지보수
								</li>
								<li>Python을 활용한 Crawling및 음성인식 엔진 서버 구축</li>
								<li>Bun.js(Ts) + Hono + MySql + Redis 웹 서버 구축</li>
							</ul>
						</ResumeItem>
					</Col>
				</Row>
			</Container>
		</ResumeSection>
	);
}

export default Home;
