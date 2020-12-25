import { CalendarBaseProps } from '../types';

export enum CalendarPageSize {
	TINY = 'tiny',
	SMALL = 'small',
	MEDIUM = 'medium',
	BIG = 'big',
}

export interface CalendarPageDateProps extends CalendarBaseProps {
	startDate?: Date;
	endDate?: Date;
	size?: CalendarPageSize;
	statusClassName?: string;
}
