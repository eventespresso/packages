import { renderHook } from '@testing-library/react-hooks';

import useDatetimeIds from '../useDatetimeIds';
import { ApolloMockedProvider } from '../../../../context/test';
import { nodes } from './data';
import useInitDatetimeTestCache from './useInitDatetimeTestCache';
import { getGuids } from '@eventespresso/predicates';
import { actWait } from '@eventespresso/utils/src/test';

describe('useDatetimeIds', () => {
	const wrapper = ApolloMockedProvider();
	it('checks for the empty datetime IDs', async () => {
		const { result } = renderHook(() => useDatetimeIds(), { wrapper });
		await actWait();

		expect(result.current.length).toBe(0);
	});

	it('checks for datetime IDs after the cache is updated', async () => {
		const { result } = renderHook(
			() => {
				useInitDatetimeTestCache();
				return useDatetimeIds();
			},
			{ wrapper }
		);
		await actWait();

		const { current: cachedDatetimeIds } = result;
		const passedDatetimeIds = getGuids(nodes);

		expect(cachedDatetimeIds.length).toEqual(passedDatetimeIds.length);

		expect(cachedDatetimeIds).toEqual(passedDatetimeIds);

		expect(cachedDatetimeIds).toEqual(expect.arrayContaining(passedDatetimeIds));
	});
});
