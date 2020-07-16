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

	const { startDuration, startUnit, startPosition, endDuration, endUnit, endPosition } = useOffset({
		datetime,
		ticket,
	});

	const afterDetails = (
		<div className='ee-ticket-offset'>
			<div>
				{
					/* translators: 1 duration (number), 2 unit e.g. hours, days etc. 3 position e.g. before or after */
					sprintf(__('starts: %1$d %2$s %3$s the start date'), startDuration, startUnit, startPosition)
				}
			</div>
			<div>
				{
					/* translators: 1 duration (number), 2 unit e.g. hours, days etc. 3 position e.g. before or after */
					sprintf(__('ends: %1$d %2$s %3$s the end date'), endDuration, endUnit, endPosition)
				}
			</div>
		</div>
	);

	return (
		<SimpleEntityCard afterDetails={afterDetails} beforeDetails={beforeDetails} id={ticket.id} name={ticket.name} />
	);
};

export default React.memo(TicketCard);
