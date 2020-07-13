import type { Disclosure } from '@eventespresso/services';
import type { Datetime } from '@eventespresso/edtr-services';

export interface ContainerProps extends Omit<Disclosure, 'onOpen'> {}

export interface ContentProps {
	entity: Datetime;
	onClose: VoidFunction;
}

export interface ContentBodyProps {}

export interface ContentFooterProps {}
