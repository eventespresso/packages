import React, { useState, useCallback } from 'react';
import { __ } from '@wordpress/i18n';
import { assoc } from 'ramda';

import { useTickets } from '@eventespresso/edtr-services';
import { Button, SelectInput } from '@eventespresso/components';
import { getGuids, entitiesWithGuIdNotInArray, entitiesWithGuIdInArray } from '@eventespresso/predicates';
import { entityListToSelectOptions } from '@eventespresso/services';
import { RemTicket } from '../../data';

import './style.scss';

interface Props {
	ticketTemplates: RemTicket[];
	addTicketTemplate: (ticket: RemTicket) => void;
}

const TicketTemplate: React.FC<Props> = ({ addTicketTemplate, ticketTemplates }) => {
	const [selectedTicketId, setSelectedTicketId] = useState('');

	// conver Apollo tickets to REM tickets
	// This is nothing but o make fool of TS ¯\_(ツ)_/¯
	const tickets = useTickets().map<RemTicket>(assoc('prices', []));

	const filteredTickets = ticketTemplates.length
		? entitiesWithGuIdNotInArray(tickets, getGuids(ticketTemplates))
		: tickets;

	const onChangeValue = useCallback((value) => setSelectedTicketId(value), []);

	const options = entityListToSelectOptions(filteredTickets, { label: __('Select...'), value: '' });

	const [ticket] = entitiesWithGuIdInArray(tickets, [selectedTicketId]);

	const onClick = useCallback(() => addTicketTemplate(ticket), [ticket, addTicketTemplate]);

	return (
		<div className='rem-tickets__template'>
			<p>{__('select an existing ticket to use as a template.')}</p>
			<div className='rem-tickets__template-input'>
				<SelectInput options={options} onChangeValue={onChangeValue} />
				<Button
					buttonText={__('Add')}
					onClick={onClick}
					isDisabled={!selectedTicketId || !filteredTickets?.length}
				/>
			</div>
		</div>
	);
};

export default TicketTemplate;
