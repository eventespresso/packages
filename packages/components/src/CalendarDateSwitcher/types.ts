export interface CalendarDateLabels {
	header?: string;
	headerPast?: string;
	headerFuture?: string;
	footer?: string;
	footerPast?: string;
	footerFuture?: string;
}

export interface CalendarDateSwitcherProps {
	className?: string;
	displayBoth: boolean;
	displayEnd: boolean;
	displayStart: boolean;
	endDate: string;
	labels?: CalendarDateLabels;
	showDate?: boolean;
	startDate: string;
}
