import React from 'react';
import { CodeBlock, ContentBox, SectionTitle } from '../section';

const JoinSlide: React.FC = () => (
	<section key="9">
		<SectionTitle>JOIN 테이블 조인</SectionTitle>
		<CodeBlock>
			<code>
				<span className="keyword">SELECT</span> users.name, orders.product{'\n'}
				<span className="keyword">FROM</span> users{'\n'}
				<span className="keyword">INNER JOIN</span> orders{'\n'}
				<span className="keyword">ON</span> users.id = orders.user_id;
			</code>
		</CodeBlock>
		<ContentBox>
			<ul>
				<li>
					<strong>JOIN</strong>: 두 개 이상의 테이블을 연결해 관련 데이터를 함께
					조회할 때 사용합니다.
				</li>
				<li>
					<strong>INNER JOIN</strong>: 양쪽 테이블에 모두 존재하는 데이터만 조회
					(교집합)
				</li>
				<li>
					<strong>LEFT JOIN</strong>: 왼쪽 테이블을 중심으로 오른쪽 테이블을
					매치. 오른쪽에 없으면 NULL 표시.
				</li>
				<li>
					<strong>RIGHT JOIN</strong>: LEFT JOIN의 반대.
				</li>
				<li>
					<strong>OUTER JOIN</strong>: 양쪽 테이블의 모든 데이터 조회 (합집합)
				</li>
			</ul>
		</ContentBox>
	</section>
);

export default JoinSlide;
