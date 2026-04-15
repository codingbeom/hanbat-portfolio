import React from 'react';
import { SmallText, Title } from '../section';

const TitleSlide: React.FC = () => (
	<section
		key="0"
		data-background-gradient="linear-gradient(to bottom, #283b95, #17b2c3)"
	>
		<Title>
			데이터베이스 <br />
			SELECT
		</Title>
		<SmallText>MySQL 조회의 모든 것</SmallText>
	</section>
);

export default TitleSlide;
