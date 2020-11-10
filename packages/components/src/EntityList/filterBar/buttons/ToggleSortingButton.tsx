import React from 'react';
import { __ } from '@eventespresso/i18n';

import { Sort } from '@eventespresso/icons';

import { Button } from '../../../Button';
import type { ToggleSortingButtonProps } from '../types';

const ToggleSortingButton: React.FC<ToggleSortingButtonProps> = ({
	listId,
	sortingEnabled,
	toggleSorting,
	...rest
}) => {
	const id = `ee-toggle-sorting-btn-${listId}`;

	return (
		<Button
			active={sortingEnabled}
			className='ee-filter-bar__btn'
			icon={Sort}
			id={id}
			labelClassName='ee-filter-bar__btn-wrap'
			onClick={toggleSorting}
			size='smaller'
			{...rest}
		>
			{sortingEnabled ? __('disable sorting') : __('enable sorting')}
		</Button>
	);
};

export default ToggleSortingButton;
