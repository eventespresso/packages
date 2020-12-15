import { getRecurrenceFrequency, DATE_COUNT_LIMITS } from './misc';
import { useFormState, useGenerateDates } from '../data';

export const useIsCountCapped = (isForSubmit?: boolean) => {
	const datesCount = useGenerateDates().length;
	const { rRule } = useFormState();
	const freq = getRecurrenceFrequency(rRule);

	// Use the limits defined in constants
	const isCountCapped = isForSubmit
		? // for submit, we will only check if the count is more than the limit
		  datesCount > DATE_COUNT_LIMITS?.[freq]
		: datesCount >= DATE_COUNT_LIMITS?.[freq];

	return isCountCapped;
};
