import useEventId from '../events/useEventId';
import { GET_DATETIMES } from '../datetimes';
import { DatetimesList, DatetimesQueryArgs, ReadQueryOptions } from '@eventespresso/data';
import { DatetimeEdge } from '../../';
import { useMemoStringify } from '@eventespresso/services';

type DatetimesQueryOptions = ReadQueryOptions<DatetimesList<DatetimeEdge>, DatetimesQueryArgs>;

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
