import { ModalSubscription, ModalSubscriptionCb } from '@eventespresso/registry';
import { domain } from '@eventespresso/edtr-services';
import { NewDatePopover } from '@edtrUI/datetimes/datesList/newDateOptions';

// Register new date popover
const modalSubscription = new ModalSubscription(domain);
const modalRegistrationHandler: ModalSubscriptionCb<'rem'> = ({ registry }) => {
	const { registerContainer } = registry;

	registerContainer('newDatePopover', NewDatePopover);
};
modalSubscription.subscribe(modalRegistrationHandler);
