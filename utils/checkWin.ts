import { COUNT_BOMBS } from '@shared/consts/common';
import IFieldCage from '@shared/models/fieldCage.model';

function checkWin(field: IFieldCage[][]): boolean {
	let countClosed = 0;

	field.forEach((i) => i.forEach((j) => {
		if(!j.opened)
			countClosed++;
	}));

	return countClosed === COUNT_BOMBS;
}

export default checkWin;
