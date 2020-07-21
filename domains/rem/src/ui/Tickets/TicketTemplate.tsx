import React, { useState, useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import { Ticket, useTickets } from '@eventespresso/edtr-services';
import { Button, SelectInput } from '@eventespresso/components';
import { getGuids, entitiesWithGuIdNotInArray, entitiesWithGuIdInArray } from '@eventespresso/predicates';
import { entityListToSelectOptions } from '@eventespresso/services';

import './style.scss';

interface Props {
	ticketTemplates: Ticket[];
	addTicketTemplate: (ticket: Ticket) => void;
}

const TicketTemplate: React.FC<Props> = ({ addTicketTemplate, ticketTemplates }) => {
	const [selectedTicketId, setSelectedTicketId] = useState('');

	const tickets = useTickets();

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
