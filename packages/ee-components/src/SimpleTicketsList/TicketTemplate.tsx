import { useState, useCallback, useMemo } from 'react';

import { __ } from '@eventespresso/i18n';
import { Button, Select } from '@eventespresso/ui-components';
import { entityListToSelectOptions } from '@eventespresso/utils';
// import { useTickets } from '@eventespresso/edtr-services';
import { getGuids, entitiesWithGuIdNotInArray, entitiesWithGuIdInArray } from '@eventespresso/predicates';
import type { Entity } from '@eventespresso/data';

import { EntityOptionsRow } from '../EntityOptionsRow';
import useTicketFormConfig from './useTicketFormConfig';
import { useFormState } from './hooks';

import './style.scss';

interface Props {
	onAddNew: VoidFunction;
}

interface Ticket extends Entity {}

const TicketTemplate: React.FC<Props> = ({ onAddNew }) => {
	const [selectedTicketId, setSelectedTicketId] = useState('');
	const { addTicket, tickets: defaultTickets } = useFormState();
	// const allTickets = useTickets();
	const allTickets = [];
	const ticketTemplates: Array<Ticket> = useMemo(() => Object.values(defaultTickets), [defaultTickets]);

	const filteredTickets = ticketTemplates.length
		? entitiesWithGuIdNotInArray(allTickets, getGuids(ticketTemplates))
		: allTickets;

	const onChangeValue = useCallback((value) => setSelectedTicketId(value), []);
	const options = entityListToSelectOptions(filteredTickets, { label: __('Select…'), value: '' });

	const [ticket] = entitiesWithGuIdInArray(allTickets, [selectedTicketId]);

	// convert Ticket to RemTicket
	const { initialValues: normalizedTicket } = useTicketFormConfig(ticket);
	const onClick = useCallback(() => addTicket(normalizedTicket), [addTicket, normalizedTicket]);

	const selectExistingID = 'existing-ticket';
	const selectExisting = (
		<>
			<Select id={selectExistingID} options={options} onChangeValue={onChangeValue} />
			<Button
				buttonText={__('Add')}
				isDisabled={!selectedTicketId || !filteredTickets?.length}
				noVerticalMargin
				onClick={onClick}
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
