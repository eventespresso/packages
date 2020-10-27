import { renderHook } from '@testing-library/react-hooks';

import { actWait } from '@eventespresso/utils/src/test';
import useDatetimeItem from '../useDatetimeItem';
import { ApolloMockedProvider } from '../../../../context/test';
import { nodes } from './data';
import useInitDatetimeTestCache from './useInitDatetimeTestCache';

describe('useDatetimeItem', () => {
	const wrapper = ApolloMockedProvider();
	const existingDatetime = nodes[0];
	it('checks for non existent datetime when the cache is empty', async () => {
		const { result } = renderHook(() => useDatetimeItem({ id: existingDatetime.id }), {
			wrapper,
		});
		await actWait();

		expect(result.current).toBe(undefined);
	});

	it('checks for non existent datetime when the cache is NOT empty', async () => {
		const { result } = renderHook(
			() => {
				useInitDatetimeTestCache();
				return useDatetimeItem({ id: 'fake-id' });
			},
			{ wrapper }
		);
		await actWait();

		expect(result.current).toBe(undefined);
	});

	it('checks for an existent datetime', async () => {
		const { result } = renderHook(
			() => {
				useInitDatetimeTestCache();
				return useDatetimeItem({ id: existingDatetime.id });
			},
			{ wrapper }
		);
		await actWait();

		const datetimeItem = result.current;

		expect(datetimeItem).toBeDefined();

		expect(datetimeItem.id).toEqual(existingDatetime.id);

		expect(datetimeItem.dbId).toEqual(existingDatetime.dbId);

		expect(datetimeItem).toEqual(existingDatetime);
	});
});
