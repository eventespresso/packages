import React from 'react';

import { Entity } from '@eventespresso/data';
import { EntityActionsSubscription, EntityActionsMenuRegistry } from '@eventespresso/registry';
import { domain } from '@eventespresso/edtr-services';

const { getSubscriptions } = new EntityActionsSubscription(domain);

const useEntityActionsMenuItems = <E extends Entity, T extends string>(
	entityType: T,
	entity: E,
	filterByEntityType = true
): Array<React.ReactNode> => {
	const registry = new EntityActionsMenuRegistry({ domain, entityType, entityId: entity.id });

	const { generateElements } = registry;

	const subscriptions = getSubscriptions({ entityType: filterByEntityType ? entityType : null });

	Object.values(subscriptions).forEach(({ callback }) => {
		callback({ entityType, entity, registry });
	});

	return generateElements();
};

export default useEntityActionsMenuItems;
