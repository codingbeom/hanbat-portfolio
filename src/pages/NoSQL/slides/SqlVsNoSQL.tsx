import React from 'react';
import { SectionTitle, TableExample } from './section';

const SqlVsNoSQL: React.FC = () => (
	<section>
		<SectionTitle>SQL vs NoSQL 비교</SectionTitle>
		<TableExample>
			<thead>
				<tr>
					<th>구분</th>
					<th>SQL (관계형)</th>
					<th>NoSQL (비관계형)</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>데이터 모델</td>
					<td>테이블 (행 & 열)</td>
					<td>도큐먼트, Key-Value 등</td>
				</tr>
				<tr>
					<td>스키마</td>
					<td>고정 (정해진 구조)</td>
					<td>유연 (동적 구조)</td>
				</tr>
				<tr>
					<td>확장 방식</td>
					<td>수직 확장 (Scale-up)</td>
					<td>수평 확장 (Scale-out)</td>
				</tr>
				<tr>
					<td>쿼리 언어</td>
					<td>SQL</td>
					<td>자체 API / JSON 쿼리</td>
				</tr>
				<tr>
					<td>트랜잭션</td>
					<td>ACID 완전 지원</td>
					<td>제한적 지원 (BASE)</td>
				</tr>
				<tr>
					<td>대표 DB</td>
					<td>MySQL, PostgreSQL</td>
					<td>MongoDB, Redis</td>
				</tr>
			</tbody>
		</TableExample>
	</section>
);

export default SqlVsNoSQL;
