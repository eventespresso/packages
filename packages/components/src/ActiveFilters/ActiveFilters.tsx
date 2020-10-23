import React, { Children } from 'react';
import { __ } from '@eventespresso/i18n';

import { ActiveFiltersProps } from './types';
import { cleanChildren } from '@eventespresso/utils';

import './styles.scss';

const ActiveFilters: React.FC<ActiveFiltersProps> = ({ title = __('active filters:'), children }) => {
	const validChildren = cleanChildren(children);
	const noFilters = !validChildren?.length;

	if (noFilters) {
		return null;
	}

	return (
		<div className='ee-filter-tags ee-filter-tags__wrapper'>
			<span className='ee-filter-tags__header'>{title}</span>
			<div className='ee-filter-tags__body'>{children}</div>
		</div>
	);
};

export default ActiveFilters;
