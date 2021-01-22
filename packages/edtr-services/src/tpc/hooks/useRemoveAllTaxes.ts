import { useCallback } from 'react';

import { isTax } from '@eventespresso/predicates';
import useTPCDataState from '../data/useTPCDataState';

const useRemoveAllTaxes = (): VoidFunction => {
	const { deletePrice, prices } = useTPCDataState();

	return useCallback(() => {
		const taxPrices = prices.filter(isTax);
		taxPrices.forEach((taxPrice) => {
			// delete the price from TPC state
			deletePrice(taxPrice.id, taxPrice.isNew || taxPrice.isDefault);
		});
	}, [deletePrice, prices]);
};

export default useRemoveAllTaxes;
