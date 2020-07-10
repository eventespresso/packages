import type { Datetime } from '@eventespresso/edtr-services';

export interface EditDatetimeProps {
	datetime: Datetime;
	onClose?: VoidFunction;
}
