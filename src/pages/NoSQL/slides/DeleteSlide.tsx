import React from 'react';
import { CodeBlock, ContentBox, SectionTitle } from './section';

const DeleteSlide: React.FC = () => (
	<section>
		<SectionTitle>삭제 (Delete)</SectionTitle>
		<CodeBlock>
			<code>
				<span className="comment">
					{'// 조건에 맞는 첫 번째 도큐먼트 삭제'}
				</span>
				{'\n'}
				<span className="function">db</span>.users.
				<span className="keyword">deleteOne</span>({'({'}
				{'\n'}
				{'  '}
				<span className="operator">name</span>:{' '}
				<span className="string">"박민수"</span>
				{'\n'}
				{'})'}
				{'\n\n'}
				<span className="comment">{'// 조건에 맞는 모든 도큐먼트 삭제'}</span>
				{'\n'}
				<span className="function">db</span>.users.
				<span className="keyword">deleteMany</span>({'({'}
				{'\n'}
				{'  '}
				<span className="operator">age</span>: {'{ '}
				<span className="keyword">$lt</span>: 20 {'}'}
				{'\n'}
				{'})'}
				{'\n\n'}
				<span className="comment">{'// 컬렉션의 모든 도큐먼트 삭제'}</span>
				{'\n'}
				<span className="function">db</span>.users.
				<span className="keyword">deleteMany</span>({'{}'})
			</code>
		</CodeBlock>
		<ContentBox>
			<ul>
				<li>
					<strong>deleteOne()</strong>: 조건에 맞는 도큐먼트 중 첫 번째만
					삭제합니다.
				</li>
				<li>
					<strong>deleteMany()</strong>: 조건에 맞는 모든 도큐먼트를 삭제합니다.
				</li>
				<li>
					빈 쿼리 <code style={{ color: '#fde68a' }}>{'{}'}</code> 를 사용하면
					컬렉션의 모든 데이터를 삭제하므로 주의가 필요합니다.
				</li>
			</ul>
		</ContentBox>
	</section>
);

export default DeleteSlide;
