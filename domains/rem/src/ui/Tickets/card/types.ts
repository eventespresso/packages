import type { BaseProps } from '../types';
import type { RemTicket } from '../../../data';

export interface TicketCardProps extends BaseProps {
	onEdit: (ticket: RemTicket) => void;
}
