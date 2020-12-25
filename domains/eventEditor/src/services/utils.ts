import { ModalSubscription, ModalRegistry } from '@eventespresso/registry';
import { domain } from '@eventespresso/edtr-services';

const { getSubscriptions } = new ModalSubscription(domain);
const registry = new ModalRegistry({ domain });

export const getRegisteredContainers = (): Array<React.ReactNode> => {
	const { generateElements } = registry;

	const subscriptions = getSubscriptions();

	Object.values(subscriptions).forEach(({ callback }) => {
		callback({ registry });
	});

	return generateElements();
};
