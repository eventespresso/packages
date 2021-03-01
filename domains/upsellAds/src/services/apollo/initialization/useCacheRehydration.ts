import { useEffect } from 'react';

import { useUpdateCache, useIsRehydrated } from '@eventespresso/data';

import { useUpsellAdQueryOptions } from '../queries';

export const useCacheRehydration = (): boolean => {
	const [isRehydrated, setIsRehydrated] = useIsRehydrated();

	const upsellAdQueryOptions = useUpsellAdQueryOptions();
	const updateCache = useUpdateCache();

	useEffect(() => {
		if (isRehydrated) {
			return;
		}

		const upsellAd = window.eventEspressoData?.upsellAdEditor?.upsellAd;

		/* Rehydrate upsell data */
		updateCache({
			...upsellAdQueryOptions,
			data: {
				espressoUpsellAd: upsellAd,
			},
		});

		setIsRehydrated(true);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return isRehydrated;
};
