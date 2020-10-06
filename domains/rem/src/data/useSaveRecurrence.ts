import { useCallback } from 'react';
import { RRule } from 'rrule';

import type { EntityId } from '@eventespresso/data';

import { CreateRecurrenceInput, useRecurrenceMutator } from '../services/apollo';
import type { FormState } from './types';

type Callback = (formState: FormState) => Promise<EntityId>;

const useSaveRecurrence = (): Callback => {
	const { createEntity: createRecurrence } = useRecurrenceMutator();

	// Async to make sure that prices are handled before updating the recurrence.
	return useCallback(
		async ({ rRule, exRule, rDates, exDates, dateDetails: { duration } }) => {
			const name = RRule.fromString(rRule).toText();

			// prepare recurrence mutation input
			const normalizedInput: CreateRecurrenceInput = {
				rRule,
				exRule,
				name,
				rDates: JSON.stringify(rDates),
				exDates: JSON.stringify(exDates),
				dateDuration: duration,
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
