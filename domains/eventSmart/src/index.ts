import type { ModalSubscriptionCb } from '@eventespresso/registry';
import { ModalSubscription } from '@eventespresso/registry';
import { domain } from '@eventespresso/edtr-services';

import EventSmartInit from './EventSmartInit';

// Register container
const modalSubscription = new ModalSubscription(domain);
const modalRegistrationHandler: ModalSubscriptionCb<'event-smart-init'> = ({ registry }) => {
	const { registerContainer } = registry;

	// this container is only for Event Smart domain initialization
	registerContainer('event-smart-init', EventSmartInit);
};
modalSubscription.subscribe(modalRegistrationHandler);
