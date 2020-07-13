import React from 'react';

import { CalendarDateSwitcher } from '@eventespresso/components';
import Details from './Details';

import TicketActionsMenu from '../actionsMenu/TicketActionsMenu';
import { EntityActionsMenuLayout } from '@eventespresso/components';

import { EntityCard } from '@eventespresso/components';
import { getTicketStatusTextLabel, ticketStatusBgColorClassName } from '@eventespresso/helpers';
import { useTicketsListFilterState } from '@edtrServices/filterState';
import type { TicketItemProps } from '../types';
import { getPropsAreEqual } from '@eventespresso/services';
import { useMemoStringify } from '@eventespresso/hooks';

const TicketCard: React.FC<TicketItemProps> = ({ entity: ticket }) => {
	const { displayStartOrEndDate } = useTicketsListFilterState();
	const bgClassName = ticketStatusBgColorClassName(ticket);
	const footer = getTicketStatusTextLabel(ticket);
	const labels = useMemoStringify({ footer });

	return ticket ? (
		<EntityCard
			actionsMenu={<TicketActionsMenu entity={ticket} layout={EntityActionsMenuLayout.Vertical} />}
			cacheId={ticket.cacheId + displayStartOrEndDate}
			details={<Details entity={ticket} />}
			entity={ticket}
			reverse
			sidebar={
				<CalendarDateSwitcher
					className={bgClassName}
					displayDate={displayStartOrEndDate}
					endDate={ticket.endDate}
					labels={labels}
					startDate={ticket.startDate}
				/>
			}
		/>
	) : null;
};

export default React.memo(TicketCard, getPropsAreEqual(['entity', 'cacheId']));
