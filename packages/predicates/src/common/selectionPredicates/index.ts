import { filter, propEq } from 'ramda';

import type { BoolField, EntityFieldPred as EFP } from '@eventespresso/utils';

// is a base price ?
export const isBasePrice: EFP<'isBasePrice', boolean> = propEq('isBasePrice', true);
export const isNotBasePrice: EFP<'isBasePrice', boolean> = propEq('isBasePrice', false);

// is a discount ?
export const isDiscount: EFP<'isDiscount', boolean> = propEq('isDiscount', true);
export const isNotDiscount: EFP<'isDiscount', boolean> = propEq('isDiscount', false);

// is a percent based modifier ?
export const isPercent: EFP<'isPercent', boolean> = propEq('isPercent', true);
export const isNotPercent: EFP<'isPercent', boolean> = propEq('isPercent', false);

// is a tax ?
export const isTax: EFP<'isTax', boolean> = propEq('isTax', true);
export const isNotTax: EFP<'isTax', boolean> = propEq('isTax', false);

// returns array of prices that satisfy predicate
export const getPriceModifiers = <P extends BoolField<'isBasePrice'>>(prices: Array<P>): Array<P> =>
	filter<P>(isNotBasePrice, prices);
