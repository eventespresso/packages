import { useCallback } from 'react';

import { SelectControl } from '@wordpress/components';
import { __ } from '@eventespresso/i18n';

import { AttendeesEditProps } from '../types';
import OrderByControl from '@blocksComponents/OrderByControl';

const options: React.ComponentProps<typeof SelectControl>['options'] = [
	{
		label: __('Attendee id'),
		value: 'ID',
	},
	{
		label: __('Last name only'),
		value: 'LAST_NAME',
	},
	{
		label: __('First name only'),
		value: 'FIRST_NAME',
	},
	{
		label: __('First, then Last name'),
		value: 'FIRST_THEN_LAST_NAME',
	},
	{
		label: __('Last, then First name'),
		value: 'LAST_THEN_FIRST_NAME',
	},
];

const SelectOrderBy: React.FC<AttendeesEditProps> = ({ attributes, setAttributes }) => {
	const { orderBy } = attributes;

	const setOrderBy = useCallback(
		(orderBy: AttendeesEditProps['attributes']['orderBy']): void => setAttributes({ orderBy }),
		[setAttributes]
	);

	return (
		<OrderByControl label={__('Order Attendees by:')} orderBy={orderBy} options={options} setOrderBy={setOrderBy} />
	);
};

export default SelectOrderBy;
