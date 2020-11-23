import { Options } from 'rrule';
import { isValid } from 'date-fns';

import { NOW } from '@eventespresso/constants';
import { RRuleState } from '../../../state';

const computeStart = ({ date }: RRuleState['start']): Partial<Options> => {
	const dtstart = isValid(date) ? date : NOW;
	return {
		dtstart,
	};
};

export default computeStart;
