import { parseISO } from 'date-fns';

import { LOCALIZED_DATE_FULL_FORMAT, TIME_ONLY_12H_SHORT_FORMAT } from '@eventespresso/constants';
import type { TimeZoneTime } from '@eventespresso/services';

export const formatDate = (date: string, format: TimeZoneTime['formatForSite']): string => {
	const dateObject = parseISO(date);
	return `${format(dateObject, LOCALIZED_DATE_FULL_FORMAT)} ${format(dateObject, TIME_ONLY_12H_SHORT_FORMAT)}`;
};
