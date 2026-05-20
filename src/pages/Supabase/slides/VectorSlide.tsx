import React from 'react';
import { CodeBlock, ContentBox, HighlightBox, SectionTitle } from '../section';

const VectorSlide: React.FC = () => (
	<section>
		<SectionTitle>Vector & AI — pgvector 확장</SectionTitle>
		<HighlightBox>
			<p>
				🤖 <strong>pgvector</strong> — AI 임베딩을 PostgreSQL에 저장하고
				검색하는 확장 · MySQL에는 없는 기능
			</p>
		</HighlightBox>
		<div style={{ display: 'flex', gap: '14px', alignItems: 'stretch' }}>
			<CodeBlock style={{ flex: '1.3', margin: '0' }}>
				<code>
					<span className="comment">{'-- pgvector 활성화'}</span>
					{`\n`}
					<span className="keyword">CREATE EXTENSION IF NOT EXISTS</span>{' '}
					vector;{`\n\n`}
					<span className="comment">{'-- AI 임베딩을 저장하는 테이블'}</span>
					{`\n`}
					<span className="keyword">CREATE TABLE</span> documents ({`\n`}
					{'  '}id <span className="type">bigserial</span>{' '}
					<span className="keyword">PRIMARY KEY</span>,{`\n`}
					{'  '}content <span className="type">text</span>,{`\n`}
					{'  '}embedding <span className="type">vector</span>(1536){`\n`}
					);{`\n\n`}
					<span className="comment">
						{'-- 가장 유사한 문서 5개 검색 (코사인 유사도)'}
					</span>
					{`\n`}
					<span className="keyword">SELECT</span> content{`\n`}
					<span className="keyword">FROM</span> documents{`\n`}
					<span className="keyword">ORDER BY</span> embedding{' '}
					<span className="operator">&lt;=&gt;</span> query_embedding{`\n`}
					<span className="keyword">LIMIT</span> 5;
				</code>
			</CodeBlock>
			<ContentBox style={{ flex: '1', margin: '0' }}>
				<ul>
					<li>
						<strong>벡터(Vector)란?</strong>: 텍스트나 이미지를 AI가 이해하는
						숫자 리스트 — 차원이 높을수록 더 정밀한 의미 표현
					</li>
					<li>
						<strong>유사도 검색</strong>: "사과"를 검색하면 "과일", "딸기" 관련
						문서도 찾아줌 — 키워드가 아니라 의미 기반
					</li>
					<li>
						<strong>RAG 활용</strong>: OpenAI 임베딩 → pgvector 저장 → 유사 문서
						검색 → ChatGPT에 컨텍스트 전달
					</li>
				</ul>
			</ContentBox>
		</div>
	</section>
);

export default VectorSlide;
