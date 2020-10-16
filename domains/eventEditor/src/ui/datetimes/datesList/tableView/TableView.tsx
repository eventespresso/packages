import React from 'react';
import { __ } from '@eventespresso/i18n';

import { EntityTable } from '@eventespresso/components';
import useHeaderRowGenerator from './useHeaderRowGenerator';
import useBodyRowGenerator from './useBodyRowGenerator';
import {
	datesList,
	domain,
	useDatesListFilterState,
	useFilteredDates,
	useReorderDatetimes,
} from '@eventespresso/edtr-services';
import { withBulkEdit } from '@eventespresso/services';
import { Actions as BulkEditActions } from '../bulkEdit';

import './styles.scss';

/**
 * Displays event date details in a standard list table like view
 */
const TableView: React.FC = () => {
	const filterState = useDatesListFilterState();
	const filteredEntities = useFilteredDates();

	const { sortResponder: sortDates } = useReorderDatetimes(filteredEntities);

	const bodyRowGenerator = useBodyRowGenerator();
	const headerRowGenerator = useHeaderRowGenerator();

	return (
		<>
			<BulkEditActions />
			<EntityTable
				bodyRowGenerator={bodyRowGenerator}
				domain={domain}
				entities={filteredEntities}
				filterState={filterState}
				headerRowGenerator={headerRowGenerator}
				listId={datesList}
				onSort={sortDates}
				tableCaption={__('Event Dates')}
				tableId='date-entities-table-view'
			/>
		</>
	);
};

export default withBulkEdit(TableView);
