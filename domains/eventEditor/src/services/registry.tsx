import { ModalSubscription, ModalSubscriptionCb } from '@eventespresso/registry';
import { domain, EdtrGlobalModals } from '@eventespresso/edtr-services';
import { NewDatePopover } from '@edtrUI/datetimes/datesList/newDateOptions';
import { Container as EditDateContainer } from '@edtrUI/datetimes/dateForm/multiStep';
import { Container as EditTicketContainer } from '@edtrUI/tickets/ticketForm/multiStep';

const modalSubscription = new ModalSubscription(domain);

const modalRegistrationHandler: ModalSubscriptionCb<any> = ({ registry }) => {
	const { registerContainer } = registry;

	// Register new date popover
	registerContainer(EdtrGlobalModals.NEW_DATE_POPOVER, NewDatePopover);
	// Register edit date modal
	registerContainer(EdtrGlobalModals.EDIT_DATE, EditDateContainer);
	// Register edit ticket modal
	registerContainer(EdtrGlobalModals.EDIT_TICKET, EditTicketContainer);
};
modalSubscription.subscribe(modalRegistrationHandler);
