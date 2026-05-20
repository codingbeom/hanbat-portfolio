import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const float = keyframes`
	0%   { transform: translateY(0); }
	100% { transform: translateY(-3px); }
`;

const HeaderNav = styled.nav`
	position: sticky;
	z-index: 10;
	width: 100%;
	height: 52px;
	background: rgba(42, 47, 55, 0.85);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	top: 0;
	padding: 0 1.5rem;
	box-shadow: 0 2px 16px rgba(0, 0, 0, 0.3);
	border-radius: 14px;
	border: 1px solid rgba(118, 171, 174, 0.15);
	margin-bottom: 8px;
	& > ul {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		& > li {
			list-style: none;
		}
	}
	@media screen and (max-width: 600px) {
		padding: 0 0.5rem;
	}
`;

const HeaderLink = styled.a<{ $flipped?: boolean }>`
	color: ${(p) => (p.$flipped ? '#a8d8da' : '#76abae')};
	font-weight: ${(p) => (p.$flipped ? '700' : '500')};
	text-decoration: none;
	font-size: 13px;
	position: relative;
	display: inline-flex;
	align-items: center;
	gap: 6px;
	padding: 6px 10px;
	border-radius: 8px;
	transition:
		background 0.2s ease,
		color 0.2s ease;

	${(p) =>
		p.$flipped &&
		css`
			background: rgba(118, 171, 174, 0.1);
		`}

	&:hover {
		background: rgba(118, 171, 174, 0.12);
		color: #a8d8da;
		animation: ${float} 0.4s ease infinite alternate;
	}

	@media screen and (max-width: 600px) {
		font-size: 11px;
		padding: 5px 6px;
		gap: 4px;
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

const emojis = ['✏️', '🔢', '🎮', '⭐'];

function StoryNavbar({ story }: Props) {
	function handleNavClick(event: React.MouseEvent<HTMLAnchorElement>) {
		event.preventDefault();
		const href = (event.currentTarget as HTMLAnchorElement).getAttribute(
			'href'
		);
		if (!href) return;
		const el = document.querySelector(href);
		if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
	}

	return (
		<HeaderNav>
			<ul>
				{story.map((item, idx) => (
					<li key={idx}>
						<HeaderLink
							href={item.href}
							$flipped={item.flip}
							onClick={handleNavClick}
						>
							<span>{emojis[idx]}</span>
							{item.name}
						</HeaderLink>
					</li>
				))}
			</ul>
		</HeaderNav>
	);
}

export default StoryNavbar;
