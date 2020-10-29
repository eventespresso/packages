import React from 'react';
import type { PaginationProps as RcPaginationProps } from 'rc-pagination';

import { __ } from '@eventespresso/i18n';

type ItemType = 'prev' | 'next' | 'jump-prev' | 'jump-next' | 'page';

const ariaLabelMapping = {
	prev: __('previous'),
	next: __('next'),
	'jump-prev': __('jump to previous'),
	'jump-next': __('jump to next'),
	page: __('page'),
};

/**
 * Can be used to customize the rendering of pagination items
 */
const ItemRender: RcPaginationProps['itemRender'] = (page, type: ItemType, element) => {
	const ariaLabel = ariaLabelMapping[type];

	return (
		<div aria-label={ariaLabel} className='ee-pagination__item'>
			{element}
		</div>
	);
};

export default ItemRender;
