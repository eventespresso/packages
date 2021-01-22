import type { Entity } from '@eventespresso/data';
import type { BaseProps } from '../types';

export interface TicketCardProps extends BaseProps {
	onEdit: (ticket: Entity) => void;
}
