import { renderHook } from '@testing-library/react-hooks';

import useRecurrences from '../useRecurrences';
import { ApolloMockedProvider } from '@eventespresso/edtr-services/src/context/test';
import { nodes } from './data';
import useInitRecurrenceTestCache from './useInitRecurrenceTestCache';

const timeout = 5000; // milliseconds
describe('useRecurrences()', () => {
	const wrapper = ApolloMockedProvider();
	it('checks for the empty recurrences', async () => {
		const { result, waitForNextUpdate } = renderHook(() => useRecurrences(), { wrapper });

		await waitForNextUpdate({ timeout });

		expect(result.current.length).toBe(0);
	});

	it('checks for the updated recurrences cache', async () => {
		const { result, waitForNextUpdate } = renderHook(
			() => {
				useInitRecurrenceTestCache();
				return useRecurrences();
			},
			{ wrapper }
		);
		await waitForNextUpdate({ timeout });

		const { current: cachedRecurrences } = result;

		expect(cachedRecurrences).toEqual(nodes);

		expect(cachedRecurrences.length).toEqual(nodes.length);

		expect(cachedRecurrences[0].id).toEqual(nodes[0].id);

		expect(cachedRecurrences[0].patternHash).toEqual(nodes[0].patternHash);
	});
});
