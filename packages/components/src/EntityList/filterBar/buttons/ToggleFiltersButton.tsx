import React from 'react';

import { __ } from '@eventespresso/i18n';
import { Filter } from '@eventespresso/icons';
import { Button } from '../../../Button';

import type { ToggleFiltersButtonProps } from '../types';

const ToggleFiltersButton: React.FC<ToggleFiltersButtonProps> = ({ listId, showFilters, toggleFilters, ...rest }) => {
	const filterId = `ee-toggle-filters-btn-${listId}`;
	const tooltip = showFilters ? __('hide filters') : __('show filters');

	return (
		<Button
			active={showFilters}
			className='ee-filter-bar__btn'
			icon={Filter}
			id={filterId}
			labelClassName={'ee-filter-bar__btn-wrap'}
			onClick={toggleFilters}
			size='smaller'
			{...rest}
		>
			{tooltip}
		</Button>
	);
};

export default ToggleFiltersButton;
