import styled from 'styled-components';

/* ── Supabase brand palette ──────────────────────────────────────────────── */
// Primary green : #3ECF8E
// Dark green    : #1EA672
// Bg dark       : #0d1117 / #0f172a

export const Title = styled.h1`
	font-size: 3em !important;
	margin-bottom: 20px !important;
	text-shadow: 0 14px 30px rgba(0, 0, 0, 0.6) !important;
	color: #f9fafb !important;

	@media (max-width: 768px) {
		font-size: 2em;
	}
`;

export const SectionTitle = styled.h2`
	font-size: 1.4em !important;
	margin-bottom: 8px !important;
	background: linear-gradient(120deg, #3ecf8e 0%, #1ea672 55%, #0e9d5e 100%);
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent !important;
	filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.5));
`;

export const CodeBlock = styled.pre`
	background: linear-gradient(145deg, #0d1117, #111827);
	padding: 10px 16px;
	border-radius: 14px;
	text-align: left;
	box-shadow: 0 10px 24px rgba(0, 0, 0, 0.5);
	border: 1px solid rgba(62, 207, 142, 0.18);
	margin: 6px auto !important;

	code {
		color: #f4f4f5;
		font-family: 'Courier New', monospace;

		.keyword {
			color: #3ecf8e;
			font-weight: bold;
		}

		.string {
			color: #fb923c;
		}

		.comment {
			color: #86efac;
			font-style: italic;
		}

		.function {
			color: #fde68a;
		}

		.operator {
			color: #67e8f9;
			font-weight: bold;
		}

		.type {
			color: #c084fc;
			font-weight: bold;
		}
	}
`;

export const ContentBox = styled.div`
	margin: 8px auto;
	max-width: 92%;
	text-align: left;
	background: rgba(13, 17, 23, 0.65);
	border-radius: 16px;
	border: 1px solid rgba(62, 207, 142, 0.2);
	box-shadow:
		inset 0 1px 0 rgba(255, 255, 255, 0.04),
		0 12px 28px rgba(0, 0, 0, 0.45);

	ul {
		font-family: 'Roboto', sans-serif !important;
		margin: 0 !important;
		width: 100%;
		font-size: 0.82em;
		line-height: 1.35;
		list-style: none;
		padding: 8px;

		li {
			width: 100%;
			margin-bottom: 5px;
			padding: 6px 8px 6px 44px;
			text-indent: -44px;
			background: linear-gradient(
				135deg,
				rgba(62, 207, 142, 0.08),
				rgba(30, 166, 114, 0.13)
			);
			border-radius: 12px;
			border: 1px solid rgba(62, 207, 142, 0.16);
			box-shadow: 0 5px 14px rgba(0, 0, 0, 0.3);
			color: #e2e8f0;
			word-break: keep-all;

			&:last-child {
				margin-bottom: 0;
			}
			&::before {
				content: '▸ ';
				color: #3ecf8e;
				font-weight: bold;
				margin-right: 10px;
			}
		}
	}
`;

export const TableExample = styled.table`
	border-collapse: collapse;
	font-size: 0.81em;
	box-shadow: 0 14px 32px rgba(0, 0, 0, 0.4);
	border-radius: 14px;
	overflow: hidden;
	border: 1px solid rgba(62, 207, 142, 0.22);
	margin: 6px auto !important;
	width: 100%;

	thead tr {
		background: linear-gradient(145deg, #3ecf8e, #1ea672);
		color: #0d1117;
		font-weight: 700;
		text-align: left;
	}

	th,
	td {
		padding: 7px 11px;
		color: #e2e8f0;
		word-break: keep-all;
	}

	thead th {
		color: #0d1117;
	}

	tbody tr {
		border-bottom: 1px solid rgba(62, 207, 142, 0.12);

		&:nth-of-type(even) {
			background: rgba(20, 30, 20, 0.7);
		}

		&:hover {
			background: rgba(62, 207, 142, 0.08);
		}
	}
`;

export const HighlightBox = styled.div`
	width: auto;
	background: linear-gradient(
		135deg,
		rgba(62, 207, 142, 0.3),
		rgba(30, 166, 114, 0.55)
	);
	padding: 10px 18px;
	border-radius: 16px;
	margin: 0 auto 8px;
	max-width: 1200px;
	box-shadow: 0 14px 32px rgba(0, 0, 0, 0.4);
	border: 1px solid rgba(62, 207, 142, 0.25);
	text-align: left;

	p {
		color: #f8fafc;
		font-size: 0.88em;
		line-height: 1.7;
		letter-spacing: 0.015em;
		margin: 0;
		word-break: keep-all;
		padding-left: 1.4em;
		text-indent: -1.4em;
	}
`;

export const SmallText = styled.p`
	font-size: 0.88em;
	opacity: 0.85;
	color: #a7f3d0;
`;

export const TwoCol = styled.div`
	display: flex;
	gap: 18px;
	justify-content: center;
	align-items: stretch;
	flex-wrap: wrap;
`;

export const Badge = styled.span<{ color?: string }>`
	display: inline-block;
	padding: 2px 10px;
	border-radius: 999px;
	font-size: 0.75em;
	font-weight: 700;
	background: ${({ color }) => color ?? 'rgba(62,207,142,0.25)'};
	border: 1px solid ${({ color }) => color ?? 'rgba(62,207,142,0.4)'};
	color: #f0fdf4;
	margin-left: 6px;
	vertical-align: middle;
`;

export const FeatureCard = styled.div`
	background: rgba(13, 17, 23, 0.7);
	border: 1px solid rgba(62, 207, 142, 0.22);
	border-radius: 16px;
	padding: 14px 18px;
	flex: 1;
	min-width: 200px;
	box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
	display: flex;
	flex-direction: column;

	h4 {
		margin: 0 0 8px !important;
		font-size: 0.65em !important;
		color: #3ecf8e !important;
		flex-shrink: 0;
	}

	p,
	ul {
		font-size: 0.5em;
		color: #cbd5e1;
		margin: auto;
		flex: 1;
		word-break: keep-all;
		text-align: left;
	}

	ul {
		list-style: none;
		padding: 0;
		li::before {
			content: '• ';
			color: #3ecf8e;
		}
	}
`;
