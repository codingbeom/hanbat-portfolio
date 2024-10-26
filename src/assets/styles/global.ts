import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

export const GlobalStyleProvider = styled.createGlobalStyle`
	*,
	*::after,
	*::before {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		touch-action: pan-y;
	}

	:root {
		font-family: 'Pretendard';
		line-height: 1.5;
		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	html,
	body,
	#root {
		width: 100%;
		background-color: #222831;
		color: #dddddd;
		cursor: url(/hanbat-portfolio/gam1092.cur), auto;
	}

	html ::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}

	html ::-webkit-scrollbar-button {
		display: none;
	}

	html ::-webkit-scrollbar-corner {
		display: none;
	}

	html ::-webkit-scrollbar-thumb {
		background: #b7bdc6;
		border-radius: 7.5px;
	}

	html ::-webkit-scrollbar-track {
		background: transparent;
	}
	.slick-slide {
		& > div {
			& > div {
				height: 60vh;
				& > h1 {
					text-align: center;
				}
			}
		}
		& img {
			object-fit: fill;
			width: 100%;
			height: 60vh;
		}
	}
	.dnd {
		box-shadow: 0px 0px 15px lightblue;
		text-align: center;
		height: 400px;
		width: 400px;
	}
	.dnd > div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
	}
	.dnd > div > span {
		font-size: 14px;
		font-weight: bolder;
		color: #76abaa;
	}

	.slick-dots li.slick-active button:before {
		opacity: 1;
		color: blue;
	}
	.slick-dots li button:before {
		opacity: 0.8;
	}
`;
