import { pipe } from 'ramda';
import { __ } from '@wordpress/i18n';
import { setHours, setMinutes, setSeconds, setYear, setMonth, setDate } from 'date-fns/fp';
import { parseISO, toDate } from 'date-fns';
import type { OptionsType } from '@eventespresso/adapters';

import { add, sub } from './addSub';
import { objectToSelectOptions } from '../list';
import type { Intervals, PrepDatesComparisonFunc, ShiftDateArgs } from './types';

/**
 * Sets the time of the date object to zero hour
 */
export const setTimeToZeroHour = (date: Date): Date => pipe(setHours(0), setMinutes(0), setSeconds(0))(date);

/**
 * Sets the date, month and year of the date object to those of today
 */
export const setDateToToday = (date: Date): Date => {
	const today = new Date();

	// prettier-ignore
	return pipe(
        setDate(today.getDate()),
        setMonth(today.getMonth()),
        setYear(today.getFullYear()
    ))(date);
};

export const DATE_INTERVALS: Intervals = {
	months: __('month(s)'),
	weeks: __('week(s)'),
	days: __('day(s)'),
	hours: __('hour(s)'),
	minutes: __('minute(s)'),
};

export const intervalsToOptions = (intervals: Intervals, prependEmpty?: boolean): OptionsType => {
	return objectToSelectOptions(intervals, prependEmpty);
};

/**
 * Shifts the given date according to args.
 */
export const shiftDate = (args: ShiftDateArgs) => (date: Date | string): Date => {
	const parsedDate = date instanceof Date ? date : parseISO(date);
	if (args?.unit && args?.value && args?.type) {
		const fn = args.type === 'earlier' ? sub : add;
		return fn(args.unit, parsedDate, args.value);
	}
	return parsedDate;
};

/**
 * Sets the default time for a date based on `type`
 * Default time: 'start' => 8 am, 'end' => 5 pm
 */
export const setDefaultTime = (date: Date, type: 'start' | 'end' = 'start'): Date => {
	const hours = type === 'start' ? 8 : 17;
	return pipe(setHours(hours), setMinutes(0), setSeconds(0))(date);
};

/**
 *  accepts two Dates and/or timestamps, converts any timestamps to Dates,
 *  will set all time properties to 0 if considerTime is false (default)
 */
export const prepDatesForComparison: PrepDatesComparisonFunc = (firstDate, secondDate, considerTime = false) => {
	let parsedFirstDate = firstDate instanceof Date ? firstDate : toDate(firstDate);
	let parsedSecondDate = secondDate instanceof Date ? secondDate : toDate(secondDate);
	if (!considerTime) {
		parsedFirstDate = setTimeToZeroHour(parsedFirstDate);
		parsedSecondDate = setTimeToZeroHour(parsedSecondDate);
	}
	return [parsedFirstDate, parsedSecondDate];
};
