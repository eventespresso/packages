import { useCallback } from 'react';
import { parseISO } from 'date-fns';

import { useTimeZoneTime } from './';

/**
 * Converts the given date or ISO string from UTC to site time date object
 */
const useUtcISOToSiteDate = (): ((date: string | Date) => Date) => {
	const { utcToSiteTime } = useTimeZoneTime();
	return useCallback(
		(date) => {
			const parsedDate = date instanceof Date ? date : parseISO(date);
			return utcToSiteTime(parsedDate);
		},
		[utcToSiteTime]
	);
};

export default useUtcISOToSiteDate;
