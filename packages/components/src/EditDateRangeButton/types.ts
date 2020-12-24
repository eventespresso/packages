import type { DateRange } from '@eventespresso/dates';
import type { LabelPosition } from '../withLabel';
import type { ButtonProps } from '../Button';

export interface EditDateRangeButtonProps extends ButtonProps {
	dateTimeFormat?: string;
	endDate: Date;
	header?: string;
	locale?: string;
	onEditHandler: (dates: DateRange) => void;
	startDate: Date;
	tooltip?: string;
	tooltipPosition?: LabelPosition;
}
