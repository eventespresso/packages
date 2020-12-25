import React from 'react';
import { __ } from '@eventespresso/i18n';

import { Sort } from '@eventespresso/icons';

import { Button } from '../../../Button';
import type { ToggleSortingButtonProps } from '../types';

export const ToggleSortingButton: React.FC<ToggleSortingButtonProps> = ({ id, onClick, value, ...rest }) => {
	return (
		<Button
			active={value}
			className='ee-filter-bar__btn'
			icon={Sort}
			id={`ee-toggle-sorting-btn-${id}`}
			labelClassName='ee-filter-bar__btn-wrap'
			onClick={onClick}
			size='smaller'
			{...rest}
		>
			{value ? __('disable sorting') : __('enable sorting')}
		</Button>
	);
};
