import {
	isBasePrice,
	isNotBasePrice,
	isDiscount,
	isNotDiscount,
	isPercent,
	isNotPercent,
	isTax,
	isNotTax,
	getPriceModifiers,
} from './index';
import { nodes as prices } from '@eventespresso/edtr-services/src/apollo/queries/prices/test/data';

describe('isBasePrice', () => {
	it('should return true if isBasePrice value is true for each price entity', () => {
		prices.forEach((price) => {
			if (price.isBasePrice === true) {
				expect(isBasePrice(price)).toBe(true);
			}
		});
	});

	it('should return false if isBasePrice value is false for each price entity', () => {
		prices.forEach((price) => {
			if (price.isBasePrice === false) {
				expect(isBasePrice(price)).toBe(false);
			}
		});
	});
});

describe('isNotBasePrice', () => {
	it('should return true if isBasePrice value is false for each price entity', () => {
		prices.forEach((price) => {
			if (price.isBasePrice === false) {
				expect(isNotBasePrice(price)).toBe(true);
			}
		});
	});

	it('should return false if isBasePrice value is true for each price entity', () => {
		prices.forEach((price) => {
			if (price.isBasePrice === true) {
				expect(isNotBasePrice(price)).toBe(false);
			}
		});
	});
});

describe('isDiscount', () => {
	it('should return true if isDiscount value is true for each price entity', () => {
		prices.forEach((price) => {
			if (price.isDiscount === true) {
				expect(isDiscount(price)).toBe(true);
			}
		});
	});

	it('should return false if isDiscount value is false for each price entity', () => {
		prices.forEach((price) => {
			if (price.isDiscount === false) {
				expect(isDiscount(price)).toBe(false);
			}
		});
	});
});

describe('isNotDiscount', () => {
	it('should return true if isDiscount value is false for each price entity', () => {
		prices.forEach((price) => {
			if (price.isDiscount === false) {
				expect(isNotDiscount(price)).toBe(true);
			}
		});
	});

	it('should return false if isDiscount value is true for each price entity', () => {
		prices.forEach((price) => {
			if (price.isDiscount === true) {
				expect(isNotDiscount(price)).toBe(false);
			}
		});
	});
});

describe('isPercent', () => {
	it('should return true if isPercent value is true for each price entity', () => {
		prices.forEach((price) => {
			if (price.isPercent === true) {
				expect(isPercent(price)).toBe(true);
			}
		});
	});

	it('should return false if isPercent value is false for each price entity', () => {
		prices.forEach((price) => {
			if (price.isPercent === false) {
				expect(isPercent(price)).toBe(false);
			}
		});
	});
});

describe('isNotPercent', () => {
	it('should return true if isPercent value is false for each price entity', () => {
		prices.forEach((price) => {
			if (price.isPercent === false) {
				expect(isNotPercent(price)).toBe(true);
			}
		});
	});

	it('should return false if isPercent value is true for each price entity', () => {
		prices.forEach((price) => {
			if (price.isPercent === true) {
				expect(isNotPercent(price)).toBe(false);
			}
		});
	});
});

describe('isTax', () => {
	it('should return true if isTax value is true for each price entity', () => {
		prices.forEach((price) => {
			if (price.isTax === true) {
				expect(isTax(price)).toBe(true);
			}
		});
	});

	it('should return false if isTax value is false for each price entity', () => {
		prices.forEach((price) => {
			if (price.isTax === false) {
				expect(isTax(price)).toBe(false);
			}
		});
	});
});

describe('isNotTax', () => {
	it('should return true if isTax value is false for each price entity', () => {
		prices.forEach((price) => {
			if (price.isTax === false) {
				expect(isNotTax(price)).toBe(true);
			}
		});
	});

	it('should return false if isTax value is true for each price entity', () => {
		prices.forEach((price) => {
			if (price.isTax === true) {
				expect(isNotTax(price)).toBe(false);
			}
		});
	});
});

describe('getPriceModifiers', () => {
	it('should return price modifiers', () => {
		const priceModifiers = getPriceModifiers(prices);
		priceModifiers.forEach((priceModifier) => {
			expect(priceModifier.isBasePrice).toBe(false);
		});
	});

	it('should return empty array if there is no price with base price type set to false', () => {
		const updatedPrices = prices.map((price) => ({ ...price, isBasePrice: true }));
		const priceModifiers = getPriceModifiers(updatedPrices);
		expect(priceModifiers).toEqual([]);
	});
});
