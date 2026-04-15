import React from 'react';
import { CodeBlock, ContentBox, SectionTitle } from '../section';

const OrderBy: React.FC = () => (
	<section key="6">
		<SectionTitle>ORDER BY 정렬</SectionTitle>
		<CodeBlock>
			<code>
				<span className="keyword">SELECT</span> *{' '}
				<span className="keyword">FROM</span> users{'\n'}
				<span className="keyword">ORDER BY</span> age, name{' '}
				<span className="keyword">DESC</span>;
			</code>
		</CodeBlock>
		<ContentBox>
			<ul>
				<li>
					<strong>ORDER BY</strong>: 결과를 정렬
				</li>
				<li>
					<strong>ASC</strong>: 오름차순 (기본값)
				</li>
				<li>
					<strong>DESC</strong>: 내림차순
				</li>
				<li>
					여러 컬럼을 동시에 정렬할 수 있으며, 먼저 정렬할 컬럼을 앞에
					작성합니다.
				</li>
			</ul>
		</ContentBox>
	</section>
);

export default OrderBy;
