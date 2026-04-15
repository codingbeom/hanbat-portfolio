import React from 'react';
import { CodeBlock, ContentBox, SectionTitle } from './section';

const UpdateSlide: React.FC = () => (
	<section>
		<SectionTitle>수정 (Update)</SectionTitle>
		<CodeBlock>
			<code>
				<span className="comment">
					{'// updateOne: 단일 도큐먼트 수정 ($set)'}
				</span>
				{'\n'}
				<span className="function">db</span>.users.
				<span className="keyword">updateOne</span>
				{'({\n'}
				{'  '}
				<span className="operator">name</span>:{' '}
				<span className="string">"김철수"</span>
				{'\n'}
				{'}, {\n'}
				{'  '}
				<span className="keyword">$set</span>
				{': { '}
				<span className="operator">age</span>
				{': 26 }\n'}
				{')'}
				{'\n\n'}
				<span className="comment">
					{'// updateMany: 여러 도큐먼트 수정 ($inc)'}
				</span>
				{'\n'}
				<span className="function">db</span>.users.
				<span className="keyword">updateMany</span>
				{'({\n'}
				{'  '}
				<span className="operator">age</span>
				{': { '}
				<span className="keyword">$gte</span>
				{': 30 }\n'}
				{'}, {\n'}
				{'  '}
				<span className="keyword">$inc</span>
				{': { '}
				<span className="operator">age</span>
				{': 1 }\n'}
				{')'}
				{'\n\n'}
				<span className="comment">{'// $unset: 필드 삭제'}</span>
				{'\n'}
				<span className="function">db</span>.users.
				<span className="keyword">updateOne</span>
				{'({\n'}
				{'  '}
				<span className="operator">name</span>:{' '}
				<span className="string">"이영희"</span>
				{'\n'}
				{'}, {\n'}
				{'  '}
				<span className="keyword">$unset</span>
				{': { '}
				<span className="operator">email</span>:{' '}
				<span className="string">""</span>
				{' }\n'}
				{')'}
			</code>
		</CodeBlock>
		<ContentBox>
			<ul>
				<li>
					<strong>updateOne()</strong> / <strong>updateMany()</strong>: 1개 또는
					여러 도큐먼트를 수정합니다.
				</li>
				<li>
					<strong>$set</strong>: 지정한 필드 값을 변경합니다.
				</li>
				<li>
					<strong>$inc</strong>: 숫자 필드를 증가/감소시킵니다.
				</li>
				<li>
					<strong>$unset</strong>: 필드를 도큐먼트에서 제거합니다.
				</li>
			</ul>
		</ContentBox>
	</section>
);

export default UpdateSlide;
