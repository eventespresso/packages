import { useEffect } from 'react';

import { useNewEntitySubscription } from '@eventespresso/registry';
import useNewDateOptionsHandler from '@edtrUI/datetimes/hooks/useNewDateOptionsHandler';
import useNewTicketOptionsHandler from '@edtrUI/tickets/hooks/useNewTicketOptionsHandler';
import { domain } from '@eventespresso/edtr-services';

const useNewEntityOptionsSubscription: VoidFunction = () => {
	const { subscribe } = useNewEntitySubscription(domain);
	const newDateOptionsHandler = useNewDateOptionsHandler();
	const newTicketOptionsHandler = useNewTicketOptionsHandler();

	useEffect(() => {
		const unsubscribeNewDateOptions = subscribe(newDateOptionsHandler, { entityType: 'datetime' });
		const unsubscribeNewTicketOptions = subscribe(newTicketOptionsHandler, { entityType: 'ticket' });

		return (): void => {
			unsubscribeNewDateOptions();
			unsubscribeNewTicketOptions();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};

export default useNewEntityOptionsSubscription;
