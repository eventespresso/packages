import { renderHook, act } from '@testing-library/react-hooks';

import { getTaxes } from '@eventespresso/predicates';
import { useDataState } from '../../data';
import useRemoveAllTaxes from '../useRemoveAllTaxes';
import useAddDefaultPrices from '../useAddDefaultPrices';
import TestWrapper from '../../data/test/TestWrapper';
import { actWait } from '@eventespresso/utils/src/test';
import { nodes as prices } from '@eventespresso/edtr-services/src/apollo/queries/prices/test/data';
import useInitPriceTestCache from '@eventespresso/edtr-services/src/apollo/queries/prices/test/useInitPriceTestCache';

const pricesWithADefaultTax = [...prices, { ...prices[1], id: prices[1].id + '-new', isTax: true }];

describe('useRemoveAllTaxes', () => {
	it('removes all tax prices from TPC data', async () => {
		const { result } = renderHook(
			() => {
				// set price to pricesWithADefaultTax in Apollo cache
				useInitPriceTestCache({
					nodes: pricesWithADefaultTax,
					__typename: 'EspressoRootQueryPricesConnection',
				});
				return {
					dataState: useDataState(),
					removeAllTaxes: useRemoveAllTaxes(),
					addDefaultPrices: useAddDefaultPrices(),
				};
			},
			{
				wrapper: TestWrapper,
			}
		);
		await actWait();

		// make sure we have some taxes in state
		act(() => {
			result.current.addDefaultPrices();
		});
		expect(getTaxes(result.current.dataState.prices).length).toBeGreaterThan(0);

		// Do the thing
		act(() => {
			result.current.removeAllTaxes();
		});
		const prices = result.current.dataState.prices;

		// we have prices
		expect(prices.length).toBeGreaterThan(0);
		// but we don't have any taxes
		expect(getTaxes(prices)).toEqual([]);
	});

	it('removes nothing if there are no taxes in TPC data', async () => {
		const { result } = renderHook(
			() => {
				// set price to pricesWithADefaultTax in Apollo cache
				useInitPriceTestCache({
					nodes: pricesWithADefaultTax,
					__typename: 'EspressoRootQueryPricesConnection',
				});
				return {
					dataState: useDataState(),
					removeAllTaxes: useRemoveAllTaxes(),
					addDefaultPrices: useAddDefaultPrices(),
				};
			},
			{
				wrapper: TestWrapper,
			}
		);
		await actWait();

		// make sure we have some taxes in state
		act(() => {
			result.current.addDefaultPrices();
		});
		expect(getTaxes(result.current.dataState.prices).length).toBeGreaterThan(0);

		// Do the thing
		act(() => {
			result.current.removeAllTaxes();
		});
		const prices = result.current.dataState.prices;
		// we have prices
		expect(prices.length).toBeGreaterThan(0);
		// but we don't have any taxes
		expect(getTaxes(prices)).toEqual([]);

		// Do the thing again
		act(() => {
			result.current.removeAllTaxes();
		});
		// nothing has changed
		expect(result.current.dataState.prices).toEqual(prices);
	});
});
