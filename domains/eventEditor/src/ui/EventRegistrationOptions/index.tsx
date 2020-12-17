import React from 'react';

import { __ } from '@eventespresso/i18n';
import { Grid, Heading } from '@eventespresso/components';
import { noop } from '@eventespresso/utils';
import { withFeature } from '@eventespresso/services';

import withData from './withData';
import ActiveStatus from './ActiveStatus';
import AltRegPage from './AltRegPage';
import DefaultRegistrationStatus from './DefaultRegistrationStatus';
import Donations from './Donations';
import EventManager from './EventManager';
import EventPhoneNumber from './EventPhoneNumber';
import MaxRegistrations from './MaxRegistrations';
import TicketSelector from './TicketSelector';

import type { RegistrationOptionsMetaBoxProps } from './types';

import './style.scss';

const columns = { base: 1, sm: 2, md: 4 };

const EventRegistrationOptions: React.FC<RegistrationOptionsMetaBoxProps> = ({
	allowDonations,
	altRegPage,
	displayTicketSelector,
	eventManagers,
	managerId,
	maxReg,
	onAltRegPageChange = noop,
	onDonationsChange,
	onManagerChange,
	onPhoneNumberChange,
	onTicketSelectorChange,
	onMaxRegChange = noop,
	phoneNumber,
}) => (
	<div className='ee-event-registration-options ee-edtr-section'>
		<Heading as='h3'>{__('Registration Options')}</Heading>
		<Grid columns={columns} spacing='1.25rem'>
			<ActiveStatus />

			<DefaultRegistrationStatus />

			<MaxRegistrations maxReg={maxReg} onMaxRegChange={onMaxRegChange} />

			<TicketSelector
				displayTicketSelector={displayTicketSelector}
				onTicketSelectorChange={onTicketSelectorChange}
			/>

			<Donations allowDonations={allowDonations} onDonationsChange={onDonationsChange} />

			<EventPhoneNumber phoneNumber={phoneNumber} onPhoneNumberChange={onPhoneNumberChange} />

			<EventManager eventManagers={eventManagers} managerId={managerId} onManagerChange={onManagerChange} />

			<AltRegPage altRegPage={altRegPage} onAltRegPageChange={onAltRegPageChange} />
		</Grid>
	</div>
);

export default withFeature('use_reg_options_meta_box')(withData(EventRegistrationOptions));
