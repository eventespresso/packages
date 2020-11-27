import { useCallback } from 'react';
import { useApolloClient, DataProxy, OperationVariables } from '@apollo/react-hooks';

type Callback<T = any, V = OperationVariables> = (options: DataProxy.Query<V, T>) => T;

const useLazyCacheQuery = <T = any, V = OperationVariables>(): Callback<T, V> => {
	const client = useApolloClient();

	return useCallback(
		(options) => {
			let data: T;
			try {
				data = client.readQuery(
					options,
					true // allow `readQuery` to return optimistic results
				);
			} catch (error) {
				// eat it
			}
			return data;
		},
		[client]
	);
};

export default useLazyCacheQuery;
