import React, { Fragment, useCallback, useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useDisclosure } from '@chakra-ui/core';

import { Button } from '@eventespresso/components';
import { EspressoForm } from '@eventespresso/form';
import { Plus } from '@eventespresso/icons';
import FormWrapper from './FormWrapper';
import ExistingTicketTemplate from './ExistingTicketTemplate';
import TicketCard from './TicketCard';
import useTicketFormConfig from './useTicketFormConfig';
import { Ticket } from '@eventespresso/edtr-services';

import './style.scss';

const Tickets: React.FC = () => {
	const [ticketTemplates, setTicketTemplates] = useState<Ticket[]>([]);

	const formConfig = useTicketFormConfig();
	const {
		isOpen,
		//  onClose,
		onOpen,
	} = useDisclosure();

	const addTicketTemplate = useCallback(
		(ticket) => {
			setTicketTemplates([...ticketTemplates, ticket]);
		},
		[ticketTemplates]
	);

	return (
		<>
			<div className='rem-ticket-list'>
				{ticketTemplates.map((ticket) => (
					<Fragment key={ticket?.id}>
						<TicketCard ticket={ticket} />
					</Fragment>
				))}
				<Button buttonText={__('Add ticket')} className='ee-add-ticket-btn' icon={Plus} onClick={onOpen} />
			</div>
			<ExistingTicketTemplate addTicketTemplate={addTicketTemplate} ticketTemplates={ticketTemplates} />
			{isOpen && <EspressoForm {...formConfig} formWrapper={FormWrapper} />}
		</>
	);
};

export default Tickets;
