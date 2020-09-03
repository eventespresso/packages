import { renderHook } from '@testing-library/react-hooks';

import usePrices from '../usePrices';
import { ApolloMockedProvider } from '../../../../context/test';
import { nodes } from './data';
import useInitPriceTestCache from './useInitPriceTestCache';
import { actWait } from '@eventespresso/utils/src/test';

describe('usePrices()', () => {
	const wrapper = ApolloMockedProvider();
	it('checks for the empty prices', async () => {
		const { result } = renderHook(() => usePrices(), { wrapper });

		await actWait();

		expect(result.current.length).toBe(0);
	});

	it('checks for the updated prices cache', async () => {
		const { result } = renderHook(
			() => {
				useInitPriceTestCache();
				return usePrices();
			},
			{ wrapper }
		);
		await actWait();

		const { current: cachedPrices } = result;

		expect(cachedPrices).toEqual(nodes);

		expect(cachedPrices.length).toEqual(nodes.length);

		expect(cachedPrices[0].id).toEqual(nodes[0].id);

		expect(cachedPrices[0].name).toEqual(nodes[0].name);
	});
});
