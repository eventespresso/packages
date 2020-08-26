import { filterSubscriptionsByOption, SubscriptionManager } from '../subscription';
import type { ModalSubscriptionInterface } from './types';
import { serviceName as service } from './constants';

type MSI = ModalSubscriptionInterface;

/**
 * D: Domain name e.g. "eventEditor"
 */
class ModalSubscription<D extends string> implements MSI {
	private subscriptionManager: SubscriptionManager<D, typeof service>;

	constructor(domain: D) {
		this.subscriptionManager = new SubscriptionManager<D, typeof service>({ domain, service });
	}

	subscribe: MSI['subscribe'] = (...args) => this.subscriptionManager.subscribe(...args);

	getSubscriptions: MSI['getSubscriptions'] = (args) => {
		return filterSubscriptionsByOption(this.subscriptionManager.getSubscriptions, 'modalType', args?.modalType);
	};
}

export default ModalSubscription;
