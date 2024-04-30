import { motion } from 'framer-motion';
import { Envelope, GeoAlt, Phone } from 'react-bootstrap-icons';
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
	@media screen and (max-width: 800px) {
		flex-direction: column;
	}
`;

const InfoBox = styled.div`
	flex: 1;
	margin: 0 15px;
	text-align: center;

	i {
		font-size: 24px;
		color: #007bff;
	}

	h4 {
		font-size: 24px;
		color: #76abaa;
		margin-bottom: 10px;
	}

	p {
		font-size: 18px;
		color: #ccc;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	@media screen and (max-width: 800px) {
		margin: 15px 0;
	}
`;

const MapContainer = styled.div`
	width: 100%;
	max-width: 800px;
	margin: 0 auto;
	margin-top: 50px;

	iframe {
		width: 100%;
		height: 400px;
		border: none;
	}
`;

function Contact() {
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
					<h2>Contact</h2>
				</Title>

				<InfoRow>
					<InfoBox>
						<div className="address">
							<i className="#">
								<GeoAlt />
							</i>
							<h4>Location</h4>
							<p>43, Dacheongro, Daeduckgu, Daejeon, Republic of Korea</p>
						</div>
					</InfoBox>

					<InfoBox>
						<a href="mailto:lkb951103@gmail.com">
							<div className="email">
								<i className="#">
									<Envelope />
								</i>
								<h4>Email</h4>
								<p>lkb951103@gmail.com</p>
							</div>
						</a>
					</InfoBox>

					<InfoBox>
						<a href="tel:010-9581-9511">
							<div className="phone">
								<i className="#">
									<Phone />
								</i>
								<h4>Call</h4>
								<p>010-9581-9511</p>
							</div>
						</a>
					</InfoBox>
				</InfoRow>

				<MapContainer>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3209.187065945216!2d127.42896287626438!3d36.453035287191554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565378256b23ddb%3A0x28573d3c56aaf32f!2z64yA7KCE6rSR7Jet7IucIOuMgOuNleq1rCDrjIDssq3roZwgNDM!5e0!3m2!1sko!2skr!4v1694869940137!5m2!1sko!2skr"
						width="100%"
						height="100%"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</MapContainer>
			</Container>
		</Section>
	);
}

export default Contact;
