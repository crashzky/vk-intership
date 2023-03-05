import IFieldCage from '../models/fieldCage.model';

function generateEmptyField(): IFieldCage[][] {
	const EMPTY_FIELD: IFieldCage[][] = [];

	for(let y = 0; y < 16; y++) {
		EMPTY_FIELD.push([]);
		
		for(let x = 0; x < 16; x++) {
			EMPTY_FIELD[y].push({
				type: 'empty',
				opened: false,
				tag: 'none',
			});
		}
	}

	return EMPTY_FIELD;
}

export default generateEmptyField;
