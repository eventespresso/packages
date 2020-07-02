import { renderHook, act } from '@testing-library/react-hooks';
import { path } from 'ramda';

import { MutationType, MutationInput } from '@eventespresso/data';
import { ApolloMockedProvider } from '@eventespresso/edtr-services/src/context/test';
import { getMutationMocks, mockedRecurrences } from './data';
import useInitRecurrenceTestCache from '../../../queries/recurrences/test/useInitRecurrenceTestCache';
import { useRecurrenceMutator } from '../';

const timeout = 5000; // milliseconds
describe('updateRecurrence', () => {
	const mockedRecurrence = mockedRecurrences.UPDATE;
	const testInput: MutationInput = {
		...mockedRecurrence,
		exDates: 'new-test-exDates',
		patternHash: 'new-pattern-ghi',
	};

	const mutationMocks = getMutationMocks({ ...testInput, id: mockedRecurrence.id }, MutationType.Update);

	const { result: mockResult } = mutationMocks[0];

	it('checks for the mutation data to be same as the mock data', async () => {
		const wrapper = ApolloMockedProvider(mutationMocks);

		const { result, waitForValueToChange } = renderHook(
			() => {
				useInitRecurrenceTestCache();
				return useRecurrenceMutator(mockedRecurrence.id);
			},
			{
				wrapper,
			}
		);

		let mutationData: any;

		act(() => {
			result.current.updateEntity(testInput).then(({ data }) => {
				mutationData = data;
			});
		});

		// wait for mutation promise to resolve
		await waitForValueToChange(() => mutationData, { timeout });

		expect(mutationData).toEqual(mockResult.data);
		const pathToName = ['updateEspressoRecurrence', 'espressoRecurrence', 'name'];

		const nameFromMutationData = path<string>(pathToName, mutationData);
		const nameFromMockData = path<string>(pathToName, mockResult.data);

		expect(nameFromMutationData).toEqual(nameFromMockData);
	});
});
