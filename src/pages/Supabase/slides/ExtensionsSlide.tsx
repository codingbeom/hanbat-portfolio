import React from 'react';
import {
	ContentBox,
	HighlightBox,
	SectionTitle,
	TableExample,
} from '../section';

const ExtensionsSlide: React.FC = () => (
	<section>
		<SectionTitle>Extensions — PostgreSQL 확장 생태계</SectionTitle>
		<HighlightBox>
			<p>
				🧩 <strong>400+ 확장</strong> — Supabase 대시보드에서 토글 한 번으로
				활성화 · MySQL보다 훨씬 다양한 기능 추가 가능
			</p>
		</HighlightBox>
		<TableExample>
			<thead>
				<tr>
					<th>확장명</th>
					<th>하는 일</th>
					<th>활용 예시</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<strong>pgvector</strong>
					</td>
					<td>AI 임베딩 저장 / 검색</td>
					<td>AI 챗봇, 문서 검색</td>
				</tr>
				<tr>
					<td>
						<strong>PostGIS</strong>
					</td>
					<td>지도 위치 데이터</td>
					<td>배달 앱, 지도 서비스</td>
				</tr>
				<tr>
					<td>
						<strong>pg_cron</strong>
					</td>
					<td>DB 내부 스케줄러</td>
					<td>매일 자정 데이터 정리</td>
				</tr>
				<tr>
					<td>
						<strong>pg_graphql</strong>
					</td>
					<td>GraphQL API 자동 생성</td>
					<td>프론트엔드 API 연동</td>
				</tr>
				<tr>
					<td>
						<strong>uuid-ossp</strong>
					</td>
					<td>UUID(고유 ID) 생성</td>
					<td>PK로 UUID 활용</td>
				</tr>
				<tr>
					<td>
						<strong>pgmq</strong>
					</td>
					<td>메시지 큐</td>
					<td>비동기 작업 처리</td>
				</tr>
			</tbody>
		</TableExample>
		<ContentBox>
			<ul>
				<li>
					<strong>원클릭 설치</strong>: Supabase 대시보드 Database → Extensions
					메뉴에서 토글 한 번으로 활성화
				</li>
				<li>
					<strong>SQL로도 가능</strong>:{' '}
					<code style={{ color: '#3ecf8e' }}>
						CREATE EXTENSION IF NOT EXISTS pgvector;
					</code>
				</li>
			</ul>
		</ContentBox>
	</section>
);

export default ExtensionsSlide;
