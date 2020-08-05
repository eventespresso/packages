import type { Entity } from '@eventespresso/data';
import type { Disclosure } from '@eventespresso/services';
import type { ModalProps } from '@eventespresso/adapters';

export interface BaseProps<E extends Entity> {
	entity: E;
}

export interface EntityEditModalProps extends ModalProps {}

export interface ContainerProps<E extends Entity> extends BaseProps<E>, EntityEditModalProps {
	component: React.ComponentType<BaseProps<E> & Pick<Disclosure, 'onClose'>>;
}
