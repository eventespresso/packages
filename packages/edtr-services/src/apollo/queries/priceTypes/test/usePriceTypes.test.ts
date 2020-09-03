import { renderHook } from '@testing-library/react-hooks';

import usePriceTypes from '../usePriceTypes';
import { ApolloMockedProvider } from '../../../../context/test';
import { nodes } from './data';
import useInitPriceTypeTestCache from './useInitPriceTypeTestCache';
import { actWait } from '@eventespresso/utils/src/test';

describe('usePriceTypes()', () => {
	const wrapper = ApolloMockedProvider();
	it('checks for the empty price types', async () => {
		const { result } = renderHook(() => usePriceTypes(), { wrapper });

		await actWait();

		expect(result.current.length).toBe(0);
	});

	it('checks for the updated price types cache', async () => {
		const { result } = renderHook(
			() => {
				useInitPriceTypeTestCache();
				return usePriceTypes();
			},
			{ wrapper }
		);

		await actWait();

		const { current: cachedPriceTypes } = result;

		expect(cachedPriceTypes).toEqual(nodes);

		expect(cachedPriceTypes.length).toEqual(nodes.length);

		expect(cachedPriceTypes[0].id).toEqual(nodes[0].id);

		expect(cachedPriceTypes[0].baseType).toEqual(nodes[0].baseType);
	});
});
