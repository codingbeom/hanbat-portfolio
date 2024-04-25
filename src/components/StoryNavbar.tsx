import styled, { keyframes } from 'styled-components';

const hoverAnimation = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-2.5px);
    }
`;

const HeaderNav = styled.nav`
	position: sticky;
	z-index: 10;
	width: 100%;
	height: 60px;
	background-color: #31363f;
	top: 0;
	padding: 0 2rem;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	border-radius: 24px;
	& > ul {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		& > li {
			list-style: none;
		}
	}
	@media screen and (max-width: 900px) {
		padding: 0;
	}
`;

const HeaderLink = styled.a`
	color: #76abae;
	font-weight: bold;
	text-decoration: none;
	font-size: 13px;
	position: relative;
	display: inline-block;
	transition: 0.3s ease;
	&:hover {
		animation: ${hoverAnimation} 0.5s ease infinite alternate;
	}
`;

interface Props {
	story: {
		href: string;
		name: string;
		img: string;
		flip: boolean;
	}[];
}

function StoryNavbar({ story }: Props) {
	function handleNavClick(event) {
		event.preventDefault();
		const targetId = event.target.getAttribute('href');
		const targetElement: HTMLSelectElement = document.querySelector(targetId);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	}

	return (
		<HeaderNav onClick={handleNavClick}>
			<ul>
				{story.map((item, idx) => {
					return (
						<li key={idx}>
							<HeaderLink href={item.href}>{item.name}</HeaderLink>
						</li>
					);
				})}
			</ul>
		</HeaderNav>
	);
}

export default StoryNavbar;
