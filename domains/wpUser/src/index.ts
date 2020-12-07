import type { ModalSubscriptionCb } from '@eventespresso/registry';
import { ModalSubscription } from '@eventespresso/registry';
import { domain } from '@eventespresso/edtr-services';

import WpUserInit from './WpUserInit';

// Register container
const modalSubscription = new ModalSubscription(domain);
const modalRegistrationHandler: ModalSubscriptionCb<'wp-user-init'> = ({ registry }) => {
	const { registerContainer } = registry;

	// this container is only for WP User addon initialization
	registerContainer('wp-user-init', WpUserInit);
};
modalSubscription.subscribe(modalRegistrationHandler);
