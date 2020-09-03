import { renderHook } from '@testing-library/react-hooks';

import useTickets from '../useTickets';
import { ApolloMockedProvider } from '../../../../context/test';
import { nodes } from './data';
import useInitTicketTestCache from './useInitTicketTestCache';
import { actWait } from '@eventespresso/utils/src/test';

describe('useTickets()', () => {
	const wrapper = ApolloMockedProvider();
	it('checks for the empty tickets', async () => {
		const { result } = renderHook(() => useTickets(), { wrapper });

		await actWait();

		expect(result.current.length).toBe(0);
	});

	it('checks for the updated tickets cache', async () => {
		const { result } = renderHook(
			() => {
				useInitTicketTestCache();
				return useTickets();
			},
			{ wrapper }
		);

		await actWait();

		const { current: cachedTickets } = result;

		expect(cachedTickets).toEqual(nodes);

		expect(cachedTickets.length).toEqual(nodes.length);

		expect(cachedTickets[0].id).toEqual(nodes[0].id);

		expect(cachedTickets[0].name).toEqual(nodes[0].name);
	});
});
