import { useMemo } from 'react';

import type { DatetimesList, DatetimesQueryArgs, CacheQueryOptions } from '@eventespresso/data';

import useEventId from '../events/useEventId';
import { GET_DATETIMES } from '../datetimes';
import type { DatetimeEdge } from '../../';

type DatetimesQueryOptions = CacheQueryOptions<DatetimesList<DatetimeEdge>, DatetimesQueryArgs>;

const useDatetimeQueryOptions = (): DatetimesQueryOptions => {
	const eventId = useEventId();

	return useMemo<DatetimesQueryOptions>(() => {
		return {
			query: GET_DATETIMES,
			variables: {
				where: {
					eventId,
				},
			},
		};
	}, [eventId]);
};

export default useDatetimeQueryOptions;
