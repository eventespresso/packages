import type { DateRange, ShowTime } from '../types';
import type { IntervalType } from './addSub';

export type TzDateFn = (date: Date | string | number, timezone: string) => Date;

export type Intervals = { [key in IntervalType]?: string };

export type ShiftDateArgs = {
	unit: IntervalType;
	value: number;
	type: 'earlier' | 'later';
};

export type PrepSingleDateComparisonFunc = (firstDate: Date | number, considerTime: boolean) => Date;

interface DateComparison<T> {
	(firstDate: Date | number, secondDate: Date | number, considerTime?: boolean): T;
}

export type DateComparisonFunc = DateComparison<boolean>;

export type PrepDatesComparisonFunc = DateComparison<[Date, Date]>;

interface UseDatePickerValidationReturn {
	startDateIsValid: boolean;
	startDateIsToday: boolean;
	startDateAfterToday: boolean;
	startDateBeforeEndDate: boolean;
	endDateIsValid: boolean;
	endDateIsToday: boolean;
	endDateAfterToday: boolean;
	endDateAfterStartDate: boolean;
}

export type RangeFormat = string;

export interface RangeFormatProps extends ShowTime {
	formatTokens: RangeFormatTokens;
	range: DateRange;
}

interface RangeFormatTokens {
	ampm?: string;
	day?: string;
	daySeparator?: string;
	hour?: string;
	min?: string;
	month?: string;
	monthSeparator?: string;
	timeSeparator?: string;
	year?: string;
	yearSeparator?: string;
}

// for comparing a date against NOW
export type SingleDateComparisonFunc = (firstDate: Date | number, considerTime?: boolean) => boolean;

export type UseDatePickerValidation = DateComparison<UseDatePickerValidationReturn>;
