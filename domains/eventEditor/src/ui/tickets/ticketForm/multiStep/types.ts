import { Disclosure } from '@eventespresso/services';
import { EntityId } from '@eventespresso/data';
import { Ticket } from '@eventespresso/edtr-services';
import { FormRenderProps } from 'react-final-form';
import { TicketFormShape } from '../types';

export interface ContainerProps extends Omit<Disclosure, 'onOpen'> {
	ticketId?: EntityId;
}

export interface ContentProps {
	entity: Ticket;
	onClose: VoidFunction;
}

export interface ContentWrapperProps extends FormRenderProps<TicketFormShape> {}
