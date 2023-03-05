import { useEffect } from 'react';
import { addMinutes } from 'date-fns';
import { useStopwatch, useTimer } from 'react-timer-hook';
import useGame from '@stores/gameStore';
import NumericBoard from '@components/NumericBoard';
import SmileButton from '@components/SmileButton';

import Props from './Header.props';

const Header: React.FC<Props> = ({ className = '', ...props }) => {
	const { gameStartTime, gameStatus } = useGame();

	const { minutes, restart, pause } = useTimer({ expiryTimestamp: addMinutes(gameStartTime, 40), autoStart: false });
	const { minutes: stopwatchMinutes, reset, pause: stopwatchPause } = useStopwatch({ autoStart: false });

	useEffect(() => {
		switch(gameStatus) {
			case 'inprogress':
				restart(addMinutes(gameStartTime, 40));
				reset();
				break;
			case 'lose':
			case 'win':
				pause();
				stopwatchPause();
				break;
		}
	}, [gameStatus]);

	return (
		<div className={`${className} flex justify-between border-[4px] border-b-0 border-gray p-2`} {...props}> 
			<NumericBoard value={minutes} />
			<SmileButton />
			<NumericBoard value={stopwatchMinutes} />
		</div>
	);
};

export default Header;
