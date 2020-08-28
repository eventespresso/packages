import React from 'react';

import { SelectInput } from '@eventespresso/components';
import { useDatesListFilterState } from '@edtrServices/filterState';
import { objectToSelectOptions } from '@eventespresso/utils';

import { labels, statusOptions } from './options';
const options = objectToSelectOptions(statusOptions);

const StatusControl: React.FC = () => {
	const { status, setStatus } = useDatesListFilterState();

	return <SelectInput label={labels.status} value={status} options={options} onChangeValue={setStatus} />;
};

export default StatusControl;
