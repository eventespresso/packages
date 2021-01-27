import { useEffect } from 'react';

import { useForm } from '@eventespresso/form';
import { useSyncTPCToRFF } from '@eventespresso/tpc';
import { useDataState as useTAMDataState } from '@edtrUI/ticketAssignmentsManager/data';

/**
 * A custom hook which subscribes to TAM and TPC data and updates
 * RFF data when needed.
 */
const useDataListener: VoidFunction = () => {
	const { getData } = useTAMDataState();
	const { mutators, getState } = useForm();
	const data = getData();

	const id = getState().values.id || 'NEW_TICKET';
	useEffect(() => {
		// update value of `datetimes` field in RFF state
		mutators.updateFieldValue('datetimes', data?.tickets?.[id]?.datetimes);
	}, [data, id, mutators]);

	useSyncTPCToRFF();
};

export default useDataListener;
