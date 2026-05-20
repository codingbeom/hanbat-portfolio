import React from 'react';
import { ContentBox, HighlightBox, SectionTitle } from './section';

const WhatIsNoSQL: React.FC = () => (
	<section>
		<SectionTitle>NoSQL이란?</SectionTitle>
		<HighlightBox style={{ textAlign: 'left' }}>
			<p>
				💡 <strong>Not Only SQL</strong>
				<br />
				관계형 데이터베이스의 한계를 극복한 비관계형 데이터베이스
			</p>
		</HighlightBox>
		<ContentBox>
			<ul>
				<li>
					<strong>유연한 스키마</strong>: 고정된 테이블 구조 없이 자유로운
					형태로 데이터를 저장합니다.
				</li>
				<li>
					<strong>수평 확장(Scale-out)</strong>: 서버를 추가하여 트래픽을
					분산시키기 용이합니다.
				</li>
				<li>
					<strong>고성능</strong>: 대량의 비정형 데이터 처리에 최적화되어
					있습니다.
				</li>
				<li>
					<strong>종류</strong>: Document(MongoDB), Key-Value(Redis),
					Column(Cassandra), Graph(Neo4j) 등
				</li>
			</ul>
		</ContentBox>
	</section>
);

export default WhatIsNoSQL;
