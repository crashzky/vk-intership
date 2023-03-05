import FieldCage from '@components/FieldCage';
import Props from './Field.props';

const Field: React.FC<Props> = ({ className = '', ...props }) => {
	const emptyArray = (new Array(16)).fill(null);

	return (
		<div
			className={`${className} border-[4px] border-gray grid grid-cols-[repeat(16,16px)] grid-rows-[repeat(16,16px)]`}
			{...props}
		>
			{emptyArray.map((i, x) => {
				return emptyArray.map((j, y) => {
					return <FieldCage x={x} y={y} key={`${x}-${y}`} />;
				});
			})}
		</div>
	);
};

export default Field;
