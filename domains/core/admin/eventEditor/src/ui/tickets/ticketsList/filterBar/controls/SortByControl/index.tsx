import { SortByControl as SortByControlUI } from '@eventespresso/ee-components';
import { useFilteredTicketIds, useReorderTickets, useTicketsListFilterState } from '@eventespresso/edtr-services';
import { ticketDroppableId } from '@eventespresso/constants';
import { objectToSelectOptions } from '@eventespresso/utils';
import { TypeName } from '@eventespresso/services';

import { labels, sortByOptions } from '../options';
import DraggableTicket from './DraggableTicket';

const options = objectToSelectOptions(sortByOptions);

const renderDraggableItems = (ticket) => ({
	...ticket,
	content: <DraggableTicket {...ticket} />,
});

/**
 * filter for controlling the sorting of a list of Event Dates
 */
const SortByControl: React.FC = () => {
	const { sortBy, setSortBy } = useTicketsListFilterState();
	const filteredTicketIds = useFilteredTicketIds();
	const { allReorderedEntities: draggableItems, sortResponder, updateEntityList } = useReorderTickets(
		filteredTicketIds
	);

	return (
		<SortByControlUI
			draggableItems={draggableItems}
			droppableId={ticketDroppableId}
			entityType={TypeName.tickets}
			id='tickets-list-sort-by-control'
			label={labels.sortBy}
			onChangeValue={setSortBy}
			options={options}
			onSort={sortResponder}
			onSubmit={updateEntityList}
			renderDraggableItems={renderDraggableItems}
			value={sortBy}
		/>
	);
};

export default SortByControl;
