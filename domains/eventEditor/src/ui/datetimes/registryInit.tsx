/**
 * This file registers the UI elements related to datetime UI via registry package
 */
import React from 'react';

import {
	EntityActionsSubscription,
	EntityActionsSubscriptionCb,
	ModalSubscription,
	NewEntitySubscription,
	FilterBarUISubscription,
	FilterBarUISubscriptionCb,
} from '@eventespresso/registry';
import {
	domain,
	EdtrGlobalModals,
	Datetime,
	DatetimesFilterStateManager,
	datesList,
} from '@eventespresso/edtr-services';
import { FilterBarFilter } from '@eventespresso/components';

import {
	DisplayStartOrEndDateControl,
	SalesControl,
	SortByControl,
	StatusControl,
} from '@edtrUI/datetimes/datesList/filterBar/controls';
import { NewDatePopover, AddSingleDate } from '@edtrUI/datetimes/datesList/newDateOptions';
import { Container as EditDateContainer } from '@edtrUI/datetimes/dateForm/multiStep';
import { DateMainMenu } from '@edtrUI/datetimes/datesList/actionsMenu/dropdown';
import AssignTicketsButton from '@edtrUI/datetimes/datesList/actionsMenu/AssignTicketsButton';

// Register date modal containers
const modals = new ModalSubscription(domain);
modals.subscribe(({ registry: { registerContainer } }) => {
	// Register new date popover
	registerContainer(EdtrGlobalModals.NEW_DATE_MODAL, NewDatePopover);
	// Register edit date modal
	registerContainer(EdtrGlobalModals.EDIT_DATE, EditDateContainer);
});

// Register datetime actions menu items.
const entityActions = new EntityActionsSubscription(domain);
const datesActionHandler: EntityActionsSubscriptionCb<Datetime, 'datetime'> = ({ entityType, entity, registry }) => {
	// although this is not needed
	if (entityType !== 'datetime') {
		return;
	}

	const { registerElement: registerMenuItem } = registry;

	registerMenuItem('dateMainMenu', () => <DateMainMenu datetime={entity} />);

	registerMenuItem('assignTickets', () => <AssignTicketsButton entity={entity} />);
};

entityActions.subscribe(datesActionHandler, { entityType: 'datetime' });

// Register new date option(s)
const newEntityOptions = new NewEntitySubscription(domain);

newEntityOptions.subscribe(
	({ entityType, registry }) => {
		// although this is not needed
		if (entityType !== 'datetime') {
			return;
		}

		const { registerElement: registerOptionItem } = registry;

		registerOptionItem('AddSingleDate', ({ totalCount }) => {
			return <AddSingleDate isOnlyButton={totalCount === 1} />;
		});
	},
	{ entityType: 'datetime' }
);

// Register datetime filterbar elements
const filterBar = new FilterBarUISubscription(domain);
type DatesListFilterBarCallback = FilterBarUISubscriptionCb<DatetimesFilterStateManager, typeof datesList>;
const datesListFilterBar: DatesListFilterBarCallback = ({ listId, registry }) => {
	// although this is not needed
	if (listId !== datesList) {
		return;
	}

	const { registerElement: registerFilterBarItem } = registry;

	registerFilterBarItem('status', () => {
		return (
			<FilterBarFilter>
				<StatusControl />
			</FilterBarFilter>
		);
	});

	registerFilterBarItem('sales', () => {
		return (
			<FilterBarFilter>
				<SalesControl />
			</FilterBarFilter>
		);
	});

	registerFilterBarItem('displayStartOrEndDate', () => {
		return (
			<FilterBarFilter>
				<DisplayStartOrEndDateControl />
			</FilterBarFilter>
		);
	});

	registerFilterBarItem('sortBy', () => {
		return (
			<FilterBarFilter>
				<SortByControl />
			</FilterBarFilter>
		);
	});
};

filterBar.subscribe(datesListFilterBar, { listId: datesList });
