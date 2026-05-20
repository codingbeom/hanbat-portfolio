import{r as d,j as e}from"./react-YOz2hQel.js";import{i as se}from"./@emotion-D-ku2L_v.js";import{c as ne}from"./react-dom-2CQTX6Uh.js";import{L as Y,B as re}from"./react-router-dom-BwfYDIAl.js";/* empty css                       */import{m as w,d as n,l as T,f as W,Y as ie}from"./styled-components-DSn1G4Go.js";import{b as ae,d as te,e as y}from"./react-router-BjYqc64p.js";import{m as f}from"./framer-motion-C3xDexNK.js";import{G as oe,E as le,a as ce}from"./react-bootstrap-icons--7tUhotW.js";import{X as H}from"./reveal.js-BOpe6G5o.js";import{S as de}from"./react-slick-BFdVUf1J.js";import{u as xe,a as pe,D as he}from"./react-dnd-KbD2iaha.js";import{H as me}from"./react-dnd-html5-backend-1HQjlkwI.js";import{T as je}from"./react-dnd-touch-backend-BF3WdvOs.js";import{E as ge}from"./react-drag-drop-files-BGHCxwuL.js";import{P as be,S as ue}from"./dnd-multi-backend-CnBkwHxh.js";import{C as fe,b as we}from"./react-circular-progressbar-D-OSc2_R.js";import{_ as ye}from"./react-card-flip-Byd4lJLs.js";import"./classnames-r5axgyEj.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-DyRdwddT.js";import"./tslib-wbdO-F7s.js";import"./shallowequal-B6su5-_x.js";import"./stylis-DinRj2j6.js";import"./prop-types-CNJ-wrTR.js";import"./lodash.debounce-Cx665Aaa.js";import"./resize-observer-polyfill-BWCBsnt7.js";import"./json2mq-DXkj81uw.js";import"./string-convert-DdSrkZLz.js";import"./enquire.js-B8qsBZnP.js";import"./dnd-core-D9oQlGRy.js";import"./redux-CuxFRhX_.js";import"./@react-dnd-CcuaHj6U.js";import"./fast-deep-equal-6ves6buk.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const x of c.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&a(x)}).observe(document,{childList:!0,subtree:!0});function o(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(i){if(i.ep)return;i.ep=!0;const c=o(i);fetch(i.href,c)}})();const ke=w`
  0%   { transform: translateY(0); }
  100% { transform: translateY(-3px); }
`,Ne=w`
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
`,ve=w`
  from { opacity: 0; }
  to   { opacity: 1; }
`,Se=n.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`,$e=n.nav`
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
	opacity: ${s=>s.$visible?1:0};
	pointer-events: ${s=>s.$visible?"all":"none"};
	transition: opacity 0.3s ease;
`,Ee=n.span`
	color: #76abae;
	font-size: 18px;
	font-weight: 700;
	letter-spacing: 0.05em;
	user-select: none;

	/* 데스크탑에서는 숨김 */
	@media (min-width: 769px) {
		display: none;
	}
`,ze=n.ul`
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
`,Ce=n(Y)`
	color: ${s=>s.$active?"#76ABAE":"lightsalmon"};
	font-weight: ${s=>s.$active?"700":"400"};
	text-decoration: none;
	font-size: 15px;
	position: relative;
	display: inline-block;
	transition: color 0.2s ease;
	letter-spacing: 0.03em;

	/* 활성 링크 언더라인 */
	${s=>s.$active&&T`
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
		animation: ${ke} 0.4s ease infinite alternate;
		color: #76abae;
	}
`,Te=n.button`
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
	${s=>s.$open&&T`
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
`,Oe=n.div`
	display: ${s=>s.$open?"block":"none"};
	position: fixed;
	inset: 60px 0 0 0;
	background: rgba(0, 0, 0, 0.4);
	z-index: 90;
	animation: ${ve} 0.2s ease;

	@media (min-width: 769px) {
		display: none;
	}
`,Ie=n.ul`
	display: ${s=>s.$open?"flex":"none"};
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
	animation: ${Ne} 0.25s ease;
	border-bottom: 2px solid #76abae33;

	& > li {
		list-style: none;
	}

	@media (min-width: 769px) {
		display: none;
	}
`,Le=n(Y)`
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 14px 2rem;
	color: ${s=>s.$active?"#76ABAE":"#e8d5c4"};
	font-weight: ${s=>s.$active?"700":"400"};
	font-size: 15px;
	text-decoration: none;
	border-left: 3px solid ${s=>s.$active?"#76ABAE":"transparent"};
	background: ${s=>s.$active?"rgba(118,171,174,0.08)":"transparent"};
	transition:
		background 0.15s ease,
		color 0.15s ease,
		border-color 0.15s ease;
	letter-spacing: 0.03em;

	&:active {
		background: rgba(118, 171, 174, 0.15);
	}
`,C=[{href:"/",name:"Home",emoji:"🏠"},{href:"/project",name:"Project",emoji:"📁"},{href:"/skill",name:"Skill",emoji:"⚡"},{href:"/story",name:"Story",emoji:"📖"},{href:"/contact",name:"Contact",emoji:"✉️"},{href:"/puzzle",name:"Puzzle",emoji:"🧩"},{href:"/presentation",name:"MySQL",emoji:"📊"},{href:"/nosql",name:"MongoDB",emoji:"🍃"},{href:"/supa",name:"Supabase",emoji:"💾"}];function Re({children:s}){var E;const r=ae(),[o,a]=d.useState(!0),[i,c]=d.useState(!1),x=l=>r.pathname===l;return d.useEffect(()=>{if(r.pathname!=="/story")return;const l=()=>a(window.scrollY<=60);return document.addEventListener("scroll",l,{passive:!0}),()=>document.removeEventListener("scroll",l)},[r.pathname]),d.useEffect(()=>{c(!1)},[r.pathname]),d.useEffect(()=>(document.body.style.overflow=i?"hidden":"",()=>{document.body.style.overflow=""}),[i]),e.jsxs(Se,{children:[e.jsxs($e,{$visible:o,children:[e.jsx(Ee,{children:((E=C.find(l=>l.href===r.pathname))==null?void 0:E.name)??"✦"}),e.jsx(ze,{children:C.map(l=>e.jsx("li",{children:e.jsx(Ce,{to:l.href,$active:x(l.href),children:l.name})},l.href))}),e.jsxs(Te,{$open:i,onClick:()=>c(l=>!l),"aria-label":"메뉴 열기/닫기","aria-expanded":i,children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]}),e.jsx(Oe,{$open:i,onClick:()=>c(!1)}),e.jsx(Ie,{$open:i,role:"menu",children:C.map(l=>e.jsx("li",{role:"none",children:e.jsxs(Le,{to:l.href,$active:x(l.href),role:"menuitem",onClick:()=>c(!1),children:[e.jsx("span",{children:l.emoji}),l.name]})},l.href))}),s]})}const Pe=w`
	0%   { background-position: -200% center; }
	100% { background-position:  200% center; }
`,De=n(f.section)`
	padding: 60px 0 80px;
`,Me=n.div`
	width: 100%;
	max-width: 1100px;
	margin: 0 auto;
	padding: 0 20px;
`,Be=n.h2`
	text-align: center;
	font-size: 32px;
	font-weight: 700;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	background: linear-gradient(90deg, #76abae, #a8d8da, #76abae);
	background-size: 200% auto;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: ${Pe} 3s linear infinite;
	margin-bottom: 8px;
`,Fe=n.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	margin-bottom: 60px;

	@media screen and (max-width: 900px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (max-width: 500px) {
		grid-template-columns: 1fr;
	}
`,Q=n(f.a)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 14px;
	padding: 32px 16px;
	background: rgba(49, 54, 63, 0.7);
	border: 1px solid rgba(118, 171, 174, 0.15);
	border-radius: 16px;
	text-decoration: none;
	cursor: pointer;
	transition:
		transform 0.25s ease,
		border-color 0.25s ease,
		box-shadow 0.25s ease;

	&:hover {
		transform: translateY(-6px);
		border-color: rgba(118, 171, 174, 0.5);
		box-shadow: 0 12px 32px rgba(118, 171, 174, 0.12);
	}
`,Ae=n.div`
	width: 56px;
	height: 56px;
	border-radius: 50%;
	background: rgba(118, 171, 174, 0.12);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 24px;
	color: #76abae;
	transition: background 0.25s ease;

	${Q}:hover & {
		background: rgba(118, 171, 174, 0.22);
	}
`,Ge=n.span`
	font-size: 13px;
	font-weight: 600;
	color: #76abae;
	letter-spacing: 0.08em;
	text-transform: uppercase;
`,Ve=n.span`
	font-size: 14px;
	color: #bbb;
	text-align: center;
	line-height: 1.5;
	word-break: break-word;
`,Ye=n.div`
	border-radius: 16px;
	overflow: hidden;
	border: 1px solid rgba(118, 171, 174, 0.2);
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

	iframe {
		width: 100%;
		height: 380px;
		display: block;
		border: none;
	}
`,We={hidden:{opacity:0,y:30},visible:s=>({opacity:1,y:0,transition:{delay:s*.12,duration:.5,ease:"easeOut"}})},He=[{icon:e.jsx(oe,{}),label:"Location",value:`43, Dacheongro, Daeduckgu
Daejeon, Korea`,href:void 0},{icon:e.jsx(le,{}),label:"Email",value:"lkb951103@gmail.com",href:"mailto:lkb951103@gmail.com"},{icon:e.jsx(ce,{}),label:"GitHub",value:"github.com/codingbeom",href:"https://github.com/codingbeom"}];function Qe(){return e.jsx(De,{initial:{opacity:0,y:80},whileInView:{opacity:1,y:0},viewport:{once:!1},transition:{ease:"easeInOut",duration:.8},children:e.jsxs(Me,{children:[e.jsx(Be,{children:"Contact"}),e.jsx(Fe,{children:He.map((s,r)=>{var o,a;return e.jsxs(Q,{as:s.href?f.a:f.div,href:s.href,target:(o=s.href)!=null&&o.startsWith("http")?"_blank":void 0,rel:(a=s.href)!=null&&a.startsWith("http")?"noopener noreferrer":void 0,custom:r,initial:"hidden",whileInView:"visible",viewport:{once:!1},variants:We,children:[e.jsx(Ae,{children:s.icon}),e.jsx(Ge,{children:s.label}),e.jsx(Ve,{children:s.value})]},s.label)})}),e.jsx(Ye,{children:e.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3209.187065945216!2d127.42896287626438!3d36.453035287191554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565378256b23ddb%3A0x28573d3c56aaf32f!2z64yA7KCE6rSR7Jet7IucIOuMgOuNleq1rCDrjIDssq3roZwgNDM!5e0!3m2!1sko!2skr!4v1694869940137!5m2!1sko!2skr",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})]})})}const Ue=[{title:"전자기기 기능사",period:"2013",sub:"자격증 취득"},{title:"전기 기능사",period:"2017",sub:"자격증 취득"},{title:"전기 기사",period:"2020. 12",sub:"자격증 취득"},{title:"노마드코더 — HTML5 / CSS3",period:"2021. 07 – 09",sub:"코코아톡 클론 챌린지 수료"},{title:"효성 컴퓨터학원",period:"2021. 07 – 10",sub:"NCS 기반 JAVA 응용 SW 엔지니어링 국비 과정 수료"},{title:"노마드코더 — JavaScript",period:"2021. 09 – 11",sub:"To-do-list 챌린지 수료"},{title:"노마드코더 — TypeScript",period:"2023. 06 – 07",sub:"TypeScript 챌린지 수료"},{title:"한밭대학교",period:"2024. 03 – 재학중",sub:"소프트웨어응용학과 (야간) 재학중"}],_e=[{title:"(주)하우웰이엠에스",period:"2014. 01 – 2017. 05",sub:"방위산업체 산업기능요원",bullets:["SMD 라인 담당","생산라인 관리"]},{title:"(주)한성시스코",period:"2017. 06 – 2021. 12",sub:"제조사업부 · 생산기술 팀",bullets:["외주 업체 생산관리 및 계획 담당","IoT 제품 펌웨어 다운로드 및 서버 안정화 · 관리","분배기 생산 라인 관리"]},{title:"진솔루션즈",period:"2022. 01 – 2022. 11",sub:"솔루션 개발팀",bullets:["Vue3 + TypeScript 프론트엔드 개발 및 유지보수","Electron + Vue3 + SQLite3 Windows 응용프로그램 개발"]},{title:"(주)에어사운드",period:"2022. 12 – 재직중",sub:"소프트웨어 개발팀",bullets:["React + TypeScript 프론트엔드 개발 및 유지보수","Electron + React + SQLite3 Windows 응용프로그램 개발","Flutter 크로스플랫폼 앱 개발 및 유지보수","Python 기반 크롤링 및 음성인식 엔진 서버 구축","Bun.js + Hono + MySQL + Redis 웹 서버 구축"]}],Je=w`
	0%   { background-position: -200% center; }
	100% { background-position:  200% center; }
`,qe=w`
	from { height: 0; }
	to   { height: 100%; }
`,Ke={hidden:{opacity:0,x:-20},visible:s=>({opacity:1,x:0,transition:{duration:.45,delay:s*.07,ease:"easeOut"}})},Xe=n(f.section)`
	padding: 80px 0;
	background: #1a1e25;
	width: 100%;
`,Ze=n.div`
	max-width: 1100px;
	margin: 0 auto;
	padding: 0 24px;
`,es=n.div`
	text-align: center;
	margin-bottom: 64px;
`,ss=n.h2`
	font-size: 32px;
	font-weight: 700;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	background: linear-gradient(90deg, #76abae, #a8d8da, #76abae);
	background-size: 200% auto;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: ${Je} 3s linear infinite;
	margin-bottom: 8px;
`,ns=n.div`
	display: inline-flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 12px;
	background: #252b34;
	border: 1px solid #2e3640;
	border-left: 4px solid #76abae;
	border-radius: 14px;
	padding: 28px 36px;
	max-width: 680px;
	text-align: left;

	@media (max-width: 600px) {
		padding: 20px 20px;
	}
`,rs=n.p`
	font-size: 18px;
	font-weight: 700;
	color: #e8d5c4;
	margin: 0;
`,is=n.p`
	font-size: 14px;
	color: #8b95a3;
	line-height: 1.85;
	margin: 0;
`,as=n.div`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	margin-top: 4px;
`,ts=n.span`
	font-size: 11px;
	font-weight: 600;
	letter-spacing: 0.06em;
	padding: 4px 10px;
	border-radius: 20px;
	background: rgba(118, 171, 174, 0.12);
	color: #76abae;
	border: 1px solid rgba(118, 171, 174, 0.25);
`,os=n.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 40px 48px;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 40px;
	}
`,I=n.h3`
	font-size: 13px;
	font-weight: 700;
	letter-spacing: 0.14em;
	text-transform: uppercase;
	color: #76abae;
	margin-bottom: 28px;
	display: flex;
	align-items: center;
	gap: 8px;

	&::after {
		content: '';
		flex: 1;
		height: 1px;
		background: linear-gradient(to right, #76abae44, transparent);
	}
`,L=n.div`
	position: relative;
	padding-left: 24px;

	/* 세로선 */
	&::before {
		content: '';
		position: absolute;
		left: 5px;
		top: 8px;
		width: 2px;
		background: linear-gradient(to bottom, #76abae88, transparent);
		animation: ${qe} 1s ease forwards;
	}
`,ls=n(f.div)`
	position: relative;
	margin-bottom: 24px;

	/* 도트 */
	&::before {
		content: '';
		position: absolute;
		left: -20px;
		top: 6px;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #76abae;
		border: 2px solid #1a1e25;
		box-shadow: 0 0 6px #76abae88;
	}

	&:last-child {
		margin-bottom: 0;
	}
`,cs=n.div`
	background: #252b34;
	border: 1px solid #2e3640;
	border-radius: 12px;
	padding: 16px 18px;
	transition:
		border-color 0.2s ease,
		box-shadow 0.2s ease;

	&:hover {
		border-color: #76abae44;
		box-shadow: 0 4px 16px rgba(118, 171, 174, 0.1);
	}
`,ds=n.h4`
	font-size: 15px;
	font-weight: 700;
	color: #e8d5c4;
	margin: 0 0 4px;
`,xs=n.span`
	font-size: 11px;
	font-weight: 600;
	letter-spacing: 0.06em;
	color: #76abae;
	background: rgba(118, 171, 174, 0.1);
	padding: 2px 8px;
	border-radius: 10px;
	display: inline-block;
	margin-bottom: 8px;
`,ps=n.p`
	font-size: 13px;
	color: #8b95a3;
	margin: 0 0 8px;
`,hs=n.ul`
	margin: 0;
	padding-left: 16px;
	display: flex;
	flex-direction: column;
	gap: 4px;

	li {
		font-size: 12px;
		color: #6b7a8d;
		line-height: 1.6;
	}
`;function R({entry:s,index:r}){return e.jsx(ls,{custom:r,variants:Ke,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:e.jsxs(cs,{children:[e.jsx(ds,{children:s.title}),e.jsx(xs,{children:s.period}),s.sub&&e.jsx(ps,{children:s.sub}),s.bullets&&e.jsx(hs,{children:s.bullets.map((o,a)=>e.jsx("li",{children:o},a))})]})})}function ms(){return e.jsx(Xe,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!1},transition:{duration:.6},children:e.jsxs(Ze,{children:[e.jsxs(es,{children:[e.jsx(ss,{children:"Career"}),e.jsxs(ns,{children:[e.jsx(rs,{children:"이기범 · Frontend / Software Engineer"}),e.jsxs(is,{children:["전기 분야 실무 경험을 바탕으로 소프트웨어 개발로 전환, 현재 프론트엔드 및 크로스플랫폼 개발자로 성장하고 있습니다.",e.jsx("br",{}),"문제를 끝까지 파고드는 성격으로 React, Flutter, Python 기반 음성인식 서버까지 폭넓게 다루며, 인공지능 · 빅데이터 분야로의 확장을 목표로 한밭대학교 소프트웨어응용학과에서 학업을 이어가고 있습니다."]}),e.jsx(as,{children:["Frontend","Backend","Electron","Flutter","Python","AI/STT","DevOps"].map(s=>e.jsx(ts,{children:s},s))})]})]}),e.jsxs(os,{children:[e.jsxs("div",{children:[e.jsx(I,{children:"📚 Education"}),e.jsx(L,{children:Ue.map((s,r)=>e.jsx(R,{entry:s,index:r},s.title))})]}),e.jsxs("div",{children:[e.jsx(I,{children:"💼 Work Experience"}),e.jsx(L,{children:_e.map((s,r)=>e.jsx(R,{entry:s,index:r},s.title))})]})]})]})})}const U=n.h1`
	font-size: 3em !important;
	margin-bottom: 20px !important;
	text-shadow: 0 14px 30px rgba(4, 11, 20, 0.45) !important;
	color: #f9fafb !important;

	@media (max-width: 768px) {
		font-size: 2em;
	}
`,g=n.h2`
	font-size: 1.4em !important;
	margin-bottom: 8px !important;
	background: linear-gradient(120deg, #7dd3fc 0%, #38bdf8 45%, #c084fc 100%);
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent !important;
	filter: drop-shadow(0 4px 12px rgba(8, 18, 33, 0.5));
`,b=n.pre`
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
`,v=n.div`
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
`,js=n.table`
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
`,gs=n.div`
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
`,O=n.p`
	font-size: 0.88em;
	opacity: 0.85;
	color: #cbd5f5;
`,bs=()=>e.jsxs("section",{children:[e.jsx(g,{children:"DISTINCT 중복 제거"}),e.jsx(b,{children:e.jsxs("code",{children:[e.jsx("span",{className:"comment",children:"-- 주문이 있는 사용자 목록을 중복 없이 조회"}),`
`,e.jsx("span",{className:"keyword",children:"SELECT DISTINCT"})," users.name",`
`,e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"INNER JOIN"})," orders",`
`,e.jsx("span",{className:"keyword",children:"ON"})," users.id = orders.user_id;"]})}),e.jsx(v,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"DISTINCT"}),": 결과에서 중복된 행을 제거합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"활용 예시"}),": 한 사용자가 여러 번 주문했더라도, 이름을 한 번만 표시하고 싶을 때 사용합니다."]}),e.jsxs("li",{children:["예: 같은 사용자가 여러 상품을 주문했다면 ",e.jsx("code",{children:"JOIN"})," 결과에 이름이 반복되지만, ",e.jsx("code",{children:"DISTINCT"}),"를 사용하면 한 번만 표시됩니다."]})]})})]},"10"),us=()=>e.jsxs("section",{children:[e.jsx(g,{children:"GROUP BY 그룹화 - 1"}),e.jsx(b,{children:e.jsxs("code",{children:[e.jsx("span",{className:"keyword",children:"SELECT"})," country,"," ",e.jsx("span",{className:"function",children:"COUNT"}),"(*)",`
`,e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"GROUP BY"})," country;"]})}),e.jsx(v,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"GROUP BY"}),": 특정 컬럼(",e.jsx("code",{children:"country"}),")을 기준으로 데이터를 그룹화합니다."]}),e.jsxs("li",{children:["집계 함수: ",e.jsx("code",{children:"COUNT"}),", ",e.jsx("code",{children:"SUM"}),", ",e.jsx("code",{children:"AVG"}),","," ",e.jsx("code",{children:"MAX"}),", ",e.jsx("code",{children:"MIN"})," 등과 함께 사용하여 그룹별 통계를 구할 수 있습니다."]}),e.jsxs("li",{children:["예: 각 나라별 사용자 수를 계산하거나, 나라별 평균 나이(",e.jsx("code",{children:"AVG(age)"}),") 등을 구할 때 사용합니다."]})]})})]},"7"),fs=()=>e.jsxs("section",{children:[e.jsx(g,{children:"GROUP BY 그룹화 - 2"}),e.jsx(b,{children:e.jsxs("code",{children:[e.jsx("span",{className:"comment",children:"-- 나라별 평균 나이가 30세 이상인 국가"}),`
`,e.jsx("span",{className:"keyword",children:"SELECT"})," country,"," ",e.jsx("span",{className:"function",children:"AVG"}),"(age)",`
`,e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"GROUP BY"})," country",`
`,e.jsx("span",{className:"keyword",children:"HAVING"})," ",e.jsx("span",{className:"function",children:"AVG"}),"(age) >= 30;"]})}),e.jsx(v,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"HAVING"}),": ",e.jsx("code",{children:"GROUP BY"}),"로 그룹화된 결과에 조건을 적용할 때 사용합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"WHERE"}),"과의 차이점: ",e.jsx("code",{children:"WHERE"}),"은 그룹화 전에 개별 행을 필터링하고, ",e.jsx("code",{children:"HAVING"}),"은 그룹화된 결과(집계 결과)에 조건을 적용합니다."]}),e.jsx("li",{children:"예: 나라별 평균 나이가 30세 이상인 국가를 조회"})]})})]},"8"),ws=()=>e.jsxs("section",{children:[e.jsx(g,{children:"JOIN 테이블 조인"}),e.jsx(b,{children:e.jsxs("code",{children:[e.jsx("span",{className:"keyword",children:"SELECT"})," users.name, orders.product",`
`,e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"INNER JOIN"})," orders",`
`,e.jsx("span",{className:"keyword",children:"ON"})," users.id = orders.user_id;"]})}),e.jsx(v,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"JOIN"}),": 두 개 이상의 테이블을 연결해 관련 데이터를 함께 조회할 때 사용합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"INNER JOIN"}),": 양쪽 테이블에 모두 존재하는 데이터만 조회 (교집합)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"LEFT JOIN"}),": 왼쪽 테이블을 중심으로 오른쪽 테이블을 매치. 오른쪽에 없으면 NULL 표시."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"RIGHT JOIN"}),": LEFT JOIN의 반대."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"OUTER JOIN"}),": 양쪽 테이블의 모든 데이터 조회 (합집합)"]})]})})]},"9"),ys=()=>e.jsxs("section",{children:[e.jsx(g,{children:"LIMIT"}),e.jsx(gs,{children:e.jsxs("p",{children:["💡 대량 데이터 조회 시 ",e.jsx("code",{children:"LIMIT"}),"과 ",e.jsx("code",{children:"OFFSET"}),"으로 성능 최적화!"]})}),e.jsx(b,{children:e.jsxs("code",{children:[e.jsx("span",{className:"keyword",children:"SELECT"})," *"," ",e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"ORDER BY"})," created_at"," ",e.jsx("span",{className:"keyword",children:"DESC"}),`
`,e.jsx("span",{className:"keyword",children:"LIMIT"})," 10;",`

`,e.jsx("span",{className:"keyword",children:"SELECT"})," *"," ",e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"ORDER BY"})," created_at"," ",e.jsx("span",{className:"keyword",children:"DESC"}),`
`,e.jsx("span",{className:"keyword",children:"LIMIT"})," 10"," ",e.jsx("span",{className:"keyword",children:"OFFSET"})," 10;"]})}),e.jsx(v,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"LIMIT"}),": 조회할 결과의 개수를 제한합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"OFFSET"}),": 조회를 시작할 위치(행 번호)를 지정합니다. 예:"," ",e.jsx("code",{children:"LIMIT 10 OFFSET 10"})," → 11번째 행부터 10개 조회"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"활용 예시"}),": 페이지네이션, 무한 스크롤, 최근 N개 데이터만 보기 등"]})]})})]},"11"),ks=()=>e.jsxs("section",{children:[e.jsx(g,{children:"ORDER BY 정렬"}),e.jsx(b,{children:e.jsxs("code",{children:[e.jsx("span",{className:"keyword",children:"SELECT"})," *"," ",e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"ORDER BY"})," age, name"," ",e.jsx("span",{className:"keyword",children:"DESC"}),";"]})}),e.jsx(v,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"ORDER BY"}),": 결과를 정렬"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"ASC"}),": 오름차순 (기본값)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"DESC"}),": 내림차순"]}),e.jsx("li",{children:"여러 컬럼을 동시에 정렬할 수 있으며, 먼저 정렬할 컬럼을 앞에 작성합니다."})]})})]},"6"),Ns=()=>e.jsxs("section",{"data-background-gradient":"linear-gradient(to bottom, #17b2c3, #283b95)",children:[e.jsx(U,{children:"감사합니다!"}),e.jsxs(O,{children:["사용도구: React, Reveal.js, styled-components ",e.jsx("br",{}),"참고: ChatGPT"]})]},"12"),vs=()=>e.jsxs("section",{children:[e.jsx(g,{children:"전체 데이터 조회"}),e.jsx(b,{children:e.jsxs("code",{children:[e.jsx("span",{className:"keyword",children:"SELECT"})," *"," ",e.jsx("span",{className:"keyword",children:"FROM"})," users;"]})}),e.jsxs(js,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"id"}),e.jsx("th",{children:"name"}),e.jsx("th",{children:"email"}),e.jsx("th",{children:"age"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"1"}),e.jsx("td",{children:"김철수"}),e.jsx("td",{children:"kim@example.com"}),e.jsx("td",{children:"25"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"2"}),e.jsx("td",{children:"이영희"}),e.jsx("td",{children:"lee@example.com"}),e.jsx("td",{children:"30"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"3"}),e.jsx("td",{children:"박민수"}),e.jsx("td",{children:"park@example.com"}),e.jsx("td",{children:"28"})]})]})]})]},"2"),Ss=()=>e.jsxs("section",{children:[e.jsx(g,{children:"SELECT 기본 문법"}),e.jsx(b,{children:e.jsxs("code",{children:[e.jsx("span",{className:"keyword",children:"SELECT"})," column1, column2, ...",`
`,e.jsx("span",{className:"keyword",children:"FROM"})," table_name;"]})}),e.jsx(v,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"SELECT"}),": CRUD 중 'Read'에 해당","	",e.jsx("span",{style:{color:"#dcdcaa",fontSize:"0.7em"},children:"-읽기, 조회, 검색-"}),e.jsxs(O,{children:["* CRUD: ",e.jsx("em",{children:"Create, Read, Update, Delete"})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"FROM"}),": 데이터를 가져올 테이블 지정"]}),e.jsxs("li",{children:["모든 컬럼을 조회하려면 ",e.jsx("code",{style:{color:"#dcdcaa"},children:"*"})," ","사용"]})]})})]},"1"),$s=()=>e.jsxs("section",{"data-background-gradient":"linear-gradient(to bottom, #283b95, #17b2c3)",children:[e.jsxs(U,{children:["데이터베이스 ",e.jsx("br",{}),"SELECT"]}),e.jsx(O,{children:"MySQL 조회의 모든 것"})]},"0"),Es=()=>e.jsxs("section",{children:[e.jsx(g,{children:"WHERE 절 활용 - 1"}),e.jsx(b,{children:e.jsxs("code",{children:[e.jsx("span",{className:"comment",children:"-- AND 조건 (age가 25초과하고 name 두번째에 '기'가 포함되는 users 테이블의 모든 데이터 조회)"}),`
`,e.jsx("span",{className:"keyword",children:"SELECT"})," *"," ",e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"WHERE"})," age > 25"," ",e.jsx("span",{className:"keyword",children:"AND"})," name"," ",e.jsx("span",{className:"keyword",children:"LIKE"})," ",e.jsx("span",{className:"string",children:"'_기%'"}),";",`

`,e.jsx("span",{className:"comment",children:"-- OR 조건 (age가 25미만이거나 30초과인 users 테이블의 name, gender 데이터 조회)"}),`
`,e.jsx("span",{className:"keyword",children:"SELECT"})," name, gender"," ",e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"WHERE"})," age < 25"," ",e.jsx("span",{className:"keyword",children:"OR"})," age > 30;"]})})]},"4"),zs=()=>e.jsxs("section",{children:[e.jsx(g,{children:"WHERE 절 활용 - 2"}),e.jsx(b,{children:e.jsxs("code",{children:[e.jsx("span",{className:"comment",children:"-- IN 조건 (age가 25, 30, 35인 users 테이블의 모든 데이터 조회)"}),`
`,e.jsx("span",{className:"keyword",children:"SELECT"})," *"," ",e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"WHERE"})," age"," ",e.jsx("span",{className:"keyword",children:"IN"})," (25, 30, 35);",`

`,e.jsx("span",{className:"comment",children:"-- BETWEEN 조건 (age가 25이상 30이하인 users 테이블의 모든 데이터 조회)"}),`
`,e.jsx("span",{className:"keyword",children:"SELECT"})," *"," ",e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"WHERE"})," age"," ",e.jsx("span",{className:"keyword",children:"BETWEEN"})," 25"," ",e.jsx("span",{className:"keyword",children:"AND"})," 30;"]})})]},"5"),Cs=()=>e.jsxs("section",{children:[e.jsx(g,{children:"WHERE 조건절"}),e.jsx(b,{children:e.jsxs("code",{children:[e.jsx("span",{className:"keyword",children:"SELECT"})," *"," ",e.jsx("span",{className:"keyword",children:"FROM"})," users",`
`,e.jsx("span",{className:"keyword",children:"WHERE"})," age > 25;"]})}),e.jsx(v,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"WHERE"}),": 특정 조건을 필터링"]}),e.jsx("li",{children:"비교 연산자: =, !=, >, <, >=, <="}),e.jsx("li",{children:"논리 연산자: AND, OR, NOT"}),e.jsx("li",{children:"패턴 매칭: LIKE, ILIKE(대소문자 구분 X)"}),e.jsx("li",{children:"NULL 체크: IS NULL, IS NOT NULL"})]})})]},"3"),Ts=()=>{const s=d.useRef(null),r=d.useRef(null);return d.useEffect(()=>{if(!r.current)return r.current=new H(s.current,{width:1500,height:900,transition:"slide",hash:!0,controls:!0,progress:!0,slideNumber:"c/t",embedded:!0,mouseWheel:!0}),r.current.initialize().then(()=>{console.log("Reveal.js initialized successfully")}),()=>{try{r.current&&(r.current.destroy(),r.current=null)}catch{console.warn("Reveal.js destroy call failed.")}}},[]),e.jsx("div",{className:"reveal",ref:s,style:{height:"calc(100vh - 60px)"},children:e.jsxs("div",{className:"slides",children:[e.jsx($s,{}),e.jsx(Ss,{}),e.jsx(vs,{}),e.jsx(Cs,{}),e.jsx(Es,{}),e.jsx(zs,{}),e.jsx(ks,{}),e.jsx(us,{}),e.jsx(fs,{}),e.jsx(ws,{}),e.jsx(bs,{}),e.jsx(ys,{}),e.jsx(Ns,{})]})})},_=n.h1`
	font-size: 3em !important;
	margin-bottom: 20px !important;
	text-shadow: 0 14px 30px rgba(4, 11, 20, 0.45) !important;
	color: #f9fafb !important;

	@media (max-width: 768px) {
		font-size: 2em;
	}
`,j=n.h2`
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
`,N=n.div`
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
`,J=n.table`
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
`,q=n.div`
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
`,K=n.p`
	font-size: 0.88em;
	opacity: 0.85;
	color: #a7f3d0;
`;n.div`
	display: flex;
	gap: 18px;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
`;const Os=()=>e.jsxs("section",{children:[e.jsx(j,{children:"집계 (Aggregation Pipeline)"}),e.jsx(k,{children:e.jsxs("code",{children:[e.jsx("span",{className:"comment",children:"// 나라별 평균 나이가 30세 이상인 국가 조회"}),`
`,e.jsx("span",{className:"comment",children:"// SQL: SELECT country, AVG(age) FROM users GROUP BY country HAVING AVG(age) >= 30"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"aggregate"}),"([",`
`,"  ","{ ",e.jsx("span",{className:"keyword",children:"$group"}),": ","{",`
`,"    ",e.jsx("span",{className:"operator",children:"_id"}),":"," ",e.jsx("span",{className:"string",children:'"$country"'}),",",`
`,"    ",e.jsx("span",{className:"operator",children:"avgAge"}),": ","{ ",e.jsx("span",{className:"keyword",children:"$avg"}),":"," ",e.jsx("span",{className:"string",children:'"$age"'})," ","}",`
`,"  ","}","  ",",",`
`,"  ","{ ",e.jsx("span",{className:"keyword",children:"$match"}),": ","{ ",e.jsx("span",{className:"operator",children:"avgAge"}),": ","{ ",e.jsx("span",{className:"keyword",children:"$gte"}),": 30 ","}"," ","}"," ","}",",",`
`,"  ","{ ",e.jsx("span",{className:"keyword",children:"$sort"}),": ","{ ",e.jsx("span",{className:"operator",children:"avgAge"}),": -1 ","}"," ","}",`
`,"])"]})}),e.jsx(N,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Aggregation Pipeline"}),": 여러 단계(Stage)를 거쳐 데이터를 변환·집계합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"$match"}),": 조건으로 도큐먼트 필터링 (SQL의 WHERE/HAVING)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"$group"}),": 지정된 필드를 기준으로 그룹화 (SQL의 GROUP BY)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"$sort"}),": 결과 정렬 (SQL의 ORDER BY)"," ",e.jsx("code",{style:{color:"#67e8f9"},children:"1"})," = 오름차순,"," ",e.jsx("code",{style:{color:"#67e8f9"},children:"-1"})," = 내림차순"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"$project"}),": 출력할 필드 선택 (SQL의 SELECT)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"$limit"})," / ",e.jsx("strong",{children:"$skip"}),": 결과 수 제한 및 건너뛰기 (SQL의 LIMIT/OFFSET)"]})]})})]}),Is=()=>e.jsxs("section",{children:[e.jsx(j,{children:"삭제 (Delete)"}),e.jsx(k,{children:e.jsxs("code",{children:[e.jsx("span",{className:"comment",children:"// 조건에 맞는 첫 번째 도큐먼트 삭제"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"deleteOne"}),"(","({",`
`,"  ",e.jsx("span",{className:"operator",children:"name"}),":"," ",e.jsx("span",{className:"string",children:'"박민수"'}),`
`,"})",`

`,e.jsx("span",{className:"comment",children:"// 조건에 맞는 모든 도큐먼트 삭제"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"deleteMany"}),"(","({",`
`,"  ",e.jsx("span",{className:"operator",children:"age"}),": ","{ ",e.jsx("span",{className:"keyword",children:"$lt"}),": 20 ","}",`
`,"})",`

`,e.jsx("span",{className:"comment",children:"// 컬렉션의 모든 도큐먼트 삭제"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"deleteMany"}),"(","{}",")"]})}),e.jsx(N,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"deleteOne()"}),": 조건에 맞는 도큐먼트 중 첫 번째만 삭제합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"deleteMany()"}),": 조건에 맞는 모든 도큐먼트를 삭제합니다."]}),e.jsxs("li",{children:["빈 쿼리 ",e.jsx("code",{style:{color:"#fde68a"},children:"{}"})," 를 사용하면 컬렉션의 모든 데이터를 삭제하므로 주의가 필요합니다."]})]})})]}),Ls=()=>e.jsxs("section",{children:[e.jsx(j,{children:"조회 (Find)"}),e.jsx(k,{children:e.jsxs("code",{children:[e.jsx("span",{className:"comment",children:"// 전체 조회 (SQL: SELECT * FROM users)"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"find"}),"(","{}",")",`

`,e.jsx("span",{className:"comment",children:"// 조건 조회 (age가 25 초과인 사용자)"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"find"}),"(","({ ",e.jsx("span",{className:"operator",children:"age"}),": ","{ ",e.jsx("span",{className:"keyword",children:"$gt"}),": 25 ","}"," })",`

`,e.jsx("span",{className:"comment",children:"// 단일 도큐먼트 조회 (첫 번째 결과만)"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"findOne"}),"(","({ ",e.jsx("span",{className:"operator",children:"name"}),":"," ",e.jsx("span",{className:"string",children:'"김철수"'})," })",`

`,e.jsx("span",{className:"comment",children:"// 특정 필드만 조회 (SQL: SELECT name, age FROM users)"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"find"}),"(",e.jsx("span",{className:"string",children:"{}"}),", ","{ ",e.jsx("span",{className:"operator",children:"name"}),": 1,"," ",e.jsx("span",{className:"operator",children:"age"}),": 1,"," ",e.jsx("span",{className:"operator",children:"_id"}),": 0 ","}",")"]})}),e.jsx(N,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"find()"}),": 조건에 맞는 모든 도큐먼트를 조회합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"findOne()"}),": 조건에 맞는 첫 번째 도큐먼트만 반환합니다."]}),e.jsxs("li",{children:["두 번째 인자(Projection)로 조회할 필드를 지정합니다."," ",e.jsx("code",{style:{color:"#fde68a"},children:"1"})," = 포함,"," ",e.jsx("code",{style:{color:"#fde68a"},children:"0"})," = 제외"]})]})})]}),Rs=()=>e.jsxs("section",{children:[e.jsx(j,{children:"인덱스 (Index)"}),e.jsx(q,{children:e.jsx("p",{children:"💡 인덱스 없이 Full Collection Scan → 인덱스로 빠른 탐색!"})}),e.jsx(k,{children:e.jsxs("code",{children:[e.jsx("span",{className:"comment",children:"// 단일 필드 인덱스 생성"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"createIndex"}),"(","({ ",e.jsx("span",{className:"operator",children:"email"}),": 1 ","})",")",`

`,e.jsx("span",{className:"comment",children:"// 복합 인덱스 (email 오름차순, age 내림차순)"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"createIndex"}),"(","({ ",e.jsx("span",{className:"operator",children:"email"}),": 1,"," ",e.jsx("span",{className:"operator",children:"age"}),": -1 ","})",")",`

`,e.jsx("span",{className:"comment",children:"// 유니크 인덱스 (중복 방지)"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"createIndex"}),"(",e.jsx("br",{}),"  ","({ ",e.jsx("span",{className:"operator",children:"email"}),": 1 ","}","),",e.jsx("br",{}),"  ","{ ",e.jsx("span",{className:"operator",children:"unique"}),":"," ",e.jsx("span",{className:"keyword",children:"true"})," ","}",e.jsx("br",{}),")",`

`,e.jsx("span",{className:"comment",children:"// 인덱스 목록 조회"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"getIndexes"}),"()"]})}),e.jsx(N,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"1"})," = 오름차순 인덱스, ",e.jsx("strong",{children:"-1"})," = 내림차순 인덱스"]}),e.jsx("li",{children:"자주 조회하는 필드에 인덱스를 생성하면 쿼리 성능이 크게 향상됩니다."}),e.jsx("li",{children:"인덱스가 많으면 쓰기 성능이 저하될 수 있으므로 필요한 것만 생성합니다."})]})})]}),Ps=()=>e.jsxs("section",{children:[e.jsx(j,{children:"삽입 (Insert)"}),e.jsx(k,{children:e.jsxs("code",{children:[e.jsx("span",{className:"comment",children:"// 단일 도큐먼트 삽입"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"insertOne"}),"(","({",`
`,"  ",e.jsx("span",{className:"operator",children:"name"}),":"," ",e.jsx("span",{className:"string",children:'"이영희"'}),",",`
`,"  ",e.jsx("span",{className:"operator",children:"age"}),": 30,",`
`,"  ",e.jsx("span",{className:"operator",children:"email"}),":"," ",e.jsx("span",{className:"string",children:'"lee@example.com"'}),`
`,"})",`

`,e.jsx("span",{className:"comment",children:"// 여러 도큐먼트 삽입"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"insertMany"}),"([",`
`,"  ","{"," ",e.jsx("span",{className:"operator",children:"name"}),":"," ",e.jsx("span",{className:"string",children:'"박민수"'}),","," ",e.jsx("span",{className:"operator",children:"age"}),": 28 ","}",",",`
`,"  ","{"," ",e.jsx("span",{className:"operator",children:"name"}),":"," ",e.jsx("span",{className:"string",children:'"최지연"'}),","," ",e.jsx("span",{className:"operator",children:"age"}),": 22 ","}",`
`,"])"]})}),e.jsx(N,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"insertOne()"}),": 도큐먼트 1개를 컬렉션에 삽입합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"insertMany()"}),": 여러 도큐먼트를 배열 형태로 한 번에 삽입합니다."]}),e.jsxs("li",{children:["삽입 시 ",e.jsx("code",{style:{color:"#fde68a"},children:"_id"})," 필드를 지정하지 않으면 MongoDB가 ",e.jsx("strong",{children:"ObjectId"}),"를 자동 생성합니다."]})]})})]}),Ds=()=>e.jsxs("section",{children:[e.jsx(j,{children:"MongoDB 기본 구조"}),e.jsxs(J,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"SQL 개념"}),e.jsx("th",{children:"MongoDB 개념"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Database"}),e.jsx("td",{children:"Database"}),e.jsx("td",{children:"최상위 저장 공간"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Table"}),e.jsx("td",{children:"Collection"}),e.jsx("td",{children:"도큐먼트의 집합"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Row (행)"}),e.jsx("td",{children:"Document"}),e.jsx("td",{children:"JSON 형태의 데이터 단위"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Column (열)"}),e.jsx("td",{children:"Field"}),e.jsx("td",{children:"도큐먼트 내 키-값 쌍"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Primary Key"}),e.jsx("td",{children:"_id"}),e.jsx("td",{children:"자동 생성 고유 식별자"})]})]})]}),e.jsx(k,{children:e.jsxs("code",{children:[e.jsx("span",{className:"comment",children:"// Document 예시 (JSON 형태)"}),`
`,"{",`
`,"  ",e.jsx("span",{className:"operator",children:"_id"}),":"," ",e.jsx("span",{className:"function",children:"ObjectId"}),"(",e.jsx("span",{className:"string",children:'"507f1f77bcf86cd799439011"'}),"),",`
`,"  ",e.jsx("span",{className:"operator",children:"name"}),":"," ",e.jsx("span",{className:"string",children:'"김철수"'}),",",`
`,"  ",e.jsx("span",{className:"operator",children:"age"}),": 25,",`
`,"  ",e.jsx("span",{className:"operator",children:"email"}),":"," ",e.jsx("span",{className:"string",children:'"kim@example.com"'}),",",`
`,"  ",e.jsx("span",{className:"operator",children:"hobbies"}),": [",e.jsx("span",{className:"string",children:'"축구"'}),","," ",e.jsx("span",{className:"string",children:'"독서"'}),"]",`
`,"}"]})})]}),Ms=()=>e.jsxs("section",{"data-background-gradient":"linear-gradient(to bottom, #065f46, #064e3b)",children:[e.jsx(_,{children:"감사합니다!"}),e.jsxs(K,{children:["사용도구: React, Reveal.js, styled-components ",e.jsx("br",{}),"참고: Copilot, MongoDB 공식 문서"]})]}),Bs=()=>e.jsxs(e.Fragment,{children:[e.jsxs("section",{children:[e.jsx(j,{children:"쿼리 연산자 — 비교 연산자"}),e.jsx(k,{children:e.jsxs("code",{children:[e.jsx("span",{className:"comment",children:"// $eq: 같음, $ne: 다름"}),`
`,e.jsx("span",{className:"comment",children:"// $gt: 초과, $gte: 이상"}),`
`,e.jsx("span",{className:"comment",children:"// $lt: 미만, $lte: 이하"}),`

`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"find"}),"(","({",`
`,e.jsx("span",{className:"operator",children:"age"}),": ","{ ",e.jsx("span",{className:"keyword",children:"$gte"}),": 25,"," ",e.jsx("span",{className:"keyword",children:"$lte"}),": 35 ","}",`
`,"})",`

`,e.jsx("span",{className:"comment",children:"// $in: 배열 내 값과 일치"}),`
`,e.jsx("span",{className:"function",children:"db"}),".users.",e.jsx("span",{className:"keyword",children:"find"}),"(","({",`
`,e.jsx("span",{className:"operator",children:"age"}),": ","{ ",e.jsx("span",{className:"keyword",children:"$in"}),": [25, 30, 35] ","}","})"]})}),e.jsx(N,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:["MongoDB의 쿼리 연산자는 ",e.jsx("code",{style:{color:"#67e8f9"},children:"$"}),"로 시작합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"$regex"}),"를 이용하면 SQL의 ",e.jsx("code",{children:"LIKE"}),"와 같은 패턴 매칭도 가능합니다."]})]})})]}),e.jsxs("section",{children:[e.jsx(j,{children:"쿼리 연산자 — 논리 연산자"}),e.jsx(k,{children:e.jsxs("code",{children:[e.jsx("span",{className:"comment",children:"// $and: 모든 조건 만족"}),`
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
`,"]","})"]})}),e.jsx(N,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"$and"}),"는 모든 조건을 동시에 만족하는 문서를 반환합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"$or"}),"는 조건 중 하나라도 만족하면 반환합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"$nor"}),"는 모든 조건을 만족하지 않는 문서를 반환합니다."]})]})})]})]}),Fs=()=>e.jsxs("section",{children:[e.jsx(j,{children:"SQL vs NoSQL 비교"}),e.jsxs(J,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"구분"}),e.jsx("th",{children:"SQL (관계형)"}),e.jsx("th",{children:"NoSQL (비관계형)"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"데이터 모델"}),e.jsx("td",{children:"테이블 (행 & 열)"}),e.jsx("td",{children:"도큐먼트, Key-Value 등"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"스키마"}),e.jsx("td",{children:"고정 (정해진 구조)"}),e.jsx("td",{children:"유연 (동적 구조)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"확장 방식"}),e.jsx("td",{children:"수직 확장 (Scale-up)"}),e.jsx("td",{children:"수평 확장 (Scale-out)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"쿼리 언어"}),e.jsx("td",{children:"SQL"}),e.jsx("td",{children:"자체 API / JSON 쿼리"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"트랜잭션"}),e.jsx("td",{children:"ACID 완전 지원"}),e.jsx("td",{children:"제한적 지원 (BASE)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"대표 DB"}),e.jsx("td",{children:"MySQL, PostgreSQL"}),e.jsx("td",{children:"MongoDB, Redis"})]})]})]})]}),As=()=>e.jsxs("section",{"data-background-gradient":"linear-gradient(to bottom, #064e3b, #065f46)",children:[e.jsxs(_,{children:["MongoDB ",e.jsx("br",{}),"& NoSQL"]}),e.jsx(K,{children:"데이터베이스의 새로운 패러다임"})]}),Gs=()=>e.jsxs("section",{children:[e.jsx(j,{children:"수정 (Update)"}),e.jsx(k,{children:e.jsxs("code",{children:[e.jsx("span",{className:"comment",children:"// updateOne: 단일 도큐먼트 수정 ($set)"}),`
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
`,")"]})}),e.jsx(N,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"updateOne()"})," / ",e.jsx("strong",{children:"updateMany()"}),": 1개 또는 여러 도큐먼트를 수정합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"$set"}),": 지정한 필드 값을 변경합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"$inc"}),": 숫자 필드를 증가/감소시킵니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"$unset"}),": 필드를 도큐먼트에서 제거합니다."]})]})})]}),Vs=()=>e.jsxs("section",{children:[e.jsx(j,{children:"NoSQL이란?"}),e.jsx(q,{style:{textAlign:"left"},children:e.jsxs("p",{children:["💡 ",e.jsx("strong",{children:"Not Only SQL"}),e.jsx("br",{}),"관계형 데이터베이스의 한계를 극복한 비관계형 데이터베이스"]})}),e.jsx(N,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"유연한 스키마"}),": 고정된 테이블 구조 없이 자유로운 형태로 데이터를 저장합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"수평 확장(Scale-out)"}),": 서버를 추가하여 트래픽을 분산시키기 용이합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"고성능"}),": 대량의 비정형 데이터 처리에 최적화되어 있습니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"종류"}),": Document(MongoDB), Key-Value(Redis), Column(Cassandra), Graph(Neo4j) 등"]})]})})]}),Ys=()=>{const s=d.useRef(null),r=d.useRef(null);return d.useEffect(()=>{if(!r.current)return r.current=new H(s.current,{width:1500,height:900,transition:"slide",hash:!0,controls:!0,progress:!0,slideNumber:"c/t",embedded:!0,mouseWheel:!0}),r.current.initialize().then(()=>{console.log("Reveal.js (NoSQL) initialized successfully")}),()=>{try{r.current&&(r.current.destroy(),r.current=null)}catch{console.warn("Reveal.js destroy call failed.")}}},[]),e.jsx("div",{className:"reveal",ref:s,style:{height:"calc(100vh - 60px)"},children:e.jsxs("div",{className:"slides",children:[e.jsx(As,{}),e.jsx(Vs,{}),e.jsx(Fs,{}),e.jsx(Ds,{}),e.jsx(Ps,{}),e.jsx(Ls,{}),e.jsx(Bs,{}),e.jsx(Gs,{}),e.jsx(Is,{}),e.jsx(Os,{}),e.jsx(Rs,{}),e.jsx(Ms,{})]})})},Ws="/hanbat-portfolio/assets/caption_web-DtLYLhP7.png",Hs="/hanbat-portfolio/assets/electron_vue-w5pSGQaz.png",Qs="/hanbat-portfolio/assets/electron_vue2-11f4gaNP.png",Us="/hanbat-portfolio/assets/first_jsp-BoVOyK0y.png",_s="/hanbat-portfolio/assets/share_mobile-C_8O5Fyq.png",Js="/hanbat-portfolio/assets/share_pc-y0kkMMto.png",qs="/hanbat-portfolio/assets/silkroad_admin-BeOBqPmO.png",Ks="/hanbat-portfolio/assets/tkita_dual_dark-BX-ujFL_.jpg",Xs="/hanbat-portfolio/assets/tkita_main-C125CPy3.jpg",Zs="/hanbat-portfolio/assets/tkita_single-CREEgKuG.jpg",en="/hanbat-portfolio/assets/vue_web-DqimfvdE.png",sn="/hanbat-portfolio/assets/vue_web2-DNMt9iiU.png",nn=W`
  .slick-dots {
    bottom: -32px;
    li button::before {
      color: #4a5568;
      font-size: 8px;
      opacity: 1;
    }
    li.slick-active button::before {
      color: #76abae;
      opacity: 1;
    }
  }

  .slick-prev,
  .slick-next {
    z-index: 10;
    width: 36px;
    height: 36px;

    &::before {
      font-size: 28px;
      color: #76abae;
      opacity: 0.7;
      transition: opacity 0.2s;
    }
    &:hover::before {
      opacity: 1;
    }
  }

  .slick-prev { left: -44px; }
  .slick-next { right: -44px; }

  /* 모바일: 화살표 안쪽으로 */
  @media (max-width: 600px) {
    .slick-prev { left: 4px; }
    .slick-next { right: 4px; }
		.slick-prev, .slick-next, .slick-next::before, .slick-prev::before {
			display: none;
		}
		.slick-slide img {
			object-fit: cover;
			object-position: center;
		}
  }
`,rn=w`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`,an=n(f.section)`
	padding: 72px 0 80px;
	background: #1a1e25;
	width: 100%;
`,tn=n.div`
	width: 100%;
	max-width: 900px;
	margin: 0 auto;
	padding: 0 52px; /* 화살표 공간 */

	@media (max-width: 600px) {
		padding: 0 16px; /* 모바일: 화살표 오버레이이므로 여백 최소화 */
	}
`,on=n.div`
	text-align: center;
	margin-bottom: 40px;
`,ln=n.h2`
	font-size: 32px;
	font-weight: 700;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	background: linear-gradient(90deg, #76abae, #a8d8da, #76abae);
	background-size: 200% auto;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: ${rn} 3s linear infinite;
	margin-bottom: 8px;
`,cn=n.p`
	font-size: 13px;
	color: #6b7280;
	letter-spacing: 0.05em;
`,P=n.div`
	outline: none;
	padding: 0 6px;
`,dn=n.div`
	position: relative;
	width: 100%;
	border-radius: 14px;
	overflow: hidden;
	background: #252b34;
	border: 1px solid #2e3640;
	aspect-ratio: 16 / 9;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		object-position: center;
		display: block;
		transition: transform 0.4s ease;
	}
	.slick-slide img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		object-position: center;
		display: block;
		transition: transform 0.4s ease;
	}

	&:hover img {
		transform: scale(1.03);
	}

	/* 하단 그라디언트 오버레이 */
	&::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to top,
			rgba(26, 30, 37, 0.55) 0%,
			transparent 50%
		);
		pointer-events: none;
	}
`,xn=n.div`
	aspect-ratio: 16 / 9;
	background: #252b34;
	border: 1px solid #2e3640;
	border-radius: 14px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 12px;
`,pn=n.h3`
	font-size: 22px;
	font-weight: 700;
	color: #76abae;
	letter-spacing: 0.1em;
`,hn=n.p`
	font-size: 13px;
	color: #4a5568;
`,mn=n.div`
	text-align: center;
	margin-top: 40px;
	font-size: 12px;
	color: #4a5568;
	letter-spacing: 0.08em;
`,D=[{src:Us,label:"First JSP Project"},{src:Hs,label:"Electron + Vue"},{src:Qs,label:"Electron + Vue 2"},{src:en,label:"Vue Web"},{src:sn,label:"Vue Web 2"},{src:Js,label:"Share PC"},{src:qs,label:"Silkroad Admin"},{src:Ws,label:"Caption Web"},{src:_s,label:"Share Mobile"},{src:Xs,label:"Tkita Main"},{src:Zs,label:"Tkita Single"},{src:Ks,label:"Tkita Dual Dark"}];function jn(){const s={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:4e3,draggable:!0,swipe:!0,arrows:!0,fade:!1,pauseOnFocus:!0,pauseOnHover:!0,initialSlide:0};return e.jsxs(e.Fragment,{children:[e.jsx(nn,{}),e.jsx(an,{initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},viewport:{once:!1},transition:{ease:"easeOut",duration:.7},children:e.jsxs(tn,{children:[e.jsxs(on,{children:[e.jsx(ln,{children:"Project"}),e.jsxs(cn,{children:["작업물 모음 · ",D.length," projects"]})]}),e.jsxs(de,{...s,children:[D.map((r,o)=>e.jsx(P,{children:e.jsx(dn,{children:e.jsx("img",{src:r.src,alt:r.label,loading:"lazy"})})},o)),e.jsx(P,{children:e.jsxs(xn,{children:[e.jsx(pn,{children:"🎉 끝!"}),e.jsx(hn,{children:"더 많은 프로젝트가 진행 중입니다"})]})})]}),e.jsx(mn,{children:"swipe or drag to navigate"})]})})]})}const M="puzzle",gn=n.div`
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
`,bn=({id:s,imageUrl:r,posX:o,posY:a,currentPos:i,movePiece:c,size:x})=>{const[{isDragging:E},l]=xe({type:M,item:{id:s},collect:S=>({isDragging:S.isDragging()})}),[,z]=pe({accept:M,drop:S=>{c(S.id,s)}});return e.jsx(gn,{ref:S=>l(z(S)),$imageUrl:r,$posX:o,$posY:a,$isDragging:E,$size:x})},un=w`
	0%   { background-position: -200% center; }
	100% { background-position:  200% center; }
`,fn=n.div`
	width: 100%;
	padding: 60px 24px;
`,wn=n.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`,yn=n.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 24px;

	padding: 28px;
	border-radius: 28px;

	@media (min-width: 950px) {
		flex-direction: row;
		align-items: flex-start;
	}
	.dnd {
		max-width: 400px;
		max-height: 400px;
		width: 100%;
		height: 100%;
	}
`,kn=n.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h2 {
		font-size: 32px;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		background: linear-gradient(90deg, #76abae, #a8d8da, #76abae);
		background-size: 200% auto;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: ${un} 3s linear infinite;
		margin-bottom: 8px;
	}
`,B=n.div`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	justify-content: center;
`,Nn=n.div`
	width: 400px;
	height: 400px;

	display: grid;
	grid-template-columns: ${s=>`repeat(${s.$size}, 1fr)`};
	grid-template-rows: ${s=>`repeat(${s.$size}, 1fr)`};

	gap: 2px;

	padding: 8px;

	border-radius: 22px;

	background: linear-gradient(135deg, #14b8a6, #3b82f6);

	box-shadow:
		0 10px 30px rgba(59, 130, 246, 0.18),
		0 4px 12px rgba(16, 185, 129, 0.12);

	touch-action: none;

	overflow: hidden;

	transition:
		transform 0.3s ease,
		box-shadow 0.3s ease;

	&:hover {
		transform: translateY(-4px);

		box-shadow:
			0 20px 40px rgba(59, 130, 246, 0.24),
			0 10px 20px rgba(16, 185, 129, 0.18);
	}

	@media (max-width: 500px) {
		width: 320px;
		height: 320px;
	}
`,vn=n.img`
	width: 400px;
	height: 400px;

	object-fit: cover;

	border-radius: 22px;

	border: 4px solid rgba(255, 255, 255, 0.8);

	box-shadow:
		0 12px 30px rgba(15, 23, 42, 0.12),
		0 4px 12px rgba(59, 130, 246, 0.08);

	transition:
		transform 0.35s ease,
		box-shadow 0.35s ease;

	&:hover {
		transform: scale(1.02);

		box-shadow:
			0 20px 40px rgba(15, 23, 42, 0.16),
			0 8px 20px rgba(16, 185, 129, 0.12);
	}

	@media (max-width: 500px) {
		width: 320px;
		height: 320px;
	}
`,F=n.button`
	padding: 12px 22px;

	font-size: 15px;
	font-weight: 700;

	color: #0f172a;

	border: none;
	border-radius: 14px;

	background: rgba(255, 255, 255, 0.8);

	backdrop-filter: blur(8px);

	box-shadow:
		0 4px 10px rgba(15, 23, 42, 0.06),
		0 2px 4px rgba(15, 23, 42, 0.04);

	cursor: pointer;

	transition:
		transform 0.2s ease,
		box-shadow 0.25s ease,
		background 0.25s ease,
		color 0.25s ease;

	&:hover {
		transform: translateY(-2px);

		background: linear-gradient(90deg, #10b981, #14b8a6, #3b82f6);

		color: white;

		box-shadow:
			0 10px 20px rgba(16, 185, 129, 0.18),
			0 4px 10px rgba(59, 130, 246, 0.14);
	}

	&:active {
		transform: scale(0.96);
	}

	&.active {
		background: linear-gradient(90deg, #10b981, #14b8a6, #3b82f6);

		color: white;

		box-shadow:
			0 10px 20px rgba(16, 185, 129, 0.2),
			0 4px 10px rgba(59, 130, 246, 0.16);
	}
`,Sn=["JPEG","PNG","JPG"],$n={backends:[{backend:me,preview:!0},{backend:je,options:{enableMouseEvents:!0},preview:!0,transition:ue}]},A=[{size:4,label:"하 (4×4)"},{size:8,label:"중 (8x8)"},{size:12,label:"상 (12x12)"}];function En(){const[s,r]=d.useState(null),[o,a]=d.useState(""),[i,c]=d.useState([]),[x,E]=d.useState(A[0]),l=t=>{r(t);const p=URL.createObjectURL(t);a(p)},z=t=>{for(let p=t.length-1;p>0;p--){const m=Math.floor(Math.random()*(p+1));[t[p],t[m]]=[t[m],t[p]]}return t},S=(t,p)=>{const m=i.findIndex(u=>u.id===t),$=i.findIndex(u=>u.id===p),h=[...i];[h[m],h[$]]=[h[$],h[m]],c(h)},X=()=>{if(s){const t=x.size,p=[],m=100/(t-1);for(let h=0;h<t;h++)for(let u=0;u<t;u++)p.push({id:`${h*t+u}`,originalPos:{row:h,col:u},currentPos:{row:h,col:u},posX:u*m,posY:h*m});const $=z(p);c($)}};d.useEffect(()=>{X()},[s,x]),d.useEffect(()=>{if(i.length>0){const t=x.size;i.every((m,$)=>m.originalPos.row===Math.floor($/t)&&m.originalPos.col===$%t)&&alert("정답입니다! 다른 이미지로 도전해보세요!")}},[i,x]);const Z=()=>{r(null),c([]),a("")},ee=t=>{E(t)};return e.jsx(fn,{children:e.jsxs(wn,{children:[e.jsxs(kn,{children:[!s&&e.jsx("h2",{children:"Puzzle"}),s?e.jsx(B,{children:e.jsx(F,{onClick:Z,children:"초기화"})}):e.jsx(B,{children:A.map(t=>e.jsx(F,{onClick:()=>ee(t),className:x.size===t.size?"active":"",children:t.label},t.size))})]}),e.jsxs(yn,{children:[s?e.jsx(he,{backend:be,options:$n,children:e.jsx(Nn,{$size:x.size,children:i.map(t=>e.jsx(bn,{id:t.id,imageUrl:o,posX:t.posX,posY:t.posY,currentPos:t.currentPos,movePiece:S,size:x.size},t.id))})}):e.jsx(ge,{classes:"dnd",onSizeError:()=>alert("파일 사이즈가 너무 큽니다(2MB)"),handleChange:l,onDrop:l,name:"file",types:Sn,multiple:!1,label:"사진을 업로드하면 퍼즐이 만들어집니다.",required:!0}),s&&e.jsx(vn,{src:o,alt:"Original"})]})]})})}const zn=[[{name:"Html5",value:.9,color:"#E44D26"},{name:"Css3",value:.8,color:"#264DE4"},{name:"TypeScript",value:.8,color:"#3178C6"},{name:"Flutter",value:.7,color:"#02569B"}],[{name:"Vue3",value:.7,color:"#42B883"},{name:"React",value:.9,color:"#61DAFB"},{name:"Python",value:.8,color:"#3776AB"},{name:"Vite",value:.6,color:"#646CFF"}],[{name:"Nginx",value:.5,color:"#009639"},{name:"MySql",value:.6,color:"#4479A1"},{name:"Ubuntu",value:.7,color:"#E95420"},{name:"Electron.js",value:.7,color:"#47848F"}],[{name:"Node.js",value:.8,color:"#339933"},{name:"Bun.js",value:.5,color:"#c8a97e"},{name:"Redis",value:.6,color:"#DC382D"}]],Cn={hidden:{opacity:0,y:60},visible:s=>({opacity:1,y:0,transition:{duration:.5,delay:s*.08,ease:"easeOut"}})},Tn=w`
	0%   { background-position: -200% center; }
	100% { background-position: 200% center; }
`,On=n(f.section)`
	padding: 60px 0 80px;
	background: #1e2228;
	width: 100%;
`,In=n.div`
	width: 100%;
	max-width: 1100px;
	margin: 0 auto;
	padding: 0 20px;
`,Ln=n.div`
	text-align: center;
	margin-bottom: 48px;

	h2 {
		font-size: 32px;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		background: linear-gradient(90deg, #76abae, #a8d8da, #76abae);
		background-size: 200% auto;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: ${Tn} 3s linear infinite;
		margin-bottom: 8px;
	}

	p {
		color: #6b7280;
		font-size: 14px;
		letter-spacing: 0.05em;
	}
`,Rn=n.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 24px;
	margin-bottom: 24px;

	@media (max-width: 900px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 480px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 16px;
	}
`,Pn=n(f.div)`
	background: #252b34;
	border: 1px solid #2e3640;
	border-radius: 16px;
	padding: 24px 16px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
	transition:
		transform 0.2s ease,
		border-color 0.2s ease,
		box-shadow 0.2s ease;

	&:hover {
		transform: translateY(-4px);
		border-color: ${s=>s.$color}55;
		box-shadow: 0 8px 24px ${s=>s.$color}22;
	}
`,Dn=n.h3`
	font-size: 14px;
	font-weight: 600;
	letter-spacing: 0.06em;
	color: ${s=>s.$color};
	text-align: center;
	margin: 0;
`,Mn=n.div`
	width: 110px;
	height: 110px;

	@media (max-width: 480px) {
		width: 90px;
		height: 90px;
	}
`,Bn=n.span`
	font-size: 12px;
	color: #6b7280;
	letter-spacing: 0.04em;
`;function Fn({skill:s,index:r}){return e.jsxs(Pn,{$color:s.color,custom:r,variants:Cn,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:[e.jsx(Dn,{$color:s.color,children:s.name}),e.jsx(Mn,{children:e.jsx(fe,{value:s.value,maxValue:1,text:`${Math.round(s.value*100)}%`,styles:we({pathColor:s.color,textColor:s.color,trailColor:"#2e3640",textSize:"20px"})})}),e.jsx(Bn,{children:`${Math.round(s.value*100)}%`})]})}function An(){return e.jsx(On,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!1},transition:{duration:.6},children:e.jsxs(In,{children:[e.jsxs(Ln,{children:[e.jsx("h2",{children:"Skill"}),e.jsx("p",{children:"Technologies I work with"})]}),zn.map((s,r)=>e.jsx(Rn,{children:s.map((o,a)=>e.jsx(Fn,{skill:o,index:r*4+a},o.name))},r))]})})}const Gn=w`
	0%   { transform: translateY(0); }
	100% { transform: translateY(-3px); }
`,Vn=n.nav`
	position: sticky;
	z-index: 10;
	width: 100%;
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
`,Yn=n.a`
	color: ${s=>s.$flipped?"#a8d8da":"#76abae"};
	font-weight: ${s=>s.$flipped?"700":"500"};
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

	${s=>s.$flipped&&T`
			background: rgba(118, 171, 174, 0.1);
		`}

	&:hover {
		background: rgba(118, 171, 174, 0.12);
		color: #a8d8da;
		animation: ${Gn} 0.4s ease infinite alternate;
	}

	@media screen and (max-width: 600px) {
		font-size: 11px;
		padding: 5px 6px;
		gap: 4px;
	}
	@media screen and (max-width: 400px) {
		font-size: 9px;
		padding: 3px 4px;
		gap: 2px;
	}
`,Wn=["✏️","🔢","🎮","⭐"];function Hn({story:s}){function r(o){o.preventDefault();const a=o.currentTarget.getAttribute("href");if(!a)return;const i=document.querySelector(a);i&&i.scrollIntoView({behavior:"smooth",block:"center"})}return e.jsx(Vn,{children:e.jsx("ul",{children:s.map((o,a)=>e.jsx("li",{children:e.jsxs(Yn,{href:o.href,$flipped:o.flip,onClick:r,children:[e.jsx("span",{children:Wn[a]}),o.name]})},a))})})}const Qn="/hanbat-portfolio/assets/001-QaaCS8Xj.png",Un="/hanbat-portfolio/assets/002-CoGtfpOr.png",_n="/hanbat-portfolio/assets/003-Bkjd7iTY.png",Jn="/hanbat-portfolio/assets/004-Dd-qRShE.png",qn=n(f.div)`
	width: 100%;
	padding: 20px;
`,G=n.section`
	width: 100%;
	display: flex;
	justify-content: center;
	margin: 20px 0;
`,V=n.div`
	position: relative;
	width: 100%;
	max-width: 1100px;
	min-height: 700px;
	overflow: hidden;

	border-radius: 24px;
	background: #ffffff;
	border: 1px solid rgba(16, 185, 129, 0.12);

	box-shadow:
		0 10px 30px rgba(15, 23, 42, 0.08),
		0 4px 12px rgba(59, 130, 246, 0.06);

	cursor: pointer;

	transition:
		transform 0.35s ease,
		box-shadow 0.35s ease,
		border-color 0.35s ease;

	backdrop-filter: blur(10px);

	&:hover {
		transform: translateY(-6px) scale(1.01);

		border-color: rgba(59, 130, 246, 0.28);

		box-shadow:
			0 24px 50px rgba(15, 23, 42, 0.14),
			0 10px 24px rgba(16, 185, 129, 0.12);
	}

	/* top gradient accent */
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 5px;

		z-index: 2;
	}

	/* content wrapper */
	& > div {
		position: relative;
		height: 100%;

		display: flex;
		align-items: center;
		justify-content: center;

		padding: 24px;

		background: linear-gradient(90deg, #10b981, #14b8a6, #3b82f6);
	}

	/* image */
	& > img {
		width: 100%;
		height: 100%;
		object-fit: cover;

		transition:
			transform 0.5s ease,
			filter 0.35s ease;
	}

	&:hover > img {
		transform: scale(1.03);
		filter: brightness(1.03);
	}

	@media screen and (max-width: 900px) {
		min-height: 450px;
		border-radius: 18px;

		& > div {
			padding: 18px;
		}
	}

	@media screen and (max-width: 500px) {
		min-height: 300px;
		border-radius: 14px;

		& > div {
			padding: 12px;
		}
	}
`;function Kn(){const[s,r]=d.useState([{href:"#name",name:"나의 이름 삼행시",img:Qn,flip:!1},{href:"#number",name:"숫자 아이덴티티",img:Un,flip:!1},{href:"#hobby",name:"취미 생활",img:_n,flip:!1},{href:"#model",name:"나의 롤모델",img:Jn,flip:!1}]),o=a=>{r(s.map(i=>a===i.href?{...i,flip:!i.flip}:{...i}))};return e.jsxs(qn,{initial:{opacity:0,y:100},whileInView:{opacity:1,y:0},viewport:{once:!1},transition:{ease:"easeInOut",duration:2,y:{duration:1}},children:[e.jsx(Hn,{story:s}),s.map((a,i)=>e.jsxs(ye,{isFlipped:a.flip,flipDirection:"horizontal",children:[e.jsx(G,{id:a.href.replace(/^#/,""),onClick:()=>o(a.href),children:e.jsx(V,{children:e.jsx("div",{children:e.jsx("h2",{children:a.name})})})}),e.jsx(G,{id:a.href.replace(/^#/,""),onClick:()=>o(a.href),children:e.jsx(V,{children:e.jsx("img",{src:a.img,alt:a.name})})})]},i))]})}function Xn(){return e.jsxs("div",{children:[e.jsx("h1",{children:"Supabase PPT Placeholder"}),e.jsx("p",{children:"This is where the Supabase presentation will go."})]})}function Zn(){return e.jsx(e.Fragment,{children:e.jsx(Re,{children:e.jsxs(te,{children:[e.jsx(y,{index:!0,path:"/",element:ms()}),e.jsx(y,{path:"/story",element:Kn()}),e.jsx(y,{path:"/skill",element:An()}),e.jsx(y,{path:"/contact",element:Qe()}),e.jsx(y,{path:"/project",element:jn()}),e.jsx(y,{path:"/puzzle",element:En()}),e.jsx(y,{path:"/presentation",element:e.jsx(Ts,{})}),e.jsx(y,{path:"/nosql",element:e.jsx(Ys,{})}),e.jsx(y,{path:"/supa",element:e.jsx(Xn,{})})]})})})}const er={createGlobalStyle:W},sr=er.createGlobalStyle`
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
`;console.log("/hanbat-portfolio");ne.createRoot(document.getElementById("root")).render(e.jsx(ie,{shouldForwardProp:se,children:e.jsxs(re,{basename:"/hanbat-portfolio",children:[e.jsx(sr,{}),e.jsx(Zn,{})]})}));
