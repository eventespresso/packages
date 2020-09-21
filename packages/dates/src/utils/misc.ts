import { pipe } from 'ramda';
import { toDate } from 'date-fns';
import { setHours, setMinutes, setSeconds, setYear, setMonth, setDate } from 'date-fns/fp';

import type { PrepDatesComparisonFunc } from './types';

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
