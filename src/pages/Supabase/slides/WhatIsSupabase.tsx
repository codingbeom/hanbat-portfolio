import React from 'react';
import {
	ContentBox,
	FeatureCard,
	HighlightBox,
	SectionTitle,
	TwoCol,
} from '../section';

const WhatIsSupabase: React.FC = () => (
	<section>
		<SectionTitle>Supabase란?</SectionTitle>
		<HighlightBox style={{ textAlign: 'left' }}>
			<p>
				💡
				<strong>
					웹/앱에 필요한 서버 기능을 코드 몇 줄로 구현하게 해주는 백엔드 플랫폼
				</strong>
				<br />
				회원가입 · 데이터베이스 · 파일 저장 · 실시간 기능을 직접 서버 없이 바로
				사용
			</p>
		</HighlightBox>
		<TwoCol>
			<FeatureCard>
				<h4>⚠️ 기존 방식</h4>
				<ul>
					<li>서버 직접 구축 · 운영</li>
					<li>회원 DB 직접 설계</li>
					<li>파일 저장 서버 별도 운영</li>
					<li>로그인 기능 직접 구현</li>
				</ul>
			</FeatureCard>
			<FeatureCard>
				<h4>✨ Supabase 방식</h4>
				<ul>
					<li>대시보드 클릭 + 코드 몇 줄</li>
					<li>SQL로 데이터 바로 관리</li>
					<li>파일 업로드 API 즉시 사용</li>
					<li>소셜 로그인 10분 내 구현</li>
				</ul>
			</FeatureCard>
			<FeatureCard>
				<h4>🆓 무료로 시작</h4>
				<ul>
					<li>소규모 프로젝트 완전 무료</li>
					<li>완전 오픈소스 — No Lock-in</li>
					<li>자체 서버에 직접 배포 가능</li>
					<li>2020년 출시, 빠르게 성장 중</li>
				</ul>
			</FeatureCard>
		</TwoCol>
		<ContentBox>
			<ul>
				<li>
					<strong>Firebase와 차이</strong>: Firebase는 구글의 NoSQL 서비스,
					Supabase는 오픈소스 SQL 기반 → 더 강력한 데이터 쿼리 가능
				</li>
				<li>
					<strong>핵심 DB</strong>: PostgreSQL — 세계에서 가장 많이 쓰이는
					오픈소스 관계형 데이터베이스
				</li>
			</ul>
		</ContentBox>
	</section>
);

export default WhatIsSupabase;
