import type { Entity } from '@eventespresso/data';
import type { Disclosure } from '@eventespresso/services';

export interface BaseProps<E extends Entity> {
	entity: E;
}

export interface EntityEditModalProps extends Omit<Disclosure, 'onOpen'> {
	isOpen: boolean;
	onClose: VoidFunction;
	title?: string;
}

export interface ContainerProps<E extends Entity> extends BaseProps<E>, EntityEditModalProps {
	component: React.ComponentType<BaseProps<E> & Pick<Disclosure, 'onClose'>>;
}
