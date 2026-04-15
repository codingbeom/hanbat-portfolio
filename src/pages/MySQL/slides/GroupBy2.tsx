import React from 'react';
import { CodeBlock, ContentBox, SectionTitle } from '../section';

const GroupBy2: React.FC = () => (
	<section key="8">
		<SectionTitle>GROUP BY 그룹화 - 2</SectionTitle>
		<CodeBlock>
			<code>
				<span className="comment">-- 나라별 평균 나이가 30세 이상인 국가</span>
				{'\n'}
				<span className="keyword">SELECT</span> country,{' '}
				<span className="function">AVG</span>(age){'\n'}
				<span className="keyword">FROM</span> users{'\n'}
				<span className="keyword">GROUP BY</span> country{'\n'}
				<span className="keyword">HAVING</span>{' '}
				<span className="function">AVG</span>(age) &gt;= 30;
			</code>
		</CodeBlock>
		<ContentBox>
			<ul>
				<li>
					<strong>HAVING</strong>: <code>GROUP BY</code>로 그룹화된 결과에
					조건을 적용할 때 사용합니다.
				</li>
				<li>
					<strong>WHERE</strong>과의 차이점: <code>WHERE</code>은 그룹화 전에
					개별 행을 필터링하고, <code>HAVING</code>은 그룹화된 결과(집계 결과)에
					조건을 적용합니다.
				</li>
				<li>예: 나라별 평균 나이가 30세 이상인 국가를 조회</li>
			</ul>
		</ContentBox>
	</section>
);

export default GroupBy2;
