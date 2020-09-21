import { useQuery } from '@apollo/react-hooks';

import { GET_CURRENT_USER } from './';
import type { FetchQueryResult } from '../types';
import type { Viewer } from '@eventespresso/services';

const useFetchCurrentUser = (): FetchQueryResult<Viewer> => {
	const result = useQuery<Viewer>(GET_CURRENT_USER, {
		// only display error, not loading or success
		onError: (error): void => {
			console.error(error.message);
		},
	});

	return result;
};

export default useFetchCurrentUser;
