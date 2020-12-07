import { useEffect, useRef } from 'react';
import { useIsRehydrated, useTicketsMeta } from '@eventespresso/edtr-services';

import useCacheRehydrationData from './useCacheRehydrationData';

/**
 * Returns true if the cache has been rehydrated, false otherwise
 */
const useCacheRehydration = (): boolean => {
	const [isRehydrated] = useIsRehydrated();

	const { ticketsMeta } = useCacheRehydrationData();

	const { mergeMetaMap } = useTicketsMeta();

	const initialized = useRef(false);

	useEffect(() => {
		// Make sure this rehydration happens after core
		if (initialized.current || !isRehydrated) {
			return;
		}
		// it's possible that other addons may add their met,
		// so we will merge it instead of resetting it
		mergeMetaMap(ticketsMeta);

		// switch the flag
		initialized.current = true;
	}, [isRehydrated, mergeMetaMap, ticketsMeta]);

	return initialized.current;
};

export default useCacheRehydration;
