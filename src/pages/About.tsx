import styled, { keyframes } from "styled-components";

const ani = keyframes`
		0% {
		transform: rotateY(0deg);
		}
		100% {
		transform: rotateY(360deg);
		}
`;

const AboutContainer = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	perspective: 1300px;
`;

const AboutSection = styled.section`
	width: 600px;
	height: 800px;
	position: absolute;
	top: 90px;
	left: 50%;
	margin-left: -300px;
	transform-style: preserve-3d;
	animation: ${ani} linear 20s infinite;
`;

const TestArticle = styled.article`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0px;
	left: 0px;
	backface-visibility: hidden;
	& > h1 {
		position: absolute;
		left: 0px;
		top: 0px;
		font-size: 20px;
		opacity: 0;
		transition: all 0.5s;
	}
	&:hover h1 {
		top: -30px;
		opacity: 1;
	}
	& > .inner {
		width: 100%;
		height: 100%;
	}
	& > .inner > div {
		width: 100%;
		height: 100%;
		border: 1px solid rgba(255, 255, 255, 0.5);
		box-sizing: border-box;
		background: rgba(255, 255, 255, 0.06);
		padding: 50px;
		position: relative;
		opacity: 0.7;
		overflow: hidden;
		cursor: pointer;
		transition: all 0.5s;
	}
	& > .inner > div:hover {
		background: rgba(255, 255, 255, 0.15);
		transform: scale(1.03);
		opacity: 1;
	}
	& > .inner > div h2 {
		transition: all 0.5s;
	}
	& > .inner > div i {
		transition: all 0.5s;
	}
	& > .inner > div:hover h2 {
		color: lightcyan;
		text-shadow: 0px 0px 10px aqua;
	}
	& > .inner > div:hover i {
		color: lightcyan;
		text-shadow: 0px 0px 10px aqua;
		transform: scale(1.2);
	}
`;

function About() {
	return (
		<AboutContainer>
			<AboutSection>
				<TestArticle className={"face1"}>
					<h1>AnimationTest</h1>
					<div className={"inner"}>dasdas</div>
				</TestArticle>
				<TestArticle className={"face2"}>
					<h1>AnimationTest</h1>
					<div className={"inner"}>dasdas</div>
				</TestArticle>
				<TestArticle className={"face3"}>
					<h1>AnimationTest</h1>
					<div className={"inner"}>dasdas</div>
				</TestArticle>
				<TestArticle className={"face4"}>
					<h1>AnimationTest</h1>
					<div className={"inner"}>dasdas</div>
				</TestArticle>
				<TestArticle className={"face5"}>
					<h1>AnimationTest</h1>
					<div className={"inner"}>dasdas</div>
				</TestArticle>
				<TestArticle className={"face6"}>
					<h1>AnimationTest</h1>
					<div className={"inner"}>dasdas</div>
				</TestArticle>
				<TestArticle className={"face7"}>
					<h1>AnimationTest</h1>
					<div className={"inner"}>dasdas</div>
				</TestArticle>
				<TestArticle className={"face8"}>
					<h1>AnimationTest</h1>
					<div className={"inner"}>dasdas</div>
				</TestArticle>
			</AboutSection>
		</AboutContainer>
	);
}

export default About;
