import React, { useCallback } from 'react';

import { useEntityActionsSubscription } from '@eventespresso/registry';
import { domain, Datetime } from '@eventespresso/edtr-services';
import { DatetimeProvider } from '../context';
import RemButton from './RemButton';
import type { EntityActionsSubscriptionCb } from '@eventespresso/registry';

type DatesSubscriptionCallback = EntityActionsSubscriptionCb<Datetime, 'datetime'>;

const REM: React.FC = () => {
	const { subscribe } = useEntityActionsSubscription(domain);

	const datesActionHandler = useCallback<DatesSubscriptionCallback>(({ entity, registry }) => {
		const { registerElement: registerMenuItem } = registry;

		registerMenuItem(
			'rem',
			() => (
				<DatetimeProvider datetime={entity}>
					<RemButton />
				</DatetimeProvider>
			),
			11
		);
	}, []);

	subscribe(datesActionHandler, { entityType: 'datetime' });

	return null;
};

export default REM;
