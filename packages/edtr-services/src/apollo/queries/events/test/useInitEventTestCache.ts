import { useApolloClient } from '@eventespresso/data';

import { WriteQueryOptions } from '@eventespresso/data';

import useEventQueryOptions from '../useEventQueryOptions';
import { data } from './data';

const useInitEventTestCache = (eventData = data): void => {
	// init hooks
	const client = useApolloClient();
	const queryOptions = useEventQueryOptions();

	const writeQueryOptions: WriteQueryOptions = {
		...queryOptions,
		data: eventData,
	};
	try {
		// write the test data to cache
		client.writeQuery(writeQueryOptions);
	} catch (error) {
		console.error(error);
	}
};
export default useInitEventTestCache;
