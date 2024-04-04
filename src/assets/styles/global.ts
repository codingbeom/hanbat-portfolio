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
		height: 100%;
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

	section {
		min-height: 400px;
	}
`;
