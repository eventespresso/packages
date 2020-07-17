import React from 'react';

import { NewEntitySubscription } from '@eventespresso/registry';
import { domain } from '@eventespresso/edtr-services';
import type { NewEntitySubscriptionCb } from '@eventespresso/registry';
import RemButton from './RemButton';

type DatesSubscriptionCallback = NewEntitySubscriptionCb<'datetime'>;

const { subscribe } = new NewEntitySubscription(domain);

const newDateOptionsHandler: DatesSubscriptionCallback = ({ registry }) => {
	const { registerElement: registerOptionItem } = registry;

	registerOptionItem(
		'rem',
		() => {
			return <RemButton />;
		},
		11
	);
};

subscribe(newDateOptionsHandler, { entityType: 'datetime' });
