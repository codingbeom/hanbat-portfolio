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
`;
