import { useCallback } from 'react';

import { EntityId } from '@eventespresso/data';
import { calculateBasePrice, useInitialState } from '@eventespresso/tpc';
import { isBasePrice } from '@eventespresso/predicates';
import { usePriceMutator } from '@eventespresso/edtr-services';

const useRecalculateBasePrice = (ticketId: EntityId): VoidFunction => {
	// This will give us the exact state expected by `calculateBasePrice()`
	const getDataState = useInitialState({ ticketId });
	const { updateEntity } = usePriceMutator();

	return useCallback(() => {
		// get the list of updated prices with the amount of base price updated
		const newPrices = calculateBasePrice(getDataState(null));
		// the price if present should be the basePrice
		const [basePrice] = newPrices.filter(isBasePrice);

		// if we are lucky
		if (basePrice?.id) {
			const { id, amount } = basePrice;
			// update the base price
			updateEntity({ id, amount });
		}
	}, [getDataState, updateEntity]);
};

export default useRecalculateBasePrice;
