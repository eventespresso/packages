import { filter } from 'ramda';

import { useSubscriptionService } from '@eventespresso/services';
import type { FilterBarUISubscription, FilterBarUISubscriptionHook, FilterBarServiceType } from './types';

type FBS = FilterBarUISubscription;
type FBShook = FilterBarUISubscriptionHook;

const useFilterBarUISubscription: FBShook = (domain) => {
	const { getSubscriptions: getUISubscriptions, ...restServices } = useSubscriptionService({
		domain,
		service: FilterBarServiceType.UI,
	});

	const getSubscriptions: FBS['getSubscriptions'] = (args = {}) => {
		const { listId } = args;
		const allSubscriptions = getUISubscriptions();
		if (listId) {
			return filter(({ options }) => listId === options.listId, allSubscriptions);
		}
		return allSubscriptions;
	};

	return { ...restServices, getSubscriptions };
};

export default useFilterBarUISubscription;
