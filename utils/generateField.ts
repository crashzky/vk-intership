import { COUNT_BOMBS } from '@shared/consts/common';
import generateEmptyField from '@shared/consts/emptyField';
import IFieldCage, { fieldType } from '@shared/models/fieldCage.model';

function generateField(x: number, y: number): IFieldCage[][] {
	const field = generateEmptyField();

	field[y][x].opened = true;

	for(let i = 0; i < COUNT_BOMBS; i++) { //generate bombs
		const randX = Math.floor(Math.random() * 15);
		const randY = Math.floor(Math.random() * 15);

		if(x !== randX && y !== randY)
			field[randY][randX].type = 'bomb';
	}
	
	for(let x = 0; x < 16; x++) { //add numbers
		for(let y = 0; y < 16; y++) {
			let count = 0;

			if(field[y][x].type === 'bomb')
				continue;

			if(y > 0 && field[y - 1][x].type === 'bomb')
				count++;

			if(y > 0 && x < 15 && field[y - 1][x + 1].type === 'bomb')
				count++;

			if(x < 15 && field[y][x + 1].type === 'bomb')
				count++;

			if(y < 15 && x < 15 && field[y + 1][x + 1].type === 'bomb')
				count++;

			if(y < 15 && field[y + 1][x].type === 'bomb')
				count++;

			if(y < 15 && x > 0 && field[y + 1][x - 1].type === 'bomb')
				count++;

			if(x > 0 && field[y][x - 1].type === 'bomb')
				count++;

			if(y > 0 && x > 0 && field[y - 1][x - 1].type === 'bomb')
				count++;

			if(count !== 0)
				field[y][x].type = count.toString() as fieldType;
		}
	}

	return field;
}

export default generateField;
