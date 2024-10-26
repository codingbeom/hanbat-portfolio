import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';

const Section = styled(motion.section)`
	padding: 40px 0;
`;

const Container = styled.div`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 15px;
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

const InfoRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: stretch;
	& > h3 {
		font-size: 22px;
		margin-bottom: 5px;
	}
`;

const InfoBox = styled.div`
	flex: 0.25;
	margin: 15px 15px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	& > h3 {
		font-size: 22px;
		margin-bottom: 5px;
	}
`;

const ProgressBox = styled.div`
	width: 150px;
	height: 150px;
`;

function Skill() {
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
					<h2>Skill</h2>
				</Title>
				<InfoRow>
					<InfoBox>
						<h3>Html5</h3>
						<ProgressBox>
							<CircularProgressbar
								value={0.9}
								maxValue={1}
								text={`${0.9 * 100}%`}
								styles={buildStyles({
									pathColor: '#E44D26', // HTML5 브랜드 컬러
									textColor: '#E44D26',
								})}
							/>
						</ProgressBox>
					</InfoBox>
					<InfoBox>
						<h3>Css3</h3>
						<ProgressBox>
							<CircularProgressbar
								value={0.8}
								maxValue={1}
								text={`${0.8 * 100}%`}
								styles={buildStyles({
									pathColor: '#264DE4', // CSS3 브랜드 컬러
									textColor: '#264DE4',
								})}
							/>
						</ProgressBox>
					</InfoBox>
					<InfoBox>
						<h3>TypeScript</h3>
						<ProgressBox>
							<CircularProgressbar
								value={0.8}
								maxValue={1}
								text={`${0.8 * 100}%`}
								styles={buildStyles({
									pathColor: '#3178C6', // TypeScript 브랜드 컬러
									textColor: '#3178C6',
								})}
							/>
						</ProgressBox>
					</InfoBox>
					<InfoBox>
						<h3>Flutter</h3>
						<ProgressBox>
							<CircularProgressbar
								value={0.7}
								maxValue={1}
								text={`${0.7 * 100}%`}
								styles={buildStyles({
									pathColor: '#02569B', // Flutter 브랜드 컬러
									textColor: '#02569B',
								})}
							/>
						</ProgressBox>
					</InfoBox>
				</InfoRow>
				<InfoRow>
					<InfoBox>
						<h3>Vue3</h3>
						<ProgressBox>
							<CircularProgressbar
								value={0.7}
								maxValue={1}
								text={`${0.7 * 100}%`}
								styles={buildStyles({
									pathColor: '#42B883', // Vue.js 브랜드 컬러
									textColor: '#42B883',
								})}
							/>
						</ProgressBox>
					</InfoBox>
					<InfoBox>
						<h3>React</h3>
						<ProgressBox>
							<CircularProgressbar
								value={0.9}
								maxValue={1}
								text={`${0.9 * 100}%`}
								styles={buildStyles({
									pathColor: '#61DAFB', // React 브랜드 컬러
									textColor: '#61DAFB',
								})}
							/>
						</ProgressBox>
					</InfoBox>
					<InfoBox>
						<h3>Python</h3>
						<ProgressBox>
							<CircularProgressbar
								value={0.8}
								maxValue={1}
								text={`${0.8 * 100}%`}
								styles={buildStyles({
									pathColor: '#3776AB', // Python 브랜드 컬러
									textColor: '#3776AB',
								})}
							/>
						</ProgressBox>
					</InfoBox>
					<InfoBox>
						<h3>Vite</h3>
						<ProgressBox>
							<CircularProgressbar
								value={0.6}
								maxValue={1}
								text={`${0.6 * 100}%`}
								styles={buildStyles({
									pathColor: '#646CFF', // Vite 브랜드 컬러
									textColor: '#646CFF',
								})}
							/>
						</ProgressBox>
					</InfoBox>
				</InfoRow>
				<InfoRow>
					<InfoBox>
						<h3>Nginx</h3>
						<ProgressBox>
							<CircularProgressbar
								value={0.5}
								maxValue={1}
								text={`${0.5 * 100}%`}
								styles={buildStyles({
									pathColor: '#009639', // Nginx 브랜드 컬러
									textColor: '#009639',
								})}
							/>
						</ProgressBox>
					</InfoBox>
					<InfoBox>
						<h3>MySql</h3>
						<ProgressBox>
							<CircularProgressbar
								value={0.6}
								maxValue={1}
								text={`${0.6 * 100}%`}
								styles={buildStyles({
									pathColor: '#4479A1', // MySQL 브랜드 컬러
									textColor: '#4479A1',
								})}
							/>
						</ProgressBox>
					</InfoBox>
					<InfoBox>
						<h3>Ubuntu</h3>
						<ProgressBox>
							<CircularProgressbar
								value={0.7}
								maxValue={1}
								text={`${0.7 * 100}%`}
								styles={buildStyles({
									pathColor: '#E95420', // Ubuntu 브랜드 컬러
									textColor: '#E95420',
								})}
							/>
						</ProgressBox>
					</InfoBox>
					<InfoBox>
						<h3>Electron.js</h3>
						<ProgressBox>
							<CircularProgressbar
								value={0.7}
								maxValue={1}
								text={`${0.7 * 100}%`}
								styles={buildStyles({
									pathColor: '#47848F', // Electron 브랜드 컬러
									textColor: '#47848F',
								})}
							/>
						</ProgressBox>
					</InfoBox>
				</InfoRow>
				<InfoRow>
					<InfoBox>
						<h3>Node.js</h3>
						<ProgressBox>
							<CircularProgressbar
								value={0.8}
								maxValue={1}
								text={`${0.8 * 100}%`}
								styles={buildStyles({
									pathColor: '#339933', // Node.js 공식 브랜드 컬러
									textColor: '#339933',
								})}
							/>
						</ProgressBox>
					</InfoBox>
					<InfoBox>
						<h3>Bun.js</h3>
						<ProgressBox>
							<CircularProgressbar
								value={0.5}
								maxValue={1}
								text={`${0.5 * 100}%`}
								styles={buildStyles({
									pathColor: '#FBF0DF', // Bun 브랜드 컬러
									textColor: '#FBF0DF',
								})}
							/>
						</ProgressBox>
					</InfoBox>
					<InfoBox>
						<h3>Redis</h3>
						<ProgressBox>
							<CircularProgressbar
								value={0.6}
								maxValue={1}
								text={`${0.6 * 100}%`}
								styles={buildStyles({
									pathColor: '#DC382D', // Redis 브랜드 컬러
									textColor: '#DC382D',
								})}
							/>
						</ProgressBox>
					</InfoBox>
				</InfoRow>
			</Container>
		</Section>
	);
}

export default Skill;
