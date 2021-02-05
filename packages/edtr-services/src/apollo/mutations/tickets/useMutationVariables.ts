import { useCallback } from 'react';

import type { MutationType, MutationInput, OperationVariables } from '@eventespresso/data';

type MutationVariablesCb = (mutationType: MutationType, input: MutationInput) => OperationVariables;

const useMutationVariables = (): MutationVariablesCb => {
	return useCallback<MutationVariablesCb>((mutationType, input) => {
		const mutationInput: MutationInput = {
			clientMutationId: `${mutationType}_TICKET`,
			...input,
		};

		return {
			input: mutationInput,
		};
	}, []);
};

export default useMutationVariables;
