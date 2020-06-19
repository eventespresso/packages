export enum CalendarPageSize {
	TINY = 'tiny',
	SMALL = 'small',
	MEDIUM = 'medium',
	BIG = 'big',
}

export interface CalendarPageDateProps {
	startDate?: Date;
	endDate?: Date;
	size?: CalendarPageSize;
	statusClassName?: string;
}
