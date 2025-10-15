import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';

import React, { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import styled from 'styled-components';

const Title = styled.h1`
	font-size: 3em !important;
	margin-bottom: 20px !important;
	text-shadow: 0 14px 30px rgba(4, 11, 20, 0.45) !important;
	color: #f9fafb !important;

	@media (max-width: 768px) {
		font-size: 2em;
	}
`;

const SectionTitle = styled.h2`
	font-size: 1.4em !important;
	margin-bottom: 0 !important;
	color: #76abae !important;
	background: linear-gradient(120deg, #7dd3fc 0%, #38bdf8 45%, #c084fc 100%);
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent !important;
	filter: drop-shadow(0 4px 12px rgba(8, 18, 33, 0.5));
`;

const CodeBlock = styled.pre`
	background: linear-gradient(145deg, #0f172a, #111827);
	padding: 10px;
	border-radius: 16px;
	font-size: 1em;
	text-align: left;
	box-shadow: 0 12px 30px rgba(8, 18, 33, 0.45);
	border: 1px solid rgba(148, 163, 184, 0.15);
	width: fit-content !important;

	code {
		color: #f4f4f5;
		font-family: 'Courier New', monospace;

		.keyword {
			color: #60a5fa;
			font-weight: bold;
		}

		.string {
			color: #f97316;
		}

		.comment {
			color: #86efac;
			font-style: italic;
		}

		.function {
			color: #facc15;
		}
	}
`;

const ContentBox = styled.div`
	margin: 10px auto;
	max-width: 90%;
	text-align: left;
	background: rgba(15, 23, 42, 0.6);
	border-radius: 18px;
	border: 1px solid rgba(125, 211, 252, 0.18);
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04),
		0 14px 32px rgba(8, 18, 33, 0.4);
	ul {
		font-family: 'Roboto', sans-serif !important;
		margin: 0 !important;
		width: 100%;
		font-size: 0.9em;
		line-height: 1.4;
		list-style: none;
		padding: 10px;

		li {
			width: 100%;
			margin-bottom: 8px;
			padding-left: 55px;
			text-indent: -55px;
			background: linear-gradient(
				135deg,
				rgba(56, 189, 248, 0.08),
				rgba(192, 132, 252, 0.12)
			);
			border-radius: 14px;
			border: 1px solid rgba(56, 189, 248, 0.15);
			box-shadow: 0 6px 18px rgba(8, 18, 33, 0.3);
			color: #e2e8f0;

			&:last-child {
				margin-bottom: 0;
			}
			&::before {
				content: '▸ ';
				color: #38bdf8;
				font-weight: bold;
				margin-right: 10px;
			}
		}
	}
`;

const TableExample = styled.table`
	border-collapse: collapse;
	font-size: 1em;
	box-shadow: 0 16px 36px rgba(8, 18, 33, 0.4);
	border-radius: 16px;
	overflow: hidden;
	border: 1px solid rgba(148, 163, 184, 0.2);

	thead tr {
		background: linear-gradient(145deg, #38bdf8, #818cf8);
		color: #0f172a;
		text-align: left;
	}

	th,
	td {
		padding: 12px 15px;
		color: #e2e8f0;
	}

	tbody tr {
		border-bottom: 1px solid rgba(148, 163, 184, 0.18);

		&:nth-of-type(even) {
			background: rgba(30, 41, 59, 0.85);
		}

		&:hover {
			background: rgba(59, 74, 99, 0.95);
		}
	}
`;

const HighlightBox = styled.div`
	background: linear-gradient(
		135deg,
		rgba(56, 189, 248, 0.35),
		rgba(99, 102, 241, 0.6)
	);
	padding: 5px;
	border-radius: 18px;
	margin: 0 auto;
	max-width: 1100px;
	box-shadow: 0 18px 38px rgba(8, 18, 33, 0.45);
	border: 1px solid rgba(125, 211, 252, 0.2);

	p {
		color: #f8fafc;
		font-size: 1em;
		margin: 0;
	}
`;

const SmallText = styled.p`
	font-size: 0.9em;
	opacity: 0.85;
	color: #cbd5f5;
`;

const Presentation: React.FC = () => {
	const deckDivRef = useRef<HTMLDivElement>(null);
	const deckRef = useRef<Reveal.Api | null>(null);

	useEffect(() => {
		if (deckRef.current) return;

		deckRef.current = new Reveal(deckDivRef.current!, {
			width: 1500,
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
				{/* 타이틀 슬라이드 */}
				<section
					key="0"
					data-background-gradient="linear-gradient(to bottom, #283b95, #17b2c3)"
				>
					<Title>
						데이터베이스 <br />
						SELECT
					</Title>
				</section>

				{/* SELECT 기본 문법 */}
				<section key="1">
					<SectionTitle>SELECT 기본 문법</SectionTitle>
					<CodeBlock>
						<code>
							<span className="keyword">SELECT</span> column1, column2, ...
							{'\n'}
							<span className="keyword">FROM</span> table_name;
						</code>
					</CodeBlock>
					<ContentBox>
						<ul>
							<li>
								<strong>SELECT</strong>: CRUD 중 'Read'에 해당{'\t'}
								<span style={{ color: '#dcdcaa', fontSize: '0.7em' }}>
									-읽기, 조회, 검색-
								</span>
								<SmallText>
									* CRUD: <em>Create, Read, Update, Delete</em>
								</SmallText>
							</li>
							<li>
								<strong>FROM</strong>: 데이터를 가져올 테이블 지정
							</li>
							<li>
								모든 컬럼을 조회하려면{' '}
								<code style={{ color: '#dcdcaa' }}>*</code> 사용
							</li>
						</ul>
					</ContentBox>
				</section>

				{/* 전체 조회 예제 */}
				<section key="2">
					<SectionTitle>전체 데이터 조회</SectionTitle>
					<CodeBlock>
						<code>
							<span className="keyword">SELECT</span> *{' '}
							<span className="keyword">FROM</span> users;
						</code>
					</CodeBlock>
					<TableExample>
						<thead>
							<tr>
								<th>id</th>
								<th>name</th>
								<th>email</th>
								<th>age</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>김철수</td>
								<td>kim@example.com</td>
								<td>25</td>
							</tr>
							<tr>
								<td>2</td>
								<td>이영희</td>
								<td>lee@example.com</td>
								<td>30</td>
							</tr>
							<tr>
								<td>3</td>
								<td>박민수</td>
								<td>park@example.com</td>
								<td>28</td>
							</tr>
						</tbody>
					</TableExample>
				</section>

				{/* WHERE 절 */}
				<section key="3">
					<SectionTitle>WHERE 조건절</SectionTitle>
					<CodeBlock>
						<code>
							<span className="keyword">SELECT</span> *{' '}
							<span className="keyword">FROM</span> users{'\n'}
							<span className="keyword">WHERE</span> age &gt; 25;
						</code>
					</CodeBlock>
					<ContentBox>
						<ul>
							<li>
								<strong>WHERE</strong>: 특정 조건을 필터링
							</li>
							<li>비교 연산자: =, !=, &gt;, &lt;, &gt;=, &lt;=</li>
							<li>논리 연산자: AND, OR, NOT</li>
							<li>패턴 매칭: LIKE, ILIKE(대소문자 구분 X)</li>
							<li>NULL 체크: IS NULL, IS NOT NULL</li>
						</ul>
					</ContentBox>
				</section>

				{/* WHERE 심화 */}
				<section key="4">
					<SectionTitle>WHERE 절 활용 - 1</SectionTitle>
					<CodeBlock>
						<code>
							<span className="comment">
								-- AND 조건 (age가 25초과하고 name 두번째에 '기'가 포함되는
								users 테이블의 모든 데이터 조회)
							</span>
							{'\n'}
							<span className="keyword">SELECT</span> *{' '}
							<span className="keyword">FROM</span> users{'\n'}
							<span className="keyword">WHERE</span> age &gt; 25{' '}
							<span className="keyword">AND</span> name{' '}
							<span className="keyword">LIKE</span>{' '}
							<span className="string">'_기%'</span>;{'\n\n'}
							<span className="comment">
								-- OR 조건 (age가 25미만이거나 30초과인 users 테이블의 name,
								gender 데이터 조회)
							</span>
							{'\n'}
							<span className="keyword">SELECT</span> name, gender{' '}
							<span className="keyword">FROM</span> users{'\n'}
							<span className="keyword">WHERE</span> age &lt; 25{' '}
							<span className="keyword">OR</span> age &gt; 30;
						</code>
					</CodeBlock>
				</section>

				<section key="5">
					<SectionTitle>WHERE 절 활용 - 2</SectionTitle>
					<CodeBlock>
						<code>
							<span className="comment">
								-- IN 조건 (age가 25, 30, 35인 users 테이블의 모든 데이터 조회)
							</span>
							{'\n'}
							<span className="keyword">SELECT</span> *{' '}
							<span className="keyword">FROM</span> users{'\n'}
							<span className="keyword">WHERE</span> age{' '}
							<span className="keyword">IN</span> (25, 30, 35);{'\n\n'}
							<span className="comment">
								-- BETWEEN 조건 (age가 25이상 30이하인 users 테이블의 모든
								데이터 조회)
							</span>
							{'\n'}
							<span className="keyword">SELECT</span> *{' '}
							<span className="keyword">FROM</span> users{'\n'}
							<span className="keyword">WHERE</span> age{' '}
							<span className="keyword">BETWEEN</span> 25{' '}
							<span className="keyword">AND</span> 30;
						</code>
					</CodeBlock>
				</section>

				{/* ORDER BY */}
				<section key="6">
					<SectionTitle>ORDER BY 정렬</SectionTitle>
					<CodeBlock>
						<code>
							<span className="keyword">SELECT</span> *{' '}
							<span className="keyword">FROM</span> users{'\n'}
							<span className="keyword">ORDER BY</span> age, name{' '}
							<span className="keyword">DESC</span>;
						</code>
					</CodeBlock>
					<ContentBox>
						<ul>
							<li>
								<strong>ORDER BY</strong>: 결과를 정렬
							</li>
							<li>
								<strong>ASC</strong>: 오름차순 (기본값)
							</li>
							<li>
								<strong>DESC</strong>: 내림차순
							</li>
							<li>
								여러 컬럼을 동시에 정렬할 수 있으며, 먼저 정렬할 컬럼을 앞에
								작성합니다.
							</li>
						</ul>
					</ContentBox>
				</section>

				{/* GROUP BY */}
				<section key="7">
					<SectionTitle>GROUP BY 그룹화 - 1</SectionTitle>
					<CodeBlock>
						<code>
							<span className="keyword">SELECT</span> country,{' '}
							<span className="function">COUNT</span>(*){'\n'}
							<span className="keyword">FROM</span> users{'\n'}
							<span className="keyword">GROUP BY</span> country;
						</code>
					</CodeBlock>
					<ContentBox>
						<ul>
							<li>
								<strong>GROUP BY</strong>: 특정 컬럼(<code>country</code>)을
								기준으로 데이터를 그룹화합니다.
							</li>
							<li>
								집계 함수: <code>COUNT</code>, <code>SUM</code>,{' '}
								<code>AVG</code>, <code>MAX</code>, <code>MIN</code> 등과 함께
								사용하여 그룹별 통계를 구할 수 있습니다.
							</li>
							<li>
								예: 각 나라별 사용자 수를 계산하거나, 나라별 평균 나이(
								<code>AVG(age)</code>) 등을 구할 때 사용합니다.
							</li>
						</ul>
					</ContentBox>
				</section>

				<section key="8">
					<SectionTitle>GROUP BY 그룹화 - 2</SectionTitle>
					<CodeBlock>
						<code>
							{/* -- 나라별 평균 나이가 30세 이상인 나라 조회 */}
							<span className="comment">
								-- 나라별 평균 나이가 30세 이상인 국가
							</span>
							{'\n'}
							{/* users 테이블에서 country별 평균 age를 계산 */}
							<span className="keyword">SELECT</span> country,{' '}
							<span className="function">AVG</span>(age){'\n'}
							{/* 데이터 조회 테이블 지정 */}
							<span className="keyword">FROM</span> users{'\n'}
							{/* country 컬럼을 기준으로 그룹화 */}
							<span className="keyword">GROUP BY</span> country{'\n'}
							{/* 그룹화된 결과 중 평균 나이가 30 이상인 그룹만 필터링 */}
							<span className="keyword">HAVING</span>{' '}
							<span className="function">AVG</span>(age) &gt;= 30;
						</code>
					</CodeBlock>
					<ContentBox>
						<ul>
							<li>
								<strong>HAVING</strong>: <code>GROUP BY</code>로 그룹화된 결과에
								조건을 적용할 때 사용합니다.
							</li>
							<li>
								<strong>WHERE</strong>과의 차이점: <code>WHERE</code>은 그룹화
								전에 개별 행을 필터링하고, <code>HAVING</code>은 그룹화된
								결과(집계 결과)에 조건을 적용합니다.
							</li>
							<li>예: 나라별 평균 나이가 30세 이상인 국가를 조회</li>
						</ul>
					</ContentBox>
				</section>

				{/* JOIN */}
				<section key="9">
					<SectionTitle>JOIN 테이블 조인</SectionTitle>
					<CodeBlock>
						<code>
							{/* users와 orders 테이블을 연결하여 사용자 이름과 주문 상품을 함께 조회 */}
							<span className="keyword">SELECT</span> users.name, orders.product
							{'\n'}
							{/* 기준 테이블 지정 */}
							<span className="keyword">FROM</span> users{'\n'}
							{/* 두 테이블을 조인 */}
							<span className="keyword">INNER JOIN</span> orders{'\n'}
							{/* 조인 조건: users.id와 orders.user_id가 같은 행을 연결 */}
							<span className="keyword">ON</span> users.id = orders.user_id;
						</code>
					</CodeBlock>
					<ContentBox>
						<ul>
							<li>
								<strong>JOIN</strong>: 두 개 이상의 테이블을 연결해 관련
								데이터를 함께 조회할 때 사용합니다.
							</li>
							<li>
								<strong>INNER JOIN</strong>: 양쪽 테이블에 모두 존재하는
								데이터만 조회 (교집합)
							</li>
							<li>
								<strong>LEFT JOIN</strong>: 왼쪽 테이블을 중심으로 오른쪽의
								테이블을 매치시킨다. 왼쪽은 무조건 표시하고, 매치되는 레코드가
								오른쪽에 없으면 NULL을 표시한다.
							</li>
							<li>
								<strong>RIGHT JOIN</strong>: LEFT JOIN의 반대.
							</li>
							<li>
								<strong>OUTER JOIN</strong>: 양쪽 테이블의 모든 데이터 조회
								(합집합)
							</li>
						</ul>
					</ContentBox>
				</section>

				{/* DISTINCT */}
				<section key="10">
					<SectionTitle>DISTINCT 중복 제거</SectionTitle>
					<CodeBlock>
						<code>
							{/* users와 orders 테이블을 조인하여 상품을 주문한 사용자 이름 조회 */}
							<span className="comment">
								-- 주문이 있는 사용자 목록을 중복 없이 조회
							</span>
							{'\n'}
							<span className="keyword">SELECT DISTINCT</span> users.name{'\n'}
							<span className="keyword">FROM</span> users{'\n'}
							<span className="keyword">INNER JOIN</span> orders{'\n'}
							<span className="keyword">ON</span> users.id = orders.user_id;
						</code>
					</CodeBlock>

					<ContentBox>
						<ul>
							<li>
								<strong>DISTINCT</strong>: 결과에서 중복된 행을 제거합니다.
							</li>
							<li>
								<strong>활용 예시</strong>: 한 사용자가 여러 번 주문했더라도,
								이름을 한 번만 표시하고 싶을 때 사용합니다.
							</li>
							<li>
								예: 같은 사용자가 여러 상품을 주문했다면 <code>JOIN</code>{' '}
								결과에 이름이 반복되지만, <code>DISTINCT</code>를 사용하면 한
								번만 표시됩니다.
							</li>
						</ul>
					</ContentBox>
				</section>

				{/* LIMIT */}
				<section key="11">
					<SectionTitle>LIMIT</SectionTitle>
					<HighlightBox>
						<p>
							💡 대량 데이터 조회 시 <code>LIMIT</code>과 <code>OFFSET</code>
							으로 성능 최적화!
						</p>
					</HighlightBox>
					<CodeBlock>
						<code>
							<span className="keyword">SELECT</span> *{' '}
							<span className="keyword">FROM</span> users{'\n'}
							<span className="keyword">ORDER BY</span> created_at{' '}
							<span className="keyword">DESC</span>
							{'\n'}
							<span className="keyword">LIMIT</span> 10;
							{'\n\n'}
							<span className="keyword">SELECT</span> *{' '}
							<span className="keyword">FROM</span> users{'\n'}
							<span className="keyword">ORDER BY</span> created_at{' '}
							<span className="keyword">DESC</span>
							{'\n'}
							<span className="keyword">LIMIT</span> 10{' '}
							<span className="keyword">OFFSET</span> 10;
						</code>
					</CodeBlock>

					<ContentBox>
						<ul>
							<li>
								<strong>LIMIT</strong>: 조회할 결과의 개수를 제한합니다.
							</li>
							<li>
								<strong>OFFSET</strong>: 조회를 시작할 위치(행 번호)를
								지정합니다. <br />
								예: <code>LIMIT 10 OFFSET 10</code> → 11번째 행부터 10개 조회
							</li>
							<li>
								<strong>활용 예시</strong>: 페이지네이션, 무한 스크롤, 최근 N개
								데이터만 보기 등
							</li>
						</ul>
					</ContentBox>
				</section>

				{/* 마무리 */}
				<section
					key="12"
					data-background-gradient="linear-gradient(to bottom, #17b2c3, #283b95)"
				>
					<Title>감사합니다!</Title>

					<SmallText>
						사용도구: React, Reveal.js, styled-components <br />
						참고: ChatGPT
					</SmallText>
				</section>
			</div>
		</div>
	);
};

export default Presentation;
