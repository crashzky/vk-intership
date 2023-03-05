import BaseIcon from '@assets/field/base.svg';
import BombIcon from '@assets/field/bomb.svg';
import CrossedBombIcon from '@assets/field/crossedBomb.svg';
import FlaggedIcon from '@assets/field/flagged.svg';
import OpenedIcon from '@assets/field/opened.svg';
import QuestionIcon from '@assets/field/question.svg';
import QuestionOpenedIcon from '@assets/field/questionOpened.svg';
import RedBombIcon from '@assets/field/redBomb.svg';

import Num1Icon from '@assets/field/nums/1.svg';
import Num2Icon from '@assets/field/nums/2.svg';
import Num3Icon from '@assets/field/nums/3.svg';
import Num4Icon from '@assets/field/nums/4.svg';
import Num5Icon from '@assets/field/nums/5.svg';
import Num6Icon from '@assets/field/nums/6.svg';
import Num7Icon from '@assets/field/nums/7.svg';
import Num8Icon from '@assets/field/nums/8.svg';

const FIELD_CAGES: Record<string, JSX.Element> = {
	'empty': <BaseIcon />,
	'bomb': <BombIcon />,
	'crossedBomb': <CrossedBombIcon />,
	'flagged': <FlaggedIcon />,
	'opened': <OpenedIcon />,
	'question': <QuestionIcon />,
	'querstionOpened': <QuestionOpenedIcon />,
	'redBomb': <RedBombIcon />,

	'1': <Num1Icon key={1} />,
	'2': <Num2Icon key={2} />,
	'3': <Num3Icon key={3} />,
	'4': <Num4Icon key={4} />,
	'5': <Num5Icon key={5} />,
	'6': <Num6Icon key={6} />,
	'7': <Num7Icon key={7} />,
	'8': <Num8Icon key={8} />,
};

export default FIELD_CAGES;
