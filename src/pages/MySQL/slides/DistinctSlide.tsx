import React from 'react';
import { CodeBlock, ContentBox, SectionTitle } from '../section';

const DistinctSlide: React.FC = () => (
	<section key="10">
		<SectionTitle>DISTINCT 중복 제거</SectionTitle>
		<CodeBlock>
			<code>
				<span className="comment">
					-- 주문이 있는 사용자 목록을 중복 없이 조회
				</span>
				{'\n'}
				<span className="keyword">SELECT DISTINCT</span> users.name{'\n'}
				<span className="keyword">FROM</span> users{'\n'}
				<span className="keyword">INNER JOIN</span> orders{'\n'}
				<span className="keyword">ON</span> users.id = orders.user_id;
			</code>
		</CodeBlock>
		<ContentBox>
			<ul>
				<li>
					<strong>DISTINCT</strong>: 결과에서 중복된 행을 제거합니다.
				</li>
				<li>
					<strong>활용 예시</strong>: 한 사용자가 여러 번 주문했더라도, 이름을
					한 번만 표시하고 싶을 때 사용합니다.
				</li>
				<li>
					예: 같은 사용자가 여러 상품을 주문했다면 <code>JOIN</code> 결과에
					이름이 반복되지만, <code>DISTINCT</code>를 사용하면 한 번만
					표시됩니다.
				</li>
			</ul>
		</ContentBox>
	</section>
);

export default DistinctSlide;
