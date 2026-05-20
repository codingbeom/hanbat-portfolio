// Puzzle.tsx
import PuzzleTile from '@/components/PuzzleTile';
import { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { MultiBackend, TouchTransition } from 'react-dnd-multi-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { FileUploader } from 'react-drag-drop-files';
import styled from 'styled-components';

const PuzzleContainer = styled.div`
	width: 100%;
	padding: 60px 24px;
`;

const SectionContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const PuzzleBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 24px;

	padding: 28px;
	border-radius: 28px;

	@media (min-width: 950px) {
		flex-direction: row;
		align-items: flex-start;
	}
`;

const Title = styled.div`
	margin-bottom: 24px;
	display: flex;
	flex-direction: column;
	align-items: center;

	h2 {
		font-size: 42px;
		font-weight: 800;
		letter-spacing: -1px;

		background: linear-gradient(90deg, #10b981, #14b8a6, #3b82f6);

		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;

		margin-bottom: 16px;
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 14px;
	justify-content: center;
`;

const PuzzleGrid = styled.div<{ $size: number }>`
	width: 400px;
	height: 400px;

	display: grid;
	grid-template-columns: ${(props) => `repeat(${props.$size}, 1fr)`};
	grid-template-rows: ${(props) => `repeat(${props.$size}, 1fr)`};

	gap: 2px;

	padding: 8px;

	border-radius: 22px;

	background: linear-gradient(135deg, #14b8a6, #3b82f6);

	box-shadow:
		0 10px 30px rgba(59, 130, 246, 0.18),
		0 4px 12px rgba(16, 185, 129, 0.12);

	touch-action: none;

	overflow: hidden;

	transition:
		transform 0.3s ease,
		box-shadow 0.3s ease;

	&:hover {
		transform: translateY(-4px);

		box-shadow:
			0 20px 40px rgba(59, 130, 246, 0.24),
			0 10px 20px rgba(16, 185, 129, 0.18);
	}

	@media (max-width: 500px) {
		width: 320px;
		height: 320px;
	}
`;

const OriginalImage = styled.img`
	width: 400px;
	height: 400px;

	object-fit: cover;

	border-radius: 22px;

	border: 4px solid rgba(255, 255, 255, 0.8);

	box-shadow:
		0 12px 30px rgba(15, 23, 42, 0.12),
		0 4px 12px rgba(59, 130, 246, 0.08);

	transition:
		transform 0.35s ease,
		box-shadow 0.35s ease;

	&:hover {
		transform: scale(1.02);

		box-shadow:
			0 20px 40px rgba(15, 23, 42, 0.16),
			0 8px 20px rgba(16, 185, 129, 0.12);
	}

	@media (max-width: 500px) {
		width: 320px;
		height: 320px;
	}
`;

const Button = styled.button`
	padding: 12px 22px;

	font-size: 15px;
	font-weight: 700;

	color: #0f172a;

	border: none;
	border-radius: 14px;

	background: rgba(255, 255, 255, 0.8);

	backdrop-filter: blur(8px);

	box-shadow:
		0 4px 10px rgba(15, 23, 42, 0.06),
		0 2px 4px rgba(15, 23, 42, 0.04);

	cursor: pointer;

	transition:
		transform 0.2s ease,
		box-shadow 0.25s ease,
		background 0.25s ease,
		color 0.25s ease;

	&:hover {
		transform: translateY(-2px);

		background: linear-gradient(90deg, #10b981, #14b8a6, #3b82f6);

		color: white;

		box-shadow:
			0 10px 20px rgba(16, 185, 129, 0.18),
			0 4px 10px rgba(59, 130, 246, 0.14);
	}

	&:active {
		transform: scale(0.96);
	}

	&.active {
		background: linear-gradient(90deg, #10b981, #14b8a6, #3b82f6);

		color: white;

		box-shadow:
			0 10px 20px rgba(16, 185, 129, 0.2),
			0 4px 10px rgba(59, 130, 246, 0.16);
	}
`;

const fileTypes = ['JPEG', 'PNG', 'JPG'];

const HTML5toTouch = {
	backends: [
		{
			backend: HTML5Backend,
			preview: true,
		},
		{
			backend: TouchBackend,
			options: { enableMouseEvents: true },
			preview: true,
			transition: TouchTransition,
		},
	],
};

type Difficulty = {
	size: number;
	label: string;
};

const difficulties: Difficulty[] = [
	{ size: 4, label: '하 (4×4)' },
	{ size: 8, label: '중 (8x8)' },
	{ size: 12, label: '상 (12x12)' },
];

function Puzzle() {
	const [file, setFile] = useState(null);
	const [imageUrl, setImageUrl] = useState('');
	const [pieces, setPieces] = useState([]);
	const [difficulty, setDifficulty] = useState<Difficulty>(difficulties[0]);

	const onDrop = (file) => {
		setFile(file);
		const url = URL.createObjectURL(file);
		setImageUrl(url);
	};

	const shufflePieces = (pieces) => {
		for (let i = pieces.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[pieces[i], pieces[j]] = [pieces[j], pieces[i]];
		}
		return pieces;
	};

	const movePiece = (fromId: string, toId: string) => {
		const fromIndex = pieces.findIndex((piece) => piece.id === fromId);
		const toIndex = pieces.findIndex((piece) => piece.id === toId);

		const updatedPieces = [...pieces];
		[updatedPieces[fromIndex], updatedPieces[toIndex]] = [
			updatedPieces[toIndex],
			updatedPieces[fromIndex],
		];

		setPieces(updatedPieces);
	};

	const initializePuzzle = () => {
		if (file) {
			const size = difficulty.size;
			const newPieces = [];
			const percentage = 100 / (size - 1);

			for (let row = 0; row < size; row++) {
				for (let col = 0; col < size; col++) {
					newPieces.push({
						id: `${row * size + col}`,
						originalPos: { row, col },
						currentPos: { row, col },
						posX: col * percentage,
						posY: row * percentage,
					});
				}
			}
			const shuffled = shufflePieces(newPieces);
			setPieces(shuffled);
		}
	};

	useEffect(() => {
		initializePuzzle();
	}, [file, difficulty]);

	useEffect(() => {
		if (pieces.length > 0) {
			const size = difficulty.size;
			const allCorrect = pieces.every((piece, index) => {
				return (
					piece.originalPos.row === Math.floor(index / size) &&
					piece.originalPos.col === index % size
				);
			});

			if (allCorrect) {
				alert('정답입니다! 다른 이미지로 도전해보세요!');
			}
		}
	}, [pieces, difficulty]);

	const reset = () => {
		setFile(null);
		setPieces([]);
		setImageUrl('');
	};

	const changeDifficulty = (newDifficulty: Difficulty) => {
		setDifficulty(newDifficulty);
	};

	return (
		<PuzzleContainer>
			<SectionContainer>
				<Title>
					<h2>Puzzle</h2>
					{!file ? (
						<ButtonContainer>
							{difficulties.map((diff) => (
								<Button
									key={diff.size}
									onClick={() => changeDifficulty(diff)}
									className={difficulty.size === diff.size ? 'active' : ''}
								>
									{diff.label}
								</Button>
							))}
						</ButtonContainer>
					) : (
						<ButtonContainer>
							<Button onClick={reset}>초기화</Button>
						</ButtonContainer>
					)}
				</Title>
				<PuzzleBox>
					{!file ? (
						<FileUploader
							classes="dnd"
							onSizeError={() => alert('파일 사이즈가 너무 큽니다(2MB)')}
							handleChange={onDrop}
							onDrop={onDrop}
							name="file"
							types={fileTypes}
							multiple={false}
							label="사진을 업로드하면 퍼즐이 만들어집니다."
							required={true}
						/>
					) : (
						<DndProvider backend={MultiBackend} options={HTML5toTouch}>
							<PuzzleGrid $size={difficulty.size}>
								{pieces.map((piece) => (
									<PuzzleTile
										key={piece.id}
										id={piece.id}
										imageUrl={imageUrl}
										posX={piece.posX}
										posY={piece.posY}
										currentPos={piece.currentPos}
										movePiece={movePiece}
										size={difficulty.size}
									/>
								))}
							</PuzzleGrid>
						</DndProvider>
					)}
					{file && <OriginalImage src={imageUrl} alt="Original" />}
				</PuzzleBox>
			</SectionContainer>
		</PuzzleContainer>
	);
}

export default Puzzle;
