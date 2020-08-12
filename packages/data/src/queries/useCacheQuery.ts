import { useQuery, QueryHookOptions } from '@apollo/react-hooks';
import { QueryResult } from '@apollo/react-common';
import { useMemo } from 'react';

const useCacheQuery = <TData = any>(queryOptions: QueryHookOptions<TData>): QueryResult<TData> => {
	const options = useMemo<QueryHookOptions<TData>>(() => ({ fetchPolicy: 'cache-only', ...queryOptions }), [
		queryOptions,
	]);
	return useQuery<TData>(options.query, options);
};

export default useCacheQuery;
