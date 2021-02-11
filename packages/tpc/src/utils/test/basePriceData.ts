import { TestCase, fixedDiscount, fixedSurcharge, percentDiscount, percentSurcharge, tax } from './utils';

/**
 * `order` prop of the prices will be set based on their index in the array
 * starting with base price with order 1
 * If two or more prices should have the same order, place them in an array
 */
export const basePriceTestCases: Array<TestCase> = [
	{
		basePrice: 15.2,
		name: 'returns ticket total if there are no modifiers',
		prices: [],
		total: 15.2,
	},
	{
		basePrice: 0,
		name: 'returns 0 when ticket total is 0',
		prices: [fixedSurcharge(5), tax(8), tax(12)],
		total: 0,
	},
	{
		basePrice: 0,
		name: 'returns 0 when ticket total is undefined',
		prices: [fixedSurcharge(5), tax(8), tax(12)],
		total: undefined,
	},
	{
		basePrice: 0,
		name: 'returns 0 when ticket total is null',
		prices: [fixedSurcharge(5), tax(8), tax(12)],
		total: null,
	},
	{
		basePrice: 10,
		name: 'calculates the base price when taxes have same order',
		// taxes have same order    ▼               ▼
		prices: [fixedSurcharge(5), [tax(8), tax(12)]],
		total: 18,
	},
	{
		basePrice: 10,
		name: 'calculates the base price from all prices with different order',
		prices: [fixedSurcharge(5), tax(8), tax(12)],
		total: 18.144,
	},
	{
		basePrice: 10,
		name: 'calculates the base price from all modifiers with same order',
		// all the modifiers applied on base price
		prices: [[fixedSurcharge(5), tax(8), tax(12)]],
		total: 17,
	},
	{
		basePrice: 10,
		name: 'returns the ticket total minus surcharge when there are no taxes',
		prices: [fixedSurcharge(5)],
		total: 15,
	},
	{
		basePrice: 10,
		name: 'calculates the base price when a surcharge is added after taxes',
		// here surcharge is not taxable
		prices: [[tax(8), tax(12)], fixedSurcharge(5)],
		total: 17,
	},
	{
		basePrice: 10,
		name: 'returns ticket total with added discount when there are no taxes',
		prices: [fixedDiscount(5)],
		total: 5,
	},
	{
		basePrice: 10,
		name: 'calculates the base price when a fixed discount is added before taxes',
		prices: [fixedDiscount(5), [tax(8), tax(12)]],
		total: 6,
	},
	{
		basePrice: 10,
		name: 'calculates the base price when a fixed discount is added after taxes',
		prices: [[tax(8), tax(12)], fixedDiscount(5)],
		total: 7,
	},
	{
		basePrice: 10,
		name: 'calculates the base price when a percent discount is added before taxes',
		prices: [percentDiscount(5), [tax(8), tax(12)]],
		total: 11.4,
	},
	{
		basePrice: 10,
		name: 'calculates the base price when a percent discount is added after taxes',
		prices: [[tax(8), tax(12)], percentDiscount(5)],
		total: 11.4,
	},
	{
		basePrice: 10,
		name: 'percent dicount and percent surcharge SHOULD NOT cancel each other when in different order',
		prices: [percentSurcharge(5), percentDiscount(5)],
		total: 9.975,
	},
	{
		basePrice: 10,
		name: 'percent dicount and percent surcharge SHOULD cancel each other when in same order',
		prices: [[percentSurcharge(5), percentDiscount(5)]],
		total: 10,
	},
	{
		basePrice: 10,
		name: 'fixed dicount and fixed surcharge SHOULD cancel each other when in different order',
		prices: [fixedSurcharge(5), fixedDiscount(5)],
		total: 10,
	},
	{
		basePrice: 10,
		name: 'fixed dicount and fixed surcharge SHOULD cancel each other when in same order',
		prices: [[fixedSurcharge(5), fixedDiscount(5)]],
		total: 10,
	},
	{
		basePrice: 10,
		name: 'when tax is 0, it makes no difference',
		prices: [tax(0)],
		total: 10,
	},
	{
		basePrice: 10,
		name: 'when fixed surcharge is 0, it makes no difference',
		prices: [fixedSurcharge(0)],
		total: 10,
	},
	{
		basePrice: 10,
		name: 'when fixed discount is 0, it makes no difference',
		prices: [fixedDiscount(0)],
		total: 10,
	},
	{
		basePrice: 10,
		name: 'when percent discount is 0, it makes no difference',
		prices: [percentDiscount(0)],
		total: 10,
	},
	{
		basePrice: 10,
		name: 'when percent surcharge is 0, it makes no difference',
		prices: [percentSurcharge(0)],
		total: 10,
	},
	{
		basePrice: 10,
		name: 'when a modifier has no amount, it makes no difference',
		//                        no amount set ▼
		prices: [percentSurcharge(), tax(5)],
		total: 10.5,
	},
];
