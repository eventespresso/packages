import { allPass, anyPass, filter, find, includes, isNil, isEmpty, ObjPred } from 'ramda';

import type { BoolField, EntityFieldPred } from '@eventespresso/utils';

import { PRICE_FIELDS, PRICE_INPUT_FIELDS } from '../priceFields';
import { isTax, isNotTax, isBasePrice, isDefault } from '../../common';

// the following return `true` if price satisfies predicate
export const isPriceField: ObjPred = (value, field) => includes(field, PRICE_FIELDS);

// the following return `true` if price satisfies predicate
export const isPriceInputField: ObjPred = (value, field) => includes(field, PRICE_INPUT_FIELDS);

// is a default tax ?
export const isDefaultTax: EntityFieldPred<'isDefault' | 'isTax', boolean> = allPass([isDefault, isTax]);

// returns price if found in array of prices
export const getBasePrice = <P extends BoolField<'isBasePrice'>>(prices: Array<P>): P => find<P>(isBasePrice)(prices);

// returns array of prices that satisfy predicate
export const getTaxes = <P extends BoolField<'isTax'>>(prices: Array<P>): Array<P> => filter<P>(isTax, prices);

// returns array of non tax price modifiers
export const getNonTaxModifiers = <P extends BoolField<'isTax'>>(prices: Array<P>): Array<P> =>
	filter<P>(isNotTax, prices);

export const getDefaultTaxes = <P extends BoolField<'isDefault' | 'isTax'>>(prices: Array<P>): Array<P> =>
	filter<P>(isDefaultTax, prices);

export const getDefaultPrices = <P extends BoolField<'isDefault'>>(prices: Array<P>): Array<P> =>
	filter<P>(isDefault, prices);

export const hasEmptyPrices = <P extends Record<'amount', number>>(prices: Array<P>): boolean => {
	return prices.length && prices.some(({ amount }) => anyPass([isNil, isEmpty])(amount));
};
