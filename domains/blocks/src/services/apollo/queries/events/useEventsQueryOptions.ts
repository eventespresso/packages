import { useMemo } from 'react';

import type { QueryOptions } from '@eventespresso/data';

import { EventsList } from '@blocksServices/apollo/types';
import { GET_EVENTS } from './queries';

const useEventsQueryOptions = (): QueryOptions<EventsList> => {
	return useMemo<QueryOptions<EventsList>>(
		() => ({
			query: GET_EVENTS,
			variables: {
				first: 100,
			},
			fetchPolicy: 'cache-first',
		}),
		[]
	);
};

export default useEventsQueryOptions;
