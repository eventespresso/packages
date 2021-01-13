import { Fragment } from 'react';

import { TicketTemplate, TicketTemplateProps } from './TicketTemplate';
import { TicketCard } from './card';

import './style.scss';

interface Props extends Pick<TicketTemplateProps, 'addTicket' | 'defaultTickets' | 'ticketTemplates'> {}

export const TicketTemplates: React.FC<Props> = ({ addTicket, defaultTickets, ticketTemplates: tickets }) => {
	return (
		<div className='rem-tickets'>
			<TicketTemplate
				addTicketTemplate={addTicket}
				defaultTickets={defaultTickets}
				ticketTemplates={Object.values(tickets)}
			/>
			<div className='rem-tickets__list'>
				{Object.entries(tickets).map(([id, ticket]) => {
					const { isShared, ticketSalesDates, ticketSalesStart, ticketSalesEnd } = tickets?.[ticket?.id];

					return (
						<Fragment key={id}>
							<TicketCard
								isShared={isShared}
								ticketSalesDates={ticketSalesDates}
								ticketSalesStart={ticketSalesStart}
								ticketSalesEnd={ticketSalesEnd}
								ticket={ticket}
							/>
						</Fragment>
					);
				})}
			</div>
		</div>
	);
};
