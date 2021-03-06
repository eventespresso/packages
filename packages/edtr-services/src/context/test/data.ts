import type { EventEditorData } from '../../types';
import type { RelationalData } from '@eventespresso/services';
import { nodes as datetimes, edge as datetimesEdge } from '../../apollo/queries/datetimes/test/data';

import { nodes as events } from '../../apollo/queries/events/test/data';
import { nodes as tickets, edge as ticketsEdge } from '../../apollo/queries/tickets/test/data';
import { nodes as prices, edge as pricesEdge } from '../../apollo/queries/prices/test/data';
import { nodes as priceTypes, edge as priceTypesEdge } from '../../apollo/queries/priceTypes/test/data';

export { currentUser } from '@eventespresso/data/src/queries/currentUser/test/data';

export { generalSettings } from '@eventespresso/data/src/queries/generalSettings/test/data';

export const eventId = 100;

/**
 * See the structure of returned data in `/docs/GraphQL-API/query/eventRelations.md`
 */
export const relationalData: RelationalData = {
	datetimes: {
		[datetimes[0].id]: {
			tickets: [tickets[0].id, tickets[1].id],
		},
		[datetimes[1].id]: {
			tickets: [tickets[1].id],
		},
	},
	tickets: {
		[tickets[0].id]: {
			datetimes: [datetimes[0].id],
			prices: [prices[0].id, prices[2].id],
		},
		[tickets[1].id]: {
			datetimes: [datetimes[0].id, datetimes[1].id],
			prices: [prices[1].id],
		},
	},
	prices: {
		[prices[0].id]: {
			tickets: [tickets[0].id],
			priceTypes: [priceTypes[2].id],
		},
		[prices[1].id]: {
			tickets: [tickets[1].id],
			priceTypes: [priceTypes[0].id],
		},
		[prices[2].id]: {
			tickets: [tickets[0].id],
			priceTypes: [priceTypes[3].id],
		},
	},
};

// Add only what's needed
export const eventEditor: EventEditorData = {
	event: events[0],
	datetimes: datetimesEdge,
	tickets: ticketsEdge,
	prices: pricesEdge,
	priceTypes: priceTypesEdge,
	relations: relationalData,
};
