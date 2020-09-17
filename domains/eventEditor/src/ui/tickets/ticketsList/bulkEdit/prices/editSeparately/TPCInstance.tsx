import React, { useEffect } from 'react';
import { __, sprintf } from '@eventespresso/i18n';

import { TicketPriceCalculator, useDataState } from '@eventespresso/tpc';
import { ManageTPCStates } from './useManageTPCStates';

export interface TPCInstanceProps {
	setTPCState: ManageTPCStates['setTPCState'];
}

export const TPCInstance: React.FC<TPCInstanceProps> = ({ setTPCState }) => {
	const { ticket, getData } = useDataState();

	useEffect(() => {
		setTPCState(getData());

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [getData]);

	return (
		<>
			<header>{sprintf(__('Edit prices for Ticket: %s'), ticket.name)}</header>
			<TicketPriceCalculator />
		</>
	);
};
