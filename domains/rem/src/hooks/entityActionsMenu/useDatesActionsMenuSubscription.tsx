import React, { useEffect, useCallback } from 'react';

import { useEntityActionsSubscription } from '@eventespresso/registry';
import { domain, Datetime } from '@eventespresso/edtr-services';
import type { EntityActionsSubscriptionCb } from '@eventespresso/registry';
import { DatetimeProvider } from '../../context';
import RemButton from '../../ui/RemButton';

type DatesSubscriptionCallback = EntityActionsSubscriptionCb<Datetime, 'datetime'>;

const useDatesActionsMenuSubscription = (): void => {
	const { subscribe } = useEntityActionsSubscription(domain);

	const datesActionHandler = useCallback<DatesSubscriptionCallback>(({ entity, registry }) => {
		const { registerElement: registerMenuItem } = registry;

		registerMenuItem(
			'rem',
			() => {
				return (
					<DatetimeProvider datetime={entity}>
						<RemButton />
					</DatetimeProvider>
				);
			},
			11
		);
	}, []);

	useEffect(() => {
		const unsubscribeDatesAction = subscribe(datesActionHandler, { entityType: 'datetime' });

		return (): void => {
			unsubscribeDatesAction();
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};

export default useDatesActionsMenuSubscription;
