import type { UpdateDatetimeInput } from '@eventespresso/edtr-services';
import type { IntervalType } from '@eventespresso/dates';

export interface DatetimeDetailsProps {
	onClose?: VoidFunction;
}

export interface DateFormShape extends UpdateDatetimeInput {
	startTime?: Date;
	duration?: number;
	unit?: IntervalType;
}
