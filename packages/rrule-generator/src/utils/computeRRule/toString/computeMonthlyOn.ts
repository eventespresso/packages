import { Options } from 'rrule';
import { RRuleState } from '../../../state';

const computeMonthlyOn = (on: RRuleState['repeat']['monthly']['on']): Partial<Options> => ({
	bymonthday: on.day as number,
});

export default computeMonthlyOn;
