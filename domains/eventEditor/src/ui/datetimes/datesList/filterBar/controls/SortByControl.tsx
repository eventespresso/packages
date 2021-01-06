import { SortByControl as SortByControlUI } from '@eventespresso/ee-components';
import { useDatesListFilterState } from '@eventespresso/edtr-services';
import { objectToSelectOptions } from '@eventespresso/utils';
import { TypeName } from '@eventespresso/services';

import { labels, sortByOptions } from './options';

const options = objectToSelectOptions(sortByOptions);

const SortByControl: React.FC = () => {
	const { sortBy, setSortBy } = useDatesListFilterState();

	return (
		<SortByControlUI
			entityType={TypeName.datetimes}
			label={labels.sortBy}
			onChangeValue={setSortBy}
			options={options}
			value={sortBy}
		/>
	);
};

export default SortByControl;
