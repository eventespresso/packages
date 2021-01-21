import { Fragment, useCallback, useMemo, useState } from 'react';

import { useDisclosure } from '@eventespresso/hooks';

import TicketTemplate from './TicketTemplate';
import { TicketCard } from './card';
import { useFormState, RemTicket } from '../../data';
import { Container } from './multiStep';

import './style.scss';

const Tickets: React.FC = () => {
	const { addTicket, tickets } = useFormState();
	const { isOpen, onClose, onOpen } = useDisclosure();
	const [currentTicket, seCurrentTicket] = useState<RemTicket>();

	const ticketTemplates = useMemo(() => Object.values(tickets), [tickets]);

	const onAddNew = useCallback(() => {
		seCurrentTicket(null);
		onOpen();
	}, [onOpen]);

	const onEdit = useCallback(
		(ticket: RemTicket) => {
			seCurrentTicket(ticket);
			onOpen();
		},
		[onOpen]
	);

	return (
		<div className='rem-tickets'>
			<Container onClose={onClose} isOpen={isOpen} entity={currentTicket} />
			<TicketTemplate addTicketTemplate={addTicket} ticketTemplates={ticketTemplates} onAddNew={onAddNew} />
			<div className='rem-tickets__list'>
				{Object.entries(tickets).map(([id, ticket]) => (
					<Fragment key={id}>
						<TicketCard ticket={ticket} onEdit={onEdit} />
					</Fragment>
				))}
			</div>
		</div>
	);
};

export default Tickets;
