import { Options } from 'rrule';

import { RRuleState } from '../../../state';

import computeYearly from './computeYearly';
import computeMonthly from './computeMonthly';
import computeWeekly from './computeWeekly';
import computeDaily from './computeDaily';
import computeHourly from './computeHourly';

const computeRepeat = ({
	frequency,
	yearly,
	monthly,
	weekly,
	daily,
	hourly,
}: RRuleState['repeat']): Partial<Options> => {
	switch (frequency) {
		case 'YEARLY': {
			return computeYearly(yearly);
		}
		case 'MONTHLY': {
			return computeMonthly(monthly);
		}
		case 'WEEKLY': {
			return computeWeekly(weekly);
		}
		case 'DAILY': {
			return computeDaily(daily);
		}
		case 'HOURLY': {
			return computeHourly(hourly);
		}
		default:
			return {};
	}
};

export default computeRepeat;
