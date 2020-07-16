import React from 'react';
import { differenceInHours, isAfter, parseISO } from 'date-fns';
import { __ } from '@wordpress/i18n';

import { CurrencyInput } from '@eventespresso/components';
import { SimpleEntityCard } from '@eventespresso/components';
import { TicketCardProps } from './types';
import { useDatetime } from '../../context';

const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
	const beforeDetails = <CurrencyInput id={ticket.id} amount={ticket.price} tag='h5' vertical />;
	const datetime = useDatetime();

	const datetimeStartDate = parseISO(datetime.startDate);
	const ticketStartDate = parseISO(ticket.startDate);

	const isTicketAfter = isAfter(ticketStartDate, datetimeStartDate);
	const ticketStartDifferenceInHours = differenceInHours(ticketStartDate, datetimeStartDate);

	const afterDetails = (
		<div className='ee-ticket-offset'>
			<div>
				{
				/* translators: 1 duration (number), 2 unit e.g. hours, days etc. 3 position e.g. before or after */
				sprintf(
					__('starts %1$d %2$s %3$s the start date'),
					ticketStartDifferenceInHours,
					__('hours'),
					isTicketAfter ? __('after') : __('before')
				)
			}
			</div>
		</div>
	);

	return (
		<SimpleEntityCard afterDetails={afterDetails} beforeDetails={beforeDetails} id={ticket.id} name={ticket.name} />
	);
};

export default React.memo(TicketCard);
