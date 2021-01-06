import { useCallback } from 'react';
import type { OperationVariables } from 'apollo-client';

import type { MutationType, MutationInput } from '@eventespresso/data';
import { KeysOfType, normalizeNumericFields } from '@eventespresso/utils';

import { PriceBaseInput } from './types';

type MutationVariablesCb = (mutationType: MutationType, input: MutationInput) => OperationVariables;

const numericFields: Array<KeysOfType<PriceBaseInput, number>> = ['amount', 'order', 'overrides', 'wpUser'];

const useMutationVariables = (): MutationVariablesCb => {
	return useCallback<MutationVariablesCb>((mutationType, input) => {
		const mutationInput: MutationInput = {
			clientMutationId: `${mutationType}_PRICE`,
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
