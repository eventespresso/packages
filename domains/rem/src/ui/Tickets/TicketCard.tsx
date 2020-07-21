import React from 'react';
import { __ } from '@wordpress/i18n';

import { CurrencyInput, IconButton, SimpleEntityCard } from '@eventespresso/components';
import { Edit, Trash } from '@eventespresso/icons';
import { TicketCardProps } from './types';

// import { useDatetime } from '../../context';

const TicketCard: React.FC<TicketCardProps> = ({ onCopy, onTrash, ticket }) => {
	const beforeDetails = <CurrencyInput id={ticket.id} amount={ticket.price} tag='h5' vertical />;
	// const datetime = useDatetime();

	const afterDetails = (
		<div className='ee-ticket-offset'>
			{/* <div>{sprintf(__('starts: %1$d %2$s before the start date'), startDuration, startUnit)}</div> */}
			{/* <div>{sprintf(__('ends: %1$d %2$s before the end date'), endDuration, endUnit)}</div> */}
		</div>
	);

	const sidebar = (
		<div className='ee-ticket-sidebar'>
			<IconButton borderless icon={Edit} onClick={onCopy} tooltip={__('edit ticket')} />
			<IconButton borderless icon={Trash} onClick={onTrash} tooltip={__('trash ticket')} />
		</div>
	);

	return (
		<SimpleEntityCard
			afterDetails={afterDetails}
			beforeDetails={beforeDetails}
			id={ticket.id}
			name={ticket.name}
			sidebar={sidebar}
		/>
	);
};

export default React.memo(TicketCard);
