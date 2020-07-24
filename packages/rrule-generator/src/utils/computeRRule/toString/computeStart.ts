import { Options } from 'rrule';

import { isValid, toDate } from 'date-fns';
import { RRuleState } from '../../../state';

const computeStart = ({ date }: RRuleState['start']): Partial<Options> => {
	let dtstart = toDate(date);
	if (!isValid(date)) {
		dtstart = new Date();
	}
	return {
		dtstart,
	};
};

export default computeStart;
