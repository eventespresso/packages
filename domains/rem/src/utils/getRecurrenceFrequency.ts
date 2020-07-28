import { Frequency } from 'rrule';

// "freq" is the named capturing group
const FREQ_PATTERN = /FREQ=(?<freq>(?:YEAR|MONTH|WEEK|DAI)LY)/;

export const getRecurrenceFrequency = (rRuleString: string): keyof Partial<typeof Frequency> => {
	return (rRuleString.match(FREQ_PATTERN)?.groups?.freq || 'DAILY') as keyof Partial<typeof Frequency>;
};
