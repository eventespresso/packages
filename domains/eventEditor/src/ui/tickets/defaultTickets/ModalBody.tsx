import { useCallback, useEffect, useMemo } from 'react';

import { SimpleEntityList } from '@eventespresso/ui-components';
import { useTickets } from '@eventespresso/edtr-services';

import { DefaultTicket, useDataState } from './data';
import TicketCard from './TicketCard';
import { ContentRenderer } from './multiStep';

import './styles.scss';

const ModalBody: React.FC = () => {
	const { addTicket, tickets, deleteTicket, reset } = useDataState();
	const templates = useTickets();

	const deleteEntity = useCallback(
		(ticket: DefaultTicket) => {
			deleteTicket(ticket.id, ticket.isNew);
		},
		[deleteTicket]
	);

	const entities = useMemo(() => Object.values(tickets), [tickets]);

	const addEntity = useCallback(
		(entiy) => {
			addTicket({ ...entiy, isNew: true });
		},
		[addTicket]
	);

	// reset state on mount
	useEffect(() => {
		reset();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<SimpleEntityList
			ContentRenderer={ContentRenderer}
			addEntity={addEntity}
			className='rem-tickets'
			deleteEntity={deleteEntity}
			entities={entities}
			templates={templates as any}
			EntityRenderer={TicketCard}
		/>
	);
};

export default ModalBody;
