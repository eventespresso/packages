import { useQuery } from '@apollo/react-hooks';

import { useSystemNotifications } from '@eventespresso/toaster';
import { GET_CURRENT_USER } from '.';
import type { FetchQueryResult } from '../types';
import { Viewer } from '@eventespresso/services';

const useFetchCurrentUser = (): FetchQueryResult<Viewer> => {
	const toaster = useSystemNotifications();

	const result = useQuery<Viewer>(GET_CURRENT_USER, {
		// only display error, not loading or success
		onError: (error): void => {
			toaster.error({ message: error.message });
		},
	});

	return result;
};

export default useFetchCurrentUser;
