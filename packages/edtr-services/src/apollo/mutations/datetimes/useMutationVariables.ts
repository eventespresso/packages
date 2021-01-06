import { useCallback } from 'react';
import type { OperationVariables } from 'apollo-client';

import type { MutationType, MutationInput } from '@eventespresso/data';
import { KeysOfType, normalizeNumericFields } from '@eventespresso/utils';

import { useEventId } from '../../queries/events';
import { DatetimeBaseInput } from './types';

type MutationVariablesCb = (mutationType: MutationType, input: MutationInput) => OperationVariables;

const numericFields: Array<KeysOfType<DatetimeBaseInput, number>> = [
	'capacity',
	'eventId',
	'order',
	'reserved',
	'sold',
];

const useMutationVariables = (): MutationVariablesCb => {
	const eventId = useEventId();

	return useCallback<MutationVariablesCb>(
		(mutationType, input) => {
			const mutationInput: MutationInput = {
				clientMutationId: `${mutationType}_DATETIME`,
				...input,
			};

			if (mutationType === 'CREATE') {
				mutationInput.eventId = eventId; // required for createDatetime
			}

			// normalize numeric fields
			const normalizedInput = normalizeNumericFields(numericFields, mutationInput);

			return {
				input: normalizedInput,
			};
		},
		[eventId]
	);
};

export default useMutationVariables;
