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
				{`${__('starts:')} ${ticketStartDifferenceInHours} hours ${
					isTicketAfter ? __('after') : __('before')
				} start date`}
			</div>
		</div>
	);

	return (
		<SimpleEntityCard afterDetails={afterDetails} beforeDetails={beforeDetails} id={ticket.id} name={ticket.name} />
	);
};

export default React.memo(TicketCard);
