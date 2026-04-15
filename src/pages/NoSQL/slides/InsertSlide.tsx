import React from 'react';
import { CodeBlock, ContentBox, SectionTitle } from './section';

const InsertSlide: React.FC = () => (
	<section>
		<SectionTitle>삽입 (Insert)</SectionTitle>
		<CodeBlock>
			<code>
				<span className="comment">{'// 단일 도큐먼트 삽입'}</span>
				{'\n'}
				<span className="function">db</span>.users.
				<span className="keyword">insertOne</span>({'({'}
				{'\n'}
				{'  '}
				<span className="operator">name</span>:{' '}
				<span className="string">"이영희"</span>,{'\n'}
				{'  '}
				<span className="operator">age</span>: 30,{'\n'}
				{'  '}
				<span className="operator">email</span>:{' '}
				<span className="string">"lee@example.com"</span>
				{'\n'}
				{'})'}
				{'\n\n'}
				<span className="comment">{'// 여러 도큐먼트 삽입'}</span>
				{'\n'}
				<span className="function">db</span>.users.
				<span className="keyword">insertMany</span>([{'\n'}
				{'  '}
				{'{'} <span className="operator">name</span>:{' '}
				<span className="string">"박민수"</span>,{' '}
				<span className="operator">age</span>: 28 {'}'},{'\n'}
				{'  '}
				{'{'} <span className="operator">name</span>:{' '}
				<span className="string">"최지연"</span>,{' '}
				<span className="operator">age</span>: 22 {'}'}
				{'\n'}
				{'])'}
			</code>
		</CodeBlock>
		<ContentBox>
			<ul>
				<li>
					<strong>insertOne()</strong>: 도큐먼트 1개를 컬렉션에 삽입합니다.
				</li>
				<li>
					<strong>insertMany()</strong>: 여러 도큐먼트를 배열 형태로 한 번에
					삽입합니다.
				</li>
				<li>
					삽입 시 <code style={{ color: '#fde68a' }}>_id</code> 필드를 지정하지
					않으면 MongoDB가 <strong>ObjectId</strong>를 자동 생성합니다.
				</li>
			</ul>
		</ContentBox>
	</section>
);

export default InsertSlide;
