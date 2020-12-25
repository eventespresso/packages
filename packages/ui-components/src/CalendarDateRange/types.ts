import type { CalendarBaseProps, CalendarDateProps } from '../types';

export interface CalendarDateRangeProps extends CalendarDateProps, CalendarBaseProps {
	startDate: Date | string;
	endDate: Date | string;
}
