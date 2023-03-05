import IFieldCage from '@shared/models/fieldCage.model';

function openEmptyFields(field: IFieldCage[][], x: number, y: number): IFieldCage[][] {
	if(field[y][x].type === 'empty') {
		if(y > 0 && !field[y - 1][x].opened) {
			field[y - 1][x].opened = true;

			if(field[y - 1][x].type === 'empty')
				field = openEmptyFields(field, y - 1, x);
		}

		if(y > 0 && x < 15 && !field[y - 1][x + 1].opened) {
			field[y - 1][x + 1].opened = true;

			if(field[y - 1][x + 1].type === 'empty')
				field = openEmptyFields(field, y - 1, x + 1);
		}

		if(x < 15 && !field[y][x + 1].opened) {
			field[y][x + 1].opened = true;

			if(field[y][x + 1].type === 'empty')
				field = openEmptyFields(field, y, x + 1);
		}

		if(y < 15 && x < 15 && !field[y + 1][x + 1].opened) {
			field[y + 1][x + 1].opened = true;

			if(field[y + 1][x + 1].type === 'empty')
				field = openEmptyFields(field, y + 1, x + 1);
		}

		if(y < 15 && !field[y + 1][x].opened) {
			field[y + 1][x].opened = true;

			if(field[y + 1][x].type === 'empty')
				field = openEmptyFields(field, y + 1, x);
		}

		if(y < 15 && x > 0 && !field[y + 1][x - 1].opened) {
			field[y + 1][x - 1].opened = true;

			if(field[y + 1][x - 1].type === 'empty')
				field = openEmptyFields(field, y + 1, x - 1);
		}

		if(x > 0 && !field[y][x - 1].opened) {
			field[y][x - 1].opened = true;

			if(field[y][x - 1].type === 'empty')
				field = openEmptyFields(field, y, x - 1);
		}

		if(x > 0 && y > 0 && !field[y - 1][x - 1].opened) {
			field[y - 1][x - 1].opened = true;

			if(field[y - 1][x - 1].type === 'empty')
				field = openEmptyFields(field, y - 1, x - 1);
		}
	}

	return [...field];
}

export default openEmptyFields;
