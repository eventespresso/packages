import { renderHook } from '@testing-library/react-hooks';

import useRecurrenceItem from '../useRecurrenceItem';
import { ApolloMockedProvider } from '@eventespresso/edtr-services/src/context/test';
import { nodes } from './data';
import useInitRecurrenceTestCache from './useInitRecurrenceTestCache';
import { actWait } from '@eventespresso/utils/src/test';

describe('useRecurrenceItem', () => {
	const wrapper = ApolloMockedProvider();
	const existingRecurrence = nodes[0];
	it('checks for non existent recurrence when the cache is empty', async () => {
		const { result } = renderHook(() => useRecurrenceItem({ id: existingRecurrence.id }), {
			wrapper,
		});
		await actWait();

		expect(result.current).toBe(undefined);
	});

	it('checks for non existent recurrence when the cache is NOT empty', async () => {
		const { result } = renderHook(
			() => {
				useInitRecurrenceTestCache();
				return useRecurrenceItem({ id: 'fake-id' });
			},
			{ wrapper }
		);
		await actWait();

		expect(result.current).toBe(undefined);
	});

	it('checks for an existent recurrence', async () => {
		const { result } = renderHook(
			() => {
				useInitRecurrenceTestCache();
				return useRecurrenceItem({ id: existingRecurrence.id });
			},
			{ wrapper }
		);
		await actWait();

		const recurrenceItem = result.current;

		expect(recurrenceItem).toBeDefined();

		expect(recurrenceItem.id).toEqual(existingRecurrence.id);

		expect(recurrenceItem.dbId).toEqual(existingRecurrence.dbId);

		expect(recurrenceItem).toEqual(existingRecurrence);
	});
});
