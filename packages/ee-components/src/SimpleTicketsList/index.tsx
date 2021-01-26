import { Fragment, useCallback, useState } from 'react';

import { useDisclosure } from '@eventespresso/hooks';
import type { Entity } from '@eventespresso/data';

import TicketTemplate from './TicketTemplate';
import { TicketCard } from './card';
import { Container } from './multiStep';
import { withFormState } from './context';
import type { SimpleTicketsListProps } from './types';

import './style.scss';

interface Ticket extends Entity {}

const SimpleTicketsList: React.FC<SimpleTicketsListProps> = ({ StepRender, ...props }) => {
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
		<div className='ee-simple-tickets-list'>
			<Container onClose={onClose} isOpen={isOpen} entity={currentTicket} StepRender={StepRender} />
			<TicketTemplate onAddNew={onAddNew} />
			<div className='ee-simple-tickets-list__card'>
				{Object.entries(tickets).map(([id, ticket]) => (
					<Fragment key={id}>
						<TicketCard ticket={ticket} onEdit={onEdit} />
					</Fragment>
				))}
			</div>
		</div>
	);
};

export default withFormState(SimpleTicketsList);
