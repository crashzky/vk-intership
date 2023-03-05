import { useMemo, useState } from 'react';
import useGame from '@stores/gameStore';
import Props from './SmileButton.props';

import HappySmile from '@assets/smiles/happy.svg';
import HappyPressedSmile from '@assets/smiles/happyPressed.svg';
import SadSmile from '@assets/smiles/sad.svg';
import AfraidSmile from '@assets/smiles/afraid.svg';
import SteepSmile from '@assets/smiles/steep.svg';

const SmileButton: React.FC<Props> = ({ className = '', ...props }) => {
	const { gameStatus, fieldPressed, restartGame } = useGame();
	
	const [isPressed, setIsPressed] = useState(false);

	const icon = useMemo(() => {
		if(isPressed)
			return <HappyPressedSmile />;
		else if(fieldPressed)
			return <AfraidSmile />;
		else {
			switch(gameStatus) {
				case 'inactive':
				case 'inprogress':
					return <HappySmile />;
				case 'lose':
					return <SadSmile />;
				case 'win':
					return <SteepSmile />;
			}
		}
	}, [gameStatus, isPressed, fieldPressed]);

	return (
		<button
			className={`${className} p-0 m-0 bg-none`}
			onMouseDown={() => setIsPressed(true)}
			onMouseUp={() => {
				setIsPressed(false);
				restartGame();
			}}
			onMouseLeave={() => setIsPressed(false)}
			{...props}
		>
			{icon}
		</button>
	);
};

export default SmileButton;
