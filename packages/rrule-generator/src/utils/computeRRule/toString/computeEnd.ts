import { Options } from 'rrule';
import { toDate } from 'date-fns';

import { RRuleState } from '../../../state';

const computeEnd = ({ mode, after, date }: RRuleState['end']): Partial<Options> => {
	const end: Partial<Options> = {};

	if (mode === 'AFTER') {
		end.count = after;
	}

	if (mode === 'ON_DATE') {
		end.until = toDate(date);
	}

	return end;
};

export default computeEnd;
