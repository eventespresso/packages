import type { UpdateDatetimeInput } from '@eventespresso/edtr-services';
import type { IntervalType, LocaleProps } from '@eventespresso/services';

export interface DatetimeDetailsProps {
	onClose?: VoidFunction;
}

export interface DateFormShape extends UpdateDatetimeInput {
	duration?: number;
	locale?: LocaleProps;
	unit?: IntervalType;
}
