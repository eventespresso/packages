import { Frequency } from 'rrule';

import { __ } from '@eventespresso/i18n';

// "freq" is the named capturing group
const FREQ_PATTERN = /FREQ=(?<freq>(?:YEAR|MONTH|WEEK|DAI)LY)/;
/**
 * Returns the frequency set in the given rrule string. Returns 'DAILY' by default
 */
export const getRecurrenceFrequency = (rRuleString: string): keyof Partial<typeof Frequency> => {
	return (rRuleString.match(FREQ_PATTERN)?.groups?.freq || 'DAILY') as keyof Partial<typeof Frequency>;
};

// "count" is the named capturing group
const COUNT_PATTERN = /COUNT=(?<count>[0-9]+?);/;
/**
 * Returns the COUNT set in the given rrule string. Returns 0 by default
 */
export const getRecurrenceCount = (rRuleString: string): number => {
	return parseInt(rRuleString.match(COUNT_PATTERN)?.groups?.count || '0');
};

export const DATE_COUNT_LIMITS: { [key in keyof Partial<typeof Frequency>]: number } = {
	YEARLY: 5,
	MONTHLY: 36,
	WEEKLY: 52,
	DAILY: 92, // default
};

/**
 * Returns the limit for generating dates.
 */
export const getDatesLimit = (rruleString: string): number => {
	// This is the maximum number of dates allowed to be generated
	const maxLimit = getMaxDatesLimit(rruleString);

	// This is the count set in the pattern
	const count = getRecurrenceCount(rruleString);

	// if COUNT is used in pattern
	if (count) {
		// return minimum of the two
		return Math.min(count, maxLimit);
	}

	return maxLimit;
};

/**
 * Returns the maximum limit for generating dates.
 */
export const getMaxDatesLimit = (rruleString: string): number => {
	// It's 'DAILY' by default
	const freq = getRecurrenceFrequency(rruleString);

	return DATE_COUNT_LIMITS?.[freq];
};

export const getLimitsWarning = (rRule: string): string => {
	const freq = getRecurrenceFrequency(rRule);

	let warning = '';

	switch (true) {
		case freq === 'YEARLY':
			warning = __('The number of Event Dates has been capped at 5 for YEARLY recurrence patterns');
			break;
		case freq === 'MONTHLY':
			warning = __('The number of Event Dates has been capped at 36 for MONTHLY recurrence patterns (3 years)');
			break;
		case freq === 'WEEKLY':
			warning = __('The number of Event Dates has been capped at 52 for WEEKLY recurrence patterns (1 year)');
			break;
		case freq === 'DAILY':
			warning = __('The number of Event Dates has been capped at 92 for DAILY recurrence patterns (~3 months)');
			break;
	}

	return warning;
};
