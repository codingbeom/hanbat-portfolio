import React from 'react';
import { CodeBlock, ContentBox, SectionTitle } from './section';

const QueryOperators: React.FC = () => (
	<>
		<section>
			<SectionTitle>쿼리 연산자 — 비교 연산자</SectionTitle>
			<CodeBlock>
				<code>
					<span className="comment">{'// $eq: 같음, $ne: 다름'}</span>
					{'\n'}
					<span className="comment">{'// $gt: 초과, $gte: 이상'}</span>
					{'\n'}
					<span className="comment">{'// $lt: 미만, $lte: 이하'}</span>
					{'\n\n'}
					<span className="function">db</span>.users.
					<span className="keyword">find</span>({'({'}
					{'\n'}
					<span className="operator">age</span>: {'{ '}
					<span className="keyword">$gte</span>: 25,{' '}
					<span className="keyword">$lte</span>: 35 {'}'}
					{'\n'}
					{'})'}
					{'\n\n'}
					<span className="comment">{'// $in: 배열 내 값과 일치'}</span>
					{'\n'}
					<span className="function">db</span>.users.
					<span className="keyword">find</span>({'({'}
					{'\n'}
					<span className="operator">age</span>: {'{ '}
					<span className="keyword">$in</span>: [25, 30, 35] {'}'}
					{'})'}
				</code>
			</CodeBlock>
			<ContentBox>
				<ul>
					<li>
						MongoDB의 쿼리 연산자는 <code style={{ color: '#67e8f9' }}>$</code>
						로 시작합니다.
					</li>
					<li>
						<strong>$regex</strong>를 이용하면 SQL의 <code>LIKE</code>와 같은
						패턴 매칭도 가능합니다.
					</li>
				</ul>
			</ContentBox>
		</section>
		<section>
			<SectionTitle>쿼리 연산자 — 논리 연산자</SectionTitle>
			<CodeBlock>
				<code>
					<span className="comment">{'// $and: 모든 조건 만족'}</span>
					{'\n'}
					<span className="function">db</span>.users.
					<span className="keyword">find</span>({'({'}
					{'\n'}
					<span className="keyword">$and</span>: [{'\n'}
					{'{ '}
					<span className="operator">age</span>: {'{ '}
					<span className="keyword">$gt</span>: 25 {'}'} {'}'},{'\n'}
					{'{ '}
					<span className="operator">name</span>:{' '}
					<span className="string">"김철수"</span> {'}'}
					{'\n'}
					{']'}
					{'\n'}
					{'})'}
					{'\n\n'}
					<span className="comment">{'// $or: 하나 이상 조건 만족'}</span>
					{'\n'}
					<span className="function">db</span>.users.
					<span className="keyword">find</span>({'({'}
					{'\n'}
					<span className="keyword">$or</span>: [{'\n'}
					{'{ '}
					<span className="operator">age</span>: {'{ '}
					<span className="keyword">$lt</span>: 20 {'}'} {'}'},{'\n'}
					{'{ '}
					<span className="operator">age</span>: {'{ '}
					<span className="keyword">$gt</span>: 40 {'}'} {'}'}
					{'\n'}
					{']'}
					{'})'}
				</code>
			</CodeBlock>
			<ContentBox>
				<ul>
					<li>
						<strong>$and</strong>는 모든 조건을 동시에 만족하는 문서를
						반환합니다.
					</li>
					<li>
						<strong>$or</strong>는 조건 중 하나라도 만족하면 반환합니다.
					</li>
					<li>
						<strong>$nor</strong>는 모든 조건을 만족하지 않는 문서를 반환합니다.
					</li>
				</ul>
			</ContentBox>
		</section>
	</>
);

export default QueryOperators;
