import { useState, useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { entityListToSelectOptions } from '@eventespresso/utils';
import { useDisclosure } from '@eventespresso/hooks';
import { getGuids, entitiesWithGuIdNotInArray, entitiesWithGuIdInArray } from '@eventespresso/predicates';
import type { RemTicket, Ticket } from '@eventespresso/edtr-services';

import { EntityOptionsRow } from '../../';
import { Container as FormContainer } from './multiStep';

import './style.scss';
import useTicketFormConfig from './useTicketFormConfig';

export interface TicketTemplateProps {
	addTicket?: (ticket: Partial<RemTicket>) => void;
	defaultTickets: Array<Ticket>;
	ticketTemplates: Array<RemTicket>;
	addTicketTemplate: (ticket: Partial<RemTicket>) => void;
}

export const TicketTemplate: React.FC<TicketTemplateProps> = ({
	addTicketTemplate,
	defaultTickets,
	ticketTemplates,
}) => {
	const { isOpen, onClose, onOpen: onAddNew } = useDisclosure();
	const [selectedTicketId, setSelectedTicketId] = useState('');
	const onSelectChange = useCallback((value) => setSelectedTicketId(value), []);

	const filteredTickets = ticketTemplates.length
		? entitiesWithGuIdNotInArray(defaultTickets, getGuids(ticketTemplates))
		: defaultTickets;

	const options = entityListToSelectOptions(filteredTickets, { label: __('Select…'), value: '' });

	const [ticket] = entitiesWithGuIdInArray(defaultTickets, [selectedTicketId]);
	// convert Ticket to RemTicket
	const { initialValues: normalizedTicket } = useTicketFormConfig(ticket);
	const onSelect = useCallback(() => addTicketTemplate(normalizedTicket), [addTicketTemplate, normalizedTicket]);

	const isButtonDisabled = !selectedTicketId || !filteredTickets?.length;

	return (
		<EntityOptionsRow
			afterOptions={isOpen && <FormContainer isOpen={true} onClose={onClose} />}
			isSelectButtonDisabled={isButtonDisabled}
			onAddNew={onAddNew}
			onSelect={onSelect}
			onSelectChange={onSelectChange}
			options={options}
			type={'ticket'}
		/>
	);
};
