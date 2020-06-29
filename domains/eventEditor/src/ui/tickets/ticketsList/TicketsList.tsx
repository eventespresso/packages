import React from 'react';
import { __ } from '@wordpress/i18n';

import { TypeName } from '@eventespresso/services';
import { domain, ticketsList } from '@eventespresso/edtr-services';
import { EntityList } from '@eventespresso/components';

import { TicketsListProvider, withEntityListContext } from '@edtrServices/context';
import { useTicketsListFilterState } from '@edtrServices/filterState';
import AddNewTicketButton from './AddNewTicketButton';
import { legendConfig } from './config';
import { RenderCardView } from './cardView';
import { RenderTableView } from './tableView';

const TicketsList: React.FC = () => {
	const filterState = useTicketsListFilterState();

	return (
		<EntityList
			domain={domain}
			entityType={TypeName.tickets}
			filterState={filterState}
			footer={<AddNewTicketButton />}
			headerText={__('Available Tickets')}
			legendConfig={legendConfig}
			listId={ticketsList}
			loadingText={__('loading tickets...')}
			renderList={() => (filterState.view === 'card' ? <RenderCardView /> : <RenderTableView />)}
		/>
	);
};

export default withEntityListContext({
	Provider: TicketsListProvider,
	Component: TicketsList,
});
