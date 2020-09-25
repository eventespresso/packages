import { renderHook } from '@testing-library/react-hooks';

import useRelatedTickets from '../useRelatedTickets';
import { ApolloMockedProvider } from '../../../../context/test';
import { nodes as tickets } from './data';
import useInitTicketTestCache from './useInitTicketTestCache';
import { nodes as datetimes } from '../../datetimes/test/data';
import { nodes as prices } from '../../prices/test/data';
import { actWait } from '@eventespresso/utils/src/test';

describe('useRelatedTickets', () => {
	const wrapper = ApolloMockedProvider();
	it('returns empty array for unrelated entity types', async () => {
		const { result } = renderHook(() => useRelatedTickets({ entity: 'priceTypes', entityId: '' }), { wrapper });

		await actWait();

		expect(result.current).toEqual([]);
	});

	it('returns empty array for null or undefined entity types', async () => {
		for (const value of [null, undefined]) {
			const { result } = renderHook(() => useRelatedTickets({ entity: value, entityId: value }), {
				wrapper,
			});

			await actWait();

			expect(result.current).toEqual([]);
		}
	});

	it('returns related tickets for a given datetime', async () => {
		const { result } = renderHook(
			() => {
				useInitTicketTestCache();
				return useRelatedTickets({ entity: 'datetimes', entityId: datetimes[0].id });
			},
			{ wrapper }
		);
		await actWait();

		expect(result.current).toEqual([tickets[0], tickets[1]]);

		const { result: anotherResult } = renderHook(
			() => {
				useInitTicketTestCache();
				return useRelatedTickets({ entity: 'datetimes', entityId: datetimes[1].id });
			},
			{ wrapper }
		);
		await actWait();

		expect(anotherResult.current).toEqual([tickets[1]]);
	});

	it('returns related tickets for a given price', async () => {
		const { result } = renderHook(
			() => {
				useInitTicketTestCache();
				return useRelatedTickets({ entity: 'prices', entityId: prices[0].id });
			},
			{ wrapper }
		);
		await actWait();

		expect(result.current).toEqual([tickets[0]]);

		const { result: anotherResult } = renderHook(
			() => {
				useInitTicketTestCache();
				return useRelatedTickets({ entity: 'prices', entityId: prices[1].id });
			},
			{ wrapper }
		);
		await actWait();

		expect(anotherResult.current).toEqual([tickets[1]]);
	});
});
