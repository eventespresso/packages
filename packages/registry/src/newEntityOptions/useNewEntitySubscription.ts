import { useCallback, useMemo } from 'react';

import { useSubscriptionService, filterSubscriptionsByOption } from '../subscription';
import type { NewEntitySubscription, NewEntitySubscriptionHook } from './types';
import { serviceName as service } from './constants';

type EAS = NewEntitySubscription;
type EAShook = NewEntitySubscriptionHook;

const useNewEntitySubscription: EAShook = (domain) => {
	const { getSubscriptions: getAllSubscriptions, ...restServices } = useSubscriptionService({ domain, service });

	const getSubscriptions: EAS['getSubscriptions'] = useCallback(
		(args) => filterSubscriptionsByOption(getAllSubscriptions, 'entityType', args?.entityType),
		[getAllSubscriptions]
	);

	return useMemo(() => ({ ...restServices, getSubscriptions }), [getSubscriptions, restServices]);
};

export default useNewEntitySubscription;
