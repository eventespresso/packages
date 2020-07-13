import type { UpdateDatetimeInput, Datetime } from '@eventespresso/edtr-services';

export interface EditDatetimeProps {
	datetime: Datetime;
	onClose?: VoidFunction;
}

export interface DateFormShape extends UpdateDatetimeInput {
	duration?: number;
	unit?: 'days' | 'hours' | 'minutes';
}
