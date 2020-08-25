import { useCallback } from 'react';
import { parseISO } from 'date-fns';

import { useTimeZoneTime } from './';

/**
 * Converts the given date or ISO string from site to UTC ISO string
 */
const useSiteDateToUtcISO = (): ((date: string | Date) => string) => {
	const { siteTimeToUtc } = useTimeZoneTime();
	return useCallback(
		(date) => {
			const parsedDate = date instanceof Date ? date : parseISO(date);
			return siteTimeToUtc(parsedDate).toISOString();
		},
		[siteTimeToUtc]
	);
};

export default useSiteDateToUtcISO;
