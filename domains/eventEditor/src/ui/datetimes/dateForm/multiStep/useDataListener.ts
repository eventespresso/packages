import { useEffect } from 'react';
import { useForm } from '@eventespresso/form';

import { useDataState as useTAMDataState } from '@edtrUI/ticketAssignmentsManager/data';

/**
 * A custom hook which subscribes to TAM data and updates
 * RFF data when needed.
 */
const useDataListener: VoidFunction = () => {
	const { getData } = useTAMDataState();
	const { mutators, getState } = useForm();
	const data = getData();

	const id = getState().values.id || 'NEW_DATE';
	useEffect(() => {
		// update value of `tickets` field in RFF state
		mutators.updateFieldValue('tickets', data?.datetimes?.[id]?.tickets);
	}, [data, id, mutators]);
};

export default useDataListener;
