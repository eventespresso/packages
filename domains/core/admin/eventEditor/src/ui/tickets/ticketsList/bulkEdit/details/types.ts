import type { UpdateTicketInput } from '@eventespresso/edtr-services';
import type { ShiftDateArgs } from '@eventespresso/dates';

export interface BulkEditFormShape extends UpdateTicketInput, Partial<ShiftDateArgs> {
	shiftDates?: ShiftDateArgs;
}
