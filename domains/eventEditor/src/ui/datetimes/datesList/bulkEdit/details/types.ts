import type { UpdateDatetimeInput } from '@eventespresso/edtr-services';
import type { IntervalType } from '@eventespresso/services';

export type ShiftDates = {
	unit: IntervalType;
	value: number;
	type: 'earlier' | 'later';
};

export interface BulkEditFormShape extends UpdateDatetimeInput, Partial<ShiftDates> {
	shiftDates?: ShiftDates;
}
