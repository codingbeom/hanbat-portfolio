// PuzzleTile.tsx
import { useDrag, useDrop } from 'react-dnd';
import styled from 'styled-components';

const ITEM_TYPE = 'puzzle';

const PuzzlePiece = styled.div<{
	$imageUrl: string;
	$posX: number;
	$posY: number;
	$isDragging?: boolean;
	$size: number;
}>`
	width: 100%;
	height: 100%;
	background-image: ${(props) => `url(${props.$imageUrl})`};
	background-size: ${(props) => `${props.$size * 100}% ${props.$size * 100}%`};
	background-position: ${(props) => `${props.$posX}% ${props.$posY}%`};
	cursor: pointer;
	opacity: ${(props) => (props.$isDragging ? 0.9 : 1)};
	transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease;
	transform: ${(props) =>
		props.$isDragging ? 'scale(0.95) rotate(4deg)' : 'scale(1) rotate(0)'};
	box-shadow: ${(props) =>
		props.$isDragging
			? '0px 6px 20px rgba(0, 0, 0, 0.4)'
			: '0px 2px 10px rgba(0, 0, 0, 0.2)'};
	border: ${(props) => (props.$isDragging ? '4px ridge #4a7cff' : 'none')};
	touch-action: none;
	user-select: none;
	-webkit-tap-highlight-color: transparent;
`;

interface Props {
	id: string;
	imageUrl: string;
	posX: number;
	posY: number;
	currentPos: { row: number; col: number };
	movePiece: (fromId: string, toId: string) => void;
	size: number;
}

const PuzzleTile: React.FC<Props> = ({
	id,
	imageUrl,
	posX,
	posY,
	currentPos,
	movePiece,
	size,
}) => {
	const [{ isDragging }, drag] = useDrag({
		type: ITEM_TYPE,
		item: { id },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	const [, drop] = useDrop({
		accept: ITEM_TYPE,
		drop: (item: { id: string }) => {
			movePiece(item.id, id);
		},
	});

	return (
		<PuzzlePiece
			ref={(node) => drag(drop(node))}
			$imageUrl={imageUrl}
			$posX={posX}
			$posY={posY}
			$isDragging={isDragging}
			$size={size}
		/>
	);
};

export default PuzzleTile;
