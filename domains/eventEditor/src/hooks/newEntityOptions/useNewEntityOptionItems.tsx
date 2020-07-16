import React from 'react';

import { useNewEntitySubscription, useNewEntityOptionsRegistry } from '@eventespresso/registry';
import { domain } from '@eventespresso/edtr-services';

const useNewEntityOptionItems = <T extends string>(
	entityType: T,
	filterByEntityType = true
): Array<React.ReactNode> => {
	const registry = useNewEntityOptionsRegistry({ domain, entityType });
	const { getSubscriptions } = useNewEntitySubscription(domain);

	const { getElements } = registry;

	const subscriptions = getSubscriptions({ entityType: filterByEntityType ? entityType : null });

	Object.values(subscriptions).forEach(({ callback }) => {
		callback({ entityType, registry });
	});

	const optionItems = getElements();

	return Object.entries(optionItems).map(([itemKey, Component], i) => <Component key={itemKey + i} />);
};

export default useNewEntityOptionItems;
