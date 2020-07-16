import React, { useCallback } from 'react';

import { NewEntitySubscriptionCb } from '@eventespresso/registry';
import { AddSingleDate } from '../datesList/newDateOptions';

type DatesSubscriptionCallback = NewEntitySubscriptionCb<'datetime'>;

const useNewDateOptionsHandler = (): DatesSubscriptionCallback => {
	return useCallback<DatesSubscriptionCallback>(({ entityType, registry }) => {
		// although this is not needed
		if (entityType !== 'datetime') {
			return;
		}

		const { registerElement: registerOptionItem } = registry;

		registerOptionItem('AddSingleDate', () => <AddSingleDate />);
	}, []);
};

export default useNewDateOptionsHandler;
