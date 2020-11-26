import React from 'react';

import { EntityActionsMenuLayout } from '@eventespresso/components';
import { EntityCard } from '@eventespresso/components';
import { ticketStatusBgColorClassName } from '@eventespresso/helpers';
import { useTicketItem } from '@eventespresso/edtr-services';

import Details from './Details';
import TicketCardSidebar from './TicketCardSidebar';
import TicketActionsMenu from '../actionsMenu/TicketActionsMenu';
import type { TicketItemProps } from '../types';

const TicketCard: React.FC<TicketItemProps> = ({ id }) => {
	const ticket = useTicketItem({ id });
	const bgClassName = ticketStatusBgColorClassName(ticket);

	return ticket ? (
		<EntityCard
			actionsMenu={<TicketActionsMenu entity={ticket} layout={EntityActionsMenuLayout.Vertical} />}
			details={<Details entity={ticket} />}
			entity={ticket}
			reverse
			sidebar={<TicketCardSidebar entity={ticket} />}
			sidebarClass={bgClassName}
		/>
	) : null;
};

export default TicketCard;
