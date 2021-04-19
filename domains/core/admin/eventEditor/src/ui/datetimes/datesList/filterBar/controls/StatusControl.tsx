import { Select } from '@eventespresso/ui-components';
import { useDatesListFilterState } from '@eventespresso/edtr-services';
import { objectToSelectOptions } from '@eventespresso/utils';

import { labels, statusOptions } from './options';
const options = objectToSelectOptions(statusOptions);

const StatusControl: React.FC = () => {
	const { status, setStatus } = useDatesListFilterState();

	return (
		<Select
			id='dates-list-status-control'
			label={labels.status}
			onChangeValue={setStatus}
			options={options}
			value={status}
		/>
	);
};

export default StatusControl;
