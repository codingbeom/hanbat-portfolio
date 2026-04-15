import React from 'react';
import { CodeBlock, SectionTitle, TableExample } from '../section';

const SelectAll: React.FC = () => (
	<section key="2">
		<SectionTitle>전체 데이터 조회</SectionTitle>
		<CodeBlock>
			<code>
				<span className="keyword">SELECT</span> *{' '}
				<span className="keyword">FROM</span> users;
			</code>
		</CodeBlock>
		<TableExample>
			<thead>
				<tr>
					<th>id</th>
					<th>name</th>
					<th>email</th>
					<th>age</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>김철수</td>
					<td>kim@example.com</td>
					<td>25</td>
				</tr>
				<tr>
					<td>2</td>
					<td>이영희</td>
					<td>lee@example.com</td>
					<td>30</td>
				</tr>
				<tr>
					<td>3</td>
					<td>박민수</td>
					<td>park@example.com</td>
					<td>28</td>
				</tr>
			</tbody>
		</TableExample>
	</section>
);

export default SelectAll;
