import { compose, filter, not, propEq } from 'ramda';

import type { BoolField, EntityFieldPred as EFP } from '@eventespresso/utils';

// is a base price ?
export const isBasePrice: EFP<'isBasePrice', boolean> = propEq('isBasePrice', true);
export const isNotBasePrice: EFP<'isBasePrice', boolean> = compose(not, isBasePrice);

// is a discount ?
export const isDiscount: EFP<'isDiscount', boolean> = propEq('isDiscount', true);
export const isNotDiscount: EFP<'isDiscount', boolean> = compose(not, isDiscount);

// is a percent based modifier ?
export const isPercent: EFP<'isPercent', boolean> = propEq('isPercent', true);
export const isNotPercent: EFP<'isPercent', boolean> = compose(not, isPercent);

// is a tax ?
export const isTax: EFP<'isTax', boolean> = propEq('isTax', true);
export const isNotTax: EFP<'isTax', boolean> = compose(not, isTax);

// returns array of prices that satisfy predicate
export const getPriceModifiers = <P extends BoolField<'isBasePrice'>>(prices: Array<P>): Array<P> =>
	filter<P>(isNotBasePrice, prices);
