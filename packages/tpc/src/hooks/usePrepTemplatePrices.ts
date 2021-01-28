import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { isBasePrice, sortByPriceOrderIdAsc, isDefaultTax } from '@eventespresso/predicates';
import { Price } from '@eventespresso/edtr-services';

import { TpcPriceModifier } from '../types';
import usePriceToTpcModifier from './usePriceToTpcModifier';
import useDefaultBasePrice from './useDefaultBasePrice';

type PrepTemplatePrices = (templatePrices: Array<Price>, addBasePrice?: boolean) => Array<TpcPriceModifier>;

/**
 * Custom hook to prepare prices for TPC that we added from a template ticket
 */
const usePrepTemplatePrices = (): PrepTemplatePrices => {
	const basePrice = useDefaultBasePrice();

	const convertPriceToTpcModifier = usePriceToTpcModifier();

	return useCallback(
		(templatePrices, addBasePrice = true) => {
			const prices = templatePrices.map((price) => {
				const priceModifier = convertPriceToTpcModifier(price);
				// if it's a default tax
				if (isDefaultTax(price)) {
					// return without cloning
					return priceModifier;
				}
				return {
					...priceModifier,
					// clone it
					id: uuidv4(),
					dbId: 0,
					isNew: true,
					// avoid default price getting duplicated
					isDefault: false,
				};
			});

			//sort'em
			const sortedPrices = sortByPriceOrderIdAsc(prices);

			const hasBasePrice = sortedPrices.filter(isBasePrice).length;
			// if there is no basePrice
			if (!hasBasePrice && addBasePrice) {
				// add the base price with `isNew` flag to make sure it's created on submit
				// `order` as 1 to make sure it remains at the top
				return [{ ...basePrice, order: 1, isNew: true }, ...sortedPrices];
			}
			return sortedPrices;
		},
		[basePrice, convertPriceToTpcModifier]
	);
};

export default usePrepTemplatePrices;
