import { useApolloClient } from '@eventespresso/data';
import { renderHook, act } from '@testing-library/react-hooks';
import { path } from 'ramda';

import { MutationType, MutationInput } from '@eventespresso/data';
import { ApolloMockedProvider } from '@eventespresso/edtr-services/src/context/test';
import { actWait } from '@eventespresso/utils/src/test';

import { getMutationMocks, mockedRecurrences } from './data';
import useRecurrenceItem from '../../../queries/recurrences/useRecurrenceItem';
import { useRecurrenceMutator } from '../';

describe('createRecurrence', () => {
	const testInput: MutationInput = {
		exDates: 'new test exDates',
		name: 'new-name-ghi',
	};
	const mockedRecurrence = mockedRecurrences.CREATE;

	const mutationMocks = getMutationMocks(testInput, MutationType.Create);

	const { result: mockResult } = mutationMocks[0];

	it('checks for the mutation data to be same as the mock data', async () => {
		const wrapper = ApolloMockedProvider(mutationMocks);

		const { result } = renderHook(() => useRecurrenceMutator(), {
			wrapper,
		});

		let mutationData: any;

		act(() => {
			result.current.createEntity(testInput).then(({ data }) => {
				mutationData = data;
			});
		});

		// wait for mutation promise to resolve
		await actWait();

		expect(mutationData).toEqual(mockResult.data);
		const pathToName = ['createEspressoRecurrence', 'espressoRecurrence', 'name'];

		const nameFromMutationData = path<string>(pathToName, mutationData);
		const nameFromMockData = path<string>(pathToName, mockResult.data);

		expect(nameFromMutationData).toEqual(nameFromMockData);
	});

	it('checks for the mutation data to be same as that in the cache - useRecurrenceItem', async () => {
		const wrapper = ApolloMockedProvider(mutationMocks);

		const { result: mutationResult } = renderHook(
			() => ({
				mutator: useRecurrenceMutator(),
				client: useApolloClient(),
			}),
			{
				wrapper,
			}
		);

		act(() => {
			mutationResult.current.mutator.createEntity(testInput);
		});

		// wait for mutation promise to resolve
		await actWait();

		const cache = mutationResult.current.client.extract();
		const { result: cacheResult } = renderHook(
			() => {
				const client = useApolloClient();
				// restore the cache from previous render
				client.restore(cache);
				return useRecurrenceItem({ id: mockedRecurrence.id });
			},
			{
				wrapper,
			}
		);

		await actWait();

		const cachedRecurrence = cacheResult.current;

		expect(cachedRecurrence).toEqual({ ...mockedRecurrence, ...testInput });
	});
});
