import type { QueryHookOptions, QueryResult as ApolloQueryResult } from '@apollo/react-hooks';

import { useCacheQuery } from '../';
import type { RecurrencesList, RecurrencesQueryArgs } from './types';
import type { EntityEdge } from '../../types';

type QueryOptions<Edge extends EntityEdge> = QueryHookOptions<RecurrencesList<Edge>, RecurrencesQueryArgs>;
type QueryResult<Edge extends EntityEdge> = ApolloQueryResult<RecurrencesList<Edge>, RecurrencesQueryArgs>;

const useRecurrencesQuery = <RecurrenceEdge extends EntityEdge>(
	queryOptions: QueryOptions<RecurrenceEdge>
): QueryResult<RecurrenceEdge> => {
	return useCacheQuery<RecurrencesList<RecurrenceEdge>>(queryOptions);
};

export default useRecurrencesQuery;
