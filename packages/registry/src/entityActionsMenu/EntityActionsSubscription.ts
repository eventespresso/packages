import { filterSubscriptionsByOption, SubscriptionManager } from '../subscription';
import type { EntityActionsSubscriptionInterface } from './types';
import { serviceName as service } from './constants';

type EASI = EntityActionsSubscriptionInterface;

/**
 * D: Domain name e.g. "eventEditor"
 */
class EntityActionsSubscription<D extends string> implements EASI {
	private subscriptionManager: SubscriptionManager<D, typeof service>;

	constructor(domain: D) {
		this.subscriptionManager = new SubscriptionManager<D, typeof service>({ domain, service });
	}

	subscribe: EASI['subscribe'] = (...args) => this.subscriptionManager.subscribe(...args);

	getSubscriptions: EASI['getSubscriptions'] = (args) => {
		return filterSubscriptionsByOption(this.subscriptionManager.getSubscriptions, 'entityType', args?.entityType);
	};
}

export default EntityActionsSubscription;
