import { prop } from 'ramda';

import type { Price, PriceType } from '@eventespresso/edtr-services';
import type { EntityId } from '@eventespresso/data';
import { findEntityByGuid, sortByPriceOrderIdAsc } from '@eventespresso/predicates';

import type { TpcPriceModifier } from '../types';
import type { PriceToTpcModifier } from '../hooks/usePriceToTpcModifier';

// returns GUID for price modifier's related price type
export const getPriceModifierPriceTypeGuid = (price: TpcPriceModifier): EntityId => prop('priceType', price);

// returns price type for supplied price modifier if found in array of price types
export const getPriceType = (priceTypes: PriceType[]) => (price: TpcPriceModifier): PriceType => {
	return findEntityByGuid(priceTypes)(getPriceModifierPriceTypeGuid(price));
};

/**
 * returns a copy of price with price type properties applied
 */
export const updatePriceModifier = (price: TpcPriceModifier, priceType?: PriceType): TpcPriceModifier => {
	return {
		...price,
		isBasePrice: priceType?.isBasePrice,
		isDiscount: priceType?.isDiscount,
		isPercent: priceType?.isPercent,
		isTax: priceType?.isTax,
		priceType: priceType?.id,
	};
};

export const preparePricesForTpc = (
	prices: Array<Price>,
	convertPriceToTpcModifier: PriceToTpcModifier
): Array<TpcPriceModifier> => {
	//sort'em
	const sortedPrices = sortByPriceOrderIdAsc(prices);

	// convert to TPC price objects by adding "priceType"
	return sortedPrices.map(convertPriceToTpcModifier);
};
