import { pickBy } from 'ramda';
import { ExecutionResult } from 'graphql';

import { nodes as recurrences } from '../../../queries/recurrences/test/data';
import { MutationInput, MutationType } from '@eventespresso/data';
import { ucFirst } from '@eventespresso/utils';
import { mutations } from '../../';
import type { MockedResponse } from '@eventespresso/edtr-services/src/context/test/types';
import { CacheQueryOptions } from '@eventespresso/data';

export const mockedRecurrences = {
	[MutationType.Create]: { ...recurrences[0], id: recurrences[0].id + '-alpha' }, // make sure to change the ID to make it different}
	[MutationType.Update]: recurrences[0],
	[MutationType.Delete]: recurrences[0],
};

export const getMutationMocks = (
	mutationInput: MutationInput,
	mutationType: MutationType
): ReadonlyArray<MockedResponse> => {
	return [
		{
			request: getMockRequest(mutationInput, mutationType),
			result: getMockResult(mutationInput, mutationType),
		},
	];
};

export const getMockRequest = (mutationInput: MutationInput, mutationType: MutationType): CacheQueryOptions => {
	const input: MutationInput = {
		clientMutationId: `${mutationType}_RECURRENCE`,
		...mutationInput,
	};
	if (mutationType !== MutationType.Create && !input.id) {
		input.id = mockedRecurrences[mutationType].id;
	}

	return {
		query: mutations[`${mutationType}_RECURRENCE`],
		variables: {
			input,
		},
	};
};

export const getMockResult = (mutationInput: MutationInput, mutationType: MutationType): ExecutionResult => {
	// make sure that recurrences don't go into the result
	const input = pickBy<MutationInput, MutationInput>(
		(_, key) => Object.keys(mockedRecurrences[mutationType]).includes(key),
		mutationInput
	);
	return {
		data: {
			// e.g. createEspressoRecurrence
			[`${mutationType.toLowerCase()}EspressoRecurrence`]: {
				// e.g. UpdateEspressoRecurrencePayload
				__typename: `${ucFirst(mutationType.toLowerCase())}EspressoRecurrencePayload`,
				espressoRecurrence:
					MutationType.Delete === mutationType
						? { ...mockedRecurrences[mutationType], ...input }
						: { ...mockedRecurrences[mutationType], ...input },
			},
		},
	};
};
