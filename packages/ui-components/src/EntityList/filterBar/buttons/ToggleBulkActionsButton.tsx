import { __ } from '@eventespresso/i18n';
import { SelectMultiple } from '@eventespresso/icons';
import { Button } from '../../../Button';

import type { ToggleFiltersButtonProps } from '../types';

export const ToggleBulkActionsButton: React.FC<ToggleFiltersButtonProps> = ({ id, onClick, value }) => {
	const filterId = `ee-toggle-bulk-actions-btn-${id}`;
	const tooltip = value ? __('hide bulk actions') : __('show bulk actions');

	return (
		<Button
			active={value}
			className='ee-filter-bar__btn'
			icon={SelectMultiple}
			id={filterId}
			labelClassName={'ee-filter-bar__btn-wrap'}
			onClick={onClick}
			size='smaller'
		>
			{tooltip}
		</Button>
	);
};
