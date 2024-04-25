import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const hoverAnimation = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-2.5px);
    }
`;

const HeaderNav = styled.nav<{ $visible: boolean }>`
	height: 60px;
	width: 100%;
	position: sticky;
	z-index: 10;
	background-color: #31363f;
	top: 0;
	padding: 0 2rem;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	opacity: ${(props) => (props.$visible ? 1 : 0)};
	transition: 0.3s ease;
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

const HeaderLink = styled(Link)<{ $active: boolean }>`
	color: ${(props) => (props.$active ? '#76ABAE' : 'lightsalmon')};
	font-weight: ${(props) => (props.$active ? 'bold' : 'normal')};
	text-decoration: none;
	font-size: 16px;
	position: relative;
	display: inline-block;
	transition: 0.3s ease;
	&:hover {
		animation: ${hoverAnimation} 0.5s ease infinite alternate;
	}
`;

interface Props {
	children: React.ReactElement;
}

const linked = [
	{
		href: '/',
		name: 'Home',
	},
	{
		href: '/story',
		name: 'Story',
	},
	{
		href: '/skill',
		name: 'Skill',
	},
	{
		href: '/contact',
		name: 'Contact',
	},
];

function Wrapper({ children }: Props) {
	const location = useLocation();
	const [visible, setVisible] = useState(true);

	const handleActiveLink = (href: string) => location.pathname === href;

	const handleScroll = () => {
		const scrollPosition = window.scrollY;

		if (scrollPosition > 60) {
			setVisible(false);
		} else {
			setVisible(true);
		}
	};

	useEffect(() => {
		console.log(location.pathname);
		console.log(import.meta.env.BASE_URL);

		if (location.pathname === `/story`) {
			document.addEventListener('scroll', handleScroll);

			return () => {
				document.removeEventListener('scroll', handleScroll);
			};
		}
	}, []);

	return (
		<Container>
			<HeaderNav $visible={visible}>
				<ul>
					{linked.map((item, idx) => {
						return (
							<li key={idx}>
								<HeaderLink
									to={item.href}
									$active={handleActiveLink(item.href)}
								>
									{item.name}
								</HeaderLink>
							</li>
						);
					})}
				</ul>
			</HeaderNav>
			{children}
		</Container>
	);
}

export default Wrapper;
