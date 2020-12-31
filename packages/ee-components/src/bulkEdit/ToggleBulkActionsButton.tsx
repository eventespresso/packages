import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { SelectMultiple } from '@eventespresso/icons';
import { Button } from '@eventespresso/ui-components';
import { useShowDatetimeBA, useShowTicketBA } from '@eventespresso/edtr-services';
import type { ToggleBulkActionsButtonProps } from './types';

export const ToggleBulkActionsButton: React.FC<ToggleBulkActionsButtonProps> = ({ entityType: type, id }) => {
	const filterId = `ee-toggle-bulk-actions-btn-${id}`;
	const [showDatetimeBA, setShowDatetimeBA] = useShowDatetimeBA();
	const [showTicketBA, setShowTicketBA] = useShowTicketBA();
	const setShowBulkActions = (type === 'datetimes' && setShowDatetimeBA) || (type === 'tickets' && setShowTicketBA);
	const showBulkActions = (type === 'datetimes' && showDatetimeBA) || (type === 'tickets' && showTicketBA);
	const onClick = useCallback(() => setShowBulkActions?.(!showBulkActions), [
		setShowBulkActions,
		showBulkActions,
	]);
	const tooltip = showBulkActions ? __('hide bulk actions') : __('show bulk actions');

	return (
		<Button
			active={showBulkActions}
			className='ee-filter-bar__btn'
			icon={SelectMultiple}
			id={filterId}
			labelClassName='ee-filter-bar__btn-wrap'
			onClick={onClick}
			size='smaller'
		>
			{tooltip}
		</Button>
	);
};
