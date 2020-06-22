import React from 'react';

import { CalendarDateSwitcher } from '@eventespresso/components';
import Details from './Details';

import TicketActionsMenu from '../actionsMenu/TicketActionsMenu';
import { EntityActionsMenuLayout } from '@eventespresso/components';

import { EntityCard } from '@eventespresso/components';
import { getTicketStatusTextLabel, ticketStatusBgColorClassName } from '@eventespresso/helpers';
import { useTicketsListFilterState } from '@edtrServices/filterState';
import type { TicketItemProps } from '../types';
import { getPropsAreEqual, useMemoStringify } from '@eventespresso/services';

const TicketCard: React.FC<TicketItemProps> = ({ entity: ticket }) => {
	const { displayStartOrEndDate } = useTicketsListFilterState();
	const bgClassName = ticketStatusBgColorClassName(ticket);
	const footer = getTicketStatusTextLabel(ticket);
	const labels = useMemoStringify({ footer });

	return ticket ? (
		<EntityCard
			entity={ticket}
			cacheId={ticket.cacheId + displayStartOrEndDate}
			actionsMenu={<TicketActionsMenu entity={ticket} layout={EntityActionsMenuLayout.Vertical} />}
			sidebar={
				<CalendarDateSwitcher
					className={bgClassName}
					displayDate={displayStartOrEndDate}
					endDate={ticket.endDate}
					labels={labels}
					startDate={ticket.startDate}
				/>
			}
			details={<Details entity={ticket} />}
			reverse
		/>
	) : null;
};

export default React.memo(TicketCard, getPropsAreEqual(['entity', 'cacheId']));
