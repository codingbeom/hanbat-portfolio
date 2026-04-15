import React from 'react';
import { CodeBlock, SectionTitle, TableExample } from './section';

const MongoStructure: React.FC = () => (
	<section>
		<SectionTitle>MongoDB 기본 구조</SectionTitle>
		<TableExample>
			<thead>
				<tr>
					<th>SQL 개념</th>
					<th>MongoDB 개념</th>
					<th>설명</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Database</td>
					<td>Database</td>
					<td>최상위 저장 공간</td>
				</tr>
				<tr>
					<td>Table</td>
					<td>Collection</td>
					<td>도큐먼트의 집합</td>
				</tr>
				<tr>
					<td>Row (행)</td>
					<td>Document</td>
					<td>JSON 형태의 데이터 단위</td>
				</tr>
				<tr>
					<td>Column (열)</td>
					<td>Field</td>
					<td>도큐먼트 내 키-값 쌍</td>
				</tr>
				<tr>
					<td>Primary Key</td>
					<td>_id</td>
					<td>자동 생성 고유 식별자</td>
				</tr>
			</tbody>
		</TableExample>
		<CodeBlock>
			<code>
				<span className="comment">{'// Document 예시 (JSON 형태)'}</span>
				{'\n'}
				{'{'}
				{'\n'}
				{'  '}
				<span className="operator">_id</span>:{' '}
				<span className="function">ObjectId</span>(
				<span className="string">"507f1f77bcf86cd799439011"</span>),{'\n'}
				{'  '}
				<span className="operator">name</span>:{' '}
				<span className="string">"김철수"</span>,{'\n'}
				{'  '}
				<span className="operator">age</span>: 25,{'\n'}
				{'  '}
				<span className="operator">email</span>:{' '}
				<span className="string">"kim@example.com"</span>,{'\n'}
				{'  '}
				<span className="operator">hobbies</span>: [
				<span className="string">"축구"</span>,{' '}
				<span className="string">"독서"</span>]{'\n'}
				{'}'}
			</code>
		</CodeBlock>
	</section>
);

export default MongoStructure;
