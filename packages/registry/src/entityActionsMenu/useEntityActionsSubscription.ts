import { useMemo, useCallback } from 'react';

import { useSubscriptionService } from '../subscription';
import type { EntityActionsSubscription, EntityActionsSubscriptionHook } from './types';
import { serviceName as service } from './constants';
import { filterSubscriptionsByOption } from '../subscription/utils';

type EAS = EntityActionsSubscription;
type EAShook = EntityActionsSubscriptionHook;

const useEntityActionsSubscription: EAShook = (domain) => {
	const { getSubscriptions: getAllSubscriptions, ...restServices } = useSubscriptionService({ domain, service });

	const getSubscriptions: EAS['getSubscriptions'] = useCallback(
		(args) => filterSubscriptionsByOption(getAllSubscriptions, 'entityType', args?.entityType),
		[getAllSubscriptions]
	);

	return useMemo(() => ({ ...restServices, getSubscriptions }), [getSubscriptions, restServices]);
};

export default useEntityActionsSubscription;
