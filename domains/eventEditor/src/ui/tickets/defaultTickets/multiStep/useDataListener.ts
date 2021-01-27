import { useForm } from '@eventespresso/form';
import { useSyncTPCToRFF } from '@eventespresso/tpc';

import { useDataState } from '../data';

/**
 * A custom hook which subscribes to TAM and TPC data and updates
 * RFF data when needed.
 */
const useDataListener: VoidFunction = () => {
	const { getState } = useForm();

	const { tickets } = useDataState();

	// get the ticket id from RFF form state
	const ticketId = getState()?.values?.id;
	// get the ticket from REM form state using the above id
	const currentTicket = tickets?.[ticketId];
	// extract prices already saved in REM form state
	const prices = currentTicket?.prices;

	useSyncTPCToRFF(prices);
};

export default useDataListener;
