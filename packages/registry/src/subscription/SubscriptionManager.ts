import { assocPath, omit, pathOr } from 'ramda';
import { v4 as uuidv4 } from 'uuid';
import invariant from 'invariant';

import type {
	ServiceRegistry,
	SubscriptionManagerInterface,
	SubscriptionRegistry,
	Subscriptions,
	UpdateSubscriptionProps,
} from './types';

type Options<D extends string, S extends string> = {
	domain: D;
	service: S;
};

type SMI<SR extends ServiceRegistry = ServiceRegistry> = SubscriptionManagerInterface<SR>;

class SubscriptionManager<D extends string, S extends string, SR extends ServiceRegistry = ServiceRegistry>
	implements SMI<SR> {
	protected options: Options<D, S>;

	protected static subscriptionRegistry: SubscriptionRegistry = {};

	constructor(options: Options<D, S>) {
		this.options = options;
	}

	public subscribe: SMI<SR>['subscribe'] = (callback, options) => {
		invariant(typeof callback === 'function', 'subscribe `callback` must be a function');

		const subscriptionId = uuidv4();

		this.updateSubscription({ id: subscriptionId, callback, options, action: 'add' });

		// to unsubscribe
		return (): void => {
			this.updateSubscription({ id: subscriptionId, action: 'remove' });
		};
	};

	// @ts-ignore
	public getSubscriptions: SMI<SR>['getSubscriptions'] = () => {
		return this.getServiceRegistryItem('subscriptions', {});
	};

	public getServiceRegistryItem: SMI<SR>['getServiceRegistryItem'] = (key, defaultValue) => {
		return pathOr(
			defaultValue,
			[this.options.domain, this.options.service, key as string],
			SubscriptionManager.subscriptionRegistry
		);
	};

	public addToServiceRegistry: SMI<SR>['addToServiceRegistry'] = (key, value) => {
		this.updateServiceRegistry(key, value);
	};

	protected updateSubscription = ({ id, callback, options, action }: UpdateSubscriptionProps): void => {
		const subscriptions = this.getSubscriptions();

		const newSubscriptions =
			action === 'add'
				? {
						...subscriptions,
						[id]: { callback, options },
				  }
				: omit([id], subscriptions);

		this.setSubscriptions(newSubscriptions);
	};

	protected setSubscriptions = (subscriptions: Subscriptions): void => {
		this.updateServiceRegistry('subscriptions', subscriptions);
	};

	/**
	 * Updates/Sets/Exposes the value to registry consumer
	 */
	protected updateServiceRegistry = <K extends keyof SR>(key: K, value: SR[K]): void => {
		SubscriptionManager.subscriptionRegistry = assocPath(
			[this.options.domain, this.options.service, key as string],
			value,
			SubscriptionManager.subscriptionRegistry
		);
	};
}

export default SubscriptionManager;
