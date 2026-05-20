import React from 'react';
import { ContentBox, FeatureCard, SectionTitle, TwoCol } from '../section';

const SupabaseArchSlide: React.FC = () => (
	<section>
		<SectionTitle>Supabase 주요 기능 한눈에</SectionTitle>
		<TwoCol style={{ flexWrap: 'wrap', gap: '10px' } as React.CSSProperties}>
			<FeatureCard style={{ minWidth: '200px', flex: '1 1 200px' }}>
				<h4>🐘 DB</h4>
				<ul>
					<li>PostgreSQL 기반</li>
					<li>JSONB, Array, pgvector 등 고급 기능</li>
					<li>자동 API 생성</li>
				</ul>
			</FeatureCard>
			<FeatureCard style={{ minWidth: '200px', flex: '1 1 200px' }}>
				<h4>🔑 Auth</h4>
				<ul>
					<li>이메일 · 구글 · 카카오 로그인</li>
					<li>10분 내 구현 가능</li>
				</ul>
			</FeatureCard>
			<FeatureCard style={{ minWidth: '200px', flex: '1 1 200px' }}>
				<h4>⚡ RealTime</h4>
				<ul>
					<li>DB 변경사항을 즉시 반영</li>
					<li>채팅 앱처럼 실시간 동작</li>
				</ul>
			</FeatureCard>
			<FeatureCard style={{ minWidth: '200px', flex: '1 1 200px' }}>
				<h4>📦 Storage</h4>
				<ul>
					<li>이미지 · 영상 등 파일 업로드</li>
					<li>CDN으로 빠르게 서빙</li>
				</ul>
			</FeatureCard>
			<FeatureCard style={{ minWidth: '200px', flex: '1 1 200px' }}>
				<h4>🌐 Edge</h4>
				<ul>
					<li>서버 없이 백엔드 로직 실행</li>
					<li>TypeScript로 작성</li>
				</ul>
			</FeatureCard>
			<FeatureCard style={{ minWidth: '200px', flex: '1 1 200px' }}>
				<h4>🤖 Vector</h4>
				<ul>
					<li>벡터 임베딩으로 의미 기반 AI 검색 구현</li>
				</ul>
			</FeatureCard>
		</TwoCol>
		<ContentBox>
			<ul>
				<li>
					<strong>Studio 대시보드</strong>: 엑셀처럼 쉽게 데이터를 보고 편집할
					수 있는 웹 UI 제공
				</li>
				<li>
					<strong>자동 API 생성</strong>: DB 테이블을 만들면 REST API가 자동으로
					생성됨 — 별도 백엔드 코드 불필요
				</li>
			</ul>
		</ContentBox>
	</section>
);

export default SupabaseArchSlide;
