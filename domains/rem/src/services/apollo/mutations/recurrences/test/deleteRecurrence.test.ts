import { renderHook, act } from '@testing-library/react-hooks';
import { path } from 'ramda';

import { MutationType } from '@eventespresso/data';
import { ApolloMockedProvider } from '@eventespresso/edtr-services/src/context/test';
import { getMutationMocks, mockedRecurrences } from './data';
import { useRecurrenceMutator } from '../';

const timeout = 5000; // milliseconds
describe('deleteRecurrence', () => {
	const mockedRecurrence = mockedRecurrences.DELETE;

	const mutationMocks = getMutationMocks({}, MutationType.Delete);

	const { result: mockResult } = mutationMocks[0];

	it('checks for the mutation data to be same as the mock data', async () => {
		const wrapper = ApolloMockedProvider(mutationMocks);

		const { result, waitForValueToChange } = renderHook(() => useRecurrenceMutator(mockedRecurrence.id), {
			wrapper,
		});

		let mutationData: any;

		act(() => {
			result.current.deleteEntity().then(({ data }) => {
				mutationData = data;
			});
		});

		// wait for mutation promise to resolve
		await waitForValueToChange(() => mutationData, { timeout });

		expect(mutationData).toEqual(mockResult.data);
		const pathToId = ['deleteEspressoRecurrence', 'espressoRecurrence', 'name'];

		const idFromMutationData = path(pathToId, mutationData);
		const idFromMockData = path(pathToId, mockResult.data);

		expect(idFromMutationData).toEqual(idFromMockData);
	});
});