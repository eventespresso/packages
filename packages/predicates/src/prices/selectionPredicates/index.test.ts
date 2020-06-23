import { omit } from 'ramda';

import { isPriceField, getBasePrice, getPriceByDbId, getPriceByGuid, getTaxes } from './index';
import { nodes as prices } from '@eventespresso/edtr-services/src/apollo/queries/prices/test/data';
import { getGuids } from '../../common';

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

describe('getPriceByDbId', () => {
	it('should return price entities with corresponding dbId', () => {
		const dbIds = prices.map(({ dbId }) => dbId);
		dbIds.forEach((dbId) => {
			const price = getPriceByDbId(prices, dbId);
			expect(price.dbId).toBe(dbId);
		});
	});

	it('should return undefined if there is no corresponding entity to the specified dbId', () => {
		const dbId = Number(
			'01100101011101100110010101101110011101000110010101110011011100000111001001100101011100110111001101101111'
		);
		const entity = getPriceByDbId(prices, dbId);
		expect(entity).toBeUndefined();
	});
});

describe('getPriceByGuid', () => {
	it('should return price entity with corresponding id', () => {
		const ids = getGuids(prices);
		ids.forEach((id) => {
			const price = getPriceByGuid(prices, id);
			expect(price.id).toBe(id);
		});
	});

	it('should return undefined if there is no corresponding price entity to the specified id', () => {
		const id = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
		const entity = getPriceByGuid(prices, id);
		expect(entity).toBeUndefined();
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
