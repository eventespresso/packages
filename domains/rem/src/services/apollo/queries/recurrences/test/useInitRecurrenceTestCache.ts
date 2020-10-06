import { useApolloClient } from '@eventespresso/data';

import { WriteQueryOptions } from '@eventespresso/data';

import useRecurrenceQueryOptions from '../useRecurrenceQueryOptions';
import { edge } from './data';

const useInitRecurrenceTestCache = (espressoRecurrences = edge): void => {
	// init hooks
	const client = useApolloClient();
	const queryOptions = useRecurrenceQueryOptions();

	const writeQueryOptions: WriteQueryOptions = {
		...queryOptions,
		data: {
			espressoRecurrences,
		},
	};
	try {
		// write the test data to cache
		client.writeQuery(writeQueryOptions);
	} catch (error) {
		console.error(error);
	}
};
export default useInitRecurrenceTestCache;
