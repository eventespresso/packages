import React, { useEffect, useCallback } from 'react';

import { useNewEntitySubscription } from '@eventespresso/registry';
import { domain } from '@eventespresso/edtr-services';
import type { NewEntitySubscriptionCb } from '@eventespresso/registry';
import RemButton from '../../ui/RemButton';

type DatesSubscriptionCallback = NewEntitySubscriptionCb<'datetime'>;

const useNewDateOptionSubscription = (): void => {
	const { subscribe } = useNewEntitySubscription(domain);

	const newDateOptionsHandler = useCallback<DatesSubscriptionCallback>(({ registry }) => {
		const { registerElement: registerOptionItem } = registry;

		registerOptionItem(
			'rem',
			() => {
				return <RemButton />;
			},
			11
		);
	}, []);

	useEffect(() => {
		const unsubscribeNewDateOptions = subscribe(newDateOptionsHandler, { entityType: 'datetime' });

		return (): void => {
			unsubscribeNewDateOptions();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};

export default useNewDateOptionSubscription;
