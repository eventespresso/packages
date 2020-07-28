import { Frequency } from 'rrule';
import { getRecurrenceFrequency } from './getRecurrenceFrequency';

export const DATE_COUNT_LIMITS: { [key in keyof Partial<typeof Frequency>]: number } = {
	YEARLY: 5,
	MONTHLY: 36,
	WEEKLY: 104,
	DAILY: 183, // default
};

/**
 * Returns the limit for generating dates.
 */
const getDatesLimit = (rruleString: string): number => {
	// return 'DAILY' by default
	const freq = getRecurrenceFrequency(rruleString);

	return DATE_COUNT_LIMITS?.[freq];
};

export default getDatesLimit;
