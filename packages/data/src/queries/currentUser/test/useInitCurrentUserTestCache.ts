import { WriteQueryOptions, useApolloClient } from '@eventespresso/data';
import type { Viewer } from '@eventespresso/services';

import useCurrentUserQueryOptions from '../useCurrentUserQueryOptions';
import { currentUser } from './data';

const useInitCurrentUserTestCache = (viewer = currentUser): void => {
	// init hooks
	const client = useApolloClient();
	const queryOptions = useCurrentUserQueryOptions();

	const writeQueryOptions: WriteQueryOptions<Viewer> = {
		...queryOptions,
		data: {
			viewer,
		},
	};
	try {
		// write the test data to cache
		client.writeQuery(writeQueryOptions);
	} catch (error) {
		console.error(error);
	}
};
export default useInitCurrentUserTestCache;
