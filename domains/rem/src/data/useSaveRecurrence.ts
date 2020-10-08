import { useCallback } from 'react';
import { RRule } from 'rrule';

import { CreateRecurrenceInput, useRecurrenceMutator } from '../services/apollo';
import type { SaveRecurrenceCallback } from './types';

const useSaveRecurrence = (): SaveRecurrenceCallback => {
	const { createEntity: createRecurrence } = useRecurrenceMutator();

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

			const recurrence = result?.data?.createEspressoRecurrence?.espressoRecurrence;

			return recurrence;
		},
		[createRecurrence]
	);
};

export default useSaveRecurrence;
