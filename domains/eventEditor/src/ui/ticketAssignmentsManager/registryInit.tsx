/**
 * This file registers the UI elements related to TAM UI via registry package
 */

import { ModalSubscription } from '@eventespresso/registry';
import { domain, EdtrGlobalModals } from '@eventespresso/edtr-services';
import { ModalContainer } from './components';

// Register date modal containers
const modals = new ModalSubscription(domain);
modals.subscribe(({ registry: { registerContainer } }) => {
	// Register TAM modal
	registerContainer(EdtrGlobalModals.TAM, ModalContainer);
});
