import { filterSubscriptionsByOption, SubscriptionManager } from '../subscription';
import type { EntityCardDetailsSubscriptionInterface } from './types';
import { serviceName as service } from './constants';

type ECDSI = EntityCardDetailsSubscriptionInterface;

/**
 * D: Domain name e.g. "eventEditor"
 */
class EntityCardDetailsSubscription<D extends string> implements ECDSI {
	private subscriptionManager: SubscriptionManager<D, typeof service>;

	constructor(domain: D) {
		this.subscriptionManager = new SubscriptionManager<D, typeof service>({ domain, service });
	}

	subscribe: ECDSI['subscribe'] = (...args) => this.subscriptionManager.subscribe(...args);

	getSubscriptions: ECDSI['getSubscriptions'] = (args) => {
		return filterSubscriptionsByOption(this.subscriptionManager.getSubscriptions, 'entityType', args?.entityType);
	};
}

export default EntityCardDetailsSubscription;
