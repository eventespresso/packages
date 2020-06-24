import { parseISO } from 'date-fns';

import type { Datetime } from '@eventespresso/edtr-services';

const isInYear = (date: Datetime, year: number): boolean => {
	return parseISO(date.startDate).getFullYear() === year;
};

export default isInYear;
