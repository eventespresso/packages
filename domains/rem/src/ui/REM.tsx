import React, { useCallback } from 'react';

import { useEntityActionsSubscription } from '@eventespresso/registry';
import { domain } from '@eventespresso/edtr-services';
import RemButton from './RemButton';

const REM: React.FC = () => {
	console.log('Hello World! I am the tiny REM swimming in EDTR');
	const { subscribe } = useEntityActionsSubscription(domain);

	const datesActionHandler = useCallback(({ entity, registry }) => {
		const { registerElement: registerMenuItem } = registry;

		registerMenuItem('rem', () => <RemButton datetime={entity} />, 11);
	}, []);

	subscribe(datesActionHandler, { entityType: 'datetime' });

	return null;
};

export default REM;
