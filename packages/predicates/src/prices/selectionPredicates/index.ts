import { allPass, anyPass, filter, find, includes, isNil, isEmpty, ObjPred, propEq } from 'ramda';

import { EntityId, EntityDbId } from '@eventespresso/data';
import type { Price } from '@eventespresso/edtr-services';
import { PRICE_FIELDS, PRICE_INPUT_FIELDS } from '../priceFields';
import { findEntityByDbId, findEntityByGuid, isTax, isBasePrice } from '../../common';

// the following return `true` if price satisfies predicate
export const isPriceField: ObjPred = (value, field) => includes(field, PRICE_FIELDS);

// the following return `true` if price satisfies predicate
export const isPriceInputField: ObjPred = (value, field) => includes(field, PRICE_INPUT_FIELDS);

// is a default price ?
export const isDefault = propEq('isDefault', true);
export const isNotDefault = propEq('isDefault', false);

// is a default tax ?
export const isDefaultTax = allPass([isDefault, isTax]);

// returns price if found in array of prices
export const getBasePrice = (prices: Price[]): Price => find<Price>(isBasePrice)(prices);
export const getPriceByDbId = (prices: Price[], dbId: EntityDbId): Price => findEntityByDbId(prices)(dbId);
export const getPriceByGuid = (prices: Price[], guid: EntityId): Price => findEntityByGuid(prices)(guid);

// returns array of prices that satisfy predicate
export const getTaxes = (prices: Price[]): Price[] => filter<Price>(isTax, prices);
export const getDefaultTaxes = (prices: Price[]): Price[] => filter(isDefaultTax, prices);
export const getDefaultPrices = (prices: Price[]): Price[] => filter<Price>(isDefault, prices);

export const hasEmptyPrices = (prices: Price[]): boolean => {
	return prices.length && prices.some(({ amount }) => anyPass([isNil, isEmpty])(amount));
};
