import { renderHook } from '@testing-library/react-hooks';

import { useRelations } from '@eventespresso/services';
import { getGuids } from '@eventespresso/predicates';
import useTicketPrices from '../useTicketPrices';
import { ApolloMockedProvider } from '../../../../context/test';
import { nodes } from './data';
import useInitTicketTestCache from './useInitTicketTestCache';
import useInitPriceTestCache from '../../prices/test/useInitPriceTestCache';
import { actWait } from '@eventespresso/utils/src/test';

describe('useTicketPrices', () => {
	const wrapper = ApolloMockedProvider();
	const existingTicket = nodes[0];

	it('returns empty array for ticket prices when the ticket exists and the cache is empty', async () => {
		const { result } = renderHook(() => useTicketPrices(), { wrapper });

		await actWait();

		const cachedTicketPrices = result.current(existingTicket.id);

		expect(cachedTicketPrices).toEqual([]);
	});

	it('returns empty array for ticket prices when the ticket does not exist and the cache is empty', async () => {
		const { result } = renderHook(() => useTicketPrices(), { wrapper });

		await actWait();

		const cachedTicketPrices = result.current('fake-id');

		expect(cachedTicketPrices).toEqual([]);
	});

	it('returns empty array for ticket prices when the ticket does not exist and the ticket cache is NOT empty', async () => {
		const { result } = renderHook(
			() => {
				useInitTicketTestCache();
				return useTicketPrices();
			},
			{ wrapper }
		);

		await actWait();

		const cachedTicketPrices = result.current('fake-id');

		expect(cachedTicketPrices).toEqual([]);
	});

	it('returns empty array for ticket prices when the ticket exists, has price relations, ticket cache is NOT empty but price cache IS empty', async () => {
		const { result } = renderHook(
			() => {
				useInitTicketTestCache();
				return useTicketPrices();
			},
			{ wrapper }
		);

		await actWait();

		const cachedTicketPrices = result.current(existingTicket.id);

		expect(cachedTicketPrices).toEqual([]);
	});

	it('returns an array of related ticket prices when the ticket exists, has price relations and the ticket/price cache is NOT empty', async () => {
		const { result: relationsResult } = renderHook(() => useRelations(), { wrapper });
		await actWait();

		const relatedTicketPriceIds = relationsResult.current.getRelations({
			entity: 'tickets',
			entityId: existingTicket.id,
			relation: 'prices',
		});

		const { result } = renderHook(
			() => {
				useInitTicketTestCache();
				useInitPriceTestCache();
				return useTicketPrices();
			},
			{ wrapper }
		);
		await actWait();

		const cachedTicketPrices = result.current(existingTicket.id);

		const cachedTicketPriceIds = getGuids(cachedTicketPrices);

		expect(cachedTicketPriceIds.length).toEqual(relatedTicketPriceIds.length);

		expect(cachedTicketPriceIds).toEqual(relatedTicketPriceIds);
	});
});
