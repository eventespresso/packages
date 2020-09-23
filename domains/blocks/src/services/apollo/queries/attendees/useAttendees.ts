import type { FetchQueryResult, AttendeesQueryWhereArgs } from '@eventespresso/data';
import { useAttendeesQuery } from '@eventespresso/data';

import { AttendeesList } from '@blocksServices/apollo/types';
import useAttendeesQueryOptions from './useAttendeesQueryOptions';

type UseAttendees = (whereArgs: AttendeesQueryWhereArgs, limit?: number) => FetchQueryResult<AttendeesList>;

const useAttendees: UseAttendees = (where, limit) => {
	const queryOptions = useAttendeesQueryOptions(where, limit);
	return useAttendeesQuery(queryOptions);
};

export default useAttendees;
