import { renderHook } from '@testing-library/react-hooks';

import useDatetimes from '../useDatetimes';
import { ApolloMockedProvider } from '../../../../context/test';
import { nodes } from './data';
import useInitDatetimeTestCache from './useInitDatetimeTestCache';
import { actWait } from '@eventespresso/utils/src/test';

describe('useDatetimes()', () => {
	const wrapper = ApolloMockedProvider();
	it('checks for the empty datetimes', async () => {
		const { result } = renderHook(() => useDatetimes(), { wrapper });
		await actWait();

		expect(result.current.length).toBe(0);
	});

	it('checks for the updated datetimes cache', async () => {
		const { result } = renderHook(
			() => {
				useInitDatetimeTestCache();
				return useDatetimes();
			},
			{ wrapper }
		);
		await actWait();

		const { current: cachedDatetimes } = result;

		expect(cachedDatetimes).toEqual(nodes);

		expect(cachedDatetimes.length).toEqual(nodes.length);

		expect(cachedDatetimes[0].id).toEqual(nodes[0].id);

		expect(cachedDatetimes[0].capacity).toEqual(nodes[0].capacity);
	});
});
