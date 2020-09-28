import { renderHook, act } from '@testing-library/react-hooks';

import { getDefaultTaxes, getPriceModifiers } from '@eventespresso/predicates';
import { useDataState } from '../../data';
import useAddDefaultTaxes from '../useAddDefaultTaxes';
import TestWrapper from '../../data/test/TestWrapper';
import { actWait } from '@eventespresso/utils/src/test';
import { nodes as prices } from '@eventespresso/edtr-services/src/apollo/queries/prices/test/data';
import useInitPriceTestCache from '@eventespresso/edtr-services/src/apollo/queries/prices/test/useInitPriceTestCache';

const pricesWithADefaultTax = [...prices, { ...prices[1], id: prices[1].id + '-new', isTax: true }];

const defaultTaxes = getDefaultTaxes(pricesWithADefaultTax);

describe('useAddDefaultTaxes', () => {
	it('adds default prices to TPC data', async () => {
		// before doing anything, make sure we have a default tax
		expect(defaultTaxes.length).toBeGreaterThan(0);

		const { result } = renderHook(
			() => {
				// set price to pricesWithADefaultTax in Apollo cache
				useInitPriceTestCache({
					nodes: pricesWithADefaultTax,
					__typename: 'EspressoRootQueryPricesConnection',
				});
				return {
					dataState: useDataState(),
					addDefaultTaxes: useAddDefaultTaxes(),
				};
			},
			{
				wrapper: TestWrapper,
			}
		);
		await actWait();

		// Make sure the state is properly set before moving ahead
		act(() => {
			result.current.dataState.prices.forEach(({ id }) => {
				result.current.dataState.deletePrice(id);
			});
		});

		// there should be no prices.
		expect(result.current.dataState.prices).toEqual([]);

		// Do the thing
		act(() => {
			result.current.addDefaultTaxes();
		});

		// there will be a base price, we need to exclude it
		const priceModifiers = getPriceModifiers(result.current.dataState.prices);

		expect(priceModifiers.length).toBeGreaterThan(0);

		result.current.dataState.prices.forEach(({ isDefault, isTax }) => {
			expect(isDefault).toBe(true);
			expect(isTax).toBe(true);
		});
	});

	it('does not add default prices to TPC data when there are no default prices', async () => {
		// before doing anything, make sure we have a default tax
		expect(defaultTaxes.length).toBeGreaterThan(0);

		const { result } = renderHook(
			() => {
				// set price to empty array in Apollo cache
				useInitPriceTestCache({ nodes: [], __typename: 'EspressoRootQueryPricesConnection' });
				return {
					dataState: useDataState(),
					addDefaultTaxes: useAddDefaultTaxes(),
				};
			},
			{
				wrapper: TestWrapper,
			}
		);
		await actWait();

		// Make sure the state is properly set before moving ahead
		act(() => {
			result.current.dataState.prices.forEach(({ id }) => {
				result.current.dataState.deletePrice(id);
			});
		});

		// there should be no prices.
		expect(result.current.dataState.prices).toEqual([]);

		// Do the thing
		act(() => {
			result.current.addDefaultTaxes();
		});

		// there will be a base price, we need to exclude it
		const priceModifiers = getPriceModifiers(result.current.dataState.prices);

		expect(priceModifiers).toEqual([]);
	});
});
