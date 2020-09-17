import React from 'react';
import { __ } from '@eventespresso/i18n';

import { Button, ButtonSize } from '../../../Button';

import { getPropsAreEqual } from '@eventespresso/utils';
import { Filter } from '@eventespresso/icons';

import type { ToggleFiltersButtonProps } from '../types';

const ToggleFiltersButton: React.FC<ToggleFiltersButtonProps> = ({ listId, showFilters, toggleFilters, ...rest }) => {
	const filterId = `ee-toggle-filters-btn-${listId}`;
	const tooltip = showFilters ? __('hide filters') : __('show filters');

	return (
		<Button
			active={showFilters}
			buttonSize={ButtonSize.SMALLER}
			className='ee-filter-bar__btn'
			icon={Filter}
			id={filterId}
			onClick={toggleFilters}
			labelClassName={'ee-filter-bar__btn-wrap'}
			{...rest}
		>
			{tooltip}
		</Button>
	);
};

export default React.memo(ToggleFiltersButton, getPropsAreEqual(['listId'], ['showFilters'], ['isDisabled']));
