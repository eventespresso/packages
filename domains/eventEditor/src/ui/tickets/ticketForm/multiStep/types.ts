import type { Disclosure } from '@eventespresso/utils';
import type { EntityId } from '@eventespresso/data';
import type { Ticket } from '@eventespresso/edtr-services';
import type { FormRenderProps } from 'react-final-form';
import type { TicketFormShape } from '../types';

export interface ContainerProps extends Omit<Disclosure, 'onOpen'> {
	ticketId?: EntityId;
}

export interface ContentProps {
	entity: Ticket;
	onClose: VoidFunction;
}

export interface ContentWrapperProps extends FormRenderProps<TicketFormShape> {}
