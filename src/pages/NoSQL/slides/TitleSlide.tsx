import React from 'react';
import { SmallText, Title } from './section';

const TitleSlide: React.FC = () => (
	<section data-background-gradient="linear-gradient(to bottom, #064e3b, #065f46)">
		<Title>
			MongoDB <br />& NoSQL
		</Title>
		<SmallText>데이터베이스의 새로운 패러다임</SmallText>
	</section>
);

export default TitleSlide;
