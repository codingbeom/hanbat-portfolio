import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	margin-top: 60px;
`;

const HeaderNav = styled.nav`
	position: fixed;
	background-color: #31363f;
	width: 100%;
	height: 60px;
	top: 0;
	padding: 0 2rem;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	& > ul {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		& > li {
			list-style: none;
			& > a {
				color: lightsalmon;
				text-decoration: none;
				font-size: bold;
				font-weight: 16px;
			}
		}
	}
`;

interface Props {
	children: React.ReactElement;
}

function Wrapper({ children }: Props) {
	function handleNavClick(event) {
		event.preventDefault();
		const targetId = event.target.getAttribute("href");
		const targetElement = document.querySelector(targetId);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
		}
	}

	return (
		<Container>
			<HeaderNav onClick={handleNavClick}>
				<ul>
					<li>
						<a href="#resume">Resume</a>
					</li>
					<li>
						<a href="#story">Story</a>
					</li>
					<li>
						<a href="#album">Album</a>
					</li>
					<li>
						<a href="#buckit-list">Buckit List</a>
					</li>
				</ul>
			</HeaderNav>
			{children}
		</Container>
	);
}

export default Wrapper;
