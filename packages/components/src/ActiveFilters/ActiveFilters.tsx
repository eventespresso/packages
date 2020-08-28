import React, { Children } from 'react';
import { __ } from '@wordpress/i18n';

import { ActiveFiltersProps } from './types';

import './styles.scss';

const ActiveFilters: React.FC<ActiveFiltersProps> = ({ title = __('active filters:'), children }) => {
	// if no filters
	if (!Children.toArray(children).length) {
		return null;
	}

	return (
		<div className='ee-filter-tags__wrapper'>
			<h6 className='ee-filter-tags__header'>{title}</h6>
			<div className='ee-filter-bar__tags'>{children}</div>
		</div>
	);
};

export default ActiveFilters;
