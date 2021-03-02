import { useEffect } from 'react';

import { useUpdateCache, useIsRehydrated } from '@eventespresso/data';

import { useUpsellAdQueryOptions } from '../queries';
import { useDomData } from '../../hooks';

export const useCacheRehydration = (): boolean => {
	const [isRehydrated, setIsRehydrated] = useIsRehydrated();

	const upsellAdQueryOptions = useUpsellAdQueryOptions();
	const updateCache = useUpdateCache();
	const upsellAd = useDomData()?.upsellAd;

	useEffect(() => {
		if (isRehydrated) {
			return;
		}

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
