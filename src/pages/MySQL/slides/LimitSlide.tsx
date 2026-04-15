import React from 'react';
import { CodeBlock, ContentBox, HighlightBox, SectionTitle } from '../section';

const LimitSlide: React.FC = () => (
	<section key="11">
		<SectionTitle>LIMIT</SectionTitle>
		<HighlightBox>
			<p>
				💡 대량 데이터 조회 시 <code>LIMIT</code>과 <code>OFFSET</code>으로 성능
				최적화!
			</p>
		</HighlightBox>
		<CodeBlock>
			<code>
				<span className="keyword">SELECT</span> *{' '}
				<span className="keyword">FROM</span> users{'\n'}
				<span className="keyword">ORDER BY</span> created_at{' '}
				<span className="keyword">DESC</span>
				{'\n'}
				<span className="keyword">LIMIT</span> 10;{'\n\n'}
				<span className="keyword">SELECT</span> *{' '}
				<span className="keyword">FROM</span> users{'\n'}
				<span className="keyword">ORDER BY</span> created_at{' '}
				<span className="keyword">DESC</span>
				{'\n'}
				<span className="keyword">LIMIT</span> 10{' '}
				<span className="keyword">OFFSET</span> 10;
			</code>
		</CodeBlock>
		<ContentBox>
			<ul>
				<li>
					<strong>LIMIT</strong>: 조회할 결과의 개수를 제한합니다.
				</li>
				<li>
					<strong>OFFSET</strong>: 조회를 시작할 위치(행 번호)를 지정합니다. 예:{' '}
					<code>LIMIT 10 OFFSET 10</code> → 11번째 행부터 10개 조회
				</li>
				<li>
					<strong>활용 예시</strong>: 페이지네이션, 무한 스크롤, 최근 N개
					데이터만 보기 등
				</li>
			</ul>
		</ContentBox>
	</section>
);

export default LimitSlide;
