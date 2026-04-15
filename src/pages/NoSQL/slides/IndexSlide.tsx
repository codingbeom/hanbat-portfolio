import React from 'react';
import { CodeBlock, ContentBox, HighlightBox, SectionTitle } from './section';

const IndexSlide: React.FC = () => (
	<section>
		<SectionTitle>인덱스 (Index)</SectionTitle>
		<HighlightBox>
			<p>💡 인덱스 없이 Full Collection Scan → 인덱스로 빠른 탐색!</p>
		</HighlightBox>
		<CodeBlock>
			<code>
				<span className="comment">{'// 단일 필드 인덱스 생성'}</span>
				{'\n'}
				<span className="function">db</span>.users.
				<span className="keyword">createIndex</span>({'({ '}
				<span className="operator">email</span>: 1 {'})'}){'\n\n'}
				<span className="comment">
					{'// 복합 인덱스 (email 오름차순, age 내림차순)'}
				</span>
				{'\n'}
				<span className="function">db</span>.users.
				<span className="keyword">createIndex</span>({'({ '}
				<span className="operator">email</span>: 1,{' '}
				<span className="operator">age</span>: -1 {'})'}){'\n\n'}
				<span className="comment">{'// 유니크 인덱스 (중복 방지)'}</span>
				{'\n'}
				<span className="function">db</span>.users.
				<span className="keyword">createIndex</span>(<br />
				{'  '}
				{'({ '}
				<span className="operator">email</span>: 1 {'}'}),
				<br />
				{'  '}
				{'{ '}
				<span className="operator">unique</span>:{' '}
				<span className="keyword">true</span> {'}'}
				<br />
				{')'}
				{'\n\n'}
				<span className="comment">{'// 인덱스 목록 조회'}</span>
				{'\n'}
				<span className="function">db</span>.users.
				<span className="keyword">getIndexes</span>()
			</code>
		</CodeBlock>
		<ContentBox>
			<ul>
				<li>
					<strong>1</strong> = 오름차순 인덱스, <strong>-1</strong> = 내림차순
					인덱스
				</li>
				<li>
					자주 조회하는 필드에 인덱스를 생성하면 쿼리 성능이 크게 향상됩니다.
				</li>
				<li>
					인덱스가 많으면 쓰기 성능이 저하될 수 있으므로 필요한 것만 생성합니다.
				</li>
			</ul>
		</ContentBox>
	</section>
);

export default IndexSlide;
