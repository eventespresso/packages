import { useCallback, useMemo } from 'react';
import { assocPath } from 'ramda';

import { useRelations } from '@eventespresso/services';
import { Price, usePriceTypes } from '@eventespresso/edtr-services';
import { TpcPriceModifier } from '../types';

export type PriceToTpcModifier = (price: Price) => TpcPriceModifier;

const usePriceToTpcModifier = (): PriceToTpcModifier => {
	const { getRelations } = useRelations();
	const allPriceTypes = usePriceTypes();
	const priceTypeIdOrder = useMemo(() => {
		return allPriceTypes.reduce((acc, { id, order }) => assocPath([id], order, acc), {});
	}, [allPriceTypes]);

	return useCallback<PriceToTpcModifier>(
		(price) => {
			const priceTypes = getRelations({
				entity: 'prices',
				entityId: price.id,
				relation: 'priceTypes',
			});
			const [priceTypeId] = priceTypes;
			// convert to TPC price objects by adding
			// "priceType" and "priceTypeOrder"
			return {
				// it's possible that we are already editing a price
				// which will have price type fields set, those will be preferred
				priceType: priceTypeId,
				priceTypeOrder: priceTypeIdOrder[priceTypeId],
				...price,
			};
		},
		[getRelations, priceTypeIdOrder]
	);
};

export default usePriceToTpcModifier;
