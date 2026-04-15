import React from 'react';
import { CodeBlock, ContentBox, SectionTitle } from '../section';

const GroupBy1: React.FC = () => (
	<section key="7">
		<SectionTitle>GROUP BY 그룹화 - 1</SectionTitle>
		<CodeBlock>
			<code>
				<span className="keyword">SELECT</span> country,{' '}
				<span className="function">COUNT</span>(*){'\n'}
				<span className="keyword">FROM</span> users{'\n'}
				<span className="keyword">GROUP BY</span> country;
			</code>
		</CodeBlock>
		<ContentBox>
			<ul>
				<li>
					<strong>GROUP BY</strong>: 특정 컬럼(<code>country</code>)을 기준으로
					데이터를 그룹화합니다.
				</li>
				<li>
					집계 함수: <code>COUNT</code>, <code>SUM</code>, <code>AVG</code>,{' '}
					<code>MAX</code>, <code>MIN</code> 등과 함께 사용하여 그룹별 통계를
					구할 수 있습니다.
				</li>
				<li>
					예: 각 나라별 사용자 수를 계산하거나, 나라별 평균 나이(
					<code>AVG(age)</code>) 등을 구할 때 사용합니다.
				</li>
			</ul>
		</ContentBox>
	</section>
);

export default GroupBy1;
