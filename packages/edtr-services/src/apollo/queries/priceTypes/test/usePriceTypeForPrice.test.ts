import { renderHook } from '@testing-library/react-hooks';

import { isFlatFeeSurcharge } from '@eventespresso/predicates';
import { useRelations } from '@eventespresso/services';
import usePriceTypeForPrice from '../usePriceTypeForPrice';
import { ApolloMockedProvider } from '../../../../context/test';
import { nodes, edge } from './data';
import { nodes as prices } from '../../prices/test/data';
import useInitPriceTypeTestCache from './useInitPriceTypeTestCache';
import { actWait } from '@eventespresso/utils/src/test';

describe('usePriceTypeForPrice()', () => {
	const wrapper = ApolloMockedProvider();
	const existingPrice = prices[0];
	it('returns null as price type when the cache is empty', async () => {
		const { result } = renderHook(() => usePriceTypeForPrice(existingPrice.id), { wrapper });

		await actWait();
		expect(result.current).toBeNull();
	});

	it('returns null as price type when the price does not exist and the cache is empty', async () => {
		const { result } = renderHook(() => usePriceTypeForPrice('fake-id'), { wrapper });

		await actWait();
		expect(result.current).toBeNull();
	});

	it('returns null as price type when the price and default price type do not exist but the cache is NOT empty', async () => {
		const nonDefaultPriceTypeNodes = nodes.filter((priceType) => !isFlatFeeSurcharge(priceType));
		const { result } = renderHook(
			() => {
				useInitPriceTypeTestCache({ ...edge, nodes: nonDefaultPriceTypeNodes });
				return usePriceTypeForPrice('fake-id');
			},
			{ wrapper }
		);

		await actWait();

		expect(result.current).toBeNull();
	});

	it('returns the default price type when the price does not exist and the cache is NOT empty', async () => {
		const defaultPriceType = nodes.filter(isFlatFeeSurcharge)[0];
		const { result } = renderHook(
			() => {
				useInitPriceTypeTestCache();
				return usePriceTypeForPrice('fake-id');
			},
			{ wrapper }
		);
		await actWait();

		const { current: cachedDefaultPriceType } = result;

		expect(cachedDefaultPriceType).toEqual(defaultPriceType);

		expect(cachedDefaultPriceType.id).toEqual(defaultPriceType.id);

		expect(cachedDefaultPriceType.name).toEqual(defaultPriceType.name);
	});

	it('returns null as price type when the price exists, has relation with a price type but the cache is empty', async () => {
		const { result } = renderHook(
			() => {
				return usePriceTypeForPrice(existingPrice.id);
			},
			{ wrapper }
		);
		await actWait();

		expect(result.current).toBeNull();
	});

	it('returns the related price type when the price exists, has relation with the price type and the cache is NOT empty', async () => {
		const {
			result: { current: relationsManager },
		} = renderHook(() => useRelations(), { wrapper });
		await actWait();

		const relatedPriceTypeId = relationsManager.getRelations({
			entity: 'prices',
			entityId: existingPrice.id,
			relation: 'priceTypes',
		})[0];

		const { result } = renderHook(
			() => {
				useInitPriceTypeTestCache();
				return usePriceTypeForPrice(existingPrice.id);
			},
			{ wrapper }
		);
		await actWait();

		const { current: cachedRelatedPriceType } = result;

		expect(cachedRelatedPriceType.id).toEqual(relatedPriceTypeId);
	});
});
