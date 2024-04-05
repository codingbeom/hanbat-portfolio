import { storyLinked } from "@/main";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const hoverAnimation = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-5px);
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
	margin-top: 10px;
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
`;

const HeaderLink = styled.a<{ $active: boolean }>`
	color: ${(props) => (props.$active ? "#76ABAE" : "lightsalmon")};
	font-weight: ${(props) => (props.$active ? "bold" : "normal")};
	text-decoration: none;
	font-size: 16px;
	position: relative;
	display: inline-block;
	transition: 0.3s ease;
	&:hover {
		animation: ${hoverAnimation} 0.5s ease infinite alternate;
	}
`;

function StoryNavbar() {
	const location = useLocation();
	const [actived, setActived] = useState("");
	function handleNavClick(event) {
		event.preventDefault();
		const targetId = event.target.getAttribute("href");
		const targetElement: HTMLSelectElement = document.querySelector(targetId);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: "smooth", block: "end" });
		}
	}

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const sectionHeight = document.querySelector("section").clientHeight;

		nowPosition(scrollPosition, sectionHeight);
	};

	const nowPosition = (scrollPosition, sectionHeight) => {
		if (scrollPosition + scrollPosition / 2 < sectionHeight) {
			setActived(storyLinked[0].href);
		} else if (scrollPosition + scrollPosition / 2 < sectionHeight * 2) {
			setActived(storyLinked[1].href);
		} else if (scrollPosition + scrollPosition / 3 < sectionHeight * 3) {
			setActived(storyLinked[2].href);
		} else {
			setActived(storyLinked[3].href);
		}
	};

	useEffect(() => {
		if (location.pathname === `/story`) {
			handleScroll();
			document.addEventListener("scroll", handleScroll);

			return () => {
				document.removeEventListener("scroll", handleScroll);
			};
		}
	}, []);

	return (
		<HeaderNav onClick={handleNavClick}>
			<ul>
				{storyLinked.map((item, idx) => {
					return (
						<li key={idx}>
							<HeaderLink href={item.href} $active={item.href === actived}>
								{item.name}
							</HeaderLink>
						</li>
					);
				})}
			</ul>
		</HeaderNav>
	);
}

export default StoryNavbar;
