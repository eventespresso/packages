import { useMemo } from 'react';

import { GET_GENERAL_SETTINGS } from './queries';
import type { CacheQueryOptions } from '../';

const useGeneralSettingsQueryOptions = (): CacheQueryOptions => {
	const options = useMemo<CacheQueryOptions>(
		() => ({
			query: GET_GENERAL_SETTINGS,
		}),
		[]
	);

	return options;
};

export default useGeneralSettingsQueryOptions;
