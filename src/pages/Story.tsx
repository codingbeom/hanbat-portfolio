import StoryNavbar from "@/components/StoryNavbar";
import { storyLinked } from "@/main";
import styled from "styled-components";

const StoryContainer = styled.div`
	width: 70%;
`;

export const SectionContainer = styled.section`
	display: flex;
	padding: 20px;
	& > div {
		width: 100%;
		background-color: #31363f;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
		border-radius: 12px;
		margin: 10px;
		transition: 0.3s ease-in-out;
		overflow: hidden;
		&:hover {
			box-shadow: 5px 6px 10px rgba(80, 80, 80, 0.7);
			h2 {
				opacity: 1;
				transform: translateY(-30px);
				transition: 0.3s ease-in-out;
			}
		}
		h2 {
			opacity: 0;
			position: absolute;
			transition: 0.3s ease-in-out;
			color: #76abaa;
		}
	}
`;

const PPTContainer = styled.div`
	& > img {
		width: 100%;
		vertical-align: bottom;
	}
`;

function Story() {
	return (
		<StoryContainer>
			<StoryNavbar />
			{storyLinked.map((item, idx) => {
				return (
					<SectionContainer id={item.href.replace(/^#/, "")}>
						<PPTContainer>
							<h2>{item.name}</h2>
							<img src={item.img} />
						</PPTContainer>
					</SectionContainer>
				);
			})}
		</StoryContainer>
	);
}

export default Story;
