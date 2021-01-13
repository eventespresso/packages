import type { RemTicket } from '@eventespresso/edtr-services';
import type { Disclosure } from '@eventespresso/utils';
import type { FormRenderProps } from 'react-final-form';

export interface ContainerProps extends ContentProps, Omit<Disclosure, 'onOpen'> {}

export interface ContentProps {
	addTicket?: any;
	ticketTemplates?: Array<RemTicket>;
	entity?: any;
	onClose: VoidFunction;
	updateTicket?: any;
}

export interface ContentWrapperProps extends FormRenderProps<RemTicket> {}
