import { filterSubscriptionsByOption, SubscriptionManager } from '../subscription';
import type { EntityCardDetailsSubscriptionInterface } from './types';
import { serviceName as service } from './constants';

type EASI = EntityCardDetailsSubscriptionInterface;

/**
 * D: Domain name e.g. "eventEditor"
 */
class EntityCardDetailsSubscription<D extends string> implements EASI {
	private subscriptionManager: SubscriptionManager<D, typeof service>;

	constructor(domain: D) {
		this.subscriptionManager = new SubscriptionManager<D, typeof service>({ domain, service });
	}

	subscribe: EASI['subscribe'] = (...args) => this.subscriptionManager.subscribe(...args);

	getSubscriptions: EASI['getSubscriptions'] = (args) => {
		return filterSubscriptionsByOption(this.subscriptionManager.getSubscriptions, 'entityType', args?.entityType);
	};
}

export default EntityCardDetailsSubscription;
