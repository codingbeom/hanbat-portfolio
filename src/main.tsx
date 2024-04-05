import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { GlobalStyleProvider } from "./assets/styles/global.ts";

import Chapter1 from "./assets/images/001.png";
import Chapter2 from "./assets/images/002.png";
import Chapter3 from "./assets/images/003.png";
import Chapter4 from "./assets/images/004.png";

console.log(import.meta.env.BASE_URL);

export const storyLinked = [
	{
		href: "#name",
		name: "나의 이름 삼행시",
		img: Chapter1,
	},
	{
		href: "#number",
		name: "숫자 아이덴티티",
		img: Chapter2,
	},
	{
		href: "#hobby",
		name: "취미 생활",
		img: Chapter3,
	},
	{
		href: "#model",
		name: "나의 롤모델",
		img: Chapter4,
	},
];

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter basename={import.meta.env.BASE_URL}>
		<GlobalStyleProvider />
		<App />
	</BrowserRouter>
);
