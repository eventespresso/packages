import type { FetchQueryResult } from '@eventespresso/data';
import { useDatetimesQuery } from '@eventespresso/data';

import { DatetimesList } from '@blocksServices/apollo/types';
import useDatetimesQueryOptions from './useDatetimesQueryOptions';

const useDatetimes = (event?: string): FetchQueryResult<DatetimesList> => {
	const queryOptions = useDatetimesQueryOptions(event);
	return useDatetimesQuery(queryOptions);
};

export default useDatetimes;
