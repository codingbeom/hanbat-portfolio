import React from 'react';
import { CodeBlock, ContentBox, SectionTitle } from './section';

const AggregateSlide: React.FC = () => (
	<section>
		<SectionTitle>집계 (Aggregation Pipeline)</SectionTitle>
		<CodeBlock>
			<code>
				<span className="comment">
					{'// 나라별 평균 나이가 30세 이상인 국가 조회'}
				</span>
				{'\n'}
				<span className="comment">
					{
						'// SQL: SELECT country, AVG(age) FROM users GROUP BY country HAVING AVG(age) >= 30'
					}
				</span>
				{'\n'}
				<span className="function">db</span>.users.
				<span className="keyword">aggregate</span>([{'\n'}
				{'  '}
				{'{ '}
				<span className="keyword">$group</span>: {'{'}
				{'\n'}
				{'    '}
				<span className="operator">_id</span>:{' '}
				<span className="string">"$country"</span>,{'\n'}
				{'    '}
				<span className="operator">avgAge</span>: {'{ '}
				<span className="keyword">$avg</span>:{' '}
				<span className="string">"$age"</span> {'}'}
				{'\n'}
				{'  '}
				{'}'}
				{'  '},{'\n'}
				{'  '}
				{'{ '}
				<span className="keyword">$match</span>: {'{ '}
				<span className="operator">avgAge</span>: {'{ '}
				<span className="keyword">$gte</span>: 30 {'}'} {'}'} {'}'},{'\n'}
				{'  '}
				{'{ '}
				<span className="keyword">$sort</span>: {'{ '}
				<span className="operator">avgAge</span>: -1 {'}'} {'}'}
				{'\n'}
				{'])'}
			</code>
		</CodeBlock>
		<ContentBox>
			<ul>
				<li>
					<strong>Aggregation Pipeline</strong>: 여러 단계(Stage)를 거쳐
					데이터를 변환·집계합니다.
				</li>
				<li>
					<strong>$match</strong>: 조건으로 도큐먼트 필터링 (SQL의 WHERE/HAVING)
				</li>
				<li>
					<strong>$group</strong>: 지정된 필드를 기준으로 그룹화 (SQL의 GROUP
					BY)
				</li>
				<li>
					<strong>$sort</strong>: 결과 정렬 (SQL의 ORDER BY){' '}
					<code style={{ color: '#67e8f9' }}>1</code> = 오름차순,{' '}
					<code style={{ color: '#67e8f9' }}>-1</code> = 내림차순
				</li>
				<li>
					<strong>$project</strong>: 출력할 필드 선택 (SQL의 SELECT)
				</li>
				<li>
					<strong>$limit</strong> / <strong>$skip</strong>: 결과 수 제한 및
					건너뛰기 (SQL의 LIMIT/OFFSET)
				</li>
			</ul>
		</ContentBox>
	</section>
);

export default AggregateSlide;
