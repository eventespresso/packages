import { useMemo } from 'react';

import type { User, Viewer } from './types';
import useCurrentUserQueryOptions from './useCurrentUserQueryOptions';
import { useCacheQuery } from '../';

/**
 * A custom react hook for retrieving CurrentUser
 */
const useCurrentUser = (): User => {
	const options = useCurrentUserQueryOptions();
	const { data } = useCacheQuery<Viewer>(options);

	const dataStr = JSON.stringify(data?.viewer);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	return useMemo(() => data?.viewer, [dataStr]);
};

export default useCurrentUser;
