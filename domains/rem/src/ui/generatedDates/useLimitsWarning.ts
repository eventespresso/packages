import { __ } from '@eventespresso/i18n';

import { getRecurrenceFrequency, DATE_COUNT_LIMITS } from '../../utils';
import { useFormState, useGenerateDates } from '../../data';

const useLimitsWarning = (isForSubmit?: boolean): string => {
	const datesCount = useGenerateDates().length;
	const { rRule } = useFormState();
	const freq = getRecurrenceFrequency(rRule);

	// Use the limits defined in constants
	const isCountCapped = isForSubmit
		? // for submit, we will only check if the count is more than the limit
		  datesCount > DATE_COUNT_LIMITS?.[freq]
		: datesCount >= DATE_COUNT_LIMITS?.[freq];

	let warning = '';

	if (!isCountCapped) {
		return warning;
	}

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

export default useLimitsWarning;
