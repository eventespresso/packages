import type { Disclosure } from '@eventespresso/services';
import type { Datetime } from '@eventespresso/edtr-services';
// import type { FormRenderProps } from 'react-final-form';

export interface ContainerProps extends Omit<Disclosure, 'onOpen'> {}

export interface ContentProps {
	entity: Datetime;
	onClose: VoidFunction;
}

// export interface ContentWrapperProps extends FormRenderProps<> {}
