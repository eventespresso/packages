import type { QueryHookOptions, QueryResult as ApolloQueryResult } from '@apollo/react-hooks';

import { useCacheQuery } from '../';
import type { EventsList, EventsQueryArgs } from './types';
import type { EntityEdge } from '../../types';

type QueryOptions<Edge extends EntityEdge> = QueryHookOptions<EventsList<Edge>, EventsQueryArgs>;
type QueryResult<Edge extends EntityEdge> = ApolloQueryResult<EventsList<Edge>, EventsQueryArgs>;

const useEventsQuery = <EventEdge extends EntityEdge>(
	queryOptions: QueryOptions<EventEdge>
): QueryResult<EventEdge> => {
	return useCacheQuery<EventsList<EventEdge>>(queryOptions);
};

export default useEventsQuery;
