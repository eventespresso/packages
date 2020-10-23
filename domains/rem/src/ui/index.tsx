import React from 'react';

import type { NewEntitySubscriptionCb, ModalSubscriptionCb } from '@eventespresso/registry';
import {
	NewEntitySubscription,
	ModalSubscription,
	FilterBarUISubscription,
	FilterBarUISubscriptionCb,
	EntityCardDetailsSubscription,
	EntityCardDetailsSubscriptionCb,
} from '@eventespresso/registry';
import { domain, datesList } from '@eventespresso/edtr-services';
import type { DatetimesFilterStateManager } from '@eventespresso/edtr-services';

import RemButton from './RemButton';
import RemInit from './RemInit';
import Container from './Modal/Container';
import { RemGlobalModals } from '../types';
import { RecurrenceControl } from './filterBar';
import RecurrenceTag from './RecurrenceTag';

// Register new entity option
const newEntitySubscription = new NewEntitySubscription(domain);
const newDateOptionsHandler: NewEntitySubscriptionCb<'datetime'> = ({ registry }) => {
	const { registerElement: registerOptionItem } = registry;

	registerOptionItem('rem', RemButton, 11);
};
newEntitySubscription.subscribe(newDateOptionsHandler, { entityType: 'datetime' });

// Register REM modal
const modalSubscription = new ModalSubscription(domain);
const modalRegistrationHandler: ModalSubscriptionCb<'rem'> = ({ registry }) => {
	const { registerContainer } = registry;

	registerContainer(RemGlobalModals.MAIN, Container);
	// this container is only for REM initialization
	registerContainer('reminit', RemInit);
};
modalSubscription.subscribe(modalRegistrationHandler);

// Register datetime filterbar elements
const filterBar = new FilterBarUISubscription(domain);
type DatesListFilterBarCallback = FilterBarUISubscriptionCb<DatetimesFilterStateManager, typeof datesList>;
const datesListFilterBar: DatesListFilterBarCallback = ({ registry }) => {
	const { registerElement: registerFilterBarItem } = registry;

	registerFilterBarItem('recurrence', RecurrenceControl, 11);
};

filterBar.subscribe(datesListFilterBar, { listId: datesList });

// Register datetime card details item.
const entityDetails = new EntityCardDetailsSubscription(domain);
const datesDetailHandler: EntityCardDetailsSubscriptionCb<'datetime'> = ({ entityType, entityId, registry }) => {
	// although this is not needed
	if (entityType !== 'datetime') {
		return;
	}

	const { registerElement: registerMenuItem } = registry;

	registerMenuItem('recurrenceTag', () => <RecurrenceTag datetimeId={entityId} />);
};

entityDetails.subscribe(datesDetailHandler, { entityType: 'datetime' });
