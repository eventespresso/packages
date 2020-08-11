import React, { useState, useCallback } from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import { __ } from '@wordpress/i18n';

import { Button, SelectInput } from '@eventespresso/components';
import { entityListToSelectOptions } from '@eventespresso/services';
import { getGuids, entitiesWithGuIdNotInArray, entitiesWithGuIdInArray } from '@eventespresso/predicates';
import { Plus } from '@eventespresso/icons';
import { useTickets } from '@eventespresso/edtr-services';

import { Container as FormContainer } from './multiStep';
import EntityOptionsRow from '../EntityOptionsRow';
import { RemTicket } from '../../data';

import './style.scss';

interface Props {
	ticketTemplates: RemTicket[];
	addTicketTemplate: (ticket: RemTicket) => void;
}

const TicketTemplate: React.FC<Props> = ({ addTicketTemplate, ticketTemplates }) => {
	const { isOpen, onClose, onOpen: onAddNew } = useDisclosure();
	const [selectedTicketId, setSelectedTicketId] = useState('');

	// convert Apollo tickets to REM tickets
	// This is nothing but to make a fool of TS ¯\_(ツ)_/¯
	const tickets = useTickets().map<RemTicket>((ticket) => ({ ...ticket, prices: [], isShared: false }));

	const filteredTickets = ticketTemplates.length
		? entitiesWithGuIdNotInArray(tickets, getGuids(ticketTemplates))
		: tickets;

	const onChangeValue = useCallback((value) => setSelectedTicketId(value), []);
	const options = entityListToSelectOptions(filteredTickets, { label: __('Select...'), value: '' });

	const [ticket] = entitiesWithGuIdInArray(tickets, [selectedTicketId]);
	const onClick = useCallback(() => addTicketTemplate(ticket), [ticket, addTicketTemplate]);

	const addNewID = 'ee-add-new-ticket';
	const addNew = (
		<Button buttonText={__('Add New')} className='rem-tickets__form-btn' icon={Plus} onClick={onAddNew} />
	);

	const selectExistingID = 'ee-select-existing-ticket';
	const selectExisting = (
		<>
			<SelectInput id={selectExistingID} options={options} onChangeValue={onChangeValue} />
			<Button
				buttonText={__('Add')}
				onClick={onClick}
				isDisabled={!selectedTicketId || !filteredTickets?.length}
			/>
		</>
	);

	return (
		<EntityOptionsRow
			addNew={addNew}
			addNewID={addNewID}
			afterOptions={isOpen && <FormContainer isOpen={true} onClose={onClose} />}
			selectExisting={selectExisting}
			selectExistingID={selectExistingID}
			type={'ticket'}
		/>
	);
};

export default TicketTemplate;
