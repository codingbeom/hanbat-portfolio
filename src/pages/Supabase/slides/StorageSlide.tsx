import React from 'react';
import { CodeBlock, ContentBox, HighlightBox, SectionTitle } from '../section';

const StorageSlide: React.FC = () => (
	<section>
		<SectionTitle>Storage — 파일 저장소</SectionTitle>
		<HighlightBox>
			<p>
				📦{' '}
				<strong>
					이미지 · 영상 등 파일을 쉽게 업로드하고 CDN으로 빠르게 서빙
				</strong>
			</p>
		</HighlightBox>
		<CodeBlock>
			<code>
				<span className="comment">{'// 파일 업로드'}</span>
				{`\n`}
				<span className="keyword">const</span> {'{ data, error }'} ={' '}
				<span className="keyword">await</span>{' '}
				<span className="function">supabase</span>.storage{`\n`}
				{'  '}.from(<span className="string">'avatars'</span>){`\n`}
				{'  '}.<span className="keyword">upload</span>(
				<span className="string">'user123/profile.png'</span>, file);{`\n\n`}
				<span className="comment">
					{'// 공개 URL 조회 (이미지 src에 바로 사용)'}
				</span>
				{`\n`}
				<span className="keyword">const</span> {'{ data: { publicUrl } }'} =
				{`\n`}
				{'  '}
				<span className="function">supabase</span>.storage{`\n`}
				{'  '}.from(<span className="string">'avatars'</span>){`\n`}
				{'  '}.<span className="keyword">getPublicUrl</span>(
				<span className="string">'user123/profile.png'</span>);{`\n\n`}
				<span className="comment">{'// 파일 삭제'}</span>
				{`\n`}
				<span className="keyword">await</span>{' '}
				<span className="function">supabase</span>.storage.from(
				<span className="string">'avatars'</span>){`\n`}
				{'  '}.<span className="keyword">remove</span>([
				<span className="string">'user123/profile.png'</span>])
			</code>
		</CodeBlock>
		<ContentBox>
			<ul>
				<li>
					<strong>버킷(Bucket)</strong>: 파일을 담는 폴더 개념 — Public(누구나
					접근) / Private(인증 필요) 선택
				</li>
				<li>
					<strong>CDN 연동</strong>: 업로드한 파일이 전 세계 서버에 분산되어
					어디서도 빠르게 로딩, 이미지 리사이징 지원
				</li>
				<li>
					<strong>RLS 지원</strong>: "내 프로필 사진은 나만 수정" 같은 규칙을
					SQL로 설정 가능
				</li>
			</ul>
		</ContentBox>
	</section>
);

export default StorageSlide;
