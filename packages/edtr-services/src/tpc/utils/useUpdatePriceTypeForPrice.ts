import { useCallback } from 'react';
import { find, propEq } from 'ramda';

import { getDefaultPriceModifierType } from '@eventespresso/predicates';

import { TPCDataState, TPCPriceModifier, usePriceTypes } from '../../';
import { getPriceType, updatePriceModifier } from './utilities';

type Callback = (priceId: string, state: TPCDataState) => TPCPriceModifier;

const useUpdatePriceTypeForPrice = (): Callback => {
	const priceTypes = usePriceTypes();
	const getPriceTypeForPrice = getPriceType(priceTypes);
	const defaultPriceType = getDefaultPriceModifierType(priceTypes);

	return useCallback<Callback>(
		(priceId, state) => {
			const priceModifier = find<typeof state.prices[0]>(propEq('id', priceId), state.prices);

			if (!priceModifier) {
				return null;
			}

			// we need to know some details about the price type so get that object using the GUID set in the form
			const priceType = getPriceTypeForPrice(priceModifier) || defaultPriceType;
			// update price modifier data with props from newly selected price type
			const updatedPriceModifier = updatePriceModifier(priceModifier, priceType);

			return updatedPriceModifier;
		},
		[defaultPriceType, getPriceTypeForPrice]
	);
};

export default useUpdatePriceTypeForPrice;
