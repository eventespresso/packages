import type { DateRange } from '@eventespresso/dates';
import type { LabelPosition } from '../withLabel';
import type { ButtonProps } from '../Button';
import { DateTimeRangePickerProps } from '../DateTimeRangePicker';

export interface EditDateRangeButtonProps extends ButtonProps, Pick<DateTimeRangePickerProps, 'TimezoneTimeInfo'> {
	dateTimeFormat?: string;
	endDate: Date;
	header?: string;
	locale?: string;
	onEditHandler: (dates: DateRange) => void;
	startDate: Date;
	tooltip?: string;
	tooltipPosition?: LabelPosition;
}
