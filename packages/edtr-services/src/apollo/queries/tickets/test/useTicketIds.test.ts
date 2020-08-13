import { renderHook } from '@testing-library/react-hooks';

import useTicketIds from '../useTicketIds';
import { ApolloMockedProvider } from '../../../../context/test';
import { nodes } from './data';
import useInitTicketTestCache from './useInitTicketTestCache';
import { getGuids } from '@eventespresso/predicates';

describe('useTicketIds', () => {
	const wrapper = ApolloMockedProvider();
	it('checks for the empty ticket IDs', () => {
		const { result } = renderHook(() => useTicketIds(), { wrapper });

		expect(result.current.length).toBe(0);
	});

	it('checks for ticket IDs after the cache is updated', () => {
		const { result } = renderHook(
			() => {
				useInitTicketTestCache();
				return useTicketIds();
			},
			{ wrapper }
		);

		const { current: cachedTicketIds } = result;
		const passedTicketIds = getGuids(nodes);

		expect(cachedTicketIds.length).toEqual(passedTicketIds.length);

		expect(cachedTicketIds).toEqual(passedTicketIds);

		expect(cachedTicketIds).toEqual(expect.arrayContaining(passedTicketIds));
	});
});
