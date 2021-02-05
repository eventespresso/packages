import { useCallback } from 'react';

import type { MutationType, MutationInput, OperationVariables } from '@eventespresso/data';

import { useEventId } from '../../queries/events';

type MutationVariablesCb = (mutationType: MutationType, input: MutationInput) => OperationVariables;

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

			return {
				input: mutationInput,
			};
		},
		[eventId]
	);
};

export default useMutationVariables;
