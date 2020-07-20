import { FilterBarUISubscription, FilterBarUIRegistry } from './';
import type { FilterBarUIElementsHook } from './types';

const useFilterBarUIElements: FilterBarUIElementsHook = ({ domain, listId, filterState }) => {
	const registry = new FilterBarUIRegistry({ domain, listId });
	const { getSubscriptions } = new FilterBarUISubscription(domain);

	const { generateElements } = registry;

	// get all subscriptions for the service
	const subscriptions = getSubscriptions({ listId });

	// invoke all the subscription callbacks
	// to let them register their UI elements
	Object.values(subscriptions).forEach(({ callback }) => {
		callback({ listId, registry });
	});
	return generateElements({ filterState });
};

export default useFilterBarUIElements;
