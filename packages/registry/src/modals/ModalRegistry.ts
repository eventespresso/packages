import { UIRegistry, ElementProps } from '../subscription';
import type { ModalArgs } from './types';
import { serviceName as service } from './constants';

/**
 * D: Domain name e.g. "eventEditor"
 * MT: Modal Type: The current modal type e.g. "rem", "editTicket"
 * EP: Element Props: The props of the component that's registerd by the consumer
 */
class ModalRegistry<D extends string, MT extends string, EP extends ElementProps = ElementProps> extends UIRegistry<
	EP,
	D,
	typeof service
> {
	constructor({ domain, modalType, path }: ModalArgs<D, MT>) {
		super({ domain, service, path: path || (modalType && [modalType]) });
	}

	registerContainer = (modalName: string, container: React.ComponentType<EP>): void => {
		this.registerElement(modalName, container);
	};
}

export default ModalRegistry;
