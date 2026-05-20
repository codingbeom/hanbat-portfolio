import React from 'react';
import { CodeBlock, ContentBox, HighlightBox, SectionTitle } from '../section';

const AuthSlide: React.FC = () => (
	<section>
		<SectionTitle>Authentication — 회원 인증 시스템</SectionTitle>
		<HighlightBox>
			<p>
				🔑{' '}
				<strong>
					이메일 · 소셜 로그인 · OTP 등 다양한 인증을 코드 몇 줄로 구현
				</strong>
			</p>
		</HighlightBox>
		<CodeBlock>
			<code>
				<span className="comment">{'// 이메일 회원가입'}</span>
				{'\n'}
				<span className="keyword">const</span> {'{ data, error }'} ={' '}
				<span className="keyword">await</span>{' '}
				<span className="function">supabase</span>.auth.
				<span className="keyword">signUp</span>({'('}
				{'{'} <span className="operator">email</span>:{' '}
				<span className="string">'user@email.com'</span>,{' '}
				<span className="operator">password</span>:{' '}
				<span className="string">'1234'</span> {'}'}
				{')'}
				{'\n\n'}
				<span className="comment">{'// Google 로그인 (버튼 클릭 한 번)'}</span>
				{'\n'}
				<span className="keyword">await</span>{' '}
				<span className="function">supabase</span>.auth.
				<span className="keyword">signInWithOAuth</span>({'({ '}
				<span className="operator">provider</span>:{' '}
				<span className="string">'google'</span>
				{' }})'}
				{'\n\n'}
				<span className="comment">{'// 로그아웃'}</span>
				{'\n'}
				<span className="keyword">await</span>{' '}
				<span className="function">supabase</span>.auth.
				<span className="keyword">signOut</span>()
				{'\n\n'}
				<span className="comment">{'// 현재 로그인 사용자 확인'}</span>
				{'\n'}
				<span className="keyword">const</span> {'{'} data: {'{ user }'} {'}'} ={' '}
				<span className="keyword">await</span>{' '}
				<span className="function">supabase</span>.auth.
				<span className="keyword">getUser</span>()
			</code>
		</CodeBlock>
		<ContentBox>
			<ul>
				<li>
					<strong>다양한 로그인</strong>: 이메일/비밀번호 · 구글 · 깃허브 ·
					카카오 · OTP 인증 등 지원
				</li>
				<li>
					<strong>내 DB에 저장</strong>: 회원 정보가 내 PostgreSQL에 저장됨 —
					구글/파이어베이스는 데이터가 외부에 있음
				</li>
				<li>
					<strong>RLS 연동</strong>: 로그인한 사용자 ID를 SQL에서 바로 사용 →
					"내 글만 수정 가능" 자동 적용
				</li>
				<li>
					<strong>JWT 토큰</strong>: 로그인 후 자동 발급, 모든 API 요청에 자동
					첨부
				</li>
			</ul>
		</ContentBox>
	</section>
);

export default AuthSlide;
