import { Options } from 'rrule';

import { RRuleState } from '../../../state';

const computeEnd = ({ mode, after, date }: RRuleState['end']): Partial<Options> => {
	const end: Partial<Options> = {};

	if (mode === 'AFTER') {
		end.count = after;
	}

	if (mode === 'ON_DATE') {
		end.until = date;
	}

	return end;
};

export default computeEnd;
