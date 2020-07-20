import { filterSubscriptionsByOption, SubscriptionManager } from '../subscription';
import type { FilterBarUISubscriptionInterface } from './types';
import { FilterBarServiceType } from './types';

type FBUIS = FilterBarUISubscriptionInterface;

/**
 * D: Domain name e.g. "eventEditor"
 */
class FilterBarUISubscription<D extends string> implements FBUIS {
	private subscriptionManager: SubscriptionManager<D, FilterBarServiceType>;

	constructor(domain: D) {
		this.subscriptionManager = new SubscriptionManager<D, FilterBarServiceType>({
			domain,
			service: FilterBarServiceType.UI,
		});
	}

	subscribe: FBUIS['subscribe'] = (...args) => this.subscriptionManager.subscribe(...args);

	getSubscriptions: FBUIS['getSubscriptions'] = (args) => {
		return filterSubscriptionsByOption(this.subscriptionManager.getSubscriptions, 'listId', args?.listId);
	};
}

export default FilterBarUISubscription;
