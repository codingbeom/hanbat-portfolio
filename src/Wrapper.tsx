import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';

/* ─── 애니메이션 ─── */
const hoverFloat = keyframes`
  0%   { transform: translateY(0); }
  100% { transform: translateY(-3px); }
`;

const menuSlideDown = keyframes`
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const overlayFadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

/* ─── 레이아웃 ─── */
const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

/* ─── 헤더 ─── */
const HeaderNav = styled.nav<{ $visible: boolean }>`
	height: 60px;
	width: 100%;
	position: sticky;
	top: 0;
	z-index: 100;
	background-color: #31363f;
	padding: 0 1.5rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
	display: flex;
	align-items: center;
	justify-content: space-between;
	opacity: ${(p) => (p.$visible ? 1 : 0)};
	pointer-events: ${(p) => (p.$visible ? 'all' : 'none')};
	transition: opacity 0.3s ease;
`;

/* ─── 로고 (옵션: 현재 경로명 표시) ─── */
const Logo = styled.span`
	color: #76abae;
	font-size: 18px;
	font-weight: 700;
	letter-spacing: 0.05em;
	user-select: none;

	/* 데스크탑에서는 숨김 */
	@media (min-width: 769px) {
		display: none;
	}
`;

/* ─── 데스크탑 메뉴 ─── */
const DesktopMenu = styled.ul`
	display: none;

	@media (min-width: 769px) {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;

		& > li {
			list-style: none;
		}
	}
`;

const HeaderLink = styled(Link)<{ $active: boolean }>`
	color: ${(p) => (p.$active ? '#76ABAE' : 'lightsalmon')};
	font-weight: ${(p) => (p.$active ? '700' : '400')};
	text-decoration: none;
	font-size: 15px;
	position: relative;
	display: inline-block;
	transition: color 0.2s ease;
	letter-spacing: 0.03em;

	/* 활성 링크 언더라인 */
	${(p) =>
		p.$active &&
		css`
			&::after {
				content: '';
				position: absolute;
				bottom: -4px;
				left: 0;
				width: 100%;
				height: 2px;
				background: #76abae;
				border-radius: 2px;
			}
		`}

	&:hover {
		animation: ${hoverFloat} 0.4s ease infinite alternate;
		color: #76abae;
	}
`;

/* ─── 햄버거 버튼 ─── */
const HamburgerBtn = styled.button<{ $open: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 26px;
	height: 18px;
	background: none;
	border: none;
	cursor: pointer;
	padding: 0;
	z-index: 200;

	span {
		display: block;
		width: 100%;
		height: 2px;
		background: lightsalmon;
		border-radius: 2px;
		transition:
			transform 0.3s ease,
			opacity 0.3s ease,
			background 0.3s ease;
		transform-origin: center;
	}

	/* X 모양 변환 */
	${(p) =>
		p.$open &&
		css`
			span:nth-child(1) {
				transform: translateY(8px) rotate(45deg);
				background: #76abae;
			}
			span:nth-child(2) {
				opacity: 0;
				transform: scaleX(0);
			}
			span:nth-child(3) {
				transform: translateY(-8px) rotate(-45deg);
				background: #76abae;
			}
		`}

	/* 데스크탑에서는 숨김 */
  @media (min-width: 769px) {
		display: none;
	}
`;

/* ─── 모바일 드롭다운 오버레이 ─── */
const Overlay = styled.div<{ $open: boolean }>`
	display: ${(p) => (p.$open ? 'block' : 'none')};
	position: fixed;
	inset: 60px 0 0 0;
	background: rgba(0, 0, 0, 0.4);
	z-index: 90;
	animation: ${overlayFadeIn} 0.2s ease;

	@media (min-width: 769px) {
		display: none;
	}
`;

/* ─── 모바일 드롭다운 패널 ─── */
const MobileMenu = styled.ul<{ $open: boolean }>`
	display: ${(p) => (p.$open ? 'flex' : 'none')};
	flex-direction: column;
	position: fixed;
	top: 60px;
	left: 0;
	right: 0;
	background: #2a2f37;
	z-index: 95;
	margin: 0;
	padding: 0.5rem 0 1rem;
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
	animation: ${menuSlideDown} 0.25s ease;
	border-bottom: 2px solid #76abae33;

	& > li {
		list-style: none;
	}

	@media (min-width: 769px) {
		display: none;
	}
`;

const MobileLink = styled(Link)<{ $active: boolean }>`
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 14px 2rem;
	color: ${(p) => (p.$active ? '#76ABAE' : '#e8d5c4')};
	font-weight: ${(p) => (p.$active ? '700' : '400')};
	font-size: 15px;
	text-decoration: none;
	border-left: 3px solid ${(p) => (p.$active ? '#76ABAE' : 'transparent')};
	background: ${(p) => (p.$active ? 'rgba(118,171,174,0.08)' : 'transparent')};
	transition:
		background 0.15s ease,
		color 0.15s ease,
		border-color 0.15s ease;
	letter-spacing: 0.03em;

	&:active {
		background: rgba(118, 171, 174, 0.15);
	}
`;

/* ─── 데이터 ─── */
const linked = [
	{ href: '/', name: 'Home', emoji: '🏠' },
	{ href: '/project', name: 'Project', emoji: '📁' },
	{ href: '/skill', name: 'Skill', emoji: '⚡' },
	{ href: '/story', name: 'Story', emoji: '📖' },
	{ href: '/contact', name: 'Contact', emoji: '✉️' },
	{ href: '/puzzle', name: 'Puzzle', emoji: '🧩' },
	{ href: '/presentation', name: 'MySQL', emoji: '📊' },
	{ href: '/nosql', name: 'MongoDB', emoji: '🍃' },
	{ href: '/supa', name: 'Supabase', emoji: '💾' },
];

/* ─── Props ─── */
interface Props {
	children: React.ReactElement;
}

/* ─── 컴포넌트 ─── */
function Wrapper({ children }: Props) {
	const location = useLocation();
	const [visible, setVisible] = useState(true);
	const [menuOpen, setMenuOpen] = useState(false);

	const handleActiveLink = (href: string) => location.pathname === href;

	// 스크롤 숨김 (story 페이지 전용)
	useEffect(() => {
		if (location.pathname !== '/story') return;

		const handleScroll = () => setVisible(window.scrollY <= 60);
		document.addEventListener('scroll', handleScroll, { passive: true });
		return () => document.removeEventListener('scroll', handleScroll);
	}, [location.pathname]);

	// 라우트 변경 시 메뉴 닫기
	useEffect(() => {
		setMenuOpen(false);
	}, [location.pathname]);

	// 메뉴 열릴 때 body 스크롤 잠금
	useEffect(() => {
		document.body.style.overflow = menuOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [menuOpen]);

	return (
		<Container>
			<HeaderNav $visible={visible}>
				{/* 모바일 로고 */}
				<Logo>
					{linked.find((l) => l.href === location.pathname)?.name ?? '✦'}
				</Logo>

				{/* 데스크탑 메뉴 */}
				<DesktopMenu>
					{linked.map((item) => (
						<li key={item.href}>
							<HeaderLink to={item.href} $active={handleActiveLink(item.href)}>
								{item.name}
							</HeaderLink>
						</li>
					))}
				</DesktopMenu>

				{/* 햄버거 버튼 */}
				<HamburgerBtn
					$open={menuOpen}
					onClick={() => setMenuOpen((v) => !v)}
					aria-label="메뉴 열기/닫기"
					aria-expanded={menuOpen}
				>
					<span />
					<span />
					<span />
				</HamburgerBtn>
			</HeaderNav>

			{/* 모바일 오버레이 */}
			<Overlay $open={menuOpen} onClick={() => setMenuOpen(false)} />

			{/* 모바일 드롭다운 */}
			<MobileMenu $open={menuOpen} role="menu">
				{linked.map((item) => (
					<li key={item.href} role="none">
						<MobileLink
							to={item.href}
							$active={handleActiveLink(item.href)}
							role="menuitem"
							onClick={() => setMenuOpen(false)}
						>
							<span>{item.emoji}</span>
							{item.name}
						</MobileLink>
					</li>
				))}
			</MobileMenu>

			{children}
		</Container>
	);
}

export default Wrapper;
