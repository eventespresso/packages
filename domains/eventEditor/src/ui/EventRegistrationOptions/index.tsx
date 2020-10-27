import React from 'react';

import { __ } from '@eventespresso/i18n';
import { Grid, Heading } from '@eventespresso/components';

import ActiveStatus from './ActiveStatus';
import AltRegPage from './AltRegPage';
import DefaultRegistrationStatus from './DefaultRegistrationStatus';
import Donations from './Donations';
import EventPhoneNumber from './EventPhoneNumber';
import EventManager from './EventManager';
import MaxRegistrations from './MaxRegistrations';
import TicketSelectorCheckbox from './TicketSelector';

import './style.scss';

const columns = { base: 1, sm: 2, md: 4 };

const EventRegistrationOptions: React.FC = () => (
	<div className='ee-event-registration-options'>
		<Heading as='h3'>{__('Registration Options')}</Heading>

		<Grid columns={columns} spacing='1.25rem'>
			<ActiveStatus />
			<MaxRegistrations />
			<TicketSelectorCheckbox />
			<Donations />
			<DefaultRegistrationStatus />
			<EventManager />
			<EventPhoneNumber />
			<AltRegPage />
		</Grid>
	</div>
);

export default EventRegistrationOptions;
