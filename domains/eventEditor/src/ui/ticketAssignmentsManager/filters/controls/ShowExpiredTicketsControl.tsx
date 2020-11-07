import React from 'react';
import { __ } from '@eventespresso/i18n';

import { Switch } from '@eventespresso/components';
import type { FilterStateManager } from '../filterState';

type ShowExpiredTicketsControlProps = Pick<FilterStateManager, 'showExpiredTickets' | 'setShowExpiredTickets'>;

const ShowExpiredTicketsControl: React.FC<ShowExpiredTicketsControlProps> = ({
	showExpiredTickets,
	setShowExpiredTickets,
}) => {
	return (
		<Switch label={__('show expired tickets')} checked={showExpiredTickets} onChangeValue={setShowExpiredTickets} />
	);
};

export default ShowExpiredTicketsControl;
