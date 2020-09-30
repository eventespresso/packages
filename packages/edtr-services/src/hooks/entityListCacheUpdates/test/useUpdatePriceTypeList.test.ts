import { useApolloClient } from '@eventespresso/data';
import { renderHook, act } from '@testing-library/react-hooks';

import { useCacheRehydration } from '../../../apollo/initialization';
import useUpdatePriceTypeList from '../useUpdatePriceTypeList';
import { usePriceTypeQueryOptions, usePriceTypes } from '../../../apollo/queries';
import { ApolloMockedProvider } from '../../../context/test';
import { getGuids } from '@eventespresso/predicates';
import { actWait } from '@eventespresso/utils/src/test';

describe('useUpdatePriceTypeList', () => {
	it('checks for priceTypes cache update', async () => {
		const wrapper = ApolloMockedProvider();
		const { result } = renderHook(
			() => {
				useCacheRehydration();
				return {
					queryOptions: usePriceTypeQueryOptions(),
					priceTypelist: usePriceTypes(),
					cacheUpdater: useUpdatePriceTypeList(),
					client: useApolloClient(),
				};
			},
			{
				wrapper,
			}
		);
		await actWait();

		const priceTypelist = result.current.priceTypelist;

		const priceType = { ...priceTypelist[0], id: priceTypelist[0].id + '-alpha' };

		// add priceType to the list.
		const nodes = [...priceTypelist, priceType];

		act(() => {
			result.current.cacheUpdater({
				...result.current.queryOptions,
				data: {
					espressoPriceTypes: {
						__typename: 'EspressoRootQueryPriceTypesConnection',
						nodes,
					},
				},
			});
		});

		const cache = result.current.client.extract();
		const { result: cacheResult } = renderHook(
			() => {
				const client = useApolloClient();
				// restore the cache from previous render
				client.restore(cache);
				return usePriceTypes();
			},
			{
				wrapper,
			}
		);
		await actWait();

		const cachedPriceTypeIds = getGuids(cacheResult.current);

		expect(cachedPriceTypeIds.length).toBe(priceTypelist.length + 1);

		expect(cachedPriceTypeIds).toContain(priceType.id);
	});
});
