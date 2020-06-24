import { parseISO } from 'date-fns';

import type { Datetime } from '@eventespresso/edtr-services';

const isInMonth = (date: Datetime, month: number): boolean => {
	return parseISO(date.startDate).getMonth() === month;
};

export default isInMonth;
