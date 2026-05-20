import React from 'react';
import { HighlightBox, SectionTitle, TwoCol, FeatureCard } from '../section';

const PostgresAdvantages: React.FC = () => (
	<section>
		<SectionTitle>PostgreSQL이 특별한 이유</SectionTitle>
		<HighlightBox>
			<p>
				🐘 <strong>단순 데이터 저장 그 이상</strong> — AI 검색, 지도, 실시간,
				파일 큐까지 DB 하나로 다 됩니다
			</p>
		</HighlightBox>
		<TwoCol style={{ flexWrap: 'wrap', gap: '10px' } as React.CSSProperties}>
			<FeatureCard style={{ minWidth: '200px', flex: '1 1 200px' }}>
				<h4>📄 JSONB</h4>
				<p>
					JSON 데이터를 빠르게 검색
					<br />
					MySQL보다 훨씬 강력
				</p>
			</FeatureCard>
			<FeatureCard style={{ minWidth: '200px', flex: '1 1 200px' }}>
				<h4>📋 Array 타입</h4>
				<p>
					컬럼 하나에 여러 값 저장
					<br />
					예: 태그 목록, 좋아요 목록
				</p>
			</FeatureCard>
			<FeatureCard style={{ minWidth: '200px', flex: '1 1 200px' }}>
				<h4>🔍 Search</h4>
				<p>
					키워드 검색 엔진 기능 내장
					<br />
					별도 Elasticsearch 불필요
				</p>
			</FeatureCard>
			<FeatureCard style={{ minWidth: '200px', flex: '1 1 200px' }}>
				<h4>🤖 pgvector</h4>
				<p>
					AI 임베딩 저장 · 유사도 검색
					<br />
					MySQL에는 없는 기능
				</p>
			</FeatureCard>
			<FeatureCard style={{ minWidth: '200px', flex: '1 1 200px' }}>
				<h4>🗺️ PostGIS</h4>
				<p>
					지도 위치 데이터 저장
					<br />
					배달 앱, 지도 서비스 구현 가능
				</p>
			</FeatureCard>
			<FeatureCard style={{ minWidth: '200px', flex: '1 1 200px' }}>
				<h4>🛡️ RLS 보안</h4>
				<p>
					행 단위 접근 제어
					<br />
					MySQL엔 없는 PostgreSQL 특화 기능
				</p>
			</FeatureCard>
		</TwoCol>
	</section>
);

export default PostgresAdvantages;
