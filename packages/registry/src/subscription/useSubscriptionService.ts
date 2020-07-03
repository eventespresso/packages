import { useCallback } from 'react';
import { assocPath, omit } from 'ramda';
import { v4 as uuidv4 } from 'uuid';
import invariant from 'invariant';

import type {
	SubscriptionRegistry,
	SubscriptionService,
	SubscriptionServiceHook,
	Subscriptions,
	UpdateSubscriptionProps,
} from './types';

let subscriptionRegistry: SubscriptionRegistry = {};

type SS = SubscriptionService;

const useSubscriptionService: SubscriptionServiceHook = ({ domain, service }) => {
	/**
	 * Since we store our subscriptions in a global variable (registry) to allow
	 * external addons to be able to use the service, its change does not trigger state updates.
	 * So, we will create a hash (like a cacheId) to store the current state of subscriptions.
	 * When we add or remove a subscription, this hash will change, resulting notification to
	 * all the subscribers.
	 */
	const subscriptions = subscriptionRegistry?.[domain]?.[service]?.subscriptions || {};
	const subscriptionsHash = Object.keys(subscriptions).join(':');

	 // @ts-ignore
	const getSubscriptions = useCallback<SS['getSubscriptions']>(() => {
		return getServiceRegistryItem('subscriptions', {});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [subscriptionsHash]);

	/**
	 * Updates/Sets/Exposes the value globally
	 */
	const updateServiceRegistry = useCallback<SS['addToServiceRegistry']>(
		(key, value) => {
			subscriptionRegistry = assocPath([domain, service, key], value, subscriptionRegistry);
		},

		// eslint-disable-next-line react-hooks/exhaustive-deps
		[subscriptionsHash]
	);

	const setSubscriptions = useCallback(
		(subscriptions: Subscriptions): void => {
			updateServiceRegistry('subscriptions', subscriptions);
		},
		[updateServiceRegistry]
	);

	const updateSubscription = useCallback(
		({ id, callback, options, action }: UpdateSubscriptionProps): void => {
			const subscriptions = getSubscriptions();

			const newSubscriptions =
				action === 'add'
					? {
							...subscriptions,
							[id]: { callback, options },
					  }
					: omit([id], subscriptions);

			setSubscriptions(newSubscriptions);
		},
		[getSubscriptions, setSubscriptions]
	);

	const subscribe = useCallback<SS['subscribe']>(
		(callback, options) => {
			invariant(typeof callback === 'function', 'subscribe `callback` must be a function');

			const subscriptionId = uuidv4();

			updateSubscription({ id: subscriptionId, callback, options, action: 'add' });

			// to unsubscribe
			return (): void => {
				updateSubscription({ id: subscriptionId, action: 'remove' });
			};
		},
		[updateSubscription]
	);

	const getServiceRegistryItem = useCallback<SS['getServiceRegistryItem']>(
		(key, defaultValue) => {
			return subscriptionRegistry?.[domain]?.[service]?.[key] || defaultValue;
		},

		// eslint-disable-next-line react-hooks/exhaustive-deps
		[subscriptionsHash]
	);

	const addToServiceRegistry = useCallback<SS['addToServiceRegistry']>(
		(key, value) => {
			updateServiceRegistry(key, value);
		},
		[updateServiceRegistry]
	);

	return {
		addToServiceRegistry,
		getServiceRegistryItem,
		getSubscriptions,
		subscribe,
	};
};

export default useSubscriptionService;
