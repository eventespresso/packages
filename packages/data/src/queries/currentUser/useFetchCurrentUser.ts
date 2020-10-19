import { useMemo } from 'react';
import { QueryHookOptions, useQuery } from '@apollo/react-hooks';

import { GET_CURRENT_USER } from './';
import { events } from '../../events';
import type { FetchQueryResult } from '../types';
import type { Viewer } from '@eventespresso/services';

const useFetchCurrentUser = (): FetchQueryResult<Viewer> => {
	const options = useMemo<QueryHookOptions<Viewer>>(
		() => ({
			// only display error, not loading or success
			onError: (error): void => {
				events.emit('fetchUser.error', error);
			},
		}),
		[]
	);
	const result = useQuery<Viewer>(GET_CURRENT_USER, options);

	return result;
};

export default useFetchCurrentUser;
