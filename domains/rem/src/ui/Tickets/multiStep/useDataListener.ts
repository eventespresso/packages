import { useEffect } from 'react';
import { useForm } from '@eventespresso/form';
import { pick } from 'ramda';

import { useDataState as useTPCDataState } from '@eventespresso/tpc';
import { Ticket } from '@eventespresso/edtr-services';

// The fields that need to be synced from TPC to ticket edit form
// This is to avoid ticket.name being synced
const TPC_TICKET_FIELDS_TO_SYNC: Array<keyof Ticket> = ['isTaxable', 'price', 'reverseCalculate'];

/**
 * A custom hook which subscribes to TAM and TPC data and updates
 * RFF data when needed.
 */
const useDataListener: VoidFunction = () => {
	const { mutators } = useForm();

	const { deletedPrices, prices, ticket } = useTPCDataState();
	useEffect(() => {
		const fieldsToSync = pick(TPC_TICKET_FIELDS_TO_SYNC, ticket);
		Object.entries(fieldsToSync).forEach(([key, value]) => {
			// update value of each field in RFF state
			mutators.updateFieldValue(key, value);
		});
		// duplicate prices in RFF state
		mutators.updateFieldValue('prices', prices);
	}, [deletedPrices, mutators, prices, ticket]);
};

export default useDataListener;
