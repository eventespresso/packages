import type { FetchQueryResult } from '@eventespresso/data';
import { useEventsQuery } from '@eventespresso/data';

import { EventsList } from '@blocksServices/apollo/types';
import useEventsQueryOptions from './useEventsQueryOptions';

const useEvents = (): FetchQueryResult<EventsList> => {
	const queryOptions = useEventsQueryOptions();
	return useEventsQuery(queryOptions);
};

export default useEvents;
