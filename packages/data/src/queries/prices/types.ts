import type { EntityQueryArgs } from '../types';
import type { EntityEdge } from '../../types';

export interface PricesQueryWhereArgs {
	event?: string;
	eventId?: number;
	includeDefaultPrices?: true;
	includeDefaultTicketsPrices?: true;
	isDefault?: boolean;
}

export type PricesQueryArgs = EntityQueryArgs<PricesQueryWhereArgs>;

export interface PricesList<Edge extends EntityEdge> {
	espressoPrices: Edge;
}
