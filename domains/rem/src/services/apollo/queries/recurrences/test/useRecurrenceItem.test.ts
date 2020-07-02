import { renderHook, cleanup } from '@testing-library/react-hooks';

import useRecurrenceItem from '../useRecurrenceItem';
import { ApolloMockedProvider } from '@eventespresso/edtr-services/src/context/test';
import { nodes } from './data';
import useInitRecurrenceTestCache from './useInitRecurrenceTestCache';

afterEach(() => {
	cleanup();
});

describe('useRecurrenceItem', () => {
	const wrapper = ApolloMockedProvider();
	const existingRecurrence = nodes[0];
	it('checks for non existent recurrence when the cache is empty', () => {
		const { result, waitForValueToChange } = renderHook(() => useRecurrenceItem({ id: existingRecurrence.id }), {
			wrapper,
		});
		waitForValueToChange(() => result.current);

		expect(result.current).toBe(undefined);
	});

	it('checks for non existent recurrence when the cache is NOT empty', () => {
		const { result, waitForValueToChange } = renderHook(
			() => {
				useInitRecurrenceTestCache();
				return useRecurrenceItem({ id: 'fake-id' });
			},
			{ wrapper }
		);
		waitForValueToChange(() => result.current);

		expect(result.current).toBe(undefined);
	});

	it('checks for an existent recurrence', () => {
		const { result, waitForValueToChange } = renderHook(
			() => {
				useInitRecurrenceTestCache();
				return useRecurrenceItem({ id: existingRecurrence.id });
			},
			{ wrapper }
		);
		waitForValueToChange(() => result.current);

		const recurrenceItem = result.current;

		expect(recurrenceItem).toBeDefined();

		expect(recurrenceItem.id).toEqual(existingRecurrence.id);

		expect(recurrenceItem.dbId).toEqual(existingRecurrence.dbId);

		expect(recurrenceItem).toEqual(existingRecurrence);
	});
});
