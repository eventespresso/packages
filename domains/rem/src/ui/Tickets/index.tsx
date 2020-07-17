import React, { Fragment } from 'react';
import { __ } from '@wordpress/i18n';
import { useDisclosure } from '@chakra-ui/core';

import { Button } from '@eventespresso/components';
import { EspressoForm } from '@eventespresso/form';
import { Plus } from '@eventespresso/icons';
import { useTickets } from '@eventespresso/edtr-services';

import FormWrapper from './FormWrapper';
import useTicketFormConfig from './useTicketFormConfig';
import TicketCard from './TicketCard';

import './style.scss';

const Tickets: React.FC = () => {
	const tickets = useTickets();
	const formConfig = useTicketFormConfig();
	const {
		isOpen,
		//  onClose,
		onOpen,
	} = useDisclosure();

	return (
		<>
			<div className='rem-ticket-list'>
				{tickets.map((ticket) => (
					<Fragment key={ticket.id}>
						<TicketCard ticket={ticket} />
					</Fragment>
				))}
				<Button buttonText={__('Add ticket')} className='ee-add-ticket-btn' icon={Plus} onClick={onOpen} />
			</div>
			{isOpen && <EspressoForm {...formConfig} formWrapper={FormWrapper} />}
		</>
	);
};

export default Tickets;
