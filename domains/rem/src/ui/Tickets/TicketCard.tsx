import React from 'react';
import { __, sprintf } from '@wordpress/i18n';

import { CurrencyInput } from '@eventespresso/components';
import { SimpleEntityCard } from '@eventespresso/components';
import { TicketCardProps } from './types';
import { useDatetime } from '../../context';
import useOffset from './useOffset';

const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
	const beforeDetails = <CurrencyInput id={ticket.id} amount={ticket.price} tag='h5' vertical />;
	const datetime = useDatetime();

	const { startDuration, startUnit, endDuration, endUnit } = useOffset({
		datetime,
		ticket,
	});

	const afterDetails = (
		<div className='ee-ticket-offset'>
			<div>{sprintf(__('starts: %1$d %2$s before the start date'), startDuration, startUnit)}</div>
			<div>{sprintf(__('ends: %1$d %2$s before the end date'), endDuration, endUnit)}</div>
		</div>
	);

	return (
		<SimpleEntityCard afterDetails={afterDetails} beforeDetails={beforeDetails} id={ticket.id} name={ticket.name} />
	);
};

export default React.memo(TicketCard);
