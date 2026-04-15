import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';

import React, { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';

import DistinctSlide from './slides/DistinctSlide';
import GroupBy1 from './slides/GroupBy1';
import GroupBy2 from './slides/GroupBy2';
import JoinSlide from './slides/JoinSlide';
import LimitSlide from './slides/LimitSlide';
import OrderBy from './slides/OrderBy';
import OutroSlide from './slides/OutroSlide';
import SelectAll from './slides/SelectAll';
import SelectBasic from './slides/SelectBasic';
import TitleSlide from './slides/TitleSlide';
import WhereAdvanced1 from './slides/WhereAdvanced1';
import WhereAdvanced2 from './slides/WhereAdvanced2';
import WhereClause from './slides/WhereClause';

const Presentation: React.FC = () => {
	const deckDivRef = useRef<HTMLDivElement>(null);
	const deckRef = useRef<Reveal.Api | null>(null);

	useEffect(() => {
		if (deckRef.current) return;

		deckRef.current = new Reveal(deckDivRef.current!, {
			width: 1500,
			height: 900,
			transition: 'slide',
			hash: true,
			controls: true,
			progress: true,
			slideNumber: 'c/t',
			embedded: true,
			mouseWheel: true,
		});

		deckRef.current.initialize().then(() => {
			console.log('Reveal.js initialized successfully');
		});

		return () => {
			try {
				if (deckRef.current) {
					deckRef.current.destroy();
					deckRef.current = null;
				}
			} catch (e) {
				console.warn('Reveal.js destroy call failed.');
			}
		};
	}, []);

	return (
		<div
			className="reveal"
			ref={deckDivRef}
			style={{ height: 'calc(100vh - 60px)' }}
		>
			<div className="slides">
				<TitleSlide />
				<SelectBasic />
				<SelectAll />
				<WhereClause />
				<WhereAdvanced1 />
				<WhereAdvanced2 />
				<OrderBy />
				<GroupBy1 />
				<GroupBy2 />
				<JoinSlide />
				<DistinctSlide />
				<LimitSlide />
				<OutroSlide />
			</div>
		</div>
	);
};

export default Presentation;
