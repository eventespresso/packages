import { Options } from 'rrule';

import { isValid } from 'date-fns';
import { RRuleState } from '../../../state';

const computeStart = ({ date }: RRuleState['start']): Partial<Options> => {
	const dtstart = isValid(date) ? date : new Date();
	return {
		dtstart,
	};
};

export default computeStart;
