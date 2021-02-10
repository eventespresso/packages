import { renderHook } from '@testing-library/react-hooks';

import usePriceModifier from '../usePriceModifier';
import TestWrapper from '../../data/test/TestWrapper';
import { actWait } from '@eventespresso/utils/src/test';
import { nodes as prices } from '@eventespresso/edtr-services/src/apollo/queries/prices/test/data';

describe('usePriceModifier', () => {
	it('returns the updated TPC price modifier', async () => {
		const { result } = renderHook(
			() => {
				return usePriceModifier(prices[0]);
			},
			{
				wrapper: TestWrapper,
			}
		);
		await actWait();

		expect(result.current).toHaveProperty('priceType');
		expect(result.current.priceType).toBeDefined();
	});

	it('returns the default updated TPC price modifier for a non existing price', async () => {
		const { result } = renderHook(
			() => {
				return usePriceModifier({ ...prices[0], id: 'fake-id' });
			},
			{
				wrapper: TestWrapper,
			}
		);
		await actWait();

		expect(result.current).toHaveProperty('priceType');
		expect(result.current.priceType).toBeDefined();
	});
});
