import { useCallback, useMemo } from 'react';
import { assocPath } from 'ramda';

import { useRelations } from '@eventespresso/services';
import { usePriceTypes } from '../../apollo/queries';
import type { Price } from '../../apollo/types';
import type { TPCPriceModifier } from '../../../';

type Callback = (price: Price) => TPCPriceModifier;

const usePriceToTpcModifier = (): Callback => {
	const { getRelations } = useRelations();
	const allPriceTypes = usePriceTypes();
	const priceTypeIdOrder = useMemo(() => {
		return allPriceTypes.reduce((acc, { id, order }) => assocPath([id], order, acc), {});
	}, [allPriceTypes]);

	return useCallback<Callback>(
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
				...price,
				priceType: priceTypeId,
				priceTypeOrder: priceTypeIdOrder[priceTypeId],
			};
		},
		[getRelations, priceTypeIdOrder]
	);
};

export default usePriceToTpcModifier;
