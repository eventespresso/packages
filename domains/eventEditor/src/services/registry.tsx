import { ModalSubscription, ModalSubscriptionCb } from '@eventespresso/registry';
import { domain } from '@eventespresso/edtr-services';
import { NewDatePopover } from '@edtrUI/datetimes/datesList/newDateOptions';
import { Container } from '@edtrUI/datetimes/dateForm/multiStep';

const modalSubscription = new ModalSubscription(domain);

const modalRegistrationHandler: ModalSubscriptionCb<any> = ({ registry }) => {
	const { registerContainer } = registry;

	// Register new date popover
	registerContainer('newDatePopover', NewDatePopover);
	// Register edit date modal
	registerContainer('editDate', Container);
};
modalSubscription.subscribe(modalRegistrationHandler);
