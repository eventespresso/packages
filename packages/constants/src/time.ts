export enum TIME {
	MINUTE_IN_SECONDS = 60,
	HOUR_IN_SECONDS = MINUTE_IN_SECONDS * 60,
	DAY_IN_SECONDS = HOUR_IN_SECONDS * 24,
	WEEK_IN_SECONDS = HOUR_IN_SECONDS * 7,
	MONTH_IN_SECONDS = DAY_IN_SECONDS * 30,
}

/**
 * object where keys are WordPress time format parameters
 * and values are substitutions required to work with react-time-picker
 */
export const timeFormats = {
	H: 'HH',
	G: 'H',
	h: 'hh',
	g: 'h',
	i: 'mm',
	A: 'a',
};
