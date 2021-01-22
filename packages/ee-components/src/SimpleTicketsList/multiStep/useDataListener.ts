import { useEffect } from 'react';
// import { useForm } from '@eventespresso/form';
// import { pick } from 'ramda';

// import { RemTicket, useTPCDataState } from '@eventespresso/edtr-services';
// import { useFormState } from '../hooks';
// import type { AnyObject } from '@eventespresso/utils';

// The fields that need to be synced from TPC to ticket edit form
// This is to avoid ticket.name being synced
// const TPC_TICKET_FIELDS_TO_SYNC: Array<keyof RemTicket> = ['isTaxable', 'price', 'reverseCalculate'];

/**
 * A custom hook which subscribes to TAM and TPC data and updates
 * RFF data when needed.
 */
const useDataListener = () => {
	// const { mutators, getState } = useForm();
	// const { tickets } = useFormState();

	// const { deletedPrices, prices, ticket, setPrices } = useTPCDataState();
	useEffect(() => {
		// const fieldsToSync = pick(TPC_TICKET_FIELDS_TO_SYNC, ticket);
		// 	Object.entries(fieldsToSync).forEach(([key, value]) => {
		// 		// update value of each field in RFF state
		// 		mutators.updateFieldValue(key, value);
		// 	});
		// 	// duplicate prices in RFF state
		// 	mutators.updateFieldValue('prices', prices);
		// }, [deletedPrices, mutators, prices, ticket]);
		// // This effect on mount, feeds prices to TPC from REM form state
		// useEffect(() => {
		// 	// get the ticket id from RFF form state
		// 	const ticketId = getState()?.values?.id;
		// 	// get the ticket from REM form state using the above id
		// 	const currentTicket = tickets?.[ticketId];
		// 	// extract prices already saved in REM form state
		// 	const prices = currentTicket?.prices;
		// 	// If we are lucky
		// 	if (prices) {
		// 		// feed TPC the best peanut butter
		// 		setPrices(prices);
		// 	}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};

export default useDataListener;
