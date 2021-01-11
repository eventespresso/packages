import { useMemo } from 'react';
import { SortByControl as SortByControlUI } from '@eventespresso/ee-components';
import {
	useDatesListFilterState,
	useFilteredDateIds,
	useLazyDatetime,
	useReorderDatetimes,
} from '@eventespresso/edtr-services';
import { objectToSelectOptions } from '@eventespresso/utils';
import { datetimesDroppableId } from '@eventespresso/constants';
import { TypeName } from '@eventespresso/services';

import { labels, sortByOptions } from './options';

const options = objectToSelectOptions(sortByOptions);

const SortByControl: React.FC = () => {
	const { sortBy, setSortBy } = useDatesListFilterState();
	const filteredDateIds = useFilteredDateIds();
	const { sortResponder: sortDates } = useReorderDatetimes(filteredDateIds);
	const getDatetime = useLazyDatetime();
	const draggableItems = useMemo(() => filteredDateIds.map(getDatetime), [filteredDateIds, getDatetime]);

	return (
		<SortByControlUI
			draggableItems={draggableItems}
			droppableId={datetimesDroppableId}
			entityType={TypeName.datetimes}
			label={labels.sortBy}
			onChangeValue={setSortBy}
			onSort={sortDates}
			options={options}
			value={sortBy}
		/>
	);
};

export default SortByControl;
