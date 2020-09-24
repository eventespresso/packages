import React from 'react';
import { SelectInput } from '@eventespresso/components';
import { useDatesListFilterState } from '@edtrServices/filterState';
import { objectToSelectOptions } from '@eventespresso/utils';

import { labels, displayStartOrEndDateOptions } from './options';

const options = objectToSelectOptions(displayStartOrEndDateOptions);
/**
 * filter for controlling which dates display in a list of Event Dates
 */
const DisplayStartOrEndDateControl: React.FC = () => {
	const { displayStartOrEndDate, setDisplayStartOrEndDate } = useDatesListFilterState();

	return (
		<SelectInput
			id='dates-list-display-control'
			label={labels.displayStartOrEndDate}
			value={displayStartOrEndDate}
			options={options}
			onChangeValue={setDisplayStartOrEndDate}
		/>
	);
};
export default DisplayStartOrEndDateControl;
