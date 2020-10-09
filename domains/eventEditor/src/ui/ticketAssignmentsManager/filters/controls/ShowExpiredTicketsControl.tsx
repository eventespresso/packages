import React from 'react';
import { __ } from '@eventespresso/i18n';

import { SwitchInput } from '@eventespresso/components';
import type { FilterStateManager } from '../filterState';

type ShowExpiredTicketsControlProps = Pick<FilterStateManager, 'showExpiredTickets' | 'setShowExpiredTickets'>;

const ShowExpiredTicketsControl: React.FC<ShowExpiredTicketsControlProps> = ({
	showExpiredTickets,
	setShowExpiredTickets,
}) => {
	return (
		<SwitchInput
			label={__('show expired tickets')}
			isChecked={showExpiredTickets}
			onChangeValue={setShowExpiredTickets}
		/>
	);
};
export default ShowExpiredTicketsControl;
