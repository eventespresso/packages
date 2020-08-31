import React from 'react';
import { __ } from '@wordpress/i18n';

import { EntityTable } from '@eventespresso/components';
import useHeaderRowGenerator from './useHeaderRowGenerator';
import useBodyRowGenerator from './useBodyRowGenerator';
import { useFilteredTickets, useTicketsListFilterState } from '@edtrServices/filterState';
import { useReorderTickets } from '@eventespresso/edtr-services';
import { checkFeatureFlag } from '@eventespresso/config';
import { withBulkEdit } from '@eventespresso/services';
import { Actions } from '../bulkEdit';

const isBulkEditEnabled = checkFeatureFlag('bulkEdit');
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
			{isBulkEditEnabled && <Actions />}
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
