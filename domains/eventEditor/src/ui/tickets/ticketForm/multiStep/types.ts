import type { Ticket, TicketFormShape } from '@eventespresso/edtr-services';
import type { FormRenderProps } from 'react-final-form';

export interface ContentProps {
	entity: Ticket;
	onClose: VoidFunction;
}

export interface ContentWrapperProps extends FormRenderProps<TicketFormShape> {}
