import React from 'react';
import { CodeBlock, ContentBox, SectionTitle } from './section';

const FindSlide: React.FC = () => (
	<section>
		<SectionTitle>조회 (Find)</SectionTitle>
		<CodeBlock>
			<code>
				<span className="comment">
					{'// 전체 조회 (SQL: SELECT * FROM users)'}
				</span>
				{'\n'}
				<span className="function">db</span>.users.
				<span className="keyword">find</span>({'{}'}){'\n\n'}
				<span className="comment">
					{'// 조건 조회 (age가 25 초과인 사용자)'}
				</span>
				{'\n'}
				<span className="function">db</span>.users.
				<span className="keyword">find</span>({'({ '}
				<span className="operator">age</span>: {'{ '}
				<span className="keyword">$gt</span>: 25 {'}'}
				{' })'}
				{'\n\n'}
				<span className="comment">
					{'// 단일 도큐먼트 조회 (첫 번째 결과만)'}
				</span>
				{'\n'}
				<span className="function">db</span>.users.
				<span className="keyword">findOne</span>({'({ '}
				<span className="operator">name</span>:{' '}
				<span className="string">"김철수"</span>
				{' })'}
				{'\n\n'}
				<span className="comment">
					{'// 특정 필드만 조회 (SQL: SELECT name, age FROM users)'}
				</span>
				{'\n'}
				<span className="function">db</span>.users.
				<span className="keyword">find</span>(
				<span className="string">{'{}'}</span>, {'{ '}
				<span className="operator">name</span>: 1,{' '}
				<span className="operator">age</span>: 1,{' '}
				<span className="operator">_id</span>: 0 {'}'})
			</code>
		</CodeBlock>
		<ContentBox>
			<ul>
				<li>
					<strong>find()</strong>: 조건에 맞는 모든 도큐먼트를 조회합니다.
				</li>
				<li>
					<strong>findOne()</strong>: 조건에 맞는 첫 번째 도큐먼트만 반환합니다.
				</li>
				<li>
					두 번째 인자(Projection)로 조회할 필드를 지정합니다.{' '}
					<code style={{ color: '#fde68a' }}>1</code> = 포함,{' '}
					<code style={{ color: '#fde68a' }}>0</code> = 제외
				</li>
			</ul>
		</ContentBox>
	</section>
);

export default FindSlide;
