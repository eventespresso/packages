import { pipe } from 'ramda';
import { __ } from '@wordpress/i18n';
import { setHours, setMinutes, setSeconds, setYear, setMonth, setDate } from 'date-fns/fp';
import type { OptionsType } from '@eventespresso/adapters';
import { parseISO } from 'date-fns';

import { Intervals, ShiftDateArgs } from './types';
import { add, sub } from './addSub';

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
	const options = Object.entries(intervals).map(([value, label]) => ({ value, label }));

	if (prependEmpty) {
		return [{ label: '', value: '' }, ...options];
	}
	return options;
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
