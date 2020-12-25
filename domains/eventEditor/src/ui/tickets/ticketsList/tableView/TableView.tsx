import { __ } from '@eventespresso/i18n';

import { EntityTable } from '@eventespresso/ee-components';
import useHeaderRowGenerator from './useHeaderRowGenerator';
import useBodyRowGenerator from './useBodyRowGenerator';
import {
	ticketsList,
	domain,
	useFilteredTicketIds,
	useReorderTickets,
	useTicketsListFilterState,
} from '@eventespresso/edtr-services';
import { withBulkEdit } from '@eventespresso/services';
import { Actions as BulkEditActions } from '../bulkEdit';

/**
 * Displays tickets in a standard list table like view
 */
const TableView: React.FC = () => {
	const filterState = useTicketsListFilterState();
	const filteredTicketIds = useFilteredTicketIds();

	const { sortResponder: sortTickets } = useReorderTickets(filteredTicketIds);

	const bodyRowGenerator = useBodyRowGenerator();
	const headerRowGenerator = useHeaderRowGenerator();

	return (
		<>
			<BulkEditActions />
			<EntityTable
				bodyRowGenerator={bodyRowGenerator}
				domain={domain}
				entityIds={filteredTicketIds}
				filterState={filterState}
				headerRowGenerator={headerRowGenerator}
				listId={ticketsList}
				onSort={sortTickets}
				tableCaption={__('Tickets')}
				tableId='ticket-entities-table-view'
			/>
		</>
	);
};

export default withBulkEdit(TableView);
