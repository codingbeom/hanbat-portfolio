import React from 'react';
import { CodeBlock, SectionTitle } from '../section';

const WhereAdvanced2: React.FC = () => (
	<section key="5">
		<SectionTitle>WHERE 절 활용 - 2</SectionTitle>
		<CodeBlock>
			<code>
				<span className="comment">
					-- IN 조건 (age가 25, 30, 35인 users 테이블의 모든 데이터 조회)
				</span>
				{'\n'}
				<span className="keyword">SELECT</span> *{' '}
				<span className="keyword">FROM</span> users{'\n'}
				<span className="keyword">WHERE</span> age{' '}
				<span className="keyword">IN</span> (25, 30, 35);{'\n\n'}
				<span className="comment">
					-- BETWEEN 조건 (age가 25이상 30이하인 users 테이블의 모든 데이터
					조회)
				</span>
				{'\n'}
				<span className="keyword">SELECT</span> *{' '}
				<span className="keyword">FROM</span> users{'\n'}
				<span className="keyword">WHERE</span> age{' '}
				<span className="keyword">BETWEEN</span> 25{' '}
				<span className="keyword">AND</span> 30;
			</code>
		</CodeBlock>
	</section>
);

export default WhereAdvanced2;
