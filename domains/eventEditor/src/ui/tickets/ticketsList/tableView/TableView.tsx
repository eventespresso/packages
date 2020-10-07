import React from 'react';
import { __ } from '@eventespresso/i18n';

import { EntityTable } from '@eventespresso/components';
import useHeaderRowGenerator from './useHeaderRowGenerator';
import useBodyRowGenerator from './useBodyRowGenerator';
import { useReorderTickets, useFilteredTickets, useTicketsListFilterState } from '@eventespresso/edtr-services';
import { withBulkEdit } from '@eventespresso/services';
import { Actions as BulkEditActions } from '../bulkEdit';

/**
 * Displays tickets in a standard list table like view
 */
const TableView: React.FC = () => {
	const filterState = useTicketsListFilterState();
	const filteredEntities = useFilteredTickets();

	const { sortResponder: sortTickets } = useReorderTickets(filteredEntities);

	const bodyRowGenerator = useBodyRowGenerator();
	const headerRowGenerator = useHeaderRowGenerator();

	return (
		<>
			<BulkEditActions />
			<EntityTable
				entities={filteredEntities}
				filterState={filterState}
				bodyRowGenerator={bodyRowGenerator}
				headerRowGenerator={headerRowGenerator}
				className={'ee-tickets-list-list-view ee-fade-in'}
				tableId='ticket-entities-table-view'
				tableCaption={__('Tickets')}
				onSort={sortTickets}
			/>
		</>
	);
};

export default withBulkEdit(TableView);
