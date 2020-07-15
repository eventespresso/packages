import { QueryHookOptions } from '@apollo/react-hooks';
import { QueryResult as ApolloQueryResult } from '@apollo/react-common';

import { useCacheQuery } from '../';
import type { AttendeesList, AttendeesQueryArgs } from './types';
import type { EntityEdge } from '../../types';

type QueryOptions<Edge extends EntityEdge> = QueryHookOptions<AttendeesList<Edge>, AttendeesQueryArgs>;
type QueryResult<Edge extends EntityEdge> = ApolloQueryResult<AttendeesList<Edge>, AttendeesQueryArgs>;

const useAttendeesQuery = <AttendeeEdge extends EntityEdge>(
	queryOptions: QueryOptions<AttendeeEdge>
): QueryResult<AttendeeEdge> => {
	return useCacheQuery<AttendeesList<AttendeeEdge>>(queryOptions);
};

export default useAttendeesQuery;
