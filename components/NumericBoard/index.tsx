import Props from './NumericBoard.props';

import NUMBERS from '@shared/consts/numbers';

const NumericBoard: React.FC<Props> = ({ className = '', value, ...props }) => {
	return (
		<div className={`${className} grid grid-cols-3 w-[39px] h-[23px]`} {...props}>
			{value < 100 ? NUMBERS['0'] : ''}
			{value < 10 ? NUMBERS['0'] : ''}
			{value.toString().split('').map((i) => NUMBERS[i])}
		</div>
	);
};

export default NumericBoard;
