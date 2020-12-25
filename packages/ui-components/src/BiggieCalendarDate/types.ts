import type { CalendarBaseProps, CalendarDateProps } from '../types';

export interface BiggieCalendarDateProps extends CalendarDateProps, CalendarBaseProps {
	date: Date | string;
	timeRange?: string;
}
