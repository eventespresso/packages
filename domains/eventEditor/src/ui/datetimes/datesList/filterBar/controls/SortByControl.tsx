import { useCallback } from 'react';
import { format } from 'date-fns';

import { SortByControl as SortByControlUI } from '@eventespresso/ee-components';
import {
	DatetimeEdge,
	useDatesListFilterState,
	useFilteredDateIds,
	useReorderDatetimes,
	useDatetimeQueryOptions,
	useUpdateDatetimeList,
} from '@eventespresso/edtr-services';

import { objectToSelectOptions } from '@eventespresso/utils';
import { datetimesDroppableId } from '@eventespresso/constants';
import { TypeName } from '@eventespresso/services';

import { labels, sortByOptions } from './options';

const options = objectToSelectOptions(sortByOptions);

const renderDraggableItems = (item) => ({
	...item,
	content: (
		<>
			<span>{item.dbId})</span>
			<span>{item.name}: </span>
			<span>{format(new Date(item.startDate), 'LLL')}</span>
			<span>
				{format(new Date(item.startDate), 'd')} - {format(new Date(item.endDate), 'd')}
			</span>
			<span>{format(new Date(item.endDate), 'yyyy')}</span>
		</>
	),
});

const SortByControl: React.FC = () => {
	const { sortBy, setSortBy } = useDatesListFilterState();
	const filteredDateIds = useFilteredDateIds();
	const { allOrderedEntities, done, sortResponder } = useReorderDatetimes(filteredDateIds);

	const queryOptions = useDatetimeQueryOptions();
	const updateDatetimeList = useUpdateDatetimeList();

	const updateEntityList = useCallback(() => {
		const espressoDatetimes: DatetimeEdge = {
			nodes: allOrderedEntities,
			__typename: 'EspressoRootQueryDatetimesConnection',
		};

		done();

		updateDatetimeList({
			...queryOptions,
			data: {
				espressoDatetimes,
			},
		});
	}, [allOrderedEntities, done, queryOptions, updateDatetimeList]);

	return (
		<SortByControlUI
			draggableItems={allOrderedEntities}
			droppableId={datetimesDroppableId}
			entityType={TypeName.datetimes}
			id='dates-list-sort-by-control'
			label={labels.sortBy}
			renderDraggableItems={renderDraggableItems}
			onChangeValue={setSortBy}
			onSort={sortResponder}
			onSubmit={updateEntityList}
			options={options}
			value={sortBy}
		/>
	);
};

export default SortByControl;
