import React from 'react';
import { __ } from '@eventespresso/i18n';

import { getPropsAreEqual } from '@eventespresso/utils';
import { Sort } from '@eventespresso/icons';

import { Button, ButtonSize } from '../../../Button';
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
			buttonSize={ButtonSize.SMALLER}
			className='ee-filter-bar__btn'
			icon={Sort}
			id={id}
			onClick={toggleSorting}
			labelClassName='ee-filter-bar__btn-wrap'
			{...rest}
		>
			{sortingEnabled ? __('disable sorting') : __('enable sorting')}
		</Button>
	);
};

export default React.memo(ToggleSortingButton, getPropsAreEqual(['listId'], ['sortingEnabled']));
