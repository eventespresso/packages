import type { RelationalData } from '@eventespresso/services';
import type { RecurrenceEdge } from './services/apollo';

export interface RemDomData {
	recurrences?: RecurrenceEdge;
	relations?: RelationalData;
}
