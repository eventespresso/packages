import { filterSubscriptionsByOption, SubscriptionManager } from '../subscription';
import type { NewEntitySubscriptionInterface } from './types';
import { serviceName as service } from './constants';

type NESI = NewEntitySubscriptionInterface;

class NewEntitySubscription<D extends string> implements NewEntitySubscriptionInterface {
	private subscriptionManager: SubscriptionManager<D, typeof service>;

	constructor(domain: D) {
		this.subscriptionManager = new SubscriptionManager<D, typeof service>({ domain, service });
	}

	subscribe: NESI['subscribe'] = (...args) => this.subscriptionManager.subscribe(...args);

	getSubscriptions: NESI['getSubscriptions'] = (args) => {
		return filterSubscriptionsByOption(this.subscriptionManager.getSubscriptions, 'entityType', args?.entityType);
	};
}

export default NewEntitySubscription;
