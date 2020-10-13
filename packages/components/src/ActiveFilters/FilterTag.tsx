import React from 'react';
import classNames from 'classnames';

import { __, sprintf } from '@eventespresso/i18n';
import { Close } from '@eventespresso/icons';
import type { FilterTagProps } from './types';

const FilterTag: React.FC<FilterTagProps> = ({ title, className, onRemove }) => {
	const ariaLabel = sprintf(__('remove filter - %s'), title);

	return (
		<div className={classNames('ee-filter-tag', className)}>
			{title}
			<button aria-label={ariaLabel} className='ee-filter-tag__close-btn' onClick={onRemove}>
				<Close size={'tiny'} />
			</button>
		</div>
	);
};

export default FilterTag;
