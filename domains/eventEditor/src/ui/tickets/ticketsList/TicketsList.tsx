import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { TypeName } from '@eventespresso/services';
import {
	domain,
	ticketsList,
	TicketsListProvider,
	withEntityListContext,
	useTicketsListFilterState,
	useRegisterIsChainedFilter,
} from '@eventespresso/edtr-services';
import { EntityList } from '@eventespresso/ee-components';

import TicketsListFooter from './TicketsListFooter';
import { legendConfig } from './config';
import { RenderCardView } from './cardView';
import { RenderTableView } from './tableView';
import { ActiveTicketsFilters } from './filterBar';

const TicketsList: React.FC = () => {
	const filterState = useTicketsListFilterState();

	const renderList = useCallback(() => (filterState.view === 'card' ? <RenderCardView /> : <RenderTableView />), [
		filterState.view,
	]);

	return (
		<EntityList
			activeFilters={<ActiveTicketsFilters />}
			domain={domain}
			entityType={TypeName.tickets}
			filterState={filterState}
			footer={<TicketsListFooter />}
			headerText={__('Available Tickets')}
			legendConfig={legendConfig}
			listId={ticketsList}
			loadingText={__('loading tickets…')}
			renderList={renderList}
		/>
	);
};

const EnhancedTicketsList = withEntityListContext({
	Provider: TicketsListProvider,
	Component: TicketsList,
});

const ChainedTicketsList: React.FC = () => {
	// register isChained filter using hook.
	useRegisterIsChainedFilter();
	return <EnhancedTicketsList />;
};

export default ChainedTicketsList;
