import { useMemo } from 'react';

import type { CacheQueryOptions } from '@eventespresso/data';
import { useUpsellAdId } from './useUpsellAdId';
import { GET_UPSELL } from './queries';

export const useUpsellAdQueryOptions = (): CacheQueryOptions => {
	const id = useUpsellAdId();

	return useMemo(
		() => ({
			query: GET_UPSELL,
			variables: {
				id,
			},
		}),
		[id]
	);
};
