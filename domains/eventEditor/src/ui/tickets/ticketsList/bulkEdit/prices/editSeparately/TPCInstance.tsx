import { useEffect } from 'react';

import { __, sprintf } from '@eventespresso/i18n';

import { TicketPriceCalculator } from '@eventespresso/tpc';
import { useTPCDataState } from '@eventespresso/edtr-services';
import { ManageTPCStates } from './useManageTPCStates';

export interface TPCInstanceProps {
	setTPCState: ManageTPCStates['setTPCState'];
}

export const TPCInstance: React.FC<TPCInstanceProps> = ({ setTPCState }) => {
	const { ticket, getData } = useTPCDataState();

	useEffect(() => {
		setTPCState(getData());

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [getData]);

	return (
		<>
			<header>
				{sprintf(
					/* translators: %s ticket name */
					__('Edit prices for Ticket: %s'),
					ticket.name
				)}
			</header>
			<TicketPriceCalculator />
		</>
	);
};
