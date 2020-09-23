import { useMemo } from 'react';

import type { QueryOptions } from '@eventespresso/data';

import { DatetimesList } from '@blocksServices/apollo/types';
import { GET_DATETIMES } from './queries';

const useDatetimesQueryOptions = (event?: string): QueryOptions<DatetimesList> => {
	return useMemo<QueryOptions<DatetimesList>>(
		() => ({
			query: GET_DATETIMES,
			variables: {
				where: {
					event,
				},
			},
			fetchPolicy: 'cache-first',
		}),
		[event]
	);
};

export default useDatetimesQueryOptions;
