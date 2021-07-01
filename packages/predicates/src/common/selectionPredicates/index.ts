import * as R from 'ramda';

import type { BoolField, EntityFieldPred as EFP } from '@eventespresso/utils';

import { isDefault } from '../isDefault';

// is a base price ?
export const isBasePrice: EFP<'isBasePrice', boolean> = R.propEq('isBasePrice', true);
export const isNotBasePrice: EFP<'isBasePrice', boolean> = R.complement(isBasePrice);

// is shared ?
export const isShared: EFP<'isShared', boolean> = R.propEq('isShared', true);
export const isNotShared: EFP<'isShared', boolean> = R.complement(isShared);

// is a discount ?
export const isDiscount: EFP<'isDiscount', boolean> = R.propEq('isDiscount', true);
export const isNotDiscount: EFP<'isDiscount', boolean> = R.complement(isDiscount);

// is a percent based modifier ?
export const isPercent: EFP<'isPercent', boolean> = R.propEq('isPercent', true);
export const isNotPercent: EFP<'isPercent', boolean> = R.complement(isPercent);

// is a tax ?
export const isTax: EFP<'isTax', boolean> = R.propEq('isTax', true);
export const isNotTax: EFP<'isTax', boolean> = R.complement(isTax);

export const isSharedOrDefault = R.anyPass<Record<'isShared' | 'isDefault', boolean>>([isShared, isDefault]);
export const isNotSharedOrDefault: EFP<'isShared' | 'isDefault', boolean> = R.complement(isSharedOrDefault);

// returns array of prices that satisfy predicate
export function getPriceModifiers<P extends BoolField<'isBasePrice'>>(prices: Array<P>): Array<P> {
	return R.filter<P>(isNotBasePrice, prices);
}
