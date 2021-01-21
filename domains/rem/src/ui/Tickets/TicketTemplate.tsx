import { useState, useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { Button, Select } from '@eventespresso/ui-components';
import { entityListToSelectOptions } from '@eventespresso/utils';
import { getGuids, entitiesWithGuIdNotInArray, entitiesWithGuIdInArray } from '@eventespresso/predicates';
import { useTickets } from '@eventespresso/edtr-services';

import { EntityOptionsRow } from '../EntityOptionsRow';
import type { RemTicket } from '../../data';
import useTicketFormConfig from './useTicketFormConfig';

import './style.scss';

interface Props {
	ticketTemplates: RemTicket[];
	addTicketTemplate: (ticket: Partial<RemTicket>) => void;
	onAddNew: VoidFunction;
}

const TicketTemplate: React.FC<Props> = ({ addTicketTemplate, ticketTemplates, onAddNew }) => {
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
			onAddNew={onAddNew}
			selectExisting={selectExisting}
			selectExistingID={selectExistingID}
			type='ticket'
		/>
	);
};

export default TicketTemplate;
