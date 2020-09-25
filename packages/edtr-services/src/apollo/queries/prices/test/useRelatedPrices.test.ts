import { renderHook } from '@testing-library/react-hooks';

import useRelatedPrices from '../useRelatedPrices';
import { ApolloMockedProvider } from '../../../../context/test';
import { nodes as prices } from './data';
import useInitPriceTestCache from './useInitPriceTestCache';
import { nodes as tickets } from '../../tickets/test/data';
import { actWait } from '@eventespresso/utils/src/test';

describe('useRelatedPrices', () => {
	const wrapper = ApolloMockedProvider();
	it('returns empty array for unrelated entity types', async () => {
		const { result } = renderHook(() => useRelatedPrices({ entity: 'priceTypes', entityId: '' }), { wrapper });

		await actWait();

		expect(result.current).toEqual([]);
	});

	it('returns empty array for null or undefined entity types', async () => {
		for (const value of [null, undefined]) {
			const { result } = renderHook(() => useRelatedPrices({ entity: value, entityId: value }), {
				wrapper,
			});

			await actWait();

			expect(result.current).toEqual([]);
		}
	});

	it('returns related prices for a given ticket', async () => {
		const { result } = renderHook(
			() => {
				useInitPriceTestCache();
				return useRelatedPrices({ entity: 'tickets', entityId: tickets[0].id });
			},
			{ wrapper }
		);
		await actWait();

		expect(result.current).toEqual([prices[0], prices[2]]);

		const { result: anotherResult } = renderHook(
			() => {
				useInitPriceTestCache();
				return useRelatedPrices({ entity: 'tickets', entityId: tickets[1].id });
			},
			{ wrapper }
		);
		await actWait();

		expect(anotherResult.current).toEqual([prices[1]]);
	});
});
