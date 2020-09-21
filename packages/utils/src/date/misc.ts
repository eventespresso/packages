import { pipe } from 'ramda';
import { __ } from '@eventespresso/i18n';
import { setHours, setMinutes, setSeconds } from 'date-fns/fp';
import { parseISO } from 'date-fns';
import type { OptionsType } from '@eventespresso/adapters';

import { add, sub } from './addSub';
import { objectToSelectOptions } from '../list';
import type { Intervals, ShiftDateArgs } from './types';

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
