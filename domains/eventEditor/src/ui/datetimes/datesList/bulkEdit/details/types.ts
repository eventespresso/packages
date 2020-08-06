import type { UpdateDatetimeInput } from '@eventespresso/edtr-services';
import type { ShiftDateArgs } from '@eventespresso/services';

export interface BulkEditFormShape extends UpdateDatetimeInput, Partial<ShiftDateArgs> {
	shiftDates?: ShiftDateArgs;
}
