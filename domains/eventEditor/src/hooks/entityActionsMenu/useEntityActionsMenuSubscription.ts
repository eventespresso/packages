import { useEffect } from 'react';

import { EntityActionsSubscription } from '@eventespresso/registry';
import useDatesActionMenuHandler from '@edtrUI/datetimes/hooks/useDatesActionMenuHandler';
import useTicketsActionMenuHandler from '@edtrUI/tickets/hooks/useTicketsActionMenuHandler';
import { domain } from '@eventespresso/edtr-services';

const { subscribe } = new EntityActionsSubscription(domain);

const useEntityActionsMenuSubscription = (): void => {
	const datesActionHandler = useDatesActionMenuHandler();
	const ticketsActionHandler = useTicketsActionMenuHandler();

	useEffect(() => {
		const unsubscribeDatesAction = subscribe(datesActionHandler, { entityType: 'datetime' });
		const unsubscribeTicketsAction = subscribe(ticketsActionHandler, { entityType: 'ticket' });

		return (): void => {
			unsubscribeDatesAction();
			unsubscribeTicketsAction();
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};

export default useEntityActionsMenuSubscription;
