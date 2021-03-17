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
		const { result } = renderHook(() => useRelatedTickets(), { wrapper });

		await actWait();

		expect(result.current({ entity: 'priceTypes', entityId: '' })).toEqual([]);
	});

	it('returns empty array for null or undefined entity types', async () => {
		for (const value of [null, undefined]) {
			const { result } = renderHook(() => useRelatedTickets(), {
				wrapper,
			});

			await actWait();

			expect(result.current({ entity: value, entityId: value })).toEqual([]);
		}
	});

	it('returns related tickets for a given datetime', async () => {
		const { result } = renderHook(
			() => {
				useInitTicketTestCache();
				return useRelatedTickets();
			},
			{ wrapper }
		);
		await actWait();

		expect(result.current({ entity: 'datetimes', entityId: datetimes[0].id })).toEqual([tickets[0], tickets[1]]);

		const { result: anotherResult } = renderHook(
			() => {
				useInitTicketTestCache();
				return useRelatedTickets();
			},
			{ wrapper }
		);
		await actWait();

		expect(anotherResult.current({ entity: 'datetimes', entityId: datetimes[1].id })).toEqual([tickets[1]]);
	});

	it('returns related tickets for a given price', async () => {
		const { result } = renderHook(
			() => {
				useInitTicketTestCache();
				return useRelatedTickets();
			},
			{ wrapper }
		);
		await actWait();

		expect(result.current({ entity: 'prices', entityId: prices[0].id })).toEqual([tickets[0]]);

		const { result: anotherResult } = renderHook(
			() => {
				useInitTicketTestCache();
				return useRelatedTickets();
			},
			{ wrapper }
		);
		await actWait();

		expect(anotherResult.current({ entity: 'prices', entityId: prices[1].id })).toEqual([tickets[1]]);
	});
});
