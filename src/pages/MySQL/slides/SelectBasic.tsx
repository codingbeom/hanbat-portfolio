import React from 'react';
import { CodeBlock, ContentBox, SectionTitle, SmallText } from '../section';

const SelectBasic: React.FC = () => (
	<section key="1">
		<SectionTitle>SELECT 기본 문법</SectionTitle>
		<CodeBlock>
			<code>
				<span className="keyword">SELECT</span> column1, column2, ...{'\n'}
				<span className="keyword">FROM</span> table_name;
			</code>
		</CodeBlock>
		<ContentBox>
			<ul>
				<li>
					<strong>SELECT</strong>: CRUD 중 'Read'에 해당{'\t'}
					<span style={{ color: '#dcdcaa', fontSize: '0.7em' }}>
						-읽기, 조회, 검색-
					</span>
					<SmallText>
						* CRUD: <em>Create, Read, Update, Delete</em>
					</SmallText>
				</li>
				<li>
					<strong>FROM</strong>: 데이터를 가져올 테이블 지정
				</li>
				<li>
					모든 컬럼을 조회하려면 <code style={{ color: '#dcdcaa' }}>*</code>{' '}
					사용
				</li>
			</ul>
		</ContentBox>
	</section>
);

export default SelectBasic;
