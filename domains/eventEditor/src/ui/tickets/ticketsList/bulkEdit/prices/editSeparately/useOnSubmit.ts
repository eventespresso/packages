import { useCallback } from 'react';

import { useOnSubmitPrices } from '@eventespresso/tpc';
import { ManageTPCStates } from './useManageTPCStates';

const useOnSubmit = (onClose: VoidFunction, getDataStates: ManageTPCStates['getDataStates']): (() => Promise<void>) => {
	const submitPrices = useOnSubmitPrices();

	return useCallback(async () => {
		// lower down the curtains
		onClose();

		// tickets/prices can be mutated in parallel
		await Promise.all(
			// loop through all the selected tickets and update their price information
			Object.values(getDataStates()).map(async (dataState) => {
				// Finally update the ticket and its price relation
				await submitPrices(dataState);
			})
		);
	}, [getDataStates, onClose, submitPrices]);
};

export default useOnSubmit;
