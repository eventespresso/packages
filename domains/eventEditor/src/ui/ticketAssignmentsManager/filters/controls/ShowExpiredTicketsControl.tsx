import { __ } from '@eventespresso/i18n';

import { Switch } from '@eventespresso/ui-components';
import type { FilterStateManager } from '../filterState';

type ShowExpiredTicketsControlProps = Pick<FilterStateManager, 'showExpiredTickets' | 'setShowExpiredTickets'>;

const ShowExpiredTicketsControl: React.FC<ShowExpiredTicketsControlProps> = ({
	showExpiredTickets,
	setShowExpiredTickets,
}) => {
	return (
		<Switch
			isChecked={showExpiredTickets}
			label={__('show expired tickets')}
			onChangeValue={setShowExpiredTickets}
		/>
	);
};

export default ShowExpiredTicketsControl;
