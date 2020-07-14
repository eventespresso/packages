import React from 'react';

import { CalendarDateSwitcher } from '@eventespresso/components';
import { CompactDetails, EntityCard } from '@eventespresso/components';
import { getTicketStatusTextLabel, ticketStatusBgColorClassName } from '@eventespresso/helpers';
import { useMemoStringify } from '@eventespresso/hooks';

import { TicketCardProps } from './types';

const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
	const bgClassName = ticketStatusBgColorClassName(ticket);
	const footer = getTicketStatusTextLabel(ticket);
	const labels = useMemoStringify({ footer });

	return (
		<EntityCard
			cacheId={ticket.cacheId}
			compact
			details={
				<CompactDetails
					description={ticket.description}
					id={ticket.id}
					name={ticket.name}
					price={ticket.price}
				/>
			}
			entity={ticket}
			sidebar={
				<CalendarDateSwitcher
					className={bgClassName}
					compact
					endDate={ticket.endDate}
					labels={labels}
					startDate={ticket.startDate}
				/>
			}
		/>
	);
};

export default React.memo(TicketCard);
