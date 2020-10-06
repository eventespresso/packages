import { useCallback } from 'react';
import type { OperationVariables } from 'apollo-client';

import type { MutationType, MutationInput } from '@eventespresso/data';

type MutationVariablesCb = (mutationType: MutationType, input: MutationInput) => OperationVariables;

const useMutationVariables = (): MutationVariablesCb => {
	return useCallback<MutationVariablesCb>((mutationType, input) => {
		const mutationInput: MutationInput = {
			clientMutationId: `${mutationType}_RECURRENCE`,
			...input,
		};

		return {
			input: mutationInput,
		};
	}, []);
};

export default useMutationVariables;
