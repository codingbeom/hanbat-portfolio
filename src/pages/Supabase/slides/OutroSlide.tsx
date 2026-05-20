import React from 'react';
import { SmallText, Title } from '../section';

const OutroSlide: React.FC = () => (
	<section data-background-gradient="linear-gradient(135deg, #0d2818 0%, #0a1628 50%, #0d1117 100%)">
		<div
			style={{
				display: 'inline-block',
				background: 'linear-gradient(135deg, #3ECF8E, #1EA672)',
				borderRadius: '20px',
				padding: '8px 24px',
				marginBottom: '16px',
				boxShadow: '0 0 30px rgba(62,207,142,0.3)',
			}}
		>
			<span
				style={{
					fontSize: '1em',
					fontWeight: 900,
					color: '#0d1117',
					letterSpacing: '2px',
				}}
			>
				SUPABASE
			</span>
		</div>
		<Title>감사합니다!</Title>
		<SmallText>
			사용 도구: React, Reveal.js, styled-components
			<br />
			참고: Supabase 공식 문서 (supabase.com/docs), GitHub Copilot
		</SmallText>
	</section>
);

export default OutroSlide;
