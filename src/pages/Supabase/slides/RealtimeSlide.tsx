import React from 'react';
import {
	CodeBlock,
	ContentBox,
	HighlightBox,
	SectionTitle,
	TableExample,
} from '../section';

const RealtimeSlide: React.FC = () => (
	<section>
		<SectionTitle>Realtime — 실시간 데이터</SectionTitle>
		<HighlightBox>
			<p>
				⚡ <strong>DB 데이터를 실시간으로 추적 및 반영</strong> — WebSocket 기반
			</p>
		</HighlightBox>
		<TableExample style={{ marginBottom: '6px' } as React.CSSProperties}>
			<thead>
				<tr>
					<th>기능</th>
					<th>설명</th>
					<th>예시</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<strong>Postgres Changes</strong>
					</td>
					<td>DB 데이터 변경 감지</td>
					<td>새 메시지, 주문 상태 알림</td>
				</tr>
				<tr>
					<td>
						<strong>Broadcast</strong>
					</td>
					<td>채널로 메시지 전송</td>
					<td>실시간 채팅, 게임</td>
				</tr>
				<tr>
					<td>
						<strong>Presence</strong>
					</td>
					<td>접속 중인 사용자 추적</td>
					<td>"현재 방문 중" 표시</td>
				</tr>
			</tbody>
		</TableExample>
		<CodeBlock>
			<code>
				<span className="comment">
					{'// 채팅 테이블에 새 메시지가 온 순간 자동 호출'}
				</span>
				{`\n`}
				<span className="function">supabase</span>.channel(
				<span className="string">'chat'</span>){`\n`}
				{'  '}.<span className="keyword">on</span>(
				<span className="string">'postgres_changes'</span>,{`\n`}
				{'    '}
				{'{ '}
				<span className="operator">event</span>:{' '}
				<span className="string">'INSERT'</span>,{' '}
				<span className="operator">table</span>:{' '}
				<span className="string">'messages'</span>
				{' }'},{`\n`}
				{'    '}(payload) =&gt; <span className="function">console</span>.log(
				<span className="string">{"'새 메시지:'"}</span>, payload.new){`\n`}
				{'  '}).<span className="keyword">subscribe</span>()
			</code>
		</CodeBlock>
		<ContentBox>
			<ul>
				<li>
					<strong>HTTP vs WebSocket</strong>: HTTP는 요청할 때만 응답,
					WebSocket은 연결 유지로 즉시 전달 가능
				</li>
				<li>
					<strong>RLS 자동 적용</strong>: 내 권한이 없는 데이터 변경은
					실시간으로도 받지 않음
				</li>
			</ul>
		</ContentBox>
	</section>
);

export default RealtimeSlide;
