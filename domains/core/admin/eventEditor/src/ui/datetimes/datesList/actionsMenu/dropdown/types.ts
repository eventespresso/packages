import type { Datetime } from '@eventespresso/edtr-services';

export interface DateMainMenuProps {
	copyDate?: VoidFunction;
	datetime?: Datetime;
	editDate?: VoidFunction;
	onClick?: VoidFunction;
	trashed?: boolean;
}
