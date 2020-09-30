import { useMemo } from 'react';

import type { QueryHookOptions } from '@eventespresso/data';

import { DatetimesList } from '@blocksServices/apollo/types';
import { GET_DATETIMES } from './queries';

const useDatetimesQueryOptions = (event?: string): QueryHookOptions<DatetimesList> => {
	return useMemo<QueryHookOptions<DatetimesList>>(
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
