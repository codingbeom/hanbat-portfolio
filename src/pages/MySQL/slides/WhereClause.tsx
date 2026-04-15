import React from 'react';
import { CodeBlock, ContentBox, SectionTitle } from '../section';

const WhereClause: React.FC = () => (
	<section key="3">
		<SectionTitle>WHERE 조건절</SectionTitle>
		<CodeBlock>
			<code>
				<span className="keyword">SELECT</span> *{' '}
				<span className="keyword">FROM</span> users{'\n'}
				<span className="keyword">WHERE</span> age &gt; 25;
			</code>
		</CodeBlock>
		<ContentBox>
			<ul>
				<li>
					<strong>WHERE</strong>: 특정 조건을 필터링
				</li>
				<li>비교 연산자: =, !=, &gt;, &lt;, &gt;=, &lt;=</li>
				<li>논리 연산자: AND, OR, NOT</li>
				<li>패턴 매칭: LIKE, ILIKE(대소문자 구분 X)</li>
				<li>NULL 체크: IS NULL, IS NOT NULL</li>
			</ul>
		</ContentBox>
	</section>
);

export default WhereClause;
