import type { ModalSubscriptionCb } from '@eventespresso/registry';
import {
	ModalSubscription,
	FilterBarUISubscription,
	FilterBarUISubscriptionCb,
	EntityCardDetailsSubscription,
	EntityCardDetailsSubscriptionCb,
} from '@eventespresso/registry';
import { domain, datesList, NewDateOption } from '@eventespresso/edtr-services';
import type { DatetimesFilterStateManager } from '@eventespresso/edtr-services';
import { isPluginRegistered, updatePlugin, registerPlugin } from '@eventespresso/plugins';
import { EdtrSlots } from '@eventespresso/services';

import RemButton from './RemButton';
import RemInit from './RemInit';
import { Container as MainContainer } from './Modal';
import { Container as BulkAddTicketsContainer } from './bulkAddTickets';
import { RemGlobalModals } from '../types';
import { RecurrenceControl } from './filterBar';
import RecurrenceTag from './RecurrenceTag';

// if the plugin is already registered (by ES), we may just update it
const recDatePluginFn = isPluginRegistered(EdtrSlots.ADD_RECURRING_DATE_OPTION) ? updatePlugin : registerPlugin;
recDatePluginFn(EdtrSlots.ADD_RECURRING_DATE_OPTION, {
	render: () => (
		<NewDateOption priority={11}>
			<RemButton />
		</NewDateOption>
	),
});

// Register REM modals
const modalSubscription = new ModalSubscription(domain);
const modalRegistrationHandler: ModalSubscriptionCb<'rem'> = ({ registry }) => {
	const { registerContainer } = registry;

	registerContainer(RemGlobalModals.MAIN, MainContainer);

	registerContainer(RemGlobalModals.BULK_ADD_TICKETS, BulkAddTicketsContainer);
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
