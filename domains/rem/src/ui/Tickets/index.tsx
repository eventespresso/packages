import { useCallback, useMemo } from 'react';

import { SimpleEntityList } from '@eventespresso/ui-components';
import { useTickets } from '@eventespresso/edtr-services';
import { useTimeZoneTime } from '@eventespresso/services';

import TicketCard from './TicketCard';
import { useFormState, RemTicket } from '../../data';
import { normalizeTicketForRem } from '../../utils';
import { ContentRenderer } from './multiStep';

import './style.scss';

const Tickets: React.FC = () => {
	const { addTicket, tickets, deleteTicket } = useFormState();
	const templates = (useTickets() as unknown) as RemTicket[];
	const { utcToSiteTime } = useTimeZoneTime();

	const deleteEntity = useCallback(
		(ticket: RemTicket) => {
			deleteTicket(ticket.id);
		},
		[deleteTicket]
	);

	const entities = useMemo(() => Object.values(tickets), [tickets]);

	const addEntity = useCallback(
		(entiy) => {
			const normalizedTicket = normalizeTicketForRem(entiy, utcToSiteTime);
			addTicket(normalizedTicket);
		},
		[addTicket, utcToSiteTime]
	);

	return (
		<SimpleEntityList
			ContentRenderer={ContentRenderer}
			addEntity={addEntity}
			className='rem-tickets'
			deleteEntity={deleteEntity}
			entities={entities}
			templates={templates}
			EntityRenderer={TicketCard}
		/>
	);
};

export default Tickets;
