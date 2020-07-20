import { useEffect } from 'react';

import { FilterBarUISubscription } from '@eventespresso/registry';
import useDatesListFilterBar from '@edtrUI/datetimes/hooks/useDatesListFilterBar';
import useTicketsListFilterBar from '@edtrUI/tickets/hooks/useTicketsListFilterBar';
import { domain } from '@eventespresso/edtr-services';

const { subscribe } = new FilterBarUISubscription(domain);

const useFilterBarUISubscription = (): void => {
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
