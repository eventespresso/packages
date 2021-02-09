import { omit } from 'ramda';

import { isPriceField, getBasePrice, getTaxes } from './index';
import { nodes as prices } from '@eventespresso/edtr-services/src/apollo/queries/prices/test/data';

describe('isPriceField', () => {
	it('should return true if field is included in price type', () => {
		prices.forEach((price) => {
			const priceFields = Object.keys(omit(['__typename'], price));
			priceFields.forEach((field) => {
				expect(isPriceField(null, field)).toBe(true);
			});
		});
	});

	it('should return false if field is NOT included in price type', () => {
		const inexistingFields = ['blablaField', 'yetAnotherFieldProp'];

		inexistingFields.forEach((field) => {
			expect(isPriceField(null, field)).toBe(false);
		});
	});
});

describe('getBasePrice', () => {
	it('should return a price with isBasePrice prop being set to true', () => {
		const basePrice = getBasePrice(prices);
		expect(basePrice.isBasePrice).toBe(true);
	});

	it('should return undefined if there is no base price', () => {
		const updatedPrices = prices.map((price) => ({ ...price, isBasePrice: false }));
		const result = getBasePrice(updatedPrices);
		expect(result).toBeUndefined();
	});
});

describe('getTaxes', () => {
	it('should return prices which have isTax prop set to true', () => {
		const result = getTaxes(prices);
		result.forEach((price) => {
			expect(price.isTax).toBe(true);
		});
	});

	it('should return empty array if there is no price with isTax prop set to true', () => {
		const updatedPrices = prices.map((price) => ({ ...price, isTax: false }));
		const result = getTaxes(updatedPrices);
		expect(result).toEqual([]);
	});
});
