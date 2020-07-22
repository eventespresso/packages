import type { Disclosure } from '@eventespresso/services';
import type { Ticket } from '@eventespresso/edtr-services';
import type { FormRenderProps } from 'react-final-form';
import type { TicketFormShape } from '../types';

export interface ContainerProps extends ContentProps, Omit<Disclosure, 'onOpen'> {}

export interface ContentProps {
	entity?: Ticket;
	onClose: VoidFunction;
}

export interface ContentWrapperProps extends FormRenderProps<TicketFormShape> {}
