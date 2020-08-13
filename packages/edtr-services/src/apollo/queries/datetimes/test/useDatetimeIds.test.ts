import { renderHook } from '@testing-library/react-hooks';

import useDatetimeIds from '../useDatetimeIds';
import { ApolloMockedProvider } from '../../../../context/test';
import { nodes } from './data';
import useInitDatetimeTestCache from './useInitDatetimeTestCache';
import { getGuids } from '@eventespresso/predicates';

describe('useDatetimeIds', () => {
	const wrapper = ApolloMockedProvider();
	it('checks for the empty datetime IDs', () => {
		const { result } = renderHook(() => useDatetimeIds(), { wrapper });

		expect(result.current.length).toBe(0);
	});

	it('checks for datetime IDs after the cache is updated', () => {
		const { result } = renderHook(
			() => {
				useInitDatetimeTestCache();
				return useDatetimeIds();
			},
			{ wrapper }
		);

		const { current: cachedDatetimeIds } = result;
		const passedDatetimeIds = getGuids(nodes);

		expect(cachedDatetimeIds.length).toEqual(passedDatetimeIds.length);

		expect(cachedDatetimeIds).toEqual(passedDatetimeIds);

		expect(cachedDatetimeIds).toEqual(expect.arrayContaining(passedDatetimeIds));
	});
});
