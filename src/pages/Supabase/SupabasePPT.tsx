import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';

import React, { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';

import AuthSlide from './slides/AuthSlide';
import EdgeFunctionsSlide from './slides/EdgeFunctionsSlide';
import ExtensionsSlide from './slides/ExtensionsSlide';
import MySQLvsPostgres from './slides/MySQLvsPostgres';
import OutroSlide from './slides/OutroSlide';
import PostgresAdvantages from './slides/PostgresAdvantages';
import RealtimeSlide from './slides/RealtimeSlide';
import RLSSlide from './slides/RLSSlide';
import StorageSlide from './slides/StorageSlide';
import SupabaseArchSlide from './slides/SupabaseArchSlide';
import TitleSlide from './slides/TitleSlide';
import VectorSlide from './slides/VectorSlide';
import WhatIsSupabase from './slides/WhatIsSupabase';

const SupabasePPT: React.FC = () => {
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
			console.log('Reveal.js (Supabase) initialized successfully');
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
				<WhatIsSupabase />
				<SupabaseArchSlide />
				<MySQLvsPostgres />
				<PostgresAdvantages />
				<AuthSlide />
				<RLSSlide />
				<RealtimeSlide />
				<StorageSlide />
				<VectorSlide />
				<ExtensionsSlide />
				<EdgeFunctionsSlide />
				<OutroSlide />
			</div>
		</div>
	);
};

export default SupabasePPT;
