import { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import type { QueryHookOptions, QueryResult } from '@apollo/client';

const useCacheQuery = <TData = any>(queryOptions: QueryHookOptions<TData>): QueryResult<TData> => {
	const options = useMemo<QueryHookOptions<TData>>(() => ({ fetchPolicy: 'cache-only', ...queryOptions }), [
		queryOptions,
	]);
	return useQuery<TData>(options.query, options);
};

export default useCacheQuery;
