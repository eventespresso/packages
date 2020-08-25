import type { UpdateTicketInput } from '@eventespresso/edtr-services';
import type { ShiftDateArgs } from '@eventespresso/utils';

export interface BulkEditFormShape extends UpdateTicketInput, Partial<ShiftDateArgs> {
	shiftDates?: ShiftDateArgs;
}
