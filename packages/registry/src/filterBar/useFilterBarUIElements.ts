import { useMemo } from 'react';

import { FilterBarUISubscription, FilterBarUIRegistry } from './';
import type { FilterBarUIElementsHook } from './types';
import { useMemoStringify } from '@eventespresso/hooks';

const useFilterBarUIElements: FilterBarUIElementsHook = ({ domain, listId, filterState }) => {
	const registry = useMemo(() => new FilterBarUIRegistry({ domain, listId }), [domain, listId]);
	const { getSubscriptions } = useMemo(() => new FilterBarUISubscription(domain), [domain]);

	const { generateElements } = registry;

	// get all subscriptions for the service
	const subscriptions = getSubscriptions({ listId });

	// invoke all the subscription callbacks
	// to let them register their UI elements
	Object.values(subscriptions).forEach(({ callback }) => {
		callback({ listId, registry });
	});

	// eslint-disable-next-line react-hooks/exhaustive-deps
	return useMemoStringify(generateElements({ filterState }), Object.keys(subscriptions));
};

export default useFilterBarUIElements;
