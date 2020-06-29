import React from 'react';

import { Entity } from '@eventespresso/data';
import { useEntityActionsSubscription, useEntityActionsMenuRegistry } from '@eventespresso/registry';
import { domain } from '@eventespresso/edtr-services';

const useEntityActionsMenuItems = <E extends Entity, T extends string>(
	entityType: T,
	entity: E,
	filterByEntityType = true
): Array<React.ReactNode> => {
	const registry = useEntityActionsMenuRegistry({ domain, entityType, entityId: entity.id });
	const { getSubscriptions } = useEntityActionsSubscription(domain);

	const { getElements } = registry;

	const subscriptions = getSubscriptions({ entityType: filterByEntityType ? entityType : null });

	Object.values(subscriptions).forEach(({ callback }) => {
		callback({ entityType, entity, registry });
	});

	const menuItems = getElements();

	return Object.entries(menuItems).map(([itemKey, Component], i) => <Component key={itemKey + i} />);
};

export default useEntityActionsMenuItems;
