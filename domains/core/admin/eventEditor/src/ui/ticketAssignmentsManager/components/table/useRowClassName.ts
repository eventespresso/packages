import { useCallback } from 'react';

import type { Datetime } from '@eventespresso/edtr-services';
import { useDataState } from '../../data';

type Callback = (datetime: Datetime) => string;

const useRowClassName = (): Callback => {
	const { hasNoAssignedTickets } = useDataState();

	return useCallback<Callback>(
		(datetime) => {
			const isOrphan = hasNoAssignedTickets({ datetimeId: datetime.id });
			return isOrphan ? 'no-assignments' : '';
		},
		[hasNoAssignedTickets]
	);
};

export default useRowClassName;
