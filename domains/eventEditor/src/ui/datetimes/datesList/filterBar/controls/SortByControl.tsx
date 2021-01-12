import { useCallback } from 'react';

import { SortByControl as SortByControlUI } from '@eventespresso/ee-components';
import {
	useDatesListFilterState,
	useFilteredDateIds,
	useReorderDatetimes,
	useDatetimeQueryOptions,
	DatetimeEdge,
	useUpdateDatetimeList,
} from '@eventespresso/edtr-services';

import { objectToSelectOptions } from '@eventespresso/utils';
import { datetimesDroppableId } from '@eventespresso/constants';
import { TypeName } from '@eventespresso/services';

import { labels, sortByOptions } from './options';

const options = objectToSelectOptions(sortByOptions);

const SortByControl: React.FC = () => {
	const { sortBy, setSortBy } = useDatesListFilterState();
	const filteredDateIds = useFilteredDateIds();
	const { allOrderedEntities, done, sortResponder } = useReorderDatetimes(filteredDateIds);

	const queryOptions = useDatetimeQueryOptions();
	const updateDatetimeList = useUpdateDatetimeList();

	const renderDraggableItems = useCallback(
		(item) => ({
			...item,
			content: (
				<>
					<span>{item.dbId})</span>
					<span>{item.name}: </span>
				</>
			),
		}),
		[]
	);

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
