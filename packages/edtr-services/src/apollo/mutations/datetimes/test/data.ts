import { pickBy } from 'ramda';
import { ExecutionResult } from 'graphql';

import { nodes as datetimes } from '../../../queries/datetimes/test/data';
import { GraphQLRequest, MutationInput, MutationType } from '@eventespresso/data';
import { ucFirst } from '@eventespresso/utils';
import { eventId } from '../../../../context/test';
import type { MockedResponse } from '../../../../context/test/types';
import { mutations } from '../..';

export const mockedDatetimes = {
	[MutationType.Create]: { ...datetimes[0], id: datetimes[0].id + '-alpha' }, // make sure to change the ID to make it different}
	[MutationType.Update]: datetimes[0],
	[MutationType.Delete]: datetimes[0],
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

export const getMockRequest = (mutationInput: MutationInput, mutationType: MutationType): GraphQLRequest => {
	const input: MutationInput = {
		clientMutationId: `${mutationType}_DATETIME`,
		...mutationInput,
	};
	if (mutationType === MutationType.Create) {
		input.eventId = eventId; // required for createDatetime
	} else if (!input.id) {
		input.id = mockedDatetimes[mutationType].id;
	}

	return {
		query: mutations[`${mutationType}_DATETIME`],
		variables: {
			input,
		},
	};
};

export const getMockResult = (mutationInput: MutationInput, mutationType: MutationType): ExecutionResult => {
	// make sure that tickets don't go into the result
	const input = pickBy<MutationInput, MutationInput>(
		(_, key) => Object.keys(mockedDatetimes[mutationType]).includes(key),
		mutationInput
	);
	return {
		data: {
			// e.g. createEspressoDatetime
			[`${mutationType.toLowerCase()}EspressoDatetime`]: {
				// e.g. UpdateEspressoDatetimePayload
				__typename: `${ucFirst(mutationType.toLowerCase())}EspressoDatetimePayload`,
				espressoDatetime:
					MutationType.Delete === mutationType
						? mockedDatetimes[mutationType]
						: { ...mockedDatetimes[mutationType], ...input },
			},
		},
	};
};
