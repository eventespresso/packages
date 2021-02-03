import type { PopoverProps } from '@eventespresso/adapters';
import type { DateRange } from '@eventespresso/dates';
import type { LabelPosition } from '../withLabel';
import type { ButtonProps } from '../Button';
import { DateTimeRangePickerProps } from '../DateTimeRangePicker';

export interface EditDateRangeButtonProps
	extends Omit<ButtonProps, 'onChange'>,
		Pick<DateTimeRangePickerProps, 'TimezoneTimeInfo'> {
	dateTimeFormat?: string;
	endDate: Date;
	header?: string;
	locale?: string;
	onChange: (dates: DateRange) => void;
	popoverPlacement?: PopoverProps['placement'];
	startDate: Date;
	tooltip?: string;
	tooltipPosition?: LabelPosition;
}
