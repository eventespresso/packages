import React from 'react';
import { SelectControl } from '@wordpress/components';
import { __ } from '@eventespresso/i18n';

import type { SelectControlProps } from './types';
import type { Order } from '@eventespresso/data';

interface SortOrderControlProps extends SelectControlProps {
	setOrder?: (order: Order) => void;
	order: Order;
}

const defaultOptions: React.ComponentProps<typeof SelectControl>['options'] = [
	{
		label: __('Ascending'),
		value: 'ASC',
	},
	{
		label: __('Descending'),
		value: 'DESC',
	},
];

const SortOrderControl: React.FC<SortOrderControlProps> = ({ order, setOrder, options = defaultOptions, ...rest }) => {
	return <SelectControl label={__('Sort order:')} value={order} options={options} onChange={setOrder} {...rest} />;
};

export default SortOrderControl;
