import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';

import React, { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';

import AggregateSlide from './slides/AggregateSlide';
import DeleteSlide from './slides/DeleteSlide';
import FindSlide from './slides/FindSlide';
import IndexSlide from './slides/IndexSlide';
import InsertSlide from './slides/InsertSlide';
import MongoStructure from './slides/MongoStructure';
import OutroSlide from './slides/OutroSlide';
import QueryOperators from './slides/QueryOperators';
import SqlVsNoSQL from './slides/SqlVsNoSQL';
import TitleSlide from './slides/TitleSlide';
import UpdateSlide from './slides/UpdateSlide';
import WhatIsNoSQL from './slides/WhatIsNoSQL';

const NoSqlPPT: React.FC = () => {
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
			console.log('Reveal.js (NoSQL) initialized successfully');
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
				<WhatIsNoSQL />
				<SqlVsNoSQL />
				<MongoStructure />
				<InsertSlide />
				<FindSlide />
				<QueryOperators />
				<UpdateSlide />
				<DeleteSlide />
				<AggregateSlide />
				<IndexSlide />
				<OutroSlide />
			</div>
		</div>
	);
};

export default NoSqlPPT;
