import React from 'react';
import { CodeBlock, SectionTitle } from '../section';

const WhereAdvanced1: React.FC = () => (
	<section key="4">
		<SectionTitle>WHERE 절 활용 - 1</SectionTitle>
		<CodeBlock>
			<code>
				<span className="comment">
					-- AND 조건 (age가 25초과하고 name 두번째에 '기'가 포함되는 users
					테이블의 모든 데이터 조회)
				</span>
				{'\n'}
				<span className="keyword">SELECT</span> *{' '}
				<span className="keyword">FROM</span> users{'\n'}
				<span className="keyword">WHERE</span> age &gt; 25{' '}
				<span className="keyword">AND</span> name{' '}
				<span className="keyword">LIKE</span>{' '}
				<span className="string">'_기%'</span>;{'\n\n'}
				<span className="comment">
					-- OR 조건 (age가 25미만이거나 30초과인 users 테이블의 name, gender
					데이터 조회)
				</span>
				{'\n'}
				<span className="keyword">SELECT</span> name, gender{' '}
				<span className="keyword">FROM</span> users{'\n'}
				<span className="keyword">WHERE</span> age &lt; 25{' '}
				<span className="keyword">OR</span> age &gt; 30;
			</code>
		</CodeBlock>
	</section>
);

export default WhereAdvanced1;
