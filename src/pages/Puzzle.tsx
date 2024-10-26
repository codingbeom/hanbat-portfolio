import PuzzleTile from '@/components/PuzzleTile';
import { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { FileUploader } from 'react-drag-drop-files';
import styled from 'styled-components';

const PuzzleContainer = styled.div`
	width: 100%;
	padding: 40px;
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

	@media (min-width: 950px) {
		flex-direction: row;
		align-items: flex-end;
	}
`;

const Title = styled.div`
	margin-bottom: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;

	h2 {
		font-size: 36px;
		color: #76abaa;
		margin-bottom: 10px;
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	gap: 15px;
	margin-bottom: 20px;
`;

const PuzzleGrid = styled.div<{ $size: number }>`
	width: 400px;
	height: 400px;
	display: grid;
	grid-template-columns: ${(props) => `repeat(${props.$size}, 1fr)`};
	grid-template-rows: ${(props) => `repeat(${props.$size}, 1fr)`};
	gap: 1px;
	background: #333;
`;

const OriginalImage = styled.img`
	width: 400px;
	height: 400px;
	margin-top: 20px;

	@media (min-width: 950px) {
		margin-left: 20px;
	}
`;

const Button = styled.button`
	padding: 10px 20px;
	font-size: 16px;
	font-weight: bold;
	color: black;
	background-color: #76abaa;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s, transform 0.2s;

	&:hover {
		background-color: #649ea1;
		transform: scale(1.05);
	}

	&:active {
		transform: scale(0.95);
	}

	&.active {
		background-color: #4a7cff;
		color: white;
	}
`;

const fileTypes = ['JPEG', 'PNG', 'JPG'];

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
							onDrop={onDrop}
							name="file"
							types={fileTypes}
							multiple={false}
							label="사진을 업로드하면 퍼즐이 만들어집니다."
							required={true}
						/>
					) : (
						<DndProvider backend={HTML5Backend}>
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
