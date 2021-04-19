import { __ } from '@eventespresso/i18n';
import { Grid, Heading } from '@eventespresso/ui-components';
import { noop } from '@eventespresso/utils';
import { withFeature } from '@eventespresso/services';

import ActiveStatus from './ActiveStatus';
import AltRegPage from './AltRegPage';
import DefaultRegistrationStatus from './DefaultRegistrationStatus';
import Donations from './Donations';
import EventManager from './EventManager';
import EventPhoneNumber from './EventPhoneNumber';
import MaxRegistrations from './MaxRegistrations';
import TicketSelector from './TicketSelector';
import withData from './withData';

import type { EventRegistrationOptionsProps } from './types';

import './style.scss';

const columns = { base: 1, sm: 2, md: 4 };

export const EventRegistrationOptions: React.FC<Partial<EventRegistrationOptionsProps>> = ({
	allowDonations,
	altRegPage,
	defaultRegStatus,
	displayTicketSelector,
	eventManagers,
	managerId,
	maxReg,
	onAltRegPageChange = noop,
	onDefaultRegStatusChange,
	onDonationsChange,
	onManagerChange,
	onPhoneNumberChange,
	onStatusChange,
	onTicketSelectorChange,
	onMaxRegChange = noop,
	phoneNumber,
	status,
}) => (
	<div className='ee-event-registration-options ee-edtr-section'>
		<Heading as='h3'>{__('Registration Options')}</Heading>
		<Grid columns={columns} spacing='1.25rem'>
			<ActiveStatus status={status} onStatusChange={onStatusChange} />

			<DefaultRegistrationStatus
				defaultRegStatus={defaultRegStatus}
				onDefaultRegStatusChange={onDefaultRegStatusChange}
			/>

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
