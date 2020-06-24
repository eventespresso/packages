import { useApolloClient } from '@eventespresso/data';

import { WriteQueryOptions } from '@eventespresso/data';

import useDatetimeQueryOptions from '../useDatetimeQueryOptions';
import { edge } from './data';

const useInitDatetimeTestCache = (espressoDatetimes = edge): void => {
	// init hooks
	const client = useApolloClient();
	const queryOptions = useDatetimeQueryOptions();

	const writeQueryOptions: WriteQueryOptions = {
		...queryOptions,
		data: {
			espressoDatetimes,
		},
	};
	try {
		// write the test data to cache
		client.writeQuery(writeQueryOptions);
	} catch (error) {
		console.error(error);
	}
};
export default useInitDatetimeTestCache;
