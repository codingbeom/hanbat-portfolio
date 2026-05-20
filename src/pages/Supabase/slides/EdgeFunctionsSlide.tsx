import React from 'react';
import { CodeBlock, ContentBox, HighlightBox, SectionTitle } from '../section';

const EdgeFunctionsSlide: React.FC = () => (
	<section>
		<SectionTitle>Edge Functions — 서버리스 함수</SectionTitle>
		<HighlightBox>
			<p>
				🌐 <strong>서버 없이 TypeScript 코드를 전 세계에 배포</strong> — 서버
				없이 백엔드 로직 실행
			</p>
		</HighlightBox>
		<CodeBlock>
			<code>
				<span className="comment">
					{'// supabase/functions/send-email/index.ts'}
				</span>
				{`\n`}
				<span className="keyword">import</span> {'{ serve }'}{' '}
				<span className="keyword">from</span>{' '}
				<span className="string">"https://deno.land/std/http/server.ts"</span>;
				{`\n\n`}
				<span className="function">serve</span>(
				<span className="keyword">async</span> (req) =&gt; {'{'}
				{`\n`}
				{'  '}
				<span className="keyword">const</span> {'{ email }'} ={' '}
				<span className="keyword">await</span> req.
				<span className="function">json</span>();{`\n`}
				{'  '}
				<span className="comment">
					{'// 외부 API 호출, 메일 발송 등 새로운 로직 작성'}
				</span>
				{`\n`}
				{'  '}
				<span className="keyword">return new</span>{' '}
				<span className="type">Response</span>(
				<span className="string">'OK'</span>, {'{ '}
				<span className="operator">status</span>: 200 {'}'});{`\n`}
				{'}'});{`\n\n`}
				<span className="comment">{'# 배포 명령'}</span>
				{`\n`}
				<span className="operator">$</span> supabase functions deploy send-email
			</code>
		</CodeBlock>
		<ContentBox>
			<ul>
				<li>
					<strong>서버리스(없는 서버)</strong>: 서버를 직접 운영하지 않아도 됨 —
					코드만 올리면 자동 실행
				</li>
				<li>
					<strong>TypeScript 기본</strong>: 컴파일 없이 .ts 파일 그대로 배포 —
					타입 안전하게 개발
				</li>
				<li>
					<strong>활용</strong>: 결제 처리 · 이메일 발송 · 외부 API 호출 등 서버
					로직을 함수 단위로 작성
				</li>
			</ul>
		</ContentBox>
	</section>
);

export default EdgeFunctionsSlide;
