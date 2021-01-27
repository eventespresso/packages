import { renderHook } from '@testing-library/react-hooks';

import usePriceToTpcModifier from '../usePriceToTpcModifier';
import TestWrapper from '../../data/test/TestWrapper';
import { actWait } from '@eventespresso/utils/src/test';
import { nodes as prices } from '@eventespresso/edtr-services/src/apollo/queries/prices/test/data';

describe('usePriceToTpcModifier', () => {
	it('returns the updated TPC price modifier', async () => {
		const { result } = renderHook(
			() => {
				return usePriceToTpcModifier();
			},
			{
				wrapper: TestWrapper,
			}
		);
		await actWait();

		const updatedPrice = result.current(prices[0]);

		expect(updatedPrice).toHaveProperty('priceType');
		expect(updatedPrice.priceType).toBeDefined();
		expect(updatedPrice).toHaveProperty('priceTypeOrder');
		expect(updatedPrice.priceTypeOrder).toBeDefined();
	});

	it('returns the updated TPC price modifier without price type details for a non existing price', async () => {
		const { result } = renderHook(
			() => {
				return usePriceToTpcModifier();
			},
			{
				wrapper: TestWrapper,
			}
		);
		await actWait();

		const updatedPrice = result.current({ ...prices[0], id: 'fake-id' });

		expect(updatedPrice).toHaveProperty('priceType');
		expect(updatedPrice.priceType).toBeUndefined();
		expect(updatedPrice).toHaveProperty('priceTypeOrder');
		expect(updatedPrice.priceTypeOrder).toBeUndefined();
	});
});
