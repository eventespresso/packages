export const getRecurrenceFrequency = (rRuleString: string): string => {
	let freq = 'DAILY';

	if (rRuleString.indexOf('FREQ=YEARLY') !== -1) {
		freq = 'YEARLY';
	} else if (rRuleString.indexOf('FREQ=MONTHLY') !== -1) {
		freq = 'MONTHLY';
	} else if (rRuleString.indexOf('FREQ=WEEKLY') !== -1) {
		freq = 'WEEKLY';
	}

	return freq;
};
