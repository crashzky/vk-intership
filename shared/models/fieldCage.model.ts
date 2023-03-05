interface IFieldCage {
	type: fieldType;
	opened: boolean;
	tag: 'flag' | 'question' | 'none';
}

export type fieldType = 'empty' | 'bomb' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

export default IFieldCage;
