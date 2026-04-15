import React from 'react';
import { SmallText, Title } from '../section';

const OutroSlide: React.FC = () => (
	<section
		key="12"
		data-background-gradient="linear-gradient(to bottom, #17b2c3, #283b95)"
	>
		<Title>감사합니다!</Title>
		<SmallText>
			사용도구: React, Reveal.js, styled-components <br />
			참고: ChatGPT
		</SmallText>
	</section>
);

export default OutroSlide;
