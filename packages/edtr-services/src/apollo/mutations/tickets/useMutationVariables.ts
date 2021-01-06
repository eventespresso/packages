import { useCallback } from 'react';
import type { OperationVariables } from 'apollo-client';

import type { MutationType, MutationInput } from '@eventespresso/data';
import { KeysOfType, normalizeNumericFields } from '@eventespresso/utils';

import { TicketBaseInput } from './types';

type MutationVariablesCb = (mutationType: MutationType, input: MutationInput) => OperationVariables;

const numericFields: Array<KeysOfType<TicketBaseInput, number>> = [
	'max',
	'min',
	'order',
	'price',
	'quantity',
	'reserved',
	'row',
	'sold',
	'uses',
	'wpUser',
];

const useMutationVariables = (): MutationVariablesCb => {
	return useCallback<MutationVariablesCb>((mutationType, input) => {
		const mutationInput: MutationInput = {
			clientMutationId: `${mutationType}_TICKET`,
			...input,
		};

		// normalize numeric fields
		const normalizedInput = normalizeNumericFields(numericFields, mutationInput);

		return {
			input: normalizedInput,
		};
	}, []);
};

export default useMutationVariables;
