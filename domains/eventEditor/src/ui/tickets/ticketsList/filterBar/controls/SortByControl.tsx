import React from 'react';
import { __ } from '@wordpress/i18n';
import { SelectInput } from '@eventespresso/components';
import { SortBy } from '@eventespresso/edtr-services';
import { useTicketsListFilterState } from '@edtrServices/filterState';
import { useMemoStringify } from '@eventespresso/hooks';

type SortByOptions = Array<{
	value: SortBy;
	label: string;
}>;
/**
 * filter for controlling the sorting of a list of Event Dates
 */
const SortByControl: React.FC = () => {
	const { sortBy, setSortBy } = useTicketsListFilterState();
	const options = useMemoStringify<SortByOptions>([
		{
			value: 'date',
			label: __('ticket sale date'),
		},
		{
			value: 'name',
			label: __('ticket name'),
		},
		{
			value: 'id',
			label: __('ticket ID'),
		},
		{
			value: 'order',
			label: __('custom order'),
		},
	]);
	return (
		<SelectInput
			label={__('sort by')}
			className='espresso-ticket-list-filter-bar-order-select'
			value={sortBy}
			options={options}
			onChangeValue={setSortBy}
		/>
	);
};

export default SortByControl;
