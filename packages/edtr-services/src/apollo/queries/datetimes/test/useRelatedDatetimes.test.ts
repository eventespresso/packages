import { renderHook } from '@testing-library/react-hooks';

import useRelatedDatetimes from '../useRelatedDatetimes';
import { ApolloMockedProvider } from '../../../../context/test';
import { nodes as datetimes } from './data';
import useInitDatetimeTestCache from './useInitDatetimeTestCache';
import { nodes as tickets } from '../../tickets/test/data';
import { actWait } from '@eventespresso/utils/src/test';

describe('useRelatedDatetimes', () => {
	const wrapper = ApolloMockedProvider();
	it('returns empty array for unrelated entity types', async () => {
		const { result } = renderHook(() => useRelatedDatetimes({ entity: 'priceTypes', entityId: '' }), { wrapper });

		await actWait();

		expect(result.current).toEqual([]);
	});

	it('returns empty array for null or undefined entity types', async () => {
		for (const value of [null, undefined]) {
			const { result } = renderHook(() => useRelatedDatetimes({ entity: value, entityId: value }), {
				wrapper,
			});

			await actWait();

			expect(result.current).toEqual([]);
		}
	});

	it('returns related datetimes for a given ticket', async () => {
		const { result } = renderHook(
			() => {
				useInitDatetimeTestCache();
				return useRelatedDatetimes({ entity: 'tickets', entityId: tickets[0].id });
			},
			{ wrapper }
		);
		await actWait();

		expect(result.current).toEqual([datetimes[0]]);

		const { result: anotherResult } = renderHook(
			() => {
				useInitDatetimeTestCache();
				return useRelatedDatetimes({ entity: 'tickets', entityId: tickets[1].id });
			},
			{ wrapper }
		);
		await actWait();

		expect(anotherResult.current).toEqual([datetimes[0], datetimes[1]]);
	});
});
