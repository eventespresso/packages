import { DatePicker } from './DatePicker';
import type { DatePickerProps } from '../types';

export const MonthPicker: React.FC<DatePickerProps> = (props) => {
	return <DatePicker calendarClassName='ee-month-picker' {...props} />;
};
