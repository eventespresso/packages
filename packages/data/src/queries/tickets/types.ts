import type { EntityQueryArgs } from '../types';
import type { EntityEdge } from '../../types';

export interface TicketsQueryWhereArgs {
	datetime?: string;
	datetimeId?: number;
	datetimeIdIn?: Array<number>;
	datetimeIn?: Array<string>;
	isDefault?: boolean;
	isRequired?: boolean;
	isTaxable?: boolean;
	isTrashed?: boolean;
}

export type TicketsQueryArgs = EntityQueryArgs<TicketsQueryWhereArgs>;

export interface TicketsList<Edge extends EntityEdge> {
	espressoTickets: Edge;
}
