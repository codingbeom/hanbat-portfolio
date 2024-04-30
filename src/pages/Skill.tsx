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
									pathColor: '#ff0060',
									textColor: '#ff0060',
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
									pathColor: '#4900ff',
									textColor: '#4900ff',
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
									pathColor: '#0000ff',
									textColor: '#0000ff',
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
									pathColor: '#0079ff',
									textColor: '#0079ff',
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
									pathColor: '#00ff00',
									textColor: '#00ff00',
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
									pathColor: '#00ffff',
									textColor: '#00ffff',
								})}
							/>
						</ProgressBox>
					</InfoBox>
					<InfoBox>
						<h3>Python</h3>
						<ProgressBox>
							<CircularProgressbar
								value={0.3}
								maxValue={1}
								text={`${0.3 * 100}%`}
								styles={buildStyles({
									pathColor: '#1A4D2E',
									textColor: '#1A4D2E',
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
									pathColor: '#ff00ff',
									textColor: '#ff00ff',
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
									pathColor: '#00aa00',
									textColor: '#00aa00',
								})}
							/>
						</ProgressBox>
					</InfoBox>
					<InfoBox>
						<h3>MySql</h3>
						<ProgressBox>
							<CircularProgressbar
								value={0.3}
								maxValue={1}
								text={`${0.3 * 100}%`}
								styles={buildStyles({
									pathColor: '#007777',
									textColor: '#007777',
								})}
							/>
						</ProgressBox>
					</InfoBox>
					<InfoBox>
						<h3>Ubuntu</h3>
						<ProgressBox>
							<CircularProgressbar
								value={0.4}
								maxValue={1}
								text={`${0.4 * 100}%`}
								styles={buildStyles({
									pathColor: '#883300',
									textColor: '#883300',
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
									pathColor: '#777777',
									textColor: '#777777',
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
