import { allPass, find } from 'ramda';

import { PriceType } from '@eventespresso/edtr-services';
import { isNotBasePrice, isNotDiscount, isNotPercent } from '../../common';

// returns true if supplied price type is a flat fee (dollar) surcharge
export const isFlatFeeSurcharge = allPass([isNotBasePrice, isNotDiscount, isNotPercent]);

export const getDefaultPriceModifierType = (priceTypes: PriceType[]): PriceType => {
	return find<PriceType>(isFlatFeeSurcharge)(priceTypes);
};
