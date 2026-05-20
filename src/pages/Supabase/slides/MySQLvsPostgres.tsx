import React from 'react';
import { SectionTitle, TableExample } from '../section';

const MySQLvsPostgres: React.FC = () => (
	<section>
		<SectionTitle>MySQL vs PostgreSQL 비교</SectionTitle>
		<TableExample>
			<thead>
				<tr>
					<th>구분</th>
					<th>MySQL</th>
					<th>PostgreSQL ✅ (Supabase 사용)</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>JSON 저장</td>
					<td>지원 (검색 느림)</td>
					<td>
						<strong>JSONB</strong> — 빠른 검색 · 인덱싱 가능
					</td>
				</tr>
				<tr>
					<td>배열 타입</td>
					<td>❌ 미지원</td>
					<td>
						✅ <strong>Array</strong> 컬럼 직접 지원
					</td>
				</tr>
				<tr>
					<td>행 단위 보안</td>
					<td>❌ 없음</td>
					<td>
						✅ <strong>RLS</strong> — "내 글은 나만" SQL 한 줄로
					</td>
				</tr>
				<tr>
					<td>확장 플러그인</td>
					<td>제한적</td>
					<td>
						<strong>400+</strong> 확장 (AI, 지도, 큐 등)
					</td>
				</tr>
				<tr>
					<td>AI 벡터 저장</td>
					<td>❌ 미지원</td>
					<td>
						✅ <strong>pgvector</strong> — AI 검색 구현 가능
					</td>
				</tr>
				<tr>
					<td>저장 프로시저</td>
					<td>SQL만 가능</td>
					<td>SQL · Python · JavaScript 등 다양</td>
				</tr>
			</tbody>
		</TableExample>
	</section>
);

export default MySQLvsPostgres;
