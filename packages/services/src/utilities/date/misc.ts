import { pipe } from 'ramda';
import { __ } from '@wordpress/i18n';
import { setHours, setMinutes, setSeconds, setYear, setMonth, setDate } from 'date-fns/fp';
import type { OptionsType } from '@eventespresso/adapters';

import { Intervals } from './types';

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

export const intervalsToOptions = (intervals: Intervals): OptionsType => {
	return Object.entries(intervals).map(([value, label]) => ({ value, label }));
};
