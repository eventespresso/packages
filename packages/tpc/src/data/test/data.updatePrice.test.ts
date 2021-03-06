import { renderHook, act } from '@testing-library/react-hooks';
import { last, head } from 'ramda';

import { useDataState } from '../';
import { usePriceTypeForPrice } from '@eventespresso/edtr-services';
import { uuid } from '@eventespresso/utils';

import { usePriceModifier } from '../../hooks';
import defaultPrice from '../../defaultPriceModifier';
import TestWrapper from './TestWrapper';
import { actWait } from '@eventespresso/utils/src/test';

describe('TPC:data.updatePrice', () => {
	it('adds a price at the end of the price list and then updates its amount', async () => {
		const { result } = renderHook(
			() => {
				const defaultPriceModifier = usePriceModifier(defaultPrice);
				return {
					dataState: useDataState(),
					baseType: usePriceTypeForPrice(defaultPriceModifier.id),
					defaultPriceModifier,
				};
			},
			{
				wrapper: TestWrapper,
			}
		);
		await actWait();

		// Make sure the state is properly set before moving ahead
		act(() => result.current.dataState.reset());

		// generate an id for the price
		const newPriceId = uuid();

		const newPrice = {
			...result.current.defaultPriceModifier,
			id: newPriceId,
			isBasePrice: result.current.baseType.isBasePrice,
			isDiscount: result.current.baseType.isDiscount,
			isPercent: result.current.baseType.isPercent,
			isTax: result.current.baseType.isTax,
			order: result.current.baseType.order,
			isNew: true,
		};

		// Add the price without passing index
		act(() => result.current.dataState.addPrice(newPrice));

		act(() => result.current.dataState.updatePrice({ id: newPriceId, fieldValues: { amount: 5 } }));

		const lastPrice = last(result.current.dataState.getData().prices);

		expect(lastPrice.amount).toBe(5);
	});

	it('updates the amount of an existing price', async () => {
		const { result } = renderHook(
			() => {
				return useDataState();
			},
			{
				wrapper: TestWrapper,
			}
		);
		await actWait();

		// Make sure the state is properly set before moving ahead
		act(() => result.current.reset());

		const lastPrice = last(result.current.getData().prices);

		act(() => result.current.updatePrice({ id: lastPrice.id, fieldValues: { amount: 5.8 } }));

		const updatedLastPrice = last(result.current.getData().prices);

		expect(updatedLastPrice.amount).toBe(5.8);
	});

	it('updates the name and description of a price', async () => {
		const { result } = renderHook(
			() => {
				return useDataState();
			},
			{
				wrapper: TestWrapper,
			}
		);
		await actWait();

		// Make sure the state is properly set before moving ahead
		act(() => result.current.reset());

		const firstPrice = head(result.current.getData().prices);

		act(() =>
			result.current.updatePrice({
				id: firstPrice.id,
				fieldValues: { name: 'New Name', description: 'New Desc' },
			})
		);

		const updatedFirstPrice = head(result.current.getData().prices);

		expect(updatedFirstPrice.name).toBe('New Name');
		expect(updatedFirstPrice.description).toBe('New Desc');
	});

	it('updates the priceType of a price', async () => {
		const { result } = renderHook(
			() => {
				return useDataState();
			},
			{
				wrapper: TestWrapper,
			}
		);
		await actWait();

		// Make sure the state is properly set before moving ahead
		act(() => result.current.reset());

		const lastPrice = last(result.current.getData().prices);

		act(() => result.current.updatePrice({ id: lastPrice.id, fieldValues: { priceType: 'abc' } }));

		const updatedLastPrice = last(result.current.getData().prices);

		expect(updatedLastPrice.priceType).toBe('abc');
	});
});
