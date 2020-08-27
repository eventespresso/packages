import React from 'react';
import { __ } from '@wordpress/i18n';
import { SelectInput } from '@eventespresso/components';
import { DisplayStartOrEndDate } from '@eventespresso/edtr-services';
import { useDatesListFilterState } from '@edtrServices/filterState';
import { useMemoStringify } from '@eventespresso/hooks';

/**
 * filter for controlling which dates display in a list of Event Dates
 */
const DisplayStartOrEndDateControl: React.FC = () => {
	const { displayStartOrEndDate, setDisplayStartOrEndDate } = useDatesListFilterState();
	const options = useMemoStringify([
		{
			value: DisplayStartOrEndDate.start,
			label: __('start dates only'),
		},
		{
			value: DisplayStartOrEndDate.end,
			label: __('end dates only'),
		},
		{
			value: DisplayStartOrEndDate.both,
			label: __('start and end dates'),
		},
	]);
	return (
		<SelectInput
			label={__('display')}
			className='espresso-date-list-filter-bar-display-select'
			value={displayStartOrEndDate}
			options={options}
			onChangeValue={setDisplayStartOrEndDate}
		/>
	);
};
export default DisplayStartOrEndDateControl;
