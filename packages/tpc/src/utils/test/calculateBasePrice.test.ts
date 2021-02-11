import { isNil } from 'ramda';

import { getBasePrice } from '@eventespresso/predicates';

import { calculateBasePrice } from '../';
import { ticketTotalTestCases } from './ticketTotalData';
import { basePriceTestCases } from './basePriceData';
import { convertToModifier, createPrices } from './utils';

describe('calculateBasePrice', () => {
	// lets reverse calculate base price from the ticket total test data
	ticketTotalTestCases.forEach(({ name, prices, total }) => {
		const testPrices = createPrices(prices.map(convertToModifier));

		const basePrice = getBasePrice(testPrices)?.amount;

		if (isNil(basePrice)) {
			return;
		}

		const calculatedPrice = calculateBasePrice(total, testPrices);

		it('reverse calculates: ' + name, () => {
			expect(calculatedPrice).toBe(basePrice);
		});
	});

	// now lets run the actual base price tests
	basePriceTestCases.forEach(({ basePrice, name, prices, total }) => {
		const testPrices = createPrices(prices.map(convertToModifier));
		const calculatedPrice = calculateBasePrice(total, testPrices);

		it(name, () => {
			expect(calculatedPrice).toBe(basePrice);
		});
	});
});
