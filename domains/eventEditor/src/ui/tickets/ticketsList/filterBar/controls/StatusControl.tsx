import React from 'react';

import { SelectInput } from '@eventespresso/components';
import { useTicketsListFilterState } from '@edtrServices/filterState';
import { useMemoStringify } from '@eventespresso/hooks';
import { objectToSelectOptions } from '@eventespresso/utils';

import { labels, statusOptions, statusIsChainedOptions } from './options';

const StatusControl: React.FC = () => {
	const { isChained, status, setStatus } = useTicketsListFilterState();
	const options = useMemoStringify(objectToSelectOptions(isChained ? statusIsChainedOptions : statusOptions), [
		isChained,
	]);
	return <SelectInput label={labels.status} value={status} options={options} onChangeValue={setStatus} />;
};

export default StatusControl;
