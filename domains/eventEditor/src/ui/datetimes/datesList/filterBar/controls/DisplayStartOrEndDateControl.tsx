import React from 'react';
import { Select } from '@eventespresso/components';
import { useDatesListFilterState } from '@eventespresso/edtr-services';
import { objectToSelectOptions } from '@eventespresso/utils';

import { labels, displayStartOrEndDateOptions } from './options';

const options = objectToSelectOptions(displayStartOrEndDateOptions);
/**
 * filter for controlling which dates display in a list of Event Dates
 */
const DisplayStartOrEndDateControl: React.FC = () => {
	const { displayStartOrEndDate, setDisplayStartOrEndDate } = useDatesListFilterState();

	return (
		<Select
			id='dates-list-display-control'
			label={labels.displayStartOrEndDate}
			value={displayStartOrEndDate}
			options={options}
			onChangeValue={setDisplayStartOrEndDate}
		/>
	);
};
export default DisplayStartOrEndDateControl;
