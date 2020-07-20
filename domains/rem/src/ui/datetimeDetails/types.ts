import type { UpdateDatetimeInput } from '@eventespresso/edtr-services';

export interface DatetimeDetailsProps {
	onClose?: VoidFunction;
}

export interface DateFormShape extends UpdateDatetimeInput {
	duration?: number;
	unit?: 'days' | 'hours' | 'minutes';
}
