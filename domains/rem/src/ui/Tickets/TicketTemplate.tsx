import React, { useState, useCallback } from 'react';
import { useDisclosure } from '@chakra-ui/core';
import { __ } from '@eventespresso/i18n';

import { Button, Select } from '@eventespresso/components';
import { entityListToSelectOptions } from '@eventespresso/utils';
import { getGuids, entitiesWithGuIdNotInArray, entitiesWithGuIdInArray } from '@eventespresso/predicates';
import { useTickets } from '@eventespresso/edtr-services';

import { Container as FormContainer } from './multiStep';
import EntityOptionsRow from '../EntityOptionsRow';
import type { RemTicket } from '../../data';

import './style.scss';
import useTicketFormConfig from './useTicketFormConfig';

interface Props {
	ticketTemplates: RemTicket[];
	addTicketTemplate: (ticket: Partial<RemTicket>) => void;
}

const TicketTemplate: React.FC<Props> = ({ addTicketTemplate, ticketTemplates }) => {
	const { isOpen, onClose, onOpen: onAddNew } = useDisclosure();
	const [selectedTicketId, setSelectedTicketId] = useState('');

	const tickets = useTickets();

	const filteredTickets = ticketTemplates.length
		? entitiesWithGuIdNotInArray(tickets, getGuids(ticketTemplates))
		: tickets;

	const onChangeValue = useCallback((value) => setSelectedTicketId(value), []);
	const options = entityListToSelectOptions(filteredTickets, { label: __('Select…'), value: '' });

	const [ticket] = entitiesWithGuIdInArray(tickets, [selectedTicketId]);
	// convert Ticket to RemTicket
	const { initialValues: normalizedTicket } = useTicketFormConfig(ticket);
	const onClick = useCallback(() => addTicketTemplate(normalizedTicket), [addTicketTemplate, normalizedTicket]);

	const selectExistingID = 'existing-ticket';
	const selectExisting = (
		<>
			<Select id={selectExistingID} options={options} onChangeValue={onChangeValue} />
			<Button
				buttonText={__('Add')}
				onClick={onClick}
				isDisabled={!selectedTicketId || !filteredTickets?.length}
			/>
		</>
	);

	return (
		<EntityOptionsRow
			afterOptions={isOpen && <FormContainer isOpen={true} onClose={onClose} />}
			onAddNew={onAddNew}
			selectExisting={selectExisting}
			selectExistingID={selectExistingID}
			type={'ticket'}
		/>
	);
};

export default TicketTemplate;
