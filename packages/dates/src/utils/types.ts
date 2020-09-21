export type PrepSingleDateComparisonFunc = (firstDate: Date | number, considerTime: boolean) => Date;

export type PrepDatesComparisonFunc = (
	firstDate: Date | number,
	secondDate: Date | number,
	considerTime: boolean
) => [Date, Date];

export type DateComparisonFunc = (
	firstDate: Date | number,
	secondDate: Date | number,
	considerTime?: boolean
) => boolean;

// for comparing a date against NOW
export type SingleDateComparisonFunc = (firstDate: Date | number, considerTime?: boolean) => boolean;
