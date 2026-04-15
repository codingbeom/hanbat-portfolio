import React from 'react';
import { SmallText, Title } from './section';

const OutroSlide: React.FC = () => (
	<section data-background-gradient="linear-gradient(to bottom, #065f46, #064e3b)">
		<Title>감사합니다!</Title>
		<SmallText>
			사용도구: React, Reveal.js, styled-components <br />
			참고: Copilot, MongoDB 공식 문서
		</SmallText>
	</section>
);

export default OutroSlide;
