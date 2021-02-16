import type { ModalSubscriptionCb } from '@eventespresso/registry';
import { ModalSubscription } from '@eventespresso/registry';
import { domain } from '@eventespresso/edtr-services';

import ESInit from './ESInit';

// Register container
const modalSubscription = new ModalSubscription(domain);
const modalRegistrationHandler: ModalSubscriptionCb<'es-init'> = ({ registry }) => {
	const { registerContainer } = registry;

	// this container is only for Event Smart domain initialization
	registerContainer('es-init', ESInit);
};
modalSubscription.subscribe(modalRegistrationHandler);
