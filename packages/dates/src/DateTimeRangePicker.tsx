import { DateRangePicker } from './DateRangePicker';
import type { DateRangePickerProps } from './types';

export const DateTimeRangePicker: React.FC<DateRangePickerProps> = (props) => {
	return <DateRangePicker {...props} showTime />;
};
