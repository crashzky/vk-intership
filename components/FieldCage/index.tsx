import { MouseEventHandler, useCallback, useMemo, useState } from 'react';
import FIELD_CAGES from '@shared/consts/fieldCages';
import useGame from '@stores/gameStore';

import Props from './FieldCage.props';

const FieldCage: React.FC<Props> = ({ className = '', x, y, ...props }) => {
	const { field, gameStatus, setFieldPressed, startGame, openCage, changeTag } = useGame();

	const [isPressed, setIsPressed] = useState(false);

	const icon = useMemo(() => {
		const { type, opened, tag } = field[y][x];

		if(isPressed)
			return FIELD_CAGES['opened'];
		else if (opened && type == 'empty') //открытое пустое поле
			return FIELD_CAGES['opened'];
		else if(opened && type === 'bomb') //открытая бомба
			return FIELD_CAGES['redBomb'];
		else if(opened && type !== 'bomb') //открытая цифра
			return FIELD_CAGES[type];
		else if(gameStatus === 'lose' || gameStatus === 'win') { //проигрышь
			if(type === 'bomb') //не отрытая бомба
				return FIELD_CAGES['bomb'];
			else if (tag === 'flag') //помечено флагом, но оказалась не бомба
				return FIELD_CAGES['crossedBomb'];
			else
				return FIELD_CAGES[type];
		}
		else {
			if(tag === 'flag') //закрытое помеченное флагом поле
				return FIELD_CAGES['flagged'];
			else if(tag === 'question') //закрытое помеченное вопросом поле
				return FIELD_CAGES['question'];
			else //закрытое поле
				return FIELD_CAGES['empty'];
		}
	}, [field, isPressed, x, y]);

	const onPress = useCallback(() => {
		const { opened, tag } = field[x][y];

		if(!opened && tag === 'none') {
			setFieldPressed(true);
			setIsPressed(true);
		}
	}, [field, x, y]);

	const onMouseUp: MouseEventHandler<HTMLButtonElement> = (e) => {
		setIsPressed(false);
		setFieldPressed(false);

		if(gameStatus === 'inactive')
			startGame(x, y);
		else if(gameStatus === 'inprogress' && e.button === 0)
			openCage(x, y);
		else if(gameStatus === 'inprogress')
			changeTag(x, y);
	};	

	const onMouseLeave = () => {
		setFieldPressed(false);
		setIsPressed(false);
	};

	return (
		<button
			className={`${className} p-0 m-0 bg-none w-4 h-4`}
			onMouseDown={onPress}
			onMouseLeave={onMouseLeave}
			onMouseUp={onMouseUp}
			onContextMenu={(e) => e.preventDefault()}
			{...props}
		>
			{icon || ''}
		</button>
	);
};

export default FieldCage;
