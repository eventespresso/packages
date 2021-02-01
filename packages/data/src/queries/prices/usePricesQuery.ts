import type { QueryHookOptions, QueryResult as ApolloQueryResult } from '@apollo/react-hooks';

import { useCacheQuery } from '../';
import type { PricesList, PricesQueryArgs } from './types';
import type { EntityEdge } from '../../types';

type QueryOptions<Edge extends EntityEdge> = QueryHookOptions<PricesList<Edge>, PricesQueryArgs>;
type QueryResult<Edge extends EntityEdge> = ApolloQueryResult<PricesList<Edge>, PricesQueryArgs>;

const usePricesQuery = <PriceEdge extends EntityEdge>(
	queryOptions: QueryOptions<PriceEdge>
): QueryResult<PriceEdge> => {
	return useCacheQuery<PricesList<PriceEdge>>(queryOptions);
};

export default usePricesQuery;
