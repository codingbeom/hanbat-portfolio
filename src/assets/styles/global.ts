import { createGlobalStyle } from "styled-components";

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
		font-family: "Pretendard";
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

	.face1 {
		transform: rotateY(0deg) translateZ(-764px);
	}
	.face2 {
		transform: rotateY(45deg) translateZ(-764px);
	}
	.face3 {
		transform: rotateY(90deg) translateZ(-764px);
	}
	.face4 {
		transform: rotateY(135deg) translateZ(-764px);
	}
	.face5 {
		transform: rotateY(180deg) translateZ(-764px);
	}
	.face6 {
		transform: rotateY(225deg) translateZ(-764px);
	}
	.face7 {
		transform: rotateY(270deg) translateZ(-764px);
	}
	.face8 {
		transform: rotateY(315deg) translateZ(-764px);
	}
`;
