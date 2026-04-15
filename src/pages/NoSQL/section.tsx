import styled from 'styled-components';

export const Title = styled.h1`
	font-size: 3em !important;
	margin-bottom: 20px !important;
	text-shadow: 0 14px 30px rgba(4, 11, 20, 0.45) !important;
	color: #f9fafb !important;

	@media (max-width: 768px) {
		font-size: 2em;
	}
`;

export const SectionTitle = styled.h2`
	font-size: 1.4em !important;
	margin-bottom: 8px !important;
	background: linear-gradient(120deg, #6ee7b7 0%, #34d399 45%, #10b981 100%);
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent !important;
	filter: drop-shadow(0 4px 12px rgba(8, 18, 33, 0.5));
`;

export const CodeBlock = styled.pre`
	background: linear-gradient(145deg, #0f172a, #111827);
	padding: 10px 16px;
	border-radius: 14px;
	text-align: left;
	box-shadow: 0 10px 24px rgba(8, 18, 33, 0.45);
	border: 1px solid rgba(148, 163, 184, 0.15);
	margin: 6px auto !important;

	code {
		color: #f4f4f5;
		font-family: 'Courier New', monospace;

		.keyword {
			color: #34d399;
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
	}
`;

export const ContentBox = styled.div`
	margin: 8px auto;
	max-width: 92%;
	text-align: left;
	background: rgba(15, 23, 42, 0.6);
	border-radius: 16px;
	border: 1px solid rgba(52, 211, 153, 0.18);
	box-shadow:
		inset 0 1px 0 rgba(255, 255, 255, 0.04),
		0 12px 28px rgba(8, 18, 33, 0.4);
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
			margin-bottom: 7px;
			padding: 7px 10px 7px 50px;
			text-indent: -50px;
			background: linear-gradient(
				135deg,
				rgba(52, 211, 153, 0.08),
				rgba(16, 185, 129, 0.12)
			);
			border-radius: 12px;
			border: 1px solid rgba(52, 211, 153, 0.15);
			box-shadow: 0 5px 14px rgba(8, 18, 33, 0.3);
			color: #e2e8f0;

			&:last-child {
				margin-bottom: 0;
			}
			&::before {
				content: '▸ ';
				color: #34d399;
				font-weight: bold;
				margin-right: 10px;
			}
		}
	}
`;

export const TableExample = styled.table`
	border-collapse: collapse;
	font-size: 0.92em;
	box-shadow: 0 14px 32px rgba(8, 18, 33, 0.4);
	border-radius: 14px;
	overflow: hidden;
	border: 1px solid rgba(148, 163, 184, 0.2);
	margin: 6px auto !important;

	thead tr {
		background: linear-gradient(145deg, #34d399, #059669);
		color: #0f172a;
		text-align: left;
	}

	th,
	td {
		padding: 10px 14px;
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

export const HighlightBox = styled.div`
	width: max-content;
	background: linear-gradient(
		135deg,
		rgba(52, 211, 153, 0.35),
		rgba(5, 150, 105, 0.6)
	);
	padding: 6px 12px;
	border-radius: 16px;
	margin: 0 auto 8px;
	max-width: 1100px;
	box-shadow: 0 14px 32px rgba(8, 18, 33, 0.45);
	border: 1px solid rgba(52, 211, 153, 0.2);

	p {
		color: #f8fafc;
		font-size: 0.95em;
		margin: 0;
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
	align-items: flex-start;
	flex-wrap: wrap;
`;
