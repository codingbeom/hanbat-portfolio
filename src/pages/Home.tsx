import styled from "styled-components";

const SectionContainer = styled.section``;

function Home() {
	return (
		<>
			<SectionContainer id="resume">
				<div>resume 내용</div>
			</SectionContainer>
			<SectionContainer id="story">
				<div>story 내용</div>
			</SectionContainer>
			<SectionContainer id="album">
				<div>album 내용</div>
			</SectionContainer>
			<SectionContainer id="buckit-list">
				<div>buckit list 내용</div>
			</SectionContainer>
		</>
	);
}

export default Home;
