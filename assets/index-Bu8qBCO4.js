import{r as g,j as e}from"./react-YOz2hQel.js";import{i as U}from"./@emotion-D-ku2L_v.js";import{c as _}from"./react-dom-2CQTX6Uh.js";import{L as W,B as J}from"./react-router-dom-BwfYDIAl.js";/* empty css                       */import{d as n,m as A,f as q,Y as X}from"./styled-components-DSn1G4Go.js";import{b as K,d as Q,e as E}from"./react-router-BjYqc64p.js";import{m as S}from"./framer-motion-C3xDexNK.js";import{G as Z,E as ee,P as se}from"./react-bootstrap-icons-DSVQNG8Y.js";import{X as ne}from"./reveal.js-BOpe6G5o.js";import{S as ie}from"./react-slick-BFdVUf1J.js";import{u as re,a as te,D as oe}from"./react-dnd-KbD2iaha.js";import{H as le}from"./react-dnd-html5-backend-1HQjlkwI.js";import{T as ae}from"./react-dnd-touch-backend-BF3WdvOs.js";import{E as ce}from"./react-drag-drop-files-BGHCxwuL.js";import{P as de,S as xe}from"./dnd-multi-backend-CnBkwHxh.js";import{C as d,b as x}from"./react-circular-progressbar-D-OSc2_R.js";import{_ as he}from"./react-card-flip-Byd4lJLs.js";import"./classnames-r5axgyEj.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-DyRdwddT.js";import"./tslib-wbdO-F7s.js";import"./shallowequal-B6su5-_x.js";import"./stylis-DinRj2j6.js";import"./prop-types-CNJ-wrTR.js";import"./lodash.debounce-Cx665Aaa.js";import"./resize-observer-polyfill-BWCBsnt7.js";import"./json2mq-DXkj81uw.js";import"./string-convert-DdSrkZLz.js";import"./enquire.js-B8qsBZnP.js";import"./dnd-core-D9oQlGRy.js";import"./redux-CuxFRhX_.js";import"./@react-dnd-CcuaHj6U.js";import"./fast-deep-equal-6ves6buk.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function c(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(i){if(i.ep)return;i.ep=!0;const l=c(i);fetch(i.href,l)}})();const pe=n.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`,je=A`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-2.5px);
    }
`,me=n.nav`
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
`,ue=n(W)`
	color: ${s=>s.$active?"#76ABAE":"lightsalmon"};
	font-weight: ${s=>s.$active?"bold":"normal"};
	text-decoration: none;
	font-size: 16px;
	position: relative;
	display: inline-block;
	transition: 0.3s ease;
	&:hover {
		animation: ${je} 0.5s ease infinite alternate;
	}
`,ge=[{href:"/",name:"Home"},{href:"/project",name:"Project"},{href:"/skill",name:"Skill"},{href:"/story",name:"Story"},{href:"/contact",name:"Contact"},{href:"/puzzle",name:"Puzzle"},{href:"/presentation",name:"PPT"}];function fe({children:s}){const o=K(),[c,t]=g.useState(!0),i=a=>o.pathname===a,l=()=>{window.scrollY>60?t(!1):t(!0)};return g.useEffect(()=>{if(console.log(o.pathname),o.pathname==="/story")return document.addEventListener("scroll",l),()=>{document.removeEventListener("scroll",l)}},[]),e.jsxs(pe,{children:[e.jsx(me,{$visible:c,children:e.jsx("ul",{children:ge.map((a,C)=>e.jsx("li",{children:e.jsx(ue,{to:a.href,$active:i(a.href),children:a.name})},C))})}),s]})}const be=n(S.section)`
	padding: 40px 0;
`,ye=n.div`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 15px;
`,we=n.div`
	text-align: center;
	margin-bottom: 30px;

	h2 {
		font-size: 36px;
		color: #76abaa;
		margin-bottom: 10px;
	}
`,ke=n.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: stretch;
	@media screen and (max-width: 800px) {
		flex-direction: column;
	}
`,$=n.div`
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
`,ve=n.div`
	width: 100%;
	max-width: 800px;
	margin: 0 auto;
	margin-top: 50px;

	iframe {
		width: 100%;
		height: 400px;
		border: none;
	}
`;function Ne(){return e.jsx(be,{initial:{opacity:0,y:100},whileInView:{opacity:1,y:0},viewport:{once:!1},transition:{ease:"easeInOut",duration:2,y:{duration:1}},children:e.jsxs(ye,{children:[e.jsx(we,{children:e.jsx("h2",{children:"Contact"})}),e.jsxs(ke,{children:[e.jsx($,{children:e.jsxs("div",{className:"address",children:[e.jsx("i",{className:"#",children:e.jsx(Z,{})}),e.jsx("h4",{children:"Location"}),e.jsx("p",{children:"43, Dacheongro, Daeduckgu, Daejeon, Republic of Korea"})]})}),e.jsx($,{children:e.jsx("a",{href:"mailto:lkb951103@gmail.com",children:e.jsxs("div",{className:"email",children:[e.jsx("i",{className:"#",children:e.jsx(ee,{})}),e.jsx("h4",{children:"Email"}),e.jsx("p",{children:"lkb951103@gmail.com"})]})})}),e.jsx($,{children:e.jsx("a",{href:"tel:010-9581-9511",children:e.jsxs("div",{className:"phone",children:[e.jsx("i",{className:"#",children:e.jsx(se,{})}),e.jsx("h4",{children:"Call"}),e.jsx("p",{children:"010-9581-9511"})]})})})]}),e.jsx(ve,{children:e.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3209.187065945216!2d127.42896287626438!3d36.453035287191554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565378256b23ddb%3A0x28573d3c56aaf32f!2z64yA7KCE6rSR7Jet7IucIOuMgOuNleq1rCDrjIDssq3roZwgNDM!5e0!3m2!1sko!2skr!4v1694869940137!5m2!1sko!2skr",width:"100%",height:"100%",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})]})})}const Ee=n(S.section)`
	padding: 40px 0;
`,Ce=n.div`
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
`,Se=n.div`
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
`,ze=n.div`
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
`,I=n.div`
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
`;function Re(){return e.jsx(Ee,{initial:{opacity:0,y:100},whileInView:{opacity:1,y:0},viewport:{once:!1},transition:{ease:"easeInOut",duration:2,y:{duration:1}},children:e.jsxs(Ce,{children:[e.jsxs(Se,{children:[e.jsx("h2",{children:"Career"}),e.jsx("div",{children:e.jsxs("p",{children:["안녕하세요! 저는 이기범이라고 합니다.",e.jsx("br",{}),"개발하는 것을 즐기며 해답을 찾기 위해 끊임없이 생각하는 사람입니다.",e.jsx("br",{})," 또한, 미래에 대한 고민을 하면서 새로운 가능성을 모색하는 것을 좋아하며,",e.jsx("br",{})," 제가 해결해야 할 문제에는 적극적인 행동을 통해 더 나은 결과물을 만들어내는 것을 목표로 하고있습니다.",e.jsx("br",{}),"협업을 통해 함께 미래를 개척해나가는 기회를 소중히 생각하며,",e.jsx("br",{})," 더 나은 세상을 만들어가는 일에 열정을 갖고 있습니다.",e.jsx("br",{}),"저는 다양한 분야에 도전하는 것을 즐기며,",e.jsx("br",{})," 인공지능, 빅데이터, 머신러닝 등의 기술에 관심을 가지고 있습니다.",e.jsx("br",{})," 다양한 분야에 도전함으로써, 더 큰 영향력을 가진 개발자로 성장하고 싶습니다."]})})]}),e.jsxs(ze,{children:[e.jsxs(I,{children:[e.jsx("h3",{children:"Education"}),e.jsxs(u,{$isFirst:!0,children:[e.jsx("h4",{children:"전자기기 기능사"}),e.jsx("h5",{children:"2013"}),e.jsx("em",{children:"자격증 취득"})]}),e.jsxs(u,{children:[e.jsx("h4",{children:"전기 기능사"}),e.jsx("h5",{children:"2017"}),e.jsx("em",{children:"자격증 취득"})]}),e.jsxs(u,{children:[e.jsx("h4",{children:"전기 기사"}),e.jsx("h5",{children:"2020. 12"}),e.jsx("em",{children:"자격증 취득"})]}),e.jsxs(u,{children:[e.jsx("h4",{children:"노마드코더"}),e.jsx("h5",{children:"2021. 07 - 2021. 09"}),e.jsx("em",{children:"Html5, Css3 코코아톡 클론"}),e.jsx("p",{children:"챌린지 과정 수료"})]}),e.jsxs(u,{children:[e.jsx("h4",{children:"효성 컴퓨터학원"}),e.jsx("h5",{children:"2021. 07 - 2021. 10"}),e.jsx("em",{children:"JAVA 프로그래밍 과정 수료"}),e.jsx("p",{children:"NCS기반 국비 과정, 응용 SW엔지니어링(3수준)"})]}),e.jsxs(u,{children:[e.jsx("h4",{children:"노마드코더"}),e.jsx("h5",{children:"2021. 09 - 2021. 11"}),e.jsx("em",{children:"JavaScript To-do-list"}),e.jsx("p",{children:"JavaScript를 활용한 To-do-list 챌린지 과정 수료"})]}),e.jsxs(u,{children:[e.jsx("h4",{children:"노마드코더"}),e.jsx("h5",{children:"2023. 06 - 2023. 07"}),e.jsx("em",{children:"TypeScript Challenge"}),e.jsx("p",{children:"TypeScript 챌린지 과정 수료"})]}),e.jsxs(u,{children:[e.jsx("h4",{children:"한밭대학교"}),e.jsx("h5",{children:"2024. 03 - 재학중"}),e.jsx("em",{children:"대전 한밭대학교 소프트웨어응용학과"}),e.jsx("p",{children:"대전 한밭대학교 야간(소프트웨어 응용학과) 재학중"})]})]}),e.jsxs(I,{children:[e.jsx("h3",{children:"Work Experience"}),e.jsxs(u,{$isFirst:!0,children:[e.jsx("h4",{children:"(주)하우웰이엠에스"}),e.jsx("h5",{children:"2014. 01 ~ 2017. 05"}),e.jsx("em",{children:"방위산업체 산업기능요원"}),e.jsxs("ul",{children:[e.jsx("li",{children:"SMD라인 담당"}),e.jsx("li",{children:"생산라인 관리"})]})]}),e.jsxs(u,{children:[e.jsx("h4",{children:"(주)한성시스코"}),e.jsx("h5",{children:"2017. 06 ~ 2021. 12"}),e.jsx("em",{children:"제조사업부 - 생산기술 팀"}),e.jsxs("ul",{children:[e.jsx("li",{children:"외주 업체 생산관리 및 계획 담당"}),e.jsx("li",{children:"Iot 제품 펌웨어 다운로드 및 펌웨어 서버 안정화,서버 관리"}),e.jsx("li",{children:"분배기 생산 라인 관리"})]})]}),e.jsxs(u,{children:[e.jsx("h4",{children:"진솔루션즈"}),e.jsx("h5",{children:"2022. 01 - 2022. 11"}),e.jsx("em",{children:"솔루션 개발팀"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Vue3 + Typescript를 사용해 프론트 개발 및 유지보수"}),e.jsx("li",{children:"Electron + Vue3 + Sqlite3 + TS를 사용해 windows 응용프로그램 개발 및 유지보수"})]})]}),e.jsxs(u,{children:[e.jsx("h4",{children:"(주)에어사운드"}),e.jsx("h5",{children:"2022. 12 - 재직중"}),e.jsx("em",{children:"소프트웨어 개발팀"}),e.jsxs("ul",{children:[e.jsx("li",{children:"React + Ts를 사용해 프론트 개발 및 유지보수"}),e.jsx("li",{children:"Electron + React + Sqlite3 + TS를 사용해 windows 응용프로그램 개발 및 유지보수"}),e.jsx("li",{children:"Flutter를 사용해 크로스플랫폼 어플리케이션 개발 및 유지보수"}),e.jsx("li",{children:"Python을 활용한 Crawling및 음성인식 엔진 서버 구축"}),e.jsx("li",{children:"Bun.js(Ts) + Hono + MySql + Redis 웹 서버 구축"})]})]})]})]})]})})}const O=n.h1`
	font-size: 3em !important;
	margin-bottom: 20px !important;
	text-shadow: 0 14px 30px rgba(4, 11, 20, 0.45) !important;
	color: #f9fafb !important;

	@media (max-width: 768px) {
		font-size: 2em;
	}
`,b=n.h2`
	font-size: 1.4em !important;
	margin-bottom: 0 !important;
	color: #76abae !important;
	background: linear-gradient(120deg, #7dd3fc 0%, #38bdf8 45%, #c084fc 100%);
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent !important;
	filter: drop-shadow(0 4px 12px rgba(8, 18, 33, 0.5));
`,y=n.pre`
	background: linear-gradient(145deg, #0f172a, #111827);
	padding: 10px;
	border-radius: 16px;
	font-size: 1em;
	text-align: left;
	box-shadow: 0 12px 30px rgba(8, 18, 33, 0.45);
	border: 1px solid rgba(148, 163, 184, 0.15);
	width: fit-content !important;

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
`,k=n.div`
	margin: 10px auto;
	max-width: 90%;
	text-align: left;
	background: rgba(15, 23, 42, 0.6);
	border-radius: 18px;
	border: 1px solid rgba(125, 211, 252, 0.18);
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04),
		0 14px 32px rgba(8, 18, 33, 0.4);
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
			margin-bottom: 8px;
			padding-left: 55px;
			text-indent: -55px;
			background: linear-gradient(
				135deg,
				rgba(56, 189, 248, 0.08),
				rgba(192, 132, 252, 0.12)
			);
			border-radius: 14px;
			border: 1px solid rgba(56, 189, 248, 0.15);
			box-shadow: 0 6px 18px rgba(8, 18, 33, 0.3);
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
`,Te=n.table`
	border-collapse: collapse;
	font-size: 1em;
	box-shadow: 0 16px 36px rgba(8, 18, 33, 0.4);
	border-radius: 16px;
	overflow: hidden;
	border: 1px solid rgba(148, 163, 184, 0.2);

	thead tr {
		background: linear-gradient(145deg, #38bdf8, #818cf8);
		color: #0f172a;
		text-align: left;
	}

	th,
	td {
		padding: 12px 15px;
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
`,$e=n.div`
	background: linear-gradient(
		135deg,
		rgba(56, 189, 248, 0.35),
		rgba(99, 102, 241, 0.6)
	);
	padding: 5px;
	border-radius: 18px;
	margin: 0 auto;
	max-width: 1100px;
	box-shadow: 0 18px 38px rgba(8, 18, 33, 0.45);
	border: 1px solid rgba(125, 211, 252, 0.2);

	p {
		color: #f8fafc;
		font-size: 1em;
		margin: 0;
	}
`,P=n.p`
	font-size: 0.9em;
	opacity: 0.85;
	color: #cbd5f5;
`,Ie=()=>{const s=g.useRef(null),o=g.useRef(null);return g.useEffect(()=>{if(!o.current)return o.current=new ne(s.current,{width:1500,transition:"slide",hash:!0,controls:!0,progress:!0,slideNumber:"c/t",embedded:!0,mouseWheel:!0}),o.current.initialize().then(()=>{console.log("Reveal.js initialized successfully")}),()=>{try{o.current&&(o.current.destroy(),o.current=null)}catch{console.warn("Reveal.js destroy call failed.")}}},[]),e.jsx("div",{className:"reveal",ref:s,style:{height:"calc(100vh - 60px)"},children:e.jsxs("div",{className:"slides",children:[e.jsx("section",{"data-background-gradient":"linear-gradient(to bottom, #283b95, #17b2c3)",children:e.jsxs(O,{children:["데이터베이스 ",e.jsx("br",{}),"SELECT"]})},"0"),e.jsxs("section",{children:[e.jsx(b,{children:"SELECT 기본 문법"}),e.jsx(y,{children:e.jsxs("code",{children:[e.jsx("span",{className:"keyword",children:"SELECT"})," column1, column2, ...",`
`,e.jsx("span",{className:"keyword",children:"FROM"})," table_name;"]})}),e.jsx(k,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"SELECT"}),": CRUD 중 'Read'에 해당","	",e.jsx("span",{style:{color:"#dcdcaa",fontSize:"0.7em"},children:"-읽기, 조회, 검색-"}),e.jsxs(P,{children:["* CRUD: ",e.jsx("em",{children:"Create, Read, Update, Delete"})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"FROM"}),": 데이터를 가져올 테이블 지정"]}),e.jsxs("li",{children:["모든 컬럼을 조회하려면"," ",e.jsx("code",{style:{color:"#dcdcaa"},children:"*"})," 사용"]})]})})]},"1"),e.jsxs("section",{children:[e.jsx(b,{children:"전체 데이터 조회"}),e.jsx(y,{children:e.jsxs("code",{children:[e.jsx("span",{className:"keyword",children:"SELECT"})," *"," ",e.jsx("span",{className:"keyword",children:"FROM"})," users;"]})}),e.jsxs(Te,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"id"}),e.jsx("th",{children:"name"}),e.jsx("th",{children:"email"}),e.jsx("th",{children:"age"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"1"}),e.jsx("td",{children:"김철수"}),e.jsx("td",{children:"kim@example.com"}),e.jsx("td",{children:"25"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"2"}),e.jsx("td",{children:"이영희"}),e.jsx("td",{children:"lee@example.com"}),e.jsx("td",{children:"30"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"3"}),e.jsx("td",{children:"박민수"}),e.jsx("td",{children:"park@example.com"}),e.jsx("td",{children:"28"})]})]})]})]},"2"),e.jsxs("section",{children:[e.jsx(b,{children:"WHERE 조건절"}),e.jsx(y,{children:e.jsxs("code",{children:[e.jsx("span",{className:"keyword",children:"SELECT"})," *"," ",e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"WHERE"})," age > 25;"]})}),e.jsx(k,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"WHERE"}),": 특정 조건을 필터링"]}),e.jsx("li",{children:"비교 연산자: =, !=, >, <, >=, <="}),e.jsx("li",{children:"논리 연산자: AND, OR, NOT"}),e.jsx("li",{children:"패턴 매칭: LIKE, ILIKE(대소문자 구분 X)"}),e.jsx("li",{children:"NULL 체크: IS NULL, IS NOT NULL"})]})})]},"3"),e.jsxs("section",{children:[e.jsx(b,{children:"WHERE 절 활용 - 1"}),e.jsx(y,{children:e.jsxs("code",{children:[e.jsx("span",{className:"comment",children:"-- AND 조건 (age가 25초과하고 name 두번째에 '기'가 포함되는 users 테이블의 모든 데이터 조회)"}),`
`,e.jsx("span",{className:"keyword",children:"SELECT"})," *"," ",e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"WHERE"})," age > 25"," ",e.jsx("span",{className:"keyword",children:"AND"})," name"," ",e.jsx("span",{className:"keyword",children:"LIKE"})," ",e.jsx("span",{className:"string",children:"'_기%'"}),";",`

`,e.jsx("span",{className:"comment",children:"-- OR 조건 (age가 25미만이거나 30초과인 users 테이블의 name, gender 데이터 조회)"}),`
`,e.jsx("span",{className:"keyword",children:"SELECT"})," name, gender"," ",e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"WHERE"})," age < 25"," ",e.jsx("span",{className:"keyword",children:"OR"})," age > 30;"]})})]},"4"),e.jsxs("section",{children:[e.jsx(b,{children:"WHERE 절 활용 - 2"}),e.jsx(y,{children:e.jsxs("code",{children:[e.jsx("span",{className:"comment",children:"-- IN 조건 (age가 25, 30, 35인 users 테이블의 모든 데이터 조회)"}),`
`,e.jsx("span",{className:"keyword",children:"SELECT"})," *"," ",e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"WHERE"})," age"," ",e.jsx("span",{className:"keyword",children:"IN"})," (25, 30, 35);",`

`,e.jsx("span",{className:"comment",children:"-- BETWEEN 조건 (age가 25이상 30이하인 users 테이블의 모든 데이터 조회)"}),`
`,e.jsx("span",{className:"keyword",children:"SELECT"})," *"," ",e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"WHERE"})," age"," ",e.jsx("span",{className:"keyword",children:"BETWEEN"})," 25"," ",e.jsx("span",{className:"keyword",children:"AND"})," 30;"]})})]},"5"),e.jsxs("section",{children:[e.jsx(b,{children:"ORDER BY 정렬"}),e.jsx(y,{children:e.jsxs("code",{children:[e.jsx("span",{className:"keyword",children:"SELECT"})," *"," ",e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"ORDER BY"})," age, name"," ",e.jsx("span",{className:"keyword",children:"DESC"}),";"]})}),e.jsx(k,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"ORDER BY"}),": 결과를 정렬"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"ASC"}),": 오름차순 (기본값)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"DESC"}),": 내림차순"]}),e.jsx("li",{children:"여러 컬럼을 동시에 정렬할 수 있으며, 먼저 정렬할 컬럼을 앞에 작성합니다."})]})})]},"6"),e.jsxs("section",{children:[e.jsx(b,{children:"GROUP BY 그룹화 - 1"}),e.jsx(y,{children:e.jsxs("code",{children:[e.jsx("span",{className:"keyword",children:"SELECT"})," country,"," ",e.jsx("span",{className:"function",children:"COUNT"}),"(*)",`
`,e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"GROUP BY"})," country;"]})}),e.jsx(k,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"GROUP BY"}),": 특정 컬럼(",e.jsx("code",{children:"country"}),")을 기준으로 데이터를 그룹화합니다."]}),e.jsxs("li",{children:["집계 함수: ",e.jsx("code",{children:"COUNT"}),", ",e.jsx("code",{children:"SUM"}),","," ",e.jsx("code",{children:"AVG"}),", ",e.jsx("code",{children:"MAX"}),", ",e.jsx("code",{children:"MIN"})," 등과 함께 사용하여 그룹별 통계를 구할 수 있습니다."]}),e.jsxs("li",{children:["예: 각 나라별 사용자 수를 계산하거나, 나라별 평균 나이(",e.jsx("code",{children:"AVG(age)"}),") 등을 구할 때 사용합니다."]})]})})]},"7"),e.jsxs("section",{children:[e.jsx(b,{children:"GROUP BY 그룹화 - 2"}),e.jsx(y,{children:e.jsxs("code",{children:[e.jsx("span",{className:"comment",children:"-- 나라별 평균 나이가 30세 이상인 국가"}),`
`,e.jsx("span",{className:"keyword",children:"SELECT"})," country,"," ",e.jsx("span",{className:"function",children:"AVG"}),"(age)",`
`,e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"GROUP BY"})," country",`
`,e.jsx("span",{className:"keyword",children:"HAVING"})," ",e.jsx("span",{className:"function",children:"AVG"}),"(age) >= 30;"]})}),e.jsx(k,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"HAVING"}),": ",e.jsx("code",{children:"GROUP BY"}),"로 그룹화된 결과에 조건을 적용할 때 사용합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"WHERE"}),"과의 차이점: ",e.jsx("code",{children:"WHERE"}),"은 그룹화 전에 개별 행을 필터링하고, ",e.jsx("code",{children:"HAVING"}),"은 그룹화된 결과(집계 결과)에 조건을 적용합니다."]}),e.jsx("li",{children:"예: 나라별 평균 나이가 30세 이상인 국가를 조회"})]})})]},"8"),e.jsxs("section",{children:[e.jsx(b,{children:"JOIN 테이블 조인"}),e.jsx(y,{children:e.jsxs("code",{children:[e.jsx("span",{className:"keyword",children:"SELECT"})," users.name, orders.product",`
`,e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"INNER JOIN"})," orders",`
`,e.jsx("span",{className:"keyword",children:"ON"})," users.id = orders.user_id;"]})}),e.jsx(k,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"JOIN"}),": 두 개 이상의 테이블을 연결해 관련 데이터를 함께 조회할 때 사용합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"INNER JOIN"}),": 양쪽 테이블에 모두 존재하는 데이터만 조회 (교집합)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"LEFT JOIN"}),": 왼쪽 테이블을 중심으로 오른쪽의 테이블을 매치시킨다. 왼쪽은 무조건 표시하고, 매치되는 레코드가 오른쪽에 없으면 NULL을 표시한다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"RIGHT JOIN"}),": LEFT JOIN의 반대."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"OUTER JOIN"}),": 양쪽 테이블의 모든 데이터 조회 (합집합)"]})]})})]},"9"),e.jsxs("section",{children:[e.jsx(b,{children:"DISTINCT 중복 제거"}),e.jsx(y,{children:e.jsxs("code",{children:[e.jsx("span",{className:"comment",children:"-- 주문이 있는 사용자 목록을 중복 없이 조회"}),`
`,e.jsx("span",{className:"keyword",children:"SELECT DISTINCT"})," users.name",`
`,e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"INNER JOIN"})," orders",`
`,e.jsx("span",{className:"keyword",children:"ON"})," users.id = orders.user_id;"]})}),e.jsx(k,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"DISTINCT"}),": 결과에서 중복된 행을 제거합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"활용 예시"}),": 한 사용자가 여러 번 주문했더라도, 이름을 한 번만 표시하고 싶을 때 사용합니다."]}),e.jsxs("li",{children:["예: 같은 사용자가 여러 상품을 주문했다면 ",e.jsx("code",{children:"JOIN"})," ","결과에 이름이 반복되지만, ",e.jsx("code",{children:"DISTINCT"}),"를 사용하면 한 번만 표시됩니다."]})]})})]},"10"),e.jsxs("section",{children:[e.jsx(b,{children:"LIMIT"}),e.jsx($e,{children:e.jsxs("p",{children:["💡 대량 데이터 조회 시 ",e.jsx("code",{children:"LIMIT"}),"과 ",e.jsx("code",{children:"OFFSET"}),"으로 성능 최적화!"]})}),e.jsx(y,{children:e.jsxs("code",{children:[e.jsx("span",{className:"keyword",children:"SELECT"})," *"," ",e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"ORDER BY"})," created_at"," ",e.jsx("span",{className:"keyword",children:"DESC"}),`
`,e.jsx("span",{className:"keyword",children:"LIMIT"})," 10;",`

`,e.jsx("span",{className:"keyword",children:"SELECT"})," *"," ",e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"ORDER BY"})," created_at"," ",e.jsx("span",{className:"keyword",children:"DESC"}),`
`,e.jsx("span",{className:"keyword",children:"LIMIT"})," 10"," ",e.jsx("span",{className:"keyword",children:"OFFSET"})," 10;"]})}),e.jsx(k,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"LIMIT"}),": 조회할 결과의 개수를 제한합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"OFFSET"}),": 조회를 시작할 위치(행 번호)를 지정합니다. ",e.jsx("br",{}),"예: ",e.jsx("code",{children:"LIMIT 10 OFFSET 10"})," → 11번째 행부터 10개 조회"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"활용 예시"}),": 페이지네이션, 무한 스크롤, 최근 N개 데이터만 보기 등"]})]})})]},"11"),e.jsxs("section",{"data-background-gradient":"linear-gradient(to bottom, #17b2c3, #283b95)",children:[e.jsx(O,{children:"감사합니다!"}),e.jsxs(P,{children:["사용도구: React, Reveal.js, styled-components ",e.jsx("br",{}),"참고: ChatGPT"]})]},"12")]})})},Oe="/hanbat-portfolio/assets/caption_web-DtLYLhP7.png",Pe="/hanbat-portfolio/assets/electron_vue-w5pSGQaz.png",De="/hanbat-portfolio/assets/electron_vue2-11f4gaNP.png",Le="/hanbat-portfolio/assets/first_jsp-BoVOyK0y.png",Fe="/hanbat-portfolio/assets/share_mobile-C_8O5Fyq.png",Be="/hanbat-portfolio/assets/share_pc-y0kkMMto.png",Me="/hanbat-portfolio/assets/silkroad_admin-BeOBqPmO.png",Ve="/hanbat-portfolio/assets/tkita_dual_dark-BX-ujFL_.jpg",Ae="/hanbat-portfolio/assets/tkita_main-C125CPy3.jpg",He="/hanbat-portfolio/assets/tkita_single-CREEgKuG.jpg",Ge="/hanbat-portfolio/assets/vue_web-DqimfvdE.png",Ye="/hanbat-portfolio/assets/vue_web2-DNMt9iiU.png",Ue=n(S.section)`
	display: flex;
	padding: 40px 0;
`,_e=n.div`
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
`,We=n.div`
	text-align: center;
	margin-bottom: 30px;

	h2 {
		font-size: 36px;
		color: #76abaa;
		margin-bottom: 10px;
	}
`;function Je(){const s={dots:!0,infinite:!0,speed:500,slidesToScroll:1,autoplay:!0,autoplaySpeed:4e3,draggable:!1,fade:!1,arrows:!0,vertical:!1,initialSlide:0,pauseOnFocus:!0,pauseOnHover:!0};return e.jsx(Ue,{initial:{opacity:0,y:100},whileInView:{opacity:1,y:0},viewport:{once:!1},transition:{ease:"easeInOut",duration:2,y:{duration:1}},children:e.jsxs(_e,{children:[e.jsx(We,{children:e.jsx("h2",{children:"Project"})}),e.jsxs(ie,{...s,children:[e.jsx("div",{children:e.jsx("img",{src:Le})}),e.jsx("div",{children:e.jsx("img",{src:Pe})}),e.jsx("div",{children:e.jsx("img",{src:De})}),e.jsx("div",{children:e.jsx("img",{src:Ge})}),e.jsx("div",{children:e.jsx("img",{src:Ye})}),e.jsx("div",{children:e.jsx("img",{src:Be})}),e.jsx("div",{children:e.jsx("img",{src:Me})}),e.jsx("div",{children:e.jsx("img",{src:Oe})}),e.jsx("div",{children:e.jsx("img",{src:Fe})}),e.jsx("div",{children:e.jsx("img",{src:Ae})}),e.jsx("div",{children:e.jsx("img",{src:He})}),e.jsx("div",{children:e.jsx("img",{src:Ve})}),e.jsx("div",{children:e.jsx("h1",{children:"end..."})})]})]})})}const D="puzzle",qe=n.div`
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
`,Xe=({id:s,imageUrl:o,posX:c,posY:t,currentPos:i,movePiece:l,size:a})=>{const[{isDragging:C},z]=re({type:D,item:{id:s},collect:v=>({isDragging:v.isDragging()})}),[,T]=te({accept:D,drop:v=>{l(v.id,s)}});return e.jsx(qe,{ref:v=>z(T(v)),$imageUrl:o,$posX:c,$posY:t,$isDragging:C,$size:a})},Ke=n.div`
	width: 100%;
	padding: 40px;
`,Qe=n.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`,Ze=n.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (min-width: 950px) {
		flex-direction: row;
		align-items: flex-end;
	}
`,es=n.div`
	margin-bottom: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;

	h2 {
		font-size: 36px;
		color: #76abaa;
		margin-bottom: 10px;
	}
`,L=n.div`
	display: flex;
	gap: 15px;
	margin-bottom: 20px;
`,ss=n.div`
	width: 400px;
	height: 400px;
	display: grid;
	grid-template-columns: ${s=>`repeat(${s.$size}, 1fr)`};
	grid-template-rows: ${s=>`repeat(${s.$size}, 1fr)`};
	gap: 1px;
	background: #333;
	touch-action: none;
`,ns=n.img`
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
`,is=["JPEG","PNG","JPG"],rs={backends:[{backend:le,preview:!0},{backend:ae,options:{enableMouseEvents:!0},preview:!0,transition:xe}]},B=[{size:4,label:"하 (4×4)"},{size:8,label:"중 (8x8)"},{size:12,label:"상 (12x12)"}];function ts(){const[s,o]=g.useState(null),[c,t]=g.useState(""),[i,l]=g.useState([]),[a,C]=g.useState(B[0]),z=r=>{o(r);const j=URL.createObjectURL(r);t(j)},T=r=>{for(let j=r.length-1;j>0;j--){const f=Math.floor(Math.random()*(j+1));[r[j],r[f]]=[r[f],r[j]]}return r},v=(r,j)=>{const f=i.findIndex(w=>w.id===r),N=i.findIndex(w=>w.id===j),m=[...i];[m[f],m[N]]=[m[N],m[f]],l(m)},H=()=>{if(s){const r=a.size,j=[],f=100/(r-1);for(let m=0;m<r;m++)for(let w=0;w<r;w++)j.push({id:`${m*r+w}`,originalPos:{row:m,col:w},currentPos:{row:m,col:w},posX:w*f,posY:m*f});const N=T(j);l(N)}};g.useEffect(()=>{H()},[s,a]),g.useEffect(()=>{if(i.length>0){const r=a.size;i.every((f,N)=>f.originalPos.row===Math.floor(N/r)&&f.originalPos.col===N%r)&&alert("정답입니다! 다른 이미지로 도전해보세요!")}},[i,a]);const G=()=>{o(null),l([]),t("")},Y=r=>{C(r)};return e.jsx(Ke,{children:e.jsxs(Qe,{children:[e.jsxs(es,{children:[e.jsx("h2",{children:"Puzzle"}),s?e.jsx(L,{children:e.jsx(F,{onClick:G,children:"초기화"})}):e.jsx(L,{children:B.map(r=>e.jsx(F,{onClick:()=>Y(r),className:a.size===r.size?"active":"",children:r.label},r.size))})]}),e.jsxs(Ze,{children:[s?e.jsx(oe,{backend:de,options:rs,children:e.jsx(ss,{$size:a.size,children:i.map(r=>e.jsx(Xe,{id:r.id,imageUrl:c,posX:r.posX,posY:r.posY,currentPos:r.currentPos,movePiece:v,size:a.size},r.id))})}):e.jsx(ce,{classes:"dnd",onSizeError:()=>alert("파일 사이즈가 너무 큽니다(2MB)"),handleChange:z,onDrop:z,name:"file",types:is,multiple:!1,label:"사진을 업로드하면 퍼즐이 만들어집니다.",required:!0}),s&&e.jsx(ns,{src:c,alt:"Original"})]})]})})}const os=n(S.section)`
	padding: 40px 0;
`,ls=n.div`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 15px;
`,as=n.div`
	text-align: center;
	margin-bottom: 30px;

	h2 {
		font-size: 36px;
		color: #76abaa;
		margin-bottom: 10px;
	}
`,R=n.div`
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
`,p=n.div`
	width: 150px;
	height: 150px;
`;function cs(){return e.jsx(os,{initial:{opacity:0,y:100},whileInView:{opacity:1,y:0},viewport:{once:!1},transition:{ease:"easeInOut",duration:2,y:{duration:1}},children:e.jsxs(ls,{children:[e.jsx(as,{children:e.jsx("h2",{children:"Skill"})}),e.jsxs(R,{children:[e.jsxs(h,{children:[e.jsx("h3",{children:"Html5"}),e.jsx(p,{children:e.jsx(d,{value:.9,maxValue:1,text:`${.9*100}%`,styles:x({pathColor:"#E44D26",textColor:"#E44D26"})})})]}),e.jsxs(h,{children:[e.jsx("h3",{children:"Css3"}),e.jsx(p,{children:e.jsx(d,{value:.8,maxValue:1,text:`${.8*100}%`,styles:x({pathColor:"#264DE4",textColor:"#264DE4"})})})]}),e.jsxs(h,{children:[e.jsx("h3",{children:"TypeScript"}),e.jsx(p,{children:e.jsx(d,{value:.8,maxValue:1,text:`${.8*100}%`,styles:x({pathColor:"#3178C6",textColor:"#3178C6"})})})]}),e.jsxs(h,{children:[e.jsx("h3",{children:"Flutter"}),e.jsx(p,{children:e.jsx(d,{value:.7,maxValue:1,text:`${.7*100}%`,styles:x({pathColor:"#02569B",textColor:"#02569B"})})})]})]}),e.jsxs(R,{children:[e.jsxs(h,{children:[e.jsx("h3",{children:"Vue3"}),e.jsx(p,{children:e.jsx(d,{value:.7,maxValue:1,text:`${.7*100}%`,styles:x({pathColor:"#42B883",textColor:"#42B883"})})})]}),e.jsxs(h,{children:[e.jsx("h3",{children:"React"}),e.jsx(p,{children:e.jsx(d,{value:.9,maxValue:1,text:`${.9*100}%`,styles:x({pathColor:"#61DAFB",textColor:"#61DAFB"})})})]}),e.jsxs(h,{children:[e.jsx("h3",{children:"Python"}),e.jsx(p,{children:e.jsx(d,{value:.8,maxValue:1,text:`${.8*100}%`,styles:x({pathColor:"#3776AB",textColor:"#3776AB"})})})]}),e.jsxs(h,{children:[e.jsx("h3",{children:"Vite"}),e.jsx(p,{children:e.jsx(d,{value:.6,maxValue:1,text:`${.6*100}%`,styles:x({pathColor:"#646CFF",textColor:"#646CFF"})})})]})]}),e.jsxs(R,{children:[e.jsxs(h,{children:[e.jsx("h3",{children:"Nginx"}),e.jsx(p,{children:e.jsx(d,{value:.5,maxValue:1,text:`${.5*100}%`,styles:x({pathColor:"#009639",textColor:"#009639"})})})]}),e.jsxs(h,{children:[e.jsx("h3",{children:"MySql"}),e.jsx(p,{children:e.jsx(d,{value:.6,maxValue:1,text:`${.6*100}%`,styles:x({pathColor:"#4479A1",textColor:"#4479A1"})})})]}),e.jsxs(h,{children:[e.jsx("h3",{children:"Ubuntu"}),e.jsx(p,{children:e.jsx(d,{value:.7,maxValue:1,text:`${.7*100}%`,styles:x({pathColor:"#E95420",textColor:"#E95420"})})})]}),e.jsxs(h,{children:[e.jsx("h3",{children:"Electron.js"}),e.jsx(p,{children:e.jsx(d,{value:.7,maxValue:1,text:`${.7*100}%`,styles:x({pathColor:"#47848F",textColor:"#47848F"})})})]})]}),e.jsxs(R,{children:[e.jsxs(h,{children:[e.jsx("h3",{children:"Node.js"}),e.jsx(p,{children:e.jsx(d,{value:.8,maxValue:1,text:`${.8*100}%`,styles:x({pathColor:"#339933",textColor:"#339933"})})})]}),e.jsxs(h,{children:[e.jsx("h3",{children:"Bun.js"}),e.jsx(p,{children:e.jsx(d,{value:.5,maxValue:1,text:`${.5*100}%`,styles:x({pathColor:"#FBF0DF",textColor:"#FBF0DF"})})})]}),e.jsxs(h,{children:[e.jsx("h3",{children:"Redis"}),e.jsx(p,{children:e.jsx(d,{value:.6,maxValue:1,text:`${.6*100}%`,styles:x({pathColor:"#DC382D",textColor:"#DC382D"})})})]})]})]})})}const ds=A`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-2.5px);
    }
`,xs=n.nav`
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
`,hs=n.a`
	color: #76abae;
	font-weight: bold;
	text-decoration: none;
	font-size: 13px;
	position: relative;
	display: inline-block;
	transition: 0.3s ease;
	&:hover {
		animation: ${ds} 0.5s ease infinite alternate;
	}
`;function ps({story:s}){function o(c){c.preventDefault();const t=c.target.getAttribute("href"),i=document.querySelector(t);i&&i.scrollIntoView({behavior:"smooth",block:"center"})}return e.jsx(xs,{onClick:o,children:e.jsx("ul",{children:s.map((c,t)=>e.jsx("li",{children:e.jsx(hs,{href:c.href,children:c.name})},t))})})}const js="/hanbat-portfolio/assets/001-QaaCS8Xj.png",ms="/hanbat-portfolio/assets/002-CoGtfpOr.png",us="/hanbat-portfolio/assets/003-Bkjd7iTY.png",gs="/hanbat-portfolio/assets/004-Dd-qRShE.png",fs=n(S.div)`
	width: 100%;
	padding: 20px;
`,M=n.section`
	width: 100%;
	display: flex;
	justify-content: center;
	margin: 20px 0;
`,V=n.div`
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
`;function bs(){const[s,o]=g.useState([{href:"#name",name:"나의 이름 삼행시",img:js,flip:!1},{href:"#number",name:"숫자 아이덴티티",img:ms,flip:!1},{href:"#hobby",name:"취미 생활",img:us,flip:!1},{href:"#model",name:"나의 롤모델",img:gs,flip:!1}]),c=t=>{o(s.map(i=>t===i.href?{...i,flip:!i.flip}:{...i}))};return e.jsxs(fs,{initial:{opacity:0,y:100},whileInView:{opacity:1,y:0},viewport:{once:!1},transition:{ease:"easeInOut",duration:2,y:{duration:1}},children:[e.jsx(ps,{story:s}),s.map((t,i)=>e.jsxs(he,{isFlipped:t.flip,flipDirection:"horizontal",children:[e.jsx(M,{id:t.href.replace(/^#/,""),onClick:()=>c(t.href),children:e.jsx(V,{children:e.jsx("div",{children:e.jsx("h2",{children:t.name})})})}),e.jsx(M,{id:t.href.replace(/^#/,""),onClick:()=>c(t.href),children:e.jsx(V,{children:e.jsx("img",{src:t.img,alt:t.name})})})]},i))]})}function ys(){return e.jsx(e.Fragment,{children:e.jsx(fe,{children:e.jsxs(Q,{children:[e.jsx(E,{index:!0,path:"/",element:Re()}),e.jsx(E,{path:"/story",element:bs()}),e.jsx(E,{path:"/skill",element:cs()}),e.jsx(E,{path:"/contact",element:Ne()}),e.jsx(E,{path:"/project",element:Je()}),e.jsx(E,{path:"/puzzle",element:ts()}),e.jsx(E,{path:"/presentation",element:e.jsx(Ie,{})})]})})})}const ws={createGlobalStyle:q},ks=ws.createGlobalStyle`
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
`;console.log("/hanbat-portfolio");_.createRoot(document.getElementById("root")).render(e.jsx(X,{shouldForwardProp:U,children:e.jsxs(J,{basename:"/hanbat-portfolio",children:[e.jsx(ks,{}),e.jsx(ys,{})]})}));
