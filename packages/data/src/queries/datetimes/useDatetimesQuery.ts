import { QueryHookOptions } from '@apollo/react-hooks';
import { QueryResult as ApolloQueryResult } from '@apollo/react-common';

import { useCacheQuery } from '../';
import { DatetimesList, DatetimesQueryArgs } from './types';
import { EntityEdge } from '../../types';

type QueryOptions<Edge extends EntityEdge> = QueryHookOptions<DatetimesList<Edge>, DatetimesQueryArgs>;
type QueryResult<Edge extends EntityEdge> = ApolloQueryResult<DatetimesList<Edge>, DatetimesQueryArgs>;

const useDatetimesQuery = <DatetimeEdge extends EntityEdge>(
  queryOptions: QueryOptions<DatetimeEdge>,
): QueryResult<DatetimeEdge> => {
  return useCacheQuery<DatetimesList<DatetimeEdge>>(queryOptions);
};

export default useDatetimesQuery;
