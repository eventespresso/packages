import type { RelationalData } from '@eventespresso/services';

import type { RecurrenceEdge } from './services/apollo';

export interface RemDomData {
	recurrences?: RecurrenceEdge;
	relations?: RelationalData;
}

export enum RemGlobalModals {
	MAIN = 'rem',
	BULK_ADD_TICKETS = 'bulkAddTickets',
}
