import React, { useMemo } from 'react';

import { Entity } from '@eventespresso/data';
import { EntityActionsSubscription, EntityCardDetailsRegistry } from '@eventespresso/registry';
import { domain } from '@eventespresso/edtr-services';
import { useMemoStringify } from '@eventespresso/hooks';

const { getSubscriptions } = new EntityActionsSubscription(domain);

const useEntityCardDetailsItems = <E extends Entity, T extends string>(
	entityType: T,
	entity: E,
	filterByEntityType = true
): Array<React.ReactNode> => {
	const registry = useMemo(() => new EntityCardDetailsRegistry({ domain, entityType, entityId: entity.id }), [
		entity.id,
		entityType,
	]);

	const { generateElements } = registry;

	const subscriptions = getSubscriptions({ entityType: filterByEntityType ? entityType : null });

	Object.values(subscriptions).forEach(({ callback }) => {
		callback({ entityType, entity, registry });
	});

	// it should only change if subscriptions change
	// eslint-disable-next-line react-hooks/exhaustive-deps
	return useMemoStringify(generateElements(), Object.keys(subscriptions));
};

export default useEntityCardDetailsItems;
