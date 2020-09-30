import useEventId from '../events/useEventId';
import { GET_DATETIMES } from '../datetimes';
import { DatetimesList, DatetimesQueryArgs, CacheQueryOptions } from '@eventespresso/data';
import { DatetimeEdge } from '../../';
import { useMemoStringify } from '@eventespresso/hooks';

type DatetimesQueryOptions = CacheQueryOptions<DatetimesList<DatetimeEdge>, DatetimesQueryArgs>;

const useDatetimeQueryOptions = (): DatetimesQueryOptions => {
	const eventId = useEventId();

	const options: DatetimesQueryOptions = {
		query: GET_DATETIMES,
		variables: {
			where: {
				eventId,
			},
		},
	};

	return useMemoStringify(options, [eventId]);
};

export default useDatetimeQueryOptions;
