import React from 'react';
import { CodeBlock, ContentBox, HighlightBox, SectionTitle } from '../section';

const RLSSlide: React.FC = () => (
	<section>
		<SectionTitle>Row Level Security (RLS) — 행 단위 보안</SectionTitle>
		<HighlightBox>
			<p>
				🛡️{' '}
				<strong>
					"내 글은 나만 수정할 수 있다" — SQL 두 줄로 설정, 서버 코드 없이
					DB에서 직접 보안 처리
				</strong>
			</p>
		</HighlightBox>
		<CodeBlock>
			<code>
				<span className="comment">{'-- RLS 활성화'}</span>
				{`\n`}
				<span className="keyword">ALTER TABLE</span> posts{' '}
				<span className="keyword">ENABLE ROW LEVEL SECURITY</span>;{`\n\n`}
				<span className="comment">{'-- "내 글만 수정 가능" 정첵'}</span>
				{`\n`}
				<span className="keyword">CREATE POLICY</span>{' '}
				<span className="string">"update own posts"</span>
				{`\n`}
				{'  '}
				<span className="keyword">ON</span> posts{' '}
				<span className="keyword">FOR UPDATE</span>
				{`\n`}
				{'  '}
				<span className="keyword">USING</span> (
				<span className="operator">auth.uid</span>() ={' '}
				<span className="function">user_id</span>);{`\n\n`}
				<span className="comment">{'-- "누구나 읽을 수 있음" 정첵'}</span>
				{`\n`}
				<span className="keyword">CREATE POLICY</span>{' '}
				<span className="string">"anyone can read"</span>
				{`\n`}
				{'  '}
				<span className="keyword">ON</span> posts{' '}
				<span className="keyword">FOR SELECT</span>
				{`\n`}
				{'  '}
				<span className="keyword">USING</span> (
				<span className="keyword">true</span>);
			</code>
		</CodeBlock>
		<ContentBox>
			<ul>
				<li>
					<strong>auth.uid()</strong>: 현재 로그인한 사용자 ID를 SQL에서 직접
					활용
				</li>
				<li>
					<strong>MySQL과 다르다</strong>: MySQL에는 RLS가 없어 코드에서 WHERE
					절로 직접 필터링 해야 함
				</li>
				<li>
					<strong>응용</strong>: "내 파일만 다운로드", "팀원만 공지 수정" 같은
					규칙도 SQL 한 줄로
				</li>
			</ul>
		</ContentBox>
	</section>
);

export default RLSSlide;
