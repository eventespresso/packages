import React from 'react';

import { CurrencyInput, SimpleEntityCard } from '@eventespresso/components';
import { BaseProps } from '../types';
import Sidebar from './Sidebar';

// import { useDatetime } from '../../context';

const TicketCard: React.FC<BaseProps> = ({ ticket }) => {
	const beforeDetails = <CurrencyInput id={ticket.id} amount={ticket.price} tag='h5' vertical />;
	// const datetime = useDatetime();

	const afterDetails = (
		<div className='ee-ticket-offset'>
			{/* <div>{sprintf(__('starts: %1$d %2$s before the start date'), startDuration, startUnit)}</div> */}
			{/* <div>{sprintf(__('ends: %1$d %2$s before the end date'), endDuration, endUnit)}</div> */}
		</div>
	);

	const sidebar = <Sidebar ticket={ticket} />;

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
