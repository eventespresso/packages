import React from 'react';
import { __ } from '@wordpress/i18n';

import { EntityTable } from '@eventespresso/components';
import useHeaderRowGenerator from './useHeaderRowGenerator';
import useBodyRowGenerator from './useBodyRowGenerator';
import { useDatesListFilterState, useFilteredDates } from '@edtrServices/filterState';
import { useReorderDatetimes } from '@eventespresso/edtr-services';
import { checkFeatureFlag } from '@eventespresso/config';
import { withBulkEdit } from '@eventespresso/services';
import { Actions } from '../bulkEdit';

import './styles.scss';

const isBulkEditEnabled = checkFeatureFlag('bulkEdit');

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
			{isBulkEditEnabled && <Actions />}
			<EntityTable
				entities={filteredEntities}
				filterState={filterState}
				bodyRowGenerator={bodyRowGenerator}
				headerRowGenerator={headerRowGenerator}
				className={'ee-dates-list-list-view ee-fade-in'}
				tableId='date-entities-table-view'
				tableCaption={__('Event Dates')}
				onSort={sortDates}
			/>
		</>
	);
};

export default withBulkEdit(TableView);
