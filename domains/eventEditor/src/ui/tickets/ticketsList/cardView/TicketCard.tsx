import React from 'react';

import Details from './Details';
import TicketCardSidebar from './TicketCardSidebar';
import TicketActionsMenu from '../actionsMenu/TicketActionsMenu';
import { EntityActionsMenuLayout } from '@eventespresso/components';
import { EntityCard } from '@eventespresso/components';
import { ticketStatusBgColorClassName } from '@eventespresso/helpers';
import { useTicketsListFilterState } from '@edtrServices/filterState';
import { getPropsAreEqual } from '@eventespresso/utils';
import type { TicketItemProps } from '../types';

const TicketCard: React.FC<TicketItemProps> = ({ entity: ticket }) => {
	const { displayStartOrEndDate } = useTicketsListFilterState();
	const bgClassName = ticketStatusBgColorClassName(ticket);

	return ticket ? (
		<EntityCard
			actionsMenu={<TicketActionsMenu entity={ticket} layout={EntityActionsMenuLayout.Vertical} />}
			cacheId={ticket.cacheId + displayStartOrEndDate}
			details={<Details entity={ticket} />}
			entity={ticket}
			reverse
			sidebar={<TicketCardSidebar entity={ticket} />}
			sidebarClass={bgClassName}
		/>
	) : null;
};

export default React.memo(TicketCard, getPropsAreEqual(['entity', 'cacheId']));
