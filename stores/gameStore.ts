import { create } from 'zustand';
import IFieldCage from '@shared/models/fieldCage.model';
import generateField from '@utils/generateField';
import EMPTY_FIELD from '@shared/consts/emptyField';
import openEmptyFields from '@utils/openEmptyFields';
import checkWin from '@utils/checkWin';
import generateEmptyField from '@shared/consts/emptyField';

type gameStatusType = 'inprogress' | 'inactive' | 'lose' | 'win';

interface IGame {
	gameStatus: gameStatusType;
	gameStartTime: Date;
	field: Array<Array<IFieldCage>>;
	fieldPressed: boolean;

	setFieldPressed: (isPressed: boolean) => void;
	startGame: (x: number, y: number) => void;
	openCage: (x: number, y: number) => void;
	changeTag: (x: number, y: number) => void;
	restartGame: () => void;
}

const useGame = create<IGame>((set) => ({
	gameStatus: 'inactive',
	gameStartTime: new Date(),
	field: generateEmptyField(),
	fieldPressed: false,

	setFieldPressed: (isPressed) => set({
		fieldPressed: isPressed,
	}),
	startGame: (x, y) => set({
		gameStatus: 'inprogress',
		gameStartTime: new Date(Date.now()),
		field: [...openEmptyFields(generateField(x, y), x, y)],
	}),	
	openCage: (x, y) => set((prev) => {
		if(prev.field[y][x].tag === 'none')
			prev.field[y][x].opened = true;

		let newStatus: gameStatusType = 'inprogress';

		if(prev.field[y][x].type === 'bomb')
			newStatus = 'lose';
		else if(checkWin(prev.field))
			newStatus = 'win';

		return {
			field: [...openEmptyFields(prev.field, x, y)],
			gameStatus: newStatus,
		};
	}),
	changeTag: (x, y) => set((prev) => {
		switch(prev.field[y][x].tag) {
			case 'none':
				prev.field[y][x].tag = 'flag';
				break;
			case 'flag':
				prev.field[y][x].tag = 'question';
				break;
			case 'question':
				prev.field[y][x].tag = 'none';
				break;
		}

		return {
			field: [...prev.field],
		};
	}),	
	restartGame: () => {
		set({
			gameStatus: 'inactive',
			gameStartTime: new Date(),
			field: generateEmptyField(),
			fieldPressed: false,
		});
	},
}));

export default useGame;
