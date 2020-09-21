import { useMemo } from 'react';

import type { CurrentUserProps, Viewer } from '@eventespresso/services';

import useCurrentUserQueryOptions from './useCurrentUserQueryOptions';
import { useCacheQuery } from '../';

/**
 * A custom react hook for retrieving CurrentUser
 */
const useCurrentUser = (): CurrentUserProps => {
	const options = useCurrentUserQueryOptions();
	const { data } = useCacheQuery<Viewer>(options);

	const dataStr = JSON.stringify(data?.viewer);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	return useMemo(() => data?.viewer, [dataStr]);
};

export default useCurrentUser;
