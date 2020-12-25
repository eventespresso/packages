import { Fragment } from 'react';

import TicketTemplate from './TicketTemplate';
import { TicketCard } from './card';
import { useFormState } from '../../data';

import './style.scss';

const Tickets: React.FC = () => {
	const { addTicket, tickets } = useFormState();

	return (
		<div className='rem-tickets'>
			<TicketTemplate addTicketTemplate={addTicket} ticketTemplates={Object.values(tickets)} />
			<div className='rem-tickets__list'>
				{Object.entries(tickets).map(([id, ticket]) => (
					<Fragment key={id}>
						<TicketCard ticket={ticket} />
					</Fragment>
				))}
			</div>
		</div>
	);
};

export default Tickets;
