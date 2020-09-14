import { IntervalType } from './addSub';

export type TzDateFn = (date: Date | string | number, timezone: string) => Date;

export type Intervals = { [key in IntervalType]?: string };

export type ShiftDateArgs = {
	unit: IntervalType;
	value: number;
	type: 'earlier' | 'later';
};

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
