import React, { Fragment } from 'react';

import AddNewButton from './AddNewButton';
import TicketTemplate from './TicketTemplate';
import { TicketCard } from './card';
import { useFormState } from '../../data';

import './style.scss';

const Tickets: React.FC = () => {
	const { addTicket, tickets } = useFormState();

	return (
		<div className='rem-tickets'>
			<div className='rem-tickets__list'>
				{Object.entries(tickets).map(([id, ticket]) => (
					<Fragment key={id}>
						<TicketCard ticket={ticket} />
					</Fragment>
				))}
			</div>
			<TicketTemplate addTicketTemplate={addTicket} ticketTemplates={Object.values(tickets)} />
			<AddNewButton />
		</div>
	);
};

export default Tickets;
