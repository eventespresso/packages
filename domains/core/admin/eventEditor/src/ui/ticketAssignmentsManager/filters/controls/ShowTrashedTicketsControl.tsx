import { __ } from '@eventespresso/i18n';

import { Switch } from '@eventespresso/ui-components';
import type { FilterStateManager } from '../filterState';

type ShowTrashedTicketsControlProps = Pick<FilterStateManager, 'showTrashedTickets' | 'setShowTrashedTickets'>;

const ShowTrashedTicketsControl: React.FC<ShowTrashedTicketsControlProps> = ({
	showTrashedTickets,
	setShowTrashedTickets,
}) => {
	return (
		<Switch
			id='show-trashed-tickets'
			isChecked={showTrashedTickets}
			label={__('show trashed tickets')}
			onChangeValue={setShowTrashedTickets}
		/>
	);
};

export default ShowTrashedTicketsControl;
