import{r as p,j as e}from"./react-YOz2hQel.js";import{i as Z}from"./@emotion-D-ku2L_v.js";import{c as ee}from"./react-dom-2CQTX6Uh.js";import{L as se,B as ne}from"./react-router-dom-BwfYDIAl.js";/* empty css                       */import{d as n,m as H,f as re,Y as ie}from"./styled-components-DSn1G4Go.js";import{b as le,d as ae,e as S}from"./react-router-BjYqc64p.js";import{m as O}from"./framer-motion-C3xDexNK.js";import{G as te,E as ce,P as oe}from"./react-bootstrap-icons-DSVQNG8Y.js";import{X as U}from"./reveal.js-BOpe6G5o.js";import{S as de}from"./react-slick-BFdVUf1J.js";import{u as xe,a as he,D as je}from"./react-dnd-KbD2iaha.js";import{H as pe}from"./react-dnd-html5-backend-1HQjlkwI.js";import{T as me}from"./react-dnd-touch-backend-BF3WdvOs.js";import{E as ge}from"./react-drag-drop-files-BGHCxwuL.js";import{P as ue,S as fe}from"./dnd-multi-backend-CnBkwHxh.js";import{C as d,b as x}from"./react-circular-progressbar-D-OSc2_R.js";import{_ as be}from"./react-card-flip-Byd4lJLs.js";import"./classnames-r5axgyEj.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-DyRdwddT.js";import"./tslib-wbdO-F7s.js";import"./shallowequal-B6su5-_x.js";import"./stylis-DinRj2j6.js";import"./prop-types-CNJ-wrTR.js";import"./lodash.debounce-Cx665Aaa.js";import"./resize-observer-polyfill-BWCBsnt7.js";import"./json2mq-DXkj81uw.js";import"./string-convert-DdSrkZLz.js";import"./enquire.js-B8qsBZnP.js";import"./dnd-core-D9oQlGRy.js";import"./redux-CuxFRhX_.js";import"./@react-dnd-CcuaHj6U.js";import"./fast-deep-equal-6ves6buk.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();const ye=n.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`,Ne=H`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-2.5px);
    }
`,we=n.nav`
	height: 60px;
	width: 100%;
	position: sticky;
	z-index: 10;
	background-color: #31363f;
	top: 0;
	padding: 0 2rem;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	opacity: ${s=>s.$visible?1:0};
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
`,ke=n(se)`
	color: ${s=>s.$active?"#76ABAE":"lightsalmon"};
	font-weight: ${s=>s.$active?"bold":"normal"};
	text-decoration: none;
	font-size: 16px;
	position: relative;
	display: inline-block;
	transition: 0.3s ease;
	&:hover {
		animation: ${Ne} 0.5s ease infinite alternate;
	}
`,ve=[{href:"/",name:"Home"},{href:"/project",name:"Project"},{href:"/skill",name:"Skill"},{href:"/story",name:"Story"},{href:"/contact",name:"Contact"},{href:"/puzzle",name:"Puzzle"},{href:"/presentation",name:"PPT"},{href:"/nosql",name:"MongoDB"}];function Se({children:s}){const l=le(),[o,a]=p.useState(!0),r=c=>l.pathname===c,t=()=>{window.scrollY>60?a(!1):a(!0)};return p.useEffect(()=>{if(console.log(l.pathname),l.pathname==="/story")return document.addEventListener("scroll",t),()=>{document.removeEventListener("scroll",t)}},[]),e.jsxs(ye,{children:[e.jsx(we,{$visible:o,children:e.jsx("ul",{children:ve.map((c,R)=>e.jsx("li",{children:e.jsx(ke,{to:c.href,$active:r(c.href),children:c.name})},R))})}),s]})}const Ee=n(O.section)`
	padding: 40px 0;
`,$e=n.div`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 15px;
`,Ce=n.div`
	text-align: center;
	margin-bottom: 30px;

	h2 {
		font-size: 36px;
		color: #76abaa;
		margin-bottom: 10px;
	}
`,Re=n.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: stretch;
	@media screen and (max-width: 800px) {
		flex-direction: column;
	}
`,L=n.div`
	flex: 1;
	margin: 0 15px;
	text-align: center;

	i {
		font-size: 24px;
		color: #007bff;
	}

	h4 {
		font-size: 24px;
		color: #76abaa;
		margin-bottom: 10px;
	}

	p {
		font-size: 18px;
		color: #ccc;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	@media screen and (max-width: 800px) {
		margin: 15px 0;
	}
`,Oe=n.div`
	width: 100%;
	max-width: 800px;
	margin: 0 auto;
	margin-top: 50px;

	iframe {
		width: 100%;
		height: 400px;
		border: none;
	}
`;function Te(){return e.jsx(Ee,{initial:{opacity:0,y:100},whileInView:{opacity:1,y:0},viewport:{once:!1},transition:{ease:"easeInOut",duration:2,y:{duration:1}},children:e.jsxs($e,{children:[e.jsx(Ce,{children:e.jsx("h2",{children:"Contact"})}),e.jsxs(Re,{children:[e.jsx(L,{children:e.jsxs("div",{className:"address",children:[e.jsx("i",{className:"#",children:e.jsx(te,{})}),e.jsx("h4",{children:"Location"}),e.jsx("p",{children:"43, Dacheongro, Daeduckgu, Daejeon, Republic of Korea"})]})}),e.jsx(L,{children:e.jsx("a",{href:"mailto:lkb951103@gmail.com",children:e.jsxs("div",{className:"email",children:[e.jsx("i",{className:"#",children:e.jsx(ce,{})}),e.jsx("h4",{children:"Email"}),e.jsx("p",{children:"lkb951103@gmail.com"})]})})}),e.jsx(L,{children:e.jsx("a",{href:"tel:010-9581-9511",children:e.jsxs("div",{className:"phone",children:[e.jsx("i",{className:"#",children:e.jsx(oe,{})}),e.jsx("h4",{children:"Call"}),e.jsx("p",{children:"010-9581-9511"})]})})})]}),e.jsx(Oe,{children:e.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3209.187065945216!2d127.42896287626438!3d36.453035287191554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565378256b23ddb%3A0x28573d3c56aaf32f!2z64yA7KCE6rSR7Jet7IucIOuMgOuNleq1rCDrjIDssq3roZwgNDM!5e0!3m2!1sko!2skr!4v1694869940137!5m2!1sko!2skr",width:"100%",height:"100%",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})]})})}const Ie=n(O.section)`
	padding: 40px 0;
`,ze=n.div`
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
`,Le=n.div`
	text-align: center;
	margin-bottom: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
	& > div {
		max-width: 80%;
		& > p {
			line-height: 2;
		}
	}

	h2 {
		font-size: 36px;
		color: #76abaa;
		margin-bottom: 10px;
	}
`,De=n.div`
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
`,P=n.div`
	position: relative;
	flex: 0 0 50%;
	max-width: 40%;
	padding-right: 15px;
	padding-left: 15px;

	@media (max-width: 768px) {
		flex: 0 0 100%;
		max-width: 100%;
		margin-bottom: 30px;
	}
`,u=n.div`
	position: relative;
	padding: 20px;
	background-color: #ccc;
	margin-bottom: 20px;
	border-radius: 10px;
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
	&::before {
		content: '';
		position: absolute;
		left: -20px;
		top: -40%;
		bottom: 60%;
		width: 4px;
		border-radius: 6px;
		background-color: #ccc;
		display: ${({$isFirst:s})=>s?"none":"block"};
	}
	&::after {
		content: '';
		position: absolute;
		left: -23px;
		bottom: 60%;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: #ccc;
		display: ${({$isFirst:s})=>s?"none":"block"};
	}

	h4 {
		font-size: 20px;
		color: #007bff;
		margin-bottom: 10px;
	}

	h5 {
		font-size: 16px;
		color: #555;
		margin-bottom: 5px;
	}

	p {
		font-size: 15px;
		color: black;
		margin-bottom: 5px;
	}

	em {
		font-size: 17px;
		color: black;
		margin-bottom: 5px;
	}

	ul {
		padding-left: 20px;

		li {
			font-size: 15px;
			color: black;
			margin-bottom: 5px;
		}
	}
`;function Pe(){return e.jsx(Ie,{initial:{opacity:0,y:100},whileInView:{opacity:1,y:0},viewport:{once:!1},transition:{ease:"easeInOut",duration:2,y:{duration:1}},children:e.jsxs(ze,{children:[e.jsxs(Le,{children:[e.jsx("h2",{children:"Career"}),e.jsx("div",{children:e.jsxs("p",{children:["안녕하세요! 저는 이기범이라고 합니다.",e.jsx("br",{}),"개발하는 것을 즐기며 해답을 찾기 위해 끊임없이 생각하는 사람입니다.",e.jsx("br",{})," 또한, 미래에 대한 고민을 하면서 새로운 가능성을 모색하는 것을 좋아하며,",e.jsx("br",{})," 제가 해결해야 할 문제에는 적극적인 행동을 통해 더 나은 결과물을 만들어내는 것을 목표로 하고있습니다.",e.jsx("br",{}),"협업을 통해 함께 미래를 개척해나가는 기회를 소중히 생각하며,",e.jsx("br",{})," 더 나은 세상을 만들어가는 일에 열정을 갖고 있습니다.",e.jsx("br",{}),"저는 다양한 분야에 도전하는 것을 즐기며,",e.jsx("br",{})," 인공지능, 빅데이터, 머신러닝 등의 기술에 관심을 가지고 있습니다.",e.jsx("br",{})," 다양한 분야에 도전함으로써, 더 큰 영향력을 가진 개발자로 성장하고 싶습니다."]})})]}),e.jsxs(De,{children:[e.jsxs(P,{children:[e.jsx("h3",{children:"Education"}),e.jsxs(u,{$isFirst:!0,children:[e.jsx("h4",{children:"전자기기 기능사"}),e.jsx("h5",{children:"2013"}),e.jsx("em",{children:"자격증 취득"})]}),e.jsxs(u,{children:[e.jsx("h4",{children:"전기 기능사"}),e.jsx("h5",{children:"2017"}),e.jsx("em",{children:"자격증 취득"})]}),e.jsxs(u,{children:[e.jsx("h4",{children:"전기 기사"}),e.jsx("h5",{children:"2020. 12"}),e.jsx("em",{children:"자격증 취득"})]}),e.jsxs(u,{children:[e.jsx("h4",{children:"노마드코더"}),e.jsx("h5",{children:"2021. 07 - 2021. 09"}),e.jsx("em",{children:"Html5, Css3 코코아톡 클론"}),e.jsx("p",{children:"챌린지 과정 수료"})]}),e.jsxs(u,{children:[e.jsx("h4",{children:"효성 컴퓨터학원"}),e.jsx("h5",{children:"2021. 07 - 2021. 10"}),e.jsx("em",{children:"JAVA 프로그래밍 과정 수료"}),e.jsx("p",{children:"NCS기반 국비 과정, 응용 SW엔지니어링(3수준)"})]}),e.jsxs(u,{children:[e.jsx("h4",{children:"노마드코더"}),e.jsx("h5",{children:"2021. 09 - 2021. 11"}),e.jsx("em",{children:"JavaScript To-do-list"}),e.jsx("p",{children:"JavaScript를 활용한 To-do-list 챌린지 과정 수료"})]}),e.jsxs(u,{children:[e.jsx("h4",{children:"노마드코더"}),e.jsx("h5",{children:"2023. 06 - 2023. 07"}),e.jsx("em",{children:"TypeScript Challenge"}),e.jsx("p",{children:"TypeScript 챌린지 과정 수료"})]}),e.jsxs(u,{children:[e.jsx("h4",{children:"한밭대학교"}),e.jsx("h5",{children:"2024. 03 - 재학중"}),e.jsx("em",{children:"대전 한밭대학교 소프트웨어응용학과"}),e.jsx("p",{children:"대전 한밭대학교 야간(소프트웨어 응용학과) 재학중"})]})]}),e.jsxs(P,{children:[e.jsx("h3",{children:"Work Experience"}),e.jsxs(u,{$isFirst:!0,children:[e.jsx("h4",{children:"(주)하우웰이엠에스"}),e.jsx("h5",{children:"2014. 01 ~ 2017. 05"}),e.jsx("em",{children:"방위산업체 산업기능요원"}),e.jsxs("ul",{children:[e.jsx("li",{children:"SMD라인 담당"}),e.jsx("li",{children:"생산라인 관리"})]})]}),e.jsxs(u,{children:[e.jsx("h4",{children:"(주)한성시스코"}),e.jsx("h5",{children:"2017. 06 ~ 2021. 12"}),e.jsx("em",{children:"제조사업부 - 생산기술 팀"}),e.jsxs("ul",{children:[e.jsx("li",{children:"외주 업체 생산관리 및 계획 담당"}),e.jsx("li",{children:"Iot 제품 펌웨어 다운로드 및 펌웨어 서버 안정화,서버 관리"}),e.jsx("li",{children:"분배기 생산 라인 관리"})]})]}),e.jsxs(u,{children:[e.jsx("h4",{children:"진솔루션즈"}),e.jsx("h5",{children:"2022. 01 - 2022. 11"}),e.jsx("em",{children:"솔루션 개발팀"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Vue3 + Typescript를 사용해 프론트 개발 및 유지보수"}),e.jsx("li",{children:"Electron + Vue3 + Sqlite3 + TS를 사용해 windows 응용프로그램 개발 및 유지보수"})]})]}),e.jsxs(u,{children:[e.jsx("h4",{children:"(주)에어사운드"}),e.jsx("h5",{children:"2022. 12 - 재직중"}),e.jsx("em",{children:"소프트웨어 개발팀"}),e.jsxs("ul",{children:[e.jsx("li",{children:"React + Ts를 사용해 프론트 개발 및 유지보수"}),e.jsx("li",{children:"Electron + React + Sqlite3 + TS를 사용해 windows 응용프로그램 개발 및 유지보수"}),e.jsx("li",{children:"Flutter를 사용해 크로스플랫폼 어플리케이션 개발 및 유지보수"}),e.jsx("li",{children:"Python을 활용한 Crawling및 음성인식 엔진 서버 구축"}),e.jsx("li",{children:"Bun.js(Ts) + Hono + MySql + Redis 웹 서버 구축"})]})]})]})]})]})})}const Y=n.h1`
	font-size: 3em !important;
	margin-bottom: 20px !important;
	text-shadow: 0 14px 30px rgba(4, 11, 20, 0.45) !important;
	color: #f9fafb !important;

	@media (max-width: 768px) {
		font-size: 2em;
	}
`,y=n.h2`
	font-size: 1.4em !important;
	margin-bottom: 8px !important;
	background: linear-gradient(120deg, #7dd3fc 0%, #38bdf8 45%, #c084fc 100%);
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent !important;
	filter: drop-shadow(0 4px 12px rgba(8, 18, 33, 0.5));
`,N=n.pre`
	background: linear-gradient(145deg, #0f172a, #111827);
	padding: 10px 16px;
	border-radius: 14px;
	text-align: left;
	box-shadow: 0 10px 24px rgba(8, 18, 33, 0.45);
	border: 1px solid rgba(148, 163, 184, 0.15);
	width: fit-content !important;
	margin: 6px auto !important;

	code {
		color: #f4f4f5;
		font-family: 'Courier New', monospace;

		.keyword {
			color: #60a5fa;
			font-weight: bold;
		}

		.string {
			color: #f97316;
		}

		.comment {
			color: #86efac;
			font-style: italic;
		}

		.function {
			color: #facc15;
		}
	}
`,E=n.div`
	margin: 8px auto;
	max-width: 92%;
	text-align: left;
	background: rgba(15, 23, 42, 0.6);
	border-radius: 16px;
	border: 1px solid rgba(125, 211, 252, 0.18);
	box-shadow:
		inset 0 1px 0 rgba(255, 255, 255, 0.04),
		0 12px 28px rgba(8, 18, 33, 0.4);
	ul {
		font-family: 'Roboto', sans-serif !important;
		margin: 0 !important;
		width: 100%;
		font-size: 0.9em;
		line-height: 1.4;
		list-style: none;
		padding: 10px;

		li {
			width: 100%;
			margin-bottom: 7px;
			padding: 7px 10px 7px 50px;
			text-indent: -50px;
			background: linear-gradient(
				135deg,
				rgba(56, 189, 248, 0.08),
				rgba(192, 132, 252, 0.12)
			);
			border-radius: 12px;
			border: 1px solid rgba(56, 189, 248, 0.15);
			box-shadow: 0 5px 14px rgba(8, 18, 33, 0.3);
			color: #e2e8f0;

			&:last-child {
				margin-bottom: 0;
			}
			&::before {
				content: '▸ ';
				color: #38bdf8;
				font-weight: bold;
				margin-right: 10px;
			}
		}
	}
`,Me=n.table`
	border-collapse: collapse;
	font-size: 0.92em;
	box-shadow: 0 14px 32px rgba(8, 18, 33, 0.4);
	border-radius: 14px;
	overflow: hidden;
	border: 1px solid rgba(148, 163, 184, 0.2);
	margin: 6px auto !important;

	thead tr {
		background: linear-gradient(145deg, #38bdf8, #818cf8);
		color: #0f172a;
		text-align: left;
	}

	th,
	td {
		padding: 10px 14px;
		color: #e2e8f0;
	}

	tbody tr {
		border-bottom: 1px solid rgba(148, 163, 184, 0.18);

		&:nth-of-type(even) {
			background: rgba(30, 41, 59, 0.85);
		}

		&:hover {
			background: rgba(59, 74, 99, 0.95);
		}
	}
`,Be=n.div`
	background: linear-gradient(
		135deg,
		rgba(56, 189, 248, 0.35),
		rgba(99, 102, 241, 0.6)
	);
	padding: 6px 12px;
	border-radius: 16px;
	margin: 0 auto 8px;
	max-width: 1100px;
	box-shadow: 0 14px 32px rgba(8, 18, 33, 0.45);
	border: 1px solid rgba(125, 211, 252, 0.2);

	p {
		color: #f8fafc;
		font-size: 0.95em;
		margin: 0;
	}
`,D=n.p`
	font-size: 0.88em;
	opacity: 0.85;
	color: #cbd5f5;
`,Fe=()=>e.jsxs("section",{children:[e.jsx(y,{children:"DISTINCT 중복 제거"}),e.jsx(N,{children:e.jsxs("code",{children:[e.jsx("span",{className:"comment",children:"-- 주문이 있는 사용자 목록을 중복 없이 조회"}),`
`,e.jsx("span",{className:"keyword",children:"SELECT DISTINCT"})," users.name",`
`,e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"INNER JOIN"})," orders",`
`,e.jsx("span",{className:"keyword",children:"ON"})," users.id = orders.user_id;"]})}),e.jsx(E,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"DISTINCT"}),": 결과에서 중복된 행을 제거합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"활용 예시"}),": 한 사용자가 여러 번 주문했더라도, 이름을 한 번만 표시하고 싶을 때 사용합니다."]}),e.jsxs("li",{children:["예: 같은 사용자가 여러 상품을 주문했다면 ",e.jsx("code",{children:"JOIN"})," 결과에 이름이 반복되지만, ",e.jsx("code",{children:"DISTINCT"}),"를 사용하면 한 번만 표시됩니다."]})]})})]},"10"),Ae=()=>e.jsxs("section",{children:[e.jsx(y,{children:"GROUP BY 그룹화 - 1"}),e.jsx(N,{children:e.jsxs("code",{children:[e.jsx("span",{className:"keyword",children:"SELECT"})," country,"," ",e.jsx("span",{className:"function",children:"COUNT"}),"(*)",`
`,e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"GROUP BY"})," country;"]})}),e.jsx(E,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"GROUP BY"}),": 특정 컬럼(",e.jsx("code",{children:"country"}),")을 기준으로 데이터를 그룹화합니다."]}),e.jsxs("li",{children:["집계 함수: ",e.jsx("code",{children:"COUNT"}),", ",e.jsx("code",{children:"SUM"}),", ",e.jsx("code",{children:"AVG"}),","," ",e.jsx("code",{children:"MAX"}),", ",e.jsx("code",{children:"MIN"})," 등과 함께 사용하여 그룹별 통계를 구할 수 있습니다."]}),e.jsxs("li",{children:["예: 각 나라별 사용자 수를 계산하거나, 나라별 평균 나이(",e.jsx("code",{children:"AVG(age)"}),") 등을 구할 때 사용합니다."]})]})})]},"7"),Ve=()=>e.jsxs("section",{children:[e.jsx(y,{children:"GROUP BY 그룹화 - 2"}),e.jsx(N,{children:e.jsxs("code",{children:[e.jsx("span",{className:"comment",children:"-- 나라별 평균 나이가 30세 이상인 국가"}),`
`,e.jsx("span",{className:"keyword",children:"SELECT"})," country,"," ",e.jsx("span",{className:"function",children:"AVG"}),"(age)",`
`,e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"GROUP BY"})," country",`
`,e.jsx("span",{className:"keyword",children:"HAVING"})," ",e.jsx("span",{className:"function",children:"AVG"}),"(age) >= 30;"]})}),e.jsx(E,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"HAVING"}),": ",e.jsx("code",{children:"GROUP BY"}),"로 그룹화된 결과에 조건을 적용할 때 사용합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"WHERE"}),"과의 차이점: ",e.jsx("code",{children:"WHERE"}),"은 그룹화 전에 개별 행을 필터링하고, ",e.jsx("code",{children:"HAVING"}),"은 그룹화된 결과(집계 결과)에 조건을 적용합니다."]}),e.jsx("li",{children:"예: 나라별 평균 나이가 30세 이상인 국가를 조회"})]})})]},"8"),Ge=()=>e.jsxs("section",{children:[e.jsx(y,{children:"JOIN 테이블 조인"}),e.jsx(N,{children:e.jsxs("code",{children:[e.jsx("span",{className:"keyword",children:"SELECT"})," users.name, orders.product",`
`,e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"INNER JOIN"})," orders",`
`,e.jsx("span",{className:"keyword",children:"ON"})," users.id = orders.user_id;"]})}),e.jsx(E,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"JOIN"}),": 두 개 이상의 테이블을 연결해 관련 데이터를 함께 조회할 때 사용합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"INNER JOIN"}),": 양쪽 테이블에 모두 존재하는 데이터만 조회 (교집합)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"LEFT JOIN"}),": 왼쪽 테이블을 중심으로 오른쪽 테이블을 매치. 오른쪽에 없으면 NULL 표시."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"RIGHT JOIN"}),": LEFT JOIN의 반대."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"OUTER JOIN"}),": 양쪽 테이블의 모든 데이터 조회 (합집합)"]})]})})]},"9"),He=()=>e.jsxs("section",{children:[e.jsx(y,{children:"LIMIT"}),e.jsx(Be,{children:e.jsxs("p",{children:["💡 대량 데이터 조회 시 ",e.jsx("code",{children:"LIMIT"}),"과 ",e.jsx("code",{children:"OFFSET"}),"으로 성능 최적화!"]})}),e.jsx(N,{children:e.jsxs("code",{children:[e.jsx("span",{className:"keyword",children:"SELECT"})," *"," ",e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"ORDER BY"})," created_at"," ",e.jsx("span",{className:"keyword",children:"DESC"}),`
`,e.jsx("span",{className:"keyword",children:"LIMIT"})," 10;",`

`,e.jsx("span",{className:"keyword",children:"SELECT"})," *"," ",e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"ORDER BY"})," created_at"," ",e.jsx("span",{className:"keyword",children:"DESC"}),`
`,e.jsx("span",{className:"keyword",children:"LIMIT"})," 10"," ",e.jsx("span",{className:"keyword",children:"OFFSET"})," 10;"]})}),e.jsx(E,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"LIMIT"}),": 조회할 결과의 개수를 제한합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"OFFSET"}),": 조회를 시작할 위치(행 번호)를 지정합니다. 예:"," ",e.jsx("code",{children:"LIMIT 10 OFFSET 10"})," → 11번째 행부터 10개 조회"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"활용 예시"}),": 페이지네이션, 무한 스크롤, 최근 N개 데이터만 보기 등"]})]})})]},"11"),Ue=()=>e.jsxs("section",{children:[e.jsx(y,{children:"ORDER BY 정렬"}),e.jsx(N,{children:e.jsxs("code",{children:[e.jsx("span",{className:"keyword",children:"SELECT"})," *"," ",e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"ORDER BY"})," age, name"," ",e.jsx("span",{className:"keyword",children:"DESC"}),";"]})}),e.jsx(E,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"ORDER BY"}),": 결과를 정렬"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"ASC"}),": 오름차순 (기본값)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"DESC"}),": 내림차순"]}),e.jsx("li",{children:"여러 컬럼을 동시에 정렬할 수 있으며, 먼저 정렬할 컬럼을 앞에 작성합니다."})]})})]},"6"),Ye=()=>e.jsxs("section",{"data-background-gradient":"linear-gradient(to bottom, #17b2c3, #283b95)",children:[e.jsx(Y,{children:"감사합니다!"}),e.jsxs(D,{children:["사용도구: React, Reveal.js, styled-components ",e.jsx("br",{}),"참고: ChatGPT"]})]},"12"),_e=()=>e.jsxs("section",{children:[e.jsx(y,{children:"전체 데이터 조회"}),e.jsx(N,{children:e.jsxs("code",{children:[e.jsx("span",{className:"keyword",children:"SELECT"})," *"," ",e.jsx("span",{className:"keyword",children:"FROM"})," users;"]})}),e.jsxs(Me,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"id"}),e.jsx("th",{children:"name"}),e.jsx("th",{children:"email"}),e.jsx("th",{children:"age"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"1"}),e.jsx("td",{children:"김철수"}),e.jsx("td",{children:"kim@example.com"}),e.jsx("td",{children:"25"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"2"}),e.jsx("td",{children:"이영희"}),e.jsx("td",{children:"lee@example.com"}),e.jsx("td",{children:"30"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"3"}),e.jsx("td",{children:"박민수"}),e.jsx("td",{children:"park@example.com"}),e.jsx("td",{children:"28"})]})]})]})]},"2"),Qe=()=>e.jsxs("section",{children:[e.jsx(y,{children:"SELECT 기본 문법"}),e.jsx(N,{children:e.jsxs("code",{children:[e.jsx("span",{className:"keyword",children:"SELECT"})," column1, column2, ...",`
`,e.jsx("span",{className:"keyword",children:"FROM"})," table_name;"]})}),e.jsx(E,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"SELECT"}),": CRUD 중 'Read'에 해당","	",e.jsx("span",{style:{color:"#dcdcaa",fontSize:"0.7em"},children:"-읽기, 조회, 검색-"}),e.jsxs(D,{children:["* CRUD: ",e.jsx("em",{children:"Create, Read, Update, Delete"})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"FROM"}),": 데이터를 가져올 테이블 지정"]}),e.jsxs("li",{children:["모든 컬럼을 조회하려면 ",e.jsx("code",{style:{color:"#dcdcaa"},children:"*"})," ","사용"]})]})})]},"1"),We=()=>e.jsxs("section",{"data-background-gradient":"linear-gradient(to bottom, #283b95, #17b2c3)",children:[e.jsxs(Y,{children:["데이터베이스 ",e.jsx("br",{}),"SELECT"]}),e.jsx(D,{children:"MySQL 조회의 모든 것"})]},"0"),Je=()=>e.jsxs("section",{children:[e.jsx(y,{children:"WHERE 절 활용 - 1"}),e.jsx(N,{children:e.jsxs("code",{children:[e.jsx("span",{className:"comment",children:"-- AND 조건 (age가 25초과하고 name 두번째에 '기'가 포함되는 users 테이블의 모든 데이터 조회)"}),`
`,e.jsx("span",{className:"keyword",children:"SELECT"})," *"," ",e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"WHERE"})," age > 25"," ",e.jsx("span",{className:"keyword",children:"AND"})," name"," ",e.jsx("span",{className:"keyword",children:"LIKE"})," ",e.jsx("span",{className:"string",children:"'_기%'"}),";",`

`,e.jsx("span",{className:"comment",children:"-- OR 조건 (age가 25미만이거나 30초과인 users 테이블의 name, gender 데이터 조회)"}),`
`,e.jsx("span",{className:"keyword",children:"SELECT"})," name, gender"," ",e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"WHERE"})," age < 25"," ",e.jsx("span",{className:"keyword",children:"OR"})," age > 30;"]})})]},"4"),qe=()=>e.jsxs("section",{children:[e.jsx(y,{children:"WHERE 절 활용 - 2"}),e.jsx(N,{children:e.jsxs("code",{children:[e.jsx("span",{className:"comment",children:"-- IN 조건 (age가 25, 30, 35인 users 테이블의 모든 데이터 조회)"}),`
`,e.jsx("span",{className:"keyword",children:"SELECT"})," *"," ",e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"WHERE"})," age"," ",e.jsx("span",{className:"keyword",children:"IN"})," (25, 30, 35);",`

`,e.jsx("span",{className:"comment",children:"-- BETWEEN 조건 (age가 25이상 30이하인 users 테이블의 모든 데이터 조회)"}),`
`,e.jsx("span",{className:"keyword",children:"SELECT"})," *"," ",e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"WHERE"})," age"," ",e.jsx("span",{className:"keyword",children:"BETWEEN"})," 25"," ",e.jsx("span",{className:"keyword",children:"AND"})," 30;"]})})]},"5"),Ke=()=>e.jsxs("section",{children:[e.jsx(y,{children:"WHERE 조건절"}),e.jsx(N,{children:e.jsxs("code",{children:[e.jsx("span",{className:"keyword",children:"SELECT"})," *"," ",e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"WHERE"})," age > 25;"]})}),e.jsx(E,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"WHERE"}),": 특정 조건을 필터링"]}),e.jsx("li",{children:"비교 연산자: =, !=, >, <, >=, <="}),e.jsx("li",{children:"논리 연산자: AND, OR, NOT"}),e.jsx("li",{children:"패턴 매칭: LIKE, ILIKE(대소문자 구분 X)"}),e.jsx("li",{children:"NULL 체크: IS NULL, IS NOT NULL"})]})})]},"3"),Xe=()=>{const s=p.useRef(null),l=p.useRef(null);return p.useEffect(()=>{if(!l.current)return l.current=new U(s.current,{width:1500,height:900,transition:"slide",hash:!0,controls:!0,progress:!0,slideNumber:"c/t",embedded:!0,mouseWheel:!0}),l.current.initialize().then(()=>{console.log("Reveal.js initialized successfully")}),()=>{try{l.current&&(l.current.destroy(),l.current=null)}catch{console.warn("Reveal.js destroy call failed.")}}},[]),e.jsx("div",{className:"reveal",ref:s,style:{height:"calc(100vh - 60px)"},children:e.jsxs("div",{className:"slides",children:[e.jsx(We,{}),e.jsx(Qe,{}),e.jsx(_e,{}),e.jsx(Ke,{}),e.jsx(Je,{}),e.jsx(qe,{}),e.jsx(Ue,{}),e.jsx(Ae,{}),e.jsx(Ve,{}),e.jsx(Ge,{}),e.jsx(Fe,{}),e.jsx(He,{}),e.jsx(Ye,{})]})})},_=n.h1`
	font-size: 3em !important;
	margin-bottom: 20px !important;
	text-shadow: 0 14px 30px rgba(4, 11, 20, 0.45) !important;
	color: #f9fafb !important;

	@media (max-width: 768px) {
		font-size: 2em;
	}
`,b=n.h2`
	font-size: 1.4em !important;
	margin-bottom: 8px !important;
	background: linear-gradient(120deg, #6ee7b7 0%, #34d399 45%, #10b981 100%);
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent !important;
	filter: drop-shadow(0 4px 12px rgba(8, 18, 33, 0.5));
`,k=n.pre`
	background: linear-gradient(145deg, #0f172a, #111827);
	padding: 10px 16px;
	border-radius: 14px;
	text-align: left;
	box-shadow: 0 10px 24px rgba(8, 18, 33, 0.45);
	border: 1px solid rgba(148, 163, 184, 0.15);
	margin: 6px auto !important;

	code {
		color: #f4f4f5;
		font-family: 'Courier New', monospace;

		.keyword {
			color: #34d399;
			font-weight: bold;
		}

		.string {
			color: #fb923c;
		}

		.comment {
			color: #86efac;
			font-style: italic;
		}

		.function {
			color: #fde68a;
		}

		.operator {
			color: #67e8f9;
			font-weight: bold;
		}
	}
`,v=n.div`
	margin: 8px auto;
	max-width: 92%;
	text-align: left;
	background: rgba(15, 23, 42, 0.6);
	border-radius: 16px;
	border: 1px solid rgba(52, 211, 153, 0.18);
	box-shadow:
		inset 0 1px 0 rgba(255, 255, 255, 0.04),
		0 12px 28px rgba(8, 18, 33, 0.4);
	ul {
		font-family: 'Roboto', sans-serif !important;
		margin: 0 !important;
		width: 100%;
		font-size: 0.9em;
		line-height: 1.4;
		list-style: none;
		padding: 10px;

		li {
			width: 100%;
			margin-bottom: 7px;
			padding: 7px 10px 7px 50px;
			text-indent: -50px;
			background: linear-gradient(
				135deg,
				rgba(52, 211, 153, 0.08),
				rgba(16, 185, 129, 0.12)
			);
			border-radius: 12px;
			border: 1px solid rgba(52, 211, 153, 0.15);
			box-shadow: 0 5px 14px rgba(8, 18, 33, 0.3);
			color: #e2e8f0;

			&:last-child {
				margin-bottom: 0;
			}
			&::before {
				content: '▸ ';
				color: #34d399;
				font-weight: bold;
				margin-right: 10px;
			}
		}
	}
`,Q=n.table`
	border-collapse: collapse;
	font-size: 0.92em;
	box-shadow: 0 14px 32px rgba(8, 18, 33, 0.4);
	border-radius: 14px;
	overflow: hidden;
	border: 1px solid rgba(148, 163, 184, 0.2);
	margin: 6px auto !important;

	thead tr {
		background: linear-gradient(145deg, #34d399, #059669);
		color: #0f172a;
		text-align: left;
	}

	th,
	td {
		padding: 10px 14px;
		color: #e2e8f0;
	}

	tbody tr {
		border-bottom: 1px solid rgba(148, 163, 184, 0.18);

		&:nth-of-type(even) {
			background: rgba(30, 41, 59, 0.85);
		}

		&:hover {
			background: rgba(59, 74, 99, 0.95);
		}
	}
`,W=n.div`
	width: max-content;
	background: linear-gradient(
		135deg,
		rgba(52, 211, 153, 0.35),
		rgba(5, 150, 105, 0.6)
	);
	padding: 6px 12px;
	border-radius: 16px;
	margin: 0 auto 8px;
	max-width: 1100px;
	box-shadow: 0 14px 32px rgba(8, 18, 33, 0.45);
	border: 1px solid rgba(52, 211, 153, 0.2);

	p {
		color: #f8fafc;
		font-size: 0.95em;
		margin: 0;
	}
`,J=n.p`
	font-size: 0.88em;
	opacity: 0.85;
	color: #a7f3d0;
`;n.div`
	display: flex;
	gap: 18px;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
`;const Ze=()=>e.jsxs("section",{children:[e.jsx(b,{children:"집계 (Aggregation Pipeline)"}),e.jsx(k,{children:e.jsxs("code",{children:[e.jsx("span",{className:"comment",children:"// 나라별 평균 나이가 30세 이상인 국가 조회"}),`
`,e.jsx("span",{className:"comment",children:"// SQL: SELECT country, AVG(age) FROM users GROUP BY country HAVING AVG(age) >= 30"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"aggregate"}),"([",`
`,"  ","{ ",e.jsx("span",{className:"keyword",children:"$group"}),": ","{",`
`,"    ",e.jsx("span",{className:"operator",children:"_id"}),":"," ",e.jsx("span",{className:"string",children:'"$country"'}),",",`
`,"    ",e.jsx("span",{className:"operator",children:"avgAge"}),": ","{ ",e.jsx("span",{className:"keyword",children:"$avg"}),":"," ",e.jsx("span",{className:"string",children:'"$age"'})," ","}",`
`,"  ","}","  ",",",`
`,"  ","{ ",e.jsx("span",{className:"keyword",children:"$match"}),": ","{ ",e.jsx("span",{className:"operator",children:"avgAge"}),": ","{ ",e.jsx("span",{className:"keyword",children:"$gte"}),": 30 ","}"," ","}"," ","}",",",`
`,"  ","{ ",e.jsx("span",{className:"keyword",children:"$sort"}),": ","{ ",e.jsx("span",{className:"operator",children:"avgAge"}),": -1 ","}"," ","}",`
`,"])"]})}),e.jsx(v,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Aggregation Pipeline"}),": 여러 단계(Stage)를 거쳐 데이터를 변환·집계합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"$match"}),": 조건으로 도큐먼트 필터링 (SQL의 WHERE/HAVING)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"$group"}),": 지정된 필드를 기준으로 그룹화 (SQL의 GROUP BY)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"$sort"}),": 결과 정렬 (SQL의 ORDER BY)"," ",e.jsx("code",{style:{color:"#67e8f9"},children:"1"})," = 오름차순,"," ",e.jsx("code",{style:{color:"#67e8f9"},children:"-1"})," = 내림차순"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"$project"}),": 출력할 필드 선택 (SQL의 SELECT)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"$limit"})," / ",e.jsx("strong",{children:"$skip"}),": 결과 수 제한 및 건너뛰기 (SQL의 LIMIT/OFFSET)"]})]})})]}),es=()=>e.jsxs("section",{children:[e.jsx(b,{children:"삭제 (Delete)"}),e.jsx(k,{children:e.jsxs("code",{children:[e.jsx("span",{className:"comment",children:"// 조건에 맞는 첫 번째 도큐먼트 삭제"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"deleteOne"}),"(","({",`
`,"  ",e.jsx("span",{className:"operator",children:"name"}),":"," ",e.jsx("span",{className:"string",children:'"박민수"'}),`
`,"})",`

`,e.jsx("span",{className:"comment",children:"// 조건에 맞는 모든 도큐먼트 삭제"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"deleteMany"}),"(","({",`
`,"  ",e.jsx("span",{className:"operator",children:"age"}),": ","{ ",e.jsx("span",{className:"keyword",children:"$lt"}),": 20 ","}",`
`,"})",`

`,e.jsx("span",{className:"comment",children:"// 컬렉션의 모든 도큐먼트 삭제"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"deleteMany"}),"(","{}",")"]})}),e.jsx(v,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"deleteOne()"}),": 조건에 맞는 도큐먼트 중 첫 번째만 삭제합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"deleteMany()"}),": 조건에 맞는 모든 도큐먼트를 삭제합니다."]}),e.jsxs("li",{children:["빈 쿼리 ",e.jsx("code",{style:{color:"#fde68a"},children:"{}"})," 를 사용하면 컬렉션의 모든 데이터를 삭제하므로 주의가 필요합니다."]})]})})]}),ss=()=>e.jsxs("section",{children:[e.jsx(b,{children:"조회 (Find)"}),e.jsx(k,{children:e.jsxs("code",{children:[e.jsx("span",{className:"comment",children:"// 전체 조회 (SQL: SELECT * FROM users)"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"find"}),"(","{}",")",`

`,e.jsx("span",{className:"comment",children:"// 조건 조회 (age가 25 초과인 사용자)"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"find"}),"(","({ ",e.jsx("span",{className:"operator",children:"age"}),": ","{ ",e.jsx("span",{className:"keyword",children:"$gt"}),": 25 ","}"," })",`

`,e.jsx("span",{className:"comment",children:"// 단일 도큐먼트 조회 (첫 번째 결과만)"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"findOne"}),"(","({ ",e.jsx("span",{className:"operator",children:"name"}),":"," ",e.jsx("span",{className:"string",children:'"김철수"'})," })",`

`,e.jsx("span",{className:"comment",children:"// 특정 필드만 조회 (SQL: SELECT name, age FROM users)"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"find"}),"(",e.jsx("span",{className:"string",children:"{}"}),", ","{ ",e.jsx("span",{className:"operator",children:"name"}),": 1,"," ",e.jsx("span",{className:"operator",children:"age"}),": 1,"," ",e.jsx("span",{className:"operator",children:"_id"}),": 0 ","}",")"]})}),e.jsx(v,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"find()"}),": 조건에 맞는 모든 도큐먼트를 조회합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"findOne()"}),": 조건에 맞는 첫 번째 도큐먼트만 반환합니다."]}),e.jsxs("li",{children:["두 번째 인자(Projection)로 조회할 필드를 지정합니다."," ",e.jsx("code",{style:{color:"#fde68a"},children:"1"})," = 포함,"," ",e.jsx("code",{style:{color:"#fde68a"},children:"0"})," = 제외"]})]})})]}),ns=()=>e.jsxs("section",{children:[e.jsx(b,{children:"인덱스 (Index)"}),e.jsx(W,{children:e.jsx("p",{children:"💡 인덱스 없이 Full Collection Scan → 인덱스로 빠른 탐색!"})}),e.jsx(k,{children:e.jsxs("code",{children:[e.jsx("span",{className:"comment",children:"// 단일 필드 인덱스 생성"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"createIndex"}),"(","({ ",e.jsx("span",{className:"operator",children:"email"}),": 1 ","})",")",`

`,e.jsx("span",{className:"comment",children:"// 복합 인덱스 (email 오름차순, age 내림차순)"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"createIndex"}),"(","({ ",e.jsx("span",{className:"operator",children:"email"}),": 1,"," ",e.jsx("span",{className:"operator",children:"age"}),": -1 ","})",")",`

`,e.jsx("span",{className:"comment",children:"// 유니크 인덱스 (중복 방지)"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"createIndex"}),"(",e.jsx("br",{}),"  ","({ ",e.jsx("span",{className:"operator",children:"email"}),": 1 ","}","),",e.jsx("br",{}),"  ","{ ",e.jsx("span",{className:"operator",children:"unique"}),":"," ",e.jsx("span",{className:"keyword",children:"true"})," ","}",e.jsx("br",{}),")",`

`,e.jsx("span",{className:"comment",children:"// 인덱스 목록 조회"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"getIndexes"}),"()"]})}),e.jsx(v,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"1"})," = 오름차순 인덱스, ",e.jsx("strong",{children:"-1"})," = 내림차순 인덱스"]}),e.jsx("li",{children:"자주 조회하는 필드에 인덱스를 생성하면 쿼리 성능이 크게 향상됩니다."}),e.jsx("li",{children:"인덱스가 많으면 쓰기 성능이 저하될 수 있으므로 필요한 것만 생성합니다."})]})})]}),rs=()=>e.jsxs("section",{children:[e.jsx(b,{children:"삽입 (Insert)"}),e.jsx(k,{children:e.jsxs("code",{children:[e.jsx("span",{className:"comment",children:"// 단일 도큐먼트 삽입"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"insertOne"}),"(","({",`
`,"  ",e.jsx("span",{className:"operator",children:"name"}),":"," ",e.jsx("span",{className:"string",children:'"이영희"'}),",",`
`,"  ",e.jsx("span",{className:"operator",children:"age"}),": 30,",`
`,"  ",e.jsx("span",{className:"operator",children:"email"}),":"," ",e.jsx("span",{className:"string",children:'"lee@example.com"'}),`
`,"})",`

`,e.jsx("span",{className:"comment",children:"// 여러 도큐먼트 삽입"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"insertMany"}),"([",`
`,"  ","{"," ",e.jsx("span",{className:"operator",children:"name"}),":"," ",e.jsx("span",{className:"string",children:'"박민수"'}),","," ",e.jsx("span",{className:"operator",children:"age"}),": 28 ","}",",",`
`,"  ","{"," ",e.jsx("span",{className:"operator",children:"name"}),":"," ",e.jsx("span",{className:"string",children:'"최지연"'}),","," ",e.jsx("span",{className:"operator",children:"age"}),": 22 ","}",`
`,"])"]})}),e.jsx(v,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"insertOne()"}),": 도큐먼트 1개를 컬렉션에 삽입합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"insertMany()"}),": 여러 도큐먼트를 배열 형태로 한 번에 삽입합니다."]}),e.jsxs("li",{children:["삽입 시 ",e.jsx("code",{style:{color:"#fde68a"},children:"_id"})," 필드를 지정하지 않으면 MongoDB가 ",e.jsx("strong",{children:"ObjectId"}),"를 자동 생성합니다."]})]})})]}),is=()=>e.jsxs("section",{children:[e.jsx(b,{children:"MongoDB 기본 구조"}),e.jsxs(Q,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"SQL 개념"}),e.jsx("th",{children:"MongoDB 개념"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Database"}),e.jsx("td",{children:"Database"}),e.jsx("td",{children:"최상위 저장 공간"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Table"}),e.jsx("td",{children:"Collection"}),e.jsx("td",{children:"도큐먼트의 집합"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Row (행)"}),e.jsx("td",{children:"Document"}),e.jsx("td",{children:"JSON 형태의 데이터 단위"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Column (열)"}),e.jsx("td",{children:"Field"}),e.jsx("td",{children:"도큐먼트 내 키-값 쌍"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Primary Key"}),e.jsx("td",{children:"_id"}),e.jsx("td",{children:"자동 생성 고유 식별자"})]})]})]}),e.jsx(k,{children:e.jsxs("code",{children:[e.jsx("span",{className:"comment",children:"// Document 예시 (JSON 형태)"}),`
`,"{",`
`,"  ",e.jsx("span",{className:"operator",children:"_id"}),":"," ",e.jsx("span",{className:"function",children:"ObjectId"}),"(",e.jsx("span",{className:"string",children:'"507f1f77bcf86cd799439011"'}),"),",`
`,"  ",e.jsx("span",{className:"operator",children:"name"}),":"," ",e.jsx("span",{className:"string",children:'"김철수"'}),",",`
`,"  ",e.jsx("span",{className:"operator",children:"age"}),": 25,",`
`,"  ",e.jsx("span",{className:"operator",children:"email"}),":"," ",e.jsx("span",{className:"string",children:'"kim@example.com"'}),",",`
`,"  ",e.jsx("span",{className:"operator",children:"hobbies"}),": [",e.jsx("span",{className:"string",children:'"축구"'}),","," ",e.jsx("span",{className:"string",children:'"독서"'}),"]",`
`,"}"]})})]}),ls=()=>e.jsxs("section",{"data-background-gradient":"linear-gradient(to bottom, #065f46, #064e3b)",children:[e.jsx(_,{children:"감사합니다!"}),e.jsxs(J,{children:["사용도구: React, Reveal.js, styled-components ",e.jsx("br",{}),"참고: Copilot, MongoDB 공식 문서"]})]}),as=()=>e.jsxs(e.Fragment,{children:[e.jsxs("section",{children:[e.jsx(b,{children:"쿼리 연산자 — 비교 연산자"}),e.jsx(k,{children:e.jsxs("code",{children:[e.jsx("span",{className:"comment",children:"// $eq: 같음, $ne: 다름"}),`
`,e.jsx("span",{className:"comment",children:"// $gt: 초과, $gte: 이상"}),`
`,e.jsx("span",{className:"comment",children:"// $lt: 미만, $lte: 이하"}),`

`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"find"}),"(","({",`
`,e.jsx("span",{className:"operator",children:"age"}),": ","{ ",e.jsx("span",{className:"keyword",children:"$gte"}),": 25,"," ",e.jsx("span",{className:"keyword",children:"$lte"}),": 35 ","}",`
`,"})",`

`,e.jsx("span",{className:"comment",children:"// $in: 배열 내 값과 일치"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"find"}),"(","({",`
`,e.jsx("span",{className:"operator",children:"age"}),": ","{ ",e.jsx("span",{className:"keyword",children:"$in"}),": [25, 30, 35] ","}","})"]})}),e.jsx(v,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:["MongoDB의 쿼리 연산자는 ",e.jsx("code",{style:{color:"#67e8f9"},children:"$"}),"로 시작합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"$regex"}),"를 이용하면 SQL의 ",e.jsx("code",{children:"LIKE"}),"와 같은 패턴 매칭도 가능합니다."]})]})})]}),e.jsxs("section",{children:[e.jsx(b,{children:"쿼리 연산자 — 논리 연산자"}),e.jsx(k,{children:e.jsxs("code",{children:[e.jsx("span",{className:"comment",children:"// $and: 모든 조건 만족"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"find"}),"(","({",`
`,e.jsx("span",{className:"keyword",children:"$and"}),": [",`
`,"{ ",e.jsx("span",{className:"operator",children:"age"}),": ","{ ",e.jsx("span",{className:"keyword",children:"$gt"}),": 25 ","}"," ","}",",",`
`,"{ ",e.jsx("span",{className:"operator",children:"name"}),":"," ",e.jsx("span",{className:"string",children:'"김철수"'})," ","}",`
`,"]",`
`,"})",`

`,e.jsx("span",{className:"comment",children:"// $or: 하나 이상 조건 만족"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"find"}),"(","({",`
`,e.jsx("span",{className:"keyword",children:"$or"}),": [",`
`,"{ ",e.jsx("span",{className:"operator",children:"age"}),": ","{ ",e.jsx("span",{className:"keyword",children:"$lt"}),": 20 ","}"," ","}",",",`
`,"{ ",e.jsx("span",{className:"operator",children:"age"}),": ","{ ",e.jsx("span",{className:"keyword",children:"$gt"}),": 40 ","}"," ","}",`
`,"]","})"]})}),e.jsx(v,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"$and"}),"는 모든 조건을 동시에 만족하는 문서를 반환합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"$or"}),"는 조건 중 하나라도 만족하면 반환합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"$nor"}),"는 모든 조건을 만족하지 않는 문서를 반환합니다."]})]})})]})]}),ts=()=>e.jsxs("section",{children:[e.jsx(b,{children:"SQL vs NoSQL 비교"}),e.jsxs(Q,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"구분"}),e.jsx("th",{children:"SQL (관계형)"}),e.jsx("th",{children:"NoSQL (비관계형)"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"데이터 모델"}),e.jsx("td",{children:"테이블 (행 & 열)"}),e.jsx("td",{children:"도큐먼트, Key-Value 등"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"스키마"}),e.jsx("td",{children:"고정 (정해진 구조)"}),e.jsx("td",{children:"유연 (동적 구조)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"확장 방식"}),e.jsx("td",{children:"수직 확장 (Scale-up)"}),e.jsx("td",{children:"수평 확장 (Scale-out)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"쿼리 언어"}),e.jsx("td",{children:"SQL"}),e.jsx("td",{children:"자체 API / JSON 쿼리"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"트랜잭션"}),e.jsx("td",{children:"ACID 완전 지원"}),e.jsx("td",{children:"제한적 지원 (BASE)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"대표 DB"}),e.jsx("td",{children:"MySQL, PostgreSQL"}),e.jsx("td",{children:"MongoDB, Redis"})]})]})]})]}),cs=()=>e.jsxs("section",{"data-background-gradient":"linear-gradient(to bottom, #064e3b, #065f46)",children:[e.jsxs(_,{children:["MongoDB ",e.jsx("br",{}),"& NoSQL"]}),e.jsx(J,{children:"데이터베이스의 새로운 패러다임"})]}),os=()=>e.jsxs("section",{children:[e.jsx(b,{children:"수정 (Update)"}),e.jsx(k,{children:e.jsxs("code",{children:[e.jsx("span",{className:"comment",children:"// updateOne: 단일 도큐먼트 수정 ($set)"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"updateOne"}),`({
`,"  ",e.jsx("span",{className:"operator",children:"name"}),":"," ",e.jsx("span",{className:"string",children:'"김철수"'}),`
`,`}, {
`,"  ",e.jsx("span",{className:"keyword",children:"$set"}),": { ",e.jsx("span",{className:"operator",children:"age"}),`: 26 }
`,")",`

`,e.jsx("span",{className:"comment",children:"// updateMany: 여러 도큐먼트 수정 ($inc)"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"updateMany"}),`({
`,"  ",e.jsx("span",{className:"operator",children:"age"}),": { ",e.jsx("span",{className:"keyword",children:"$gte"}),`: 30 }
`,`}, {
`,"  ",e.jsx("span",{className:"keyword",children:"$inc"}),": { ",e.jsx("span",{className:"operator",children:"age"}),`: 1 }
`,")",`

`,e.jsx("span",{className:"comment",children:"// $unset: 필드 삭제"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"updateOne"}),`({
`,"  ",e.jsx("span",{className:"operator",children:"name"}),":"," ",e.jsx("span",{className:"string",children:'"이영희"'}),`
`,`}, {
`,"  ",e.jsx("span",{className:"keyword",children:"$unset"}),": { ",e.jsx("span",{className:"operator",children:"email"}),":"," ",e.jsx("span",{className:"string",children:'""'}),` }
`,")"]})}),e.jsx(v,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"updateOne()"})," / ",e.jsx("strong",{children:"updateMany()"}),": 1개 또는 여러 도큐먼트를 수정합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"$set"}),": 지정한 필드 값을 변경합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"$inc"}),": 숫자 필드를 증가/감소시킵니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"$unset"}),": 필드를 도큐먼트에서 제거합니다."]})]})})]}),ds=()=>e.jsxs("section",{children:[e.jsx(b,{children:"NoSQL이란?"}),e.jsx(W,{style:{textAlign:"left"},children:e.jsxs("p",{children:["💡 ",e.jsx("strong",{children:"Not Only SQL"}),e.jsx("br",{}),"관계형 데이터베이스의",e.jsx("br",{}),"한계를 극복한",e.jsx("br",{}),"비관계형 데이터베이스"]})}),e.jsx(v,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"유연한 스키마"}),": 고정된 테이블 구조 없이 자유로운 형태로 데이터를 저장합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"수평 확장(Scale-out)"}),": 서버를 추가하여 트래픽을 분산시키기 용이합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"고성능"}),": 대량의 비정형 데이터 처리에 최적화되어 있습니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"종류"}),": Document(MongoDB), Key-Value(Redis), Column(Cassandra), Graph(Neo4j) 등"]})]})})]}),xs=()=>{const s=p.useRef(null),l=p.useRef(null);return p.useEffect(()=>{if(!l.current)return l.current=new U(s.current,{width:1500,height:900,transition:"slide",hash:!0,controls:!0,progress:!0,slideNumber:"c/t",embedded:!0,mouseWheel:!0}),l.current.initialize().then(()=>{console.log("Reveal.js (NoSQL) initialized successfully")}),()=>{try{l.current&&(l.current.destroy(),l.current=null)}catch{console.warn("Reveal.js destroy call failed.")}}},[]),e.jsx("div",{className:"reveal",ref:s,style:{height:"calc(100vh - 60px)"},children:e.jsxs("div",{className:"slides",children:[e.jsx(cs,{}),e.jsx(ds,{}),e.jsx(ts,{}),e.jsx(is,{}),e.jsx(rs,{}),e.jsx(ss,{}),e.jsx(as,{}),e.jsx(os,{}),e.jsx(es,{}),e.jsx(Ze,{}),e.jsx(ns,{}),e.jsx(ls,{})]})})},hs="/hanbat-portfolio/assets/caption_web-DtLYLhP7.png",js="/hanbat-portfolio/assets/electron_vue-w5pSGQaz.png",ps="/hanbat-portfolio/assets/electron_vue2-11f4gaNP.png",ms="/hanbat-portfolio/assets/first_jsp-BoVOyK0y.png",gs="/hanbat-portfolio/assets/share_mobile-C_8O5Fyq.png",us="/hanbat-portfolio/assets/share_pc-y0kkMMto.png",fs="/hanbat-portfolio/assets/silkroad_admin-BeOBqPmO.png",bs="/hanbat-portfolio/assets/tkita_dual_dark-BX-ujFL_.jpg",ys="/hanbat-portfolio/assets/tkita_main-C125CPy3.jpg",Ns="/hanbat-portfolio/assets/tkita_single-CREEgKuG.jpg",ws="/hanbat-portfolio/assets/vue_web-DqimfvdE.png",ks="/hanbat-portfolio/assets/vue_web2-DNMt9iiU.png",vs=n(O.section)`
	display: flex;
	padding: 40px 0;
`,Ss=n.div`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 15px;
	@media screen and (max-width: 1300px) {
		max-width: 1150px;
	}
	@media screen and (max-width: 1200px) {
		max-width: 1050px;
	}
	@media screen and (max-width: 1100px) {
		max-width: 950px;
	}
	@media screen and (max-width: 1000px) {
		max-width: 850px;
	}
	@media screen and (max-width: 900px) {
		max-width: 750px;
	}
	@media screen and (max-width: 800px) {
		max-width: 650px;
	}
	@media screen and (max-width: 700px) {
		max-width: 550px;
	}
	@media screen and (max-width: 600px) {
		max-width: 450px;
	}
	@media screen and (max-width: 500px) {
		max-width: 300px;
	}
`,Es=n.div`
	text-align: center;
	margin-bottom: 30px;

	h2 {
		font-size: 36px;
		color: #76abaa;
		margin-bottom: 10px;
	}
`;function $s(){const s={dots:!0,infinite:!0,speed:500,slidesToScroll:1,autoplay:!0,autoplaySpeed:4e3,draggable:!1,fade:!1,arrows:!0,vertical:!1,initialSlide:0,pauseOnFocus:!0,pauseOnHover:!0};return e.jsx(vs,{initial:{opacity:0,y:100},whileInView:{opacity:1,y:0},viewport:{once:!1},transition:{ease:"easeInOut",duration:2,y:{duration:1}},children:e.jsxs(Ss,{children:[e.jsx(Es,{children:e.jsx("h2",{children:"Project"})}),e.jsxs(de,{...s,children:[e.jsx("div",{children:e.jsx("img",{src:ms})}),e.jsx("div",{children:e.jsx("img",{src:js})}),e.jsx("div",{children:e.jsx("img",{src:ps})}),e.jsx("div",{children:e.jsx("img",{src:ws})}),e.jsx("div",{children:e.jsx("img",{src:ks})}),e.jsx("div",{children:e.jsx("img",{src:us})}),e.jsx("div",{children:e.jsx("img",{src:fs})}),e.jsx("div",{children:e.jsx("img",{src:hs})}),e.jsx("div",{children:e.jsx("img",{src:gs})}),e.jsx("div",{children:e.jsx("img",{src:ys})}),e.jsx("div",{children:e.jsx("img",{src:Ns})}),e.jsx("div",{children:e.jsx("img",{src:bs})}),e.jsx("div",{children:e.jsx("h1",{children:"end..."})})]})]})})}const M="puzzle",Cs=n.div`
	width: 100%;
	height: 100%;
	background-image: ${s=>`url(${s.$imageUrl})`};
	background-size: ${s=>`${s.$size*100}% ${s.$size*100}%`};
	background-position: ${s=>`${s.$posX}% ${s.$posY}%`};
	cursor: pointer;
	opacity: ${s=>s.$isDragging?.9:1};
	transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease;
	transform: ${s=>s.$isDragging?"scale(0.95) rotate(4deg)":"scale(1) rotate(0)"};
	box-shadow: ${s=>s.$isDragging?"0px 6px 20px rgba(0, 0, 0, 0.4)":"0px 2px 10px rgba(0, 0, 0, 0.2)"};
	border: ${s=>s.$isDragging?"4px ridge #4a7cff":"none"};
	touch-action: none;
	user-select: none;
	-webkit-tap-highlight-color: transparent;
`,Rs=({id:s,imageUrl:l,posX:o,posY:a,currentPos:r,movePiece:t,size:c})=>{const[{isDragging:R},T]=xe({type:M,item:{id:s},collect:$=>({isDragging:$.isDragging()})}),[,z]=he({accept:M,drop:$=>{t($.id,s)}});return e.jsx(Cs,{ref:$=>T(z($)),$imageUrl:l,$posX:o,$posY:a,$isDragging:R,$size:c})},Os=n.div`
	width: 100%;
	padding: 40px;
`,Ts=n.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`,Is=n.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (min-width: 950px) {
		flex-direction: row;
		align-items: flex-end;
	}
`,zs=n.div`
	margin-bottom: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;

	h2 {
		font-size: 36px;
		color: #76abaa;
		margin-bottom: 10px;
	}
`,B=n.div`
	display: flex;
	gap: 15px;
	margin-bottom: 20px;
`,Ls=n.div`
	width: 400px;
	height: 400px;
	display: grid;
	grid-template-columns: ${s=>`repeat(${s.$size}, 1fr)`};
	grid-template-rows: ${s=>`repeat(${s.$size}, 1fr)`};
	gap: 1px;
	background: #333;
	touch-action: none;
`,Ds=n.img`
	width: 400px;
	height: 400px;
	margin-top: 20px;

	@media (min-width: 950px) {
		margin-left: 20px;
	}
`,F=n.button`
	padding: 10px 20px;
	font-size: 16px;
	font-weight: bold;
	color: black;
	background-color: #76abaa;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s, transform 0.2s;

	&:hover {
		background-color: #649ea1;
		transform: scale(1.05);
	}

	&:active {
		transform: scale(0.95);
	}

	&.active {
		background-color: #4a7cff;
		color: white;
	}
`,Ps=["JPEG","PNG","JPG"],Ms={backends:[{backend:pe,preview:!0},{backend:me,options:{enableMouseEvents:!0},preview:!0,transition:fe}]},A=[{size:4,label:"하 (4×4)"},{size:8,label:"중 (8x8)"},{size:12,label:"상 (12x12)"}];function Bs(){const[s,l]=p.useState(null),[o,a]=p.useState(""),[r,t]=p.useState([]),[c,R]=p.useState(A[0]),T=i=>{l(i);const m=URL.createObjectURL(i);a(m)},z=i=>{for(let m=i.length-1;m>0;m--){const f=Math.floor(Math.random()*(m+1));[i[m],i[f]]=[i[f],i[m]]}return i},$=(i,m)=>{const f=r.findIndex(w=>w.id===i),C=r.findIndex(w=>w.id===m),g=[...r];[g[f],g[C]]=[g[C],g[f]],t(g)},q=()=>{if(s){const i=c.size,m=[],f=100/(i-1);for(let g=0;g<i;g++)for(let w=0;w<i;w++)m.push({id:`${g*i+w}`,originalPos:{row:g,col:w},currentPos:{row:g,col:w},posX:w*f,posY:g*f});const C=z(m);t(C)}};p.useEffect(()=>{q()},[s,c]),p.useEffect(()=>{if(r.length>0){const i=c.size;r.every((f,C)=>f.originalPos.row===Math.floor(C/i)&&f.originalPos.col===C%i)&&alert("정답입니다! 다른 이미지로 도전해보세요!")}},[r,c]);const K=()=>{l(null),t([]),a("")},X=i=>{R(i)};return e.jsx(Os,{children:e.jsxs(Ts,{children:[e.jsxs(zs,{children:[e.jsx("h2",{children:"Puzzle"}),s?e.jsx(B,{children:e.jsx(F,{onClick:K,children:"초기화"})}):e.jsx(B,{children:A.map(i=>e.jsx(F,{onClick:()=>X(i),className:c.size===i.size?"active":"",children:i.label},i.size))})]}),e.jsxs(Is,{children:[s?e.jsx(je,{backend:ue,options:Ms,children:e.jsx(Ls,{$size:c.size,children:r.map(i=>e.jsx(Rs,{id:i.id,imageUrl:o,posX:i.posX,posY:i.posY,currentPos:i.currentPos,movePiece:$,size:c.size},i.id))})}):e.jsx(ge,{classes:"dnd",onSizeError:()=>alert("파일 사이즈가 너무 큽니다(2MB)"),handleChange:T,onDrop:T,name:"file",types:Ps,multiple:!1,label:"사진을 업로드하면 퍼즐이 만들어집니다.",required:!0}),s&&e.jsx(Ds,{src:o,alt:"Original"})]})]})})}const Fs=n(O.section)`
	padding: 40px 0;
`,As=n.div`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 15px;
`,Vs=n.div`
	text-align: center;
	margin-bottom: 30px;

	h2 {
		font-size: 36px;
		color: #76abaa;
		margin-bottom: 10px;
	}
`,I=n.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: stretch;
	& > h3 {
		font-size: 22px;
		margin-bottom: 5px;
	}
`,h=n.div`
	flex: 0.25;
	margin: 15px 15px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	& > h3 {
		font-size: 22px;
		margin-bottom: 5px;
	}
`,j=n.div`
	width: 150px;
	height: 150px;
`;function Gs(){return e.jsx(Fs,{initial:{opacity:0,y:100},whileInView:{opacity:1,y:0},viewport:{once:!1},transition:{ease:"easeInOut",duration:2,y:{duration:1}},children:e.jsxs(As,{children:[e.jsx(Vs,{children:e.jsx("h2",{children:"Skill"})}),e.jsxs(I,{children:[e.jsxs(h,{children:[e.jsx("h3",{children:"Html5"}),e.jsx(j,{children:e.jsx(d,{value:.9,maxValue:1,text:`${.9*100}%`,styles:x({pathColor:"#E44D26",textColor:"#E44D26"})})})]}),e.jsxs(h,{children:[e.jsx("h3",{children:"Css3"}),e.jsx(j,{children:e.jsx(d,{value:.8,maxValue:1,text:`${.8*100}%`,styles:x({pathColor:"#264DE4",textColor:"#264DE4"})})})]}),e.jsxs(h,{children:[e.jsx("h3",{children:"TypeScript"}),e.jsx(j,{children:e.jsx(d,{value:.8,maxValue:1,text:`${.8*100}%`,styles:x({pathColor:"#3178C6",textColor:"#3178C6"})})})]}),e.jsxs(h,{children:[e.jsx("h3",{children:"Flutter"}),e.jsx(j,{children:e.jsx(d,{value:.7,maxValue:1,text:`${.7*100}%`,styles:x({pathColor:"#02569B",textColor:"#02569B"})})})]})]}),e.jsxs(I,{children:[e.jsxs(h,{children:[e.jsx("h3",{children:"Vue3"}),e.jsx(j,{children:e.jsx(d,{value:.7,maxValue:1,text:`${.7*100}%`,styles:x({pathColor:"#42B883",textColor:"#42B883"})})})]}),e.jsxs(h,{children:[e.jsx("h3",{children:"React"}),e.jsx(j,{children:e.jsx(d,{value:.9,maxValue:1,text:`${.9*100}%`,styles:x({pathColor:"#61DAFB",textColor:"#61DAFB"})})})]}),e.jsxs(h,{children:[e.jsx("h3",{children:"Python"}),e.jsx(j,{children:e.jsx(d,{value:.8,maxValue:1,text:`${.8*100}%`,styles:x({pathColor:"#3776AB",textColor:"#3776AB"})})})]}),e.jsxs(h,{children:[e.jsx("h3",{children:"Vite"}),e.jsx(j,{children:e.jsx(d,{value:.6,maxValue:1,text:`${.6*100}%`,styles:x({pathColor:"#646CFF",textColor:"#646CFF"})})})]})]}),e.jsxs(I,{children:[e.jsxs(h,{children:[e.jsx("h3",{children:"Nginx"}),e.jsx(j,{children:e.jsx(d,{value:.5,maxValue:1,text:`${.5*100}%`,styles:x({pathColor:"#009639",textColor:"#009639"})})})]}),e.jsxs(h,{children:[e.jsx("h3",{children:"MySql"}),e.jsx(j,{children:e.jsx(d,{value:.6,maxValue:1,text:`${.6*100}%`,styles:x({pathColor:"#4479A1",textColor:"#4479A1"})})})]}),e.jsxs(h,{children:[e.jsx("h3",{children:"Ubuntu"}),e.jsx(j,{children:e.jsx(d,{value:.7,maxValue:1,text:`${.7*100}%`,styles:x({pathColor:"#E95420",textColor:"#E95420"})})})]}),e.jsxs(h,{children:[e.jsx("h3",{children:"Electron.js"}),e.jsx(j,{children:e.jsx(d,{value:.7,maxValue:1,text:`${.7*100}%`,styles:x({pathColor:"#47848F",textColor:"#47848F"})})})]})]}),e.jsxs(I,{children:[e.jsxs(h,{children:[e.jsx("h3",{children:"Node.js"}),e.jsx(j,{children:e.jsx(d,{value:.8,maxValue:1,text:`${.8*100}%`,styles:x({pathColor:"#339933",textColor:"#339933"})})})]}),e.jsxs(h,{children:[e.jsx("h3",{children:"Bun.js"}),e.jsx(j,{children:e.jsx(d,{value:.5,maxValue:1,text:`${.5*100}%`,styles:x({pathColor:"#FBF0DF",textColor:"#FBF0DF"})})})]}),e.jsxs(h,{children:[e.jsx("h3",{children:"Redis"}),e.jsx(j,{children:e.jsx(d,{value:.6,maxValue:1,text:`${.6*100}%`,styles:x({pathColor:"#DC382D",textColor:"#DC382D"})})})]})]})]})})}const Hs=H`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-2.5px);
    }
`,Us=n.nav`
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
`,Ys=n.a`
	color: #76abae;
	font-weight: bold;
	text-decoration: none;
	font-size: 13px;
	position: relative;
	display: inline-block;
	transition: 0.3s ease;
	&:hover {
		animation: ${Hs} 0.5s ease infinite alternate;
	}
`;function _s({story:s}){function l(o){o.preventDefault();const a=o.target.getAttribute("href"),r=document.querySelector(a);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}return e.jsx(Us,{onClick:l,children:e.jsx("ul",{children:s.map((o,a)=>e.jsx("li",{children:e.jsx(Ys,{href:o.href,children:o.name})},a))})})}const Qs="/hanbat-portfolio/assets/001-QaaCS8Xj.png",Ws="/hanbat-portfolio/assets/002-CoGtfpOr.png",Js="/hanbat-portfolio/assets/003-Bkjd7iTY.png",qs="/hanbat-portfolio/assets/004-Dd-qRShE.png",Ks=n(O.div)`
	width: 100%;
	padding: 20px;
`,V=n.section`
	width: 100%;
	display: flex;
	justify-content: center;
	margin: 20px 0;
`,G=n.div`
	width: 100%;
	max-width: 1100px;
	min-height: 700px;
	border: 1px solid #ccc;
	border-radius: 10px;
	overflow: hidden;
	cursor: pointer;
	transition: transform 0.3s ease-in-out;

	&:hover {
		transform: scale(1.02);
	}

	& > div {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	& > img {
		width: 100%;
		height: 100%;
		object-fit: fill;
	}

	@media screen and (max-width: 900px) {
		min-height: 400px;
	}
	@media screen and (max-width: 500px) {
		min-height: 300px;
	}
`;function Xs(){const[s,l]=p.useState([{href:"#name",name:"나의 이름 삼행시",img:Qs,flip:!1},{href:"#number",name:"숫자 아이덴티티",img:Ws,flip:!1},{href:"#hobby",name:"취미 생활",img:Js,flip:!1},{href:"#model",name:"나의 롤모델",img:qs,flip:!1}]),o=a=>{l(s.map(r=>a===r.href?{...r,flip:!r.flip}:{...r}))};return e.jsxs(Ks,{initial:{opacity:0,y:100},whileInView:{opacity:1,y:0},viewport:{once:!1},transition:{ease:"easeInOut",duration:2,y:{duration:1}},children:[e.jsx(_s,{story:s}),s.map((a,r)=>e.jsxs(be,{isFlipped:a.flip,flipDirection:"horizontal",children:[e.jsx(V,{id:a.href.replace(/^#/,""),onClick:()=>o(a.href),children:e.jsx(G,{children:e.jsx("div",{children:e.jsx("h2",{children:a.name})})})}),e.jsx(V,{id:a.href.replace(/^#/,""),onClick:()=>o(a.href),children:e.jsx(G,{children:e.jsx("img",{src:a.img,alt:a.name})})})]},r))]})}function Zs(){return e.jsx(e.Fragment,{children:e.jsx(Se,{children:e.jsxs(ae,{children:[e.jsx(S,{index:!0,path:"/",element:Pe()}),e.jsx(S,{path:"/story",element:Xs()}),e.jsx(S,{path:"/skill",element:Gs()}),e.jsx(S,{path:"/contact",element:Te()}),e.jsx(S,{path:"/project",element:$s()}),e.jsx(S,{path:"/puzzle",element:Bs()}),e.jsx(S,{path:"/presentation",element:e.jsx(Xe,{})}),e.jsx(S,{path:"/nosql",element:e.jsx(xs,{})})]})})})}const en={createGlobalStyle:re},sn=en.createGlobalStyle`
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
`;console.log("/hanbat-portfolio");ee.createRoot(document.getElementById("root")).render(e.jsx(ie,{shouldForwardProp:Z,children:e.jsxs(ne,{basename:"/hanbat-portfolio",children:[e.jsx(sn,{}),e.jsx(Zs,{})]})}));
