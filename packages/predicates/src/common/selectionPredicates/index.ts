import { filter, propEq } from 'ramda';

import type { Price, PriceType } from '@eventespresso/edtr-services';

// is a base price ?
export const isBasePrice = propEq('isBasePrice', true);
export const isNotBasePrice = propEq('isBasePrice', false);

// is a discount ?
export const isDiscount = propEq('isDiscount', true);
export const isNotDiscount = propEq('isDiscount', false);

// is a percent based modifier ?
export const isPercent = propEq('isPercent', true);
export const isNotPercent = propEq('isPercent', false);

// is a tax ?
export const isTax = propEq('isTax', true);
export const isNotTax = propEq('isTax', false);

// returns array of prices that satisfy predicate
export const getPriceModifiers = (prices: Array<Price | PriceType>): Array<Price | PriceType> =>
	filter<Price | PriceType>(isNotBasePrice, prices);
