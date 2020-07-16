import { useMemo, useCallback } from 'react';
import { filter } from 'ramda';

import { useSubscriptionService } from '../subscription';
import type { FilterBarUISubscription, FilterBarUISubscriptionHook } from './types';
import { FilterBarServiceType } from './types';

type FBS = FilterBarUISubscription;
type FBShook = FilterBarUISubscriptionHook;

const useFilterBarUISubscription: FBShook = (domain) => {
	const { getSubscriptions: getUISubscriptions, ...restServices } = useSubscriptionService({
		domain,
		service: FilterBarServiceType.UI,
	});

	const getSubscriptions: FBS['getSubscriptions'] = useCallback(
		(args = {}) => {
			const { listId } = args;
			const allSubscriptions = getUISubscriptions();
			if (listId) {
				return filter(({ options }) => listId === options.listId, allSubscriptions);
			}
			return allSubscriptions;
		},
		[getUISubscriptions]
	);

	return useMemo(() => ({ ...restServices, getSubscriptions }), [getSubscriptions, restServices]);
};

export default useFilterBarUISubscription;
