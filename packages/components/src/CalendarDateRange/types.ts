import { CalendarDateProps } from '../types';

export interface CalendarDateRangeProps extends CalendarDateProps {
	startDate: Date | string;
	endDate: Date | string;
}
