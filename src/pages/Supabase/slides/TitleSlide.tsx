import React from 'react';
import { SmallText, Title } from '../section';

const TitleSlide: React.FC = () => (
	<section data-background-gradient="linear-gradient(135deg, #0d1117 0%, #0a1628 45%, #0d2818 100%)">
		{/* Supabase logo-style accent */}
		<div
			style={{
				display: 'inline-block',
				background: 'linear-gradient(135deg, #3ECF8E, #1EA672)',
				borderRadius: '20px',
				padding: '10px 28px',
				marginBottom: '20px',
				boxShadow: '0 0 40px rgba(62,207,142,0.35)',
			}}
		>
			<span
				style={{
					fontSize: '1.1em',
					fontWeight: 900,
					color: '#0d1117',
					letterSpacing: '2px',
				}}
			>
				SUPABASE
			</span>
		</div>
		<Title>
			오픈소스 DB
			<br />
			<span
				style={{
					fontSize: '0.65em',
					background: 'linear-gradient(90deg, #3ECF8E, #67e8f9)',
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
				}}
			>
				PostgreSQL 기반 백엔드 플랫폼
			</span>
		</Title>
		<SmallText>
			Database · Auth · Realtime · Storage · Edge Functions · Vector
		</SmallText>
	</section>
);

export default TitleSlide;
