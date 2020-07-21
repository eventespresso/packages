import React, { Fragment, useCallback } from 'react';

import { EspressoForm } from '@eventespresso/form';
import FormWrapper from './FormWrapper';
import TicketTemplate from './TicketTemplate';
import TicketCard from './TicketCard';
import useTicketFormConfig from './useTicketFormConfig';
import { useFormState } from '../../data';

import './style.scss';

const Tickets: React.FC = () => {
	const { addTicket, tickets } = useFormState();

	const onSubmit = useCallback(
		(values) => {
			console.log(values);
			addTicket(values);
		},
		[addTicket]
	);

	const formConfig = useTicketFormConfig({ onSubmit });

	return (
		<div className='rem-tickets'>
			<div className='rem-tickets__list'>
				{tickets.map((ticket) => (
					<Fragment key={ticket?.id}>
						<TicketCard ticket={ticket} />
					</Fragment>
				))}
			</div>
			<TicketTemplate addTicketTemplate={addTicket} ticketTemplates={tickets} />
			<EspressoForm {...formConfig} formWrapper={FormWrapper} />
		</div>
	);
};

export default Tickets;
