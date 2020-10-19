import { useMemo } from 'react';

import { GET_CURRENT_USER } from './queries';
import type { CacheQueryOptions } from '../';

const useCurrentUserQueryOptions = (): CacheQueryOptions => {
	const options = useMemo<CacheQueryOptions>(
		() => ({
			query: GET_CURRENT_USER,
		}),
		[]
	);

	return options;
};

export default useCurrentUserQueryOptions;
