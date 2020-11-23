import { NOW } from '@eventespresso/constants';

import diff from './diff';

const switchTenseForDate = (date: Date, textForPastDate: string, textForFutureDate: string): string => {
	return diff('minutes', date, NOW) < 0 ? textForPastDate : textForFutureDate;
};

export default switchTenseForDate;
