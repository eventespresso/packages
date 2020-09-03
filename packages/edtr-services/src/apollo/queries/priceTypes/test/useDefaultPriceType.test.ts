import { renderHook } from '@testing-library/react-hooks';

import useDefaultPriceType from '../useDefaultPriceType';
import { ApolloMockedProvider } from '../../../../context/test';
import { nodes, edge } from './data';
import useInitPriceTypeTestCache from './useInitPriceTypeTestCache';
import { isFlatFeeSurcharge } from '@eventespresso/predicates';
import { actWait } from '@eventespresso/utils/src/test';

describe('useDefaultPriceType()', () => {
	const wrapper = ApolloMockedProvider();
	it('returns null as default price type when the cache is empty', async () => {
		const { result } = renderHook(() => useDefaultPriceType(), { wrapper });

		await actWait();

		expect(result.current).toBeNull();
	});

	it('checks for the default price type when none exists and the cache is NOT empty', async () => {
		const nonDefaultPriceTypeNodes = nodes.filter((priceType) => !isFlatFeeSurcharge(priceType));
		const { result } = renderHook(
			() => {
				useInitPriceTypeTestCache({ ...edge, nodes: nonDefaultPriceTypeNodes });
				return useDefaultPriceType();
			},
			{ wrapper }
		);
		await actWait();

		expect(result.current).toBeNull();
	});

	it('checks for the default price type when at least one exists and the cache is NOT empty', async () => {
		const defaultPriceType = nodes.filter(isFlatFeeSurcharge)[0];
		const { result } = renderHook(
			() => {
				useInitPriceTypeTestCache();
				return useDefaultPriceType();
			},
			{ wrapper }
		);
		await actWait();

		const { current: cachedDefaultPriceType } = result;

		expect(cachedDefaultPriceType).toEqual(defaultPriceType);

		expect(cachedDefaultPriceType.id).toEqual(defaultPriceType.id);

		expect(cachedDefaultPriceType.name).toEqual(defaultPriceType.name);
	});
});
