import { useCallback } from 'react';

import { EntityId } from '@eventespresso/data';
import { copyPriceFields, isPriceInputField } from '@eventespresso/predicates';
import { usePriceMutator } from '@eventespresso/edtr-services';
import { TpcPriceModifier } from '../types';

type Callback = (prices: Array<TpcPriceModifier>, deletedPrices?: Array<EntityId>) => Promise<Array<EntityId>>;

const useMutatePrices = (): Callback => {
	const { createEntity: createPrice, deleteEntity: deletePrice, updateEntity: updatePrice } = usePriceMutator();

	// Async to make sure that prices are handled before updating the ticket.
	return useCallback(
		async (prices, deletedPriceIds = []) => {
			let relatedPriceIds: EntityId[];

			if (prices?.length) {
				// make sure to complete all price mutatons before updating the ticket
				relatedPriceIds = await Promise.all(
					// convert the price mutatons into promises
					prices.map(async ({ isNew, isModified, ...price }) => {
						// if it's not new or modified, no need to do anything
						// but base price needs to be updated anyway which may been modified by revCalc
						if (!(isNew || isModified) && !price.isBasePrice) {
							// retain the existing relation
							return price.id;
						}
						const normalizedPriceFields = copyPriceFields(price, isPriceInputField);
						// if it's a newly added price
						if (isNew) {
							const result = await createPrice(normalizedPriceFields);
							return result?.data?.createEspressoPrice?.espressoPrice?.id;
						}
						// it's surely an existing price that's been modified
						const result = await updatePrice({ id: price.id, ...normalizedPriceFields });
						return result?.data?.updateEspressoPrice?.espressoPrice?.id;
					})
				);
			}

			if (deletedPriceIds?.length) {
				// Delete all unlucky ones
				await Promise.all(deletedPriceIds.map((id) => deletePrice({ id, deletePermanently: true })));
			}

			return (relatedPriceIds || []).filter(Boolean);
		},
		[createPrice, deletePrice, updatePrice]
	);
};

export default useMutatePrices;
