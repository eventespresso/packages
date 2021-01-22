import { prop } from 'ramda';

import type { EntityId } from '@eventespresso/data';
import { findEntityByGuid } from '@eventespresso/predicates';

import type { PriceType, TPCPriceModifier } from '../../';

// returns GUID for price modifier's related price type
export const getPriceModifierPriceTypeGuid = (price: TPCPriceModifier): EntityId => prop('priceType', price);

// returns price type for supplied price modifier if found in array of price types
export const getPriceType = (priceTypes: PriceType[]) => (price: TPCPriceModifier): PriceType => {
	return findEntityByGuid(priceTypes)(getPriceModifierPriceTypeGuid(price));
};

/**
 * returns a copy of price with price type properties applied
 */
export const updatePriceModifier = (price: TPCPriceModifier, priceType?: PriceType): TPCPriceModifier => {
	return {
		...price,
		isBasePrice: priceType?.isBasePrice,
		isDiscount: priceType?.isDiscount,
		isPercent: priceType?.isPercent,
		isTax: priceType?.isTax,
		priceType: priceType?.id,
		priceTypeOrder: priceType?.order,
	};
};
