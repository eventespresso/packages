import { useCallback } from 'react';
import { RRule } from 'rrule';

import { CreateRecurrenceInput, useRecurrenceMutator } from '../services/apollo';
import type { SaveRecurrenceCallback } from './types';

const useSaveRecurrence = (): SaveRecurrenceCallback => {
	const { createEntity: createRecurrence } = useRecurrenceMutator();

	// Async to make sure that prices are handled before updating the recurrence.
	return useCallback(
		async ({ rRule, exRule, rDates, exDates, dateDetails: { duration, unit } }) => {
			const name = RRule.fromString(rRule).toText();

			// prepare recurrence mutation input
			const normalizedInput: CreateRecurrenceInput = {
				name,
				rRule,
				exRule,
				rDates: JSON.stringify(rDates),
				exDates: JSON.stringify(exDates),
				dateDuration: `${duration}:${unit}`,
			};

			// create recurrence and wait for the promise to resolve
			const result = await createRecurrence(normalizedInput);

			const recurrenceId = result?.data?.createEspressoRecurrence?.espressoRecurrence?.id;

			return recurrenceId;
		},
		[createRecurrence]
	);
};

export default useSaveRecurrence;
