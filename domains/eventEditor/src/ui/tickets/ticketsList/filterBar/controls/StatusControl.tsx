import { Select } from '@eventespresso/ui-components';
import { useTicketsListFilterState } from '@eventespresso/edtr-services';
import { useMemoStringify } from '@eventespresso/hooks';
import { objectToSelectOptions } from '@eventespresso/utils';

import { labels, statusOptions, statusIsChainedOptions } from './options';

const StatusControl: React.FC = () => {
	const { isChained, status, setStatus } = useTicketsListFilterState();
	const options = useMemoStringify(objectToSelectOptions(isChained ? statusIsChainedOptions : statusOptions), [
		isChained,
	]);

	return (
		<Select
			id='tickets-list-status-control'
			label={labels.status}
			onChangeValue={setStatus}
			options={options}
			value={status}
		/>
	);
};

export default StatusControl;
