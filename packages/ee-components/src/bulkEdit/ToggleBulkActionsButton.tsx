import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { SelectMultiple } from '@eventespresso/icons';
import { Button, FilterButtonBaseProps } from '@eventespresso/ui-components';

import { useShowDatetimeBA } from '@eventespresso/edtr-services';

export const ToggleBulkActionsButton: React.FC<FilterButtonBaseProps> = ({ id }) => {
	const filterId = `ee-toggle-bulk-actions-btn-${id}`;
	const [showBulkActions, setShowBulkActions] = useShowDatetimeBA();
	const onClick = useCallback(() => setShowBulkActions(!showBulkActions), [setShowBulkActions, showBulkActions]);
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
