import { Fragment, useCallback, useState } from 'react';

import { useDisclosure } from '@eventespresso/hooks';
import type { Entity } from '@eventespresso/data';

import TicketTemplate from './TicketTemplate';
import { TicketCard } from './card';
import { Container } from './multiStep';
import { withFormState } from './context';

import './style.scss';

interface Ticket extends Entity {}

export const SimpleTicketsList = withFormState((props) => {
	const { tickets } = props?.formState;

	const { isOpen, onClose, onOpen } = useDisclosure();
	const [currentTicket, seCurrentTicket] = useState<Ticket>();

	const onAddNew = useCallback(() => {
		seCurrentTicket(null);
		onOpen();
	}, [onOpen]);

	const onEdit = useCallback(
		(ticket: Ticket) => {
			seCurrentTicket(ticket);
			onOpen();
		},
		[onOpen]
	);

	return (
		<div className='rem-tickets'>
			<Container onClose={onClose} isOpen={isOpen} entity={currentTicket} />
			<TicketTemplate onAddNew={onAddNew} />
			<div className='rem-tickets__list'>
				{Object.entries(tickets).map(([id, ticket]) => (
					<Fragment key={id}>
						<TicketCard ticket={ticket} onEdit={onEdit} />
					</Fragment>
				))}
			</div>
		</div>
	);
});
