import { useEffect } from 'react';

import { useFilterBarUISubscription as useAppFilterBarUISubscription } from '@eventespresso/registry';
import useDatesListFilterBar from '@edtrUI/datetimes/hooks/useDatesListFilterBar';
import useTicketsListFilterBar from '@edtrUI/tickets/hooks/useTicketsListFilterBar';
import { domain } from '@edtrServices/constants';

const useFilterBarUISubscription = (): void => {
	const { subscribe } = useAppFilterBarUISubscription(domain);
	const datesListFilterBar = useDatesListFilterBar();
	const ticketsListFilterBar = useTicketsListFilterBar();

	useEffect(() => {
		const unsubscribeDatesListFilterBar = subscribe(datesListFilterBar, { listId: 'dates-list' });
		const unsubscribeTicketsListFilterBar = subscribe(ticketsListFilterBar, { listId: 'tickets-list' });

		return (): void => {
			unsubscribeDatesListFilterBar();
			unsubscribeTicketsListFilterBar();
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};

export default useFilterBarUISubscription;
